# Venture Website Rebuild — Positioning & Site Structure Lock

**File type:** Codex-ready positioning, IA, route, and demo scaffold source of truth  
**Project:** Venture Electronics GEO Website Rebuild  
**Audience:** Codex / developers / strategy / content / GEO / design  
**Status:** Pre-demo structure lock  
**Version:** v0.1 — English Codex Draft  
**Date:** 2026-05-28  

---

## 0. How Codex Should Use This Document

Treat this document as the **source of truth** for the first Next.js demo scaffold.

Codex should use this file to understand:

1. The positioning of the new Venture Electronics website.
2. The brand/entity relationship that the website must clarify.
3. The locked service hierarchy.
4. The first-build sitemap and route structure.
5. The nav-only placeholder route structure.
6. The reusable component structure.
7. The development boundaries for a demo scaffold.
8. The claim-safety rules that must not be violated.

This document is **not** asking Codex to build the full production website. It is asking Codex to build a clear, crawlable, reviewable **Next.js App Router demo scaffold** based on the locked site structure.

---

## 1. Project Context

Venture Electronics is rebuilding its website. This is not a normal visual redesign and not a simple SEO inquiry site.

The new website should become a **GEO-friendly, AI-readable official source and brand fact system** for Venture Electronics.

The website needs to help three types of readers understand Venture correctly:

1. Human B2B buyers.
2. Search engines such as Google.
3. AI systems and AI search tools that need a clear, crawlable, structured source about the company.

The site must clarify the relationship among:

- Venture Electronics
- Venture PCB
- Venture PCBA
- `venture-mfg.com`
- `venture-pcba.com`
- confirmed official social and content channels

The website should not reduce Venture to a generic “PCB factory.” It should present Venture Electronics as a PCBA-first electronics manufacturing partner with EMS and Box Build capability.

---

## 2. Website Role

### 2.1 Primary Role

The new Venture website should be positioned as:

```txt
Venture Electronics' official GEO-friendly, AI-readable B2B electronics manufacturing website.
```

It should function as:

```txt
A brand fact system + service structure + conversion website.
```

### 2.2 What the Website Is

The website is:

- The official explanation layer for Venture Electronics.
- A crawlable source for Venture’s brand, services, and business-line relationships.
- A PCBA-first conversion website.
- A structured B2B manufacturing website designed for both human readers and AI/search interpretation.
- A foundation for future SEO, GEO, schema, llms.txt, FAQ, and evidence-backed content.

### 2.3 What the Website Is Not

The website is not:

- A generic PCB factory website.
- A thin SEO landing page system.
- A visual-only redesign.
- A free-form page-builder site.
- A place to invent unsupported claims.
- A site that replaces Venture Electronics with Venture PCB as the mother brand.

---

## 3. Core Positioning Statement

Use the following as the working positioning statement:

```txt
Venture Electronics is a PCBA-first and EMS / Box Build-capable electronics manufacturing partner, supporting electronics projects from PCB assembly and component sourcing to testing, quality control, and system-level build coordination.
```

Shorter version:

```txt
Venture Electronics is a PCBA-first electronics manufacturing partner with EMS and Box Build support.
```

Homepage positioning direction:

```txt
Venture Electronics
PCB Assembly / PCBA and EMS & Box Build Support for Electronics Projects
```

Do not use positioning that makes Venture sound only like:

```txt
A PCB factory
A bare-board-only supplier
A low-cost automated platform
A generic electronics marketplace
```

---

## 4. Brand Entity Structure

### 4.1 Mother Brand

```txt
Venture Electronics
```

Venture Electronics must remain the mother brand.

Do not rename the brand to:

```txt
Venture PCB
Venture PCBA
```

### 4.2 Service / Search / Entry Concepts

These are service-entry or keyword-entry concepts, not replacements for the mother brand:

```txt
Venture PCB
Venture PCBA
PCB Assembly / PCBA
```

### 4.3 Website and Channel Assets

The website should eventually explain the relationship among:

```txt
venture-mfg.com
venture-pcba.com
confirmed official social channels
confirmed content channels
```

