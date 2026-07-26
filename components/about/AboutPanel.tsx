import { Panel } from "@/components/ui/Panel";

// PLACEHOLDER COPY — replace each block with your own words.
// PRD.md §12: "No large paragraphs" — keep every block to 2-3 sentences.
const BLOCKS = [
  {
    label: "bio",
    text: "Full-stack developer based in Kerala, building scalable web applications with modern frontend technologies, microservices, and a growing interest in AI-powered software.",
  },
  {
    label: "current focus",
    text: "Building projects that combine clean design, solid engineering, and real-world problem solving. Learning by shipping, iterating, and improving every release.",
  },
  {
    label: "interests",
    text: "Coding, Anime, Movies, Music, UI Design, Photography, Travel.",
  },
  {
    label: "currently learning",
    text: "System Design, Docker, CI/CD, Cloud Fundamentals, SEO, Japanese Language.",
  },
];

// Previously 4 separate Panel boxes in a grid — consolidated into one panel
// with plain labeled rows and hairline dividers between them, so it reads
// as one block of content instead of four stacked cards.
export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        about.me
      </h2>
      <Panel className="divide-y divide-border-subtle !p-0">
        {BLOCKS.map((block) => (
          <div key={block.label} className="px-6 py-4 first:pt-6 last:pb-6">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {block.label}
            </p>
            <p className="mt-1 text-sm text-text-secondary">{block.text}</p>
          </div>
        ))}
      </Panel>
    </section>
  );
}
