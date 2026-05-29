import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes } from "@/lib/site-data";

export function VentureIdentityBlock() {
  return (
    <section className="home-section home-section--white" aria-labelledby="venture-identity-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Who Venture Electronics Is"
          title="A PCBA-first electronics manufacturing partner under the Venture Electronics brand"
          intro="This block makes the company identity and brand relationship visible in crawlable HTML text."
        />

        <div className="grid-2">
          <article className="info-panel">
            <h3>Mother brand and service scope</h3>
            <p>
              Venture Electronics is the mother brand for Venture's PCB assembly, PCBA, EMS, box build,
              component sourcing, and electronics manufacturing support services.
            </p>
            <p>
              Venture PCB and Venture PCBA are service-entry and search-entry concepts connected to Venture
              Electronics, not replacements for the mother brand.
            </p>
          </article>

          <article className="info-panel">
            <h3>Related identity pages</h3>
            <p>
              The About and Brand Clarification routes can expand this explanation later without turning the
              homepage into a full sitemap.
            </p>
            <div className="section-actions">
              <CTAButton href={routes.about} variant="secondary">
                About Venture Electronics
              </CTAButton>
              <CTAButton href={routes.brandClarification} variant="secondary">
                Venture Electronics vs Venture PCB / Venture PCBA
              </CTAButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
