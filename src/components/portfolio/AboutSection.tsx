import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a frontend developer with a passion for creating intuitive and engaging
                user experiences. Over the past 4 years, I've worked on diverse projects
                ranging from e-commerce platforms to SaaS applications.
              </p>
              <p>
                My expertise lies in building responsive, accessible, and performant web
                applications using modern frameworks and best practices. I believe in writing
                clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMTU4NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
