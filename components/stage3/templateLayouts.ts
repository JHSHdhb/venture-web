import type { Stage3SectionType, Stage3Template } from "@/lib/stage3-page-briefs";

// The page-level modules the renderer can place, in any order, per template.
export type Stage3ModuleKey =
  | "hero"
  | "questions"
  | "sections"
  | "faq"
  | "related"
  | "claims"
  | "cta";

export type TemplateLayout = {
  // Wrapper class that carries the template-specific accent (see globals.css).
  className: string;
  // Module order for this template, aligned with the Stage 3 plan (section 6).
  order: Stage3ModuleKey[];
  // Section type that gets the promoted/featured treatment on this template.
  featured?: Stage3SectionType;
};

const DEFAULT_ORDER: Stage3ModuleKey[] = [
  "hero",
  "questions",
  "sections",
  "faq",
  "related",
  "claims",
  "cta",
];

// One layout per template type. Orders mirror the "Required module order"
// blocks of the Stage 3 Content & GEO Structure Plan (Templates B–J).
export const templateLayouts: Record<Stage3Template, TemplateLayout> = {
  // Homepage keeps its own bespoke components; included only for completeness.
  homepage: {
    className: "stage3-page--homepage",
    order: DEFAULT_ORDER,
  },
  // B — convert: lead with the answer + scope/process, files checklist promoted.
  "service-conversion": {
    className: "stage3-page--service-conversion",
    order: ["hero", "sections", "questions", "faq", "related", "claims", "cta"],
    featured: "quote-checklist",
  },
  // C — strategic: scope-led narrative, evidence-gated proof promoted.
  "strategic-service": {
    className: "stage3-page--strategic-service",
    order: ["hero", "sections", "questions", "faq", "related", "claims", "cta"],
    featured: "proof",
  },
  // D — supporting capability: related downstream services elevated before FAQ.
  "supporting-capability": {
    className: "stage3-page--supporting-capability",
    order: ["hero", "sections", "related", "questions", "faq", "claims", "cta"],
    featured: "process",
  },
  // E — quality/trust: claim/evidence notes elevated right after the body.
  "quality-trust": {
    className: "stage3-page--quality-trust",
    order: ["hero", "sections", "claims", "questions", "faq", "related", "cta"],
    featured: "proof",
  },
  // F — engineering support: related service links elevated before FAQ.
  "engineering-support": {
    className: "stage3-page--engineering-support",
    order: ["hero", "sections", "related", "questions", "faq", "claims", "cta"],
    featured: "quote-checklist",
  },
  // G — brand authority: answer-first (questions high), key facts promoted.
  "brand-authority": {
    className: "stage3-page--brand-authority",
    order: ["hero", "questions", "sections", "faq", "related", "claims", "cta"],
    featured: "key-facts",
  },
  // H — industry: cross-link to relevant services elevated.
  "industry": {
    className: "stage3-page--industry",
    order: ["hero", "sections", "related", "questions", "faq", "claims", "cta"],
    featured: "scope",
  },
  // I — resource hub: navigation/related close to the top, lighter conversion.
  "resource": {
    className: "stage3-page--resource",
    order: ["hero", "sections", "related", "faq", "questions", "claims", "cta"],
    featured: "faq",
  },
  // J — contact/RFQ: action-first, checklist promoted.
  "contact-rfq": {
    className: "stage3-page--contact-rfq",
    order: ["hero", "sections", "questions", "related", "faq", "claims", "cta"],
    featured: "quote-checklist",
  },
};

export function resolveTemplateLayout(template: Stage3Template): TemplateLayout {
  return templateLayouts[template] ?? templateLayouts.homepage;
}
