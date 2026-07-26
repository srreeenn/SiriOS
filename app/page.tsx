import { Hero } from "@/components/hero/Hero";
import { AboutPanel } from "@/components/about/AboutPanel";
import { GitHubSection } from "@/components/github/GitHubSection";
import { QuickStats } from "@/components/github/QuickStats";
import { SkillsModules } from "@/components/skills/SkillsModules";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Timeline } from "@/components/journey/Timeline";
import { ContactSection } from "@/components/contact/ContactSection";
import { HomeContent } from "@/components/layout/HomeContent";

export default function Home() {
  return (
    <HomeContent
      home={<Hero />}
      about={
        <>
          <AboutPanel />
          <section className="px-4 pb-16 md:px-8">
            <QuickStats />
          </section>
        </>
      }
      projects={
        <>
          <FeaturedProjects />
          <section className="px-4 pb-16 md:px-8">
            <GitHubSection compact />
          </section>
        </>
      }
      skills={<SkillsModules />}
      journey={<Timeline />}
      contact={<ContactSection />}
    />
  );
}