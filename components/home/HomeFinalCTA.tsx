import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function HomeFinalCTA() {
  return (
    <section className="home-section home-section--dark" aria-labelledby="home-final-cta-title">
      <div className="home-section__inner">
        <div className="dark-panel final-cta-panel">
          <h2 id="home-final-cta-title">Ready to Discuss a PCB Assembly or EMS Project?</h2>
          <p>
            Send your files, BOM, quantity, and project requirements. Venture Electronics can review the
            information and help route your inquiry to the right PCBA, sourcing, testing, or box build path.
          </p>
          <div className="section-actions">
            <CTAButton href={routes.requestQuote}>Request a Quote</CTAButton>
            <CTAButton href={routes.contact} variant="dark">
              Contact Venture Electronics
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
