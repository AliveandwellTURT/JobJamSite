import { Button } from "@/components/ui/button";

interface CTAProps {
  onEnrollClick: () => void;
}

export default function CTA({ onEnrollClick }: CTAProps) {
  return (
    <section className="py-20 md:py-24 bg-primary text-primary-foreground" data-testid="section-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          Ready to land your first job?
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Join 1,500+ successful jobseekers who've launched their careers with JobJam.
          Your future starts here.
        </p>
        <Button
          size="lg"
          onClick={onEnrollClick}
          className="bg-accent text-accent-foreground hover:bg-accent border border-accent-border"
          data-testid="button-enroll-cta"
        >
          Enrol now
        </Button>
      </div>
    </section>
  );
}
