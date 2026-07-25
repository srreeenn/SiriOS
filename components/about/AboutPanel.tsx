import { Panel } from "@/components/ui/Panel";

// PLACEHOLDER COPY — replace each block with your own words.
// PRD.md §12: "No large paragraphs" — keep every block to 2-3 sentences.
const BLOCKS = [
  {
    label: "bio",
    text: "Full-stack developer based in Kerala, building interfaces that feel considered rather than templated.",
  },
  {
    label: "philosophy",
    text: "Good engineering is invisible; good design is memorable. Aim for both at once.",
  },
  {
    label: "interests",
    text: "Anime, terminal aesthetics, and the occasional 2am refactor.",
  },
  {
    label: "currently learning",
    text: "Rust and distributed systems design.",
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