Only confirmed official channels should appear in footer links, Official Resources, and future schema `sameAs` fields.

### 4.4 Required Brand Clarification Logic

The site must include a first-build page that clarifies:

```txt
Venture Electronics vs Venture PCB / Venture PCBA
```

This page should explain:

- Venture Electronics is the mother brand.
- Venture PCB and Venture PCBA are service-related or search-entry concepts.
- Related websites and channels should be understood as part of the Venture Electronics brand ecosystem when confirmed.
- Unconfirmed accounts should not be treated as official sources.

---

## 5. Business and GEO Goals

The first-build site must satisfy four goals.

### 5.1 Brand Goal

Clarify Venture Electronics as the mother brand and explain its relationship to Venture PCB, Venture PCBA, and related domains.

### 5.2 Conversion Goal

Make it easy for buyers to request quotes for:

- PCB Assembly / PCBA
- Turnkey PCB Assembly
- Prototype & Low-volume PCBA
- EMS & Box Build
- Component Sourcing & BOM Review
- Testing & Quality Control

### 5.3 Trust Goal

Build trust through visible, crawlable explanations of:

- BOM review
- component sourcing
- assembly process support
- testing and quality control
- project coordination
- evidence boundaries

### 5.4 GEO Goal

Make the website readable by AI and search systems through:

- structured page hierarchy
- crawlable HTML content
- clear service relationships
- visible FAQs and key facts later
- future metadata, schema, sitemap, robots, and llms.txt support

---

## 6. Locked Service Hierarchy

Use this service hierarchy exactly.

```txt
Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control
```

### 6.1 Meaning of Each Level

| Service | Role |
|---|---|
| PCB Assembly / PCBA | Primary service category, main conversion entry, industry/search-entry term |
| Turnkey PCB Assembly | PCBA child page for full-process delivery |
| Prototype & Low-volume PCBA | PCBA child page for project stage and order volume intent |
| SMT, THT & BGA Capabilities | PCBA child page for assembly processes and technical capability |
| EMS & Box Build | Higher-level system manufacturing capability |
| PCB Fabrication | Supporting bare-board manufacturing capability that supports PCBA |
| Component Sourcing & BOM Review | Supply-chain and engineering support capability for Turnkey PCBA and EMS |
| Testing & Quality Control | Cross-service trust, inspection, testing, and quality capability |

### 6.2 Deprecated Old Service Structure

Do not use the previous flat service structure:

```txt
PCBA / PCB Assembly
Turnkey PCBA
EMS Manufacturing
Box Build Assembly
Component Sourcing
DFM & BOM Review
Testing & Quality Control
PCB Fabrication
```

Replace it with the locked hierarchy above.

### 6.3 Important Service Rules

1. PCB Assembly / PCBA is the primary service category.
2. Turnkey, Prototype, and SMT/THT/BGA are children under PCB Assembly / PCBA.
3. EMS and Box Build should be one combined first-build route: `EMS & Box Build`.
4. Component Sourcing and BOM Review should be one combined first-build route.
5. PCB Fabrication should not outrank PCB Assembly / PCBA.
6. Testing & Quality Control should be treated as cross-service trust infrastructure, not a narrow add-on.

---

## 7. Current Nav-Only Sitemap

The current scaffold is a **nav-only Next.js App Router sitemap scaffold**. It validates route coverage, header dropdowns, footer groups, and placeholder page wiring. It does not create final page copy or final UI.

Use `/services/` as the service hub. Do not use `/capabilities/` as the main service hub. The header label for `/engineering-support/` is shortened to **Engineering**.

