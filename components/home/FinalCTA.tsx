import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function FinalCTA() {
  return (
    <section className="home-section home-section--dark" aria-labelledby="final-cta-title">
      <div className="home-section__inner">
        <div className="dark-panel">
          <h2 id="final-cta-title">Ready for the Stage 3 RFQ and content pass.</h2>
          <p>
            This scaffold validates architecture, service responsibility, route hierarchy, navigation, footer
            groups, and public-safe placeholder copy before final page writing.
          </p>
          <div className="section-actions">
            <CTAButton href={routes.contact}>Request a Quote</CTAButton>
            <CTAButton href={routes.faq} variant="dark">
              View FAQ / Resources
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
