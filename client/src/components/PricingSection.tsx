import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onEnrollClick: (course: string) => void;
}

const courses = [
  {
    name: "15 Minute Career Chat",
    price: "FREE",
    payment: "$0",
    description: "Perfect for understanding your career options",
    features: [
      "Access to monthly events",
      "CV review and recomendations",
      "A career and salary assessment",
    ],
    cta: "Book a call",
    featured: false,
  },
  {
    name: "8 Month Support Plan",
    price: "$0-$3,000",
    payment: "$0 upfront, $3,000 after securing a job",
    description: "Comprehensive support until you land your job",
    features: [
      "$0 upfront, $3,000 after securing a job",
      "Fortnightly check-ins and coaching",
      "Full interview preparation",
      "CV and cover letter support",
      "Salary negotiation training",
      "LinkedIn profile optimization",
      "Over 10,000 Industry connections",
      "Job search strategy sessions",
      "100% FREE if you do not land a job",
    ],
    cta: "Book a call",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "4 Month Fast Path",
    price: "$0-$6,000",
    payment: "0 upfront + $6,000 after securing a job",
    description: "Accelerated program with priority support",
    features: [
      "0 upfront + $6,000 after securing a job",
      "Everything in 8 Month Plan",
      "Priority support access",
      "Weekly coaching sessions",
      "LinkedIn approach support",
      "Introduction letter support",
      "Detailed networking support",
      "100% FREE if you do not land a job",
    ],
    cta: "Book a call",
    featured: false,
  },
];

export default function PricingSection({ onEnrollClick }: PricingSectionProps) {
  return (
    <section
      id="courses"
      className="py-16 md:py-20 bg-card"
      data-testid="section-pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Choose your path to success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include expert coaching from someone who's helped 1,500+
            people land their dream job
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
                <CardTitle className="font-heading text-2xl">
                  {course.name}
                </CardTitle>
                <CardDescription>{course.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-heading font-bold text-foreground">
                    {course.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Contract sent after interview
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
                  Book a call
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-foreground">
            Our promise: Get a job within your plan's timeframe or it's free!
          </p>
        </div>
      </div>
    </section>
  );
}
