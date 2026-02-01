import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_coaching_session_image_22124624.png";

interface HeroProps {
  onEnrollClick: () => void;
  onCoursesClick: () => void;
}

export default function Hero({ onEnrollClick, onCoursesClick }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-card"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Get your first job — with real coaching, real confidence, and a{" "}
              <span className="text-accent">100% guarantee</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Over 12 years helping 1,500+ people. Interview practice, salary negotiation,
              and ongoing support for first-time jobseekers in NZ.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={onEnrollClick}
                data-testid="button-enroll-hero"
              >
                Enrol now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onCoursesClick}
                data-testid="button-courses-hero"
              >
                See courses & prices
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
            <img
              src={heroImage}
              alt="Young person receiving coaching support for their first job interview"
              className="rounded-lg w-full h-auto object-cover"
              data-testid="img-hero"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2" data-testid="stat-experience">
              <span className="font-semibold text-foreground">12+ years</span> experience
            </div>
            <div className="hidden sm:block text-muted-foreground/50">•</div>
            <div className="flex items-center gap-2" data-testid="stat-placements">
              <span className="font-semibold text-foreground">1,500+</span> people placed
            </div>
            <div className="hidden sm:block text-muted-foreground/50">•</div>
            <div className="flex items-center gap-2" data-testid="stat-interviews">
              <span className="font-semibold text-foreground">3,000+</span> interviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
