import { Button } from "../ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export function PortfolioHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            Frontend Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6">
            Привет, Ирочка, Добрых снов
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Терпение и труд
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 size-4" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:alex.chen@example.com"
              className="size-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
