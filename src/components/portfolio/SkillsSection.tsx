import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Technologies",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      icon: Palette,
      title: "Design & UI",
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "UI/UX Principles",
        "Material-UI",
        "Shadcn/ui",
        "Animation",
      ],
    },
    {
      icon: Zap,
      title: "Tools & Workflow",
      skills: [
        "Git & GitHub",
        "VS Code",
        "npm/yarn",
        "Webpack",
        "Vite",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        "Team Collaboration",
        "Problem Solving",
        "Communication",
        "Agile/Scrum",
        "Code Review",
        "Mentoring",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="size-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