```txt
/
├── /about/
│   ├── /brand/venture-electronics-vs-venture-pcb-pcba/
│   ├── /official-resources/
│   ├── /about/company-overview/
│   └── /about/news/
│
├── /services/
│   ├── /services/pcb-assembly-pcba/
│   │   ├── /services/pcb-assembly-pcba/turnkey-pcb-assembly/
│   │   ├── /services/pcb-assembly-pcba/prototype-low-volume-pcba/
│   │   └── /services/pcb-assembly-pcba/smt-tht-bga-capabilities/
│   ├── /services/ems-box-build/
│   ├── /services/pcb-fabrication/
│   └── /services/component-sourcing-bom-review/
│
├── /quality-testing/
│   ├── /quality-testing/testing-quality-control/
│   ├── /quality-testing/electrical-testing/
│   ├── /quality-testing/product-reliability-testing/
│   ├── /quality-testing/testing-inspection-equipment/
│   ├── /quality-testing/quality-management-system/
│   └── /quality-testing/packaging-logistics/
│
├── /engineering-support/
│   ├── /engineering-support/smt-tht-bga-process-support/
│   ├── /engineering-support/pcb-test-fixture-support/
│   └── /engineering-support/ic-programming-support/
│
├── /industries/
│   ├── /industries/industrial-electronics/
│   ├── /industries/iot-smart-devices/
│   ├── /industries/consumer-electronics/
│   ├── /industries/energy-power-electronics/
│   ├── /industries/automation-control/
│   └── /industries/communication-equipment/
│
├── /resources/
│   ├── /resources/faq/
│   ├── /resources/blog/
│   ├── /resources/guides/
│   ├── /resources/downloads/
│   ├── /resources/catalog/
│   ├── /resources/glossary/
│   └── /resources/case-studies/
│
├── /contact/
├── /request-a-quote/
├── /thank-you/
├── /privacy-policy/
├── /terms/
└── /sitemap/
```

### 7.1 Current Nav-Only Page List

| Page | URL | Scaffold status | Page responsibility |
|---|---|---:|---|
| Home | `/` | Required placeholder | Sitemap entry and nav-only homepage placeholder |
| About | `/about/` | Required placeholder | About dropdown hub |
| Brand Clarification | `/brand/venture-electronics-vs-venture-pcb-pcba/` | Required placeholder | Explain Venture Electronics / Venture PCB / Venture PCBA relationship later |
| Official Resources | `/official-resources/` | Required placeholder | Official domains and channels placeholder |
| Company Overview | `/about/company-overview/` | Required placeholder | Company overview placeholder |
| News | `/about/news/` | Required placeholder | News placeholder |
| Services | `/services/` | Required placeholder | Service dropdown hub |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | Required placeholder | Primary service category route |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | Required placeholder | PCBA child route |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | Required placeholder | PCBA child route |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | Required placeholder | PCBA child route |
| EMS & Box Build | `/services/ems-box-build/` | Required placeholder | Service route |
| PCB Fabrication | `/services/pcb-fabrication/` | Required placeholder | Supporting service route |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | Required placeholder | Support service route |
| Quality & Testing | `/quality-testing/` | Required placeholder | Quality dropdown hub |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | Required placeholder | Quality child route |
| Electrical Testing | `/quality-testing/electrical-testing/` | Required placeholder | Quality child route |
| Product Reliability Testing | `/quality-testing/product-reliability-testing/` | Required placeholder | Quality child route |
| Testing & Inspection Equipment | `/quality-testing/testing-inspection-equipment/` | Required placeholder | Quality child route |
| Quality Management System | `/quality-testing/quality-management-system/` | Required placeholder | Quality child route |
| Packaging & Logistics | `/quality-testing/packaging-logistics/` | Required placeholder | Quality child route |
| Engineering | `/engineering-support/` | Required placeholder | Engineering dropdown hub |
| SMT, THT & BGA Process Support | `/engineering-support/smt-tht-bga-process-support/` | Required placeholder | Engineering child route |
| PCB Test Fixture Support | `/engineering-support/pcb-test-fixture-support/` | Required placeholder | Engineering child route |
| IC Programming Support | `/engineering-support/ic-programming-support/` | Required placeholder | Engineering child route |
| Industries | `/industries/` | Required placeholder | Industries dropdown hub |
| Industrial Electronics | `/industries/industrial-electronics/` | Required placeholder | Industry child route |
| IoT & Smart Devices | `/industries/iot-smart-devices/` | Required placeholder | Industry child route |
| Consumer Electronics | `/industries/consumer-electronics/` | Required placeholder | Industry child route |
| Energy & Power Electronics | `/industries/energy-power-electronics/` | Required placeholder | Industry child route |
| Automation & Control | `/industries/automation-control/` | Required placeholder | Industry child route |
| Communication Equipment | `/industries/communication-equipment/` | Required placeholder | Industry child route |
| Resources | `/resources/` | Required placeholder | Resources dropdown hub |
| FAQ | `/resources/faq/` | Required placeholder | Resource child route |
| Blog | `/resources/blog/` | Required placeholder | Resource child route |
| Guides | `/resources/guides/` | Required placeholder | Resource child route |
| Downloads | `/resources/downloads/` | Required placeholder | Resource child route |
| Catalog | `/resources/catalog/` | Required placeholder | Resource child route |
| Glossary | `/resources/glossary/` | Required placeholder | Resource child route |
| Case Studies | `/resources/case-studies/` | Required placeholder | Resource child route |
| Contact | `/contact/` | Required placeholder | Contact route |
| Request a Quote | `/request-a-quote/` | Required placeholder | RFQ route |
| Thank You | `/thank-you/` | Required placeholder | Post-submit route |
| Privacy Policy | `/privacy-policy/` | Required placeholder | Legal route |
| Terms | `/terms/` | Required placeholder | Legal route |
| Sitemap | `/sitemap/` | Required placeholder | Human-readable sitemap route |

