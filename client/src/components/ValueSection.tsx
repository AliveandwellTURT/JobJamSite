import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, DollarSign, User } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Interview practice that feels real",
    description:
      "Mock interviews with real time feedback, helping you feel confident and prepared for the actual thing.",
  },
  {
    icon: DollarSign,
    title: "Salary & negotiation training",
    description:
      "Learn how to understand your worth, present your value, and negotiate your first salary with confidence.",
  },
  {
    icon: User,
    title: "One-to-one guidance during your job hunt",
    description:
      "Personal support throughout your entire journey, from applications to accepting your offer.",
  },
];

export default function ValueSection() {
  return (
    <section className="py-16 md:py-20" data-testid="section-value">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-benefit-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-ring" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
