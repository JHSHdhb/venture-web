import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes } from "@/lib/site-data";

const workflow = ["PCBA", "Testing", "Final assembly", "Box build", "Delivery support"];

export function EMSBoxBuildBlock() {
  return (
    <section className="home-section home-section--dark" aria-labelledby="ems-box-build-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Strategic capability"
          title="Beyond PCBA: EMS & Box Build Support"
          intro="For projects that go beyond board assembly, Venture can support a broader electronics manufacturing workflow involving PCBA, sourcing coordination, testing, final assembly, and box build-related project follow-through."
        />
        <div className="dark-panel">
          <ol className="workflow-steps">
            {workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="dark-panel__note">
            EMS & Box Build appears as a strategic capability, while turnkey PCB Assembly / PCBA
            remains the primary homepage inquiry entry.
          </p>
          <div className="section-actions">
            <CTAButton href={routes.emsBoxBuild}>View EMS & Box Build</CTAButton>
            <CTAButton href={routes.requestQuote} variant="dark">
              Discuss an EMS or Box Build Project
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
