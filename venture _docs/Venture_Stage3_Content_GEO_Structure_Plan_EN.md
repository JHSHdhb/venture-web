# Venture Electronics Website Rebuild — Stage 3 Content & GEO Structure Plan

**Purpose:** Implementation-ready Stage 3 plan for Codex / Claude / frontend and content agents.  
**Project:** Venture Electronics GEO-friendly website rebuild  
**Stage:** Stage 3 — Content & GEO Structure  
**Date:** 2026-06-04  
**Status:** Draft plan for implementation handoff. This is not final marketing copy and not final visual design.

---

## 0. What this file is

Stage 3 converts the confirmed positioning, service hierarchy, sitemap, navigation, and current Stage 2 scaffold into page-level content structures and wireframe-level layouts.

Stage 3 should answer:

> What does each page need to say, in what order, with which crawlable content blocks, which CTAs, which related pages, and which claim boundaries?

Stage 3 should not answer:

> What is the final visual design, final UI system, full Figma layout, final copy polish, CMS schema, deployment plan, or JSON-LD implementation?

Those belong to Stage 4, Stage 5, Stage 6, and Stage 7.

---

## 1. Source alignment checked before this plan

This plan is based on two repository states.

### 1.1 Planning repository context

Relevant source files:

- `04_website-planning/Venture官网重建_ImplementationPlanBreakdown_设计开发边界版.md`
- `04_website-planning/website-direction-notes.md`
- `00_context/venture-positioning-context.md`
- `00_context/client-communication-service-record.md`
- `00_context/decisions.md`

Confirmed strategic constraints:

1. Venture Electronics remains the mother brand.
2. PCBA / PCB Assembly is the primary inquiry and conversion entry.
3. EMS / Box Build is the higher-value strategic brand ceiling.
4. PCB Fabrication is a supporting capability, not the main brand story.
5. The new site should act as Venture Electronics' AI-readable official source / canonical source in the brand/entity sense.
6. The site must explain the relationship among Venture Electronics, Venture PCB, Venture PCBA, `venture-mfg.com`, `venture-pcba.com`, service lines, and approved official channels.
7. Strong claims must be evidence-gated.

### 1.2 Current website implementation repository

Relevant source files:

- `lib/site-data.ts`
- `app/page.tsx`
- `components/home/*`
- `components/shared/PlaceholderPage.tsx`
- `tests/scaffold.test.mjs`

Current implementation state:

1. Stage 2 route, navigation, footer, and sitemap data are already represented in `lib/site-data.ts`.
2. The homepage is no longer a generic placeholder and already renders low-fidelity business sections.
3. Most non-home routes still render `PlaceholderPage`.
4. The existing scaffold test intentionally verifies that non-home routes remain placeholders. Stage 3 should replace that rule for selected P0 pages once page brief data exists.

---

## 2. Stage 3 goals

Stage 3 must produce:

1. A page brief matrix for first-build pages.
2. Reusable page templates and content module rules.
3. Direct-answer / AI-summary requirements for each priority page.
4. Buyer-question and FAQ structures.
5. Proof point and evidence need notes.
6. CTA and internal linking logic.
7. Claim risk notes for each priority page.
8. A stable handoff for Stage 4 visual design and Stage 5 frontend implementation.

---

## 3. Stage 3 non-goals

Do not use Stage 3 to:

- Finalize full visual design.
- Produce final polished English marketing copy for every page.
- Build a complex CMS model.
- Implement schema JSON-LD.
- Publish unverified certification, factory scale, customer logo, capacity, audit-readiness, or industry compliance claims.
- Put core content only inside images.
- Hide important GEO content inside client-only interactions.

---

## 4. Stage 3 deliverables

