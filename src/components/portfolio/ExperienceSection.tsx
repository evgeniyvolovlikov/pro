import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Lead frontend development for enterprise SaaS platform serving 10,000+ users. Architected and implemented reusable component library, reducing development time by 40%. Mentored junior developers and conducted code reviews.",
      highlights: [
        "Built scalable component architecture with React and TypeScript",
        "Improved application performance by 60% through optimization",
        "Led migration from JavaScript to TypeScript",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2021 - 2022",
      description:
        "Developed responsive websites and web applications for diverse clients across various industries. Collaborated with designers and backend teams to deliver high-quality products on time.",
      highlights: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Implemented modern CSS techniques and animations",
        "Integrated third-party APIs and services",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupHub Inc",
      period: "2020 - 2021",
      description:
        "Contributed to the development of an e-commerce platform from ground up. Worked closely with senior developers to learn best practices and modern development workflows.",
      highlights: [
        "Developed responsive UI components using React",
        "Implemented state management with Redux",
        "Participated in agile development process",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Work Experience</h2>
            <p className="text-muted-foreground">
              My professional journey in frontend development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-[9px] size-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="bg-card rounded-lg p-6 border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="size-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
