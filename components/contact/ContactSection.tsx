import { Button } from "@/components/ui/Button";

// CHANGE ME — real contact details.
const CONTACT = {
  email: "sreenandanapa16@gmail.com",
  github: "https://github.com/srreeenn",
  linkedin: "https://linkedin.com/in/srreeenn",
  resume: "/resume.pdf", /////// add resume
};

// PRD.md §17: "Simple. Contains: Email, GitHub, LinkedIn, Resume, Closing
// message. No unnecessary contact form."
export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        contact.exe
      </h2>

      <p className="max-w-lg text-sm text-text-secondary">
        Always open to interesting problems and good teams. Reach out — I
        read everything.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`mailto:${CONTACT.email}`}>email me</Button>
        <Button variant="ghost" href={CONTACT.github} target="_blank" rel="noreferrer">
          github
        </Button>
        <Button variant="ghost" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </Button>
        <Button variant="ghost" href={CONTACT.resume} target="_blank" rel="noreferrer">
          resume
        </Button>
      </div>
    </section>
  );
}