---

## 8. Pages Included Only as Placeholders

The current scaffold includes several sections that were previously later-build content areas. They are included now only as **nav-only placeholder routes** so the sitemap, header, footer, and route hierarchy can be reviewed.

| Page type | Current scaffold status | Production content status |
|---|---|---|
| Industry pages | Placeholder routes included | Final claims require evidence and review |
| Blog / guides / downloads / catalog / glossary / case studies | Placeholder routes included | Final systems and content are later-build work |
| Quality & Testing child pages | Placeholder routes included | Equipment, standards, and process claims require evidence |
| Engineering child pages | Placeholder routes included | Technical support claims require evidence |
| Legal pages | Placeholder routes included | Final legal copy requires review |
| Full CMS | Not implemented | Later build |
| Full schema / llms.txt implementation | Not implemented | Later build |

---

## 9. Main Navigation

Use this navigation structure for the demo.

```txt
Home

Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control

About
- About Venture Electronics
- Venture Electronics vs Venture PCB / Venture PCBA
- Official Resources / Online Presence

Resources
- FAQ / Resources

Request a Quote
```

### 9.1 Navigation Rules

1. PCB Assembly / PCBA should appear first under Services.
2. PCBA child services should be visually nested under PCB Assembly / PCBA.
3. EMS & Box Build should remain a top-level service under Services.
4. PCB Fabrication should be visible but not visually prioritized above PCBA.
5. Brand Clarification and Official Resources should be accessible through About.
6. Request a Quote should be a persistent CTA in the header.

---

## 10. Footer Structure

Use this footer structure for the demo.

```txt
Company
- About Venture Electronics
- Brand & Business Line Clarification
- Official Resources / Online Presence
- Contact Venture Electronics

Services
- PCB Assembly / PCBA
- Turnkey PCB Assembly
- Prototype & Low-volume PCBA
- SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control

Resources
- FAQ / Resources
- Request a Quote

Official Channels
- Main Website placeholder
- PCBA-focused Website placeholder
- LinkedIn placeholder
- YouTube placeholder
- Other confirmed official channels only

Contact
- Email placeholder
- Quote form
- Location / contact details placeholder
```

### 10.1 Footer Rules

1. Do not add unconfirmed social profiles as official channels.
2. Do not add schema `sameAs` links in this demo scaffold.
3. Do not use the footer to make unsupported claims.
4. Footer links should reinforce the brand/entity architecture.

---

## 11. Page Responsibility Map

