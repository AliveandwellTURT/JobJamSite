import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import logoImg from "../assets/jobjam-logo-new.png";

interface HeaderProps {
  onEnrollClick: () => void;
}

export default function Header({ onEnrollClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Courses", id: "courses" },
    { label: "FAQ", id: "faq" },
    { label: "Testimonials", id: "testimonials" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-background"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
            data-testid="button-home"
          >
            <img 
              src={logoImg} 
              alt="JobJam Logo" 
              className="h-14 w-auto object-cover mix-blend-multiply dark:mix-blend-screen" 
              style={{ 
                objectPosition: 'center', 
                clipPath: 'inset(20% 0% 35% 0%)',
                filter: 'brightness(1.02) contrast(1.1) saturate(1.1)'
              }}
            />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={onEnrollClick}
              className="hidden sm:inline-flex"
              data-testid="button-enroll-header"
            >
              Book a call
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={onEnrollClick}
                className="w-full"
                data-testid="button-enroll-mobile"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