| Deliverable | Purpose | Consumer |
|---|---|---|
| Page brief matrix | Route-level purpose, modules, CTAs, internal links, claim notes | Content, design, development |
| Template layout plan | Group many routes into reusable page templates | Design, development |
| P0 page briefs | First-build page structures | Content, client review |
| FAQ / buyer question map | GEO retrieval and conversion support | Content, SEO/GEO |
| Proof & evidence needs list | Client confirmation and claim gating | Client, content |
| CTA & internal linking map | Conversion path and service graph | Content, development |
| Implementation data contract | Structured data target for Codex / Claude | Development / AI coding |
| Stage 4 handoff notes | Visual design input | Design |

---

## 5. Route priority

The website already has many route files. Stage 3 should not attempt to finalize all routes at once. Use P0 / P1 / P2.

### 5.1 P0 — First-build priority pages

These pages should receive detailed Stage 3 briefs first.

| Page | Route | Responsibility |
|---|---|---|
| Home | `/` | Define mother brand, PCBA-first positioning, EMS ceiling, trust path, and RFQ entry |
| About | `/about/` | Public-safe company identity and positioning |
| Brand Clarification | `/brand/venture-electronics-vs-venture-pcb-pcba/` | Explain Venture Electronics / Venture PCB / Venture PCBA / domain relationships |
| Official Resources | `/official-resources/` | List confirmed domains, known official social profiles, and pending channels |
| Services Hub | `/services/` | Explain service hierarchy instead of flat keyword list |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | Primary conversion service page |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | High-intent RFQ service page |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | Engineering samples and small-batch builds |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | Assembly process capability explainer |
| EMS & Box Build | `/services/ems-box-build/` | Strategic manufacturing scope and higher-value capability |
| PCB Fabrication | `/services/pcb-fabrication/` | Supporting upstream service |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | Supply-chain and BOM review differentiator |
| Quality & Testing Hub | `/quality-testing/` | Quality trust hub |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | Practical inspection / testing support page |
| Engineering | `/engineering-support/` | Engineering support hub |
| FAQ | `/resources/faq/` | Buyer-question and GEO answer hub |
| Contact | `/contact/` | Contact entry |
| Request a Quote | `/request-a-quote/` | Unified RFQ entry |

### 5.2 P1 — Second-pass structure pages

These pages can initially use the same template with shorter content.

- `/quality-testing/electrical-testing/`
- `/quality-testing/product-reliability-testing/`
- `/quality-testing/testing-inspection-equipment/`
- `/quality-testing/quality-management-system/`
- `/quality-testing/packaging-logistics/`
- `/engineering-support/smt-tht-bga-process-support/`
- `/engineering-support/pcb-test-fixture-support/`
- `/engineering-support/ic-programming-support/`
- `/industries/`
- `/industries/industrial-electronics/`
- `/industries/iot-smart-devices/`
- `/industries/consumer-electronics/`
- `/industries/energy-power-electronics/`
- `/industries/automation-control/`
- `/industries/communication-equipment/`

### 5.3 P2 — Resource, legal, and expansion pages

Keep these routes, but they do not need full Stage 3 content in the first pass.

- `/resources/`
- `/resources/blog/`
- `/resources/guides/`
- `/resources/downloads/`
- `/resources/catalog/`
- `/resources/glossary/`
- `/resources/case-studies/`
- `/about/company-overview/`
- `/about/news/`
- `/thank-you/`
- `/privacy-policy/`
- `/terms/`
- `/sitemap/`

---

## 6. Reusable page templates

### Template A — Homepage

Applies to: `/`

Current homepage sections can be preserved and refined.

Recommended module order:

1. Hero / direct positioning
2. Trust strip / quick facts, without unsupported hard claims
3. Typical project path
4. Venture identity / mother brand explanation
5. PCBA primary entry
6. PCBA child path cards
7. EMS & Box Build strategic path
8. Supporting capabilities: PCB fabrication, component sourcing, testing, engineering
9. RFQ guidance: what files customers should prepare
10. Brand authority teaser: Brand Clarification and Official Resources
11. Final CTA

Implementation note:

- Keep existing home component structure as the initial low-fidelity base.
- Update copy and information density based on Stage 3 briefs.
- Final visuals belong to Stage 4.

### Template B — Service Conversion Page