| Page | Responsibility | Primary CTA | Template type |
|---|---|---|---|
| Home | Brand positioning + service hierarchy + PCBA-first conversion + GEO explanation entry | Request a Quote / Explore Services | Homepage template |
| About | Company identity and public-safe company explanation | Contact Venture | Brand page template |
| Services | Service hierarchy overview | Explore PCB Assembly / Request Quote | Service hub template |
| PCB Assembly / PCBA | Primary service category and conversion page | Request PCBA Quote | Primary service template |
| Turnkey PCB Assembly | Full-process delivery model under PCBA | Submit BOM / Gerber | PCBA child template |
| Prototype & Low-volume PCBA | Prototype and small-batch PCBA intent | Request Prototype Quote | PCBA child template |
| SMT, THT & BGA Capabilities | Assembly process and technical capability | Discuss Assembly Requirements | Technical capability template |
| EMS & Box Build | System-level manufacturing capability | Discuss EMS / Box Build Project | Strategic service template |
| PCB Fabrication | Supporting bare-board manufacturing capability | Include PCB Fabrication in Quote | Supporting service template |
| Component Sourcing & BOM Review | Supply-chain and engineering support for Turnkey PCBA / EMS | Send BOM for Review | Support service template |
| Testing & Quality Control | Cross-service quality and testing trust page | Discuss Testing Requirements | Trust page template |
| Brand Clarification | Explain Venture Electronics / Venture PCB / Venture PCBA relationship | View Official Resources | Brand authority template |
| Official Resources | Explain official domains and channels | Contact Official Team | Official resources template |
| FAQ / Resources | Buyer questions and GEO support | Request Quote | FAQ / resources template |
| Contact | RFQ and inquiry path | Submit RFQ | Contact template |

---

## 12. Internal Linking Logic

### 12.1 Home Should Link To

- Services
- PCB Assembly / PCBA
- Turnkey PCB Assembly
- EMS & Box Build
- Component Sourcing & BOM Review
- Testing & Quality Control
- Brand Clarification
- Official Resources
- Contact / Request a Quote

### 12.2 Services Hub Should Link To

```txt
Services
→ PCB Assembly / PCBA
  → Turnkey PCB Assembly
  → Prototype & Low-volume PCBA
  → SMT, THT & BGA Capabilities
→ EMS & Box Build
→ PCB Fabrication
→ Component Sourcing & BOM Review
→ Testing & Quality Control
```

### 12.3 PCB Assembly / PCBA Should Link To

- Turnkey PCB Assembly
- Prototype & Low-volume PCBA
- SMT, THT & BGA Capabilities
- Component Sourcing & BOM Review
- Testing & Quality Control
- PCB Fabrication
- Contact / RFQ
- FAQ

### 12.4 Turnkey PCB Assembly Should Link To

- PCB Assembly / PCBA
- Component Sourcing & BOM Review
- Testing & Quality Control
- EMS & Box Build
- Contact / RFQ

### 12.5 EMS & Box Build Should Link To

- PCB Assembly / PCBA
- Component Sourcing & BOM Review
- Testing & Quality Control
- PCB Fabrication
- Contact / RFQ

### 12.6 Brand Clarification Should Link To

- About Venture Electronics
- Official Resources
- Services
- PCB Assembly / PCBA
- Contact

### 12.7 Official Resources Should Link To

- Brand Clarification
- About Venture Electronics
- Contact
- confirmed official assets only

---

## 13. Homepage Demo Structure

The first demo page should be the homepage.

Demo title:

```txt
Venture Homepage Demo — Brand + PCBA-first Direction
```

### 13.1 Homepage Sections

Build the homepage with these sections:

```txt
1. Header / navigation
2. Hero section
3. Venture Electronics mother-brand positioning
4. Services overview based on the locked service hierarchy
5. PCB Assembly / PCBA primary service block
6. PCBA child services block
   - Turnkey PCB Assembly
   - Prototype & Low-volume PCBA
   - SMT, THT & BGA Capabilities
7. EMS & Box Build system-level manufacturing block
8. Supporting capabilities block
   - PCB Fabrication
   - Component Sourcing & BOM Review
   - Testing & Quality Control
9. Brand clarification teaser
10. Official resources teaser
11. Final RFQ CTA
12. Footer preview
```

### 13.2 Homepage First-Screen Message

Use public-safe placeholder copy. Suggested direction:

