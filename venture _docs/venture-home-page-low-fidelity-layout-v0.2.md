# Venture Home Page Low-Fidelity Layout v0.2

**Document type:** Homepage structure / low-fidelity layout brief  
**Project:** Venture Electronics Website Rebuild  
**Audience:** Strategy / Content / GEO / Design / Development / Codex  
**Stage:** Homepage layout planning after sitemap scaffold  
**Version:** v0.2  
**Date:** 2026-05-28  

---

## 1. Purpose of This Document

This document defines the low-fidelity homepage layout for the Venture Electronics website rebuild.

The homepage should not become a full-site sitemap or a hub for every page. It should function as a focused **buyer decision router**, **brand positioning page**, and **PCBA-first conversion entry**.

The homepage should combine:

1. Standard B2B export manufacturing homepage logic;
2. Venture Electronics' special brand positioning;
3. The updated service hierarchy;
4. GEO-friendly / AI-readable structure;
5. RFQ conversion guidance.

---

## 2. Research Conclusion: B2B Manufacturing Homepage Logic

B2B manufacturing and export websites usually do not expose every page on the homepage.

A strong manufacturing homepage should quickly answer:

```txt
Who are you?
What do you manufacture or support?
What should buyers click first?
Why should buyers trust you?
What information is needed for RFQ?
How do your services relate to each other?
```

For Venture Electronics, the homepage also needs to answer:

```txt
Is Venture Electronics the main brand?
What is Venture PCB / Venture PCBA?
Is PCBA the main service entry?
Where do EMS & Box Build fit?
Which official sites and channels should buyers or AI systems trust?
```

Therefore, the homepage should be:

```txt
Home = buyer decision router + brand positioning page + PCBA-first conversion entry
```

Not:

```txt
Home = all pages hub
Home = full sitemap
Home = generic visual landing page
```

---

## 3. Homepage Role

The Venture homepage should serve four primary roles:

| Role | Meaning |
|---|---|
| Brand identity | Make Venture Electronics the mother brand |
| Service routing | Route buyers toward PCBA, PCBA child paths, EMS & Box Build, and key support capabilities |
| GEO clarity | Explain Venture Electronics / Venture PCB / Venture PCBA relationship in visible HTML text |
| Conversion | Help buyers prepare and submit a PCBA or EMS inquiry |

---

## 4. What the Homepage Should Not Do

The homepage should not expose every page from the full sitemap.

Do not make homepage body sections for:

```txt
News
Blog
Downloads
Catalog
Glossary
Case Studies
All Quality subpages
All Engineering subpages
All Industry subpages
Company news
Full official channel list
Full sitemap
```

These pages can remain accessible through:

```txt
Header / mega navigation
Footer
Sitemap
Related links
Internal links from relevant pages
```

The homepage body should only show selected high-priority buyer paths.

---

## 5. Recommended Homepage Layout

```txt
Home Page Low-Fidelity Layout v0.2

1. Header
2. Hero
3. Who Venture Electronics Is
4. Start with PCB Assembly / PCBA
5. Choose Your PCBA Path
6. Beyond PCBA: EMS & Box Build
7. Supporting Capabilities
8. RFQ Guidance
9. Brand Clarification + Official Resources Teaser
10. Final CTA
11. Footer
```

This layout is intentionally focused. It avoids turning the homepage into a heavy full-site hub.

---

## 6. Section-by-Section Layout

## 6.1 Header

### Purpose

The header owns full-site navigation. Because the header already carries the full navigation structure, the homepage body does not need to repeat every page link.

### Recommended Navigation

```txt
Home
About
Services
Quality & Testing
Engineering
Industries
Resources
Contact
Request a Quote
```

### Notes

- `Request a Quote` should remain visible as a primary CTA.
- Services should expose the updated PCBA-first hierarchy.
- Quality & Testing, Engineering, Industries, and Resources can exist in navigation, but do not need full homepage sections.

---

## 6.2 Hero: Venture Electronics + PCBA-first Positioning

### Purpose

The hero should make the buyer understand the company, primary service, and next action within a few seconds.

### Low-Fidelity Structure

```txt
[H1]
Venture Electronics

[Subheadline]
PCB Assembly / PCBA and EMS Support for Electronics Projects

[Short paragraph]
Venture Electronics supports electronics teams with PCB assembly, turnkey PCBA, component sourcing, testing, and EMS & box build project coordination.

[Primary CTA]
Request a Quote

[Secondary CTA]
Explore PCB Assembly / PCBA
```

### Optional Right-side Visual

```txt
Design files
→ BOM review
→ PCB Assembly / PCBA
→ Testing
→ EMS & Box Build
```

### Guardrails

Do not use unsupported claims such as:

```txt
No.1 PCB manufacturer
Certified global EMS leader
Trusted by top brands
Large-scale factory capacity
```

Unless Venture provides evidence and approval.

---

## 6.3 Who Venture Electronics Is / About + GEO Direct Answer

### Purpose

This is the homepage's About block, but it should be written as a GEO-aware company identity block.

