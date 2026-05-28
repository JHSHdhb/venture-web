export type SiteLink = {
  label: string;
  href: string;
};

export type NavItem = SiteLink & {
  children?: NavItem[];
};

export type ServiceItem = SiteLink & {
  role: string;
  description: string;
  children?: ServiceItem[];
};

export type PlaceholderPageData = {
  title: string;
  role: string;
  cta: SiteLink;
  relatedLinks: SiteLink[];
};

export const routes = {
  home: "/",
  about: "/about/",
  services: "/services/",
  pcba: "/services/pcb-assembly-pcba/",
  turnkey: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
  prototype: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
  smtThtBga: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
  emsBoxBuild: "/services/ems-box-build/",
  pcbFabrication: "/services/pcb-fabrication/",
  componentSourcingBomReview: "/services/component-sourcing-bom-review/",
  testingQualityControl: "/services/testing-quality-control/",
  brandClarification: "/brand/venture-electronics-vs-venture-pcb-pcba/",
  officialResources: "/official-resources/",
  faq: "/resources/faq/",
  contact: "/contact/",
};

export const serviceHierarchy: ServiceItem[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    role: "Primary service category and main conversion entry",
    description:
      "The PCBA-first entry point for buyers who need assembly support, quote guidance, and a clear path into related delivery models.",
    children: [
      {
        label: "Turnkey PCB Assembly",
        href: routes.turnkey,
        role: "PCBA child page for full-process delivery",
        description:
          "A child route for BOM, component sourcing, assembly, testing, and project coordination discussions.",
      },
      {
        label: "Prototype & Low-volume PCBA",
        href: routes.prototype,
        role: "PCBA child page for early-stage and small-batch projects",
        description:
          "A child route for prototype, low-volume, iteration, and early project-stage assembly questions.",
      },
      {
        label: "SMT, THT & BGA Capabilities",
        href: routes.smtThtBga,
        role: "PCBA child page for assembly process and technical capability",
        description:
          "A child route for assembly method discussion, manufacturability notes, and evidence-gated technical details.",
      },
    ],
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    role: "System-level manufacturing capability",
    description:
      "A higher-level service route for system manufacturing support from PCBA into sourcing, testing, final assembly, and project follow-through.",
  },
  {
    label: "PCB Fabrication",
    href: routes.pcbFabrication,
    role: "Supporting front-end bare board manufacturing capability",
    description:
      "A supporting route that explains bare-board fabrication as a foundation for PCBA projects, not the lead brand position.",
  },
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomReview,
    role: "Supply-chain and engineering support capability",
    description:
      "A combined route for BOM review, sourcing coordination, alternative part discussion, and turnkey or EMS project support.",
  },
  {
    label: "Testing & Quality Control",
    href: routes.testingQualityControl,
    role: "Cross-service trust and quality capability",
    description:
      "A cross-service route for testing, inspection, quality control, and evidence-needed notes without unsupported compliance claims.",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.services,
    children: serviceHierarchy.map((service) => ({
      label: service.label,
      href: service.href,
      children: service.children?.map((child) => ({
        label: child.label,
        href: child.href,
      })),
    })),
  },
  {
    label: "About",
    href: routes.about,
    children: [
      { label: "About Venture Electronics", href: routes.about },
      {
        label: "Venture Electronics vs Venture PCB / Venture PCBA",
        href: routes.brandClarification,
      },
      { label: "Official Resources / Online Presence", href: routes.officialResources },
    ],
  },
  {
    label: "Resources",
    href: routes.faq,
    children: [{ label: "FAQ / Resources", href: routes.faq }],
  },
];

export const footerGroups: { title: string; links: SiteLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Venture Electronics", href: routes.about },
      { label: "Brand & Business Line Clarification", href: routes.brandClarification },
      { label: "Official Resources / Online Presence", href: routes.officialResources },
      { label: "Contact Venture Electronics", href: routes.contact },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Prototype & Low-volume PCBA", href: routes.prototype },
      { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "PCB Fabrication", href: routes.pcbFabrication },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ / Resources", href: routes.faq },
      { label: "Request a Quote", href: routes.contact },
    ],
  },
  {
    title: "Official Channels",
    links: [
      { label: "Main Website placeholder", href: routes.officialResources },
      { label: "PCBA-focused Website placeholder", href: routes.officialResources },
      { label: "LinkedIn placeholder", href: routes.officialResources },
      { label: "YouTube placeholder", href: routes.officialResources },
      { label: "Other confirmed official channels only", href: routes.officialResources },
    ],
  },
];

export const supportCapabilities = serviceHierarchy.slice(2);

