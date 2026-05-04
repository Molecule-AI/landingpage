// Landing page content — en + zh, ported from the Claude Design handoff
// (Molecule Landing.html). Single source for src/components/Landing.astro;
// per-locale page files are thin wrappers.

export interface LandingNavLink {
  label: string;
  href: string;
}

export interface LandingStat {
  to: number;
  suffix?: string;
  label: string;
}

export interface LandingReason {
  k: string;
  title: string;
  body: string;
}

export interface LandingUseCase {
  id: string;
  label: string;
  kicker: string;
  yaml: string;
}

export interface LandingPillar {
  k: string;
  title: string;
  body: string;
}

export interface LandingTier {
  tag: string;
  title: string;
  desc: string;
  count: string;
  glyph: "plugin" | "agent" | "org";
}

export interface LandingMemoryScope {
  name: string;
  summary: string;
  detail: string;
}

export interface LandingAdapterCard {
  title: string;
  headline: string;
  detail: string;
  items: string[];
}

export interface LandingShipColumn {
  label: string;
  name: string;
  stack: string;
  items: string[];
}

export interface LandingCreatorStep {
  number: string;
  title: string;
  description: string;
}

export interface LandingFooterSection {
  heading: string;
  items: string[];
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  statusbar: {
    allSystems: string;
    statusLink: string;
    phase: string;
  };
  nav: {
    links: LandingNavLink[];
    signIn: string;
    openCanvas: string;
  };
  hero: {
    eyebrow: string;
    h1Lead: string;
    h1Highlight: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    stats: LandingStat[];
    heroCardUrl: string;
    heroCardA2ALabel: string;
    heroCardA2ASuffix: string;
  };
  logoStrip: {
    eyebrow: string;
    runtimes: string[];
  };
  whyNow: {
    kicker: string;
    title: string;
    reasons: LandingReason[];
  };
  useCases: {
    kicker: string;
    title: string;
    intro: string;
    cmdPrefix: string;
    deploySteps: [string, string, string];
    cases: LandingUseCase[];
  };
  architecture: {
    kicker: string;
    title: string;
    description: string;
    scopeLabel: string;
    scopes: LandingMemoryScope[];
    hermesTitle: string;
    hermesSubtitle: string;
    hermesSteps: [string, string, string];
  };
  adapters: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: [LandingAdapterCard, LandingAdapterCard, LandingAdapterCard];
  };
  pillars: {
    kicker: string;
    title: string;
    items: LandingPillar[];
  };
  whatShips: {
    kicker: string;
    title: string;
    subtitle: string;
    columns: [LandingShipColumn, LandingShipColumn];
  };
  marketplace: {
    kicker: string;
    title: string;
    openMarketplace: string;
    tiers: LandingTier[];
    browse: string;
  };
  comparison: {
    kicker: string;
    title: string;
    capability: string;
    cols: [string, string, string, string];
    rows: Array<[string, string, string, string, string]>;
  };
  creator: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: [LandingCreatorStep, LandingCreatorStep, LandingCreatorStep];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  faq: {
    kicker: string;
    title: string;
    items: Array<[string, string]>;
  };
  final: {
    h2Lead: string;
    h2Highlight: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    sections: LandingFooterSection[];
    legal: string;
    version: string;
  };
}

const RUNTIMES = [
  "LangGraph",
  "Claude Code",
  "CrewAI",
  "AutoGen",
  "DeepAgents",
  "Hermes",
  "Gemini CLI",
  "OpenClaw",
  "LangChain",
  "Pydantic AI",
  "Bedrock Agents",
  "Vercel AI",
];

// YAML samples are intentionally not localized — they're code blocks.
const USECASE_YAMLS = {
  fintech: `org: fintech-startup
agents:
  - role: cfo
    runtime: langgraph
    tools: [ledger, stripe]
  - role: compliance
    runtime: claude-code
    plugins: [eu-ai-act, owasp-top-10]
  - role: senior-swe
    runtime: claude-code
    plugins: [pr-7gate, review-16d]
hitl:
  - amount > 10_000 → dual_review`,
  soc: `org: soc-team
agents:
  - role: l1-triage
    runtime: hermes
  - role: l2-investigator
    runtime: deepagents
    tools: [virustotal, mitre]
  - role: l3-analyst
    runtime: claude-code
  - role: ir-lead
    runtime: langgraph
hitl:
  - severity >= high → l3 + ir-lead`,
  lab: `org: med-research-lab
agents:
  - role: pi
    runtime: langgraph
  - role: postdoc
    count: 2
    runtime: deepagents
    tools: [pubmed, cochrane]
  - role: stats
    runtime: claude-code
  - role: irb-liaison
    runtime: hermes
memory:
  global: { scope: lab-corpus }`,
  creator: `org: creator-studio
agents:
  - role: editor
    runtime: claude-code
  - role: researcher
    runtime: deepagents
  - role: social
    runtime: hermes
    tools: [twitter, linkedin]
  - role: analytics
    runtime: langgraph`,
};

