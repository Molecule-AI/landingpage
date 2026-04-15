import type { ContentShape } from "./types";

export const zh: ContentShape = {
  locale: "zh",
  htmlLang: "zh-CN",
  siteMeta: {
    name: "Molecule",
    fullName: "Molecule-AI",
    tagline: "面向异构 AI 智能体团队的组织层。",
    description:
      "Molecule 是一个开源的控制平面,让 AI 智能体真正组合成可投入生产的团队。工作空间即角色,组织架构即拓扑,治理开箱即用 —— 六种运行时、分层内存、零锁定。",
    github: "https://github.com/Molecule-AI",
    localeSwitch: { label: "EN", href: "/" },
  },
  nav: [
    { label: "当下价值", href: "#why-now" },
    { label: "应用场景", href: "#use-cases" },
    { label: "内存架构", href: "#architecture" },
    { label: "适配生态", href: "#adapters" },
    { label: "平台护城河", href: "#platform" },
  ],
  hero: {
    badge: "开源 · 主分支已发布",
    titleLead: "让 AI 智能体组成",
    titleHighlight: "可投入生产的团队。",
    description:
      "Molecule 是面向异构 AI 智能体团队的组织层。工作空间即角色,组织架构即拓扑。六种运行时、分层内存、生产级治理 —— 开箱即用。",
    primaryCta: { label: "了解架构", href: "#architecture" },
    secondaryCta: { label: "查看 GitHub", href: "https://github.com/Molecule-AI" },
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
          "Claude Code、OpenClaw、LangGraph、CrewAI、AutoGen、DeepAgents 接入同一拓扑。每个适配器负责执行;Molecule 负责层级、路由与治理。",
        items: ["Claude Code", "OpenClaw", "LangGraph", "CrewAI", "AutoGen", "DeepAgents"],
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
      { metric: "6", label: "运行时适配器", detail: "LangGraph、DeepAgents、Claude Code、CrewAI、AutoGen、OpenClaw —— 主分支已发布。" },
      { metric: "4", label: "安全等级", detail: "T1 沙箱 → T4 全主机。按风险为每个工作空间隔离。" },
      { metric: "614", label: "三层测试用例", detail: "Go + vitest + pytest。CI 中运行竞态检测与覆盖率。" },
      { metric: "10", label: "画布运维标签", detail: "Chat、Activity、Terminal、Config、Memory、Traces —— 每个工作空间独立。" },
      { metric: "∞", label: "分形团队扩展", detail: "任意工作空间都能变成子团队。递归是原生能力。" },
      { metric: "20+", label: "MCP 工具", detail: "平台能力通过 MCP 暴露给 Claude Code、Cursor 或 Codex。" },
    ],
  },
  whyMolecule: {
    eyebrow: "对标同行",
    title: "为什么选择 Molecule。",
    subtitle:
      "大多数 agent 项目解决的是执行层。Molecule 解决的是组织层。",
    closing: "Molecule 是面向异构 AI 智能体团队的组织层。",
    competitors: [
      {
        name: "CrewAI / MetaGPT",
        bestAt: "角色化小队与软件公司模拟。",
        gap: "它们建模的是团队协作,而不是持久的组织层。",
        edge: "Molecule 补上持久工作空间、治理、内存与策略。",
      },
      {
        name: "AutoGen",
        bestAt: "智能体与人之间的会话式协作。",
        gap: "会话本身无法定义身份或策略。",
        edge: "Molecule 让会话只是运行模型里的一种传输方式。",
      },
      {
        name: "LangGraph + OpenAI Agents SDK",
        bestAt: "状态化编排、交接、工具、流式与追踪。",
        gap: "它们提供执行原语,而非组织模型。",
        edge: "Molecule 把这些原语连接到混合运行时与层级结构中。",
      },
    ],
    columns: { bestAt: "擅长", gap: "不足", edge: "Molecule 优势" },
  },
  finalCta: {
    vision:
      "从 AI 智能体团队,到自主机器人团队,再到自组织的数字劳动力 —— Molecule 正在构建单智能体时代之后的基础设施。",
    eyebrow: "开始构建",
    titleTop: "你的 AI 组织架构",
    titleBottom: "从一个工作空间开始。",
    subtitle:
      "一个工作空间变成一个团队。一个团队变成一个组织。现在开始。",
    actions: [
      { label: "了解架构", href: "#architecture", primary: true },
      { label: "查看 GitHub", href: "https://github.com/Molecule-AI", primary: false },
    ],
  },
  footer: {
    tagline: "面向异构 AI 智能体团队的组织层。",
    sections: [
      {
        title: "平台",
        links: [
          { label: "架构", href: "#architecture" },
          { label: "运行时适配器", href: "#adapters" },
          { label: "内存模型", href: "#architecture" },
          { label: "平台护城河", href: "#platform" },
        ],
      },
      {
        title: "资源",
        links: [
          { label: "GitHub", href: "https://github.com/Molecule-AI" },
          { label: "Issues", href: "https://github.com/Molecule-AI" },
          { label: "Discussions", href: "https://github.com/Molecule-AI" },
        ],
      },
      {
        title: "社区",
        links: [
          { label: "当下价值", href: "#why-now" },
          { label: "应用场景", href: "#use-cases" },
          { label: "联系我们", href: "mailto:hello@molecule-ai.dev" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Molecule-AI. 开源项目。`,
    builtWith: "由",
  },
};