Applies to:

- PCB Assembly / PCBA
- Turnkey PCB Assembly
- Prototype & Low-volume PCBA
- SMT, THT & BGA Capabilities
- Component Sourcing & BOM Review

Required modules:

1. Hero with direct answer
2. Who this service is for
3. What Venture can support
4. What files / information are needed for quotation
5. Process or workflow
6. Related support: BOM / DFM / sourcing / testing
7. Proof points and evidence needs
8. FAQ / buyer questions
9. Related services
10. Final CTA: Request a Quote

Tone:

- Practical, engineering-aware, B2B, conservative on claims.

### Template C — Strategic Service Page

Applies to:

- EMS & Box Build
- Future Cable Assembly / Final Assembly / System Integration if confirmed

Required modules:

1. Hero: relationship between EMS / Box Build and PCBA
2. When buyers need EMS / Box Build
3. Scope: PCBA + sourcing + testing + final assembly + packaging / logistics coordination
4. What must be confirmed: mechanical parts, cables, enclosures, test requirements, packaging
5. Evidence-gated capability section
6. Process map
7. FAQ
8. CTA

Claim handling:

- Avoid implying Venture directly owns every capability.
- Prefer language such as “coordinate,” “support,” “production-line resources,” and “partner network” where needed.

### Template D — Supporting Capability Page

Applies to:

- PCB Fabrication
- Future DFM / DFA / NPI support pages

Required modules:

1. Hero: supporting capability, not core brand position
2. How it supports PCBA / Turnkey / EMS
3. What customers need to provide
4. Scope boundaries
5. Related downstream services
6. FAQ
7. CTA

### Template E — Quality / Trust Page

Applies to:

- Quality & Testing
- Testing & Quality Control
- Electrical Testing
- Product Reliability Testing
- Testing & Inspection Equipment
- Quality Management System
- Packaging & Logistics

Required modules:

1. Hero: quality role in PCBA / EMS delivery
2. Testing / inspection methods overview
3. Where this appears in the workflow
4. Equipment / method list, claim-gated by evidence status
5. What customers can request
6. Claim risk / evidence notes for internal use
7. FAQ
8. CTA

Claim handling:

- ISO / UL and any certification content must follow confirmed evidence.
- Do not present ISO 13485, IATF 16949, AS9100, IPC Class 3, or similar as Venture-held certifications unless evidence is added.

### Template F — Engineering Support Page

Applies to:

- Engineering support hub
- SMT, THT & BGA Process Support
- PCB Test Fixture Support
- IC Programming Support

Required modules:

1. Hero: engineering support before and during production
2. Problems this page solves
3. Support scope
4. Inputs needed from the customer
5. Related service links
6. FAQ
7. CTA

### Template G — Brand Authority Page

Applies to:

- About
- Brand Clarification
- Official Resources
- Company Overview

Required modules:

1. Hero: official identity statement
2. AI summary / direct answer
3. Key facts table
4. Brand / domain / service relationship map
5. Confirmed official resources
6. Pending / unconfirmed resource handling
7. Public-safe claims only
8. FAQ
9. CTA / related pages

Important:

- These are not generic marketing pages.
- They are the official explanation layer for Google, AI systems, buyers, SEO vendors, and content vendors.

### Template H — Industry Page

Applies to:

- Industries hub
- Industrial Electronics
- IoT & Smart Devices
- Consumer Electronics
- Energy & Power Electronics
- Automation & Control
- Communication Equipment

Required modules:

1. Hero: industry application context
2. Common buyer needs in this industry
3. Relevant Venture services
4. Typical manufacturing concerns
5. Quality / testing considerations
6. FAQ
7. CTA

Claim handling:

- Industry pages should be based on practical buyer questions.
- Do not imply deep customer case evidence in each industry unless confirmed.

### Template I — Resource Page

Applies to:

- FAQ
- Blog
- Guides
- Downloads
- Catalog
- Glossary
- Case Studies

Required modules:

