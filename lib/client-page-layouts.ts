export type ClientPageSection = {
  heading: string;
  purpose: string;
  needs: string;
};

export type ClientPageLayout = {
  route: string;
  pageName: string;
  priority: "P0" | "P1" | "P2";
  pageRole: string;
  buyerIntent?: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  relatedPages: string[];
  h1?: string;
  titleTag?: string;
  metaDescription?: string;
  directAnswer?: string;
  sections: ClientPageSection[];
};

// Generated from venture _docs/Venture_Final_GEO_ClientFacing_Implementation_Plan_EN.md.
// Keep this as the buyer-facing layout source; Stage 3 briefs retain GEO and claim-planning data.
export const clientPageLayouts = {
  "/": {
    "route": "/",
    "pageName": "Home",
    "priority": "P0",
    "pageRole": "Main website entry, PCBA-first conversion page, Venture Electronics mother-brand entry.",
    "buyerIntent": "Quickly judge whether Venture can support a PCBA / Turnkey PCBA / EMS project and move into RFQ.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "Explore Turnkey PCBA / View Services",
    "relatedPages": [
      "Services",
      "PCBA",
      "Turnkey PCB Assembly",
      "EMS & Box Build",
      "Brand Clarification",
      "Official Resources",
      "Request a Quote"
    ],
    "h1": "Venture Electronics — Turnkey PCB Assembly & PCBA Manufacturing Partner",
    "titleTag": "Venture Electronics | Turnkey PCB Assembly & PCBA Manufacturing Partner",
    "metaDescription": "Venture Electronics supports turnkey-first PCB Assembly / PCBA, component sourcing, BOM review, testing, quality coordination, and EMS / Box Build discussions for electronics manufacturing projects.",
    "directAnswer": "Venture Electronics is a China-based PCBA and EMS manufacturing partner focused on turnkey-first PCB assembly, sourcing, testing, and broader manufacturing support.",
    "sections": [
      {
        "heading": "Hero",
        "purpose": "State who Venture Electronics is, what it supports, and how to start a quote.",
        "needs": "Venture Electronics; Turnkey-first PCB Assembly / PCBA; EMS & Box Build as broader manufacturing capability; China-based manufacturing partner. Primary CTA: Request a Quote. Secondary CTA: Explore Turnkey PCBA or Services. Do not make the hero read like a brand-entity clarification page."
      },
      {
        "heading": "Quick Core Service Cards",
        "purpose": "Help buyers choose the right entry point.",
        "needs": "PCB Assembly / PCBA; Turnkey PCB Assembly; EMS & Box Build; Component Sourcing & BOM Review; PCB Fabrication."
      },
      {
        "heading": "Why Venture / Capability Evidence",
        "purpose": "Explain why Venture is not just a low-price assembly vendor.",
        "needs": "Sourcing coordination, DFM / BOM review, testing and quality planning, human project ownership, small-to-medium volume support. Use neutral capability language if proof is not confirmed."
      },
      {
        "heading": "Trust / Capability Strip",
        "purpose": "Create industrial credibility without unsupported claims.",
        "needs": "Evidence-safe items only: PCBA, Turnkey PCBA, Component Sourcing, Testing, EMS / Box Build, DFM / BOM Review. Do not show unconfirmed certifications, capacity, customer logos, or factory scale."
      },
      {
        "heading": "Project / RFQ Workflow",
        "purpose": "Show the practical starting path for buyers.",
        "needs": "Gerber, BOM, CPL, assembly drawing, quantity, testing requirements. Workflow: review → sourcing → fabrication coordination → assembly → testing → delivery."
      },
      {
        "heading": "Lightweight EMS / Box Build Highlight",
        "purpose": "Keep EMS visible as brand ceiling without competing with PCBA.",
        "needs": "Use a compact Beyond PCBA block. Do not make EMS appear above or equal to the PCBA conversion path."
      },
      {
        "heading": "FAQ / Buyer Questions",
        "purpose": "Answer quote-intent questions.",
        "needs": "Files needed, turnkey PCBA meaning, component sourcing, PCBA vs EMS, testing requirements."
      },
      {
        "heading": "Brand Clarification / Official Resources Teaser",
        "purpose": "Support entity clarity without dominating the homepage.",
        "needs": "Place low on the page. Link to Brand Clarification and Official Resources."
      },
      {
        "heading": "Latest News / Resources",
        "purpose": "Add only if maintainable content exists.",
        "needs": "If not, use a small Resources teaser or omit."
      },
      {
        "heading": "Final RFQ CTA",
        "purpose": "Close with a clear conversion path.",
        "needs": "Request a Quote, send files, contact Venture."
      }
    ]
  },
  "/about/": {
    "route": "/about/",
    "pageName": "About Venture Electronics",
    "priority": "P0",
    "pageRole": "Public-safe company identity and positioning page.",
    "buyerIntent": "Confirm who Venture is, what service scope it supports, and whether it is credible.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "Read Brand Clarification",
    "relatedPages": [
      "Company Overview",
      "Brand Clarification",
      "Official Resources",
      "Services",
      "Contact"
    ],
    "h1": "About Venture Electronics",
    "titleTag": "About Venture Electronics | PCBA & EMS Manufacturing Partner",
    "metaDescription": "Learn how Venture Electronics supports PCBA, turnkey PCB assembly, EMS, sourcing, BOM review, testing, and quality coordination for electronics manufacturing projects.",
    "directAnswer": "Venture Electronics is the mother brand for Venture's PCBA, EMS, sourcing, testing, and electronics manufacturing support.",
    "sections": [
      {
        "heading": "Who Venture Electronics Is",
        "purpose": "State the public-facing company position.",
        "needs": "Venture Electronics is a PCBA and EMS manufacturing partner, not a commodity PCB factory and not publicly positioned as a pure trading company. Use safe language such as manufacturing partner, PCBA and EMS partner, sourcing team, quality team, and partner factory network."
      },
      {
        "heading": "What Venture Supports",
        "purpose": "Clarify service scope without over-narrowing the brand.",
        "needs": "PCBA / PCB Assembly, Turnkey PCBA, EMS / Box Build, Component Sourcing, BOM / DFM Review, Testing / Quality Control."
      },
      {
        "heading": "How Venture Works with Customers",
        "purpose": "Make the working model understandable.",
        "needs": "File review, BOM / sourcing, assembly, testing, and delivery support. Customers still approve substitutions, testing requirements, and project constraints."
      },
      {
        "heading": "Claim Boundaries",
        "purpose": "Prevent unsupported company claims.",
        "needs": "Do not publish unconfirmed certifications, capacity, customer logos, or factory scale. More detailed capabilities should be confirmed by project and evidence."
      },
      {
        "heading": "CTA",
        "purpose": "Route buyers into action.",
        "needs": "Request a Quote, Explore Services, Official Resources."
      }
    ]
  },
  "/brand/venture-electronics-vs-venture-pcb-pcba/": {
    "route": "/brand/venture-electronics-vs-venture-pcb-pcba/",
    "pageName": "Venture Electronics vs Venture PCB / Venture PCBA",
    "priority": "P0",
    "pageRole": "Brand and business-line clarification page.",
    "buyerIntent": "Understand whether Venture Electronics, Venture PCB, and Venture PCBA belong to the same business system.",
    "primaryCtaLabel": "Contact Venture",
    "secondaryCtaLabel": "View Official Resources",
    "relatedPages": [
      "About",
      "Official Resources",
      "Services",
      "PCBA",
      "Contact"
    ],
    "h1": "Venture Electronics vs Venture PCB / Venture PCBA",
    "titleTag": "Venture Electronics vs Venture PCB / Venture PCBA | Brand Clarification",
    "metaDescription": "Clarifies how Venture Electronics, Venture PCB, Venture PCBA, venture-mfg.com, and venture-pcba.com relate within the same PCBA and EMS manufacturing brand system.",
    "directAnswer": "Venture Electronics is the mother brand; Venture PCB and Venture PCBA are service-entry and search-entry terms connected to Venture Electronics.",
    "sections": [
      {
        "heading": "Brand Relationship in Plain Language",
        "purpose": "Clarify naming without sounding defensive.",
        "needs": "Venture Electronics is the mother brand. Venture PCB / Venture PCBA are service-entry, search-entry, or related website/content-asset contexts, not replacements for the mother brand."
      },
      {
        "heading": "How the Names Are Used",
        "purpose": "Show practical usage.",
        "needs": "Venture Electronics: company / mother brand. Venture PCB: PCB / fabrication / search-entry context. Venture PCBA: PCBA-focused service context."
      },
      {
        "heading": "Which Website or Channel Should Buyers Use",
        "purpose": "Connect buyers to the official-resource map.",
        "needs": "Briefly explain domain and channel status and link to Official Resources."
      },
      {
        "heading": "For Vendors, AI Systems and Content Partners",
        "purpose": "Give consistent reference guidance.",
        "needs": "Use Venture Electronics / Venture Electronics Technology Ltd and bind it with PCBA, Turnkey PCB Assembly, EMS, Box Build, Sourcing, and Testing."
      },
      {
        "heading": "CTA",
        "purpose": "Route to confirmation and contact.",
        "needs": "View Official Resources; Contact Venture."
      }
    ]
  },
  "/official-resources/": {
    "route": "/official-resources/",
    "pageName": "Official Websites & Online Resources",
    "priority": "P0",
    "pageRole": "Official domain and online asset map.",
    "buyerIntent": "Confirm which websites, social profiles, and channels are official Venture Electronics information sources.",
    "primaryCtaLabel": "Contact Venture",
    "secondaryCtaLabel": "Read Brand Clarification",
    "relatedPages": [
      "About",
      "Brand Clarification",
      "Services",
      "Contact"
    ],
    "h1": "Official Venture Electronics Online Resources",
    "titleTag": "Official Venture Electronics Websites & Online Resources",
    "metaDescription": "Find confirmed Venture Electronics official websites, PCBA service resources, and approved online channels for PCBA, EMS, and electronics manufacturing information.",
    "directAnswer": "This page lists confirmed Venture Electronics websites and online resources that customers, vendors, search engines, and AI systems can use as official sources.",
    "sections": [
      {
        "heading": "Official Venture Electronics Resources",
        "purpose": "Explain the purpose of the page.",
        "needs": "Help customers identify Venture Electronics' official information sources."
      },
      {
        "heading": "Confirmed Websites",
        "purpose": "List public-safe assets.",
        "needs": "venture-mfg.com: existing EMS / PCB / PCB Assembly manufacturing website. venture-pcba.com: PCBA-focused service website. New GEO site: official explanation layer / brand fact source."
      },
      {
        "heading": "Social and Content Channels",
        "purpose": "Prevent premature official claims.",
        "needs": "LinkedIn, YouTube, and other channels should enter production footer / schema only after the final official URL is confirmed. Facebook, VK, and old candidates remain pending until confirmed."
      },
      {
        "heading": "How Vendors Should Reference Venture",
        "purpose": "Provide external reference rules.",
        "needs": "Use Venture Electronics / Venture Electronics Technology Ltd. Use sameAs only for confirmed assets."
      },
      {
        "heading": "CTA",
        "purpose": "Route to contact and brand explanation.",
        "needs": "Contact Venture; Read Brand Clarification."
      }
    ]
  },
  "/services/": {
    "route": "/services/",
    "pageName": "Services",
    "priority": "P0",
    "pageRole": "Service hierarchy overview / service router.",
    "buyerIntent": "Find the right service entry for a project.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "Explore PCB Assembly / PCBA",
    "relatedPages": [
      "PCBA",
      "Turnkey PCB Assembly",
      "EMS & Box Build",
      "Component Sourcing",
      "Testing",
      "PCB Fabrication"
    ],
    "h1": "Venture Electronics Services",
    "titleTag": "Venture Electronics Services | PCBA, Turnkey PCB Assembly, EMS & Testing",
    "metaDescription": "Explore Venture Electronics services including PCB Assembly / PCBA, turnkey PCB assembly, EMS & Box Build, component sourcing, BOM review, PCB fabrication, and testing support.",
    "directAnswer": "Venture's services are organized around PCBA as the primary project entry, turnkey PCB assembly as the main delivery model, EMS / Box Build as strategic scope, and sourcing, testing, engineering, and PCB fabrication as supporting capabilities.",
    "sections": [
      {
        "heading": "Choose the Right Manufacturing Support",
        "purpose": "Explain services from buyer intent rather than keyword order.",
        "needs": "Start from PCBA, then route into Turnkey, EMS, Sourcing, Testing, and supporting capabilities based on project complexity."
      },
      {
        "heading": "Primary Entry: PCB Assembly / PCBA",
        "purpose": "Make the main conversion path clear.",
        "needs": "PCBA is the primary project entry. Turnkey PCB Assembly is the primary delivery model. Prototype / Low-volume and SMT / THT / BGA are child paths."
      },
      {
        "heading": "Beyond Board Assembly: EMS & Box Build",
        "purpose": "Keep brand ceiling visible.",
        "needs": "Higher-level manufacturing capability that does not overpower PCBA."
      },
      {
        "heading": "Supporting Capabilities",
        "purpose": "Show how support services fit.",
        "needs": "Component Sourcing & BOM Review, Testing & Quality Control, PCB Fabrication, Engineering Support and how they support Turnkey PCBA / EMS."
      },
      {
        "heading": "Project Workflow",
        "purpose": "Connect services to a practical process.",
        "needs": "RFQ → review → sourcing → fabrication coordination → assembly → testing → delivery."
      },
      {
        "heading": "CTA",
        "purpose": "Move buyer toward the right next step.",
        "needs": "Request a Quote; Explore PCBA."
      }
    ]
  },
  "/services/pcb-assembly-pcba/": {
    "route": "/services/pcb-assembly-pcba/",
    "pageName": "PCB Assembly / PCBA",
    "priority": "P0",
    "pageRole": "Main conversion service page.",
    "buyerIntent": "Judge whether Venture can support a PCB assembly / PCBA project and prepare quote files.",
    "primaryCtaLabel": "Request a PCBA Quote",
    "secondaryCtaLabel": "View Turnkey PCB Assembly",
    "relatedPages": [
      "Turnkey PCB Assembly",
      "Prototype & Low-volume PCBA",
      "SMT/THT/BGA",
      "Component Sourcing",
      "Testing"
    ],
    "h1": "PCB Assembly / PCBA Services",
    "titleTag": "PCB Assembly / PCBA Services | Venture Electronics",
    "metaDescription": "Venture Electronics supports PCB Assembly / PCBA projects with BOM review, component sourcing coordination, SMT/THT/BGA assembly, testing planning, and turnkey PCBA workflow support.",
    "directAnswer": "Venture Electronics supports PCB Assembly / PCBA projects where buyers need assembled boards, BOM review, component sourcing coordination, testing planning, and delivery support.",
    "sections": [
      {
        "heading": "PCB Assembly / PCBA Services for Turnkey Electronics Projects",
        "purpose": "Lead with Venture's support, not a dictionary definition.",
        "needs": "Board assembly, BOM review, component sourcing coordination, testing planning, delivery support. Keep the PCBA definition only as a short natural intro phrase."
      },
      {
        "heading": "What Venture Can Support",
        "purpose": "Make scope easy to scan.",
        "needs": "SMT, THT, BGA, mixed assembly, prototype / low-volume, turnkey path, sourcing, testing, DFM / BOM support."
      },
      {
        "heading": "What to Send for a Quote",
        "purpose": "Make the page actionable.",
        "needs": "Gerber, BOM, CPL / pick-and-place, assembly drawing, quantity, testing requirements, timeline, special sourcing or packaging notes."
      },
      {
        "heading": "Turnkey PCBA Workflow",
        "purpose": "Connect PCBA with Venture's delivery model.",
        "needs": "File review → BOM review → sourcing coordination → PCB fabrication coordination if needed → assembly → testing → delivery support."
      },
      {
        "heading": "Why Work With Venture",
        "purpose": "Explain differentiation.",
        "needs": "Human project ownership, sourcing coordination, engineering review, quality and testing planning without unsupported claims."
      },
      {
        "heading": "Related PCBA Paths",
        "purpose": "Route buyers to the right subpage.",
        "needs": "Turnkey PCB Assembly, Prototype & Low-volume PCBA, SMT/THT/BGA, Component Sourcing, Testing."
      },
      {
        "heading": "FAQ",
        "purpose": "Answer high-intent questions.",
        "needs": "Quote files, PCBA vs turnkey PCBA, sourcing, testing, prototype / low-volume support."
      }
    ]
  },
  "/services/pcb-assembly-pcba/turnkey-pcb-assembly/": {
    "route": "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
    "pageName": "Turnkey PCB Assembly",
    "priority": "P0",
    "pageRole": "Primary delivery-model page under PCBA; high-intent RFQ page.",
    "buyerIntent": "Find a partner to coordinate BOM, sourcing, fabrication, assembly, and testing.",
    "primaryCtaLabel": "Request a Turnkey PCBA Quote",
    "secondaryCtaLabel": "Send BOM for Review",
    "relatedPages": [
      "PCBA",
      "Component Sourcing",
      "Testing",
      "PCB Fabrication",
      "Request Quote"
    ],
    "h1": "Turnkey PCB Assembly",
    "titleTag": "Turnkey PCB Assembly | Venture Electronics",
    "metaDescription": "Venture Electronics supports turnkey PCB assembly projects with BOM review, sourcing coordination, PCB fabrication coordination, assembly, testing planning, and delivery support.",
    "directAnswer": "Turnkey PCB assembly is the primary PCBA delivery model Venture promotes for projects requiring BOM review, sourcing coordination, assembly, testing, and delivery support.",
    "sections": [
      {
        "heading": "Turnkey PCB Assembly for Projects That Need More Than Labor-only Assembly",
        "purpose": "Position turnkey as the main delivery model under PCBA.",
        "needs": "BOM review, sourcing coordination, fabrication coordination, assembly, testing discussion, and delivery support."
      },
      {
        "heading": "What Is Included in the Turnkey Path",
        "purpose": "Set scope clearly.",
        "needs": "Files, BOM review, sourcing discussion, assembly, testing planning, customer approvals and constraints."
      },
      {
        "heading": "What the Customer Still Approves",
        "purpose": "Avoid sourcing overclaims.",
        "needs": "Substitutions, alternates, quantities, requirements, certifications, test scope, packaging and shipping constraints."
      },
      {
        "heading": "Workflow from BOM to Tested Assemblies",
        "purpose": "Make the process visible.",
        "needs": "Review → sourcing risk check → fabrication coordination → assembly → inspection / testing → delivery support."
      },
      {
        "heading": "Quote Checklist",
        "purpose": "Prepare the RFQ.",
        "needs": "Gerber, BOM, CPL, assembly drawing, quantity, testing requirements, timeline, special components."
      },
      {
        "heading": "CTA",
        "purpose": "Drive action.",
        "needs": "Request a Turnkey PCBA Quote; Send BOM for Review."
      }
    ]
  },
  "/services/pcb-assembly-pcba/prototype-low-volume-pcba/": {
    "route": "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
    "pageName": "Prototype & Low-volume PCBA",
    "priority": "P0",
    "pageRole": "Engineering sample and small-batch conversion page.",
    "buyerIntent": "Validate whether Venture supports early builds, samples, and small-batch production.",
    "primaryCtaLabel": "Request a Prototype PCBA Quote",
    "secondaryCtaLabel": "Explore PCB Assembly / PCBA",
    "relatedPages": [
      "PCBA",
      "Turnkey",
      "SMT/THT/BGA",
      "Quality & Testing"
    ],
    "h1": "Prototype & Low-volume PCBA",
    "titleTag": "Prototype & Low-volume PCBA | Venture Electronics",
    "metaDescription": "Support for engineering samples, validation builds, early production, and small-batch PCBA with BOM review, testing discussion, and assembly planning.",
    "directAnswer": "Prototype and low-volume PCBA supports engineering samples, validation builds, and small-batch electronics projects before scaling production.",
    "sections": [
      {
        "heading": "Prototype and Low-volume PCBA Support",
        "purpose": "Explain suitable project stages.",
        "needs": "Engineering samples, validation builds, early production, small batches."
      },
      {
        "heading": "What to Prepare",
        "purpose": "Make quote prep clear.",
        "needs": "Gerber, BOM, CPL, assembly drawing, test requirements, quantity, timeline."
      },
      {
        "heading": "From Prototype to Production",
        "purpose": "Connect early builds to scale-up.",
        "needs": "Review prototype feedback, BOM risk, testing requirements, next build quantity."
      },
      {
        "heading": "Related Paths",
        "purpose": "Route to related services.",
        "needs": "Turnkey PCBA, SMT/THT/BGA, Testing & Quality, Sourcing."
      }
    ]
  },
  "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/": {
    "route": "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
    "pageName": "SMT, THT & BGA Capabilities",
    "priority": "P0",
    "pageRole": "Assembly process capability explainer.",
    "buyerIntent": "Understand whether the assembly processes fit the board design.",
    "primaryCtaLabel": "Discuss Assembly Requirements",
    "secondaryCtaLabel": "View Testing & Quality Control",
    "relatedPages": [
      "PCBA",
      "Turnkey",
      "Testing",
      "Engineering Support"
    ],
    "h1": "SMT, THT & BGA Capabilities",
    "titleTag": "SMT, THT & BGA Assembly Capabilities | Venture Electronics",
    "metaDescription": "Understand SMT, THT, BGA, mixed assembly, inspection, and testing considerations for PCB Assembly / PCBA projects with Venture Electronics.",
    "directAnswer": "SMT, THT, and BGA are assembly process capabilities that support different PCB Assembly / PCBA requirements.",
    "sections": [
      {
        "heading": "Assembly Process Capabilities",
        "purpose": "Explain processes in buyer language.",
        "needs": "SMT, THT, BGA, mixed assembly and when process discussion matters."
      },
      {
        "heading": "Design and Manufacturing Considerations",
        "purpose": "Make technical constraints visible.",
        "needs": "Package type, board layout, inspection access, BGA/X-ray needs, testing expectations."
      },
      {
        "heading": "Inspection and Testing Linkage",
        "purpose": "Connect process to quality planning.",
        "needs": "AOI, ICT, X-ray, functional testing depending on project scope."
      },
      {
        "heading": "CTA",
        "purpose": "Route to quote.",
        "needs": "Discuss Assembly Requirements; View Testing & Quality Control."
      }
    ]
  },
  "/services/ems-box-build/": {
    "route": "/services/ems-box-build/",
    "pageName": "EMS & Box Build",
    "priority": "P0",
    "pageRole": "Higher-level manufacturing capability / brand ceiling page.",
    "buyerIntent": "Determine whether Venture can support projects beyond board assembly.",
    "primaryCtaLabel": "Discuss an EMS or Box Build Project",
    "secondaryCtaLabel": "View PCB Assembly / PCBA",
    "relatedPages": [
      "Services",
      "PCBA",
      "Quality & Testing",
      "Request Quote"
    ],
    "h1": "EMS & Box Build Support",
    "titleTag": "EMS & Box Build Support | Venture Electronics",
    "metaDescription": "Venture Electronics supports EMS and Box Build discussions for projects that extend beyond PCBA into testing, final assembly, packaging, and broader manufacturing coordination.",
    "directAnswer": "EMS & Box Build is Venture's higher-level manufacturing scope for projects that go beyond board assembly into final assembly, testing, packaging, and delivery support.",
    "sections": [
      {
        "heading": "Beyond PCBA: EMS & Box Build Support",
        "purpose": "Position EMS as a higher-level path.",
        "needs": "PCBA, sourcing, testing, final assembly, enclosure / mechanical integration, packaging and shipment discussion where project scope allows."
      },
      {
        "heading": "When EMS or Box Build Fits",
        "purpose": "Help buyers self-select.",
        "needs": "Projects needing assembled boards plus final product integration, cables, enclosures, packaging, or functional testing."
      },
      {
        "heading": "What to Prepare",
        "purpose": "Make RFQ practical.",
        "needs": "PCBA files, BOM, mechanical drawings, enclosure information, test procedures, packaging and logistics requirements."
      },
      {
        "heading": "Capability and Claim Boundaries",
        "purpose": "Avoid overclaiming.",
        "needs": "Use coordination/support language unless ownership, equipment, or certifications are confirmed."
      },
      {
        "heading": "CTA",
        "purpose": "Route to RFQ.",
        "needs": "Discuss an EMS or Box Build Project; View PCBA."
      }
    ]
  },
  "/services/component-sourcing-bom-review/": {
    "route": "/services/component-sourcing-bom-review/",
    "pageName": "Component Sourcing & BOM Review",
    "priority": "P0",
    "pageRole": "Supply-chain and BOM review differentiator.",
    "buyerIntent": "Find out whether Venture can help identify sourcing risks before assembly.",
    "primaryCtaLabel": "Send BOM for Review",
    "secondaryCtaLabel": "View Turnkey PCB Assembly",
    "relatedPages": [
      "Turnkey",
      "PCBA",
      "EMS",
      "Request Quote"
    ],
    "h1": "Component Sourcing & BOM Review",
    "titleTag": "Component Sourcing & BOM Review | Venture Electronics",
    "metaDescription": "Venture Electronics helps discuss BOM review, component sourcing risks, lifecycle, MOQ, alternates, and sourcing coordination for PCBA and turnkey PCB assembly projects.",
    "directAnswer": "Component sourcing and BOM review help identify availability, lifecycle, MOQ, and substitution risks before PCB assembly or turnkey PCBA production.",
    "sections": [
      {
        "heading": "BOM Review Before Assembly",
        "purpose": "Show value before production.",
        "needs": "Availability, lifecycle, MOQ, alternates, long-lead components and sourcing risks."
      },
      {
        "heading": "Customer Approval and Sourcing Coordination",
        "purpose": "Set sourcing boundaries.",
        "needs": "Customer approves substitutions and alternates. Venture can discuss risks and options but should not promise universal replacement."
      },
      {
        "heading": "How This Supports Turnkey PCBA",
        "purpose": "Connect to main delivery model.",
        "needs": "BOM review and sourcing discussion feed into turnkey assembly and testing planning."
      },
      {
        "heading": "CTA",
        "purpose": "Convert BOM-intent buyers.",
        "needs": "Send BOM for Review; View Turnkey PCB Assembly."
      }
    ]
  },
  "/services/pcb-fabrication/": {
    "route": "/services/pcb-fabrication/",
    "pageName": "PCB Fabrication",
    "priority": "P0",
    "pageRole": "Supporting upstream service page.",
    "buyerIntent": "Understand how bare-board fabrication connects to PCBA or turnkey projects.",
    "primaryCtaLabel": "Request PCB + Assembly Support",
    "secondaryCtaLabel": "View Turnkey PCB Assembly",
    "relatedPages": [
      "PCBA",
      "Turnkey",
      "Component Sourcing",
      "Quality & Testing"
    ],
    "h1": "PCB Fabrication Support",
    "titleTag": "PCB Fabrication Support for PCBA Projects | Venture Electronics",
    "metaDescription": "PCB Fabrication support from Venture Electronics helps customers coordinate bare-board requirements before PCB assembly, turnkey PCBA, or EMS projects.",
    "directAnswer": "PCB Fabrication is an upstream supporting capability that helps customers move from bare boards to complete PCB assembly, turnkey PCBA, or EMS projects.",
    "sections": [
      {
        "heading": "PCB Fabrication as Part of the PCBA Workflow",
        "purpose": "Position fabrication as support, not the main brand.",
        "needs": "Bare-board needs before assembly; downstream connection to PCBA, Turnkey PCBA, and EMS."
      },
      {
        "heading": "Gerber and Stackup Requirements",
        "purpose": "Tell buyers what to prepare.",
        "needs": "Gerber files, stackup or board specifications, quantity, material, finish, special board requirements, assembly scope if connected."
      },
      {
        "heading": "Fabrication-to-Assembly Workflow",
        "purpose": "Connect to downstream services.",
        "needs": "Review bare-board requirements → coordinate fabrication if needed → move into assembly, testing, and delivery planning."
      },
      {
        "heading": "CTA",
        "purpose": "Route to combined quote.",
        "needs": "Request PCB + Assembly Support; View Turnkey PCB Assembly."
      }
    ]
  },
  "/quality-testing/": {
    "route": "/quality-testing/",
    "pageName": "Quality & Testing",
    "priority": "P0",
    "pageRole": "Quality and testing hub.",
    "buyerIntent": "Understand how quality and testing support PCBA / EMS project risk reduction.",
    "primaryCtaLabel": "Discuss Testing Requirements",
    "secondaryCtaLabel": "View Testing & Quality Control",
    "relatedPages": [
      "Testing & Quality Control",
      "PCBA",
      "Turnkey",
      "Request Quote"
    ],
    "h1": "Quality & Testing",
    "titleTag": "Quality & Testing Support | Venture Electronics",
    "metaDescription": "Venture Electronics supports quality and testing discussions for PCBA and EMS projects, including inspection, electrical testing, functional testing, and quality-control coordination.",
    "directAnswer": "Quality and testing support helps PCBA and EMS projects reduce delivery risk through inspection, electrical testing, functional testing, and quality-control coordination.",
    "sections": [
      {
        "heading": "Quality and Testing for PCBA / EMS Projects",
        "purpose": "Introduce the quality role.",
        "needs": "Inspection, electrical testing, functional testing, reliability discussion, quality-control coordination."
      },
      {
        "heading": "Common Testing and Inspection Areas",
        "purpose": "Show categories without overclaiming.",
        "needs": "AOI, ICT, X-ray, functional testing, reliability testing where scope allows; evidence required for exact equipment."
      },
      {
        "heading": "Quality Pages",
        "purpose": "Route to child pages.",
        "needs": "Testing & Quality Control, Electrical Testing, Product Reliability Testing, Testing & Inspection Equipment, Quality Management System, Packaging & Logistics."
      },
      {
        "heading": "CTA",
        "purpose": "Move to RFQ with testing requirements.",
        "needs": "Discuss Testing Requirements."
      }
    ]
  },
  "/quality-testing/testing-quality-control/": {
    "route": "/quality-testing/testing-quality-control/",
    "pageName": "Testing & Quality Control",
    "priority": "P0",
    "pageRole": "Practical inspection and test support page.",
    "buyerIntent": "Determine which testing requirements can be discussed for a PCBA project.",
    "primaryCtaLabel": "Add Testing to My Quote",
    "secondaryCtaLabel": "View Quality & Testing",
    "relatedPages": [
      "Quality & Testing",
      "PCBA",
      "SMT/THT/BGA",
      "Request Quote"
    ],
    "h1": "Testing & Quality Control",
    "titleTag": "Testing & Quality Control for PCBA | Venture Electronics",
    "metaDescription": "Plan PCBA testing and quality control with Venture Electronics based on design risk, inspection needs, customer test procedures, and functional requirements.",
    "directAnswer": "Testing and quality control can be planned with a PCBA project based on the customer's design, risk level, inspection needs, and functional requirements.",
    "sections": [
      {
        "heading": "Plan Testing Around Project Risk",
        "purpose": "Explain testing in customer language.",
        "needs": "Testing and QC depend on design, inspection needs, functional requirements, and risk level."
      },
      {
        "heading": "Common Inspection and Test Methods",
        "purpose": "List categories cautiously.",
        "needs": "AOI, ICT, X-ray, functional testing, reliability testing can be discussed where project scope allows."
      },
      {
        "heading": "Documentation and Reporting Options",
        "purpose": "Evidence-gate proof claims.",
        "needs": "Reports, inspection records, and quality documents should be described only after confirmation."
      },
      {
        "heading": "CTA",
        "purpose": "Route to RFQ.",
        "needs": "Add Testing to My Quote; View Quality & Testing."
      }
    ]
  },
  "/engineering-support/": {
    "route": "/engineering-support/",
    "pageName": "Engineering Support",
    "priority": "P0",
    "pageRole": "Engineering support hub.",
    "buyerIntent": "Know whether Venture can help with DFM, process, test-fixture, or programming questions before/during build.",
    "primaryCtaLabel": "Discuss Engineering Support",
    "secondaryCtaLabel": "View PCB Assembly / PCBA",
    "relatedPages": [
      "PCBA",
      "SMT/THT/BGA",
      "Testing",
      "Component Sourcing"
    ],
    "h1": "Engineering Support",
    "titleTag": "Engineering Support for PCBA Projects | Venture Electronics",
    "metaDescription": "Venture Electronics can discuss DFM review, process questions, test fixture support, IC programming support, and production preparation for PCBA projects.",
    "directAnswer": "Engineering support helps customers prepare PCB assembly projects through DFM review, process discussion, test fixture support, and production questions before or during build.",
    "sections": [
      {
        "heading": "Engineering Support for Manufacturing Preparation",
        "purpose": "Explain practical support.",
        "needs": "DFM review, process discussion, test fixture support, programming questions, production issues."
      },
      {
        "heading": "Inputs Needed from the Customer",
        "purpose": "Make support actionable.",
        "needs": "Gerbers, BOM, CPL, assembly drawing, test requirements, programming notes, known design concerns."
      },
      {
        "heading": "How Engineering Connects to PCBA and Testing",
        "purpose": "Tie support into the service graph.",
        "needs": "Engineering support connects to PCBA, testing, sourcing, and process capability pages."
      },
      {
        "heading": "CTA",
        "purpose": "Route to RFQ.",
        "needs": "Discuss Engineering Support; View PCBA."
      }
    ]
  },
  "/about/company-overview/": {
    "route": "/about/company-overview/",
    "pageName": "Company Overview",
    "priority": "P1",
    "pageRole": "Company fact expansion page.",
    "buyerIntent": "Confirm the company story, operating scope, and public-safe facts.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Services",
    "relatedPages": [
      "About",
      "Official Resources",
      "Contact"
    ],
    "h1": "Company Overview",
    "titleTag": "Company Overview | Venture Electronics",
    "metaDescription": "Company overview for Venture Electronics, a PCBA and EMS manufacturing partner supporting electronics projects with sourcing, testing, and quality coordination.",
    "directAnswer": "Company overview for Venture Electronics.",
    "sections": [
      {
        "heading": "Company identity and positioning",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Manufacturing-support scope",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Public-safe timeline and business focus",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence-gated facts",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/about/news/": {
    "route": "/about/news/",
    "pageName": "News",
    "priority": "P2",
    "pageRole": "News or update listing; enable only if maintainable.",
    "buyerIntent": "See recent verified company updates.",
    "primaryCtaLabel": "Contact Venture",
    "secondaryCtaLabel": "View Resources",
    "relatedPages": [
      "About",
      "Resources",
      "Contact"
    ],
    "h1": "News",
    "titleTag": "Venture Electronics News",
    "metaDescription": "Company news and updates from Venture Electronics, if maintainable verified content is available.",
    "directAnswer": "News updates from Venture Electronics when real content exists.",
    "sections": [
      {
        "heading": "Latest verified updates",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Company / resource announcements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "No stale or fake news",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/quality-testing/electrical-testing/": {
    "route": "/quality-testing/electrical-testing/",
    "pageName": "Electrical Testing",
    "priority": "P1",
    "pageRole": "Electrical testing support page.",
    "buyerIntent": "Understand electrical-test discussion for PCBA projects.",
    "primaryCtaLabel": "Discuss Electrical Testing",
    "secondaryCtaLabel": "View Quality & Testing",
    "relatedPages": [
      "Quality & Testing",
      "Testing & Quality Control",
      "PCBA"
    ],
    "h1": "Electrical Testing",
    "titleTag": "Electrical Testing for PCBA | Venture Electronics",
    "metaDescription": "Discuss electrical testing requirements for PCBA projects with Venture Electronics, including customer test procedures and quality planning.",
    "directAnswer": "Electrical testing support for PCBA projects.",
    "sections": [
      {
        "heading": "Electrical test planning",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer test requirements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Test procedures and acceptance criteria",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Quote inputs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/quality-testing/product-reliability-testing/": {
    "route": "/quality-testing/product-reliability-testing/",
    "pageName": "Product Reliability Testing",
    "priority": "P1",
    "pageRole": "Reliability testing direction page.",
    "buyerIntent": "Understand whether reliability or validation testing can be discussed.",
    "primaryCtaLabel": "Discuss Reliability Testing",
    "secondaryCtaLabel": "View Quality & Testing",
    "relatedPages": [
      "Quality & Testing",
      "PCBA",
      "Request Quote"
    ],
    "h1": "Product Reliability Testing",
    "titleTag": "Product Reliability Testing | Venture Electronics",
    "metaDescription": "Venture Electronics can discuss product reliability testing requirements for PCBA and EMS projects when scope and evidence are confirmed.",
    "directAnswer": "Reliability testing discussion for PCBA / EMS projects.",
    "sections": [
      {
        "heading": "Reliability testing context",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "When reliability planning matters",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer requirements and standards",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence-gated method scope",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/quality-testing/testing-inspection-equipment/": {
    "route": "/quality-testing/testing-inspection-equipment/",
    "pageName": "Testing & Inspection Equipment",
    "priority": "P1",
    "pageRole": "Equipment and inspection-method page.",
    "buyerIntent": "See what inspection and testing methods may be discussed.",
    "primaryCtaLabel": "Discuss Inspection Requirements",
    "secondaryCtaLabel": "View Testing & Quality Control",
    "relatedPages": [
      "Quality & Testing",
      "PCBA"
    ],
    "h1": "Testing & Inspection Equipment",
    "titleTag": "Testing & Inspection Equipment | Venture Electronics",
    "metaDescription": "Overview of testing and inspection methods that may support PCBA projects, with equipment and scope details subject to confirmation.",
    "directAnswer": "Testing and inspection equipment context for Venture projects.",
    "sections": [
      {
        "heading": "Inspection and test method categories",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Equipment details after confirmation",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "When methods are useful",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence notes",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/quality-testing/quality-management-system/": {
    "route": "/quality-testing/quality-management-system/",
    "pageName": "Quality Management System",
    "priority": "P1",
    "pageRole": "Quality-system page.",
    "buyerIntent": "Understand quality process and documentation boundaries.",
    "primaryCtaLabel": "Discuss Quality Requirements",
    "secondaryCtaLabel": "View Quality & Testing",
    "relatedPages": [
      "Quality & Testing",
      "Testing & Quality Control"
    ],
    "h1": "Quality Management System",
    "titleTag": "Quality Management System | Venture Electronics",
    "metaDescription": "Learn how quality management, inspection, documentation, and customer requirements can be discussed for Venture PCBA and EMS projects.",
    "directAnswer": "Quality management system context for PCBA and EMS projects.",
    "sections": [
      {
        "heading": "Quality management approach",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Inspection and documentation flow",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Certification boundaries",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer quality requirements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/quality-testing/packaging-logistics/": {
    "route": "/quality-testing/packaging-logistics/",
    "pageName": "Packaging & Logistics",
    "priority": "P1",
    "pageRole": "Packaging and delivery-support page.",
    "buyerIntent": "Understand packaging, shipment, and delivery-support discussions.",
    "primaryCtaLabel": "Discuss Packaging Requirements",
    "secondaryCtaLabel": "Request a Quote",
    "relatedPages": [
      "Quality & Testing",
      "EMS & Box Build",
      "Contact"
    ],
    "h1": "Packaging & Logistics",
    "titleTag": "Packaging & Logistics Support | Venture Electronics",
    "metaDescription": "Discuss packaging, handling, labeling, and delivery-support requirements for PCBA, EMS, and Box Build projects.",
    "directAnswer": "Packaging and logistics support for electronics manufacturing projects.",
    "sections": [
      {
        "heading": "Packaging requirements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Labeling and handling considerations",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Delivery-support discussion",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer constraints",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/engineering-support/smt-tht-bga-process-support/": {
    "route": "/engineering-support/smt-tht-bga-process-support/",
    "pageName": "SMT, THT & BGA Process Support",
    "priority": "P1",
    "pageRole": "Engineering process detail page.",
    "buyerIntent": "Understand process considerations for assembly design.",
    "primaryCtaLabel": "Discuss Process Requirements",
    "secondaryCtaLabel": "View SMT/THT/BGA Capabilities",
    "relatedPages": [
      "Engineering Support",
      "PCBA",
      "Testing"
    ],
    "h1": "SMT, THT & BGA Process Support",
    "titleTag": "SMT, THT & BGA Process Support | Venture Electronics",
    "metaDescription": "Discuss SMT, THT, and BGA process considerations for PCB Assembly / PCBA projects with Venture Electronics.",
    "directAnswer": "SMT, THT, and BGA process support for PCBA.",
    "sections": [
      {
        "heading": "Process support overview",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Design-for-assembly considerations",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Inspection and testing implications",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Inputs needed",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/engineering-support/pcb-test-fixture-support/": {
    "route": "/engineering-support/pcb-test-fixture-support/",
    "pageName": "PCB Test Fixture Support",
    "priority": "P1",
    "pageRole": "Test-fixture support page.",
    "buyerIntent": "Understand whether test fixture requirements can be discussed.",
    "primaryCtaLabel": "Discuss Test Fixture Needs",
    "secondaryCtaLabel": "View Testing & Quality Control",
    "relatedPages": [
      "Engineering",
      "Testing",
      "PCBA"
    ],
    "h1": "PCB Test Fixture Support",
    "titleTag": "PCB Test Fixture Support | Venture Electronics",
    "metaDescription": "Venture Electronics can discuss PCB test fixture needs and functional testing requirements for PCBA projects.",
    "directAnswer": "PCB test fixture support for testing planning.",
    "sections": [
      {
        "heading": "Test fixture discussion",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer test procedure inputs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Functional testing linkage",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Scope boundaries",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/engineering-support/ic-programming-support/": {
    "route": "/engineering-support/ic-programming-support/",
    "pageName": "IC Programming Support",
    "priority": "P1",
    "pageRole": "Programming support page.",
    "buyerIntent": "Understand whether firmware / IC programming can be discussed.",
    "primaryCtaLabel": "Discuss Programming Requirements",
    "secondaryCtaLabel": "Request a Quote",
    "relatedPages": [
      "Engineering",
      "PCBA",
      "Testing"
    ],
    "h1": "IC Programming Support",
    "titleTag": "IC Programming Support | Venture Electronics",
    "metaDescription": "Discuss IC programming or firmware-related requirements as part of PCBA and testing planning with Venture Electronics.",
    "directAnswer": "IC programming support for PCBA projects.",
    "sections": [
      {
        "heading": "Programming requirements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Files and security considerations",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Functional test linkage",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Customer approval and scope",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/": {
    "route": "/industries/",
    "pageName": "Industries",
    "priority": "P1",
    "pageRole": "Industry hub.",
    "buyerIntent": "Find whether Venture can discuss common application areas.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Services",
    "relatedPages": [
      "Industrial Electronics",
      "IoT",
      "Consumer Electronics",
      "Energy",
      "Automation",
      "Communication"
    ],
    "h1": "Industries",
    "titleTag": "Industries Served | Venture Electronics PCBA & EMS",
    "metaDescription": "Explore industry application areas for Venture Electronics PCBA and EMS support, including industrial electronics, IoT, energy, automation, and communication equipment.",
    "directAnswer": "Industry application hub for Venture PCBA / EMS projects.",
    "sections": [
      {
        "heading": "Industry application overview",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Use buyer questions rather than unsupported cases",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Common project needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Links to service pages",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/industrial-electronics/": {
    "route": "/industries/industrial-electronics/",
    "pageName": "Industrial Electronics",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for industrial electronics projects.",
    "primaryCtaLabel": "Request an Industrial Electronics Quote",
    "secondaryCtaLabel": "View PCBA Services",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Testing"
    ],
    "h1": "Industrial Electronics",
    "titleTag": "Industrial Electronics PCBA Support | Venture Electronics",
    "metaDescription": "PCBA and EMS support for industrial electronics projects, with sourcing, testing, and quality planning subject to confirmed project requirements.",
    "directAnswer": "Industrial electronics application context.",
    "sections": [
      {
        "heading": "Industrial electronics needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "PCBA / testing / reliability considerations",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Quote files",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence boundaries",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/iot-smart-devices/": {
    "route": "/industries/iot-smart-devices/",
    "pageName": "IoT & Smart Devices",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for IoT and smart-device builds.",
    "primaryCtaLabel": "Request an IoT PCBA Quote",
    "secondaryCtaLabel": "View PCBA Services",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Sourcing"
    ],
    "h1": "IoT & Smart Devices",
    "titleTag": "IoT & Smart Device PCBA Support | Venture Electronics",
    "metaDescription": "Discuss PCBA, sourcing, testing, and small-batch manufacturing support for IoT and smart-device electronics projects.",
    "directAnswer": "IoT and smart-device application context.",
    "sections": [
      {
        "heading": "IoT device PCBA needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Prototype to small batch",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "BOM and sourcing risks",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing and packaging needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/consumer-electronics/": {
    "route": "/industries/consumer-electronics/",
    "pageName": "Consumer Electronics",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for consumer electronics projects.",
    "primaryCtaLabel": "Request a Consumer Electronics Quote",
    "secondaryCtaLabel": "View PCBA Services",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Brand Clarification"
    ],
    "h1": "Consumer Electronics",
    "titleTag": "Consumer Electronics PCBA Support | Venture Electronics",
    "metaDescription": "PCBA and electronics manufacturing support for consumer electronics projects, with sourcing, testing, and project requirements discussed case by case.",
    "directAnswer": "Consumer electronics application context.",
    "sections": [
      {
        "heading": "Consumer electronics project needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Prototype and small-batch path",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "BOM and testing needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Brand-confusion caution",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/energy-power-electronics/": {
    "route": "/industries/energy-power-electronics/",
    "pageName": "Energy & Power Electronics",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for energy or power electronics projects.",
    "primaryCtaLabel": "Request an Energy Electronics Quote",
    "secondaryCtaLabel": "View Testing & Quality",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Testing"
    ],
    "h1": "Energy & Power Electronics",
    "titleTag": "Energy & Power Electronics PCBA Support | Venture Electronics",
    "metaDescription": "Discuss PCBA, testing, sourcing, and manufacturing support for energy and power electronics projects when requirements are confirmed.",
    "directAnswer": "Energy and power electronics application context.",
    "sections": [
      {
        "heading": "Energy / power project needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing and reliability discussion",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Component sourcing risks",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence boundaries",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/automation-control/": {
    "route": "/industries/automation-control/",
    "pageName": "Automation & Control",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for automation and control electronics.",
    "primaryCtaLabel": "Request an Automation PCBA Quote",
    "secondaryCtaLabel": "View PCBA Services",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Engineering"
    ],
    "h1": "Automation & Control",
    "titleTag": "Automation & Control PCBA Support | Venture Electronics",
    "metaDescription": "PCBA and manufacturing support for automation and control electronics projects, with engineering, sourcing, and testing discussions as needed.",
    "directAnswer": "Automation and control application context.",
    "sections": [
      {
        "heading": "Automation control project needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "PCBA and engineering support",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing and fixture discussion",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Quote inputs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/industries/communication-equipment/": {
    "route": "/industries/communication-equipment/",
    "pageName": "Communication Equipment",
    "priority": "P2",
    "pageRole": "Industry application page.",
    "buyerIntent": "Assess fit for communication equipment electronics.",
    "primaryCtaLabel": "Request a Communication Equipment Quote",
    "secondaryCtaLabel": "View PCBA Services",
    "relatedPages": [
      "Industries",
      "PCBA",
      "Testing"
    ],
    "h1": "Communication Equipment",
    "titleTag": "Communication Equipment PCBA Support | Venture Electronics",
    "metaDescription": "Discuss PCBA, sourcing, testing, and manufacturing support for communication equipment electronics projects.",
    "directAnswer": "Communication equipment application context.",
    "sections": [
      {
        "heading": "Communication equipment needs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Assembly and testing considerations",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Component sourcing risks",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "RFQ inputs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/": {
    "route": "/resources/",
    "pageName": "Resources",
    "priority": "P1",
    "pageRole": "Resource hub.",
    "buyerIntent": "Find FAQs, guides, downloads, catalog, glossary, and case resources.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View FAQ",
    "relatedPages": [
      "FAQ",
      "Blog",
      "Guides",
      "Downloads",
      "Catalog",
      "Glossary",
      "Case Studies"
    ],
    "h1": "Resources",
    "titleTag": "Resources | Venture Electronics PCBA & EMS",
    "metaDescription": "Find Venture Electronics resources for PCBA, turnkey PCB assembly, sourcing, testing, quote preparation, and official manufacturing information.",
    "directAnswer": "Resource hub for PCBA / EMS buyers.",
    "sections": [
      {
        "heading": "Resource hub introduction",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "FAQ and buyer questions",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Downloadable assets if confirmed",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Guides / blog only if maintainable",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/faq/": {
    "route": "/resources/faq/",
    "pageName": "FAQ",
    "priority": "P0",
    "pageRole": "Buyer FAQ and GEO FAQ source.",
    "buyerIntent": "Get answers to practical RFQ and service questions.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Services",
    "relatedPages": [
      "Resources",
      "PCBA",
      "Turnkey",
      "Contact"
    ],
    "h1": "FAQ",
    "titleTag": "FAQ | Venture Electronics PCBA & EMS",
    "metaDescription": "Answers to common questions about PCB Assembly / PCBA, turnkey PCB assembly, sourcing, testing, EMS, quote files, and Venture Electronics official resources.",
    "directAnswer": "FAQ source for Venture service understanding.",
    "sections": [
      {
        "heading": "Quote preparation FAQs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "PCBA / Turnkey PCBA FAQs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Sourcing and substitution FAQs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing and quality FAQs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Brand and official resource FAQs",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/blog/": {
    "route": "/resources/blog/",
    "pageName": "Blog",
    "priority": "P2",
    "pageRole": "Later content system.",
    "buyerIntent": "Read useful PCBA / EMS insights if maintainable content exists.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Resources",
    "relatedPages": [
      "Resources",
      "Guides",
      "FAQ"
    ],
    "h1": "Blog",
    "titleTag": "Blog | Venture Electronics",
    "metaDescription": "PCBA, EMS, sourcing, testing, and manufacturing insights from Venture Electronics when maintainable posts are available.",
    "directAnswer": "Blog hub for later SEO/GEO expansion.",
    "sections": [
      {
        "heading": "Blog index only if real posts exist",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Buyer-oriented topics",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "No thin keyword posts",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/guides/": {
    "route": "/resources/guides/",
    "pageName": "Guides",
    "priority": "P2",
    "pageRole": "Buyer education guides.",
    "buyerIntent": "Learn how to prepare PCBA / EMS project information.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View FAQ",
    "relatedPages": [
      "Resources",
      "FAQ",
      "Downloads"
    ],
    "h1": "Guides",
    "titleTag": "Guides | Venture Electronics PCBA & EMS",
    "metaDescription": "Guides for preparing PCB Assembly / PCBA quotes, BOM review, sourcing, testing requirements, and EMS project discussions.",
    "directAnswer": "Guide hub for buyer education.",
    "sections": [
      {
        "heading": "Guide listing",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Quote preparation guides",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "BOM / sourcing guides",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing requirement guides",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/downloads/": {
    "route": "/resources/downloads/",
    "pageName": "Downloads",
    "priority": "P1",
    "pageRole": "Download hub.",
    "buyerIntent": "Download confirmed files such as checklists or forms.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Catalog",
    "relatedPages": [
      "Resources",
      "Catalog",
      "RFQ"
    ],
    "h1": "Downloads",
    "titleTag": "Downloads | Venture Electronics",
    "metaDescription": "Download confirmed Venture Electronics resources such as RFQ checklists, capability documents, or catalog materials when approved for public use.",
    "directAnswer": "Download source for confirmed Venture materials.",
    "sections": [
      {
        "heading": "Downloadable checklist / forms",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Only confirmed assets",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Version and update status",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/catalog/": {
    "route": "/resources/catalog/",
    "pageName": "Catalog",
    "priority": "P1",
    "pageRole": "Catalog access page.",
    "buyerIntent": "Find or request the official catalog if available.",
    "primaryCtaLabel": "Request Catalog / Quote",
    "secondaryCtaLabel": "View Downloads",
    "relatedPages": [
      "Resources",
      "Downloads",
      "Contact"
    ],
    "h1": "Catalog",
    "titleTag": "Catalog | Venture Electronics",
    "metaDescription": "Access or request Venture Electronics catalog materials for PCBA, EMS, sourcing, testing, and manufacturing support when approved for public use.",
    "directAnswer": "Catalog source for official Venture materials.",
    "sections": [
      {
        "heading": "Catalog availability",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "What the catalog covers",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Version / evidence status",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/glossary/": {
    "route": "/resources/glossary/",
    "pageName": "Glossary",
    "priority": "P2",
    "pageRole": "Definition hub.",
    "buyerIntent": "Look up basic manufacturing terms without cluttering service pages.",
    "primaryCtaLabel": "View PCBA Services",
    "secondaryCtaLabel": "Request a Quote",
    "relatedPages": [
      "Resources",
      "FAQ",
      "PCBA"
    ],
    "h1": "Glossary",
    "titleTag": "Glossary | PCBA & EMS Terms | Venture Electronics",
    "metaDescription": "Definitions of common PCBA, EMS, BOM, DFM, SMT, THT, BGA, sourcing, and testing terms with links to Venture service pages.",
    "directAnswer": "Glossary for definitions that should not dominate buyer pages.",
    "sections": [
      {
        "heading": "Glossary index",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "PCBA / EMS / BOM / DFM / SMT terms",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Links to service pages",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/resources/case-studies/": {
    "route": "/resources/case-studies/",
    "pageName": "Case Studies",
    "priority": "P2",
    "pageRole": "Evidence and story hub.",
    "buyerIntent": "Review real or anonymized examples if approved.",
    "primaryCtaLabel": "Discuss a Similar Project",
    "secondaryCtaLabel": "Request a Quote",
    "relatedPages": [
      "Resources",
      "Industries",
      "PCBA"
    ],
    "h1": "Case Studies",
    "titleTag": "Case Studies | Venture Electronics",
    "metaDescription": "Approved or anonymized case studies for PCBA, sourcing, testing, and EMS projects, published only when evidence and permissions are confirmed.",
    "directAnswer": "Case evidence hub for later expansion.",
    "sections": [
      {
        "heading": "Case study listing",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Only approved or anonymized cases",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Problem / support / outcome structure",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Evidence notes",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/contact/": {
    "route": "/contact/",
    "pageName": "Contact",
    "priority": "P0",
    "pageRole": "Contact entry page.",
    "buyerIntent": "Contact Venture for project questions or general communication.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "View Services",
    "relatedPages": [
      "RFQ",
      "Services",
      "Resources"
    ],
    "h1": "Contact Venture Electronics",
    "titleTag": "Contact Venture Electronics | PCBA & EMS Support",
    "metaDescription": "Contact Venture Electronics for PCBA, turnkey PCB assembly, EMS, sourcing, testing, and manufacturing support questions.",
    "directAnswer": "Contact page for Venture Electronics.",
    "sections": [
      {
        "heading": "Contact options",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "When to use contact vs RFQ",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Company / official resource reminders",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Service links",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/request-a-quote/": {
    "route": "/request-a-quote/",
    "pageName": "Request a Quote",
    "priority": "P0",
    "pageRole": "Core RFQ conversion page.",
    "buyerIntent": "Submit files and project information for a PCBA / Turnkey PCBA / EMS quote.",
    "primaryCtaLabel": "Submit RFQ",
    "secondaryCtaLabel": "Contact Venture",
    "relatedPages": [
      "Contact",
      "Services",
      "Thank You"
    ],
    "h1": "Request a Quote",
    "titleTag": "Request a Quote | Venture Electronics PCBA & EMS",
    "metaDescription": "Request a quote from Venture Electronics for PCB Assembly / PCBA, turnkey PCB assembly, component sourcing, testing, EMS, or Box Build project support.",
    "directAnswer": "RFQ page for PCBA, Turnkey PCBA, and EMS inquiries.",
    "sections": [
      {
        "heading": "RFQ introduction",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Files to prepare",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Service routing fields",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Testing / sourcing / packaging requirements",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Privacy and NDA note if applicable",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Submit CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/thank-you/": {
    "route": "/thank-you/",
    "pageName": "Thank You",
    "priority": "P0",
    "pageRole": "Post-submit confirmation page.",
    "buyerIntent": "Confirm that the inquiry was submitted and guide the next step.",
    "primaryCtaLabel": "Back to Home",
    "secondaryCtaLabel": "View Services",
    "relatedPages": [
      "Home",
      "Services",
      "Contact"
    ],
    "h1": "Thank You",
    "titleTag": "Thank You | Venture Electronics",
    "metaDescription": "Thank you for contacting Venture Electronics. Your PCBA or EMS inquiry has been submitted.",
    "directAnswer": "Post-RFQ confirmation page.",
    "sections": [
      {
        "heading": "Submission confirmation",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "What happens next",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Optional next-step resources",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "CTA",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/privacy-policy/": {
    "route": "/privacy-policy/",
    "pageName": "Privacy Policy",
    "priority": "P0",
    "pageRole": "Legal foundation page.",
    "buyerIntent": "Understand data handling policies.",
    "primaryCtaLabel": "Contact Venture",
    "secondaryCtaLabel": "Back to Home",
    "relatedPages": [
      "Home",
      "Contact",
      "Terms"
    ],
    "h1": "Privacy Policy",
    "titleTag": "Privacy Policy | Venture Electronics",
    "metaDescription": "Privacy policy for Venture Electronics website users and quote inquiries.",
    "directAnswer": "Privacy policy page.",
    "sections": [
      {
        "heading": "Policy scope",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Data collection and use",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Contact for privacy questions",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Update date",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/terms/": {
    "route": "/terms/",
    "pageName": "Terms",
    "priority": "P0",
    "pageRole": "Legal foundation page.",
    "buyerIntent": "Understand website terms.",
    "primaryCtaLabel": "Contact Venture",
    "secondaryCtaLabel": "Back to Home",
    "relatedPages": [
      "Home",
      "Contact",
      "Privacy Policy"
    ],
    "h1": "Terms",
    "titleTag": "Terms | Venture Electronics",
    "metaDescription": "Terms of use for the Venture Electronics website.",
    "directAnswer": "Terms page.",
    "sections": [
      {
        "heading": "Website terms",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Use of information",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Limitations and disclaimers",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Update date",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  },
  "/sitemap/": {
    "route": "/sitemap/",
    "pageName": "Sitemap",
    "priority": "P0",
    "pageRole": "Human-readable sitemap.",
    "buyerIntent": "Find all major pages.",
    "primaryCtaLabel": "Request a Quote",
    "secondaryCtaLabel": "Back to Home",
    "relatedPages": [
      "All pages"
    ],
    "h1": "Sitemap",
    "titleTag": "Sitemap | Venture Electronics",
    "metaDescription": "View the Venture Electronics website sitemap for PCBA, EMS, services, resources, contact, and official information pages.",
    "directAnswer": "Sitemap for Venture website navigation.",
    "sections": [
      {
        "heading": "Top-level links",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Service links",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Quality / engineering links",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      },
      {
        "heading": "Resources and legal links",
        "purpose": "Buyer-facing purpose",
        "needs": "Use practical, visible content that helps buyers understand the page and move toward the next action."
      }
    ]
  }
} satisfies Record<string, ClientPageLayout>;
