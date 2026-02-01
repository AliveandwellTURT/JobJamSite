import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueSection from "@/components/ValueSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnrollDialog from "@/components/EnrollDialog";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();

  const handleEnrollClick = (course?: string) => {
    setSelectedCourse(course);
    setEnrollDialogOpen(true);
  };

  const handleCoursesClick = () => {
    const element = document.getElementById("courses");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onEnrollClick={() => handleEnrollClick()} />
      
      <main>
        <Hero
          onEnrollClick={() => handleEnrollClick()}
          onCoursesClick={handleCoursesClick}
        />
        <ValueSection />
        <PricingSection onEnrollClick={handleEnrollClick} />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <About />
        <CTA onEnrollClick={() => handleEnrollClick()} />
        <Contact />
      </main>

      <Footer />
      
      <EnrollDialog
        open={enrollDialogOpen}
        onOpenChange={setEnrollDialogOpen}
        selectedCourse={selectedCourse}
      />
      
      <CookieConsent />
    </div>
  );
}
