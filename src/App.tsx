import { PortfolioHeader } from "./components/portfolio/PortfolioHeader";
import { PortfolioHero } from "./components/portfolio/PortfolioHero";
import { AboutSection } from "./components/portfolio/AboutSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { ExperienceSection } from "./components/portfolio/ExperienceSection";
import { ProjectsSection } from "./components/portfolio/ProjectsSection";
import { ContactSection } from "./components/portfolio/ContactSection";
import { PortfolioFooter } from "./components/portfolio/PortfolioFooter";

export default function App() {
  return (
    <div className="size-full bg-background">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
