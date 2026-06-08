import type { ReactNode } from "react";
import type { Stage3PageBrief, Stage3SectionType } from "@/lib/stage3-page-briefs";

type Stage3SectionData = Stage3PageBrief["sections"][number];

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function ScopeList({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-list">
      {section.requiredContent.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function DirectAnswerBlock({ section }: { section: Stage3SectionData }) {
  return (
    <div className="stage3-answer">
      {section.requiredContent.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function ProcessSteps({ section }: { section: Stage3SectionData }) {
  return (
    <ol className="stage3-steps">
      {section.requiredContent.map((item, index) => (
        <li key={item}>
          <span className="stage3-steps__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function QuoteChecklist({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-checklist">
      {section.requiredContent.map((item) => (
        <li key={item}>
          <span className="stage3-checklist__mark">{checkIcon}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProofPanel({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-proof">
      {section.requiredContent.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function KeyFacts({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-facts">
      {section.requiredContent.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FaqList({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-list stage3-list--faq">
      {section.requiredContent.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function RelatedInline({ section }: { section: Stage3SectionData }) {
  return (
    <ul className="stage3-list stage3-list--links">
      {section.requiredContent.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

type SectionRenderer = {
  variant: string;
  render: (section: Stage3SectionData) => ReactNode;
};

// Each section type renders its requiredContent with a presentation that fits
// its purpose, while reusing the existing Stage 3 card system.
const sectionRenderers: Partial<Record<Stage3SectionType, SectionRenderer>> = {
  "direct-answer": { variant: "answer", render: (section) => <DirectAnswerBlock section={section} /> },
  "key-facts": { variant: "facts", render: (section) => <KeyFacts section={section} /> },
  "scope": { variant: "scope", render: (section) => <ScopeList section={section} /> },
  "process": { variant: "process", render: (section) => <ProcessSteps section={section} /> },
  "quote-checklist": { variant: "checklist", render: (section) => <QuoteChecklist section={section} /> },
  "proof": { variant: "proof", render: (section) => <ProofPanel section={section} /> },
  "faq": { variant: "faq", render: (section) => <FaqList section={section} /> },
  "related-pages": { variant: "links", render: (section) => <RelatedInline section={section} /> },
};

const fallbackRenderer: SectionRenderer = {
  variant: "scope",
  render: (section) => <ScopeList section={section} />,
};

export function Stage3Section({
  section,
  featured = false,
}: {
  section: Stage3SectionData;
  featured?: boolean;
}) {
  const renderer = sectionRenderers[section.type] ?? fallbackRenderer;
  const className = [
    "stage3-section",
    `stage3-section--${renderer.variant}`,
    featured ? "stage3-section--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={className} aria-labelledby={`stage3-${section.id}`}>
      <div className="stage3-section__head">
        <p className="stage3-section__type">{section.type}</p>
        <h2 id={`stage3-${section.id}`}>{section.heading}</h2>
        <p>{section.purpose}</p>
      </div>
      {renderer.render(section)}
    </section>
  );
}
