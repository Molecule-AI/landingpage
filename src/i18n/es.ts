import type { ContentShape } from "./types";

export const es: ContentShape = {
  locale: "es",
  htmlLang: "es",
  siteMeta: {
    name: "Molecule",
    fullName: "Molecule AI",
    tagline: "El plano de control nativo para equipos heterogéneos de agentes de IA.",
    description:
      "Molecule AI es el plano de control open-core para equipos heterogéneos de agentes de IA. Los workspaces son roles de la organización, el organigrama es topología y la gobernanza viene incluida — siete runtimes, memoria jerárquica, evolución de skills, cero lock-in.",
    metaDescription:
      "Molecule AI es el plano de control open-core para equipos heterogéneos de agentes de IA. Siete runtimes, memoria jerárquica, evolución de skills — disponible en main bajo BSL 1.1.",
    github: "https://github.com/Molecule-AI",
    monorepo: "https://github.com/Molecule-AI/molecule-monorepo",
    docs: "https://doc.moleculesai.app",
    app: "https://app.moleculesai.app",
    api: "https://api.moleculesai.app",
    status: "https://status.moleculesai.app",
    license: "BSL 1.1",
    localeSwitch: { label: "EN", href: "/" },
  },
  nav: [
    { label: "Por qué ahora", href: "#why-now" },
    { label: "Casos de uso", href: "#use-cases" },
    { label: "Arquitectura", href: "#architecture" },
    { label: "Adaptadores", href: "#adapters" },
    { label: "Qué entregamos", href: "#ships" },
    { label: "Plataforma", href: "#platform" },
    { label: "FAQ", href: "#faq" },
    { label: "Docs", href: "https://doc.moleculesai.app" },
    { label: "Dashboard", href: "https://app.moleculesai.app" },
  ],
  hero: {
    badge: "Open core · BSL 1.1 · SaaS ya disponible",
    titleLead: "Une a tus agentes de IA en",
    titleHighlight: "equipos listos para producción",
    description:
      "Molecule AI es el plano de control nativo para equipos heterogéneos de agentes de IA. Los workspaces son roles. El organigrama es topología. Siete runtimes, memoria jerárquica, evolución de skills y barreras operativas — listo para usar.",
    pillars: [
      "Canvas visual",
      "Compatibilidad de runtimes",
      "Memoria jerárquica",
      "Evolución de skills",
      "Barreras operativas",
    ],
    primaryCta: { label: "Abrir Dashboard", href: "https://app.moleculesai.app" },
    secondaryCta: { label: "Leer la documentación", href: "https://doc.moleculesai.app" },
    tertiaryCta: { label: "Ver en GitHub", href: "https://github.com/Molecule-AI/molecule-monorepo" },
  },
  whatShips: {
    eyebrow: "Lo que se entrega en main",
    title: "Un plano de control completo, no una prueba de concepto.",
    subtitle:
      "Cada función de abajo ya está corriendo hoy en la rama por defecto del monorepo open source — sin fork privado, sin alfa sin liberar, sin rutas de código solo para demo.",
    columns: [
      {
        label: "CANVAS",
        name: "Workspace Canvas",
        stack: "Next.js 15 · React Flow · Zustand · Tailwind v4",
        items: [
          "Construcción de equipos arrastrando y anidando",
          "Estado vacío con asistente de despliegue y onboarding",
          "Paleta de plantillas e import/export de bundles",
          "Panel lateral de 10 pestañas: chat · actividad · detalles · skills · terminal · config · archivos · memoria · trazas · eventos",
          "Topología en tiempo real vía WebSocket fanout",
        ],
      },
      {
        label: "PLATFORM",
        name: "Control Plane",
        stack: "Go 1.25 · Gin · Postgres · Python 3.11 · Fly Machines",
        items: [
          "CRUD y aprovisionamiento de workspaces",
          "Registry, heartbeats, restart, pause/resume",
          "Proxy A2A seguro para el navegador",
          "Expansión / colapso de equipos (recursión fractal)",
          "Secretos globales con override por workspace",
          "Auditoría en JSON Lines",
          "Tool Trace: cada llamada A2A registra nombre, entrada y vista previa de salida de la herramienta",
          "Platform Instructions: reglas de toda la organización inyectadas en el system prompt",
          "Partner API Keys: aprovisionamiento programático de orgs vía REST API",
        ],
      },
    ],
  },
  dashboard: {
    title: "CONTROL PLANE / PRODUCCIÓN",
    liveLabel: "molecule.org · LIVE",
    rootName: "Raíz de la organización",
    rootPath: "molecule://root",
    rootMeta: ["6 RUNTIMES", "MAIN", "14 WORKSPACES"],
    teams: [
      {
        name: "Ingeniería",
        subtitle: "2 agentes · CLAUDE CODE",
        status: "ACTIVO",
        agents: [
          { name: "Frontend Agent", model: "claude-sonnet-4-5", state: "running" },
          { name: "Backend Agent", model: "claude-opus-4", state: "running" },
        ],
        scope: "LOCAL · TEAM",
      },
      {
        name: "Investigación",
        subtitle: "3 agentes · LANGGRAPH",
        status: "ACTIVO",
        agents: [
          { name: "Knowledge Synth", model: "gpt-5", state: "running" },
          { name: "Corpus Indexer", model: "nemotron-70b", state: "running" },
        ],
        scope: "LOCAL",
      },
      {
        name: "Operaciones",
        subtitle: "2 agentes · CREWAI",
        status: "INACTIVO",
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
      { value: "3", label: "ámbitos de memoria" },
      { value: "0", label: "drift" },
    ],
  },
  socialProof: {
    label: "Funciona con los runtimes, modelos y herramientas que tu equipo ya utiliza",
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
    eyebrow: "Por qué ahora",
    title: "La coordinación es el nuevo cuello de botella.",
    subtitle:
      "Cualquier equipo puede levantar una demo con un agente. Nadie tiene la capa que convierte un puñado de demos en una organización gobernada y que compone valor.",
    signals: [
      {
        title: "Las demos de un solo agente tocan techo",
        detail:
          "Un agente responde preguntas — pero no puede ejecutar un pipeline de release ni escalar entre fronteras de la organización. La restricción es la coordinación, no la capacidad.",
      },
      {
        title: "La gobernanza es un requisito de lanzamiento",
        detail:
          "Sin autoridad acotada, sin trazabilidad de auditoría, sin compuertas de human-in-the-loop — no hay despliegue en producción. La gobernanza es del día uno, no de la fase dos.",
      },
      {
        title: "Las fronteras de memoria definen el valor de la plataforma",
        detail:
          "El contexto compartido y plano filtra datos y se rompe a escala. La memoria con ámbito por topología (LOCAL / TEAM / GLOBAL) es la nueva base.",
      },
      {
        title: "Los runtimes heterogéneos son la norma",
        detail:
          "LangGraph, Claude Code, CrewAI — ningún framework gana en todas partes. El plano de control debe ser agnóstico al runtime por diseño.",
      },
    ],
  },
  useCases: {
    eyebrow: "Lo que puedes construir",
    titleLead: "Equipos de agentes de IA para",
    rotatingTexts: [
      "Organizaciones de investigación",
      "Entrega de ingeniería",
      "Automatización operativa",
      "Control ejecutivo",
    ],
    subtitle:
      "Un workspace se convierte en un rol. Un grupo de workspaces se convierte en un equipo. Los equipos componen organizaciones — fractalmente y sin drift.",
    items: [
      {
        key: "research",
        tag: "Orgs de investigación",
        title: "Investigación paralela con memoria aislada",
        description:
          "Workspaces hermanos exploran de forma independiente bajo ámbito LOCAL; el padre sintetiza vía memoria TEAM.",
        bullets: [
          "Aislamiento entre hermanos por defecto vía ámbito LOCAL",
          "Síntesis en el padre a través de memoria TEAM",
          "Cadenas de traza por workspace vía Langfuse",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
      },
      {
        key: "engineering",
        tag: "Ingeniería",
        title: "Equipos multi-runtime que se autocoordinan",
        description:
          "Claude Code, LangGraph, OpenClaw — codo con codo en un workspace de equipo, con enrutado A2A y compuertas HITL.",
        bullets: [
          "Seis adaptadores de runtime, un único contrato de workspace",
          "Aprobación humana para deploy y merge",
          "Expansión recursiva del equipo, cero drift",
        ],
        capabilities: ["Claude Code", "LangGraph", "OpenClaw", "HITL"],
      },
      {
        key: "operations",
        tag: "Automatización ops",
        title: "Automatización con gobernanza primero",
        description:
          "Autoridad acotada por RBAC, aprobaciones enrutadas por jerarquía y flujos de eventos listos para auditoría — por workspace, por rol.",
        bullets: [
          "Roles RBAC: operador, admin, solo-lectura",
          "Las aprobaciones siguen la topología organizativa",
          "Auditoría JSON Lines + secretos globales",
        ],
        capabilities: ["RBAC", "Auditoría", "Secretos", "CrewAI"],
      },
      {
        key: "executive",
        tag: "Vista ejecutiva",
        title: "Control en vivo desde un solo canvas",
        description:
          "Monitoriza salud, tareas y escalados a lo largo de cada equipo — con un panel de operaciones de 10 pestañas por workspace.",
        bullets: [
          "Topología en tiempo real sobre WebSocket",
          "Panel de operaciones con 10 pestañas por workspace",
          "Pause / resume / restart de cualquier agente",
        ],
        capabilities: ["WebSocket", "Canvas", "Ops Panel", "MCP"],
      },
    ],
  },
  architecture: {
    eyebrow: "Memoria molecular",
    title: "La memoria sigue la forma de tu organización.",
    description:
      "Tres ámbitos — LOCAL, TEAM, GLOBAL — reemplazan el contexto compartido y plano por aislamiento consciente de la jerarquía. Awareness recuerda lo que pasó; Hermes promueve los aciertos repetidos a skills reutilizables.",
    hermesTitle: "Hermes es la capa de skills",
    hermesSubtitle:
      "Awareness almacena lo que ocurrió. Hermes lee la memoria, encuentra patrones repetibles y promueve los que funcionan a skills reutilizables.",
    hermesSteps: [
      "Cargar primero la memoria del workspace",
      "Recuperar el patrón que coincide con la tarea",
      "Promover los aciertos repetidos a skills",
    ],
    scopeLabel: "PASO",
    scopes: [
      {
        name: "LOCAL",
        summary: "Borrador privado por workspace.",
        detail:
          "Contexto aislado invisible para hermanos y equipos no relacionados. Cada rol mantiene su propia memoria de trabajo.",
        accent: "#7fe8d6",
      },
      {
        name: "TEAM",
        summary: "Compartido dentro de la jerarquía padre-hijo.",
        detail:
          "Contexto de handoff acotado al equipo inmediato — sin fugas a workspaces hermanos, sin polinización cruzada.",
        accent: "#5ee3cf",
      },
      {
        name: "GLOBAL",
        summary: "Conocimiento de toda la organización desde la raíz.",
        detail:
          "Las políticas y estándares fluyen jerarquía abajo. Lectura: todos. Escritura: solo la raíz.",
        accent: "#3aa690",
      },
    ],
    outcomesTitle: "Por qué esto gana en producción",
    outcomes: [
      "Workspaces hermanos aislados por defecto",
      "El uso compartido de memoria sigue exactamente la topología organizativa",
      "Las rutas de escalado replican la jerarquía",
      "Los flujos repetidos se convierten en skills reutilizables",
      "Logging de eventos JSON Lines listo para auditoría",
      "Cero inflación de prompts a medida que crecen los equipos",
    ],
    flywheelTitle: "El volante de inercia que se mejora a sí mismo",
    flywheelSteps: [
      { label: "Ejecución de la tarea" },
      { label: "Insight duradero capturado en memoria" },
      { label: "El éxito repetido se convierte en señal" },
      { label: "Flujo promovido a skill reutilizable" },
      { label: "El skill se hot-reloadea en el runtime" },
      { label: "El trabajo futuro es más rápido y fiable" },
    ],
  },
  adapters: {
    eyebrow: "Ecosistema de adaptadores",
    title: "Un plano de control, capas intercambiables.",
    subtitle:
      "Molecule no te ata a un único modelo, una única CLI ni un único framework. Estandariza la frontera entre la capa organizativa y lo que se ejecute dentro de cada workspace.",
    cards: [
      {
        title: "Proveedores de modelos",
        headline: "Cambia el modelo sin tocar el contrato organizativo.",
        detail:
          "Claude, OpenAI, Nemotron y modelos locales pueden estar detrás del mismo rol de workspace. El modelo es un detalle de implementación; la identidad del workspace permanece estable.",
        items: ["Claude", "OpenAI", "Nemotron", "Local"],
      },
      {
        title: "Adaptadores de runtime",
        headline: "Cambia el motor de ejecución por rol o por equipo.",
        detail:
          "Claude Code, OpenClaw, LangGraph, CrewAI, AutoGen y DeepAgents se conectan hoy a la misma topología; NemoClaw está en WIP en una rama feature. Cada adaptador es dueño de la ejecución; Molecule es dueño de jerarquía, enrutado y gobernanza.",
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
        title: "Tools · Eval · Observabilidad",
        headline: "Conecta el ecosistema y luego mídelo.",
        detail:
          "MCP comparte herramientas, NeMo Agent Toolkit amplía herramientas y eval, Langfuse traza resultados. La capa donde la plataforma aprende qué funciona entre runtimes y devuelve la señal a la memoria.",
        items: ["MCP", "NeMo Toolkit", "Langfuse", "OpenTelemetry"],
      },
    ],
  },
  platform: {
    eyebrow: "Fortalezas de la plataforma",
    title: "Por qué Molecule es defendible.",
    description:
      "Cuatro decisiones arquitectónicas componen una ventaja duradera — cada una verificable hoy en el código.",
    moats: [
      {
        title: "El nodo es un rol",
        detail:
          "Los workspaces son roles organizativos duraderos — sobreviven a cambios de modelo, de framework y a reorganizaciones del equipo.",
      },
      {
        title: "El organigrama es la topología",
        detail:
          "Comunicación, memoria, escalado y aprobación siguen una sola jerarquía. Cero cableado manual, cero drift.",
      },
      {
        title: "Gobernanza sin lock-in de runtime",
        detail:
          "Autoridad y auditoría unificadas a través de seis runtimes — sin imponer un único framework a ningún equipo.",
      },
      {
        title: "Memoria como infraestructura",
        detail:
          "HMA es la base, no un añadido. Habilita la expansión de equipos, la composición de skills y el aprendizaje organizacional a escala.",
      },
    ],
    proofTitle: "Pruebas actuales del producto",
    proofs: [
      { metric: "6+1", label: "Adaptadores de runtime", detail: "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, OpenClaw en main; NemoClaw WIP en rama feat." },
      { metric: "4", label: "Niveles de seguridad", detail: "T1 sandbox → T4 host completo. Aislamiento por workspace según el riesgo." },
      { metric: "614", label: "Tests en 3 capas", detail: "Go 1.25 + vitest + Python 3.11 pytest. Detección de race conditions y cobertura en CI." },
      { metric: "10", label: "Pestañas de ops del Canvas", detail: "Chat, actividad, detalles, skills, terminal, config, archivos, memoria, trazas, eventos." },
      { metric: "∞", label: "Expansión fractal de equipos", detail: "Cualquier workspace se convierte en sub-equipo. La recursión es nativa a la topología." },
      { metric: "20+", label: "Herramientas MCP", detail: "Operaciones de plataforma expuestas a Claude Code, Cursor o Codex vía MCP." },
    ],
  },
  whyMolecule: {
    eyebrow: "El hueco de categoría",
    title: "Por qué Molecule.",
    subtitle:
      "Cada herramienta de abajo resuelve una pieza real del problema. Ninguna resuelve la capa organizativa por encima de ellas — que es exactamente donde vive Molecule.",
    closing: "Muchos runtimes de agentes, un solo sistema operativo organizacional.",
    competitors: [
      {
        name: "Constructores de workflows",
        bestAt: "Automatización visual de tareas con nodos drag-and-drop.",
        gap: "Los nodos son tareas, no roles organizativos duraderos.",
        edge: "Workspaces nativos como roles, jerarquía y equipos de larga vida.",
      },
      {
        name: "Frameworks de agentes",
        bestAt: "Semántica de runtime potente y primitivas de ejecución.",
        gap: "Plano de control débil y operaciones organizativas pobres.",
        edge: "Ciclo de vida unificado, canvas, registry, políticas y observabilidad.",
      },
      {
        name: "Agentes de coding",
        bestAt: "Ejecución local excelente con continuidad nativa por CLI.",
        gap: "Habitualmente no diseñados como infraestructura de equipo.",
        edge: "Abstracción de workspace, colaboración A2A, operaciones de plataforma.",
      },
      {
        name: "Grafos multi-agente a medida",
        bestAt: "Flexibilidad total sobre topología y handoffs.",
        gap: "Topología frágil y gobernanza dispersa a medida que crecen los equipos.",
        edge: "Modelo operativo estandarizado sin perder libertad de runtime.",
      },
    ],
    columns: { bestAt: "Bueno en", gap: "Dónde se rompe", edge: "Lo que aporta Molecule" },
  },
  marketplace: {
    eyebrow: "Marketplace",
    title: "Una librería creciente de plugins, agentes y bundles que puedes soltar en tu organización.",
    subtitle:
      "Tres niveles, un solo modelo de gobernanza. Explora plugins MCP verificados, agentes preconstruidos y bundles de equipo completos — todo corriendo sobre el mismo sustrato de workspace, memoria y auditoría.",
    tiers: [
      {
        level: "L1",
        name: "Plugins",
        description:
          "Servidores MCP y packs de herramientas. Conecta un plugin de Postgres, Slack o Linear a cualquier agente en minutos — las credenciales quedan acotadas al workspace que lo monta.",
        count: "120+ plugins",
        href: "https://moleculesai.app/plugins",
        example: "postgres · slack · linear · gh-actions · sentry",
      },
      {
        level: "L2",
        name: "Agents",
        description:
          "Skills preconstruidos de un agente — code-review, triaje on-call, análisis de churn. Móntalos como miembros del workspace con prompts, herramientas y políticas ya cableadas.",
        count: "40+ agentes",
        href: "https://moleculesai.app/agents",
        example: "code-reviewer · oncall-triager · churn-analyst",
      },
      {
        level: "L3",
        name: "Bundles",
        description:
          "Topologías de equipo completas — raíz + hijos con sus propias herramientas, ámbitos de memoria y aprobaciones. Bifurcables; ajusta a los procesos de tu organización sin recablear nada.",
        count: "12+ bundles",
        href: "https://moleculesai.app/bundles",
        example: "growth-team · platform-ops · revenue-pod",
      },
    ],
    cta: { label: "Explorar el Marketplace", href: "https://moleculesai.app" },
  },
  runtimeMarquee: {
    eyebrow: "Agnóstico al runtime",
    title: "Trae el runtime en el que confías. Nosotros traemos la organización.",
    subtitle:
      "Molecule habla con todos los grandes runtimes de agentes vía A2A — mismas semánticas de workspace, memoria y auditoría tanto si el agente es Claude Code, LangGraph, CrewAI o el tuyo propio.",
    chips: [
      { label: "Claude Code", detail: "Ciudadano de primera clase — A2A nativo" },
      { label: "LangGraph", detail: "Adaptador — grafo envuelto como agente de workspace" },
      { label: "CrewAI", detail: "Adaptador — crew montado como ámbito de equipo" },
      { label: "AutoGen", detail: "Adaptador — grupo multi-agente como ámbito" },
      { label: "DeepAgents", detail: "Adaptador — planificador profundo con nuestra memoria" },
      { label: "OpenClaw", detail: "Adaptador — agente con tools bajo nuestra política" },
      { label: "Hermes (OSS)", detail: "Runtime de referencia — propiedad de extremo a extremo" },
      { label: "Custom", detail: "Compatible con A2A — trae el tuyo" },
    ],
  },
  creatorCta: {
    eyebrow: "Para builders",
    title: "Publica un plugin, agente o bundle. Llega a cada org de Molecule.",
    subtitle:
      "Si has construido infraestructura reutilizable de agentes, lístala en el Marketplace. Nosotros nos encargamos de distribución, billing y políticas — tú te quedas con la IP y la cadencia de actualización.",
    steps: [
      {
        number: "01",
        title: "Build",
        description:
          "Construye tu plugin, agente o bundle contra el SDK abierto. Las mismas primitivas que usamos internamente — workspace, memoria, A2A, auditoría.",
      },
      {
        number: "02",
        title: "List",
        description:
          "Envíalo desde el portal de creators. Revisamos seguridad, sandboxizamos el runtime y validamos contra los niveles de confianza.",
      },
      {
        number: "03",
        title: "Earn",
        description:
          "Precio por asiento o por uso — tú decides. Billing integrado, políticas empresariales y visibilidad de auditoría incluidos sin coste.",
      },
    ],
    primaryCta: { label: "Listar en el Marketplace", href: "https://moleculesai.app/creators" },
    secondaryCta: { label: "Leer la documentación del SDK", href: "https://doc.moleculesai.app/docs" },
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Las dudas que los equipos tienen antes de adoptar Molecule AI.",
    subtitle:
      "Respuestas breves a las preguntas más habituales. Si la tuya no está aquí, abre una discusión en el monorepo.",
    items: [
      {
        q: "¿Qué es Molecule AI, en una frase?",
        a: "Molecule AI es el plano de control open-core que permite a agentes de IA heterogéneos — LangGraph, Claude Code, CrewAI, AutoGen, DeepAgents, OpenClaw — funcionar como equipos gobernados y con memoria acotada en lugar de demos desconectadas.",
      },
      {
        q: "¿En qué se diferencia de frameworks de agentes como LangGraph o CrewAI?",
        a: "Esos frameworks resuelven la capa de ejecución — cómo corre un agente, llama herramientas y hace handoff. Molecule AI resuelve la capa organizativa por encima: roles de workspace duraderos, memoria consciente de la jerarquía, gobernanza y operaciones. Muchos runtimes de agentes, un solo sistema operativo organizacional.",
      },
      {
        q: "¿Qué runtimes están soportados hoy?",
        a: "Hay seis adaptadores en main del monorepo: LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen y OpenClaw. NemoClaw (orientado a NVIDIA) es work in progress en una rama feature y aterrizará en main cuando se haga merge.",
      },
      {
        q: "¿Es realmente open source?",
        a: "Sí. El monorepo core está bajo Business Source License 1.1 (BSL 1.1). El código es público, puedes leerlo, bifurcarlo, autohospedarlo y modificarlo. BSL 1.1 se convierte en una licencia open source (Apache 2.0) tras la fecha de cambio, y la única restricción de uso es la reventa comercial como un servicio hospedado competidor.",
      },
      {
        q: "¿Puedo autohospedar todo?",
        a: "Sí. El monorepo público corre una organización por instancia y no tiene dependencia oculta del plano de control SaaS. Clónalo, configura tus variables de entorno y arranca la plataforma y el workspace runtime juntos. Los templates de Railway y Render están enlazados en el README del monorepo.",
      },
      {
        q: "¿Qué es la memoria jerárquica (HMA) y por qué importa?",
        a: "HMA da a cada workspace tres ámbitos de memoria — LOCAL (privado a un workspace), TEAM (compartido dentro de la jerarquía padre-hijo) y GLOBAL (a nivel org, write-only desde la raíz). El uso compartido de memoria sigue el organigrama en lugar de filtrarse por todo el sistema, así los equipos hermanos quedan aislados por defecto y las rutas de escalado reflejan la jerarquía real.",
      },
      {
        q: "¿Qué es Hermes y cómo funcionan los skills?",
        a: "Awareness almacena lo que ocurrió entre sesiones. Hermes lee esa memoria, identifica patrones repetibles y promueve los que funcionan a skills reutilizables. Los skills se hot-reloadean en el workspace runtime en vivo, así la siguiente tarea se beneficia del éxito previo sin reiniciar. Este es el flywheel autoevolutivo de la sección de arquitectura.",
      },
      {
        q: "¿Sobre qué stack está construido Molecule AI?",
        a: "El plano de control es Go 1.25 + Gin + Postgres. Los workspace runtimes son Python 3.11. El Canvas (organigrama visual + panel de operaciones de 10 pestañas) es Next.js 15 + React Flow + Zustand + Tailwind v4. El sandboxing seguro usa cuatro niveles desde T1 sandbox hasta T4 host completo, por workspace.",
      },
      {
        q: "¿Puedo crear y gestionar orgs por API de forma programática?",
        a: "Sí. Las Partner API Keys (GA el 30 de abril de 2026) permiten que cualquier pipeline de CI/CD, integración de marketplace o herramienta de automatización cree y gestione organizaciones de Molecule AI vía una REST API tipada — sin necesidad de sesión de navegador. Las claves están acotadas a la org que crean, con rate limit, revocables y auditadas. Orgs efímeras de test: POST para crear, ejecutas tus tests, DELETE para limpiar. Ver docs.molecule.ai/architecture/partner-api-keys.",
      },
      {
        q: "¿Qué significa que Molecule AI tiene gobernanza incluida?",
        a: "Dos funciones de Phase 34 entregan gobernanza a nivel de plataforma: Tool Trace registra cada llamada a herramienta de tus agentes — nombre, entradas, vista previa de salida, emparejado por run_id para trazas paralelas — para que verifiques qué se ejecutó realmente. Platform Instructions deja a los admins de la org escribir reglas a nivel de sistema (por ejemplo, 'redacta PII antes de escribir a herramientas externas') que se inyectan en el system prompt de cada agente al arranque, antes del primer turno. Gobernanza como concern de plataforma de primera clase, no un filtro post-hoc.",
      },
      {
        q: "¿Cómo empiezo?",
        a: "Lee el quickstart en doc.moleculesai.app y luego clona github.com/Molecule-AI/molecule-monorepo. El README te guía aprovisionando el primer workspace, eligiendo un adaptador de runtime y cableando tu primer equipo. Espera tener un workspace corriendo en menos de diez minutos.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El monorepo open-core es gratis bajo BSL 1.1 — puedes autohospedarlo para siempre sin pagar a nadie. El SaaS hospedado está en vivo en app.moleculesai.app con signup, orgs y aprovisionamiento multi-tenant sobre el mismo open core. API disponible en api.moleculesai.app. Documentación en doc.moleculesai.app.",
      },
      {
        q: "¿Cómo gestiona Molecule AI la observabilidad de agentes en producción?",
        a: "Tool Trace incluye un registro completo de ejecución — cada llamada a herramienta, entrada y vista previa de salida — en cada respuesta A2A. No hay un stack de observabilidad separado que integrar, no hay sampling. Para gobernanza empresarial, Platform Instructions deja a los admins de la org anteponer reglas al system prompt de cada agente antes del primer turno — aplicado a nivel de plataforma, no como filtro post-hoc.",
      },
      {
        q: "¿Pueden los partners o pipelines de CI/CD gestionar organizaciones de Molecule AI por API?",
        a: "Sí. Las Partner API Keys (mol_pk_*) habilitan aprovisionamiento programático de orgs y gestión del ciclo de vida vía API — sin sesiones de navegador, sin handoffs manuales. Los partners pueden hacer POST de una nueva org, gestionarla por API y DELETE cuando terminan; el billing se detiene de inmediato al borrar. Las claves están acotadas por org por diseño: una clave comprometida no puede salir de su frontera de org.",
      },
    ],
  },
  finalCta: {
    vision:
      "De equipos de agentes de IA a equipos autónomos de bots, hasta plantillas digitales que se autoorganizan — Molecule AI está construyendo la infraestructura para lo que viene después de la era del agente único.",
    eyebrow: "Empieza a construir",
    titleTop: "Tu organigrama de IA",
    titleBottom: "comienza con un workspace.",
    subtitle:
      "Un workspace se convierte en un equipo. Un equipo se convierte en una organización. Empieza ya.",
    actions: [
      { label: "Abrir Dashboard", href: "https://app.moleculesai.app", primary: true },
      { label: "Leer la documentación", href: "https://doc.moleculesai.app", primary: false },
    ],
  },
  footer: {
    tagline: "El plano de control nativo para equipos heterogéneos de agentes de IA. Licenciado bajo BSL 1.1.",
    sections: [
      {
        title: "Producto",
        links: [
          { label: "Precios", href: "/pricing" },
          { label: "Arquitectura", href: "#architecture" },
          { label: "Adaptadores de runtime", href: "#adapters" },
          { label: "Qué entregamos", href: "#ships" },
          { label: "Fortalezas de plataforma", href: "#platform" },
        ],
      },
      {
        title: "Plataforma",
        links: [
          { label: "Dashboard", href: "https://app.moleculesai.app" },
          { label: "API", href: "https://api.moleculesai.app" },
          { label: "Documentación", href: "https://doc.moleculesai.app" },
          { label: "Status", href: "https://status.moleculesai.app" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Organización en GitHub", href: "https://github.com/Molecule-AI" },
          { label: "Repo Core", href: "https://github.com/Molecule-AI/molecule-monorepo" },
          { label: "MCP Server", href: "https://www.npmjs.com/package/@molecule-ai/mcp-server" },
          { label: "Python SDK", href: "https://pypi.org/project/molecule-ai-sdk" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Términos del servicio", href: "/legal/terms" },
          { label: "Política de privacidad", href: "/legal/privacy" },
        ],
      },
      {
        title: "Comunidad",
        links: [
          { label: "Por qué ahora", href: "#why-now" },
          { label: "Casos de uso", href: "#use-cases" },
          { label: "FAQ", href: "#faq" },
          { label: "Issues", href: "https://github.com/Molecule-AI/molecule-monorepo/issues" },
          { label: "Discusiones", href: "https://github.com/Molecule-AI/molecule-monorepo/discussions" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Molecule AI. Licenciado bajo BSL 1.1.`,
    builtWith: "Construido con",
  },
};