For a normal B2B site, hero is often followed by an About / Who We Are section. For Venture, this section needs to also solve the brand-entity confusion around Venture Electronics, Venture PCB, Venture PCBA, `venture-mfg.com`, and `venture-pcba.com`.

### Low-Fidelity Structure

```txt
[Eyebrow]
Who Venture Electronics Is

[H2]
A PCBA-first electronics manufacturing partner under the Venture Electronics brand

[Body]
Venture Electronics is the mother brand for Venture’s PCB assembly, PCBA, EMS, box build, component sourcing, and electronics manufacturing support services.

Venture PCB and Venture PCBA are service-entry and search-entry concepts connected to Venture Electronics, not replacements for the mother brand.

[Small links]
About Venture Electronics
Venture Electronics vs Venture PCB / Venture PCBA
```

### Why This Section Comes After Hero

It answers two audiences at once:

```txt
Human buyers: Who are you?
Google / AI systems: How should Venture Electronics, Venture PCB, and Venture PCBA be understood?
```

### GEO Requirement

This section should be visible HTML text, not an image.

---

## 6.4 Start with PCB Assembly / PCBA

### Purpose

This is the homepage's primary service section. PCBA should be visually and structurally stronger than other service entries.

### Low-Fidelity Structure

```txt
[H2]
Start with PCB Assembly / PCBA

[Body]
For most electronics projects, PCB assembly is the practical starting point. Venture supports PCBA projects with assembly coordination, BOM review, sourcing support, and testing requirements.

[Buyer needs]
- PCB assembly for new electronics projects
- BOM and Gerber review before quotation
- Turnkey assembly support
- Prototype or low-volume builds
- Testing requirements before delivery

[CTA]
Request a PCBA Quote
```

### Design Note

This section should feel larger or more important than the secondary service sections.

---

## 6.5 Choose Your PCBA Path

### Purpose

This section explains the three PCBA child paths without making them appear equal to the parent PCBA service category.

### Low-Fidelity Structure

```txt
[H2]
Choose the PCBA Path That Matches Your Project Stage

[3 cards]

Turnkey PCB Assembly
For projects that need BOM review, sourcing coordination, assembly, and testing support.

Prototype & Low-volume PCBA
For early-stage builds, engineering validation, samples, and small-batch production.

SMT, THT & BGA Capabilities
For buyers comparing assembly processes and technical assembly support.
```

### Service Hierarchy

```txt
PCB Assembly / PCBA
├── Turnkey PCB Assembly
├── Prototype & Low-volume PCBA
└── SMT, THT & BGA Capabilities
```

### Guardrails

Do not turn SMT, THT & BGA into unsupported equipment or factory capability claims unless Venture provides evidence.

---

## 6.6 Beyond PCBA: EMS & Box Build

### Purpose

This section raises Venture's positioning beyond a basic PCB or PCBA supplier.

It should show that Venture can support broader electronics manufacturing workflows without overclaiming factory scale or full EMS capacity.

### Low-Fidelity Structure

```txt
[H2]
Beyond PCBA: EMS & Box Build Support

[Body]
For projects that go beyond board assembly, Venture can support a broader electronics manufacturing workflow involving PCBA, sourcing coordination, testing, final assembly, and box build-related project follow-through.

[Workflow]
PCBA
→ Testing
→ Final assembly
→ Box build
→ Delivery support

[CTA]
Discuss an EMS or Box Build Project
```

### Positioning Note

EMS & Box Build should appear as strategic capability, not as a replacement for the PCBA-first homepage positioning.

---

## 6.7 Supporting Capabilities

### Purpose

This section should show the capabilities that support PCBA and EMS projects without making them compete with the main PCBA service.

### Recommended Order

```txt
1. Component Sourcing & BOM Review
2. Testing & Quality Control
3. PCB Fabrication
```

### Low-Fidelity Structure

```txt
[H2]
Supporting Capabilities That Make PCBA and EMS Projects Work

[3 cards]

Component Sourcing & BOM Review
Supply-chain and engineering review support for turnkey PCBA and EMS projects.

Testing & Quality Control
Cross-service quality and testing support across PCBA, EMS, and box build workflows.

PCB Fabrication
Bare-board manufacturing support connected to the PCBA workflow.
```

### Notes

- Do not place PCB Fabrication first.
- Venture should not be positioned as PCB fabrication-first.
- Testing & Quality Control may link to the Quality & Testing section or route, not necessarily a Services route.

---

## 6.8 RFQ Guidance / What to Prepare

### Purpose

This is a strong B2B export conversion block. It helps buyers understand what information they should send before asking for a quote.

### Low-Fidelity Structure

```txt
[H2]
What to Prepare for a PCB Assembly or EMS Quote

[Checklist]
- Gerber files
- BOM
- Quantity
- PCB specifications
- Assembly requirements
- Testing requirements
- Target timeline
- Box build or final assembly notes, if applicable

[CTA]
Prepare Your RFQ
```

### Why This Matters

This section reduces friction for international buyers and shows that Venture understands project workflow.

---

