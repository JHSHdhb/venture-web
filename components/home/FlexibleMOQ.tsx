import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

const buildTypes = [
  { title: "Prototype", desc: "Early builds and engineering validation samples." },
  { title: "Pilot run", desc: "Pre-production runs before scaling up." },
  { title: "High-mix", desc: "Many board variants and frequently changing BOMs." },
  { title: "Low-volume production", desc: "Repeatable small-to-medium B2B production needs." },
];

export function FlexibleMOQ() {
  return (
    <section className="moq" aria-labelledby="moq-title">
      <div className="moq__inner">
        <div className="moq__head">
          <p className="moq__eyebrow">Flexible MOQ</p>
          <h2 id="moq-title" className="moq__title">
            High-mix, low-volume builds are <span className="moq__accent">welcome</span>
          </h2>
          <p className="moq__statement">
            No fixed MOQ for many PCBA projects<sup className="moq__star">*</sup>
          </p>
        </div>

        <ul className="moq__cards">
          {buildTypes.map((build) => (
            <li className="moq-card" key={build.title}>
              <span className="moq-card__title">{build.title}</span>
              <span className="moq-card__desc">{build.desc}</span>
            </li>
          ))}
        </ul>

        <div className="moq__actions">
          <CTAButton href={routes.contact}>Discuss Your Build</CTAButton>
          <CTAButton href={routes.requestQuote} variant="secondary">
            Send Gerber &amp; BOM
          </CTAButton>
        </div>

        <p className="moq__note">
          *Component MOQ, tooling, test fixtures, and special process requirements are reviewed
          before quotation.
        </p>
      </div>
    </section>
  );
}
