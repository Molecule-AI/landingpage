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
    primaryCta: "Explore the Marketplace →",
    secondaryCta: "Talk to founders",
    stats: [
      { to: 2452, suffix: "+", label: "tests" },
      { to: 8, label: "runtimes" },
      { to: 80, suffix: "+", label: "API endpoints" },
      { to: 33, label: "phases shipped" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A live",
    heroCardA2ASuffix: "calls/s",
  },
  logoStrip: {
    eyebrow: "Runtime-neutral · 8 supported, infinitely extensible",
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
      { heading: "Runtimes", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+5 more"] },
      { heading: "Trust", items: ["EU AI Act", "OWASP", "SOC 2 (in progress)", "Audit trails"] },
    ],
    legal: "© 2026 Molecule AI · 多智能体组织治理平台",
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
    primaryCta: "浏览市场 →",
    secondaryCta: "联系创始人",
    stats: [
      { to: 2452, suffix: "+", label: "测试" },
      { to: 8, label: "运行时" },
      { to: 80, suffix: "+", label: "API 端点" },
      { to: 33, label: "Phase 已交付" },
    ],
    heroCardUrl: "tenant.moleculesai.app/canvas",
    heroCardA2ALabel: "A2A 实时",
    heroCardA2ASuffix: "次/秒",
  },
  logoStrip: {
    eyebrow: "运行时无关 · 已支持 8 种,可无限扩展",
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
      { heading: "运行时", items: ["LangGraph", "Claude Code", "CrewAI", "AutoGen", "+5 更多"] },
      { heading: "信任", items: ["EU AI Act", "OWASP", "SOC 2(进行中)", "审计追踪"] },
    ],
    legal: "© 2026 Molecule AI · 多智能体组织治理平台",
    version: "moleculesai.app · v2026.4",
  },
};

export const landingContent: Record<"en" | "zh", LandingContent> = {
  en: enContent,
  zh: zhContent,
};