```txt
Venture Electronics
PCB Assembly / PCBA and EMS & Box Build Support for Electronics Projects

Venture Electronics supports electronics teams with PCB assembly, sourcing coordination, testing, quality control, and system-level build support.
```

Do not use unsupported claims such as:

```txt
No. 1 PCB manufacturer
Certified for every industry
Guaranteed fastest delivery
Serving all Fortune 500 customers
Largest factory
Unlimited production capacity
```

---

## 14. Recommended Component Structure

Codex should create reusable components that make the demo easy to review and adjust.

```txt
components/
├── site/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── CTAButton.tsx
├── home/
│   ├── Hero.tsx
│   ├── BrandPositioning.tsx
│   ├── ServicesOverview.tsx
│   ├── PCBAServiceBlock.tsx
│   ├── PCBAChildServicesBlock.tsx
│   ├── EMSBoxBuildBlock.tsx
│   ├── SupportCapabilitiesBlock.tsx
│   ├── BrandClarificationTeaser.tsx
│   ├── OfficialResourcesTeaser.tsx
│   └── FinalCTA.tsx
└── shared/
    ├── PageShell.tsx
    ├── SectionHeader.tsx
    ├── ServiceCard.tsx
    ├── ServiceGroup.tsx
    └── PlaceholderPage.tsx
```

Required data file:

```txt
lib/
└── site-data.ts
```

`lib/site-data.ts` should define:

- site metadata placeholders
- navigation items
- service hierarchy
- footer link groups
- homepage section data
- placeholder page metadata
- CTA labels
- related page links

---

## 15. Required Next.js Route Structure

Codex should create this route structure.

If the existing repo uses `src/app/`, use `src/app/`. If the existing repo uses `app/`, use `app/`. Do not create both.

```txt
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── about/
│   ├── page.tsx
│   ├── company-overview/
│   │   └── page.tsx
│   └── news/
│       └── page.tsx
├── services/
│   ├── page.tsx
│   ├── pcb-assembly-pcba/
│   │   ├── page.tsx
│   │   ├── turnkey-pcb-assembly/
│   │   │   └── page.tsx
│   │   ├── prototype-low-volume-pcba/
│   │   │   └── page.tsx
│   │   └── smt-tht-bga-capabilities/
│   │       └── page.tsx
│   ├── ems-box-build/
│   │   └── page.tsx
│   ├── pcb-fabrication/
│   │   └── page.tsx
│   └── component-sourcing-bom-review/
│       └── page.tsx
├── quality-testing/
│   ├── page.tsx
│   ├── testing-quality-control/
│   │   └── page.tsx
│   ├── electrical-testing/
│   │   └── page.tsx
│   ├── product-reliability-testing/
│   │   └── page.tsx
│   ├── testing-inspection-equipment/
│   │   └── page.tsx
│   ├── quality-management-system/
│   │   └── page.tsx
│   └── packaging-logistics/
│       └── page.tsx
├── engineering-support/
│   ├── page.tsx
│   ├── smt-tht-bga-process-support/
│   │   └── page.tsx
│   ├── pcb-test-fixture-support/
│   │   └── page.tsx
│   └── ic-programming-support/
│       └── page.tsx
├── industries/
│   ├── page.tsx
│   ├── industrial-electronics/
│   │   └── page.tsx
│   ├── iot-smart-devices/
│   │   └── page.tsx
│   ├── consumer-electronics/
│   │   └── page.tsx
│   ├── energy-power-electronics/
│   │   └── page.tsx
│   ├── automation-control/
│   │   └── page.tsx
│   └── communication-equipment/
│       └── page.tsx
├── brand/
│   └── venture-electronics-vs-venture-pcb-pcba/
│       └── page.tsx
├── official-resources/
│   └── page.tsx
├── resources/
│   ├── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── guides/
│   │   └── page.tsx
│   ├── downloads/
│   │   └── page.tsx
│   ├── catalog/
│   │   └── page.tsx
│   ├── glossary/
│   │   └── page.tsx
│   └── case-studies/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── request-a-quote/
│   └── page.tsx
├── thank-you/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms/
│   └── page.tsx
└── sitemap/
    └── page.tsx
```