export const enContent: LandingContent = {
  meta: {
    title: "Molecule AI — The OS for AI agent organizations",
    description:
      "Compose multi-agent teams the way you'd staff a company. Visual org topology, A2A protocol, three-tier memory, runtime-portable — and a marketplace.",
  },
  statusbar: {
    allSystems: "All systems",
    statusLink: "status.moleculesai.app",
    phase: "Phase 33 shipped · Phase 35 Marketplace public beta",
  },
  nav: {
    links: [
      { label: "Platform", href: "https://app.moleculesai.app" },
      { label: "Marketplace", href: "https://market.moleculesai.app" },
      { label: "Docs", href: "https://doc.moleculesai.app" },
      { label: "GitHub", href: "https://github.com/Molecule-AI" },
    ],
    signIn: "Sign In",
    openCanvas: "Sign In",
  },
  hero: {
    eyebrow: "Phase 35 · Marketplace public beta is live",
    h1Lead: "The operating system for",
    h1Highlight: "AI agent organizations.",
    lede:
      "Compose multi-agent teams the way you'd staff a company. Visual org topology, A2A protocol, three-tier memory, runtime-portable — and a marketplace to buy or sell tools, agents, and entire departments.",
    primaryCta: "View on GitHub →",
    secondaryCta: "Try SaaS",
    stats: [
      { to: 2452, suffix: "+", label: "tests" },
      { to: 12, label: "runtimes" },
      { to: 80, suffix: "+", label: "API endpoints" },
      { to: 33, label: "phases shipped" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A live",
    heroCardA2ASuffix: "calls/s",
  },
  logoStrip: {
    eyebrow: "Runtime-neutral · 12 supported, infinitely extensible",
    runtimes: RUNTIMES,
  },
  whyNow: {
    kicker: "Why now",
    title: "Four shifts converging on multi-agent.",
    reasons: [
      {
        k: "01",
        title: "Agent count is exploding",
        body: "Teams have 1 agent today, 10+ next year. The bottleneck is no longer the model — it's how agents coordinate.",
      },
      {
        k: "02",
        title: "A2A & MCP became standards",
        body: "Cross-agent protocols are stabilizing. Multi-agent stops being an engineering problem and becomes a product problem.",
      },
      {
        k: "03",
        title: "Governance is now a buying gate",
        body: "EU AI Act, OWASP Agentic Top 10. Audit, HITL, RBAC are no longer optional.",
      },
      {
        k: "04",
        title: "Runtimes are commoditizing",
        body: 'Every quarter, a new "best" runtime ships. The platform layer wins — runtime-portable is the only safe bet.',
      },
    ],
  },
  useCases: {
    kicker: "Use cases",
    title: "One platform, many shapes.",
    intro:
      "Defined as code. Versionable. Forkable. Marketplace-publishable. The same workspace.yml ships to dev, staging, and prod with the topology intact.",
    cmdPrefix: "$ molecule deploy",
    deploySteps: ["topology validated", "agents provisioned", "A2A routes live"],
    cases: [
      { id: "fintech", label: "Fintech · Series A", kicker: "9 agents · 14 plugins", yaml: USECASE_YAMLS.fintech },
      { id: "soc", label: "Security Ops Center", kicker: "8 agents · 21 plugins", yaml: USECASE_YAMLS.soc },
      { id: "lab", label: "Research Lab", kicker: "6 agents · 9 plugins", yaml: USECASE_YAMLS.lab },
      { id: "creator", label: "Solo creator", kicker: "4 agents · 8 plugins", yaml: USECASE_YAMLS.creator },
    ],
  },
  architecture: {
    kicker: "Architecture",
    title: "Memory follows the org shape, not the request.",
    description:
      "LOCAL is what an agent saw. TEAM is what the squad agreed. GLOBAL is what the org learned. Three scopes, one continuous memory — versioned, scoped, and cross-runtime.",
    scopeLabel: "Scope",
    scopes: [
      {
        name: "LOCAL",
        summary: "What I saw",
        detail:
          "Per-agent, per-thread. Working memory for the active task. Auto-distilled into TEAM at thread close.",
      },
      {
        name: "TEAM",
        summary: "What we agreed",
        detail:
          "Workspace-scoped. Decisions, conventions, runbooks. Visible to teammates with the matching role.",
      },
      {
        name: "GLOBAL",
        summary: "What the org learned",
        detail:
          "Cross-workspace lessons. Curated by Hermes. Searchable; never written without policy.",
      },
    ],
    hermesTitle: "Hermes — the skill distillation layer",
    hermesSubtitle: "A learning layer between the runtime and the org.",
    hermesSteps: [
      "Watches every successful trajectory across runtimes",
      "Distills repeated patterns into typed skills",
      "Publishes them back as plugins, agents, or org templates",
    ],
  },
  adapters: {
    kicker: "Runtimes",
    title: "Pluggable, not picky.",
    subtitle:
      "Bring the runtime, model, and tooling you already trust. The control plane is the only constant.",
    cards: [
      {
        title: "Model providers",
        headline: "Any model, scoped per role.",
        detail:
          "Pick per-role; switch without touching topology. Roles inherit a default; override per call.",
        items: ["Anthropic Claude", "OpenAI", "NVIDIA Nemotron", "Local · Ollama / vLLM"],
      },
      {
        title: "Runtime adapters",
        headline: "Any agent runtime, A2A in front.",
        detail:
          "Adapters wrap each runtime in the same JSON-RPC envelope so a Claude Code agent can call a CrewAI agent calls a LangGraph agent.",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "Hermes",
          "+ bring-your-own",
        ],
      },
      {
        title: "Tools · Eval · Observability",
        headline: "Standards-first plumbing.",
        detail:
          "MCP for tools. OpenTelemetry for traces. Langfuse for prompt-level eval. NeMo Guardrails for policy.",
        items: ["MCP tools", "OpenTelemetry", "Langfuse", "NeMo Guardrails"],
      },
    ],
  },
  pillars: {
    kicker: "Platform",
    title: "Eight pillars we wrote into the PRD.",
    items: [
      { k: "F1", title: "Role > Task", body: "Model the org chart, not the workflow. Roles inherit tools, memory scope, HITL ladder." },
      { k: "F2", title: "Recursive teams", body: "Agents can spin up sub-teams within their permission envelope. Org grows like a living tree." },
      { k: "F3", title: "Org = Topology", body: "Every workspace is a versioned graph. Diff it, branch it, share it, sell it." },
      { k: "F4", title: "Distributed A2A", body: "Agents speak JSON-RPC 2.0 directly. Platform routes; never a single bottleneck." },
      { k: "F5", title: "4-layer security", body: "Identity · permission · audit · encryption. AES-256-GCM envelopes, WorkOS OAuth." },
      { k: "F6", title: "Tiered HITL", body: "No-approval, single-reviewer, dual-reviewer. Risk-graded, configured per role." },
      { k: "F7", title: "Cross-workspace traces", body: "OpenTelemetry + Langfuse — every call across every agent, in one timeline." },
      { k: "F8", title: "3-layer Marketplace", body: "Plugin · Agent · Org. Two layers more than GitHub Actions, two more than GPT Store." },
    ],
  },
  whatShips: {
    kicker: "What ships",
    title: "Open-core stack, production-grade.",
    subtitle:
      "The Canvas runs in your browser. The Platform runs on your tenant. Both are open-core.",
    columns: [
      {
        label: "Canvas",
        name: "moleculesai.app",
        stack: "Next.js 15 · React Flow · Zustand",
        items: [
          "Topology editor with diff/branch/merge",
          "Live A2A trace overlay on the canvas",
          "Marketplace install in two clicks",
          "Roles · HITL · audit configured visually",
        ],
      },
      {
        label: "Platform",
        name: "Control Plane",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "JSON-RPC 2.0 A2A router with backpressure",
          "Three-tier memory store (LOCAL/TEAM/GLOBAL)",
          "WorkOS OAuth · AES-256-GCM secret envelopes",
          "OpenTelemetry pipeline + Langfuse adapter",
        ],
      },
    ],
  },
  marketplace: {
    kicker: "Marketplace",
    title: "Buy a tool. Hire an Agent. Or import an entire department.",
    openMarketplace: "Open the Marketplace →",
    browse: "Browse →",
    tiers: [
      { tag: "L1", title: "Plugin", desc: "A tool, guardrail, or compliance hook. Plug into any agent.", count: "21 first-party · open to third parties soon", glyph: "plugin" },
      { tag: "L2", title: "Agent", desc: "A pre-trained role: tax CPA, SOC analyst, PM, QA. Hire, don't train.", count: "8 verified roles in beta", glyph: "agent" },
      { tag: "L3", title: "Org Bundle", desc: "A whole department: agents, plugins, topology, HITL ladder.", count: "6 templates published", glyph: "org" },
    ],
  },
  creator: {
    kicker: "For creators",
    title: "Build it. List it. Earn from it.",
    subtitle:
      "Plugins, agents, and org bundles ship as signed manifests. Stripe Connect handles payouts. Authors keep 80%.",
    steps: [
      {
        number: "01",
        title: "Build",
        description:
          "Author against the same SDK we ship the first-party catalog with. Tests included.",
      },
      {
        number: "02",
        title: "List",
        description:
          "Sign the manifest, set a price, pick a tier. Verified review for L2 and L3.",
      },
      {
        number: "03",
        title: "Earn",
        description:
          "80% revenue share. Paid out via Stripe Connect. Re-publish a new version any time.",
      },
    ],
    primaryCta: { label: "Publish on the Marketplace →", href: "https://market.moleculesai.app" },
    secondaryCta: { label: "Read the Author Guide", href: "https://doc.moleculesai.app/marketplace" },
  },
  comparison: {
    kicker: "Where we sit",
    title: "Not a framework. Not Ops. Not Zapier.",
    capability: "Capability",
    cols: ["Molecule", "Agent frameworks", "LLM Ops", "Workflow tools"],
    rows: [
      ["Multi-agent topology, native", "✓", "—", "✓", "partial"],
      ["Runtime-portable", "✓", "runtime-locked", "—", "—"],
      ["A2A protocol", "✓", "—", "—", "—"],
      ["Three-tier marketplace", "✓", "—", "—", "—"],
      ["Audit trail · EU AI Act ready", "✓", "partial", "—", "partial"],
      ["HITL tiers", "✓", "—", "—", "partial"],
      ["Org template versioning", "✓", "—", "—", "—"],
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Common questions.",
    items: [
      [
        "Why not just use one super-agent?",
        "Context pollution and hallucination compound. Specialized agents in their own context windows is how every large organization in human history has worked — and how language models stay sharp.",
      ],
      [
        "What if a better runtime ships next year?",
        "Swap it. Roles, memory, and topology are abstract. Adapters connect runtimes; nothing in your config changes when you migrate.",
      ],
      [
        "How does the marketplace work for sellers?",
        "Three tiers: Plugin, Agent, Org. Set your price, ship a signed manifest, get paid via Stripe Connect. We take 20%.",
      ],
      [
        "Self-hosted?",
        "Yes — full private deployment with the same Control Plane. Common for regulated industries; data never leaves your tenant.",
      ],
      [
        "What protocols do you support?",
        "A2A (JSON-RPC 2.0) for inter-agent calls, MCP for tool exposure, OpenTelemetry for traces.",
      ],
    ],
  },
  final: {
    h2Lead: "Stop wiring agents.",
    h2Highlight: "Start running an organization.",
    lede:
      "Free during public beta. SaaS or self-hosted. Bring your runtime, bring your team — we'll bring the org.",
    primaryCta: "Browse the Marketplace",
    secondaryCta: "Open Canvas",
  },
  footer: {
    tagline:
      "The operating system for AI agent organizations. Build, deploy, govern — org-shaped from day one.",
    sections: [
      { heading: "Product", items: ["Canvas", "Platform API", "Control Plane", "Customer App"] },
      { heading: "Marketplace", items: ["Plugins (L1)", "Agents (L2)", "Org Bundles (L3)", "Publish"] },
      { heading: "Runtimes", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+8 more"] },
      { heading: "Trust", items: ["EU AI Act", "OWASP", "SOC 2 (in progress)", "Audit trails"] },
    ],
    legal: "© 2026 Molecule AI · Multi-agent org governance platform",
    version: "moleculesai.app · v2026.4",
  },
};

export const zhContent: LandingContent = {
  meta: {
    title: "Molecule AI — AI 智能体组织的操作系统",
    description:
      "像组建一家公司那样组建多智能体团队。可视化组织拓扑、A2A 协议、三层内存、运行时可移植 —— 还有一个买卖工具、智能体与整建制部门的市场。",
  },
  statusbar: {
    allSystems: "全部正常",
    statusLink: "status.moleculesai.app",
    phase: "Phase 33 已交付 · Phase 35 市场公测",
  },
  nav: {
    links: [
      { label: "平台", href: "https://app.moleculesai.app" },
      { label: "市场", href: "https://market.moleculesai.app" },
      { label: "文档", href: "https://doc.moleculesai.app" },
      { label: "GitHub", href: "https://github.com/Molecule-AI" },
    ],
    signIn: "登录",
    openCanvas: "登录",
  },
  hero: {
    eyebrow: "Phase 35 · 市场公测已上线",
    h1Lead: "为 AI 智能体组织而生的",
    h1Highlight: "操作系统。",
    lede:
      "像组建一家公司那样组建多智能体团队。可视化组织拓扑、A2A 协议、三层内存、运行时可移植 —— 还有一个可以买卖工具、智能体与整建制部门的市场。",
    primaryCta: "在 GitHub 查看 →",
    secondaryCta: "试用 SaaS",
    stats: [
      { to: 2452, suffix: "+", label: "测试" },
      { to: 12, label: "运行时" },
      { to: 80, suffix: "+", label: "API 端点" },
      { to: 33, label: "Phase 已交付" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A 实时",
    heroCardA2ASuffix: "次/秒",
  },
  logoStrip: {
    eyebrow: "运行时无关 · 已支持 12 种,可无限扩展",
    runtimes: RUNTIMES,
  },
  whyNow: {
    kicker: "为何是当下",
    title: "四股趋势正在汇聚到多智能体。",
    reasons: [
      {
        k: "01",
        title: "智能体数量正在爆发",
        body: "今天每个团队 1 个智能体,明年就是 10+。瓶颈不再是模型,而是智能体之间如何协同。",
      },
      {
        k: "02",
        title: "A2A 与 MCP 已成标准",
        body: "跨智能体协议正在收敛,多智能体从工程问题变成产品问题。",
      },
      {
        k: "03",
        title: "治理已是采购门槛",
        body: "EU AI Act、OWASP Agentic Top 10。审计、HITL、RBAC 不再可选。",
      },
      {
        k: "04",
        title: "运行时正在商品化",
        body: "每个季度都有新的“最佳”运行时。胜者是平台层 —— 运行时可移植是唯一安全的下注。",
      },
    ],
  },
  useCases: {
    kicker: "应用场景",
    title: "同一个平台,千变万化。",
    intro:
      "用代码定义。可版本化、可分叉、可在市场发布。同一份 workspace.yml 部署到 dev、staging、prod,拓扑保持一致。",
    cmdPrefix: "$ molecule deploy",
    deploySteps: ["拓扑校验通过", "智能体已就绪", "A2A 路由已启用"],
    cases: [
      { id: "fintech", label: "金融科技 · A 轮", kicker: "9 个智能体 · 14 插件", yaml: USECASE_YAMLS.fintech },
      { id: "soc", label: "安全运营中心", kicker: "8 个智能体 · 21 插件", yaml: USECASE_YAMLS.soc },
      { id: "lab", label: "科研实验室", kicker: "6 个智能体 · 9 插件", yaml: USECASE_YAMLS.lab },
      { id: "creator", label: "独立创作者", kicker: "4 个智能体 · 8 插件", yaml: USECASE_YAMLS.creator },
    ],
  },
  architecture: {
    kicker: "架构",
    title: "内存随组织形态生长,不随单次请求消亡。",
    description:
      "LOCAL 是“我看到的”,TEAM 是“我们达成的共识”,GLOBAL 是“组织习得的”。三层范围、一份连续内存 —— 版本化、按域隔离、跨运行时。",
    scopeLabel: "范围",
    scopes: [
      {
        name: "LOCAL",
        summary: "我看到的",
        detail:
          "按智能体、按线程隔离。当前任务的工作记忆。线程关闭时自动蒸馏进 TEAM。",
      },
      {
        name: "TEAM",
        summary: "我们的共识",
        detail:
          "工作空间范围。决策、约定、Runbook。同角色的队友可见。",
      },
      {
        name: "GLOBAL",
        summary: "组织的沉淀",
        detail:
          "跨工作空间的经验。由 Hermes 策展。可检索;从不绕过策略写入。",
      },
    ],
    hermesTitle: "Hermes —— 技能蒸馏层",
    hermesSubtitle: "运行时与组织之间的学习层。",
    hermesSteps: [
      "观察跨运行时的每一条成功轨迹",
      "把反复出现的模式蒸馏为类型化技能",
      "再以插件、智能体或组织模板形式回流到市场",
    ],
  },
  adapters: {
    kicker: "运行时",
    title: "可插拔,不挑食。",
    subtitle:
      "继续用你已经信任的运行时、模型与工具链。控制平面是唯一的恒量。",
    cards: [
      {
        title: "模型提供方",
        headline: "任何模型,按角色配置。",
        detail:
          "按角色选型,切换时不动拓扑。角色继承默认模型,可逐次调用覆盖。",
        items: ["Anthropic Claude", "OpenAI", "NVIDIA Nemotron", "本地 · Ollama / vLLM"],
      },
      {
        title: "运行时适配器",
        headline: "任何智能体运行时,前置 A2A。",
        detail:
          "适配器把每种运行时包装成相同的 JSON-RPC 信封 —— Claude Code 调 CrewAI、CrewAI 调 LangGraph,毫无障碍。",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "Hermes",
          "+ 自带运行时",
        ],
      },
      {
        title: "工具 · 评估 · 可观测",
        headline: "面向标准的管道。",
        detail:
          "MCP 接工具,OpenTelemetry 收追踪,Langfuse 做 Prompt 级评估,NeMo Guardrails 落地策略。",
        items: ["MCP 工具", "OpenTelemetry", "Langfuse", "NeMo Guardrails"],
      },
    ],
  },
  pillars: {
    kicker: "平台",
    title: "我们写进 PRD 的八根支柱。",
    items: [
      { k: "F1", title: "角色优先于任务", body: "建模组织架构,而不是工作流。角色继承工具、内存范围与 HITL 阶梯。" },
      { k: "F2", title: "递归子团队", body: "智能体可以在权限边界内派生子团队。组织像活树一样生长。" },
      { k: "F3", title: "组织即拓扑", body: "每个工作空间都是一张版本化的图。可 diff、可分叉、可分享、可售卖。" },
      { k: "F4", title: "分布式 A2A", body: "智能体直接讲 JSON-RPC 2.0。平台只负责路由,不做单点瓶颈。" },
      { k: "F5", title: "四层安全", body: "身份 · 权限 · 审计 · 加密。AES-256-GCM 信封 + WorkOS OAuth。" },
      { k: "F6", title: "分级 HITL", body: "免审、单审、双审。按风险分级,按角色配置。" },
      { k: "F7", title: "跨工作空间追踪", body: "OpenTelemetry + Langfuse —— 每一次调用、每一个智能体,汇于同一时间线。" },
      { k: "F8", title: "三层市场", body: "插件 · 智能体 · 组织。比 GitHub Actions 多两层,比 GPT Store 多两层。" },
    ],
  },
  whatShips: {
    kicker: "我们交付什么",
    title: "开源核心,生产级。",
    subtitle: "Canvas 跑在你浏览器里,Platform 跑在你的租户里。两者都开源核心。",
    columns: [
      {
        label: "画布",
        name: "moleculesai.app",
        stack: "Next.js 15 · React Flow · Zustand",
        items: [
          "拓扑编辑器,支持 diff / 分支 / 合并",
          "画布上叠加 A2A 实时追踪",
          "两步安装来自市场的组件",
          "角色 · HITL · 审计,可视化配置",
        ],
      },
      {
        label: "平台",
        name: "控制平面",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "带背压的 JSON-RPC 2.0 A2A 路由",
          "三层内存存储(LOCAL / TEAM / GLOBAL)",
          "WorkOS OAuth · AES-256-GCM 密钥信封",
          "OpenTelemetry 管道 + Langfuse 适配器",
        ],
      },
    ],
  },
  marketplace: {
    kicker: "市场",
    title: "买一个工具。雇一个智能体。或导入整建制部门。",
    openMarketplace: "进入市场 →",
    browse: "浏览 →",
    tiers: [
      { tag: "L1", title: "插件", desc: "工具、护栏、合规钩子。可接入任意智能体。", count: "21 个首方插件 · 第三方即将开放", glyph: "plugin" },
      { tag: "L2", title: "智能体", desc: "已训练好的角色:税务 CPA、SOC 分析师、PM、QA。雇用,无需自训。", count: "8 个已认证角色,公测中", glyph: "agent" },
      { tag: "L3", title: "组织包", desc: "整建制部门:智能体、插件、拓扑、HITL 阶梯。", count: "已发布 6 套模板", glyph: "org" },
    ],
  },
  creator: {
    kicker: "创作者",
    title: "做一个。上架。变现。",
    subtitle:
      "插件、智能体、组织包以带签名的 manifest 发布。Stripe Connect 自动结算。作者拿走 80%。",
    steps: [
      {
        number: "01",
        title: "构建",
        description:
          "用我们交付首方目录所用的同一套 SDK。测试齐备。",
      },
      {
        number: "02",
        title: "上架",
        description:
          "签 manifest、定价、选层级。L2 与 L3 走人工复核。",
      },
      {
        number: "03",
        title: "变现",
        description:
          "80% 分成,通过 Stripe Connect 结算,新版本随时再发布。",
      },
    ],
    primaryCta: { label: "去市场发布 →", href: "https://market.moleculesai.app" },
    secondaryCta: { label: "阅读作者指南", href: "https://doc.moleculesai.app/marketplace" },
  },
  comparison: {
    kicker: "我们的位置",
    title: "不是框架。不是 Ops。不是 Zapier。",
    capability: "能力",
    cols: ["Molecule", "智能体框架", "LLM Ops", "工作流工具"],
    rows: [
      ["原生多智能体拓扑", "✓", "—", "✓", "partial"],
      ["运行时可移植", "✓", "锁定运行时", "—", "—"],
      ["A2A 协议", "✓", "—", "—", "—"],
      ["三层市场", "✓", "—", "—", "—"],
      ["审计 · EU AI Act 就绪", "✓", "partial", "—", "partial"],
      ["分级 HITL", "✓", "—", "—", "partial"],
      ["组织模板版本化", "✓", "—", "—", "—"],
    ],
  },
  faq: {
    kicker: "常见问题",
    title: "你可能想问的。",
    items: [
      [
        "为什么不用一个超级智能体?",
        "上下文污染与幻觉会复合。在各自上下文里跑专才,这是人类大型组织千百年来的运作方式 —— 也是让语言模型保持锋利的方式。",
      ],
      [
        "如果明年有更好的运行时怎么办?",
        "切换即可。角色、内存、拓扑都是抽象的。适配器连接运行时;迁移时,你的配置不变。",
      ],
      [
        "卖家如何上架?",
        "三层:插件、智能体、组织。设置价格,提交带签名的 manifest,通过 Stripe Connect 收款。我们抽 20%。",
      ],
      [
        "支持自托管吗?",
        "支持 —— 控制平面可整体私有部署。受监管行业常见;数据始终留在你的租户内。",
      ],
      [
        "支持哪些协议?",
        "A2A(JSON-RPC 2.0)用于智能体间通信,MCP 用于工具暴露,OpenTelemetry 用于追踪。",
      ],
    ],
  },
  final: {
    h2Lead: "别再手工接线智能体。",
    h2Highlight: "开始运营一家组织。",
    lede:
      "公测期间免费。SaaS 或自托管。带上你的运行时、你的团队 —— 组织由我们补齐。",
    primaryCta: "浏览市场",
    secondaryCta: "打开画布",
  },
  footer: {
    tagline:
      "AI 智能体组织的操作系统。从第一天就以组织形态构建、部署、治理。",
    sections: [
      { heading: "产品", items: ["画布", "平台 API", "控制平面", "客户端应用"] },
      { heading: "市场", items: ["插件 (L1)", "智能体 (L2)", "组织包 (L3)", "发布"] },
      { heading: "运行时", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+8 更多"] },
      { heading: "信任", items: ["EU AI Act", "OWASP", "SOC 2(进行中)", "审计追踪"] },
    ],
    legal: "© 2026 Molecule AI · 多智能体组织治理平台",
    version: "moleculesai.app · v2026.4",
  },
};

export const frContent: LandingContent = {
  meta: {
    title: "Molecule AI — Le système d'exploitation des organisations d'agents IA",
    description:
      "Composez des équipes multi-agents comme vous monteriez une entreprise. Topologie d'organisation visuelle, protocole A2A, mémoire à trois niveaux, indépendant du runtime — et une marketplace.",
  },
  statusbar: {
    allSystems: "Tous les systèmes",
    statusLink: "status.moleculesai.app",
    phase: "Phase 33 livrée · Phase 35 Marketplace en bêta publique",
  },
  nav: {
    links: [
      { label: "Plateforme", href: "https://app.moleculesai.app" },
      { label: "Marketplace", href: "https://market.moleculesai.app" },
      { label: "Docs", href: "https://doc.moleculesai.app" },
      { label: "GitHub", href: "https://github.com/Molecule-AI" },
    ],
    signIn: "Se connecter",
    openCanvas: "Se connecter",
  },
  hero: {
    eyebrow: "Phase 35 · La bêta publique de la Marketplace est en ligne",
    h1Lead: "Le système d'exploitation pour",
    h1Highlight: "les organisations d'agents IA.",
    lede:
      "Composez des équipes multi-agents comme vous monteriez une entreprise. Topologie d'organisation visuelle, protocole A2A, mémoire à trois niveaux, indépendant du runtime — et une marketplace pour acheter ou vendre des outils, des agents et des départements entiers.",
    primaryCta: "Voir sur GitHub →",
    secondaryCta: "Essayer le SaaS",
    stats: [
      { to: 2452, suffix: "+", label: "tests" },
      { to: 12, label: "runtimes" },
      { to: 80, suffix: "+", label: "endpoints API" },
      { to: 33, label: "phases livrées" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A en direct",
    heroCardA2ASuffix: "appels/s",
  },
  logoStrip: {
    eyebrow: "Indépendant du runtime · 12 pris en charge, infiniment extensible",
    runtimes: RUNTIMES,
  },
  whyNow: {
    kicker: "Pourquoi maintenant",
    title: "Quatre tendances convergent vers le multi-agents.",
    reasons: [
      {
        k: "01",
        title: "Le nombre d'agents explose",
        body: "Les équipes ont 1 agent aujourd'hui, plus de 10 l'an prochain. Le goulot d'étranglement n'est plus le modèle — c'est la coordination entre agents.",
      },
      {
        k: "02",
        title: "A2A et MCP sont devenus des standards",
        body: "Les protocoles inter-agents se stabilisent. Le multi-agents cesse d'être un problème d'ingénierie pour devenir un problème produit.",
      },
      {
        k: "03",
        title: "La gouvernance est devenue un critère d'achat",
        body: "EU AI Act, OWASP Agentic Top 10. Audit, HITL, RBAC ne sont plus optionnels.",
      },
      {
        k: "04",
        title: "Les runtimes se banalisent",
        body: 'Chaque trimestre, un nouveau « meilleur » runtime sort. La couche plateforme l\'emporte — l\'indépendance du runtime est le seul pari sûr.',
      },
    ],
  },
  useCases: {
    kicker: "Cas d'usage",
    title: "Une seule plateforme, mille formes.",
    intro:
      "Défini comme du code. Versionnable. Forkable. Publiable sur la marketplace. Le même workspace.yml se déploie en dev, staging et prod en gardant la topologie intacte.",
    cmdPrefix: "$ molecule deploy",
    deploySteps: ["topologie validée", "agents provisionnés", "routes A2A actives"],
    cases: [
      { id: "fintech", label: "Fintech · Série A", kicker: "9 agents · 14 plugins", yaml: USECASE_YAMLS.fintech },
      { id: "soc", label: "Centre opérationnel de sécurité", kicker: "8 agents · 21 plugins", yaml: USECASE_YAMLS.soc },
      { id: "lab", label: "Laboratoire de recherche", kicker: "6 agents · 9 plugins", yaml: USECASE_YAMLS.lab },
      { id: "creator", label: "Créateur indépendant", kicker: "4 agents · 8 plugins", yaml: USECASE_YAMLS.creator },
    ],
  },
  architecture: {
    kicker: "Architecture",
    title: "La mémoire suit la forme de l'organisation, pas la requête.",
    description:
      "LOCAL, c'est ce qu'un agent a vu. TEAM, c'est ce que l'équipe a convenu. GLOBAL, c'est ce que l'organisation a appris. Trois portées, une seule mémoire continue — versionnée, cloisonnée, et inter-runtime.",
    scopeLabel: "Portée",
    scopes: [
      {
        name: "LOCAL",
        summary: "Ce que j'ai vu",
        detail:
          "Par agent, par fil. Mémoire de travail pour la tâche en cours. Distillée automatiquement vers TEAM à la fermeture du fil.",
      },
      {
        name: "TEAM",
        summary: "Ce que nous avons convenu",
        detail:
          "Limitée au workspace. Décisions, conventions, runbooks. Visible par les coéquipiers ayant le rôle correspondant.",
      },
      {
        name: "GLOBAL",
        summary: "Ce que l'organisation a appris",
        detail:
          "Leçons inter-workspaces. Curées par Hermes. Indexables ; jamais écrites en contournant la politique.",
      },
    ],
    hermesTitle: "Hermes — la couche de distillation des compétences",
    hermesSubtitle: "Une couche d'apprentissage entre le runtime et l'organisation.",
    hermesSteps: [
      "Observe chaque trajectoire réussie sur tous les runtimes",
      "Distille les motifs récurrents en compétences typées",
      "Les republie sous forme de plugins, d'agents ou de modèles d'organisation",
    ],
  },
  adapters: {
    kicker: "Runtimes",
    title: "Pluggable, pas pointilleux.",
    subtitle:
      "Apportez le runtime, le modèle et l'outillage auxquels vous faites déjà confiance. Le control plane est la seule constante.",
    cards: [
      {
        title: "Fournisseurs de modèles",
        headline: "N'importe quel modèle, défini par rôle.",
        detail:
          "Choisi par rôle ; changeable sans toucher à la topologie. Les rôles héritent d'un défaut ; surchargeable à chaque appel.",
        items: ["Anthropic Claude", "OpenAI", "NVIDIA Nemotron", "Local · Ollama / vLLM"],
      },
      {
        title: "Adaptateurs de runtime",
        headline: "N'importe quel runtime d'agent, A2A en façade.",
        detail:
          "Les adaptateurs encapsulent chaque runtime dans la même enveloppe JSON-RPC : un agent Claude Code peut appeler un agent CrewAI qui appelle un agent LangGraph.",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "Hermes",
          "+ apportez le vôtre",
        ],
      },
      {
        title: "Outils · Eval · Observabilité",
        headline: "Une plomberie d'abord standard.",
        detail:
          "MCP pour les outils. OpenTelemetry pour les traces. Langfuse pour l'évaluation au niveau du prompt. NeMo Guardrails pour la politique.",
        items: ["Outils MCP", "OpenTelemetry", "Langfuse", "NeMo Guardrails"],
      },
    ],
  },
  pillars: {
    kicker: "Plateforme",
    title: "Huit piliers que nous avons inscrits dans le PRD.",
    items: [
      { k: "F1", title: "Rôle > Tâche", body: "Modélisez l'organigramme, pas le workflow. Les rôles héritent des outils, de la portée mémoire et de l'échelle HITL." },
      { k: "F2", title: "Équipes récursives", body: "Les agents peuvent monter des sous-équipes dans leur enveloppe de permissions. L'organisation grandit comme un arbre vivant." },
      { k: "F3", title: "Org = Topologie", body: "Chaque workspace est un graphe versionné. À diffuser, brancher, partager, vendre." },
      { k: "F4", title: "A2A distribué", body: "Les agents parlent JSON-RPC 2.0 directement. La plateforme route ; jamais un goulot unique." },
      { k: "F5", title: "Sécurité 4 couches", body: "Identité · permission · audit · chiffrement. Enveloppes AES-256-GCM, OAuth WorkOS." },
      { k: "F6", title: "HITL gradué", body: "Sans validation, validation simple, double validation. Gradué par risque, configuré par rôle." },
      { k: "F7", title: "Traces inter-workspaces", body: "OpenTelemetry + Langfuse — chaque appel sur chaque agent, dans une seule timeline." },
      { k: "F8", title: "Marketplace 3 couches", body: "Plugin · Agent · Org. Deux couches de plus que GitHub Actions, deux de plus que le GPT Store." },
    ],
  },
  whatShips: {
    kicker: "Ce qui est livré",
    title: "Stack open-core, niveau production.",
    subtitle:
      "Le Canvas tourne dans votre navigateur. La Plateforme tourne sur votre tenant. Les deux sont open-core.",
    columns: [
      {
        label: "Canvas",
        name: "moleculesai.app",
        stack: "Next.js 15 · React Flow · Zustand",
        items: [
          "Éditeur de topologie avec diff/branche/merge",
          "Superposition de traces A2A en direct sur le canvas",
          "Installation depuis la marketplace en deux clics",
          "Rôles · HITL · audit configurés visuellement",
        ],
      },
      {
        label: "Plateforme",
        name: "Control Plane",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "Routeur A2A JSON-RPC 2.0 avec contre-pression",
          "Stockage mémoire à trois niveaux (LOCAL/TEAM/GLOBAL)",
          "OAuth WorkOS · enveloppes secrètes AES-256-GCM",
          "Pipeline OpenTelemetry + adaptateur Langfuse",
        ],
      },
    ],
  },
  marketplace: {
    kicker: "Marketplace",
    title: "Achetez un outil. Embauchez un agent. Ou importez un département entier.",
    openMarketplace: "Ouvrir la Marketplace →",
    browse: "Parcourir →",
    tiers: [
      { tag: "L1", title: "Plugin", desc: "Un outil, un garde-fou ou un hook de conformité. Branché à n'importe quel agent.", count: "21 first-party · ouverture aux tiers bientôt", glyph: "plugin" },
      { tag: "L2", title: "Agent", desc: "Un rôle pré-entraîné : CPA fiscal, analyste SOC, PM, QA. Embauchez plutôt qu'entraîner.", count: "8 rôles vérifiés en bêta", glyph: "agent" },
      { tag: "L3", title: "Bundle Org", desc: "Un département entier : agents, plugins, topologie, échelle HITL.", count: "6 modèles publiés", glyph: "org" },
    ],
  },
  creator: {
    kicker: "Pour les créateurs",
    title: "Construisez-le. Publiez-le. Gagnez avec.",
    subtitle:
      "Plugins, agents et bundles d'organisation sont livrés sous forme de manifestes signés. Stripe Connect gère les paiements. Les auteurs gardent 80 %.",
    steps: [
      {
        number: "01",
        title: "Construire",
        description:
          "Développez avec le même SDK que celui qui livre notre catalogue first-party. Tests inclus.",
      },
      {
        number: "02",
        title: "Publier",
        description:
          "Signez le manifeste, fixez un prix, choisissez un tier. Revue vérifiée pour L2 et L3.",
      },
      {
        number: "03",
        title: "Gagner",
        description:
          "80 % de partage de revenus. Versé via Stripe Connect. Republiez une nouvelle version à tout moment.",
      },
    ],
    primaryCta: { label: "Publier sur la Marketplace →", href: "https://market.moleculesai.app" },
    secondaryCta: { label: "Lire le guide auteur", href: "https://doc.moleculesai.app/marketplace" },
  },
  comparison: {
    kicker: "Où nous nous situons",
    title: "Pas un framework. Pas du LLM Ops. Pas Zapier.",
    capability: "Capacité",
    cols: ["Molecule", "Frameworks d'agents", "LLM Ops", "Outils de workflow"],
    rows: [
      ["Topologie multi-agents native", "✓", "—", "✓", "partiel"],
      ["Indépendant du runtime", "✓", "lié au runtime", "—", "—"],
      ["Protocole A2A", "✓", "—", "—", "—"],
      ["Marketplace à trois niveaux", "✓", "—", "—", "—"],
      ["Piste d'audit · prêt EU AI Act", "✓", "partiel", "—", "partiel"],
      ["Niveaux HITL", "✓", "—", "—", "partiel"],
      ["Versionnage des modèles d'org", "✓", "—", "—", "—"],
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Questions fréquentes.",
    items: [
      [
        "Pourquoi ne pas simplement utiliser un super-agent ?",
        "La pollution du contexte et les hallucinations s'accumulent. Des agents spécialisés dans leur propre fenêtre de contexte, c'est ainsi que toute grande organisation humaine a fonctionné — et c'est ainsi que les modèles de langage restent affûtés.",
      ],
      [
        "Et si un meilleur runtime sort l'an prochain ?",
        "Changez-le. Rôles, mémoire et topologie sont abstraits. Les adaptateurs connectent les runtimes ; rien dans votre configuration ne change lorsque vous migrez.",
      ],
      [
        "Comment fonctionne la marketplace pour les vendeurs ?",
        "Trois niveaux : Plugin, Agent, Org. Fixez votre prix, livrez un manifeste signé, soyez payé via Stripe Connect. Nous prenons 20 %.",
      ],
      [
        "Auto-hébergé ?",
        "Oui — déploiement privé complet avec le même Control Plane. Courant dans les industries régulées ; les données ne quittent jamais votre tenant.",
      ],
      [
        "Quels protocoles prenez-vous en charge ?",
        "A2A (JSON-RPC 2.0) pour les appels inter-agents, MCP pour l'exposition des outils, OpenTelemetry pour les traces.",
      ],
    ],
  },
  final: {
    h2Lead: "Arrêtez de câbler des agents.",
    h2Highlight: "Commencez à diriger une organisation.",
    lede:
      "Gratuit pendant la bêta publique. SaaS ou auto-hébergé. Apportez votre runtime, apportez votre équipe — nous apportons l'organisation.",
    primaryCta: "Parcourir la Marketplace",
    secondaryCta: "Ouvrir le Canvas",
  },
  footer: {
    tagline:
      "Le système d'exploitation des organisations d'agents IA. Construire, déployer, gouverner — pensé en organisation dès le premier jour.",
    sections: [
      { heading: "Produit", items: ["Canvas", "API Plateforme", "Control Plane", "Application client"] },
      { heading: "Marketplace", items: ["Plugins (L1)", "Agents (L2)", "Bundles Org (L3)", "Publier"] },
      { heading: "Runtimes", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+8 autres"] },
      { heading: "Confiance", items: ["EU AI Act", "OWASP", "SOC 2 (en cours)", "Pistes d'audit"] },
    ],
    legal: "© 2026 Molecule AI · Plateforme de gouvernance d'organisations multi-agents",
    version: "moleculesai.app · v2026.4",
  },
};

export const jaContent: LandingContent = {
  meta: {
    title: "Molecule AI — AI エージェント組織のためのオペレーティング システム",
    description:
      "会社をスタッフィングするように、マルチエージェント チームを組成する。可視化された組織トポロジー、A2A プロトコル、3 層メモリ、ランタイム ポータブル — そして、ツール・エージェント・部門まるごとを売買できる Marketplace。",
  },
  statusbar: {
    allSystems: "全システム正常",
    statusLink: "status.moleculesai.app",
    phase: "Phase 33 出荷済み · Phase 35 Marketplace パブリック ベータ",
  },
  nav: {
    links: [
      { label: "Platform", href: "https://app.moleculesai.app" },
      { label: "Marketplace", href: "https://market.moleculesai.app" },
      { label: "Docs", href: "https://doc.moleculesai.app" },
      { label: "GitHub", href: "https://github.com/Molecule-AI" },
    ],
    signIn: "サインイン",
    openCanvas: "サインイン",
  },
  hero: {
    eyebrow: "Phase 35 · Marketplace パブリック ベータが稼働中",
    h1Lead: "AI エージェント組織のための",
    h1Highlight: "オペレーティング システム。",
    lede:
      "会社をスタッフィングするように、マルチエージェント チームを組成する。可視化された組織トポロジー、A2A プロトコル、3 層メモリ、ランタイム ポータブル — そして、ツール、エージェント、部門まるごとを売買できる Marketplace。",
    primaryCta: "GitHub で見る →",
    secondaryCta: "SaaS を試す",
    stats: [
      { to: 2452, suffix: "+", label: "テスト" },
      { to: 12, label: "ランタイム" },
      { to: 80, suffix: "+", label: "API エンドポイント" },
      { to: 33, label: "出荷済み Phase" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A ライブ",
    heroCardA2ASuffix: "calls/s",
  },
  logoStrip: {
    eyebrow: "ランタイム中立 · 12 種をサポート、無限に拡張可能",
    runtimes: RUNTIMES,
  },
  whyNow: {
    kicker: "なぜ今",
    title: "4 つの潮流が、マルチエージェントへ収束しつつあります。",
    reasons: [
      {
        k: "01",
        title: "エージェント数は爆発的に増えている",
        body: "今日 1 体のエージェントを抱えるチームも、来年には 10 体以上になります。ボトルネックはもはやモデルではなく、エージェント同士をどう協調させるかです。",
      },
      {
        k: "02",
        title: "A2A と MCP が標準化された",
        body: "クロス エージェント プロトコルが収束し、マルチエージェントは工学的な問題からプロダクトの問題へと変わっています。",
      },
      {
        k: "03",
        title: "ガバナンスは購買のゲートになった",
        body: "EU AI Act、OWASP Agentic Top 10。監査、HITL、RBAC はもはやオプションではありません。",
      },
      {
        k: "04",
        title: "ランタイムはコモディティ化している",
        body: "四半期ごとに新しい「ベスト」ランタイムが登場します。勝つのはプラットフォーム層 — ランタイム ポータブルだけが安全な賭けです。",
      },
    ],
  },
  useCases: {
    kicker: "ユースケース",
    title: "ひとつのプラットフォーム、多様な形。",
    intro:
      "コードとして定義し、バージョン管理でき、フォーク可能、Marketplace に公開可能。同じ workspace.yml を dev、staging、prod に出荷しても、トポロジーは変わりません。",
    cmdPrefix: "$ molecule deploy",
    deploySteps: ["トポロジー検証完了", "エージェント プロビジョニング完了", "A2A ルート稼働中"],
    cases: [
      { id: "fintech", label: "Fintech · Series A", kicker: "9 エージェント · 14 プラグイン", yaml: USECASE_YAMLS.fintech },
      { id: "soc", label: "セキュリティ オペレーション センター", kicker: "8 エージェント · 21 プラグイン", yaml: USECASE_YAMLS.soc },
      { id: "lab", label: "リサーチ ラボ", kicker: "6 エージェント · 9 プラグイン", yaml: USECASE_YAMLS.lab },
      { id: "creator", label: "ソロ クリエイター", kicker: "4 エージェント · 8 プラグイン", yaml: USECASE_YAMLS.creator },
    ],
  },
  architecture: {
    kicker: "アーキテクチャ",
    title: "メモリは、リクエストではなく組織の形に従って広がります。",
    description:
      "LOCAL は「私が見たもの」、TEAM は「私たちが合意したこと」、GLOBAL は「組織が学んだこと」。3 つのスコープに、1 つの連続するメモリ — バージョン管理され、スコープされ、ランタイムをまたぎます。",
    scopeLabel: "スコープ",
    scopes: [
      {
        name: "LOCAL",
        summary: "私が見たもの",
        detail:
          "エージェント単位、スレッド単位。アクティブなタスクのワーキング メモリです。スレッド クローズ時に TEAM へ自動的に蒸留されます。",
      },
      {
        name: "TEAM",
        summary: "私たちが合意したこと",
        detail:
          "ワークスペース スコープ。決定事項、規約、Runbook。同じロールを持つチームメイトに共有されます。",
      },
      {
        name: "GLOBAL",
        summary: "組織が学んだこと",
        detail:
          "ワークスペースをまたいだ知見。Hermes がキュレーションします。検索可能、ただしポリシーなしには書き込まれません。",
      },
    ],
    hermesTitle: "Hermes — スキル蒸留レイヤー",
    hermesSubtitle: "ランタイムと組織の間に立つ学習レイヤー。",
    hermesSteps: [
      "ランタイムをまたいで、すべての成功した軌跡を観察する",
      "繰り返されるパターンを型付きスキルへ蒸留する",
      "プラグイン、エージェント、組織テンプレートとして再公開する",
    ],
  },
  adapters: {
    kicker: "ランタイム",
    title: "プラガブル、なんでもいける。",
    subtitle:
      "あなたが既に信頼しているランタイム、モデル、ツールチェインをそのまま持ち込んでください。コントロール プレーンだけが唯一の定数です。",
    cards: [
      {
        title: "モデル プロバイダー",
        headline: "どんなモデルでも、ロールごとにスコープ。",
        detail:
          "ロール単位で選び、トポロジーに触れずに切り替え可能。ロールはデフォルトを継承し、呼び出しごとに上書きできます。",
        items: ["Anthropic Claude", "OpenAI", "NVIDIA Nemotron", "ローカル · Ollama / vLLM"],
      },
      {
        title: "ランタイム アダプター",
        headline: "どんなエージェント ランタイムでも、A2A を前面に。",
        detail:
          "アダプターが各ランタイムを同じ JSON-RPC エンベロープに包むため、Claude Code エージェントが CrewAI エージェントを呼び、それが LangGraph エージェントを呼ぶことができます。",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "Hermes",
          "+ 自前のランタイム",
        ],
      },
      {
        title: "ツール · 評価 · 可観測性",
        headline: "標準ファーストの配管。",
        detail:
          "ツールには MCP、トレースには OpenTelemetry、プロンプト レベルの評価には Langfuse、ポリシーには NeMo Guardrails。",
        items: ["MCP ツール", "OpenTelemetry", "Langfuse", "NeMo Guardrails"],
      },
    ],
  },
  pillars: {
    kicker: "プラットフォーム",
    title: "PRD に書き込んだ 8 本の柱。",
    items: [
      { k: "F1", title: "Role > Task", body: "ワークフローではなく、組織図をモデリング。ロールがツール、メモリ スコープ、HITL ラダーを継承します。" },
      { k: "F2", title: "再帰的なチーム", body: "エージェントは権限の範囲内でサブチームを立ち上げられます。組織は生きた木のように成長します。" },
      { k: "F3", title: "組織 = トポロジー", body: "すべてのワークスペースはバージョン管理されたグラフです。Diff し、ブランチを切り、共有し、販売できます。" },
      { k: "F4", title: "分散 A2A", body: "エージェントは JSON-RPC 2.0 で直接対話します。プラットフォームはルーティングするだけで、単一のボトルネックになりません。" },
      { k: "F5", title: "4 層セキュリティ", body: "アイデンティティ · パーミッション · 監査 · 暗号化。AES-256-GCM エンベロープ、WorkOS OAuth。" },
      { k: "F6", title: "段階的 HITL", body: "承認なし、シングル レビュアー、ダブル レビュアー。リスクで段階分けし、ロールごとに設定。" },
      { k: "F7", title: "ワークスペース横断トレース", body: "OpenTelemetry + Langfuse — すべてのエージェントを横断するすべての呼び出しを、1 つのタイムラインで。" },
      { k: "F8", title: "3 層 Marketplace", body: "Plugin · Agent · Org。GitHub Actions より 2 層、GPT Store より 2 層多い。" },
    ],
  },
  whatShips: {
    kicker: "出荷物",
    title: "オープンコア スタック、本番品質。",
    subtitle:
      "Canvas はあなたのブラウザで動き、Platform はあなたのテナントで動きます。どちらもオープンコアです。",
    columns: [
      {
        label: "Canvas",
        name: "moleculesai.app",
        stack: "Next.js 15 · React Flow · Zustand",
        items: [
          "diff / branch / merge 対応のトポロジー エディタ",
          "キャンバス上にライブ A2A トレースをオーバーレイ",
          "2 クリックで Marketplace からインストール",
          "ロール · HITL · 監査をビジュアルに設定",
        ],
      },
      {
        label: "Platform",
        name: "コントロール プレーン",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "バックプレッシャー対応の JSON-RPC 2.0 A2A ルーター",
          "3 層メモリ ストア(LOCAL / TEAM / GLOBAL)",
          "WorkOS OAuth · AES-256-GCM シークレット エンベロープ",
          "OpenTelemetry パイプライン + Langfuse アダプター",
        ],
      },
    ],
  },
  marketplace: {
    kicker: "Marketplace",
    title: "ツールを買う。エージェントを雇う。あるいは、部門ごと取り込む。",
    openMarketplace: "Marketplace を開く →",
    browse: "見る →",
    tiers: [
      { tag: "L1", title: "Plugin", desc: "ツール、ガードレール、コンプライアンス フック。任意のエージェントに差し込めます。", count: "21 個のファースト パーティ · まもなくサード パーティに開放", glyph: "plugin" },
      { tag: "L2", title: "Agent", desc: "事前学習済みのロール:税務 CPA、SOC アナリスト、PM、QA。トレーニング不要、雇うだけ。", count: "8 個の認定済みロールがベータ提供中", glyph: "agent" },
      { tag: "L3", title: "Org Bundle", desc: "部門まるごと:エージェント、プラグイン、トポロジー、HITL ラダー。", count: "6 個のテンプレートを公開", glyph: "org" },
    ],
  },
  creator: {
    kicker: "クリエイター向け",
    title: "作って、出品して、稼ぐ。",
    subtitle:
      "プラグイン、エージェント、組織バンドルは署名付きマニフェストとして出荷されます。Stripe Connect が支払いを処理。作者の取り分は 80%。",
    steps: [
      {
        number: "01",
        title: "Build",
        description:
          "ファースト パーティ カタログを出荷しているのと同じ SDK に対して開発します。テスト同梱。",
      },
      {
        number: "02",
        title: "List",
        description:
          "マニフェストに署名し、価格を設定し、ティアを選びます。L2 と L3 は審査付き。",
      },
      {
        number: "03",
        title: "Earn",
        description:
          "80% のレベニュー シェア。Stripe Connect で支払い。新バージョンはいつでも再公開可能です。",
      },
    ],
    primaryCta: { label: "Marketplace で公開する →", href: "https://market.moleculesai.app" },
    secondaryCta: { label: "Author Guide を読む", href: "https://doc.moleculesai.app/marketplace" },
  },
  comparison: {
    kicker: "私たちの立ち位置",
    title: "フレームワークではなく、Ops でもなく、Zapier でもない。",
    capability: "機能",
    cols: ["Molecule", "エージェント フレームワーク", "LLM Ops", "ワークフロー ツール"],
    rows: [
      ["マルチエージェント トポロジー、ネイティブ", "✓", "—", "✓", "partial"],
      ["ランタイム ポータブル", "✓", "ランタイム固定", "—", "—"],
      ["A2A プロトコル", "✓", "—", "—", "—"],
      ["3 層 Marketplace", "✓", "—", "—", "—"],
      ["監査ログ · EU AI Act 対応", "✓", "partial", "—", "partial"],
      ["HITL ティア", "✓", "—", "—", "partial"],
      ["組織テンプレートのバージョン管理", "✓", "—", "—", "—"],
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "よくある質問。",
    items: [
      [
        "なぜ 1 体のスーパー エージェントで済ませないのですか?",
        "コンテキスト汚染とハルシネーションは複合的に悪化します。専門化されたエージェントが各自のコンテキスト ウィンドウで働く構図は、人類史上のあらゆる大規模組織が採用してきた形であり、言語モデルが鋭さを保つための形でもあります。",
      ],
      [
        "来年もっと優れたランタイムが登場したら?",
        "差し替えればよいだけです。ロール、メモリ、トポロジーは抽象化されています。アダプターがランタイムを接続するため、移行時に設定は変わりません。",
      ],
      [
        "売り手にとって Marketplace はどう機能しますか?",
        "Plugin、Agent、Org の 3 ティア。価格を設定し、署名付きマニフェストを出荷し、Stripe Connect で支払いを受け取ります。当社の手数料は 20% です。",
      ],
      [
        "セルフ ホスト可能ですか?",
        "はい — 同じコントロール プレーンで完全なプライベート デプロイが可能です。規制業界では一般的で、データはあなたのテナントから出ません。",
      ],
      [
        "どのプロトコルをサポートしていますか?",
        "エージェント間呼び出しには A2A(JSON-RPC 2.0)、ツール公開には MCP、トレースには OpenTelemetry。",
      ],
    ],
  },
  final: {
    h2Lead: "エージェントの配線をやめましょう。",
    h2Highlight: "組織を運営し始めましょう。",
    lede:
      "パブリック ベータ期間中は無料。SaaS でもセルフ ホストでも。あなたのランタイム、あなたのチームを持ち込んでください — 組織は当社が用意します。",
    primaryCta: "Marketplace を見る",
    secondaryCta: "Canvas を開く",
  },
  footer: {
    tagline:
      "AI エージェント組織のためのオペレーティング システム。初日から組織の形で構築・デプロイ・統治を。",
    sections: [
      { heading: "プロダクト", items: ["Canvas", "Platform API", "コントロール プレーン", "カスタマー アプリ"] },
      { heading: "Marketplace", items: ["Plugins (L1)", "Agents (L2)", "Org Bundles (L3)", "公開する"] },
      { heading: "ランタイム", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+8 種"] },
      { heading: "Trust", items: ["EU AI Act", "OWASP", "SOC 2(進行中)", "監査ログ"] },
    ],
    legal: "© 2026 Molecule AI · マルチエージェント組織のガバナンス プラットフォーム",
    version: "moleculesai.app · v2026.4",
  },
};

export const esContent: LandingContent = {
  meta: {
    title: "Molecule AI — El SO para organizaciones de agentes de IA",
    description:
      "Compón equipos multi-agente como si formaras una empresa. Topología organizativa visual, protocolo A2A, memoria de tres niveles, portable entre runtimes — y un marketplace.",
  },
  statusbar: {
    allSystems: "Todo operativo",
    statusLink: "status.moleculesai.app",
    phase: "Phase 33 entregada · Phase 35 Marketplace en beta pública",
  },
  nav: {
    links: [
      { label: "Plataforma", href: "https://app.moleculesai.app" },
      { label: "Marketplace", href: "https://market.moleculesai.app" },
      { label: "Docs", href: "https://doc.moleculesai.app" },
      { label: "GitHub", href: "https://github.com/Molecule-AI" },
    ],
    signIn: "Iniciar sesión",
    openCanvas: "Iniciar sesión",
  },
  hero: {
    eyebrow: "Phase 35 · Beta pública del Marketplace ya disponible",
    h1Lead: "El sistema operativo para",
    h1Highlight: "organizaciones de agentes de IA.",
    lede:
      "Compón equipos multi-agente como si formaras una empresa. Topología organizativa visual, protocolo A2A, memoria de tres niveles, portable entre runtimes — y un marketplace para comprar o vender herramientas, agentes y departamentos enteros.",
    primaryCta: "Ver en GitHub →",
    secondaryCta: "Probar SaaS",
    stats: [
      { to: 2452, suffix: "+", label: "tests" },
      { to: 12, label: "runtimes" },
      { to: 80, suffix: "+", label: "endpoints API" },
      { to: 33, label: "phases entregadas" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A en vivo",
    heroCardA2ASuffix: "llamadas/s",
  },
  logoStrip: {
    eyebrow: "Agnóstico al runtime · 12 soportados, infinitamente extensible",
    runtimes: RUNTIMES,
  },
  whyNow: {
    kicker: "Por qué ahora",
    title: "Cuatro cambios convergen sobre lo multi-agente.",
    reasons: [
      {
        k: "01",
        title: "El número de agentes está explotando",
        body: "Los equipos tienen 1 agente hoy, 10+ el año que viene. El cuello de botella ya no es el modelo — es cómo se coordinan los agentes.",
      },
      {
        k: "02",
        title: "A2A y MCP se convirtieron en estándares",
        body: "Los protocolos entre agentes se están estabilizando. Lo multi-agente deja de ser un problema de ingeniería y se convierte en un problema de producto.",
      },
      {
        k: "03",
        title: "La gobernanza ya es un requisito de compra",
        body: "EU AI Act, OWASP Agentic Top 10. Auditoría, HITL, RBAC ya no son opcionales.",
      },
      {
        k: "04",
        title: "Los runtimes se están comoditizando",
        body: 'Cada trimestre se lanza un nuevo "mejor" runtime. La capa de plataforma gana — la portabilidad entre runtimes es la única apuesta segura.',
      },
    ],
  },
  useCases: {
    kicker: "Casos de uso",
    title: "Una plataforma, muchas formas.",
    intro:
      "Definido como código. Versionable. Bifurcable. Publicable en el marketplace. El mismo workspace.yml viaja a dev, staging y prod manteniendo la topología intacta.",
    cmdPrefix: "$ molecule deploy",
    deploySteps: ["topología validada", "agentes aprovisionados", "rutas A2A activas"],
    cases: [
      { id: "fintech", label: "Fintech · Serie A", kicker: "9 agentes · 14 plugins", yaml: USECASE_YAMLS.fintech },
      { id: "soc", label: "Centro de Operaciones de Seguridad", kicker: "8 agentes · 21 plugins", yaml: USECASE_YAMLS.soc },
      { id: "lab", label: "Laboratorio de investigación", kicker: "6 agentes · 9 plugins", yaml: USECASE_YAMLS.lab },
      { id: "creator", label: "Creador en solitario", kicker: "4 agentes · 8 plugins", yaml: USECASE_YAMLS.creator },
    ],
  },
  architecture: {
    kicker: "Arquitectura",
    title: "La memoria sigue la forma de la organización, no la de la petición.",
    description:
      "LOCAL es lo que vio un agente. TEAM es lo que el equipo acordó. GLOBAL es lo que aprendió la organización. Tres ámbitos, una memoria continua — versionada, acotada y entre runtimes.",
    scopeLabel: "Ámbito",
    scopes: [
      {
        name: "LOCAL",
        summary: "Lo que vi",
        detail:
          "Por agente, por hilo. Memoria de trabajo para la tarea activa. Auto-destilada en TEAM al cerrar el hilo.",
      },
      {
        name: "TEAM",
        summary: "Lo que acordamos",
        detail:
          "Acotado al workspace. Decisiones, convenciones, runbooks. Visible para los compañeros con el mismo rol.",
      },
      {
        name: "GLOBAL",
        summary: "Lo que aprendió la organización",
        detail:
          "Lecciones entre workspaces. Curado por Hermes. Buscable; nunca se escribe sin política.",
      },
    ],
    hermesTitle: "Hermes — la capa de destilación de skills",
    hermesSubtitle: "Una capa de aprendizaje entre el runtime y la organización.",
    hermesSteps: [
      "Observa cada trayectoria exitosa entre runtimes",
      "Destila los patrones repetidos en skills tipados",
      "Los publica de vuelta como plugins, agentes o templates de organización",
    ],
  },
  adapters: {
    kicker: "Runtimes",
    title: "Pluggable, no quisquilloso.",
    subtitle:
      "Trae el runtime, modelo y herramientas en los que ya confías. El plano de control es lo único constante.",
    cards: [
      {
        title: "Proveedores de modelos",
        headline: "Cualquier modelo, acotado por rol.",
        detail:
          "Elige por rol; cambia sin tocar la topología. Los roles heredan un default; sobreescribe por llamada.",
        items: ["Anthropic Claude", "OpenAI", "NVIDIA Nemotron", "Local · Ollama / vLLM"],
      },
      {
        title: "Adaptadores de runtime",
        headline: "Cualquier runtime de agentes, A2A delante.",
        detail:
          "Los adaptadores envuelven cada runtime en el mismo sobre JSON-RPC para que un agente Claude Code llame a un agente CrewAI que llama a un agente LangGraph.",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "Hermes",
          "+ trae el tuyo",
        ],
      },
      {
        title: "Tools · Eval · Observabilidad",
        headline: "Plomería con estándares primero.",
        detail:
          "MCP para herramientas. OpenTelemetry para trazas. Langfuse para eval a nivel de prompt. NeMo Guardrails para política.",
        items: ["Herramientas MCP", "OpenTelemetry", "Langfuse", "NeMo Guardrails"],
      },
    ],
  },
  pillars: {
    kicker: "Plataforma",
    title: "Ocho pilares que escribimos en el PRD.",
    items: [
      { k: "F1", title: "Rol > Tarea", body: "Modela el organigrama, no el flujo. Los roles heredan herramientas, ámbito de memoria y escalera de HITL." },
      { k: "F2", title: "Equipos recursivos", body: "Los agentes pueden levantar sub-equipos dentro de su sobre de permisos. La organización crece como un árbol vivo." },
      { k: "F3", title: "Org = Topología", body: "Cada workspace es un grafo versionado. Hazle diff, ramifícalo, compártelo, véndelo." },
      { k: "F4", title: "A2A distribuido", body: "Los agentes hablan JSON-RPC 2.0 directamente. La plataforma enruta; nunca un único cuello de botella." },
      { k: "F5", title: "Seguridad de 4 capas", body: "Identidad · permiso · auditoría · cifrado. Sobres AES-256-GCM, OAuth de WorkOS." },
      { k: "F6", title: "HITL por niveles", body: "Sin aprobación, revisor único, doble revisor. Por nivel de riesgo, configurado por rol." },
      { k: "F7", title: "Trazas entre workspaces", body: "OpenTelemetry + Langfuse — cada llamada de cada agente, en una sola línea de tiempo." },
      { k: "F8", title: "Marketplace de 3 capas", body: "Plugin · Agente · Org. Dos capas más que GitHub Actions, dos más que GPT Store." },
    ],
  },
  whatShips: {
    kicker: "Qué entregamos",
    title: "Stack open-core, grado producción.",
    subtitle:
      "El Canvas corre en tu navegador. La Plataforma corre en tu tenant. Ambos son open-core.",
    columns: [
      {
        label: "Canvas",
        name: "moleculesai.app",
        stack: "Next.js 15 · React Flow · Zustand",
        items: [
          "Editor de topología con diff/branch/merge",
          "Overlay de trazas A2A en vivo sobre el canvas",
          "Instalación desde el Marketplace en dos clics",
          "Roles · HITL · auditoría configurados visualmente",
        ],
      },
      {
        label: "Plataforma",
        name: "Control Plane",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "Router A2A JSON-RPC 2.0 con backpressure",
          "Almacén de memoria de tres niveles (LOCAL/TEAM/GLOBAL)",
          "OAuth de WorkOS · sobres de secretos AES-256-GCM",
          "Pipeline OpenTelemetry + adaptador Langfuse",
        ],
      },
    ],
  },
  marketplace: {
    kicker: "Marketplace",
    title: "Compra una herramienta. Contrata un Agente. O importa un departamento entero.",
    openMarketplace: "Abrir el Marketplace →",
    browse: "Explorar →",
    tiers: [
      { tag: "L1", title: "Plugin", desc: "Una herramienta, guardrail o hook de compliance. Conéctalo a cualquier agente.", count: "21 first-party · pronto abierto a terceros", glyph: "plugin" },
      { tag: "L2", title: "Agente", desc: "Un rol pre-entrenado: CPA fiscal, analista SOC, PM, QA. Contrata, no entrenes.", count: "8 roles verificados en beta", glyph: "agent" },
      { tag: "L3", title: "Org Bundle", desc: "Todo un departamento: agentes, plugins, topología, escalera HITL.", count: "6 templates publicados", glyph: "org" },
    ],
  },
  creator: {
    kicker: "Para creadores",
    title: "Constrúyelo. Pónlo en venta. Gana con ello.",
    subtitle:
      "Los plugins, agentes y org bundles se entregan como manifiestos firmados. Stripe Connect gestiona los pagos. Los autores se quedan con el 80%.",
    steps: [
      {
        number: "01",
        title: "Construye",
        description:
          "Construye contra el mismo SDK con el que entregamos el catálogo first-party. Tests incluidos.",
      },
      {
        number: "02",
        title: "Publica",
        description:
          "Firma el manifiesto, fija precio, elige nivel. Revisión verificada para L2 y L3.",
      },
      {
        number: "03",
        title: "Gana",
        description:
          "Reparto del 80% de los ingresos. Pagado vía Stripe Connect. Republica una nueva versión cuando quieras.",
      },
    ],
    primaryCta: { label: "Publica en el Marketplace →", href: "https://market.moleculesai.app" },
    secondaryCta: { label: "Lee la guía de autor", href: "https://doc.moleculesai.app/marketplace" },
  },
  comparison: {
    kicker: "Dónde encajamos",
    title: "No es un framework. No es Ops. No es Zapier.",
    capability: "Capacidad",
    cols: ["Molecule", "Frameworks de agentes", "LLM Ops", "Workflow tools"],
    rows: [
      ["Topología multi-agente, nativa", "✓", "—", "✓", "parcial"],
      ["Portable entre runtimes", "✓", "atado al runtime", "—", "—"],
      ["Protocolo A2A", "✓", "—", "—", "—"],
      ["Marketplace de tres capas", "✓", "—", "—", "—"],
      ["Trazabilidad de auditoría · listo para EU AI Act", "✓", "parcial", "—", "parcial"],
      ["Niveles HITL", "✓", "—", "—", "parcial"],
      ["Versionado de templates de org", "✓", "—", "—", "—"],
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Preguntas comunes.",
    items: [
      [
        "¿Por qué no usar un solo súper-agente?",
        "La contaminación de contexto y la alucinación se acumulan. Los agentes especializados en sus propias ventanas de contexto es como ha funcionado cada gran organización en la historia humana — y como los modelos de lenguaje se mantienen afilados.",
      ],
      [
        "¿Y si el año que viene sale un mejor runtime?",
        "Cámbialo. Los roles, la memoria y la topología son abstractos. Los adaptadores conectan los runtimes; nada en tu config cambia cuando migras.",
      ],
      [
        "¿Cómo funciona el marketplace para vendedores?",
        "Tres niveles: Plugin, Agente, Org. Pon tu precio, entrega un manifiesto firmado, cobra vía Stripe Connect. Nos quedamos el 20%.",
      ],
      [
        "¿Self-hosted?",
        "Sí — despliegue privado completo con el mismo Control Plane. Habitual en industrias reguladas; los datos nunca salen de tu tenant.",
      ],
      [
        "¿Qué protocolos soportáis?",
        "A2A (JSON-RPC 2.0) para llamadas entre agentes, MCP para exponer herramientas, OpenTelemetry para trazas.",
      ],
    ],
  },
  final: {
    h2Lead: "Deja de cablear agentes.",
    h2Highlight: "Empieza a operar una organización.",
    lede:
      "Gratis durante la beta pública. SaaS o self-hosted. Trae tu runtime, trae tu equipo — nosotros traemos la organización.",
    primaryCta: "Explora el Marketplace",
    secondaryCta: "Abrir Canvas",
  },
  footer: {
    tagline:
      "El sistema operativo para organizaciones de agentes de IA. Construye, despliega, gobierna — con forma de organización desde el día uno.",
    sections: [
      { heading: "Producto", items: ["Canvas", "Platform API", "Control Plane", "Customer App"] },
      { heading: "Marketplace", items: ["Plugins (L1)", "Agentes (L2)", "Org Bundles (L3)", "Publicar"] },
      { heading: "Runtimes", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+8 más"] },
      { heading: "Confianza", items: ["EU AI Act", "OWASP", "SOC 2 (en proceso)", "Trazas de auditoría"] },
    ],
    legal: "© 2026 Molecule AI · Plataforma de gobernanza de organizaciones multi-agente",
    version: "moleculesai.app · v2026.4",
  },
};

export const landingContent: Record<"en" | "zh" | "fr" | "ja" | "es", LandingContent> = {
  en: enContent,
  zh: zhContent,
  fr: frContent,
  ja: jaContent,
  es: esContent,
};