1. Resource hero
2. Search / category structure, optional later
3. Question / article / download cards
4. Internal links to service pages
5. CTA

### Template J — Contact / RFQ Page

Applies to:

- Contact
- Request a Quote
- Thank You

Required modules:

1. Hero: clear next step
2. RFQ checklist: Gerber, BOM, CPL / PnP, assembly drawing, testing requirements, quantity, target delivery
3. Contact options
4. Form fields
5. What happens after submission
6. Privacy / NDA reassurance, not over-legalized
7. Related service links

---

## 7. P0 page briefs

### 7.1 Home

**Route:** `/`  
**Template:** Homepage  
**Page role:** Brand definition + conversion router  
**Primary CTA:** Request a Quote  
**Secondary CTA:** Explore PCB Assembly / PCBA

**Direct answer:**  
Venture Electronics is a PCBA and EMS manufacturing partner for electronics product teams, supporting PCB assembly, sourcing, testing, and box-build coordination.

**Required modules:**

1. Hero positioning
2. Project path stepper
3. Mother brand identity
4. PCBA primary service
5. PCBA path cards
6. EMS & Box Build strategic path
7. Supporting capabilities
8. RFQ guidance
9. Brand authority teaser
10. Final CTA

**Related pages:**

- PCB Assembly / PCBA
- Turnkey PCB Assembly
- EMS & Box Build
- Component Sourcing & BOM Review
- Quality & Testing
- Brand Clarification
- Official Resources

**Claim notes:**

- Avoid “No.1,” “trusted by top brands,” hard factory scale, production volume, and unsupported certifications.

---

### 7.2 About

**Route:** `/about/`  
**Template:** Brand Authority Page  
**Page role:** Public-safe company identity  
**Primary CTA:** Request a Quote

**Direct answer:**  
Venture Electronics is the mother brand for Venture's PCBA, EMS, sourcing, testing, and electronics manufacturing support.

**Required modules:**

1. Official identity statement
2. Public-safe positioning
3. What Venture supports: PCBA, EMS, sourcing, testing, quality coordination
4. What Venture should not be reduced to: not only a PCB factory, not a pure trading company
5. Brand relationship teaser
6. CTA

**Claim notes:**

- Do not expose internal legal structure.
- Do not overclaim direct factory ownership.

---

### 7.3 Brand Clarification

**Route:** `/brand/venture-electronics-vs-venture-pcb-pcba/`  
**Template:** Brand Authority Page  
**Page role:** Brand/entity clarification  
**Primary CTA:** Contact Venture

**Direct answer:**  
Venture Electronics is the mother brand. Venture PCB and Venture PCBA are service-entry / keyword concepts connected to Venture Electronics, not separate mother brands.

**Required modules:**

1. Direct answer
2. Mother brand vs service-entry terms
3. Domain relationship table
4. Service naming explanation
5. Guidance for vendors / AI / search systems
6. FAQ
7. Related links

**Related pages:**

- Official Resources
- About
- Services
- Contact

**Claim notes:**

- Do not present Venture PCB as an independent company unless the client confirms a legal/entity distinction.

---

### 7.4 Official Resources

**Route:** `/official-resources/`  
**Template:** Brand Authority Page  
**Page role:** Official online presence source  
**Primary CTA:** Contact Venture

**Direct answer:**  
This page lists confirmed Venture Electronics official websites, approved social profiles, and pending channels that should not be treated as official until confirmed.

**Required modules:**

1. Official resources direct answer
2. Confirmed domains
3. Confirmed social profiles
4. Pending / unconfirmed channels
5. Vendor wording guidance
6. SameAs / schema preparation notes for internal SEO/GEO use
7. CTA

**Claim notes:**

- Do not publish unconfirmed Facebook / VK / old account candidates as official footer or schema links.

---

### 7.5 Services Hub

**Route:** `/services/`  
**Template:** Service Hub / Brand-structured Capability Router  
**Page role:** Explain service hierarchy  
**Primary CTA:** Request a Quote

