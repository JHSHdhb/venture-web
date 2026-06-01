import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

const buyerNeeds = [
  "PCB assembly for new electronics projects",
  "BOM and Gerber review before quotation",
  "Turnkey assembly support",
  "Prototype or low-volume builds",
  "Testing requirements before delivery",
];

export function PCBAPrimaryBlock() {
  return (
    <section className="pcba-primary" aria-labelledby="pcba-primary-title">
      <div className="pcba-primary__inner">
        <div className="pcba-primary__grid">
          <div className="pcba-primary__intro">
            <p className="pcba-primary__eyebrow">Primary service entry</p>
            <h2 id="pcba-primary-title" className="pcba-primary__title">
              Start with <span className="pcba-primary__accent">PCB Assembly / PCBA</span>
            </h2>
            <p className="pcba-primary__lead">
              For most electronics projects, PCB assembly is the practical starting point. Venture
              supports PCBA projects with assembly coordination, BOM review, sourcing support, and
              testing requirements.
            </p>
            <div className="pcba-primary__actions">
              <CTAButton href={routes.requestQuote}>
                Request a PCBA Quote
                <span aria-hidden="true" className="cta-arrow">→</span>
              </CTAButton>
              <CTAButton href={routes.pcba} variant="secondary">
                View PCBA Page
              </CTAButton>
            </div>
          </div>

          <aside className="pcba-card" aria-label="PCB Assembly / PCBA — common buyer needs">
            <span className="pcba-card__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <rect x="15" y="15" width="18" height="18" rx="2.5" />
                <rect x="21" y="21" width="6" height="6" rx="1" />
                <line x1="20" y1="15" x2="20" y2="10" />
                <line x1="24" y1="15" x2="24" y2="10" />
                <line x1="28" y1="15" x2="28" y2="10" />
                <line x1="20" y1="33" x2="20" y2="38" />
                <line x1="24" y1="33" x2="24" y2="38" />
                <line x1="28" y1="33" x2="28" y2="38" />
                <line x1="15" y1="20" x2="10" y2="20" />
                <line x1="15" y1="24" x2="10" y2="24" />
                <line x1="15" y1="28" x2="10" y2="28" />
                <line x1="33" y1="20" x2="38" y2="20" />
                <line x1="33" y1="24" x2="38" y2="24" />
                <line x1="33" y1="28" x2="38" y2="28" />
              </svg>
            </span>

            <div className="pcba-card__top">
              <span className="pcba-card__badge">PCBA</span>
              <span className="pcba-card__role">Primary service category</span>
            </div>

            <p className="pcba-card__list-label">Common buyer needs</p>
            <ul className="pcba-card__needs">
              {buyerNeeds.map((need) => (
                <li className="pcba-card__need" key={need}>
                  <span className="pcba-card__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {need}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
