import { CheckCircle, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Book a call",
    description: "Fill out the simple form to express your interest in a course.",
  },
  {
    icon: Users,
    title: "15 minute chat",
    description: "Meet with Rohan for a brief chat to ensure the program is the right fit for you.",
  },
  {
    icon: Briefcase,
    title: "Contract & Enrolment",
    description: "Receive your contract, read it carefully, sign it, and start your journey to a new career.",
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