**Direct answer:**  
Venture's services are organized around PCBA as the primary project entry, EMS / Box Build as strategic manufacturing scope, and sourcing, testing, engineering, and PCB fabrication as supporting capabilities.

**Required modules:**

1. Service hierarchy direct answer
2. Primary inquiry entry: PCBA / Turnkey / Prototype / SMT-THT-BGA
3. Strategic manufacturing scope: EMS / Box Build
4. Supporting capabilities: PCB fabrication, sourcing, testing, engineering
5. Manufacturing process overview
6. CTA

---

### 7.6 PCB Assembly / PCBA

**Route:** `/services/pcb-assembly-pcba/`  
**Template:** Service Conversion Page  
**Page role:** Primary conversion service  
**Primary CTA:** Request a PCBA Quote

**Direct answer:**  
PCB Assembly / PCBA is the main project-entry service for customers who need boards assembled, reviewed, sourced, tested, and prepared for electronics production.

**Required modules:**

1. What PCBA means
2. Who this is for
3. Assembly scope
4. Quotation file checklist
5. Route to Turnkey / Prototype / SMT-THT-BGA paths
6. BOM / DFM / sourcing / testing support
7. FAQ
8. CTA

**FAQ seeds:**

- What files are needed for a PCBA quote?
- What is the difference between PCBA and turnkey PCBA?
- Can Venture review my BOM before assembly?

---

### 7.7 Turnkey PCB Assembly

**Route:** `/services/pcb-assembly-pcba/turnkey-pcb-assembly/`  
**Template:** Service Conversion Page  
**Page role:** High-intent RFQ page  
**Primary CTA:** Request a Turnkey PCBA Quote

**Direct answer:**  
Turnkey PCB assembly is for projects where the customer wants one partner to coordinate BOM review, component sourcing, PCB fabrication coordination, assembly, and testing support.

**Required modules:**

1. Turnkey PCBA direct answer
2. What is included
3. What the customer still needs to confirm
4. BOM review and sourcing process
5. Assembly and testing workflow
6. FAQ
7. CTA

**Claim notes:**

- Do not imply unlimited stock, no MOQ, or guaranteed substitutes without confirmation.

---

### 7.8 Prototype & Low-volume PCBA

**Route:** `/services/pcb-assembly-pcba/prototype-low-volume-pcba/`  
**Template:** Service Conversion Page  
**Page role:** Engineering sample and small-batch conversion  
**Primary CTA:** Request a Prototype PCBA Quote

**Direct answer:**  
Prototype and low-volume PCBA supports engineering samples, validation builds, early production, and small batches before scaling.

**Required modules:**

1. Prototype / low-volume direct answer
2. Use cases: EVT / DVT / engineering sample / small batch
3. Files needed
4. Engineering review
5. Testing options
6. Path to production
7. CTA

---

### 7.9 SMT, THT & BGA Capabilities

**Route:** `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/`  
**Template:** Service Conversion / Engineering Explainer Page  
**Page role:** Process capability explanation  
**Primary CTA:** Discuss Assembly Requirements

**Direct answer:**  
SMT, THT, and BGA assembly are process capabilities that support PCB assembly projects with different component, inspection, and testing requirements.

**Required modules:**

1. Process capability overview
2. SMT / THT / BGA explanation
3. Design and manufacturing considerations
4. Inspection / testing linkage
5. Related services
6. FAQ
7. CTA

**Claim notes:**

- Minimum pitch, placement accuracy, BGA/X-ray scope, and equipment details need evidence before hard publication.

---

### 7.10 EMS & Box Build

**Route:** `/services/ems-box-build/`  
**Template:** Strategic Service Page  
**Page role:** Strategic brand ceiling and system-level manufacturing  
**Primary CTA:** Discuss EMS / Box Build Project

**Direct answer:**  
EMS & Box Build extends PCBA into broader product manufacturing coordination, including sourcing, testing, final assembly, packaging, and logistics support where project scope allows.

**Required modules:**

