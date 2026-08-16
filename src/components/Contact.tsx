"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, AtSign } from "lucide-react";
import Monogram from "./Monogram";

type FormStatus = "idle" | "loading" | "success" | "error";


const inputStyles =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-3 font-sans text-[15px] text-charcoal placeholder:text-stone/60 transition-colors";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative bg-white py-28 lg:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-purple">
            Let&rsquo;s build your
            <br />
            <span className="italic text-gold">next chapter.</span>
          </h2>
          <p className="mt-6 font-sans text-stone text-[15px] leading-relaxed max-w-sm">
            Tell us about your business and where you want it to go. We
            reply to every enquiry within one business day.
          </p>

          <div className="mt-10 space-y-5 font-sans text-sm">
            <a
              href="mailto:hello@lesoracreative.com"
              className="flex items-center gap-3 text-charcoal/80 hover:text-purple transition-colors"
            >
              <Mail size={18} strokeWidth={1.5} className="text-gold" />
               lesoracreative@gmail.com
            </a>
            <div className="flex items-center gap-3 text-charcoal/80">
              <MapPin size={18} strokeWidth={1.5} className="text-gold" />
              Serving clients locally &amp; globally
            </div>
            <a
              href="https://instagram.com/lesoracreative"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-charcoal/80 hover:text-purple transition-colors"
            >
              <AtSign size={18} strokeWidth={1.5} className="text-gold" />
              @lesoracreative
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          {status === "success" ? (
            <div className="border border-gold/40 bg-gold/5 p-10 text-center">
              <Monogram size={144} className="mx-auto" animate={false} />
              <p className="mt-6 font-display text-2xl text-purple">Message sent.</p>
              <p className="mt-2 font-sans text-stone text-sm">
                Thank you for reaching out — we&rsquo;ll be in touch within
                one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-sans text-[11px] tracking-[0.2em] uppercase text-purple hover:text-gold transition-colors button-pop"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="sr-only">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company (optional)"
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  className={`${inputStyles} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="font-sans text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-3 bg-purple text-white px-8 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-purple/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed button-pop"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
