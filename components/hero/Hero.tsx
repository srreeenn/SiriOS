import { AsciiPortrait } from "./AsciiPortrait";

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 items-center gap-12">
      <div>
        <h1>Hi, I'm Sree</h1>
        <p>Software Engineer...</p>
      </div>

      <AsciiPortrait
        src="/assets/portrait.png"
        alt="Sree Portrait"
      />
    </section>
  );
}