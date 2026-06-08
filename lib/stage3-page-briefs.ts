export type Stage3Template =
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

export type Stage3SectionType =
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

export type Stage3PageBrief = {
  route: string;
  priority: "P0" | "P1" | "P2";
  template: Stage3Template;
  pageRole: string;
  h1: string;
  directAnswer: string;
  targetUserQuestions: string[];
  sections: {
    id: string;
    type: Stage3SectionType;
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

const quoteChecklist = [
  "Gerber files",
  "BOM",
  "CPL / Pick-and-place file",
  "Assembly drawing",
  "Testing requirements",
  "Quantity",
  "Target delivery / timeline",
  "Special component, sourcing, or packaging requirements",
];

const claimNotes = {
  evidence:
    "Certifications, equipment details, factory scale, exact capacity, customer names, and regulated-industry claims require Venture confirmation before publication.",
  sourcing:
    "Component substitutions, alternates, and sourcing decisions must remain customer-approved.",
  coordination:
    "Use support or coordination language where direct ownership or in-house capability is not confirmed.",
  legal:
    "Privacy, terms, and policy copy require Venture and legal review before publication.",
};

export const stage3PageBriefs: Record<string, Stage3PageBrief> = {
  "/about/": {
    route: "/about/",
    priority: "P0",
    template: "brand-authority",
    pageRole: "Public-safe company identity and positioning.",
    h1: "About Venture Electronics",
    directAnswer:
      "Venture Electronics is the mother brand for Venture's PCBA, EMS, sourcing, testing, and electronics manufacturing support.",
    targetUserQuestions: [
      "Who is Venture Electronics?",
      "Is Venture Electronics only a PCB factory?",
      "What manufacturing support can Venture discuss?",
    ],
    sections: [
      {
        id: "identity",
        type: "direct-answer",
        heading: "Official Identity Statement",
        purpose: "State the public-safe brand position.",
        requiredContent: [
          "Venture Electronics is the mother brand for PCBA, EMS, sourcing, testing, and manufacturing support.",
          "Venture PCB and Venture PCBA are service-entry terms connected to this brand context.",
        ],
      },
      {
        id: "positioning",
        type: "scope",
        heading: "What Venture Supports",
        purpose: "Clarify scope without reducing the company to a single service.",
        requiredContent: [
          "PCB Assembly / PCBA as the primary project entry.",
          "EMS and box build support as broader manufacturing scope.",
          "Component sourcing, BOM review, testing, and quality coordination as supporting capabilities.",
        ],
      },
      {
        id: "boundaries",
        type: "proof",
        heading: "Public-safe Claim Boundaries",
        purpose: "Make clear that proof points need confirmation.",
        requiredContent: [
          "Do not publish unsupported certification, factory scale, or customer-logo claims.",
          "Detailed legal and operational facts should be confirmed before public use.",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: {
      label: "Read Brand Clarification",
      href: "/brand/venture-electronics-vs-venture-pcb-pcba/",
    },
    relatedPages: [
      { label: "Brand Clarification", href: "/brand/venture-electronics-vs-venture-pcb-pcba/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Services", href: "/services/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "Is Venture Electronics the same as Venture PCB or Venture PCBA?",
      "Is Venture Electronics a PCB factory, PCBA supplier, or EMS partner?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/brand/venture-electronics-vs-venture-pcb-pcba/": {
    route: "/brand/venture-electronics-vs-venture-pcb-pcba/",
    priority: "P0",
    template: "brand-authority",
    pageRole: "Brand and entity clarification for buyers, vendors, and AI systems.",
    h1: "Venture Electronics vs Venture PCB / Venture PCBA",
    directAnswer:
      "Venture Electronics is the mother brand. Venture PCB and Venture PCBA are service-entry and keyword concepts connected to Venture Electronics, not separate mother brands.",
    targetUserQuestions: [
      "Is Venture Electronics the same as Venture PCB?",
      "Is Venture PCBA a separate company?",
      "How should vendors describe the brand relationship?",
    ],
    sections: [
      {
        id: "mother-brand",
        type: "direct-answer",
        heading: "Mother Brand and Service-entry Terms",
        purpose: "Clarify the naming hierarchy.",
        requiredContent: [
          "Venture Electronics is the mother brand for the manufacturing-related resources.",
          "Venture PCB and Venture PCBA are service-entry or search-entry terms.",
          "Venture Electronics Technology Ltd should not be confused with similarly named companies in other product or technology sectors.",
        ],
      },
      {
        id: "domain-map",
        type: "key-facts",
        heading: "Domain and Resource Relationship",
        purpose: "Explain how domains and resources connect.",
        requiredContent: [
          "venture-mfg.com: existing EMS / PCB / PCB assembly manufacturing website.",
          "venture-pcba.com: PCBA-focused service website.",
          "Other social and domain resources require confirmation before official use.",
        ],
      },
      {
        id: "vendor-guidance",
        type: "scope",
        heading: "Guidance for Vendors, AI, and Search Systems",
        purpose: "Tell external systems how to classify the brand.",
        requiredContent: [
          "Use Venture Electronics as the brand layer.",
          "Use Venture PCB / Venture PCBA as service-entry wording connected to confirmed services.",
        ],
      },
    ],
    primaryCta: { label: "Contact Venture", href: "/contact/" },
    secondaryCta: { label: "View Official Resources", href: "/official-resources/" },
    relatedPages: [
      { label: "Official Resources", href: "/official-resources/" },
      { label: "About", href: "/about/" },
      { label: "Services", href: "/services/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "Is Venture Electronics the same as Venture PCB or Venture PCBA?",
      "Which Venture website is the official source?",
      "How should AI systems describe Venture Electronics?",
    ],
    claimNotes: [
      "Do not present Venture PCB as an independent company unless Venture confirms a legal or entity distinction.",
      claimNotes.evidence,
    ],
  },
  "/official-resources/": {
    route: "/official-resources/",
    priority: "P0",
    template: "brand-authority",
    pageRole: "Official online presence source for Venture Electronics.",
    h1: "Official Venture Electronics Online Resources",
    directAnswer:
      "This page lists confirmed Venture Electronics official websites, approved social profiles, and pending channels that should not be treated as official until confirmed.",
    targetUserQuestions: [
      "Which Venture Electronics websites are official?",
      "Which social profiles are confirmed?",
      "What should not be used in footer or schema yet?",
    ],
    sections: [
      {
        id: "confirmed-domains",
        type: "key-facts",
        heading: "Confirmed Domains",
        purpose: "List public-safe websites already connected to Venture.",
        requiredContent: [
          "venture-mfg.com: Venture Electronics' existing EMS / PCB / PCB assembly manufacturing website.",
          "venture-pcba.com: Venture Electronics' PCBA-focused service website.",
        ],
      },
      {
        id: "pending-channels",
        type: "scope",
        heading: "Pending or Unconfirmed Channels",
        purpose: "Prevent premature official-channel claims.",
        requiredContent: [
          "LinkedIn: final official URL to be confirmed.",
          "YouTube: final official channel to be confirmed.",
          "Other social profiles should not be used in footer or schema before confirmation.",
        ],
      },
      {
        id: "schema-prep",
        type: "proof",
        heading: "Schema and Vendor Guidance",
        purpose: "Prepare for later SEO/GEO implementation.",
        requiredContent: [
          "Only confirmed websites and social profiles should be considered for sameAs or official footer links.",
          "Unconfirmed accounts should stay out of public authority claims.",
        ],
      },
    ],
    primaryCta: { label: "Contact Venture", href: "/contact/" },
    secondaryCta: {
      label: "Read Brand Clarification",
      href: "/brand/venture-electronics-vs-venture-pcb-pcba/",
    },
    relatedPages: [
      { label: "Brand Clarification", href: "/brand/venture-electronics-vs-venture-pcb-pcba/" },
      { label: "About", href: "/about/" },
      { label: "Resources", href: "/resources/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "Which Venture website is the official source?",
      "Are LinkedIn and YouTube confirmed official channels?",
    ],
    claimNotes: [
      "Do not publish unconfirmed Facebook, VK, old account candidates, or social links as official footer or schema links.",
      claimNotes.evidence,
    ],
  },
  "/services/": {
    route: "/services/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "Service hierarchy router.",
    h1: "Venture Electronics Services",
    directAnswer:
      "Venture's services are organized around PCBA as the primary project entry, EMS / Box Build as strategic manufacturing scope, and sourcing, testing, engineering, and PCB fabrication as supporting capabilities.",
    targetUserQuestions: [
      "Which Venture service should I start with?",
      "How do PCBA, EMS, sourcing, testing, and fabrication relate?",
      "Is PCB fabrication the main service or a supporting capability?",
    ],
    sections: [
      {
        id: "hierarchy",
        type: "direct-answer",
        heading: "Service Hierarchy",
        purpose: "Explain services as a hierarchy instead of a flat keyword list.",
        requiredContent: [
          "Primary inquiry entry: PCB Assembly / PCBA.",
          "PCBA child paths: Turnkey PCB Assembly, Prototype & Low-volume PCBA, SMT / THT / BGA capabilities.",
          "Strategic manufacturing scope: EMS & Box Build.",
        ],
      },
      {
        id: "supporting-capabilities",
        type: "scope",
        heading: "Supporting Capabilities",
        purpose: "Place supporting services in context.",
        requiredContent: [
          "PCB Fabrication supports upstream bare-board needs.",
          "Component Sourcing & BOM Review supports turnkey PCBA and production planning.",
          "Quality & Testing and Engineering Support help reduce delivery risk.",
        ],
      },
      {
        id: "process-overview",
        type: "process",
        heading: "Manufacturing Process Overview",
        purpose: "Show how the service graph connects to a project path.",
        requiredContent: [
          "RFQ / design files.",
          "PCB fabrication coordination.",
          "BOM review and component sourcing.",
          "PCB assembly / PCBA.",
          "Testing and delivery support.",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
    ],
    faqSeeds: [
      "Which service should I choose first?",
      "What is the difference between PCBA and EMS?",
      "How does PCB fabrication support PCBA?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/services/pcb-assembly-pcba/": {
    route: "/services/pcb-assembly-pcba/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "Primary conversion service page.",
    h1: "PCB Assembly / PCBA",
    directAnswer:
      "PCB Assembly / PCBA is the main project-entry service for customers who need boards assembled, reviewed, sourced, tested, and prepared for electronics production.",
    targetUserQuestions: [
      "What does PCBA mean?",
      "What files are needed for a PCBA quote?",
      "Can Venture review my BOM before assembly?",
    ],
    sections: [
      {
        id: "meaning",
        type: "direct-answer",
        heading: "What PCBA Means",
        purpose: "Give a crawlable direct explanation.",
        requiredContent: [
          "PCBA means a printed circuit board assembled with electronic components.",
          "Venture positions PCB Assembly / PCBA as the practical starting point for many inquiries.",
        ],
      },
      {
        id: "scope",
        type: "scope",
        heading: "Assembly Scope",
        purpose: "Clarify what buyers can discuss.",
        requiredContent: [
          "SMT, THT, BGA, mixed assembly, testing requirements, BOM review, and sourcing discussion.",
          "Prototype, low-volume, and turnkey paths can be routed from this page.",
        ],
      },
      {
        id: "quote-files",
        type: "quote-checklist",
        heading: "Quotation File Checklist",
        purpose: "Collect buyer inputs for RFQ.",
        requiredContent: quoteChecklist,
      },
    ],
    primaryCta: { label: "Request a PCBA Quote", href: "/request-a-quote/" },
    secondaryCta: {
      label: "View Turnkey PCB Assembly",
      href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
    },
    relatedPages: [
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Prototype & Low-volume PCBA", href: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/" },
      { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
      { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
    ],
    faqSeeds: [
      "What files are needed for a PCBA quote?",
      "What is the difference between PCBA and turnkey PCBA?",
      "Can Venture review my BOM before assembly?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.sourcing],
  },
  "/services/pcb-assembly-pcba/turnkey-pcb-assembly/": {
    route: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "High-intent RFQ service page.",
    h1: "Turnkey PCB Assembly",
    directAnswer:
      "Turnkey PCB assembly is for projects where the customer wants one partner to coordinate BOM review, component sourcing, PCB fabrication coordination, assembly, and testing support.",
    targetUserQuestions: [
      "What is included in turnkey PCB assembly?",
      "What does the customer still need to confirm?",
      "Can Venture source components for my project?",
    ],
    sections: [
      {
        id: "turnkey-answer",
        type: "direct-answer",
        heading: "Turnkey PCBA Direct Answer",
        purpose: "Define turnkey PCBA in buyer language.",
        requiredContent: [
          "Turnkey PCBA can include BOM review, sourcing coordination, bare-board coordination, assembly, and testing discussion.",
          "The customer still approves substitutions, requirements, quantities, and project-specific constraints.",
        ],
      },
      {
        id: "workflow",
        type: "process",
        heading: "BOM, Sourcing, Assembly, and Testing Workflow",
        purpose: "Show the practical order of work.",
        requiredContent: [
          "Review project files and BOM.",
          "Discuss availability, lifecycle, MOQ, and alternates.",
          "Coordinate PCB fabrication if scope requires it.",
          "Plan assembly and testing needs before delivery.",
        ],
      },
      {
        id: "quote-files",
        type: "quote-checklist",
        heading: "What to Send for a Turnkey Quote",
        purpose: "Make RFQ preparation clear.",
        requiredContent: quoteChecklist,
      },
    ],
    primaryCta: { label: "Request a Turnkey PCBA Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Send BOM for Review", href: "/services/component-sourcing-bom-review/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "PCB Fabrication", href: "/services/pcb-fabrication/" },
    ],
    faqSeeds: [
      "What is included in turnkey PCB assembly?",
      "Who approves component substitutions?",
      "Can PCB fabrication be coordinated before assembly?",
    ],
    claimNotes: [
      "Do not imply unlimited stock, no MOQ, or guaranteed substitutions without confirmation.",
      claimNotes.sourcing,
      claimNotes.coordination,
    ],
  },
  "/services/pcb-assembly-pcba/prototype-low-volume-pcba/": {
    route: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "Engineering sample and small-batch conversion page.",
    h1: "Prototype & Low-volume PCBA",
    directAnswer:
      "Prototype and low-volume PCBA supports engineering samples, validation builds, early production, and small batches before scaling.",
    targetUserQuestions: [
      "Does Venture support prototype PCBA?",
      "What files are needed for a small-batch build?",
      "How can a prototype move toward production?",
    ],
    sections: [
      {
        id: "use-cases",
        type: "scope",
        heading: "Prototype and Low-volume Use Cases",
        purpose: "Explain when this path fits.",
        requiredContent: [
          "Engineering samples, validation builds, EVT / DVT-style discussions, early production, and small batches.",
          "Testing, BOM review, and assembly feedback can be discussed before scaling.",
        ],
      },
      {
        id: "files",
        type: "quote-checklist",
        heading: "Files Needed",
        purpose: "Help buyers prepare.",
        requiredContent: quoteChecklist,
      },
      {
        id: "path-to-production",
        type: "process",
        heading: "Path to Production",
        purpose: "Connect prototypes to larger PCBA or turnkey projects.",
        requiredContent: [
          "Review prototype results and design feedback.",
          "Discuss BOM availability and production risks.",
          "Plan testing requirements and next build quantity.",
        ],
      },
    ],
    primaryCta: { label: "Request a Prototype PCBA Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
    ],
    faqSeeds: [
      "Does Venture support prototype or low-volume PCBA?",
      "What files are needed for prototype PCBA?",
      "Can testing be discussed before scaling?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/": {
    route: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "Assembly process capability explainer.",
    h1: "SMT, THT & BGA Capabilities",
    directAnswer:
      "SMT, THT, and BGA assembly are process capabilities that support PCB assembly projects with different component, inspection, and testing requirements.",
    targetUserQuestions: [
      "What is the difference between SMT, THT, and BGA?",
      "Which inspection or testing methods may be needed?",
      "What design information should I send?",
    ],
    sections: [
      {
        id: "process-overview",
        type: "direct-answer",
        heading: "Process Capability Overview",
        purpose: "Define the assembly methods.",
        requiredContent: [
          "SMT supports surface-mount component assembly.",
          "THT supports through-hole component assembly.",
          "BGA assembly requires appropriate layout, inspection, and testing discussion.",
        ],
      },
      {
        id: "considerations",
        type: "scope",
        heading: "Design and Manufacturing Considerations",
        purpose: "Keep process claims practical and evidence-gated.",
        requiredContent: [
          "Discuss component package, board layout, inspection access, and testing expectations.",
          "Minimum pitch, placement accuracy, BGA/X-ray scope, and equipment details require evidence before hard publication.",
        ],
      },
      {
        id: "testing-linkage",
        type: "process",
        heading: "Inspection and Testing Linkage",
        purpose: "Connect assembly process to quality planning.",
        requiredContent: [
          "Assembly process choices can affect AOI, X-ray, ICT, and functional testing discussions.",
          "Customer-provided test requirements should be included during quotation.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Assembly Requirements", href: "/request-a-quote/" },
    secondaryCta: { label: "View Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Engineering Support", href: "/engineering-support/" },
    ],
    faqSeeds: [
      "What is the difference between SMT, THT, and BGA?",
      "Can AOI, ICT, X-ray, or functional testing be included?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/services/ems-box-build/": {
    route: "/services/ems-box-build/",
    priority: "P0",
    template: "strategic-service",
    pageRole: "Strategic manufacturing scope and higher-value capability page.",
    h1: "EMS & Box Build",
    directAnswer:
      "EMS & Box Build extends PCBA into broader product manufacturing coordination, including sourcing, testing, final assembly, packaging, and logistics support where project scope allows.",
    targetUserQuestions: [
      "When should I choose EMS or Box Build instead of PCBA only?",
      "What is included in a box build quotation?",
      "Can Venture coordinate PCBA, enclosure, cables, testing, and packaging?",
    ],
    sections: [
      {
        id: "relationship",
        type: "direct-answer",
        heading: "How EMS & Box Build Relates to PCBA",
        purpose: "Keep PCBA as the entry while explaining strategic scope.",
        requiredContent: [
          "EMS & Box Build can extend beyond board assembly into broader production coordination.",
          "PCBA remains the primary homepage inquiry entry.",
        ],
      },
      {
        id: "scope",
        type: "scope",
        heading: "Coordination Scope",
        purpose: "List what needs discussion before quoting.",
        requiredContent: [
          "PCBA, sourcing, testing, final assembly, packaging, and logistics support.",
          "Mechanical parts, cables, enclosures, test requirements, and packaging details must be confirmed.",
        ],
      },
      {
        id: "evidence-gate",
        type: "proof",
        heading: "Evidence-gated Capability Area",
        purpose: "Avoid implying unconfirmed in-house scope.",
        requiredContent: [
          "Use support or coordination language until direct capability evidence is confirmed.",
          "Do not publish unsupported factory scale, certification, or customer-logo claims.",
        ],
      },
    ],
    primaryCta: { label: "Discuss EMS / Box Build Project", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "When should I choose EMS or Box Build instead of PCBA only?",
      "What information is needed for a box build quotation?",
      "Can Venture coordinate enclosure, cables, testing, and packaging?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/services/pcb-fabrication/": {
    route: "/services/pcb-fabrication/",
    priority: "P0",
    template: "supporting-capability",
    pageRole: "Supporting upstream service page.",
    h1: "PCB Fabrication",
    directAnswer:
      "PCB Fabrication is an upstream supporting capability that helps customers move from bare boards to complete PCB assembly, turnkey PCBA, or EMS projects.",
    targetUserQuestions: [
      "How does PCB fabrication support PCBA?",
      "What Gerber or stackup information should I provide?",
      "Is Venture only a PCB factory?",
    ],
    sections: [
      {
        id: "supporting-role",
        type: "direct-answer",
        heading: "Supporting Capability, Not the Core Brand Position",
        purpose: "Prevent the site from reducing Venture to a PCB factory.",
        requiredContent: [
          "PCB fabrication supports upstream bare-board needs before assembly.",
          "PCBA, turnkey PCBA, and EMS remain the main conversion context.",
        ],
      },
      {
        id: "requirements",
        type: "quote-checklist",
        heading: "Gerber and Stackup Requirements",
        purpose: "Tell buyers what to prepare.",
        requiredContent: [
          "Gerber files",
          "Stackup or board specifications",
          "Quantity",
          "Material, finish, and special board requirements if applicable",
          "Assembly or PCBA scope if fabrication connects to a larger project",
        ],
      },
      {
        id: "workflow",
        type: "process",
        heading: "Fabrication-to-assembly Workflow",
        purpose: "Connect this page to downstream services.",
        requiredContent: [
          "Review bare-board requirements.",
          "Coordinate PCB fabrication when project scope requires it.",
          "Move into assembly, testing, and delivery planning.",
        ],
      },
    ],
    primaryCta: { label: "Request PCB + Assembly Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
    ],
    faqSeeds: [
      "How does PCB fabrication support PCBA?",
      "What Gerber files or stackup information should I send?",
    ],
    claimNotes: ["Do not reposition Venture as only a PCB factory.", claimNotes.evidence, claimNotes.coordination],
  },
  "/services/component-sourcing-bom-review/": {
    route: "/services/component-sourcing-bom-review/",
    priority: "P0",
    template: "service-conversion",
    pageRole: "Supply-chain and BOM review differentiator.",
    h1: "Component Sourcing & BOM Review",
    directAnswer:
      "Component sourcing and BOM review help identify availability, lifecycle, MOQ, and substitution risks before PCB assembly or turnkey PCBA production.",
    targetUserQuestions: [
      "Can Venture source components for my project?",
      "What happens if some components are obsolete or long-lead?",
      "Who approves component substitutions?",
    ],
    sections: [
      {
        id: "bom-risks",
        type: "direct-answer",
        heading: "BOM Review Direct Answer",
        purpose: "Explain why BOM review matters before assembly.",
        requiredContent: [
          "BOM review can identify availability, lifecycle, MOQ, and substitution risks.",
          "Sourcing discussion supports turnkey PCBA and EMS planning.",
        ],
      },
      {
        id: "approval",
        type: "scope",
        heading: "Customer Approval and Sourcing Coordination",
        purpose: "Set boundaries around substitutions.",
        requiredContent: [
          "Customer approval is required for substitutions and alternates.",
          "Do not promise every part can be replaced or sourced.",
        ],
      },
      {
        id: "turnkey-link",
        type: "process",
        heading: "How This Supports Turnkey PCBA",
        purpose: "Link BOM review to the larger service path.",
        requiredContent: [
          "Review BOM before assembly.",
          "Discuss sourcing risks and alternates.",
          "Route the project into turnkey PCBA or assembly planning.",
        ],
      },
    ],
    primaryCta: { label: "Send BOM for Review", href: "/request-a-quote/" },
    secondaryCta: {
      label: "View Turnkey PCB Assembly",
      href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
    },
    relatedPages: [
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "Can Venture source components for my project?",
      "What happens if components are obsolete or long-lead?",
      "Who approves component substitutions?",
    ],
    claimNotes: [claimNotes.sourcing, claimNotes.evidence],
  },
  "/quality-testing/": {
    route: "/quality-testing/",
    priority: "P0",
    template: "quality-trust",
    pageRole: "Quality trust hub.",
    h1: "Quality & Testing",
    directAnswer:
      "Quality and testing support helps PCBA and EMS projects reduce delivery risk through inspection, electrical testing, functional testing, and quality-control coordination.",
    targetUserQuestions: [
      "What testing can be arranged for a PCBA project?",
      "Where does quality control appear in the workflow?",
      "What testing information should customers provide?",
    ],
    sections: [
      {
        id: "quality-role",
        type: "direct-answer",
        heading: "Quality Role in PCBA / EMS",
        purpose: "Explain why the page exists.",
        requiredContent: [
          "Quality and testing support can reduce delivery risk.",
          "Testing scope depends on design, risk level, inspection needs, and customer requirements.",
        ],
      },
      {
        id: "methods",
        type: "scope",
        heading: "Testing Method Overview",
        purpose: "Keep method language broad and claim-gated.",
        requiredContent: [
          "Inspection, electrical testing, functional testing, and quality-control coordination can be discussed.",
          "Equipment lists, method scope, and certifications require evidence before hard publication.",
        ],
      },
      {
        id: "links",
        type: "related-pages",
        heading: "Quality Pages",
        purpose: "Route users to child testing pages.",
        requiredContent: [
          "Testing & Quality Control",
          "Electrical Testing",
          "Product Reliability Testing",
          "Testing & Inspection Equipment",
          "Quality Management System",
          "Packaging & Logistics",
        ],
      },
    ],
    primaryCta: { label: "Discuss Testing Requirements", href: "/request-a-quote/" },
    secondaryCta: { label: "View Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
    relatedPages: [
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What testing can be arranged for a PCBA project?",
      "Can AOI, ICT, X-ray, or functional testing be included?",
      "What quality documents can be provided?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/quality-testing/testing-quality-control/": {
    route: "/quality-testing/testing-quality-control/",
    priority: "P0",
    template: "quality-trust",
    pageRole: "Practical inspection and test support page.",
    h1: "Testing & Quality Control",
    directAnswer:
      "Testing and quality control can be planned with a PCBA project based on the customer's design, risk level, inspection needs, and functional requirements.",
    targetUserQuestions: [
      "What testing can be included with a PCBA project?",
      "When are inspection methods useful?",
      "Can customer-provided test procedures be used?",
    ],
    sections: [
      {
        id: "testing-answer",
        type: "direct-answer",
        heading: "Testing Direct Answer",
        purpose: "Set testing scope without overclaiming.",
        requiredContent: [
          "Testing and quality control can be planned around design risk, inspection needs, and functional requirements.",
          "Customer-provided test procedures should be discussed during quotation.",
        ],
      },
      {
        id: "methods",
        type: "scope",
        heading: "Common Inspection and Test Methods",
        purpose: "Give useful method categories.",
        requiredContent: [
          "AOI, ICT, X-ray, functional testing, and reliability testing can be discussed where project scope allows.",
          "Exact equipment and method availability require Venture confirmation.",
        ],
      },
      {
        id: "documentation",
        type: "proof",
        heading: "Documentation and Reporting Options",
        purpose: "Flag proof needs.",
        requiredContent: [
          "Reports, quality documents, and inspection records should only be described after confirmation.",
          "Do not imply certification scope without evidence.",
        ],
      },
    ],
    primaryCta: { label: "Add Testing to My Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Quality & Testing", href: "/quality-testing/" },
    relatedPages: [
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What testing can be arranged for a PCBA project?",
      "Can AOI, ICT, X-ray, or functional testing be included?",
      "Can customers provide test procedures?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/engineering-support/": {
    route: "/engineering-support/",
    priority: "P0",
    template: "engineering-support",
    pageRole: "Engineering support hub.",
    h1: "Engineering Support",
    directAnswer:
      "Engineering support helps customers prepare PCB assembly projects through DFM review, process discussion, test fixture support, and production questions before or during build.",
    targetUserQuestions: [
      "Can Venture review design or BOM issues before quotation?",
      "What engineering inputs are needed?",
      "How does engineering support connect to PCBA and testing?",
    ],
    sections: [
      {
        id: "problems",
        type: "direct-answer",
        heading: "Problems Engineering Support Helps Solve",
        purpose: "Describe support before and during build.",
        requiredContent: [
          "DFM review, process discussion, test fixture support, programming questions, and production issues can be discussed.",
          "Engineering support connects to PCBA, testing, and sourcing workflows.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Inputs Needed from the Customer",
        purpose: "Make engineering discussion actionable.",
        requiredContent: [
          "Gerbers, BOM, CPL / pick-and-place file, assembly drawing, test requirements, programming notes, and known design concerns.",
        ],
      },
      {
        id: "related",
        type: "related-pages",
        heading: "Related Production Pages",
        purpose: "Route users to PCBA and quality pages.",
        requiredContent: [
          "PCB Assembly / PCBA",
          "SMT, THT & BGA Capabilities",
          "Testing & Quality Control",
          "Component Sourcing & BOM Review",
        ],
      },
    ],
    primaryCta: { label: "Discuss Engineering Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
    ],
    faqSeeds: [
      "Can Venture review my design before assembly?",
      "What files are needed for engineering support?",
      "Can test fixture support be discussed?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/quality-testing/electrical-testing/": {
    route: "/quality-testing/electrical-testing/",
    priority: "P1",
    template: "quality-trust",
    pageRole: "Electrical testing structure page for PCBA projects.",
    h1: "Electrical Testing for PCB Assembly",
    directAnswer:
      "Electrical testing helps check assembled boards against customer-provided test methods, fixtures, firmware, and acceptance criteria before shipment or next-stage assembly.",
    targetUserQuestions: [
      "What electrical testing can be discussed for my PCBA project?",
      "What test files, fixture details, or firmware should I provide?",
      "How does electrical testing connect to quality control?",
    ],
    sections: [
      {
        id: "scope",
        type: "direct-answer",
        heading: "Electrical Test Scope",
        purpose: "Explain the practical role of electrical testing without over-claiming capability.",
        requiredContent: [
          "Electrical testing should follow customer-approved procedures, acceptance criteria, firmware, and fixture requirements.",
          "Project-specific power-up, continuity, functional, or programmed checks can be discussed when requirements are provided.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Inputs Needed for Electrical Test Discussion",
        purpose: "Help buyers prepare a test-ready inquiry.",
        requiredContent: [
          "Test procedure, acceptance criteria, fixture information, firmware or programming notes, test points, sample quantity, and known failure modes.",
        ],
      },
    ],
    primaryCta: { label: "Request Testing Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
    relatedPages: [
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "PCB Test Fixture Support", href: "/engineering-support/pcb-test-fixture-support/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What information is needed for electrical testing?",
      "Can Venture discuss functional testing for my assembled PCB?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/quality-testing/product-reliability-testing/": {
    route: "/quality-testing/product-reliability-testing/",
    priority: "P1",
    template: "quality-trust",
    pageRole: "Reliability-testing planning page for electronics projects.",
    h1: "Product Reliability Testing Support",
    directAnswer:
      "Product reliability testing support helps define which reliability checks, sample plans, and acceptance criteria should be discussed for a PCBA, EMS, or box-build project.",
    targetUserQuestions: [
      "Can reliability testing be planned for my electronics project?",
      "What reliability requirements should I provide?",
      "How should reliability checks connect to assembly and inspection?",
    ],
    sections: [
      {
        id: "planning",
        type: "scope",
        heading: "Reliability Testing Planning",
        purpose: "Frame reliability testing as a requirements-led conversation.",
        requiredContent: [
          "Reliability checks should be based on product use case, operating environment, customer specification, and acceptance criteria.",
          "Burn-in, environmental, lifecycle, or stress-screening requirements should be confirmed against the project scope before publication or quotation.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Reliability Inputs to Share",
        purpose: "Make the reliability discussion actionable.",
        requiredContent: [
          "Product use environment, target standards if any, sample quantity, stress conditions, test duration, reporting needs, and pass/fail criteria.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Reliability Testing", href: "/request-a-quote/" },
    secondaryCta: { label: "View Quality & Testing", href: "/quality-testing/" },
    relatedPages: [
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What reliability testing requirements should I provide?",
      "Can reliability testing be discussed for EMS or box-build projects?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/quality-testing/testing-inspection-equipment/": {
    route: "/quality-testing/testing-inspection-equipment/",
    priority: "P1",
    template: "quality-trust",
    pageRole: "Inspection and testing equipment structure page.",
    h1: "Testing and Inspection Equipment",
    directAnswer:
      "Testing and inspection equipment should be described only where confirmed; this page structures how inspection, test methods, and equipment requirements relate to PCBA quality control.",
    targetUserQuestions: [
      "What inspection or test equipment may be relevant to my PCBA project?",
      "Which equipment details need Venture confirmation?",
      "How do equipment requirements affect quotation?",
    ],
    sections: [
      {
        id: "equipment-role",
        type: "direct-answer",
        heading: "Role of Equipment in Quality Control",
        purpose: "Explain the equipment conversation while protecting unconfirmed claims.",
        requiredContent: [
          "Inspection and testing equipment should support the agreed assembly, inspection, and acceptance process.",
          "Specific equipment names, model numbers, capacity, calibration, and certification statements require confirmation before public claims.",
        ],
      },
      {
        id: "requirements",
        type: "quote-checklist",
        heading: "Equipment-related Requirements",
        purpose: "Capture information that affects test planning.",
        requiredContent: [
          "Inspection method, test access, fixture requirements, reporting format, traceability needs, sample quantity, and any required equipment standards.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Test Requirements", href: "/request-a-quote/" },
    secondaryCta: { label: "View Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
    relatedPages: [
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "Quality Management System", href: "/quality-testing/quality-management-system/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "Can Venture list exact inspection equipment on the website?",
      "What inspection requirements should I include in an RFQ?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/quality-testing/quality-management-system/": {
    route: "/quality-testing/quality-management-system/",
    priority: "P1",
    template: "quality-trust",
    pageRole: "Quality-management structure page for buyer trust.",
    h1: "Quality Management System",
    directAnswer:
      "A quality management system page should explain how project requirements, inspection steps, documentation, and corrective feedback are organized while avoiding unconfirmed certification claims.",
    targetUserQuestions: [
      "How does Venture structure quality management for PCBA projects?",
      "Which quality documents can be discussed?",
      "What certification claims need confirmation?",
    ],
    sections: [
      {
        id: "system",
        type: "scope",
        heading: "Quality System Structure",
        purpose: "Describe the buyer-facing quality workflow at a safe level.",
        requiredContent: [
          "Quality planning should connect customer requirements, incoming materials, assembly process checks, inspection, testing, and shipment documentation.",
          "Certification names, audit scope, certificate numbers, and regulated-industry statements require Venture confirmation before publication.",
        ],
      },
      {
        id: "documentation",
        type: "proof",
        heading: "Documentation and Feedback",
        purpose: "Explain what buyers may need to request or define.",
        requiredContent: [
          "Inspection records, test reports, nonconformance handling, corrective feedback, and traceability needs should be specified by project.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Quality Requirements", href: "/request-a-quote/" },
    secondaryCta: { label: "View Quality & Testing", href: "/quality-testing/" },
    relatedPages: [
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Testing and Inspection Equipment", href: "/quality-testing/testing-inspection-equipment/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "Which quality records should I request for a PCBA project?",
      "Can certification details be published before confirmation?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/quality-testing/packaging-logistics/": {
    route: "/quality-testing/packaging-logistics/",
    priority: "P1",
    template: "quality-trust",
    pageRole: "Packaging and logistics support page for finished electronics.",
    h1: "Packaging and Logistics Support",
    directAnswer:
      "Packaging and logistics support helps align packed-board or finished-product requirements with shipment method, labeling, protection, documentation, and customer delivery expectations.",
    targetUserQuestions: [
      "Can packaging and logistics be discussed with my PCBA project?",
      "What shipment or labeling requirements should I provide?",
      "How does packaging connect to EMS and box build?",
    ],
    sections: [
      {
        id: "packaging",
        type: "scope",
        heading: "Packaging Scope",
        purpose: "Set expectations for packaging requirements.",
        requiredContent: [
          "Packaging should reflect board sensitivity, finished-product handling, labeling needs, shipment method, and customer documentation requirements.",
          "Finished-product packaging, accessories, and box-build logistics should be discussed with EMS / Box Build scope when applicable.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Logistics Inputs",
        purpose: "List information needed for shipment planning.",
        requiredContent: [
          "Destination, shipment terms, packaging specification, labeling rules, carton or unit requirements, documentation needs, and delivery timeline.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Packaging Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View EMS & Box Build", href: "/services/ems-box-build/" },
    relatedPages: [
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What packaging details should I provide for a PCBA shipment?",
      "When does packaging become part of EMS or box-build scope?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/engineering-support/smt-tht-bga-process-support/": {
    route: "/engineering-support/smt-tht-bga-process-support/",
    priority: "P1",
    template: "engineering-support",
    pageRole: "Assembly process support page for SMT, THT, and BGA questions.",
    h1: "SMT, THT and BGA Process Support",
    directAnswer:
      "SMT, THT and BGA process support helps buyers clarify assembly risks, design constraints, mixed-technology build needs, and process questions before or during PCBA quotation.",
    targetUserQuestions: [
      "Can SMT, THT, or BGA process risks be reviewed before assembly?",
      "What files are needed for process support?",
      "How does process support connect to PCBA capabilities?",
    ],
    sections: [
      {
        id: "process-support",
        type: "direct-answer",
        heading: "Process Support Scope",
        purpose: "Clarify process-oriented engineering support.",
        requiredContent: [
          "Customers can raise component package, placement, soldering, BGA, through-hole, mixed-assembly, and manufacturability concerns for review.",
          "Final process capability, equipment, tolerance, and yield claims should be confirmed for the specific project.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Files for Process Review",
        purpose: "Tell customers what to provide.",
        requiredContent: [
          "Gerbers, BOM, CPL / pick-and-place file, assembly drawings, component datasheets for sensitive parts, board stackup notes, and known risk areas.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Process Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
    relatedPages: [
      { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Engineering Support", href: "/engineering-support/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "Can BGA assembly risks be reviewed before quotation?",
      "What files are needed for SMT or THT process support?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/engineering-support/pcb-test-fixture-support/": {
    route: "/engineering-support/pcb-test-fixture-support/",
    priority: "P1",
    template: "engineering-support",
    pageRole: "Test fixture support page for PCBA validation planning.",
    h1: "PCB Test Fixture Support",
    directAnswer:
      "PCB test fixture support helps buyers discuss test access, fixture needs, programming steps, pass/fail criteria, and how testing should fit into the PCBA workflow.",
    targetUserQuestions: [
      "Can test fixture needs be discussed for my PCBA project?",
      "What fixture or test access details should I provide?",
      "How does fixture support connect to electrical testing?",
    ],
    sections: [
      {
        id: "fixture-scope",
        type: "scope",
        heading: "Fixture Support Scope",
        purpose: "Explain fixture planning without guaranteeing unconfirmed fabrication scope.",
        requiredContent: [
          "Fixture support should start from the customer's test procedure, test points, expected signals, board outline, programming needs, and acceptance criteria.",
          "Fixture design, build, ownership, maintenance, and storage terms should be confirmed project by project.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Fixture Planning Inputs",
        purpose: "Make fixture inquiries complete enough for review.",
        requiredContent: [
          "Board files, test point map, schematic if needed, expected measurement values, firmware or programming flow, fixture constraints, and reporting needs.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Test Fixture Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View Electrical Testing", href: "/quality-testing/electrical-testing/" },
    relatedPages: [
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Engineering Support", href: "/engineering-support/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What information is needed to discuss a PCB test fixture?",
      "Can fixture support be connected to electrical testing?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/engineering-support/ic-programming-support/": {
    route: "/engineering-support/ic-programming-support/",
    priority: "P1",
    template: "engineering-support",
    pageRole: "Programming support page for assembled electronics.",
    h1: "IC Programming Support",
    directAnswer:
      "IC programming support helps buyers define programming files, device requirements, serialization, verification steps, and production handling for programmed components or assembled boards.",
    targetUserQuestions: [
      "Can IC or firmware programming be discussed for my PCBA project?",
      "What programming files and instructions should I provide?",
      "How does programming connect to testing and final inspection?",
    ],
    sections: [
      {
        id: "programming-scope",
        type: "direct-answer",
        heading: "Programming Support Scope",
        purpose: "Clarify programming-related requirements.",
        requiredContent: [
          "Programming support should be defined by device type, file format, programming method, verification step, and handling requirements.",
          "Security, serialization, locked firmware, and customer-owned tools or credentials should be discussed before quotation.",
        ],
      },
      {
        id: "inputs",
        type: "quote-checklist",
        heading: "Programming Inputs",
        purpose: "Help buyers provide actionable programming details.",
        requiredContent: [
          "Programming file, device part number, socket or in-circuit method, quantity, verification method, labeling, serialization, and security requirements.",
        ],
      },
    ],
    primaryCta: { label: "Discuss Programming Support", href: "/request-a-quote/" },
    secondaryCta: { label: "View Engineering Support", href: "/engineering-support/" },
    relatedPages: [
      { label: "Engineering Support", href: "/engineering-support/" },
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What files are needed for IC programming support?",
      "Can programming be verified during electrical testing?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/": {
    route: "/industries/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry routing hub for PCBA and EMS buyers.",
    h1: "Industries Supported by Venture Electronics",
    directAnswer:
      "The industries hub routes electronics buyers to PCBA, EMS, sourcing, testing, and engineering support pages by product context while keeping industry-specific claims evidence-backed.",
    targetUserQuestions: [
      "Which industries can discuss PCBA or EMS projects with Venture?",
      "How should I route an industry-specific electronics inquiry?",
      "Which industry claims need confirmation before publication?",
    ],
    sections: [
      {
        id: "industry-fit",
        type: "scope",
        heading: "Industry Fit and Routing",
        purpose: "Connect industry pages to service pages.",
        requiredContent: [
          "Industrial electronics, IoT and smart devices, consumer electronics, energy and power electronics, automation and control, and communication equipment can use the same PCBA-first inquiry path.",
          "Industry pages should describe application context, required files, testing needs, and service routing rather than unsupported customer or compliance claims.",
        ],
      },
      {
        id: "rfq",
        type: "quote-checklist",
        heading: "Industry Inquiry Checklist",
        purpose: "Tell buyers what to provide with an industry-specific inquiry.",
        requiredContent: [
          "Product type, operating environment, quantity, lifecycle expectations, test requirements, regulatory constraints if any, BOM, Gerbers, CPL, and timeline.",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore Services", href: "/services/" },
    relatedPages: [
      { label: "Industrial Electronics", href: "/industries/industrial-electronics/" },
      { label: "IoT & Smart Devices", href: "/industries/iot-smart-devices/" },
      { label: "Energy & Power Electronics", href: "/industries/energy-power-electronics/" },
      { label: "Automation & Control", href: "/industries/automation-control/" },
    ],
    faqSeeds: [
      "Which industries can use Venture's PCBA inquiry path?",
      "What industry-specific details should I include in an RFQ?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/industrial-electronics/": {
    route: "/industries/industrial-electronics/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for industrial electronics PCBA inquiries.",
    h1: "Industrial Electronics PCB Assembly Support",
    directAnswer:
      "Industrial electronics projects can be routed through PCBA, testing, sourcing, and engineering support discussions when the buyer provides application context, operating conditions, and production requirements.",
    targetUserQuestions: [
      "Can industrial electronics PCBA projects be discussed with Venture?",
      "What requirements matter for industrial electronics assembly?",
      "How do testing and reliability needs affect the inquiry?",
    ],
    sections: [
      {
        id: "application-needs",
        type: "scope",
        heading: "Industrial Electronics Requirements",
        purpose: "Frame the page around project inputs and operating conditions.",
        requiredContent: [
          "Industrial electronics inquiries should describe operating environment, duty cycle, enclosure or box-build needs, traceability expectations, and testing requirements.",
          "Customer names, regulated-use claims, and certification statements should not be published without confirmed evidence.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Route industrial buyers to PCBA and quality pages.",
        requiredContent: [
          "PCB Assembly / PCBA, Turnkey PCB Assembly, Testing & Quality Control, Engineering Support, and EMS & Box Build.",
        ],
      },
    ],
    primaryCta: { label: "Request Industrial Electronics Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
      { label: "Engineering Support", href: "/engineering-support/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What should I provide for an industrial electronics PCBA quote?",
      "Can industrial electronics testing requirements be discussed before build?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/iot-smart-devices/": {
    route: "/industries/iot-smart-devices/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for IoT and smart device electronics.",
    h1: "IoT and Smart Device PCB Assembly Support",
    directAnswer:
      "IoT and smart device projects can use Venture's PCBA-first inquiry path for assembly, sourcing, testing, programming, and packaging discussions when product requirements are defined.",
    targetUserQuestions: [
      "Can IoT or smart device PCBA projects be discussed?",
      "What programming or testing details should I provide?",
      "How does packaging affect smart device projects?",
    ],
    sections: [
      {
        id: "device-needs",
        type: "scope",
        heading: "IoT and Smart Device Requirements",
        purpose: "Capture common project concerns without unsupported claims.",
        requiredContent: [
          "IoT and smart device inquiries should include connectivity requirements, firmware or programming needs, enclosure or accessory scope, battery or power constraints, and test expectations.",
          "Wireless certification, app integration, and regulated market claims require customer and Venture confirmation before publication.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Route IoT buyers to the right service pages.",
        requiredContent: [
          "PCB Assembly / PCBA, IC Programming Support, Electrical Testing, Packaging and Logistics, and EMS & Box Build.",
        ],
      },
    ],
    primaryCta: { label: "Request IoT Device Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View IC Programming Support", href: "/engineering-support/ic-programming-support/" },
    relatedPages: [
      { label: "IC Programming Support", href: "/engineering-support/ic-programming-support/" },
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What firmware or programming details are needed for IoT PCBA?",
      "Can IoT product packaging and logistics be discussed with assembly?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/consumer-electronics/": {
    route: "/industries/consumer-electronics/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for consumer electronics assembly inquiries.",
    h1: "Consumer Electronics PCB Assembly Support",
    directAnswer:
      "Consumer electronics projects can be discussed through PCBA, turnkey assembly, sourcing, testing, packaging, and EMS support when the buyer provides product scope and quality expectations.",
    targetUserQuestions: [
      "Can consumer electronics PCBA projects be discussed with Venture?",
      "What files and quality requirements matter for consumer electronics?",
      "When does consumer electronics need EMS or packaging support?",
    ],
    sections: [
      {
        id: "product-scope",
        type: "scope",
        heading: "Consumer Electronics Project Scope",
        purpose: "Define the practical inquiry context.",
        requiredContent: [
          "Consumer electronics inquiries should describe product use, board quantity, visual or cosmetic expectations, programming needs, accessory scope, and packaging requirements.",
          "Retail readiness, compliance, customer logos, and high-volume claims require confirmed evidence before publication.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Connect consumer electronics buyers to service pages.",
        requiredContent: [
          "Turnkey PCB Assembly, Prototype & Low-volume PCBA, Testing & Quality Control, Packaging and Logistics, and EMS & Box Build.",
        ],
      },
    ],
    primaryCta: { label: "Request Consumer Electronics Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
    relatedPages: [
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Prototype & Low-volume PCBA", href: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/" },
      { label: "Packaging and Logistics", href: "/quality-testing/packaging-logistics/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What information is needed for a consumer electronics PCBA quote?",
      "Can packaging be discussed with consumer electronics assembly?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/energy-power-electronics/": {
    route: "/industries/energy-power-electronics/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for energy and power electronics inquiries.",
    h1: "Energy and Power Electronics PCB Assembly Support",
    directAnswer:
      "Energy and power electronics projects can be routed through PCBA, sourcing, process support, testing, and reliability discussions when power, thermal, safety, and operating requirements are defined.",
    targetUserQuestions: [
      "Can power electronics PCBA projects be discussed with Venture?",
      "What power or thermal details should I provide?",
      "How do testing and reliability affect power electronics assembly?",
    ],
    sections: [
      {
        id: "power-requirements",
        type: "scope",
        heading: "Energy and Power Electronics Requirements",
        purpose: "Focus the inquiry on technical constraints.",
        requiredContent: [
          "Power electronics inquiries should include voltage, current, thermal, creepage or clearance concerns, component sourcing risks, and test or reliability expectations.",
          "Safety certification, regulated-sector, and performance claims require confirmed documentation before publication.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Route power electronics buyers to process and testing pages.",
        requiredContent: [
          "PCB Assembly / PCBA, SMT, THT & BGA Process Support, Product Reliability Testing, Electrical Testing, and Component Sourcing & BOM Review.",
        ],
      },
    ],
    primaryCta: { label: "Request Power Electronics Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Product Reliability Testing", href: "/quality-testing/product-reliability-testing/" },
    relatedPages: [
      { label: "Product Reliability Testing", href: "/quality-testing/product-reliability-testing/" },
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What power electronics requirements should I include in an RFQ?",
      "Can reliability testing requirements be discussed for power electronics?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/automation-control/": {
    route: "/industries/automation-control/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for automation and control electronics.",
    h1: "Automation and Control PCB Assembly Support",
    directAnswer:
      "Automation and control electronics projects can be discussed through PCBA, process support, testing, programming, and reliability planning when control requirements and operating context are provided.",
    targetUserQuestions: [
      "Can automation or control electronics PCBA projects be discussed?",
      "What control-system requirements should I include?",
      "How do testing and programming support automation electronics?",
    ],
    sections: [
      {
        id: "control-requirements",
        type: "scope",
        heading: "Automation and Control Requirements",
        purpose: "Capture technical details needed for review.",
        requiredContent: [
          "Automation and control inquiries should include interface requirements, programming needs, industrial environment, expected loads, test procedures, and lifecycle expectations.",
          "Machine safety, regulated-use, and customer deployment claims require confirmed evidence before publication.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Route automation buyers to engineering and testing pages.",
        requiredContent: [
          "PCB Assembly / PCBA, IC Programming Support, Electrical Testing, Engineering Support, and Product Reliability Testing.",
        ],
      },
    ],
    primaryCta: { label: "Request Automation Electronics Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Engineering Support", href: "/engineering-support/" },
    relatedPages: [
      { label: "Engineering Support", href: "/engineering-support/" },
      { label: "IC Programming Support", href: "/engineering-support/ic-programming-support/" },
      { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What control electronics details should be included in an RFQ?",
      "Can programming and test requirements be reviewed together?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/industries/communication-equipment/": {
    route: "/industries/communication-equipment/",
    priority: "P1",
    template: "industry",
    pageRole: "Industry page for communication equipment electronics.",
    h1: "Communication Equipment PCB Assembly Support",
    directAnswer:
      "Communication equipment electronics can be discussed through PCBA, sourcing, process support, programming, and testing workflows when the buyer provides interface, signal, firmware, and quality requirements.",
    targetUserQuestions: [
      "Can communication equipment PCBA projects be discussed?",
      "What signal, firmware, or testing details should I provide?",
      "Which claims about communication products need confirmation?",
    ],
    sections: [
      {
        id: "communication-requirements",
        type: "scope",
        heading: "Communication Equipment Requirements",
        purpose: "Frame the page around technical inputs and claim boundaries.",
        requiredContent: [
          "Communication equipment inquiries should include interface requirements, signal-sensitive components, firmware or programming needs, sourcing risks, and test expectations.",
          "RF performance, wireless certification, network compliance, and customer deployment claims require confirmed evidence before publication.",
        ],
      },
      {
        id: "service-routing",
        type: "related-pages",
        heading: "Relevant Service Paths",
        purpose: "Route communication equipment buyers to process and test pages.",
        requiredContent: [
          "PCB Assembly / PCBA, SMT, THT & BGA Process Support, IC Programming Support, Electrical Testing, and Component Sourcing & BOM Review.",
        ],
      },
    ],
    primaryCta: { label: "Request Communication Equipment Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "SMT, THT & BGA Process Support", href: "/engineering-support/smt-tht-bga-process-support/" },
      { label: "IC Programming Support", href: "/engineering-support/ic-programming-support/" },
      { label: "Industries", href: "/industries/" },
    ],
    faqSeeds: [
      "What communication equipment requirements should I include in an RFQ?",
      "Can firmware programming and electrical testing be discussed together?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/resources/faq/": {
    route: "/resources/faq/",
    priority: "P0",
    template: "resource",
    pageRole: "Buyer-question and AI answer hub.",
    h1: "Venture Electronics FAQ",
    directAnswer:
      "This FAQ answers common buyer questions about Venture Electronics, PCBA quotation, turnkey PCBA, BOM review, testing, EMS / Box Build, shipping, files, NDA, and communication.",
    targetUserQuestions: [
      "What files are needed for a PCB assembly quotation?",
      "What is the difference between PCBA and turnkey PCBA?",
      "Which Venture website is official?",
    ],
    sections: [
      {
        id: "company-brand",
        type: "faq",
        heading: "Company and Brand Identity",
        purpose: "Answer entity and official-source questions.",
        requiredContent: [
          "Is Venture Electronics the same as Venture PCB or Venture PCBA?",
          "Which Venture website is the official source?",
          "Is Venture Electronics a PCB factory, PCBA supplier, or EMS partner?",
        ],
      },
      {
        id: "pcba-rfq",
        type: "faq",
        heading: "PCBA Quotation and Turnkey PCBA",
        purpose: "Answer conversion questions.",
        requiredContent: [
          "What files are needed for a PCB assembly quotation?",
          "Can Venture help review my BOM before assembly?",
          "What is the difference between PCBA and turnkey PCBA?",
        ],
      },
      {
        id: "testing-ems",
        type: "faq",
        heading: "Testing, Quality, EMS, and Logistics",
        purpose: "Answer support and broader scope questions.",
        requiredContent: [
          "What testing can be arranged for a PCBA project?",
          "When should I choose EMS or Box Build instead of PCBA only?",
          "Can I sign an NDA before sending files?",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore Services", href: "/services/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "What files are needed for a PCB assembly quotation?",
      "Can Venture help review my BOM before assembly?",
      "Does Venture support prototype or low-volume PCBA?",
      "Can Venture source components for my project?",
      "What testing can be arranged for a PCBA project?",
      "Can I sign an NDA before sending files?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/contact/": {
    route: "/contact/",
    priority: "P0",
    template: "contact-rfq",
    pageRole: "General contact entry.",
    h1: "Contact Venture Electronics",
    directAnswer:
      "Contact Venture Electronics to discuss PCB assembly, turnkey PCBA, EMS / Box Build, sourcing, testing, engineering support, or official resource questions.",
    targetUserQuestions: [
      "How do I contact Venture Electronics?",
      "What information should I include?",
      "Should I use the RFQ page instead?",
    ],
    sections: [
      {
        id: "contact-options",
        type: "direct-answer",
        heading: "Contact Direct Answer",
        purpose: "Tell visitors what this route is for.",
        requiredContent: [
          "Use this page for general Venture Electronics contact, service questions, and official-resource clarification.",
          "Use the RFQ route when project files and quote information are ready.",
        ],
      },
      {
        id: "include",
        type: "quote-checklist",
        heading: "What Information to Include",
        purpose: "Route contact inquiries efficiently.",
        requiredContent: [
          "Project type, service interest, company details, file readiness, target quantity, timeline, and testing or sourcing needs.",
        ],
      },
      {
        id: "related",
        type: "related-pages",
        heading: "Related Service Paths",
        purpose: "Make next steps clear.",
        requiredContent: [
          "Request a Quote",
          "PCB Assembly / PCBA",
          "EMS & Box Build",
          "Official Resources",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore Services", href: "/services/" },
    relatedPages: [
      { label: "Request a Quote", href: "/request-a-quote/" },
      { label: "Services", href: "/services/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "FAQ", href: "/resources/faq/" },
    ],
    faqSeeds: [
      "What information should I include when contacting Venture?",
      "Can I ask brand or official-resource questions?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/request-a-quote/": {
    route: "/request-a-quote/",
    priority: "P0",
    template: "contact-rfq",
    pageRole: "Unified RFQ intake.",
    h1: "Request a Quote",
    directAnswer:
      "Use this RFQ page to prepare project information for PCB assembly, turnkey PCBA, EMS / Box Build, sourcing, testing, or engineering support discussions.",
    targetUserQuestions: [
      "What files are needed for a quote?",
      "Can I sign an NDA before sending files?",
      "What happens after submission?",
    ],
    sections: [
      {
        id: "rfq-checklist",
        type: "quote-checklist",
        heading: "RFQ Checklist",
        purpose: "List the information needed for a useful quote discussion.",
        requiredContent: quoteChecklist,
      },
      {
        id: "next",
        type: "process",
        heading: "What Happens Next",
        purpose: "Set expectations after inquiry.",
        requiredContent: [
          "Venture can review the information and route the inquiry to PCBA, turnkey PCBA, sourcing, testing, EMS, or engineering support.",
          "Engineering questions, sourcing risks, and missing files may be clarified before quotation.",
        ],
      },
      {
        id: "privacy",
        type: "proof",
        heading: "Privacy and NDA Reassurance",
        purpose: "Address file-sharing concerns without over-legalizing.",
        requiredContent: [
          "Customers can raise NDA requirements before sharing detailed files.",
          "Sensitive files and project information should be handled through confirmed communication channels.",
        ],
      },
    ],
    primaryCta: { label: "Submit RFQ", href: "/contact/" },
    secondaryCta: { label: "Contact Venture Electronics", href: "/contact/" },
    relatedPages: [
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
      { label: "EMS & Box Build", href: "/services/ems-box-build/" },
      { label: "FAQ", href: "/resources/faq/" },
    ],
    faqSeeds: [
      "What files are needed for a PCB assembly quotation?",
      "Can I sign an NDA before sending files?",
      "How does the quotation process work?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/about/company-overview/": {
    route: "/about/company-overview/",
    priority: "P2",
    template: "brand-authority",
    pageRole: "Expanded company overview page.",
    h1: "Company Overview",
    directAnswer:
      "The company overview page should summarize Venture Electronics as the mother brand for PCBA, EMS, sourcing, testing, and electronics manufacturing support, with only confirmed company facts published.",
    targetUserQuestions: [
      "What does Venture Electronics do?",
      "How should the company be described publicly?",
      "Which company facts still need confirmation?",
    ],
    sections: [
      {
        id: "overview",
        type: "direct-answer",
        heading: "Company Overview Scope",
        purpose: "Provide a public-safe company summary.",
        requiredContent: [
          "Venture Electronics should be positioned as the mother brand connected to PCBA, EMS, sourcing, testing, and engineering support.",
          "Legal entity details, founding dates, headcount, facility size, certifications, and customer claims require confirmation before publication.",
        ],
      },
      {
        id: "service-context",
        type: "related-pages",
        heading: "Service Context",
        purpose: "Route readers from company information into service pages.",
        requiredContent: [
          "PCB Assembly / PCBA, EMS & Box Build, Component Sourcing & BOM Review, Quality & Testing, and Engineering Support.",
        ],
      },
    ],
    primaryCta: { label: "Explore Services", href: "/services/" },
    secondaryCta: { label: "Read Brand Clarification", href: "/brand/venture-electronics-vs-venture-pcb-pcba/" },
    relatedPages: [
      { label: "About", href: "/about/" },
      { label: "Brand Clarification", href: "/brand/venture-electronics-vs-venture-pcb-pcba/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "How should Venture Electronics be described publicly?",
      "Which company facts need confirmation before publication?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/about/news/": {
    route: "/about/news/",
    priority: "P2",
    template: "resource",
    pageRole: "News and updates holding page.",
    h1: "News and Updates",
    directAnswer:
      "The news page should publish only approved Venture Electronics announcements, company updates, service updates, and verified resource releases.",
    targetUserQuestions: [
      "Where can visitors find Venture updates?",
      "Which updates are safe to publish?",
      "How should unverified announcements be handled?",
    ],
    sections: [
      {
        id: "publishing-scope",
        type: "scope",
        heading: "Publishing Scope",
        purpose: "Define the safe content boundary for news.",
        requiredContent: [
          "Publish only approved company announcements, service updates, resource launches, or official-channel changes.",
          "Do not publish customer names, certification announcements, event claims, hiring claims, or facility claims before confirmation.",
        ],
      },
      {
        id: "review",
        type: "process",
        heading: "Review Before Publication",
        purpose: "Set a content governance expectation.",
        requiredContent: [
          "Each news item should have an owner, date, approved source, claim check, and final publishing review.",
        ],
      },
    ],
    primaryCta: { label: "View Official Resources", href: "/official-resources/" },
    secondaryCta: { label: "Contact Venture", href: "/contact/" },
    relatedPages: [
      { label: "About", href: "/about/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Resources", href: "/resources/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "Which Venture announcements are official?",
      "Can customer or certification news be published before confirmation?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/": {
    route: "/resources/",
    priority: "P2",
    template: "resource",
    pageRole: "Resource hub for buyer education and official references.",
    h1: "Resources",
    directAnswer:
      "The resources hub should route buyers to FAQs, guides, downloads, glossary entries, case studies, and official references while keeping technical and brand claims evidence-backed.",
    targetUserQuestions: [
      "Where can I find Venture's buyer resources?",
      "Which resources help prepare a PCBA quote?",
      "Which resource claims need confirmation?",
    ],
    sections: [
      {
        id: "resource-types",
        type: "related-pages",
        heading: "Resource Types",
        purpose: "List the resource paths available in the sitemap.",
        requiredContent: [
          "FAQ, blog, guides, downloads, catalog, glossary, case studies, and official resources.",
        ],
      },
      {
        id: "buyer-use",
        type: "quote-checklist",
        heading: "How Buyers Should Use Resources",
        purpose: "Connect resources to RFQ preparation.",
        requiredContent: [
          "Use resources to prepare files, understand PCBA and EMS scope, define test requirements, and confirm official Venture channels.",
        ],
      },
    ],
    primaryCta: { label: "Read FAQ", href: "/resources/faq/" },
    secondaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    relatedPages: [
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "Downloads", href: "/resources/downloads/" },
      { label: "Official Resources", href: "/official-resources/" },
    ],
    faqSeeds: [
      "Which resources help prepare a PCB assembly quote?",
      "Where should official Venture channels be confirmed?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/blog/": {
    route: "/resources/blog/",
    priority: "P2",
    template: "resource",
    pageRole: "Blog index structure page.",
    h1: "Blog",
    directAnswer:
      "The blog should contain approved educational articles about PCBA, turnkey assembly, EMS, sourcing, testing, engineering support, and buyer preparation.",
    targetUserQuestions: [
      "What topics should Venture blog articles cover?",
      "How should blog claims be reviewed?",
      "How should blog posts route buyers to services?",
    ],
    sections: [
      {
        id: "topics",
        type: "scope",
        heading: "Recommended Blog Topics",
        purpose: "Define useful content categories.",
        requiredContent: [
          "PCBA quotation preparation, BOM review, component sourcing, assembly files, testing requirements, EMS scope, and engineering support.",
          "Posts should route readers to relevant service pages and avoid unsupported proof or capacity claims.",
        ],
      },
      {
        id: "review",
        type: "proof",
        heading: "Editorial Claim Review",
        purpose: "Protect technical and commercial claims.",
        requiredContent: [
          "Technical claims, certification references, case examples, equipment details, and customer references require source review before publication.",
        ],
      },
    ],
    primaryCta: { label: "Read FAQ", href: "/resources/faq/" },
    secondaryCta: { label: "Explore Services", href: "/services/" },
    relatedPages: [
      { label: "Resources", href: "/resources/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Services", href: "/services/" },
    ],
    faqSeeds: [
      "What topics should Venture publish about PCBA and EMS?",
      "How should technical blog claims be checked?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/guides/": {
    route: "/resources/guides/",
    priority: "P2",
    template: "resource",
    pageRole: "Buyer guide index.",
    h1: "Guides",
    directAnswer:
      "The guides page should organize practical buyer guidance for preparing PCB assembly, turnkey PCBA, EMS, sourcing, testing, and engineering support inquiries.",
    targetUserQuestions: [
      "Which guides help prepare a PCBA quote?",
      "What files should buyers prepare?",
      "How should guides connect to RFQ intake?",
    ],
    sections: [
      {
        id: "guide-topics",
        type: "scope",
        heading: "Guide Topics",
        purpose: "Define the guide library structure.",
        requiredContent: [
          "RFQ file preparation, BOM review, turnkey assembly, prototype PCBA, test requirements, programming support, packaging, and EMS scope.",
          "Guides should give practical steps and link to the RFQ page when buyers are ready.",
        ],
      },
      {
        id: "required-files",
        type: "quote-checklist",
        heading: "Common Files Covered by Guides",
        purpose: "Reinforce RFQ readiness.",
        requiredContent: quoteChecklist,
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Read FAQ", href: "/resources/faq/" },
    relatedPages: [
      { label: "Resources", href: "/resources/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Downloads", href: "/resources/downloads/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "Which files are usually needed for a PCB assembly quotation?",
      "Which guide should I read before requesting turnkey PCBA?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/downloads/": {
    route: "/resources/downloads/",
    priority: "P2",
    template: "resource",
    pageRole: "Download library structure page.",
    h1: "Downloads",
    directAnswer:
      "The downloads page should host only approved Venture forms, checklists, catalogs, and technical resources that are current and safe for public distribution.",
    targetUserQuestions: [
      "Where can buyers find approved downloadable resources?",
      "Which files are safe to publish?",
      "How should outdated documents be handled?",
    ],
    sections: [
      {
        id: "download-types",
        type: "scope",
        heading: "Download Types",
        purpose: "Define what belongs in the download library.",
        requiredContent: [
          "Approved RFQ checklists, file preparation guides, company profile documents, service sheets, and public forms can be published after review.",
          "Outdated catalogs, unapproved PDFs, unconfirmed certification documents, and private customer files should not be published.",
        ],
      },
      {
        id: "governance",
        type: "process",
        heading: "Download Review",
        purpose: "Prevent stale or unapproved resources.",
        requiredContent: [
          "Each downloadable file should have an owner, publish date, version, review status, and removal process.",
        ],
      },
    ],
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "View Guides", href: "/resources/guides/" },
    relatedPages: [
      { label: "Guides", href: "/resources/guides/" },
      { label: "Catalog", href: "/resources/catalog/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Resources", href: "/resources/" },
    ],
    faqSeeds: [
      "Which Venture documents are approved for download?",
      "How should outdated downloadable files be handled?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/catalog/": {
    route: "/resources/catalog/",
    priority: "P2",
    template: "resource",
    pageRole: "Catalog and service-sheet structure page.",
    h1: "Catalog",
    directAnswer:
      "The catalog page should organize approved Venture service sheets, company profiles, and capability summaries without publishing unconfirmed capacity, certification, or equipment claims.",
    targetUserQuestions: [
      "Where can buyers find Venture service summaries?",
      "What should a catalog include?",
      "Which catalog claims need confirmation?",
    ],
    sections: [
      {
        id: "catalog-scope",
        type: "scope",
        heading: "Catalog Scope",
        purpose: "Set the boundary for public catalog material.",
        requiredContent: [
          "Catalog content can summarize PCBA, turnkey assembly, EMS, sourcing, testing, engineering support, and industry routing.",
          "Specific capacity, equipment, certification, facility, and customer claims require confirmation before appearing in a catalog.",
        ],
      },
      {
        id: "links",
        type: "related-pages",
        heading: "Catalog Routing",
        purpose: "Connect catalog pages to service details.",
        requiredContent: [
          "Catalog materials should point buyers to service pages, RFQ intake, and official resource confirmation.",
        ],
      },
    ],
    primaryCta: { label: "Explore Services", href: "/services/" },
    secondaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    relatedPages: [
      { label: "Services", href: "/services/" },
      { label: "Downloads", href: "/resources/downloads/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Request a Quote", href: "/request-a-quote/" },
    ],
    faqSeeds: [
      "What should be included in Venture's public catalog?",
      "Which catalog claims need evidence before publication?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/glossary/": {
    route: "/resources/glossary/",
    priority: "P2",
    template: "resource",
    pageRole: "Glossary structure page for electronics manufacturing terms.",
    h1: "Glossary",
    directAnswer:
      "The glossary should define PCB assembly, turnkey PCBA, EMS, box build, BOM review, component sourcing, testing, and engineering-support terms in buyer-friendly language.",
    targetUserQuestions: [
      "What do common PCBA and EMS terms mean?",
      "How should Venture define turnkey PCB assembly?",
      "How can glossary terms route buyers to services?",
    ],
    sections: [
      {
        id: "term-groups",
        type: "scope",
        heading: "Glossary Term Groups",
        purpose: "Organize the glossary around buyer tasks.",
        requiredContent: [
          "PCBA terms, sourcing terms, test and inspection terms, engineering terms, EMS and box-build terms, and RFQ file terms.",
          "Definitions should be practical, neutral, and linked to relevant Venture service pages.",
        ],
      },
      {
        id: "priority-terms",
        type: "key-facts",
        heading: "Priority Definitions",
        purpose: "Identify terms that should be defined first.",
        requiredContent: [
          "PCB Assembly / PCBA, turnkey PCB assembly, BOM, CPL / pick-and-place file, Gerber files, EMS, box build, DFM, electrical testing, and test fixture.",
        ],
      },
    ],
    primaryCta: { label: "Explore Services", href: "/services/" },
    secondaryCta: { label: "Read FAQ", href: "/resources/faq/" },
    relatedPages: [
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Resources", href: "/resources/" },
    ],
    faqSeeds: [
      "What is the difference between PCB and PCBA?",
      "What is turnkey PCB assembly?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/resources/case-studies/": {
    route: "/resources/case-studies/",
    priority: "P2",
    template: "resource",
    pageRole: "Case study index with strict evidence controls.",
    h1: "Case Studies",
    directAnswer:
      "The case studies page should publish only approved, evidence-backed project examples with customer permission, anonymization where needed, and confirmed technical scope.",
    targetUserQuestions: [
      "Can Venture publish project examples?",
      "What makes a case study safe to publish?",
      "How should case studies avoid unsupported claims?",
    ],
    sections: [
      {
        id: "case-study-rules",
        type: "proof",
        heading: "Case Study Publishing Rules",
        purpose: "Prevent unsupported customer or performance claims.",
        requiredContent: [
          "Case studies require customer permission or approved anonymization, confirmed project scope, verified outcomes, and reviewed images or documents.",
          "Do not publish customer names, product details, regulated-industry claims, yield claims, or performance results without evidence and approval.",
        ],
      },
      {
        id: "case-study-structure",
        type: "process",
        heading: "Recommended Case Study Structure",
        purpose: "Provide a safe reusable format.",
        requiredContent: [
          "Problem, project files, Venture support scope, manufacturing or testing considerations, confirmed result, claim notes, and related service links.",
        ],
      },
    ],
    primaryCta: { label: "Explore Services", href: "/services/" },
    secondaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    relatedPages: [
      { label: "Services", href: "/services/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Industries", href: "/industries/" },
      { label: "Resources", href: "/resources/" },
    ],
    faqSeeds: [
      "Can customer names be used in case studies?",
      "What evidence is needed before publishing project outcomes?",
    ],
    claimNotes: [claimNotes.evidence, claimNotes.coordination],
  },
  "/thank-you/": {
    route: "/thank-you/",
    priority: "P2",
    template: "contact-rfq",
    pageRole: "Post-inquiry confirmation page.",
    h1: "Thank You",
    directAnswer:
      "The thank-you page should confirm that an inquiry path has been reached and guide buyers toward useful next steps such as preparing files, reading RFQ guidance, or contacting Venture through confirmed channels.",
    targetUserQuestions: [
      "What should happen after an inquiry?",
      "Which files should I prepare next?",
      "Where can I review RFQ guidance?",
    ],
    sections: [
      {
        id: "next-steps",
        type: "process",
        heading: "Recommended Next Steps",
        purpose: "Route visitors after form completion or contact handoff.",
        requiredContent: [
          "Prepare Gerbers, BOM, CPL, assembly drawing, quantity, timeline, testing requirements, and sourcing constraints.",
          "Use confirmed Venture channels for sensitive project files or NDA questions.",
        ],
      },
      {
        id: "helpful-links",
        type: "related-pages",
        heading: "Helpful Links",
        purpose: "Keep visitors moving without making form-delivery claims.",
        requiredContent: [
          "Request a Quote, RFQ FAQ, PCB Assembly / PCBA, and Contact.",
        ],
      },
    ],
    primaryCta: { label: "Review RFQ Guidance", href: "/request-a-quote/" },
    secondaryCta: { label: "Contact Venture", href: "/contact/" },
    relatedPages: [
      { label: "Request a Quote", href: "/request-a-quote/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "What files should I prepare after submitting an inquiry?",
      "Can I ask about NDA requirements before sending detailed files?",
    ],
    claimNotes: [claimNotes.evidence],
  },
  "/privacy-policy/": {
    route: "/privacy-policy/",
    priority: "P2",
    template: "resource",
    pageRole: "Privacy policy structure page pending legal copy.",
    h1: "Privacy Policy",
    directAnswer:
      "The privacy policy page should contain Venture-approved legal copy explaining how visitor, inquiry, and project-related information is handled.",
    targetUserQuestions: [
      "Where is Venture's privacy policy?",
      "What information handling topics should be covered?",
      "Who must approve final privacy language?",
    ],
    sections: [
      {
        id: "policy-scope",
        type: "scope",
        heading: "Privacy Policy Scope",
        purpose: "Define required legal content areas without drafting final legal terms.",
        requiredContent: [
          "Final policy copy should address inquiry information, project files, contact details, analytics or tracking, third-party tools, retention, and user rights where applicable.",
          "This page is a structure placeholder until Venture-approved legal copy is inserted.",
        ],
      },
      {
        id: "legal-review",
        type: "proof",
        heading: "Legal Review Required",
        purpose: "Make the approval boundary explicit.",
        requiredContent: [
          "Privacy language should be reviewed by Venture and legal counsel before publication.",
        ],
      },
    ],
    primaryCta: { label: "Contact Venture", href: "/contact/" },
    secondaryCta: { label: "View Terms", href: "/terms/" },
    relatedPages: [
      { label: "Terms", href: "/terms/" },
      { label: "Contact", href: "/contact/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Sitemap", href: "/sitemap/" },
    ],
    faqSeeds: [
      "Who should approve the final privacy policy?",
      "Should project files and inquiry data be covered in the policy?",
    ],
    claimNotes: [claimNotes.legal, claimNotes.evidence],
  },
  "/terms/": {
    route: "/terms/",
    priority: "P2",
    template: "resource",
    pageRole: "Terms page structure pending legal copy.",
    h1: "Terms",
    directAnswer:
      "The terms page should contain Venture-approved legal terms for website use, inquiries, content, limitations, and other legal notices required for publication.",
    targetUserQuestions: [
      "Where are Venture's website terms?",
      "What topics should the terms cover?",
      "Who must approve final terms language?",
    ],
    sections: [
      {
        id: "terms-scope",
        type: "scope",
        heading: "Terms Scope",
        purpose: "Define legal content areas without drafting final terms.",
        requiredContent: [
          "Final terms may need to cover website use, content ownership, inquiry handling, quotation limitations, third-party links, disclaimers, and governing terms where applicable.",
          "This page is a structure placeholder until Venture-approved legal copy is inserted.",
        ],
      },
      {
        id: "legal-review",
        type: "proof",
        heading: "Legal Review Required",
        purpose: "Make approval requirements explicit.",
        requiredContent: [
          "Terms language should be reviewed by Venture and legal counsel before publication.",
        ],
      },
    ],
    primaryCta: { label: "Contact Venture", href: "/contact/" },
    secondaryCta: { label: "View Privacy Policy", href: "/privacy-policy/" },
    relatedPages: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Contact", href: "/contact/" },
      { label: "Official Resources", href: "/official-resources/" },
      { label: "Sitemap", href: "/sitemap/" },
    ],
    faqSeeds: [
      "Who should approve the final terms page?",
      "Should quotation limitations be covered in website terms?",
    ],
    claimNotes: [claimNotes.legal, claimNotes.evidence],
  },
  "/sitemap/": {
    route: "/sitemap/",
    priority: "P2",
    template: "resource",
    pageRole: "Human-readable sitemap and route index.",
    h1: "Sitemap",
    directAnswer:
      "The sitemap page should help visitors and search systems understand Venture's website structure across company, services, quality, engineering, industries, resources, contact, and legal pages.",
    targetUserQuestions: [
      "Where can visitors find all website sections?",
      "How are Venture's service and resource pages organized?",
      "Which pages are important for RFQ routing?",
    ],
    sections: [
      {
        id: "site-structure",
        type: "related-pages",
        heading: "Website Structure",
        purpose: "Summarize major navigation groups.",
        requiredContent: [
          "About, Services, Quality & Testing, Engineering, Industries, Resources, Contact, Request a Quote, and Legal.",
        ],
      },
      {
        id: "routing",
        type: "process",
        heading: "Recommended Buyer Routing",
        purpose: "Point visitors to high-value entry pages.",
        requiredContent: [
          "Most manufacturing buyers should start with Services, PCB Assembly / PCBA, Request a Quote, or the FAQ depending on readiness.",
        ],
      },
    ],
    primaryCta: { label: "Explore Services", href: "/services/" },
    secondaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    relatedPages: [
      { label: "Services", href: "/services/" },
      { label: "Quality & Testing", href: "/quality-testing/" },
      { label: "Resources", href: "/resources/" },
      { label: "Contact", href: "/contact/" },
    ],
    faqSeeds: [
      "Where should a buyer start on the Venture website?",
      "Which page should I use to request a PCB assembly quote?",
    ],
    claimNotes: [claimNotes.evidence],
  },
};
