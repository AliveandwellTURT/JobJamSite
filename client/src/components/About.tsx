import founderImage from "@assets/generated_images/Founder_Rohan_Wakefield_headshot_a2be957d.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-card" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            About JobJam
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded on experience, driven by results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground">
                With <span className="font-semibold text-foreground">12+ years of experience</span>,{" "}
                <span className="font-semibold text-foreground">3,000+ interviews</span>, and{" "}
                <span className="font-semibold text-foreground">1,500+ placements</span>, I created
                JobJam to help young people navigate their first job search with confidence.
              </p>
              <p className="text-muted-foreground">
                I've seen firsthand how daunting the job market can be for first-time seekers. That's
                why I built a program that combines practical skills with ongoing support — so you're
                never alone in your journey.
              </p>
              <p className="text-muted-foreground">
                Whether you're fresh out of school, graduating university, or looking for your first
                professional role, JobJam gives you the coaching, confidence, and tools you need to
                succeed.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Rohan Wakefield</p>
                <p className="text-sm text-muted-foreground">Founder, JobJam</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={founderImage}
              alt="Rohan Wakefield, founder of JobJam"
              className="rounded-lg w-80 h-80 object-cover"
              data-testid="img-founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
