import founderImage from "@assets/generated_images/Founder_Rohan_Wakefield_headshot_a2be957d.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-card" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            About Jobjam
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded on experience, driven by results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground">
                With <span className="font-semibold text-foreground">15+ years of experience</span>,{" "}
                <span className="font-semibold text-foreground">3,000+ interviews</span>, and{" "}
                <span className="font-semibold text-foreground">1,500+ placements</span>, I created Jobjam to help people feel confident, capable, and in charge of their job hunt.
              </p>
              <p className="text-muted-foreground">
                I’ve seen how daunting the job market can be, whether you’re starting out, changing direction, or pushing for your next step. That’s why I built a program that combines practical skills with ongoing support, so you’re not navigating it alone
              </p>
              <p className="text-muted-foreground">
                Whether you’re starting out, changing direction, or aiming for a raise, Jobjam helps you take control of your career with confidence and direction.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Rohan Wakefield</p>
                <p className="text-sm text-muted-foreground">Founder, Jobjam</p>
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