1. EMS / Box Build direct answer
2. Relationship to PCBA
3. When buyers need this
4. Coordination scope
5. Components / enclosure / cable / packaging checklist
6. Evidence-gated capability area
7. FAQ
8. CTA

**Claim notes:**

- Use careful coordination language unless direct capability evidence is confirmed.

---

### 7.11 PCB Fabrication

**Route:** `/services/pcb-fabrication/`  
**Template:** Supporting Capability Page  
**Page role:** Supporting upstream service  
**Primary CTA:** Request PCB + Assembly Support

**Direct answer:**  
PCB Fabrication is an upstream supporting capability that helps customers move from bare boards to complete PCB assembly, turnkey PCBA, or EMS projects.

**Required modules:**

1. PCB fabrication as supporting capability
2. How it supports PCBA / Turnkey / EMS
3. Gerber and stackup requirements
4. Fabrication-to-assembly workflow
5. Related pages
6. CTA

**Claim notes:**

- Do not reposition Venture as only a PCB factory.

---

### 7.12 Component Sourcing & BOM Review

**Route:** `/services/component-sourcing-bom-review/`  
**Template:** Service Conversion Page  
**Page role:** Supply-chain differentiator  
**Primary CTA:** Send BOM for Review

**Direct answer:**  
Component sourcing and BOM review help identify availability, lifecycle, MOQ, and substitution risks before PCB assembly or turnkey PCBA production.

**Required modules:**

1. BOM review direct answer
2. Common BOM risks
3. Sourcing coordination
4. Alternate / lifecycle / MOQ discussion
5. What customer must approve
6. Link to Turnkey PCBA
7. FAQ
8. CTA

**Claim notes:**

- Final substitution approval should remain with the customer.
- Do not promise every part can be replaced or sourced.

---

### 7.13 Quality & Testing Hub

**Route:** `/quality-testing/`  
**Template:** Quality / Trust Page  
**Page role:** Quality trust hub  
**Primary CTA:** Discuss Testing Requirements

**Direct answer:**  
Quality and testing support helps PCBA and EMS projects reduce delivery risk through inspection, electrical testing, functional testing, and quality-control coordination.

**Required modules:**

1. Quality role in PCBA / EMS
2. Testing method overview
3. Workflow placement
4. Equipment / method list, evidence-gated
5. What customers can request
6. Links to child testing pages
7. FAQ
8. CTA

**Claim notes:**

- Certifications, equipment lists, and testing scope require evidence.

---

### 7.14 Testing & Quality Control

**Route:** `/quality-testing/testing-quality-control/`  
**Template:** Quality / Trust Page  
**Page role:** Practical inspection and test support  
**Primary CTA:** Add Testing to My Quote

**Direct answer:**  
Testing and quality control can be planned with a PCBA project based on the customer's design, risk level, inspection needs, and functional requirements.

**Required modules:**

1. Testing direct answer
2. Common inspection and test methods
3. When each method is useful
4. Customer-provided test procedures
5. Documentation and reporting options, if confirmed
6. FAQ
7. CTA

---

### 7.15 Engineering

**Route:** `/engineering-support/`  
**Template:** Engineering Support Page  
**Page role:** Engineering support hub  
**Primary CTA:** Discuss Engineering Support

**Direct answer:**  
Engineering support helps customers prepare PCB assembly projects through DFM review, process discussion, test fixture support, and production questions before or during build.

**Required modules:**

1. Engineering support direct answer
2. Common problems before quote / before build
3. Support scope
4. Inputs needed from the customer
5. Related PCBA / testing pages
6. FAQ
7. CTA

---

### 7.16 FAQ

**Route:** `/resources/faq/`  
**Template:** Resource Page  
**Page role:** Buyer-question and AI answer hub  
**Primary CTA:** Request a Quote

**Recommended FAQ groups:**

1. Company / brand identity
2. PCBA quotation
3. Turnkey PCBA
4. BOM / component sourcing
5. Testing and quality
6. EMS / Box Build
7. Shipping / packaging
8. NDA / files / communication

