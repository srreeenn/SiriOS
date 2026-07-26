import { Mail, FileText } from "lucide-react";

// CHANGE ME — real contact details.
const CONTACT = {
  email: "sreenandanapa16@gmail.com",
  whatsapp: "https://wa.me/918921242481", // TODO: replace with real number
  github: "https://github.com/srreeenn",
  linkedin: "https://linkedin.com/in/srreeenn",
  resume: "/resume.pdf",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.15.26.1 1.65.78 1.93.92.29.14.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.35V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
    </svg>
  );
}

const LINKS = [
  { label: "email me", href: `mailto:${CONTACT.email}`, icon: Mail },
  {
    label: "whatsapp",
    href: CONTACT.whatsapp,
    icon: WhatsAppIcon,
    external: true,
  },
  { label: "github", href: CONTACT.github, icon: GithubIcon, external: true },
  {
    label: "linkedin",
    href: CONTACT.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  { label: "resume", href: CONTACT.resume, icon: FileText, external: true },
];

// PRD.md §17: "Simple. Contains: Email, GitHub, LinkedIn, Resume, Closing
// message. No unnecessary contact form."
export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl border border-border-subtle bg-bg-elevated">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            contact.exe
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[var(--glow-sm)]" />
            available for opportunities
          </span>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <p className="max-w-lg text-sm text-text-secondary md:text-base">
          Messages from curious minds and great teams are always welcome.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {LINKS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="group flex h-14 w-14 items-center justify-center border border-border-subtle text-text-secondary transition-all duration-[var(--duration-fast)] hover:border-accent hover:text-accent hover:shadow-[var(--glow-md)]"
              >
                <Icon className="h-6 w-6 transition-transform duration-[var(--duration-fast)] group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}