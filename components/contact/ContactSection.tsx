import { Button } from "@/components/ui/Button";

// CHANGE ME — real contact details.
const CONTACT = {
  email: "sreenandanapa16@gmail.com",
  whatsapp: "https://wa.me/918921242481", // TODO: replace with real number
  github: "https://github.com/srreeenn",
  linkedin: "https://linkedin.com/in/srreeenn",
  resume: "/resume.pdf",            //TODO: RESUME
};

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
            Connection established.
            Messages from curious minds and great teams are always welcome.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${CONTACT.email}`}>email me</Button>
            <Button
              variant="ghost"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              whatsapp
            </Button>
            <Button
              variant="ghost"
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              github
            </Button>
            <Button
              variant="ghost"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </Button>
            <Button
              variant="ghost"
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer"
            >
              resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}