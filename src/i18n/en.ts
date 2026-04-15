import type { ContentShape } from "./types";

export const en: ContentShape = {
  locale: "en",
  htmlLang: "en",
  siteMeta: {
    name: "Molecule",
    fullName: "Molecule-AI",
    tagline: "The organizing layer for heterogeneous AI agent teams.",
    description:
      "Molecule is the open-source control plane where AI agents bond into production-ready teams. Workspaces are roles, the org chart is topology, governance is built in — six runtimes, scoped memory, zero lock-in.",
    github: "https://github.com/Molecule-AI",
    localeSwitch: { label: "中文", href: "/zh/" },
  },
  nav: [
    { label: "Why Now", href: "#why-now" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Architecture", href: "#architecture" },
    { label: "Adapters", href: "#adapters" },
    { label: "Platform", href: "#platform" },
  ],
  hero: {
    badge: "Open source · Shipping on main",
    titleLead: "Bond AI agents into",
    titleHighlight: "production-grade teams.",
    description:
      "Molecule is the organizing layer for heterogeneous AI agent teams. Workspaces are roles. The org chart is topology. Six runtimes, scoped memory, and governance — out of the box.",
    primaryCta: { label: "Explore the architecture", href: "#architecture" },
    secondaryCta: { label: "View on GitHub", href: "https://github.com/Molecule-AI" },
  },
  dashboard: {
    title: "CONTROL PLANE / PRODUCTION",
    liveLabel: "molecule.org · LIVE",
    rootName: "Organization Root",
    rootPath: "molecule://root",
    rootMeta: ["6 RUNTIMES", "MAIN", "14 WORKSPACES"],
    teams: [
      {
        name: "Engineering",
        subtitle: "2 agents · CLAUDE CODE",
        status: "ACTIVE",
        agents: [
          { name: "Frontend Agent", model: "claude-sonnet-4-5", state: "running" },
          { name: "Backend Agent", model: "claude-opus-4", state: "running" },
        ],
        scope: "LOCAL · TEAM",
      },
      {
        name: "Research",
        subtitle: "3 agents · LANGGRAPH",
        status: "ACTIVE",
        agents: [
          { name: "Knowledge Synth", model: "gpt-5", state: "running" },
          { name: "Corpus Indexer", model: "nemotron-70b", state: "running" },
        ],
        scope: "LOCAL",
      },
      {
        name: "Operations",
        subtitle: "2 agents · CREWAI",
        status: "IDLE",
        agents: [
          { name: "Deploy Orchestrator", model: "claude-opus-4", state: "idle" },
          { name: "Incident Router", model: "gpt-5", state: "waiting" },
        ],
        scope: "GLOBAL · TEAM",
      },
    ],
    footerStats: [
      { value: "14", label: "workspaces" },
      { value: "6", label: "runtimes" },
      { value: "3", label: "memory scopes" },
      { value: "0", label: "drift" },
    ],
  },
  socialProof: {
    label: "Runs with the runtimes, models, and tools your teams already use",
    logos: [
      "Claude",
      "OpenAI",
      "Nemotron",
      "LangGraph",
      "CrewAI",
      "AutoGen",
      "Claude Code",
      "OpenClaw",
      "DeepAgents",
      "MCP",
      "Langfuse",
      "NeMo Toolkit",
    ],
  },
  whyNow: {
    eyebrow: "Why Now",
    title: "Coordination is the new bottleneck.",
    subtitle:
      "Every team can spin up a demo agent. Nobody has the layer that turns a handful of demos into a governed, compounding organization.",
    signals: [
      {
        title: "Single-agent demos hit a ceiling",
        detail:
          "One agent answers questions — it can't run a release pipeline or escalate across org boundaries. Coordination, not capability, is the constraint.",
      },
      {
        title: "Governance is a launch prerequisite",
        detail:
          "No scoped authority, no audit trail, no human-in-the-loop gates — no production deployment. Governance is day-one, not phase-two.",
      },
      {
        title: "Memory boundaries define platform value",
        detail:
          "Flat shared context leaks data and breaks at scale. Topology-scoped memory (LOCAL / TEAM / GLOBAL) is the new baseline.",
      },
      {
        title: "Heterogeneous runtimes are the norm",
        detail:
          "LangGraph, Claude Code, CrewAI — no single framework wins everywhere. The control plane must be runtime-agnostic by design.",
      },
    ],
  },
  useCases: {
    eyebrow: "What You Can Build",
    titleLead: "AI agent teams for",
    rotatingTexts: [
      "Research Organizations",
      "Engineering Delivery",
      "Operations Automation",
      "Executive Control",
    ],
    subtitle:
      "One workspace becomes a role. A group of workspaces becomes a team. Teams compose into organizations — fractally, without drift.",
    items: [
      {
        key: "research",
        tag: "Research Orgs",
        title: "Parallel research with isolated memory",
        description:
          "Sibling workspaces explore independently under LOCAL scope; the parent synthesizes via TEAM memory.",
        bullets: [
          "Sibling isolation by default via LOCAL scope",
          "Parent synthesis through TEAM memory",
          "Per-workspace trace chains via Langfuse",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
      },
      {
        key: "engineering",
        tag: "Engineering",
        title: "Multi-runtime teams that self-coordinate",
        description:
          "Claude Code, LangGraph, OpenClaw — side-by-side in one team workspace with A2A routing and HITL gates.",
        bullets: [
          "Six runtime adapters, one workspace contract",
          "Human approval for deploy and merge",
          "Recursive team expansion, zero drift",
        ],
        capabilities: ["Claude Code", "LangGraph", "OpenClaw", "HITL"],
      },
      {
        key: "operations",
        tag: "Ops Automation",
        title: "Governance-first automation",
        description:
          "RBAC-scoped authority, hierarchy-routed approvals, and audit-ready event streams — per workspace, per role.",
        bullets: [
          "RBAC roles: operator, admin, read-only",
          "Approval routing follows org topology",
          "JSON Lines audit + global secrets",
        ],
        capabilities: ["RBAC", "Audit", "Secrets", "CrewAI"],
      },
      {
        key: "executive",
        tag: "Executive View",
        title: "Live control from one canvas",
        description:
          "Monitor health, tasks, and escalations across every team — with a 10-tab ops panel per workspace.",
        bullets: [
          "Real-time topology over WebSocket",
          "10-tab ops panel per workspace",
          "Pause / resume / restart any agent",
        ],
        capabilities: ["WebSocket", "Canvas", "Ops Panel", "MCP"],
      },
    ],
  },
  architecture: {
    eyebrow: "Molecular Memory",
    title: "Memory follows the shape of your organization.",
    description:
      "Three scopes — LOCAL, TEAM, GLOBAL — replace flat shared context with hierarchy-aware isolation. Awareness remembers what happened; Hermes promotes repeated wins into reusable skills.",
    hermesTitle: "Hermes is the skill layer",
    hermesSubtitle:
      "Awareness stores what happened. Hermes reads memory back, finds repeatable patterns, and promotes the ones that work into reusable skills.",
    hermesSteps: [
      "Load workspace memory first",
      "Recall the pattern that matches the task",
      "Promote repeated wins into skills",
    ],
    scopeLabel: "STEP",
    scopes: [
      {
        name: "LOCAL",
        summary: "Private scratchpad per workspace.",
        detail:
          "Isolated context invisible to siblings and unrelated teams. Each role keeps its own working memory.",
        accent: "#7fe8d6",
      },
      {
        name: "TEAM",
        summary: "Shared within parent-child hierarchy.",
        detail:
          "Handoff context scoped to the immediate team — no leaks to sibling workspaces, no cross-pollination.",
        accent: "#5ee3cf",
      },
      {
        name: "GLOBAL",
        summary: "Org-wide knowledge from root.",
        detail:
          "Policies and standards flow down the hierarchy. Read: everyone. Write: root only.",
        accent: "#3aa690",
      },
    ],
    outcomesTitle: "Why This Wins in Production",
    outcomes: [
      "Sibling workspaces isolated by default",
      "Memory sharing follows org topology exactly",
      "Escalation paths mirror hierarchy",
      "Repeated workflows become reusable skills",
      "Audit-ready JSON Lines event logging",
      "Zero prompt inflation as teams grow",
    ],
  },
  adapters: {
    eyebrow: "Adapter Ecosystem",
    title: "One control plane, interchangeable layers.",
    subtitle:
      "Molecule does not bind you to one model, one CLI, or one framework. It standardizes the boundary between the org layer and whatever runs inside each workspace.",
    cards: [
      {
        title: "Model Providers",
        headline: "Choose the model without changing the org contract.",
        detail:
          "Claude, OpenAI, Nemotron, and local models can sit behind the same workspace role. The model is an implementation detail; workspace identity stays stable.",
        items: ["Claude", "OpenAI", "Nemotron", "Local"],
      },
      {
        title: "Runtime Adapters",
        headline: "Swap execution engines per role or per team.",
        detail:
          "Claude Code, OpenClaw, LangGraph, CrewAI, AutoGen, DeepAgents plug into the same topology. Each adapter owns execution; Molecule owns hierarchy, routing, and governance.",
        items: ["Claude Code", "OpenClaw", "LangGraph", "CrewAI", "AutoGen", "DeepAgents"],
      },
      {
        title: "Tools · Eval · Observability",
        headline: "Connect the ecosystem, then measure it.",
        detail:
          "MCP shares tools, NeMo Agent Toolkit broadens tools and eval, Langfuse traces results. The layer where the platform learns what works across runtimes and feeds signal back into memory.",
        items: ["MCP", "NeMo Toolkit", "Langfuse", "OpenTelemetry"],
      },
    ],
  },
  platform: {
    eyebrow: "Platform Moats",
    title: "Why Molecule is defensible.",
    description:
      "Four architectural decisions compound into a durable advantage — each verifiable in the codebase today.",
    moats: [
      {
        title: "The node is a role",
        detail:
          "Workspaces are durable org roles — they survive model swaps, framework changes, and team restructuring.",
      },
      {
        title: "The org chart is the topology",
        detail:
          "Communication, memory, escalation, and approval all follow one hierarchy. Zero manual wiring, zero drift.",
      },
      {
        title: "Governance without runtime lock-in",
        detail:
          "Unified authority and audit across six runtimes — without forcing a single framework on any team.",
      },
      {
        title: "Memory as infrastructure",
        detail:
          "HMA is the foundation, not a bolt-on. It enables team expansion, skill compounding, and org learning at scale.",
      },
    ],
    proofTitle: "Current Product Proof",
    proofs: [
      { metric: "6", label: "Runtime Adapters", detail: "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, OpenClaw — shipping on main." },
      { metric: "4", label: "Security Tiers", detail: "T1 sandbox → T4 full-host. Per-workspace isolation scaled to risk." },
      { metric: "614", label: "Tests Across 3 Layers", detail: "Go + vitest + pytest. Race detection and coverage in CI." },
      { metric: "10", label: "Canvas Ops Tabs", detail: "Chat, Activity, Terminal, Config, Memory, Traces — per workspace." },
      { metric: "∞", label: "Fractal Team Expansion", detail: "Any workspace becomes a sub-team. Recursion is native." },
      { metric: "20+", label: "MCP Tools", detail: "Platform ops exposed to Claude Code, Cursor, or Codex via MCP." },
    ],
  },
  whyMolecule: {
    eyebrow: "Against the field",
    title: "Why Molecule.",
    subtitle:
      "Most agent projects solve execution layers. Molecule solves the org layer.",
    closing: "Molecule is the organizing layer for heterogeneous AI agent teams.",
    competitors: [
      {
        name: "CrewAI / MetaGPT",
        bestAt: "Role-based crews and software-company simulation.",
        gap: "They model teamwork, but not a durable org layer.",
        edge: "Molecule adds persistent workspaces, governance, memory, and policy.",
      },
      {
        name: "AutoGen",
        bestAt: "Conversational collaboration between agents and humans.",
        gap: "Conversation alone does not define identity or policy.",
        edge: "Molecule makes conversation one transport inside an operating model.",
      },
      {
        name: "LangGraph + OpenAI Agents SDK",
        bestAt: "Stateful orchestration, handoffs, tools, streaming, and tracing.",
        gap: "They provide execution primitives, not an org model.",
        edge: "Molecule connects those primitives to mixed runtimes and hierarchy.",
      },
    ],
    columns: { bestAt: "Best at", gap: "Not enough", edge: "Molecule edge" },
  },
  finalCta: {
    vision:
      "From AI agent teams to autonomous bot teams to self-organizing digital workforces — Molecule is building the infrastructure for what comes after the single-agent era.",
    eyebrow: "Start Building",
    titleTop: "Your AI org chart",
    titleBottom: "starts with one workspace.",
    subtitle:
      "One workspace becomes a team. One team becomes an organization. Start now.",
    actions: [
      { label: "Explore the architecture", href: "#architecture", primary: true },
      { label: "View on GitHub", href: "https://github.com/Molecule-AI", primary: false },
    ],
  },
  footer: {
    tagline: "The organizing layer for heterogeneous AI agent teams.",
    sections: [
      {
        title: "Platform",
        links: [
          { label: "Architecture", href: "#architecture" },
          { label: "Runtime Adapters", href: "#adapters" },
          { label: "Memory Model", href: "#architecture" },
          { label: "Platform Moats", href: "#platform" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "GitHub", href: "https://github.com/Molecule-AI" },
          { label: "Issues", href: "https://github.com/Molecule-AI" },
          { label: "Discussions", href: "https://github.com/Molecule-AI" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Why Now", href: "#why-now" },
          { label: "Use Cases", href: "#use-cases" },
          { label: "Contact", href: "mailto:hello@molecule-ai.dev" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Molecule-AI. Open source.`,
    builtWith: "Built with",
  },
};
