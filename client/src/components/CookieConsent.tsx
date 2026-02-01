import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4" data-testid="cookie-consent">
      <Card className="border-2">
        <CardContent className="pt-6 relative">
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 p-1 hover-elevate active-elevate-2 rounded"
            data-testid="button-close-cookie"
          >
            <X className="h-4 w-4" />
          </button>
          
          <h3 className="font-semibold mb-2 pr-6">We use cookies</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to improve your experience and analyze site usage. By continuing,
            you agree to our use of cookies.{" "}
            <a href="#privacy" className="text-ring hover:underline">
              Learn more
            </a>
          </p>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1"
              data-testid="button-accept-cookies"
            >
              Accept
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecline}
              className="flex-1"
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
