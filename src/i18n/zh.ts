import type { ContentShape } from "./types";

export const zh: ContentShape = {
  locale: "zh",
  htmlLang: "zh-CN",
  siteMeta: {
    name: "Molecule",
    fullName: "Molecule AI",
    tagline: "面向异构 AI 智能体团队的组织级控制平面。",
    description:
      "Molecule AI 是面向异构 AI 智能体团队的 open-core 控制平面。工作空间即组织角色,组织架构即拓扑,治理开箱即用 —— 七种运行时、分层内存、技能进化、零锁定。",
    github: "https://github.com/Molecule-AI",
    monorepo: "https://github.com/Molecule-AI/molecule-monorepo",
    docs: "https://doc.moleculesai.app",
    license: "BSL 1.1",
    localeSwitch: { label: "EN", href: "/" },
  },
  nav: [
    { label: "当下价值", href: "#why-now" },
    { label: "应用场景", href: "#use-cases" },
    { label: "内存架构", href: "#architecture" },
    { label: "适配生态", href: "#adapters" },
    { label: "产品交付", href: "#ships" },
    { label: "平台护城河", href: "#platform" },
    { label: "文档", href: "https://doc.moleculesai.app" },
  ],
  hero: {
    badge: "Open core · BSL 1.1 · 主分支已发布",
    titleLead: "让 AI 智能体组成",
    titleHighlight: "可投入生产的团队。",
    description:
      "Molecule AI 是面向异构 AI 智能体团队的组织级控制平面。工作空间即角色,组织架构即拓扑。七种运行时、分层内存、技能进化、生产级治理 —— 开箱即用。",
    pillars: [
      "可视化画布",
      "运行时兼容",
      "分层内存",
      "技能进化",
      "运维护栏",
    ],
    primaryCta: { label: "阅读文档", href: "https://doc.moleculesai.app" },
    secondaryCta: { label: "查看 GitHub", href: "https://github.com/Molecule-AI/molecule-monorepo" },
    tertiaryCta: { label: "了解架构", href: "#architecture" },
  },
  whatShips: {
    eyebrow: "主分支已交付",
    title: "一套完整的控制平面,不是概念验证。",
    subtitle:
      "下面每一项能力今天都已经在开源 monorepo 的主分支上 —— 没有私有分支,没有未发布的 alpha,没有只给演示看的代码路径。",
    columns: [
      {
        label: "CANVAS",
        name: "工作空间画布",
        stack: "Next.js 15 · React Flow · Zustand · Tailwind v4",
        items: [
          "拖拽式团队嵌套构建",
          "空状态部署 + 引导向导",
          "模板面板与 Bundle 导入导出",
          "10 个侧边面板:对话 · 活动 · 详情 · 技能 · 终端 · 配置 · 文件 · 内存 · 追踪 · 事件",
          "通过 WebSocket 实时呈现拓扑",
        ],
      },
      {
        label: "PLATFORM",
        name: "控制平面",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "工作空间 CRUD 与配置发放",
          "注册表、心跳、重启、暂停/恢复",
          "浏览器安全的 A2A 代理",
          "团队扩展 / 收起(分形递归)",
          "全局密钥 + 工作空间级覆盖",
          "JSON Lines 审计轨迹",
        ],
      },
    ],
  },
  dashboard: {
    title: "控制平面 / 生产环境",
    liveLabel: "molecule.org · 实时",
    rootName: "组织根节点",
    rootPath: "molecule://root",
    rootMeta: ["6 种运行时", "主分支", "14 个工作空间"],
    teams: [
      {
        name: "工程团队",
        subtitle: "2 个智能体 · CLAUDE CODE",
        status: "运行中",
        agents: [
          { name: "前端智能体", model: "claude-sonnet-4-5", state: "running" },
          { name: "后端智能体", model: "claude-opus-4", state: "running" },
        ],
        scope: "LOCAL · TEAM",
      },
      {
        name: "研究团队",
        subtitle: "3 个智能体 · LANGGRAPH",
        status: "运行中",
        agents: [
          { name: "知识合成器", model: "gpt-5", state: "running" },
          { name: "语料索引器", model: "nemotron-70b", state: "running" },
        ],
        scope: "LOCAL",
      },
      {
        name: "运维团队",
        subtitle: "2 个智能体 · CREWAI",
        status: "空闲",
        agents: [
          { name: "部署协调器", model: "claude-opus-4", state: "idle" },
          { name: "事件路由器", model: "gpt-5", state: "waiting" },
        ],
        scope: "GLOBAL · TEAM",
      },
    ],
    footerStats: [
      { value: "14", label: "工作空间" },
      { value: "6", label: "运行时" },
      { value: "3", label: "内存范围" },
      { value: "0", label: "偏移" },
    ],
  },
  socialProof: {
    label: "与你团队正在使用的运行时、模型和工具无缝协作",
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
    eyebrow: "当下价值",
    title: "协同,才是新的瓶颈。",
    subtitle:
      "每个团队都能跑出一个 Demo 智能体。但没人拥有那一层 —— 把零散 Demo 变成一个受治理、可复利的组织。",
    signals: [
      {
        title: "单智能体 Demo 遇到了天花板",
        detail:
          "单个智能体可以回答问题,却无法驱动发布流水线或跨组织边界升级。约束不是能力,而是协同。",
      },
      {
        title: "治理是上线的前置条件",
        detail:
          "没有作用域授权、没有审计轨迹、没有人工审核门 —— 就没有生产部署。治理是第一天的事,不是第二阶段的事。",
      },
      {
        title: "内存边界决定平台价值",
        detail:
          "扁平的共享上下文会泄漏数据,并在规模化时崩溃。按拓扑划分的内存(LOCAL / TEAM / GLOBAL)才是新基线。",
      },
      {
        title: "异构运行时才是常态",
        detail:
          "LangGraph、Claude Code、CrewAI —— 没有哪个框架在所有场景都占优。控制平面必须天然与运行时无关。",
      },
    ],
  },
  useCases: {
    eyebrow: "可以构建什么",
    titleLead: "AI 智能体团队服务于",
    rotatingTexts: [
      "研究型组织",
      "工程交付团队",
      "运营自动化",
      "管理层控制台",
    ],
    subtitle:
      "一个工作空间即一个角色。一组工作空间即一个团队。团队分形地组合成组织 —— 没有漂移。",
    items: [
      {
        key: "research",
        tag: "研究型组织",
        title: "内存隔离下的并行研究",
        description:
          "兄弟工作空间在 LOCAL 作用域下独立探索,父节点通过 TEAM 内存进行综合。",
        bullets: [
          "默认通过 LOCAL 作用域隔离兄弟节点",
          "父节点通过 TEAM 内存进行综合",
          "每个工作空间独立的 Langfuse 追踪链",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
      },
      {
        key: "engineering",
        tag: "工程交付",
        title: "多运行时团队的自我协调",
        description:
          "Claude Code、LangGraph、OpenClaw 在同一团队工作空间中并行,配合 A2A 路由与人工审核门。",
        bullets: [
          "六种运行时适配器,一套工作空间契约",
          "部署与合并需人工审批",
          "递归式团队扩展,零漂移",
        ],
        capabilities: ["Claude Code", "LangGraph", "OpenClaw", "HITL"],
      },
      {
        key: "operations",
        tag: "运营自动化",
        title: "治理优先的运维自动化",
        description:
          "RBAC 作用域的权限、按层级路由的审批、可审计的事件流 —— 按工作空间、按角色划分。",
        bullets: [
          "RBAC 角色:操作员、管理员、只读",
          "审批路由跟随组织拓扑",
          "JSON Lines 审计 + 全局密钥",
        ],
        capabilities: ["RBAC", "审计", "密钥", "CrewAI"],
      },
      {
        key: "executive",
        tag: "管理层视图",
        title: "一块画布,实时掌控",
        description:
          "跨所有团队监控健康状态、任务与升级 —— 每个工作空间带 10 个运维面板标签。",
        bullets: [
          "通过 WebSocket 实时呈现拓扑",
          "每个工作空间 10 个运维标签",
          "随时暂停 / 恢复 / 重启任意智能体",
        ],
        capabilities: ["WebSocket", "Canvas", "Ops Panel", "MCP"],
      },
    ],
  },
  architecture: {
    eyebrow: "分子级内存",
    title: "内存遵循你的组织形状。",
    description:
      "三个作用域 —— LOCAL、TEAM、GLOBAL —— 用层级感知的隔离取代扁平共享上下文。Awareness 记录发生了什么;Hermes 把反复成功的模式提炼为可复用技能。",
    hermesTitle: "Hermes 是技能层",
    hermesSubtitle:
      "Awareness 存储发生了什么。Hermes 读回内存、识别可重复的模式,并把有效的那些提炼成可复用技能。",
    hermesSteps: [
      "先加载工作空间内存",
      "匹配任务对应的模式",
      "把反复成功的经验提炼为技能",
    ],
    scopeLabel: "步骤",
    scopes: [
      {
        name: "LOCAL",
        summary: "每个工作空间的私有草稿本。",
        detail:
          "兄弟节点与其他团队都看不到的隔离上下文。每个角色保留自己的工作记忆。",
        accent: "#7fe8d6",
      },
      {
        name: "TEAM",
        summary: "在父子层级内共享。",
        detail:
          "交接上下文仅限直属团队 —— 不会泄漏到兄弟工作空间,也不存在交叉污染。",
        accent: "#5ee3cf",
      },
      {
        name: "GLOBAL",
        summary: "由根节点出发的组织级知识。",
        detail:
          "策略与规范沿层级向下流动。读:所有人。写:仅根节点。",
        accent: "#3aa690",
      },
    ],
    outcomesTitle: "为什么这在生产中能赢",
    outcomes: [
      "兄弟工作空间默认隔离",
      "内存共享严格遵循组织拓扑",
      "升级路径与层级完全一致",
      "反复出现的工作流沉淀为可复用技能",
      "可审计的 JSON Lines 事件日志",
      "团队扩张不会带来 prompt 膨胀",
    ],
    flywheelTitle: "自我进化的飞轮",
    flywheelSteps: [
      { label: "任务执行" },
      { label: "持久洞察沉入内存" },
      { label: "反复成功形成信号" },
      { label: "工作流被提炼为可复用技能" },
      { label: "技能热加载回运行时" },
      { label: "后续工作更快、更可靠" },
    ],
  },
  adapters: {
    eyebrow: "适配生态",
    title: "一个控制平面,可替换的层。",
    subtitle:
      "Molecule 不会把你绑定在单一模型、单一 CLI 或单一框架上。它标准化的是组织层与每个工作空间内部运行物之间的边界。",
    cards: [
      {
        title: "模型提供商",
        headline: "更换模型时组织契约保持不变。",
        detail:
          "Claude、OpenAI、Nemotron 和本地模型可以同时位于同一工作空间角色之后。模型是实现细节;工作空间身份保持稳定。",
        items: ["Claude", "OpenAI", "Nemotron", "本地模型"],
      },
      {
        title: "运行时适配器",
        headline: "按角色或团队切换执行引擎。",
        detail:
          "Claude Code、OpenClaw、LangGraph、CrewAI、AutoGen、DeepAgents 已全部接入同一拓扑;NemoClaw 正在 feature 分支上开发中。每个适配器负责执行;Molecule 负责层级、路由与治理。",
        items: [
          "Claude Code",
          "OpenClaw",
          "LangGraph",
          "CrewAI",
          "AutoGen",
          "DeepAgents",
          "NemoClaw · 开发中",
        ],
      },
      {
        title: "工具 · 评测 · 可观测性",
        headline: "先连通生态,再度量它。",
        detail:
          "MCP 共享工具,NeMo Agent Toolkit 扩展工具与评测,Langfuse 记录结果。正是在这一层,平台学习跨运行时的有效模式并回喂到内存中。",
        items: ["MCP", "NeMo 工具包", "Langfuse", "OpenTelemetry"],
      },
    ],
  },
  platform: {
    eyebrow: "平台护城河",
    title: "为什么 Molecule 难以被复制。",
    description:
      "四个架构决策复利形成持久的优势 —— 每一项都可以在代码仓库中立刻验证。",
    moats: [
      {
        title: "节点即角色",
        detail:
          "工作空间是持久的组织角色 —— 在更换模型、变更框架或团队重组后依然存在。",
      },
      {
        title: "组织架构即拓扑",
        detail:
          "通讯、内存、升级、审批全都沿同一套层级流动。零手工接线,零漂移。",
      },
      {
        title: "治理不绑定运行时",
        detail:
          "在六种运行时之上实现统一授权与审计 —— 不强迫任何团队使用单一框架。",
      },
      {
        title: "内存即基础设施",
        detail:
          "HMA 是底座而非挂件。它支撑团队扩张、技能复利与规模化的组织学习。",
      },
    ],
    proofTitle: "当前产品证据",
    proofs: [
      { metric: "6+1", label: "运行时适配器", detail: "主分支:LangGraph、DeepAgents、Claude Code、CrewAI、AutoGen、OpenClaw;NemoClaw 开发中。" },
      { metric: "4", label: "安全等级", detail: "T1 沙箱 → T4 全主机。按风险为每个工作空间隔离。" },
      { metric: "614", label: "三层测试用例", detail: "Go 1.25 + vitest + Python 3.11 pytest。CI 中运行竞态检测与覆盖率。" },
      { metric: "10", label: "画布运维标签", detail: "对话、活动、详情、技能、终端、配置、文件、内存、追踪、事件。" },
      { metric: "∞", label: "分形团队扩展", detail: "任意工作空间都能变成子团队。递归是拓扑的原生能力。" },
      { metric: "20+", label: "MCP 工具", detail: "平台能力通过 MCP 暴露给 Claude Code、Cursor 或 Codex。" },
    ],
  },
  whyMolecule: {
    eyebrow: "品类空白",
    title: "为什么选择 Molecule。",
    subtitle:
      "下面每个工具都解决了问题的一部分。但没有一个解决它们上方的组织层 —— 而 Molecule 正好落在这一层。",
    closing: "多种 agent 运行时,一套组织级操作系统。",
    competitors: [
      {
        name: "工作流构建器",
        bestAt: "拖拽节点式的可视化任务自动化。",
        gap: "节点是任务,而不是可持久的组织角色。",
        edge: "角色化的工作空间、层级结构和长期存续的团队。",
      },
      {
        name: "Agent 框架",
        bestAt: "强大的运行时语义与执行原语。",
        gap: "控制平面薄弱,组织级运维能力薄弱。",
        edge: "统一的生命周期、画布、注册表、策略和可观测性。",
      },
      {
        name: "编码型 Agent",
        bestAt: "优秀的本地执行,CLI 原生的连续性。",
        gap: "通常不是按团队基础设施来设计的。",
        edge: "工作空间抽象、A2A 协作、平台级运维。",
      },
      {
        name: "自定义多 Agent 图",
        bestAt: "对拓扑与交接拥有完全的灵活性。",
        gap: "随着团队扩张,拓扑脆弱、治理蔓延。",
        edge: "标准化的运营模型,同时保留运行时自由。",
      },
    ],
    columns: { bestAt: "擅长", gap: "不足在哪", edge: "Molecule 补上什么" },
  },
  finalCta: {
    vision:
      "从 AI 智能体团队,到自主机器人团队,再到自组织的数字劳动力 —— Molecule AI 正在构建单智能体时代之后的基础设施。",
    eyebrow: "开始构建",
    titleTop: "你的 AI 组织架构",
    titleBottom: "从一个工作空间开始。",
    subtitle:
      "一个工作空间变成一个团队。一个团队变成一个组织。现在开始。",
    actions: [
      { label: "阅读文档", href: "https://doc.moleculesai.app", primary: true },
      { label: "克隆 Monorepo", href: "https://github.com/Molecule-AI/molecule-monorepo", primary: false },
    ],
  },
  footer: {
    tagline: "面向异构 AI 智能体团队的组织级控制平面。采用 BSL 1.1 开源许可。",
    sections: [
      {
        title: "产品",
        links: [
          { label: "架构", href: "#architecture" },
          { label: "运行时适配器", href: "#adapters" },
          { label: "产品交付", href: "#ships" },
          { label: "平台护城河", href: "#platform" },
        ],
      },
      {
        title: "资源",
        links: [
          { label: "文档", href: "https://doc.moleculesai.app" },
          { label: "Monorepo", href: "https://github.com/Molecule-AI/molecule-monorepo" },
          { label: "官网仓库", href: "https://github.com/Molecule-AI/landingpage" },
          { label: "GitHub 组织", href: "https://github.com/Molecule-AI" },
        ],
      },
      {
        title: "社区",
        links: [
          { label: "当下价值", href: "#why-now" },
          { label: "应用场景", href: "#use-cases" },
          { label: "Issues", href: "https://github.com/Molecule-AI/molecule-monorepo/issues" },
          { label: "讨论区", href: "https://github.com/Molecule-AI/molecule-monorepo/discussions" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Molecule AI. 采用 BSL 1.1 许可证。`,
    builtWith: "由",
  },
};
