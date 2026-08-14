import Monogram from "./Monogram";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-purple text-white/70 py-14 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Monogram size={84} animate={false} className="text-gold" />
          <span className="font-display text-white text-sm">
            Lesora Creative
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center gap-4 font-sans text-[11px] tracking-[0.2em] uppercase">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="font-sans text-[11px] tracking-wide text-white/40">
            &copy; {new Date().getFullYear()} Lesora Creative. Make your mark.
          </p>
        </div>
      </div>
    </footer>
  );
}
