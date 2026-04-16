import type { ContentShape } from "./types";

export const en: ContentShape = {
  locale: "en",
  htmlLang: "en",
  siteMeta: {
    name: "Molecule",
    fullName: "Molecule AI",
    tagline: "The org-native control plane for heterogeneous AI agent teams.",
    description:
      "Molecule AI is the open-core control plane for heterogeneous AI agent teams. Workspaces are org roles, the org chart is topology, governance is built in — seven runtimes, hierarchical memory, skill evolution, zero lock-in.",
    metaDescription:
      "Molecule AI is the open-core control plane for heterogeneous AI agent teams. Seven runtimes, hierarchical memory, skill evolution — shipping on main under BSL 1.1.",
    github: "https://github.com/Molecule-AI",
    monorepo: "https://github.com/Molecule-AI/molecule-monorepo",
    docs: "https://doc.moleculesai.app",
    app: "https://app.moleculesai.app",
    api: "https://api.moleculesai.app",
    status: "https://status.moleculesai.app",
    license: "BSL 1.1",
    localeSwitch: { label: "中文", href: "/zh/" },
  },
  nav: [
    { label: "Why Now", href: "#why-now" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Architecture", href: "#architecture" },
    { label: "Adapters", href: "#adapters" },
    { label: "Ships", href: "#ships" },
    { label: "Platform", href: "#platform" },
    { label: "FAQ", href: "#faq" },
    { label: "Docs", href: "https://doc.moleculesai.app" },
    { label: "Dashboard", href: "https://app.moleculesai.app" },
  ],
  hero: {
    badge: "Open core · BSL 1.1 · SaaS now live",
    titleLead: "Bond AI agents into",
    titleHighlight: "production-grade teams.",
    description:
      "Molecule AI is the org-native control plane for heterogeneous AI agent teams. Workspaces are roles. The org chart is topology. Seven runtimes, hierarchical memory, skill evolution, and operational guardrails — out of the box.",
    pillars: [
      "Visual Canvas",
      "Runtime Compatibility",
      "Hierarchical Memory",
      "Skill Evolution",
      "Operational Guardrails",
    ],
    primaryCta: { label: "Open Dashboard", href: "https://app.moleculesai.app" },
    secondaryCta: { label: "Read the docs", href: "https://doc.moleculesai.app" },
    tertiaryCta: { label: "View on GitHub", href: "https://github.com/Molecule-AI/molecule-monorepo" },
  },
  whatShips: {
    eyebrow: "What Ships in Main",
    title: "A full control plane, not a proof of concept.",
    subtitle:
      "Every feature below is shipping on the default branch of the open-source monorepo today — no private fork, no unreleased alpha, no demo-only code paths.",
    columns: [
      {
        label: "CANVAS",
        name: "Workspace Canvas",
        stack: "Next.js 15 · React Flow · Zustand · Tailwind v4",
        items: [
          "Drag-to-nest team building",
          "Empty-state deployment + onboarding wizard",
          "Template palette + bundle import/export",
          "10-tab side panel: chat · activity · details · skills · terminal · config · files · memory · traces · events",
          "Real-time topology via WebSocket fanout",
        ],
      },
      {
        label: "PLATFORM",
        name: "Control Plane",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "Workspace CRUD and provisioning",
          "Registry, heartbeats, restart, pause/resume",
          "Browser-safe A2A proxy",
          "Team expansion / collapse (fractal recursion)",
          "Global secrets with per-workspace override",
          "JSON Lines audit trail",
        ],
      },
    ],
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
    flywheelTitle: "The self-improving flywheel",
    flywheelSteps: [
      { label: "Task execution" },
      { label: "Durable insight captured in memory" },
      { label: "Repeated success becomes a signal" },
      { label: "Workflow promoted into a reusable skill" },
      { label: "Skill hot-reloads into the runtime" },
      { label: "Future work gets faster and more reliable" },
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
          "Claude Code, OpenClaw, LangGraph, CrewAI, AutoGen, DeepAgents all plug into the same topology today; NemoClaw is WIP on a feature branch. Each adapter owns execution; Molecule owns hierarchy, routing, and governance.",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "NemoClaw · WIP",
        ],
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
      { metric: "6+1", label: "Runtime Adapters", detail: "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, OpenClaw on main; NemoClaw WIP on feat branch." },
      { metric: "4", label: "Security Tiers", detail: "T1 sandbox → T4 full-host. Per-workspace isolation scaled to risk." },
      { metric: "614", label: "Tests Across 3 Layers", detail: "Go 1.25 + vitest + Python 3.11 pytest. Race detection and coverage in CI." },
      { metric: "10", label: "Canvas Ops Tabs", detail: "Chat, activity, details, skills, terminal, config, files, memory, traces, events." },
      { metric: "∞", label: "Fractal Team Expansion", detail: "Any workspace becomes a sub-team. Recursion is native to the topology." },
      { metric: "20+", label: "MCP Tools", detail: "Platform ops exposed to Claude Code, Cursor, or Codex via MCP." },
    ],
  },
  whyMolecule: {
    eyebrow: "The category gap",
    title: "Why Molecule.",
    subtitle:
      "Every tool below solves a real piece of the problem. None of them solve the organizing layer above them — which is exactly where Molecule lives.",
    closing: "Many agent runtimes, one organizational operating system.",
    competitors: [
      {
        name: "Workflow builders",
        bestAt: "Visual task automation with drag-and-drop nodes.",
        gap: "Nodes are tasks, not durable organizational roles.",
        edge: "Role-native workspaces, hierarchy, and long-lived teams.",
      },
      {
        name: "Agent frameworks",
        bestAt: "Strong runtime semantics and execution primitives.",
        gap: "Weak control plane and weak org-level operations.",
        edge: "Unified lifecycle, canvas, registry, policies, and observability.",
      },
      {
        name: "Coding agents",
        bestAt: "Excellent local execution with CLI-native continuity.",
        gap: "Usually not designed as team infrastructure.",
        edge: "Workspace abstraction, A2A collaboration, platform ops.",
      },
      {
        name: "Custom multi-agent graphs",
        bestAt: "Full flexibility over topology and handoffs.",
        gap: "Brittle topology and governance sprawl as teams grow.",
        edge: "Standardized operating model without losing runtime freedom.",
      },
    ],
    columns: { bestAt: "Best at", gap: "Where it breaks", edge: "What Molecule adds" },
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Questions teams ask before adopting Molecule AI.",
    subtitle:
      "Short answers to the questions that come up most. If yours isn't here, open a discussion on the monorepo.",
    items: [
      {
        q: "What is Molecule AI, in one sentence?",
        a: "Molecule AI is the open-core control plane that lets heterogeneous AI agents — LangGraph, Claude Code, CrewAI, AutoGen, DeepAgents, OpenClaw — run as governed, memory-scoped teams instead of disconnected demos.",
      },
      {
        q: "How is it different from agent frameworks like LangGraph or CrewAI?",
        a: "Those frameworks solve the execution layer — how an agent runs, calls tools, and hands off. Molecule AI solves the organizing layer above them: durable workspace roles, hierarchy-aware memory, governance, and operations. Many agent runtimes, one organizational operating system.",
      },
      {
        q: "Which runtimes are supported today?",
        a: "Six adapters are shipping on the main branch of the monorepo: LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, and OpenClaw. NemoClaw (NVIDIA-oriented) is work in progress on a feature branch and will land in main once merged.",
      },
      {
        q: "Is it really open source?",
        a: "Yes. The core monorepo is licensed under the Business Source License 1.1 (BSL 1.1). The source is public, you can read it, fork it, self-host it, and modify it. BSL 1.1 converts to an open-source license (Apache 2.0) after the change date, and the only usage restriction is commercial resale as a competing hosted service.",
      },
      {
        q: "Can I self-host the whole thing?",
        a: "Yes. The public monorepo runs one organization per instance and has no hidden dependency on the SaaS control plane. Clone it, set your environment variables, and run the platform and workspace runtime together. Railway and Render templates are linked in the monorepo README.",
      },
      {
        q: "What is Hierarchical Memory (HMA) and why does it matter?",
        a: "HMA gives every workspace three memory scopes — LOCAL (private to one workspace), TEAM (shared within a parent-child hierarchy), and GLOBAL (org-wide, write-only from the root). Memory sharing follows the org chart instead of leaking across the whole system, so sibling teams stay isolated by default and escalation paths mirror the real hierarchy.",
      },
      {
        q: "What is Hermes and how do skills work?",
        a: "Awareness stores what happened across sessions. Hermes reads that memory back, identifies repeatable patterns, and promotes the ones that work into reusable skills. Skills hot-reload into the live workspace runtime, so the next task benefits from prior success without restarting. This is the self-improving flywheel in the architecture section.",
      },
      {
        q: "What stack is Molecule AI built on?",
        a: "The control plane is Go 1.25 + Gin + Postgres. Workspace runtimes are Python 3.11. The Canvas (the visual org chart + 10-tab ops panel) is Next.js 15 + React Flow + Zustand + Tailwind v4. Secure sandboxing uses four tiers from T1 sandbox through T4 full-host, per workspace.",
      },
      {
        q: "How do I get started?",
        a: "Read the quickstart at doc.moleculesai.app, then clone github.com/Molecule-AI/molecule-monorepo. The README walks through provisioning the first workspace, picking a runtime adapter, and wiring up your first team. Expect to have a running workspace in under ten minutes.",
      },
      {
        q: "What does it cost?",
        a: "The open-core monorepo is free under BSL 1.1 — you can self-host it forever without paying anyone. The hosted SaaS is live at app.moleculesai.app with signup, orgs, and multi-tenant provisioning on top of the same open core. API available at api.moleculesai.app. Documentation at doc.moleculesai.app.",
      },
    ],
  },
  finalCta: {
    vision:
      "From AI agent teams to autonomous bot teams to self-organizing digital workforces — Molecule AI is building the infrastructure for what comes after the single-agent era.",
    eyebrow: "Start Building",
    titleTop: "Your AI org chart",
    titleBottom: "starts with one workspace.",
    subtitle:
      "One workspace becomes a team. One team becomes an organization. Start now.",
    actions: [
      { label: "Open Dashboard", href: "https://app.moleculesai.app", primary: true },
      { label: "Read the docs", href: "https://doc.moleculesai.app", primary: false },
    ],
  },
  footer: {
    tagline: "The org-native control plane for heterogeneous AI agent teams. Licensed under BSL 1.1.",
    sections: [
      {
        title: "Product",
        links: [
          { label: "Architecture", href: "#architecture" },
          { label: "Runtime Adapters", href: "#adapters" },
          { label: "What Ships", href: "#ships" },
          { label: "Platform Moats", href: "#platform" },
        ],
      },
      {
        title: "Platform",
        links: [
          { label: "Dashboard", href: "https://app.moleculesai.app" },
          { label: "API", href: "https://api.moleculesai.app" },
          { label: "Documentation", href: "https://doc.moleculesai.app" },
          { label: "Status", href: "https://status.moleculesai.app" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "GitHub Org", href: "https://github.com/Molecule-AI" },
          { label: "Core Repo", href: "https://github.com/Molecule-AI/molecule-monorepo" },
          { label: "MCP Server", href: "https://www.npmjs.com/package/@molecule-ai/mcp-server" },
          { label: "Python SDK", href: "https://pypi.org/project/molecule-ai-sdk" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Why Now", href: "#why-now" },
          { label: "Use Cases", href: "#use-cases" },
          { label: "FAQ", href: "#faq" },
          { label: "Issues", href: "https://github.com/Molecule-AI/molecule-monorepo/issues" },
          { label: "Discussions", href: "https://github.com/Molecule-AI/molecule-monorepo/discussions" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Molecule AI. Licensed under BSL 1.1.`,
    builtWith: "Built with",
  },
};