---

### 7.17 Contact

**Route:** `/contact/`  
**Template:** Contact / RFQ Page  
**Page role:** General contact entry  
**Primary CTA:** Request a Quote

**Required modules:**

1. Contact direct answer
2. Contact options
3. What information to include
4. Related services
5. CTA to RFQ form

---

### 7.18 Request a Quote

**Route:** `/request-a-quote/`  
**Template:** Contact / RFQ Page  
**Page role:** Unified RFQ intake  
**Primary CTA:** Submit RFQ

**Required modules:**

1. Request quote direct answer
2. RFQ checklist
3. Form
4. Email / alternate contact
5. What happens next
6. Privacy / NDA reassurance
7. Related pages

**RFQ checklist fields:**

- Gerber files
- BOM
- CPL / Pick-and-place file
- Assembly drawing
- Testing requirements
- Quantity
- Target delivery / timeline
- Special component, sourcing, or packaging requirements

---

## 8. Claim boundary rules

All public content must classify claims before publication.

| Claim type | Handling | Examples |
|---|---|---|
| Public-safe | Can be used publicly | PCBA, EMS partner, BOM review, sourcing support, testing support |
| Evidence-needed | Needs client evidence before strong wording | factory scale, capacity, exact equipment specs, customer logos |
| Partner-network wording only | Use routing / partner network wording | special medical, automotive, aerospace certification capabilities |
| Internal-only | Do not publish | internal legal structure, trading/export company structure, sensitive partnerships |
| Prohibited | Do not use | No.1, top-brand clients, unsupported certification, inflated capacity |

---

## 9. Global FAQ / buyer question seed pool

### Brand / company

- Is Venture Electronics the same as Venture PCB or Venture PCBA?
- Which Venture website is the official source?
- Is Venture Electronics a PCB factory, PCBA supplier, or EMS partner?

### PCBA / RFQ

- What files are needed for a PCB assembly quotation?
- Can Venture help review my BOM before assembly?
- Does Venture support prototype or low-volume PCBA?
- What is the difference between PCBA and turnkey PCBA?

### Sourcing / BOM

- Can Venture source components for my project?
- What happens if some components are obsolete or long-lead?
- Who approves component substitutions?

### Testing / quality

- What testing can be arranged for a PCBA project?
- Can AOI, ICT, X-ray, or functional testing be included?
- What quality documents can be provided?

### EMS / Box Build

- When should I choose EMS or Box Build instead of PCBA only?
- What information is needed for a box build quotation?
- Can Venture coordinate PCBA, enclosure, cables, testing, and packaging?

### Logistics / communication

- How does the quotation process work?
- Can I sign an NDA before sending files?
- How does Venture communicate engineering questions during production?

---

## 10. Internal linking logic

### Homepage

- Hero primary CTA → Request a Quote
- Hero secondary CTA → PCB Assembly / PCBA
- PCBA section → Turnkey / Prototype / SMT-THT-BGA
- EMS section → EMS & Box Build
- Supporting capabilities → PCB Fabrication / Component Sourcing / Quality & Testing / Engineering
- Brand authority → Brand Clarification / Official Resources

### PCBA page

- Turnkey route → Turnkey PCBA
- Prototype route → Prototype & Low-volume PCBA
- Process capability route → SMT, THT & BGA
- Support links → Component Sourcing / Quality & Testing
- Final CTA → RFQ

### Brand authority pages

- About → Brand Clarification → Official Resources
- Official Resources → Contact / RFQ
- Brand Clarification → Services Hub

### Quality pages

- Quality hub → Testing & Quality Control / Electrical Testing / Reliability / Inspection Equipment / QMS / Packaging
- Testing pages → PCBA / Turnkey / RFQ

### Industry pages

- Industry pages should link back to PCBA, Turnkey PCBA, EMS & Box Build, Quality & Testing, and RFQ.

---

## 11. Implementation data contract for Codex / Claude

Recommended new data file:

