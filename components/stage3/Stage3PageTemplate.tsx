import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/shared/PageShell";
import { CTAButton } from "@/components/site/CTAButton";
import { Stage3Section } from "@/components/stage3/Stage3Sections";
import { templateLayouts } from "@/components/stage3/templateLayouts";
import {
  clientPageLayouts,
  type ClientPageLayout,
  type ClientPageSection,
} from "@/lib/client-page-layouts";
import type { Stage3PageBrief } from "@/lib/stage3-page-briefs";

type Stage3PageTemplateProps = {
  brief: Stage3PageBrief;
};

type ResolvedCta = {
  label: string;
  href: string;
};

function isPlanPlaceholder(value: string) {
  const normalized = value.trim().toLowerCase();

  return (
    normalized === "buyer-facing purpose" ||
    normalized ===
      "use practical, visible content that helps buyers understand the page and move toward the next action."
  );
}

function splitNeeds(value: string) {
  const normalized = value.trim();

  if (!normalized) {
    return [];
  }

  const semicolonParts = normalized
    .split(/;\s+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (semicolonParts.length > 1) {
    return semicolonParts;
  }

  const sentenceParts =
    normalized
      .match(/[^.!?]+[.!?]/g)
      ?.map((item) => item.trim())
      .filter(Boolean) ?? [];

  return normalized.length > 170 && sentenceParts.length > 1 ? sentenceParts : [normalized];
}

function resolveCtas(brief: Stage3PageBrief, layout?: ClientPageLayout) {
  const primary: ResolvedCta = {
    label: layout?.primaryCtaLabel || brief.primaryCta.label,
    href: brief.primaryCta.href,
  };

  const secondaryLabel = layout?.secondaryCtaLabel || brief.secondaryCta?.label;
  const secondaryHref = brief.secondaryCta?.href;
  const secondary =
    secondaryLabel && secondaryHref
      ? {
          label: secondaryLabel,
          href: secondaryHref,
        }
      : undefined;

  return { primary, secondary };
}

export function Stage3Hero({
  brief,
  layout,
}: Stage3PageTemplateProps & {
  layout?: ClientPageLayout;
}) {
  const ctas = resolveCtas(brief, layout);
  const h1 = layout?.h1 || brief.h1;
  const intent = layout?.buyerIntent || brief.pageRole;
  const answer = layout?.directAnswer || brief.directAnswer;

  return (
    <header className="stage3-hero">
      <h1>{h1}</h1>
      <p className="stage3-role">{intent}</p>
      <p className="stage3-direct-answer">{answer}</p>
      <div className="stage3-actions">
        <CTAButton href={ctas.primary.href}>{ctas.primary.label}</CTAButton>
        {ctas.secondary ? (
          <CTAButton href={ctas.secondary.href} variant="secondary">
            {ctas.secondary.label}
          </CTAButton>
        ) : null}
      </div>
    </header>
  );
}

export function Stage3TargetQuestions({ questions }: { questions: string[] }) {
  return (
    <section className="stage3-panel" aria-labelledby="stage3-target-questions">
      <h2 id="stage3-target-questions">Questions This Page Should Answer</h2>
      <ul className="stage3-list">
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3FAQ({ questions }: { questions: string[] }) {
  return (
    <section className="stage3-panel stage3-panel--questions" aria-labelledby="stage3-faq">
      <h2 id="stage3-faq">Common Buyer Questions</h2>
      <ul className="stage3-faq stage3-faq--questions">
        {questions.map((question) => (
          <li key={question}>
            <span className="stage3-question__mark" aria-hidden="true">
              Q
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3RelatedPages({ pages }: { pages: Stage3PageBrief["relatedPages"] }) {
  return (
    <section className="stage3-panel" aria-labelledby="stage3-related-pages">
      <h2 id="stage3-related-pages">Related Pages</h2>
      <ul className="stage3-related">
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3ClaimNotes({ notes }: { notes: string[] }) {
  return (
    <section className="stage3-panel stage3-panel--quiet" aria-labelledby="stage3-claim-notes">
      <h2 id="stage3-claim-notes">Evidence Boundaries</h2>
      <ul className="stage3-list">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3CTA({ brief }: Stage3PageTemplateProps) {
  const layout = (clientPageLayouts as Record<string, ClientPageLayout>)[brief.route];
  const ctas = resolveCtas(brief, layout);

  return (
    <section className="stage3-cta" aria-labelledby="stage3-final-cta">
      <h2 id="stage3-final-cta">Start the Conversation</h2>
      <p>
        Share the project files, requirements, and open questions that fit this page so Venture can
        route the inquiry to the right PCBA, EMS, sourcing, testing, or engineering path.
      </p>
      <div className="stage3-actions">
        <CTAButton href={ctas.primary.href}>{ctas.primary.label}</CTAButton>
        {ctas.secondary ? (
          <CTAButton href={ctas.secondary.href} variant="dark">
            {ctas.secondary.label}
          </CTAButton>
        ) : null}
      </div>
    </section>
  );
}

function Stage3ClientSections({
  sections,
  brief,
  layout,
}: {
  sections: ClientPageSection[];
  brief: Stage3PageBrief;
  layout: ClientPageLayout;
}) {
  return (
    <div className="stage3-section-stack">
      {sections.map((section, index) => {
        const sectionId = `stage3-client-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        const fallback = brief.sections[index];
        const purpose = isPlanPlaceholder(section.purpose)
          ? fallback?.purpose ||
            `Help buyers understand ${section.heading.toLowerCase()} before they contact Venture.`
          : section.purpose;
        const needsSource = isPlanPlaceholder(section.needs)
          ? fallback?.requiredContent.join(" ") ||
            layout.directAnswer ||
            layout.buyerIntent ||
            layout.pageRole
          : section.needs;
        const needs = splitNeeds(needsSource || purpose);

        return (
          <section
            className="stage3-section stage3-section--client"
            aria-labelledby={sectionId}
            key={`${section.heading}-${index}`}
          >
            <div className="stage3-section__head">
              <span className="stage3-section__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 id={sectionId}>{section.heading}</h2>
              <p>{purpose}</p>
            </div>
            <div className="stage3-section__body">
              {needs.length > 1 ? (
                <ul className="stage3-needs">
                  {needs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{needs[0]}</p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Stage3BriefSections({
  brief,
  featured,
}: Stage3PageTemplateProps & {
  featured?: Stage3PageBrief["sections"][number]["type"];
}) {
  if (!brief.sections.length) {
    return null;
  }

  return (
    <div className="stage3-section-stack">
      {brief.sections.map((section) => (
        <Stage3Section key={section.id} section={section} featured={section.type === featured} />
      ))}
    </div>
  );
}

export function Stage3PageTemplate({ brief }: Stage3PageTemplateProps) {
  const layout = templateLayouts[brief.template] ?? templateLayouts.homepage;
  const clientLayout = (clientPageLayouts as Record<string, ClientPageLayout>)[brief.route];
  const sections: ReactNode = clientLayout?.sections.length ? (
    <Stage3ClientSections brief={brief} layout={clientLayout} sections={clientLayout.sections} />
  ) : (
    <Stage3BriefSections brief={brief} featured={layout.featured} />
  );

  return (
    <PageShell className={`stage3-page ${layout.className}`}>
      <Stage3Hero brief={brief} layout={clientLayout} />
      {sections}
      {brief.faqSeeds.length ? <Stage3FAQ questions={brief.faqSeeds} /> : null}
      {brief.relatedPages.length ? <Stage3RelatedPages pages={brief.relatedPages} /> : null}
      <Stage3CTA brief={brief} />
    </PageShell>
  );
}
