
import { Hero } from "@/components/hero/Hero";
import { AboutPanel } from "@/components/about/AboutPanel";
import { GitHubSection } from "@/components/github/GitHubSection";
import { QuickStats } from "@/components/github/QuickStats";
import { SkillsModules } from "@/components/skills/SkillsModules";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Timeline } from "@/components/journey/Timeline";
import { ContactSection } from "@/components/contact/ContactSection";
 
export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-14">
      <Hero />
      </section>
 
      {/* AboutPanel renders its own <section id="about"> with its own
         padding/grid — kept as a standalone full-width section rather than
         nested inside another one. */}
      <AboutPanel />
 
      {/* github activity / quick stats row, per WIREFRAMES.md grouping
         these near the top rather than down by Contact. */}
      <section className="grid gap-4 px-4 pb-16 md:px-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GitHubSection />
        </div>
        <QuickStats />
      </section>
 
      <SkillsModules />
      <FeaturedProjects />
      <Timeline />
      <ContactSection />
    </main>
  );
}
 
