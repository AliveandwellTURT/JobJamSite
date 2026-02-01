import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onEnrollClick: (course: string) => void;
}

const courses = [
  {
    name: "2-Hour Intro",
    price: "$300",
    payment: "One-time payment",
    description: "Perfect for those wanting a quick start",
    features: [
      "2 hours of live coaching",
      "CV review and checklist",
      "Mock interview session",
      "Email support for 1 week",
    ],
    cta: "Enrol now",
    featured: false,
  },
  {
    name: "12-Month Support Plan",
    price: "$3,000",
    payment: "$500 upfront + $500/mo × 5",
    description: "Comprehensive support until you land your job",
    features: [
      "Weekly check-ins and coaching",
      "Full interview preparation",
      "CV and cover letter support",
      "Salary negotiation training",
      "Job search strategy sessions",
      "100% money-back guarantee",
    ],
    cta: "Sign up",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "6-Month Fast Path",
    price: "$6,000",
    payment: "$1,000 upfront + $1,000/mo × 5",
    description: "Accelerated program with priority support",
    features: [
      "Everything in 12-Month Plan",
      "Priority 24/7 support access",
      "Twice-weekly coaching sessions",
      "LinkedIn profile optimization",
      "Industry connections & referrals",
      "100% money-back guarantee",
    ],
    cta: "Buy now",
    featured: false,
  },
];

export default function PricingSection({ onEnrollClick }: PricingSectionProps) {
  return (
    <section id="courses" className="py-16 md:py-20 bg-card" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Choose your path to success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include expert coaching from someone who's helped 1,500+ people land their first job
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`relative flex flex-col hover-elevate transition-all duration-300 ${
                course.featured ? "border-ring shadow-lg" : ""
              }`}
              data-testid={`card-course-${index}`}
            >
              {course.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-ring text-primary-foreground px-3 py-1">
                    {course.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-heading font-bold text-foreground">
                    {course.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Invoice sent after interview
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-ring flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={course.featured ? "default" : "outline"}
                  onClick={() => onEnrollClick(course.name)}
                  data-testid={`button-enroll-${index}`}
                >
                  Apply for interview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-foreground">
            Our promise: Get a job within your plan's timeframe or your money back.
          </p>
        </div>
      </div>
    </section>
  );
}
