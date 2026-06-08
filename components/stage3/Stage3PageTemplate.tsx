import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/shared/PageShell";
import { CTAButton } from "@/components/site/CTAButton";
import { Stage3Section } from "@/components/stage3/Stage3Sections";
import { templateLayouts, type Stage3ModuleKey } from "@/components/stage3/templateLayouts";
import type { Stage3PageBrief } from "@/lib/stage3-page-briefs";

type Stage3PageTemplateProps = {
  brief: Stage3PageBrief;
};

function templateLabel(template: Stage3PageBrief["template"]) {
  return template
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function Stage3Hero({ brief }: Stage3PageTemplateProps) {
  return (
    <header className="stage3-hero">
      <p className="stage3-kicker">
        {brief.priority} / {templateLabel(brief.template)}
      </p>
      <h1>{brief.h1}</h1>
      <p className="stage3-role">{brief.pageRole}</p>
      <p className="stage3-direct-answer">{brief.directAnswer}</p>
      <div className="stage3-actions">
        <CTAButton href={brief.primaryCta.href}>{brief.primaryCta.label}</CTAButton>
        {brief.secondaryCta ? (
          <CTAButton href={brief.secondaryCta.href} variant="secondary">
            {brief.secondaryCta.label}
          </CTAButton>
        ) : null}
      </div>
    </header>
  );
}

export function Stage3TargetQuestions({ questions }: { questions: string[] }) {
  return (
    <section className="stage3-panel" aria-labelledby="stage3-target-questions">
      <p className="stage3-section__type">target questions</p>
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
    <section className="stage3-panel" aria-labelledby="stage3-faq">
      <p className="stage3-section__type">faq</p>
      <h2 id="stage3-faq">Buyer Questions / FAQ Seeds</h2>
      <ul className="stage3-faq">
        {questions.map((question) => (
          <li key={question}>
            <h3>{question}</h3>
            <p>
              This question is part of the buyer-answer structure and should be expanded with
              final, evidence-backed copy after Venture confirms the relevant facts.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3RelatedPages({ pages }: { pages: Stage3PageBrief["relatedPages"] }) {
  return (
    <section className="stage3-panel" aria-labelledby="stage3-related-pages">
      <p className="stage3-section__type">related pages</p>
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
      <p className="stage3-section__type">claim boundaries</p>
      <h2 id="stage3-claim-notes">Claim Notes</h2>
      <ul className="stage3-list">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}

export function Stage3CTA({ brief }: Stage3PageTemplateProps) {
  return (
    <section className="stage3-cta" aria-labelledby="stage3-final-cta">
      <h2 id="stage3-final-cta">Next Step</h2>
      <p>
        Use this page as the content structure for client review, GEO planning, and later visual
        design. Final copy should stay evidence-backed.
      </p>
      <div className="stage3-actions">
        <CTAButton href={brief.primaryCta.href}>{brief.primaryCta.label}</CTAButton>
        {brief.secondaryCta ? (
          <CTAButton href={brief.secondaryCta.href} variant="dark">
            {brief.secondaryCta.label}
          </CTAButton>
        ) : null}
      </div>
    </section>
  );
}

export function Stage3PageTemplate({ brief }: Stage3PageTemplateProps) {
  const layout = templateLayouts[brief.template] ?? templateLayouts.homepage;

  const modules: Record<Stage3ModuleKey, ReactNode> = {
    hero: <Stage3Hero brief={brief} />,
    questions: brief.targetUserQuestions.length ? (
      <Stage3TargetQuestions questions={brief.targetUserQuestions} />
    ) : null,
    sections: brief.sections.length ? (
      <div className="stage3-section-stack">
        {brief.sections.map((section) => (
          <Stage3Section
            key={section.id}
            section={section}
            featured={section.type === layout.featured}
          />
        ))}
      </div>
    ) : null,
    faq: brief.faqSeeds.length ? <Stage3FAQ questions={brief.faqSeeds} /> : null,
    related: brief.relatedPages.length ? <Stage3RelatedPages pages={brief.relatedPages} /> : null,
    claims: brief.claimNotes.length ? <Stage3ClaimNotes notes={brief.claimNotes} /> : null,
    cta: <Stage3CTA brief={brief} />,
  };

  return (
    <PageShell className={`stage3-page ${layout.className}`}>
      {layout.order.map((key) => (
        <Fragment key={key}>{modules[key]}</Fragment>
      ))}
    </PageShell>
  );
}