export const placeholderPages: Record<string, PlaceholderPageData> = {
  about: {
    title: "About Venture Electronics",
    role: "Brand authority page explaining Venture Electronics, its service scope, and public-safe company positioning.",
    cta: { label: "Contact Venture", href: routes.contact },
    relatedLinks: [
      { label: "Services", href: routes.services },
      { label: "Brand Clarification", href: routes.brandClarification },
      { label: "Official Resources", href: routes.officialResources },
    ],
  },
  services: {
    title: "Services",
    role: "Service hub showing the updated PCBA-first hierarchy and helping buyers choose the right route.",
    cta: { label: "Explore PCB Assembly / PCBA", href: routes.pcba },
    relatedLinks: serviceHierarchy.map(({ label, href }) => ({ label, href })),
  },
  pcba: {
    title: "PCB Assembly / PCBA",
    role: "Primary service category and main conversion entry for the Venture Electronics first-build site structure.",
    cta: { label: "Request PCBA Quote", href: routes.contact },
    relatedLinks: [
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Prototype & Low-volume PCBA", href: routes.prototype },
      { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
      { label: "FAQ / Resources", href: routes.faq },
    ],
  },
  turnkey: {
    title: "Turnkey PCB Assembly",
    role: "PCBA child page for full-process delivery, from BOM and sourcing coordination through assembly and testing discussions.",
    cta: { label: "Submit BOM / Gerber Placeholder", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
    ],
  },
  prototype: {
    title: "Prototype & Low-volume PCBA",
    role: "PCBA child page for early-stage builds, small-batch projects, iteration, and quote-stage project discussion.",
    cta: { label: "Request Prototype Quote", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
    ],
  },
  smtThtBga: {
    title: "SMT, THT & BGA Capabilities",
    role: "PCBA child page for assembly process and technical capability, with final capability claims reserved for Stage 3 evidence review.",
    cta: { label: "Discuss Assembly Requirements", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Prototype & Low-volume PCBA", href: routes.prototype },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
    ],
  },
  emsBoxBuild: {
    title: "EMS & Box Build",
    role: "System-level manufacturing capability connecting PCBA, sourcing, testing, final assembly, and project coordination.",
    cta: { label: "Discuss EMS / Box Build Project", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
    ],
  },
  pcbFabrication: {
    title: "PCB Fabrication",
    role: "Supporting front-end bare board manufacturing capability that supports PCBA rather than replacing PCBA as the primary service entry.",
    cta: { label: "Include PCB Fabrication in Quote", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
    ],
  },
  componentSourcingBomReview: {
    title: "Component Sourcing & BOM Review",
    role: "Supply-chain and engineering support capability for turnkey PCBA and EMS projects.",
    cta: { label: "Send BOM for Review", href: routes.contact },
    relatedLinks: [
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
    ],
  },
  testingQualityControl: {
    title: "Testing & Quality Control",
    role: "Cross-service trust and quality capability spanning PCBA, turnkey, prototype, assembly process, and EMS discussions.",
    cta: { label: "Discuss Testing Requirements", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Prototype & Low-volume PCBA", href: routes.prototype },
      { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
    ],
  },
  brandClarification: {
    title: "Venture Electronics vs Venture PCB / Venture PCBA",
    role: "Brand/entity relationship explanation page for Venture Electronics, Venture PCB, Venture PCBA, official domains, and business-line wording.",
    cta: { label: "View Official Resources", href: routes.officialResources },
    relatedLinks: [
      { label: "About Venture Electronics", href: routes.about },
      { label: "Official Resources", href: routes.officialResources },
      { label: "Services", href: routes.services },
      { label: "PCB Assembly / PCBA", href: routes.pcba },
    ],
  },
  officialResources: {
    title: "Official Resources / Online Presence",
    role: "Official channels and online presence page for confirmed Venture Electronics websites, focused sites, and public channels.",
    cta: { label: "Contact Official Team", href: routes.contact },
    relatedLinks: [
      { label: "Brand Clarification", href: routes.brandClarification },
      { label: "About Venture Electronics", href: routes.about },
      { label: "Services", href: routes.services },
    ],
  },
  faq: {
    title: "FAQ / Resources",
    role: "GEO and trust page for buyer questions about PCBA quotes, BOM review, turnkey support, testing, and brand relationship topics.",
    cta: { label: "Request a Quote", href: routes.contact },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
      { label: "Testing & Quality Control", href: routes.testingQualityControl },
      { label: "Official Resources", href: routes.officialResources },
    ],
  },
  contact: {
    title: "Contact / Request a Quote",
    role: "Unified static RFQ placeholder page for project files, quote context, and contact routing. This demo does not submit data.",
    cta: { label: "Explore Services", href: routes.services },
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "FAQ / Resources", href: routes.faq },
    ],
  },
};
