import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
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

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@lesoracreative.com";

  if (!serviceId || !templateId || !(privateKey || publicKey)) {
    console.error("Missing EmailJS configuration.");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const payload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      template_params: {
        from_name: name.trim(),
        from_email: email.trim(),
        company: company?.trim() || "Not provided",
        message: message.trim(),
        to_email: toEmail,
      },
    };

    if (privateKey) {
      payload.accessToken = privateKey;
    } else {
      payload.user_id = publicKey;
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS error:", response.status, errorText);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