- `lib/stage3-page-briefs.ts`

Recommended type:

```ts
export type Stage3PageBrief = {
  route: string;
  priority: "P0" | "P1" | "P2";
  template:
    | "homepage"
    | "service-conversion"
    | "strategic-service"
    | "supporting-capability"
    | "quality-trust"
    | "engineering-support"
    | "brand-authority"
    | "industry"
    | "resource"
    | "contact-rfq";
  pageRole: string;
  h1: string;
  directAnswer: string;
  targetUserQuestions: string[];
  sections: {
    id: string;
    type:
      | "hero"
      | "direct-answer"
      | "key-facts"
      | "scope"
      | "process"
      | "quote-checklist"
      | "proof"
      | "faq"
      | "related-pages"
      | "cta";
    heading: string;
    purpose: string;
    requiredContent: string[];
  }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  relatedPages: { label: string; href: string }[];
  faqSeeds: string[];
  claimNotes: string[];
};
```

Recommended new components:

- `components/stage3/Stage3PageTemplate.tsx`
- `components/stage3/Stage3Hero.tsx`
- `components/stage3/Stage3KeyFacts.tsx`
- `components/stage3/Stage3Section.tsx`
- `components/stage3/Stage3FAQ.tsx`
- `components/stage3/Stage3RelatedPages.tsx`
- `components/stage3/Stage3CTA.tsx`

Implementation principles:

1. Important content must be server-rendered HTML.
2. Direct answers, FAQs, service scope, key facts, quote checklist, and related pages must not be image-only.
3. P0 pages can initially render from one generic `Stage3PageTemplate` before Stage 4 visual refinement.
4. The homepage can keep the current section order, but copy and information hierarchy should align with this Stage 3 plan.
5. Non-home `PlaceholderPage` routes should gradually be replaced with template-driven Stage 3 pages for P0 routes.
6. Tests should be updated after P0 implementation: replace “non-home routes remain PlaceholderPage” with “P0 routes render Stage3PageTemplate or approved Stage 3 page components.”

Suggested implementation order:

1. Add `lib/stage3-page-briefs.ts` with P0 page data.
2. Add generic Stage 3 page template components.
3. Replace P0 non-home placeholders one by one.
4. Update scaffold tests to allow P0 pages to move beyond placeholder status.
5. Keep P1/P2 routes as placeholders or light template pages until their briefs are approved.
6. Run typecheck and tests.

---

## 12. Stage 4 handoff notes

After Stage 3, design should receive:

1. Template list.
2. Module order for each template.
3. P0 page briefs.
4. Primary and secondary CTA rules.
5. Identification of proof, FAQ, key facts, process, and related-page modules.
6. Claim notes so unverified claims are not visually presented as hard proof.
7. Asset requirements: real SMT / PCBA / testing / quality / engineering / factory images, not overly synthetic AI sci-fi scenes.
8. Color note for Stage 4: use the established palette of Deep Navy, Industrial Navy, Steel Blue, Cool Blue Gray, Tech Blue, and very limited Amber Copper accents.

---

## 13. Stage 3 acceptance criteria

Stage 3 is ready to close when:

- Every P0 page has a page brief.
- Every template has a fixed module order.
- Every P0 page has a direct answer / AI summary.
- Every P0 page has FAQ seeds.
- Every P0 page has primary CTA, secondary CTA if needed, and related pages.
- Strong claims have risk notes.
- Design can begin Stage 4 from the briefs.
- Codex / Claude can implement `Stage3PageBrief` data and generic page templates from this file.
- Client review can focus on page responsibility and content logic instead of visual design details.

---

## 14. Recommended next steps

1. Confirm P0 / P1 / P2 route priority internally.
2. Confirm that Brand Clarification and Official Resources are first-build core pages.
3. Confirm official social / domain assets with the client.
4. Convert the P0 briefs in this file into structured data.
5. Replace selected non-home placeholders with Stage 3 template pages.
6. Move to Stage 4 visual design only after page responsibility and content structures are accepted.

