import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function BrandClarificationTeaser() {
  return (
    <section className="home-section home-section--white" aria-labelledby="brand-clarification-title">
      <div className="home-section__inner teaser-row">
        <div>
          <h2 id="brand-clarification-title">Brand & Business Line Clarification</h2>
          <p>
            A first-build brand authority page explains how Venture Electronics, Venture PCB, Venture PCBA,
            domains, and service-line wording relate to one another.
          </p>
        </div>
        <CTAButton href={routes.brandClarification} variant="secondary">
          View Brand Clarification
        </CTAButton>
      </div>
    </section>
  );
}
