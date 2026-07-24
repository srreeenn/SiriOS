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

export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        about.me
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {BLOCKS.map((block) => (
          <Panel key={block.label} tag={block.label}>
            <p className="text-sm text-text-secondary">{block.text}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}