---

## 16. Placeholder Page Requirements

Each first-build route should render a simple placeholder page using `PlaceholderPage.tsx`.

Each placeholder page should include:

1. Page title.
2. Page role / responsibility.
3. Short public-safe summary.
4. Primary CTA.
5. Related page links.
6. Note: “Final copy will be created in Stage 3.”

Example placeholder summaries:

| Page | Placeholder role summary |
|---|---|
| PCB Assembly / PCBA | Primary service category and main conversion entry |
| Turnkey PCB Assembly | PCBA child page for full-process delivery |
| Prototype & Low-volume PCBA | PCBA child page for prototype and low-volume builds |
| SMT, THT & BGA Capabilities | PCBA child page for assembly process and technical capability |
| EMS & Box Build | System-level manufacturing capability |
| PCB Fabrication | Supporting front-end bare-board manufacturing capability |
| Component Sourcing & BOM Review | Supply-chain and engineering support capability |
| Testing & Quality Control | Cross-service trust and quality capability |
| Brand Clarification | Brand/entity relationship explanation page |
| Official Resources | Official channels and online presence page |

---

## 17. GEO and Crawlable Structure Requirements

The demo scaffold should be simple, but it must not block future SEO/GEO implementation.

### 17.1 Required for Demo

- Use semantic HTML.
- Keep important content as HTML text.
- Use server components unless interactivity is actually required.
- Keep the homepage and placeholder pages crawlable.
- Avoid empty React shells.
- Avoid placing important text only in images.
- Avoid unnecessary client-side rendering.

### 17.2 Prepare For Later, But Do Not Implement Yet

Do not implement these in the demo scaffold unless explicitly asked later:

- CMS
- schema JSON-LD
- llms.txt
- llms-full.txt
- sitemap generation
- robots generation
- production metadata system
- full SEO/GEO validation scripts
- real form submission

However, the file and component structure should not make these hard to add later.

---

## 18. Content and Claim Safety Rules

Codex must use only public-safe placeholder copy.

Do not invent:

- certifications
- factory size
- factory location details unless provided
- production volume
- customer names
- customer logos
- testing equipment
- specific compliance standards
- audit readiness
- medical, automotive, aerospace, defense, or other regulated-industry capabilities
- guaranteed lead times
- “No. 1” or “largest” claims
- unsupported years of experience

If a section needs proof later, mark it as:

```txt
Evidence-needed placeholder.
```

Never turn evidence-needed content into a strong marketing claim.

---

## 19. Design Direction for Demo Scaffold

The demo should be clean and B2B-oriented.

Use a simple visual hierarchy:

1. Clear hero.
2. Strong PCBA primary service block.
3. Nested PCBA child services.
4. EMS & Box Build as strategic capability.
5. Supporting capabilities grouped separately.
6. Brand clarification and official resources near the lower part of the homepage.
7. Clear RFQ CTA.

Do not over-design. The purpose is structure validation, not final visual design.

---

## 20. Development Boundaries

### 20.1 Codex Should Do

- Inspect the repo first.
- Preserve existing package manager and style conventions if present.
- Use Next.js App Router.
- Use TypeScript.
- Create the route scaffold.
- Create reusable components.
- Create `lib/site-data.ts`.
- Create a nav-only homepage placeholder.
- Create placeholder pages for all current sitemap routes.
- Ensure navigation and footer links work.
- Keep code readable and easy to review.

### 20.2 Codex Should Not Do

- Do not redesign the entire brand.
- Do not create a production CMS.
- Do not implement schema.
- Do not implement llms.txt.
- Do not implement XML sitemap / robots unless specifically requested.
- Do not add external UI libraries unless the repo already uses them.
- Do not create final industry content; industry routes are placeholders only.
- Do not invent content claims.
- Do not use the old flat service structure.
- Do not use `/capabilities/` as the core first-build service hub.

---

## 21. Acceptance Criteria

The nav-only scaffold is acceptable when:

1. The app runs locally.
2. All current sitemap routes exist as App Router placeholder pages.
3. Header navigation exposes the required dropdown groups: Home, About, Services, Quality & Testing, Engineering, Industries, Resources, Contact.
4. Footer groups match the current sitemap groups: About, Services, Quality & Testing, Engineering, Industries, Resources, Contact, Legal.
5. `/services/` remains the service hub.
6. `/quality-testing/testing-quality-control/` replaces the old `/services/testing-quality-control/` route.
7. `/engineering-support/` remains the URL, while the header/footer label is shortened to Engineering.
8. No old flat service routes or `/capabilities/` route are introduced.
9. No unsupported claims are introduced.
10. Core placeholder content is crawlable HTML text.
11. The code is suitable for client-review route and navigation validation, not final production.

---

## 22. Codex Task Prompt

Use this prompt when asking Codex to build the scaffold:

```txt
Read the file "Venture Website Rebuild — Positioning & Site Structure Lock" and treat it as the source of truth.

Task:
Build a nav-only Next.js App Router scaffold for the Venture Electronics website rebuild.

Goal:
Create a client-review scaffold that validates the current sitemap, header dropdown structure, footer groups, route placeholders, and related-link wiring.

Important:
- This is not a production website.
- Do not implement CMS.
- Do not implement schema.
- Do not implement llms.txt.
- Do not implement XML sitemap or robots yet.
- Create industry, resources, quality-testing, engineering, legal, contact, request-a-quote, thank-you, and sitemap routes as placeholders only.
- Do not invent unsupported claims.
- Do not use the old flat service structure.
- Use /services/ as the service hub.
- Keep Venture Electronics as the mother brand.
- Keep PCB Assembly / PCBA as the primary service category.

Before making changes:
1. Inspect the existing repo structure.
2. Identify whether the project uses app/ or src/app/.
3. Briefly summarize the route structure and component plan.
4. Then implement the scaffold.

Deliverables:
- Nav-only homepage placeholder at app/page.tsx or src/app/page.tsx
- Required current sitemap route placeholders
- Header, Footer, CTAButton
- Shared PageShell, SectionHeader, ServiceCard, ServiceGroup, PlaceholderPage
- lib/site-data.ts
- Working navigation and footer links
- Public-safe placeholder copy only
```

---

## 23. Optional AGENTS.md Content

If an `AGENTS.md` file is useful for the repo, Codex may suggest adding this content separately.

```md
# Venture Website Rebuild — Codex Instructions

## Source of Truth
Use the latest "Venture Website Rebuild — Positioning & Site Structure Lock" document as the source of truth for website positioning, site architecture, route structure, service hierarchy, and demo scope.

## Current Service Architecture
Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control

## Rules
- Keep Venture Electronics as the mother brand.
- Use /services/ as the service hub.
- Use /quality-testing/ for testing and quality routes.
- Use /engineering-support/ for Engineering routes; the navigation label should be Engineering.
- Do not use the old flat service structure.
- Do not use /capabilities/ as the core first-build service hub.
- Do not use /services/testing-quality-control/.
- Do not split EMS & Box Build into separate first-build routes.
- Do not split Component Sourcing & BOM Review into separate first-build routes.
- Do not create unsupported claims.
- Do not implement CMS, schema, XML sitemap, robots, or llms.txt in the demo scaffold unless explicitly requested.
- Keep important content crawlable as HTML text.

## Demo Goal
Build only the Next.js nav-only scaffold for client review of sitemap, header navigation, footer groups, and route placeholders.
```

---

## 24. Final Direction

The first Codex output should not be a polished final website.

It should be a structure-first Next.js demo that proves:

```txt
Venture Electronics = mother brand
PCB Assembly / PCBA = primary service category and main conversion entry
Turnkey / Prototype / SMT-THT-BGA = PCBA child paths
EMS & Box Build = higher-level system manufacturing capability
PCB Fabrication / Component Sourcing & BOM Review / Testing & Quality Control = support and trust capabilities
Brand Clarification + Official Resources = required GEO authority pages
```

Build the site skeleton first. Visual refinement, full copywriting, CMS, schema, llms.txt, SEO metadata, evidence-backed content, and production QA come later.
