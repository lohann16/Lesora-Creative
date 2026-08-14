import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic shape validation. Keep this file free of any framework "magic" so
// it's easy to swap Resend for another provider later if needed.
type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  // honeypot — real users never fill this in; bots often do
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message, website } = body;

  // Honeypot: silently "succeed" so bots don't learn anything, but do nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

  try {
    const { error } = await resend.emails.send({
      // Must be a verified sender/domain in your Resend account.
      from: "Lesora Creative Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #1A1A1A; line-height: 1.6;">
          <h2 style="color:#2B1B3D; margin-bottom: 4px;">New website enquiry</h2>
          <p style="margin:0 0 16px; color:#6B6B6B;">via lesoracreative.com contact form</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
