import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes } from "@/lib/site-data";

const rfqItems = [
  "Gerber files",
  "BOM",
  "Quantity",
  "PCB specifications",
  "Assembly requirements",
  "Testing requirements",
  "Target timeline",
  "Box build or final assembly notes, if applicable",
];

export function RFQGuidanceBlock() {
  return (
    <section className="home-section" aria-labelledby="rfq-guidance-title">
      <div className="home-section__inner">
        <SectionHeader
          label="RFQ guidance"
          title="What to Prepare for a PCB Assembly or EMS Quote"
          intro="A clear quote checklist helps buyers send the project information needed for PCBA, sourcing, testing, and EMS discussions."
        />

        <div className="grid-2">
          <article className="info-panel">
            <h3>Quote information checklist</h3>
            <ul className="rfq-checklist">
              {rfqItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel">
            <h3>Route the inquiry clearly</h3>
            <p>
              Send your files, BOM, quantity, and project requirements. Venture Electronics can review the
              information and help route your inquiry to the right PCBA, sourcing, testing, or box build path.
            </p>
            <div className="section-actions">
              <CTAButton href={routes.requestQuote}>Prepare Your RFQ</CTAButton>
              <CTAButton href={routes.contact} variant="secondary">
                Contact Venture Electronics
              </CTAButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
