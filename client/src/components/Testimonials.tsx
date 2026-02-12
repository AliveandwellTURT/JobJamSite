import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@assets/generated_images/Testimonial_portrait_young_woman_9ce76adb.png";
import testimonial2 from "@assets/generated_images/Testimonial_portrait_young_man_27deebee.png";
import testimonial3 from "@assets/generated_images/Testimonial_portrait_diverse_youth_d1b8c25d.png";

const testimonials = [
  {
    name: "louis",
    role: "Life Nooby",
    image: testimonial1,
    quote: "Best dad ever",
  },
  {
    name: "James Patel",
    role: "Junior Developer",
    image: testimonial2,
    quote: "The mock interviews were exactly what I needed. JobJam helped me go from no responses to three job offers in just 8 weeks. Couldn't recommend it more!",
  },
  {
    name: "Alex Morgan",
    role: "Customer Service Rep",
    image: testimonial3,
    quote: "As a first-time jobseeker, I had no idea where to start. The 12-month plan gave me the confidence and skills to land my dream job. Best investment I've made.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card" data-testid="section-testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Success stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from people who have had Rohan's coaching and success
          </p>
        </div>

        <Card className="relative">
          <CardContent className="pt-8 pb-12 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-24 h-24 border-4 border-background">
                  <AvatarImage src={current.image} alt={current.name} />
                  <AvatarFallback>{current.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-lg mb-4" data-testid="text-testimonial-quote">
                  "{current.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground" data-testid="text-testimonial-name">
                    {current.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="text-testimonial-role">
                    {current.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={prevTestimonial}
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-ring w-8" : "bg-muted"
                    }`}
                    data-testid={`button-testimonial-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                size="icon"
                variant="outline"
                onClick={nextTestimonial}
                data-testid="button-next-testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