## 6.9 Brand Clarification + Official Resources Teaser

### Purpose

This is one of the unique GEO sections of the Venture homepage.

It should not be too high on the page, but it must appear on the homepage because Venture's project problem includes AI / Google confusion around brand and web assets.

### Low-Fidelity Structure

```txt
[H2]
Venture Electronics, Venture PCB, and Venture PCBA

[Body]
Venture Electronics is the mother brand. Venture PCB and Venture PCBA are service-entry and search-entry concepts connected to Venture’s electronics manufacturing services.

[2 links]
Read Brand Clarification
View Official Resources
```

### GEO Note

This section helps the site act as an AI-readable brand fact system, not just a marketing website.

---

## 6.10 Final CTA

### Purpose

The final CTA closes the page and brings the buyer back to RFQ.

### Low-Fidelity Structure

```txt
[H2]
Ready to Discuss a PCB Assembly or EMS Project?

[Body]
Send your files, BOM, quantity, and project requirements. Venture Electronics can review the information and help route your inquiry to the right PCBA, sourcing, testing, or box build path.

[Primary CTA]
Request a Quote

[Secondary CTA]
Contact Venture Electronics
```

---

## 6.11 Footer

### Purpose

The footer can include broader navigation groups and official-resource links. It can carry more links than the homepage body.

### Footer Can Include

```txt
About
Services
Quality & Testing
Engineering
Industries
Resources
Contact
Legal
Official channels, if confirmed
```

### Guardrail

Do not include unconfirmed official social accounts in footer or future schema `sameAs`.

---

## 7. Recommended Component Structure for Codex

When converting this layout into a Next.js low-fidelity homepage scaffold, create components like:

```txt
components/home/
├── HomeHero.tsx
├── VentureIdentityBlock.tsx
├── PCBAPrimaryBlock.tsx
├── PCBAPathCards.tsx
├── EMSBoxBuildBlock.tsx
├── SupportCapabilitiesBlock.tsx
├── RFQGuidanceBlock.tsx
├── BrandAuthorityTeaser.tsx
└── HomeFinalCTA.tsx
```

Optional shared components:

```txt
components/shared/
├── SectionHeader.tsx
├── CTAButton.tsx
├── ServiceCard.tsx
└── SimpleWorkflow.tsx
```

---

## 8. Codex Implementation Scope

Codex should only convert the homepage from placeholder to low-fidelity section layout.

### Codex Should Do

```txt
- Update app/page.tsx to render homepage sections
- Create homepage section components
- Reuse existing site data where possible
- Keep other routes as PlaceholderPage
- Use crawlable HTML text
- Keep styling simple and structural
- Maintain existing header and footer
```

### Codex Should Not Do

```txt
- Do not redesign the entire site
- Do not convert every route from placeholder
- Do not implement CMS
- Do not implement schema JSON-LD
- Do not implement llms.txt
- Do not implement sitemap generation
- Do not add real form submission
- Do not add high-fidelity visual design
- Do not add unsupported claims
- Do not add certifications, customer logos, factory scale, production volume, or industry compliance claims
```

---

## 9. Suggested Codex Prompt

```txt
Convert only the homepage from nav-only PlaceholderPage into a low-fidelity homepage layout scaffold.

Use the existing sitemap, navItems, serviceHierarchy, footerGroups, and claim-safety rules.

Keep all other routes as PlaceholderPage.

Homepage layout sections:
1. Header
2. Hero
3. Who Venture Electronics Is
4. Start with PCB Assembly / PCBA
5. Choose Your PCBA Path
6. Beyond PCBA: EMS & Box Build
7. Supporting Capabilities
8. RFQ Guidance
9. Brand Clarification + Official Resources Teaser
10. Final CTA
11. Footer

Do not create final copy, CMS, schema, llms.txt, sitemap generation, high-fidelity visual design, or unsupported marketing claims.
```

---

## 10. Acceptance Criteria

The homepage low-fidelity layout is acceptable when:

```txt
☐ Homepage no longer renders only PlaceholderPage
☐ Header remains connected to existing nav data
☐ Footer remains connected to existing footer data
☐ Hero clearly presents Venture Electronics as the brand
☐ Hero presents PCBA as the primary service entry
☐ About / Who Venture Electronics Is block appears directly below hero
☐ PCBA appears as the main service section
☐ PCBA child paths are grouped under PCBA
☐ EMS & Box Build appears as strategic capability
☐ Supporting capabilities do not overpower PCBA
☐ RFQ guidance is visible
☐ Brand Clarification and Official Resources teaser is included
☐ No unsupported claims are added
☐ Other routes remain placeholders
```

---

## 11. Final Layout Summary

```txt
Home Page Low-Fidelity Layout v0.2
=
B2B export manufacturing homepage logic
+ Venture Electronics mother-brand positioning
+ PCBA-first service hierarchy
+ EMS & Box Build strategic elevation
+ GEO-readable brand clarification
+ RFQ conversion guidance
```

The homepage should be focused, readable, and structurally useful. It should not become a full sitemap or overloaded hub.
