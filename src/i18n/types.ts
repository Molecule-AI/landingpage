export type Locale = "en" | "zh";

export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface AgentEntry {
  name: string;
  model: string;
  state: "running" | "idle" | "waiting";
}

export interface TeamEntry {
  name: string;
  subtitle: string;
  status: string;
  agents: AgentEntry[];
  scope: string;
}

export interface DashboardContent {
  title: string;
  liveLabel: string;
  rootName: string;
  rootPath: string;
  rootMeta: string[];
  teams: TeamEntry[];
  footerStats: { value: string; label: string }[];
}

export interface SocialProofContent {
  label: string;
  logos: string[];
}

export interface Signal {
  title: string;
  detail: string;
}

export interface UseCaseItem {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface Scope {
  name: string;
  summary: string;
  detail: string;
  accent: string;
}

export interface AdapterCard {
  title: string;
  headline: string;
  detail: string;
  items: string[];
}

export interface Moat {
  title: string;
  detail: string;
}

export interface Proof {
  metric: string;
  label: string;
  detail: string;
}

export interface Competitor {
  name: string;
  bestAt: string;
  gap: string;
  edge: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContentShape {
  locale: Locale;
  htmlLang: string;
  siteMeta: {
    name: string;
    fullName: string;
    tagline: string;
    description: string;
    github: string;
    localeSwitch: { label: string; href: string };
  };
  nav: NavItem[];
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  dashboard: DashboardContent;
  socialProof: SocialProofContent;
  whyNow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    signals: Signal[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: UseCaseItem[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    hermesTitle: string;
    hermesSubtitle: string;
    hermesSteps: string[];
    scopeLabel: string;
    scopes: Scope[];
    outcomesTitle: string;
    outcomes: string[];
  };
  adapters: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: AdapterCard[];
  };
  platform: {
    eyebrow: string;
    title: string;
    description: string;
    moats: Moat[];
    proofTitle: string;
    proofs: Proof[];
  };
  whyMolecule: {
    eyebrow: string;
    title: string;
    subtitle: string;
    closing: string;
    competitors: Competitor[];
    columns: { bestAt: string; gap: string; edge: string };
  };
  finalCta: {
    vision: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    actions: { label: string; href: string; primary: boolean }[];
  };
  footer: {
    tagline: string;
    sections: FooterSection[];
    copyright: string;
    builtWith: string;
  };
}
