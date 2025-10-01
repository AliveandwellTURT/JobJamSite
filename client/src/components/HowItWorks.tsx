import { CheckCircle, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Sign up for the course",
    description: "Choose the plan that fits your goals and get started immediately with your personalized onboarding.",
  },
  {
    icon: Users,
    title: "Complete your training + mock interviews",
    description: "Work through structured coaching sessions, practice interviews, and build the skills you need to succeed.",
  },
  {
    icon: Briefcase,
    title: "Ongoing support until you land a job",
    description: "Get continuous guidance through applications, interviews, and negotiations until you accept your offer.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your path from uncertain to employed in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
              data-testid={`step-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-ring text-primary-foreground flex items-center justify-center text-xl font-heading font-bold">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-ring" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
