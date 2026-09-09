import { useEffect, useRef, useState } from "react";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Github,
  GitBranch,
  GraduationCap,
  Landmark,
  LineChart,
  Linkedin,
  Mail,
  Menu,
  PanelTopOpen,
  PieChart,
  ShoppingCart,
  Target,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";

import churnDashboard from "../assets/churn-dashboard.jpeg";
import novashopDashboard from "../assets/novashop-dashboard.jpeg";

const email = "leticiafelixdf@outlook.com";
const linkedinDisplay = "linkedin.com/in/leticiafelix0";
const linkedinUrl = "https://www.linkedin.com/in/leticiafelix0";
const githubDisplay = "github.com/LeticiaFelix0";
const githubUrl = "https://github.com/LeticiaFelix0";
const resumeUrl = "/curriculo-leticia-felix.pdf";

const navItems = [
  ["sobre", "Sobre"],
  ["painel", "Painel"],
  ["habilidades", "Habilidades"],
  ["projetos", "Projetos"],
  ["experiencia", "Experiência"],
  ["contato", "Contato"],
];

const profileHighlights = [
  {
    label: "Objetivo profissional",
    title: "Estágio em Análise de Dados ou Business Intelligence",
    icon: Target,
  },
  {
    label: "Formação",
    title: "Análise e Desenvolvimento de Sistemas",
    detail: "Estácio | 2026-2028",
    icon: GraduationCap,
  },
  {
    label: "Diferencial",
    title: "Experiência em gestão, processos, indicadores e tomada de decisão",
    icon: LineChart,
  },
];

const professionalCapabilities = [
  {
    title: "ANALISAR",
    text: "Exploração de dados, consultas SQL e identificação de indicadores relevantes.",
    icon: Database,
    tone: "analysis",
  },
  {
    title: "TRANSFORMAR",
    text: "Limpeza, organização e modelagem de dados com Excel, Power Query e Python.",
    icon: Workflow,
    tone: "transform",
  },
  {
    title: "VISUALIZAR",
    text: "Construção de dashboards no Power BI para acompanhar resultados e apoiar decisões.",
    icon: BarChart3,
    tone: "visualize",
  },
];

const skills = [
  {
    key: "powerbi",
    title: "Power BI",
    summary: "Dashboards, KPIs, medidas DAX e relatórios executivos.",
    description:
      "Criação de dashboards para acompanhar indicadores, consolidar resultados e apoiar decisões com visualizações claras.",
    icon: PieChart,
    applied: "Aplicado nos projetos NovaShop, Análise de Churn e Agência Nova Era",
    evidence: [
      "Dashboards interativos",
      "KPIs e medidas DAX",
      "Visualizações executivas",
    ],
  },
  {
    key: "sql",
    title: "SQL e MySQL",
    summary: "Modelagem, consultas analíticas, joins e agregações.",
    description:
      "Consulta e estruturação de bases relacionais para validar dados, cruzar informações e gerar indicadores.",
    icon: Database,
    applied: "Aplicado nos projetos NovaShop, Análise de Churn e Agência Nova Era",
    evidence: [
      "Consultas analíticas",
      "Joins e agregações",
      "Modelagem de dados",
    ],
  },
  {
    key: "excel",
    title: "Excel",
    summary: "Organização, fórmulas, análises e controles gerenciais.",
    description:
      "Organização de informações, análises operacionais e criação de controles para rotinas administrativas e financeiras.",
    icon: FileSpreadsheet,
    applied: "Aplicado em controles gerenciais e no projeto Agência Nova Era",
    evidence: [
      "Controles gerenciais",
      "Fórmulas e organização",
      "Apoio à análise operacional",
    ],
  },
  {
    key: "powerquery",
    title: "Power Query",
    summary: "Tratamento, padronização e preparação de dados.",
    description:
      "Preparação de dados antes da análise, com limpeza, padronização e transformação de bases para relatórios.",
    icon: Workflow,
    applied: "Aplicado no projeto NovaShop e na preparação de bases",
    evidence: [
      "Limpeza de dados",
      "Padronização de campos",
      "Preparação para dashboards",
    ],
  },
  {
    key: "python",
    title: "Python",
    summary: "Exploração, limpeza, análise e automação de dados.",
    description:
      "Uso de scripts e notebooks para explorar bases, limpar informações, automatizar etapas e identificar padrões.",
    icon: Code2,
    applied: "Aplicado no projeto Análise de Churn",
    evidence: [
      "Análise exploratória",
      "Tratamento de dados",
      "Automação de etapas",
    ],
  },
  {
    key: "git",
    title: "Git e GitHub",
    summary: "Versionamento, documentação e publicação de projetos.",
    description:
      "Organização do versionamento, documentação técnica e publicação dos projetos desenvolvidos no portfólio.",
    icon: GitBranch,
    applied: "Aplicado na documentação e publicação dos projetos do portfólio",
    evidence: [
      "Versionamento de arquivos",
      "Documentação técnica",
      "Publicação de projetos",
    ],
  },
];

const skillContent = Object.fromEntries(skills.map((skill) => [skill.key, skill]));

const scenarioTabs = [
  ["vendas", "Vendas"],
  ["churn", "Churn"],
  ["processos", "Processos"],
];

const dashboardData = {
  vendas: {
    kind: "project",
    eyebrow: "Projeto em destaque",
    heading: "NovaShop — E‑commerce Analytics",
    description:
      "Projeto de análise de dados desenvolvido para avaliar o desempenho comercial de um e-commerce, desde a exploração e validação dos dados com SQL até a construção de um dashboard interativo no Power BI.",
    objectiveLabel: "Objetivo do projeto",
    objectiveText:
      "Analisar vendas, clientes, produtos e regiões para acompanhar KPIs, identificar tendências e apoiar decisões comerciais.",
    technologies: ["SQL", "MySQL", "Power Query", "Power BI", "DAX"],
    actions: [
      { label: "Ver projeto completo", href: "https://lnkd.in/drKAjuBR" },
      { label: "GitHub", notice: "GitHub do projeto NovaShop ainda não foi informado." },
    ],
    panelLabel: "E-commerce Analytics",
    panelTitle: "Desempenho comercial",
    chartTitle: "Evolução do faturamento",
    chartMeta: "Período analisado",
    color: "#32d2ff",
    fill: "rgba(50, 210, 255, 0.16)",
    points: [18, 22, 25, 24, 31, 46, 39, 48, 62, 80, 76, 93],
    kpis: [
      ["Faturamento", "R$ 10,459 milhões"],
      ["Lucro", "R$ 3,257 milhões"],
      ["Margem de lucro", "31,14%"],
    ],
    complementaryTitle: "Indicadores complementares",
    complementary: [
      ["Ticket médio", "R$ 2,567 mil"],
      ["Clientes únicos", "983"],
      ["Pedidos concluídos", "aprox. 4 mil"],
      ["Taxa de cancelamento", "7,88%"],
    ],
  },
  churn: {
    kind: "project",
    eyebrow: "Projeto em destaque",
    heading: "Análise de Churn — Customer Analytics",
    description:
      "Análise de mais de 7 mil registros para identificar padrões de cancelamento e transformar dados de clientes em informações úteis para retenção.",
    objectiveLabel: "Objetivo do projeto",
    objectiveText:
      "Analisar o comportamento dos clientes, acompanhar a taxa de churn e identificar fatores associados ao cancelamento.",
    technologies: ["Python", "SQL", "MySQL", "Power BI"],
    actions: [
      { label: "Ver projeto completo", href: "https://lnkd.in/d7fUdKJz" },
      { label: "GitHub", notice: "GitHub do projeto de churn ainda não foi informado." },
    ],
    panelLabel: "Customer Analytics",
    panelTitle: "Risco de cancelamento",
    chartTitle: "Evolução do churn",
    chartMeta: "Base telecom",
    color: "#ff5f7a",
    fill: "rgba(255, 95, 122, 0.16)",
    points: [24, 28, 37, 42, 39, 45, 51, 49, 56, 62, 59, 67],
    kpis: [
      ["Clientes", "7,04 mil"],
      ["Clientes ativos", "5,17 mil"],
      ["Taxa de churn", "26,54%"],
    ],
    factorsTitle: "Fatores associados ao churn",
    factors: [
      ["Contrato mensal", 92],
      ["Fibra óptica", 78],
      ["Cheque eletrônico", 68],
      ["Sem suporte", 64],
    ],
  },
  processos: {
    kind: "process",
    eyebrow: "Experiência aplicada",
    heading: "Gestão administrativa orientada por dados",
    description:
      "Experiência prática na organização de informações financeiras, clientes e agenda, utilizando controles internos para acompanhar resultados e apoiar decisões do negócio.",
    objectiveLabel: "Contexto profissional",
    context: [
      "Letícia Felix Estética",
      "Proprietária | Gestão Administrativa e Operacional",
      "Desde ago/2025",
    ],
    technologies: ["Excel", "Gestão", "Indicadores", "Processos"],
    actions: [
      { label: "Ver experiência", href: "#experiencia" },
      { label: "Currículo", notice: "Currículo ainda não foi adicionado ao projeto." },
    ],
    panelLabel: "Operational Analytics",
    panelTitle: "Visão da rotina administrativa",
    kpis: [
      ["Clientes", "Informações organizadas"],
      ["Agenda", "Atendimentos monitorados"],
      ["Finanças", "Receitas e despesas controladas"],
    ],
    flowTitle: "Fluxo de gestão",
    flow: ["Registrar", "Organizar", "Acompanhar", "Decidir"],
    practiceTitle: "Atuação na prática",
    practice: [
      ["Controle financeiro", "Receitas, despesas e resultados"],
      ["Gestão de clientes", "Cadastro, atendimento e agenda"],
      ["Melhoria de processos", "Organização e acompanhamento"],
    ],
  },
};

const projects = [
  {
    key: "novashop",
    categories: ["bi", "sql"],
    category: "Business Intelligence | E-commerce",
    title: "NovaShop - E-commerce Analytics",
    technologies: ["SQL", "MySQL", "Power Query", "Power BI", "DAX"],
    image: novashopDashboard,
    imageAlt: "Dashboard NovaShop com indicadores comerciais",
    cardAlt: "Dashboard NovaShop com faturamento, lucro, margem, clientes e produtos",
    link: "https://lnkd.in/drKAjuBR",
    icon: ShoppingCart,
    description:
      "Projeto de análise de dados desenvolvido para avaliar o desempenho comercial de um e-commerce, desde a análise e validação com SQL/MySQL até o tratamento no Power Query e a construção de um dashboard no Power BI com medidas DAX.",
    cardDescription:
      "Processo completo de análise com SQL/MySQL, preparação no Power Query e dashboard em Power BI para acompanhar faturamento, lucro e margem.",
    highlights: [
      { label: "Faturamento", metric: { target: 10.459, prefix: "R$ ", suffix: " milhões", decimals: 3 } },
      { label: "Lucro", metric: { target: 3.257, prefix: "R$ ", suffix: " milhões", decimals: 3 } },
      { label: "Margem", metric: { target: 31.14, suffix: "%", decimals: 2 } },
    ],
    metrics: [
      ["Faturamento", "R$ 10,459 milhões"],
      ["Lucro", "R$ 3,257 milhões"],
      ["Margem", "31,14%"],
      ["Modelagem", "Star Schema"],
    ],
    insights: [
      "SQL/MySQL foi usado para análise, validação e estruturação da base.",
      "Power Query apoiou a preparação dos dados antes da visualização.",
      "Produtos com maior faturamento nem sempre entregam maior lucro.",
    ],
  },
  {
    key: "churn",
    categories: ["python", "sql", "bi"],
    category: "Customer Analytics | Telecom",
    title: "Análise de Churn de Clientes",
    technologies: ["Python", "SQL", "MySQL", "Power BI"],
    image: churnDashboard,
    imageAlt: "Dashboard de churn de clientes",
    cardAlt: "Dashboard de churn de clientes com indicadores de cancelamento e receita",
    link: "https://lnkd.in/d7fUdKJz",
    icon: UsersRound,
    description:
      "Análise de mais de 7 mil registros para identificar padrões de cancelamento, investigar fatores associados ao churn e transformar dados de clientes em indicadores úteis para retenção.",
    cardDescription:
      "Análise de mais de 7 mil registros para identificar padrões de cancelamento e fatores associados ao churn.",
    highlights: [
      { label: "Taxa de churn analisada" },
      { label: "Fatores de cancelamento" },
      { label: "Indicadores de retenção" },
    ],
    metrics: [
      ["Total de clientes", "7,043 mil"],
      ["Clientes ativos", "5,174 mil"],
      ["Clientes cancelados", "1,869 mil"],
      ["Taxa de churn", "26,54%"],
    ],
    insights: [
      "Clientes com contrato mensal apresentam maior taxa de churn.",
      "Fibra óptica aparece associada a maior probabilidade de cancelamento.",
      "Clientes sem suporte técnico e segurança online possuem maior risco.",
    ],
  },
  {
    key: "novaera",
    categories: ["excel", "sql", "bi"],
    category: "Campanhas e desempenho",
    title: "Agência Nova Era",
    technologies: ["Excel", "SQL", "MySQL", "Power BI"],
    image: null,
    imageAlt: "Painel operacional da Agência Nova Era",
    cardAlt: "Visual gerencial da Agência Nova Era com campanhas, clientes e desempenho",
    openNotice: "Link do projeto Agência Nova Era ainda não foi informado.",
    icon: FileSpreadsheet,
    description:
      "Projeto de análise relacionado a campanhas e desempenho, conectando Excel, SQL/MySQL e Power BI para organizar dados de campanhas, clientes, indicadores de desempenho e visualizações gerenciais.",
    cardDescription:
      "Análise relacionada a campanhas e desempenho, com organização de clientes, indicadores e visualizações gerenciais.",
    highlights: [
      { label: "Campanhas e clientes" },
      { label: "Indicadores de desempenho" },
      { label: "Visualizações gerenciais" },
    ],
    metrics: [
      ["Campanhas", "organizadas"],
      ["Clientes", "segmentados"],
      ["Indicadores", "acompanhados"],
      ["Visualizações", "gerenciais"],
    ],
    insights: [
      "A organização das campanhas e clientes facilita a análise de desempenho.",
      "Indicadores gerenciais apoiam o acompanhamento das ações realizadas.",
      "A experiência prática de gestão fortalece a leitura de problemas de negócio.",
    ],
  },
];

const projectContent = Object.fromEntries(projects.map((project) => [project.key, project]));
const heroChartPoints = [18, 24, 32, 44, 58, 73, 88];

const careerTimeline = [
  {
    label: "Letícia Felix Estética",
    period: "AGO/2025 — ATUAL",
    title: "Letícia Felix Estética — Proprietária",
    description:
      "Gestão administrativa, financeira e operacional, com controle de receitas, despesas, clientes e agenda.",
    icon: BriefcaseBusiness,
    tone: "business",
  },
  {
    label: "Felix Engenharia",
    period: "4 ANOS E 2 MESES",
    title: "Felix Engenharia — Auxiliar Administrativo",
    description:
      "Controle de documentos, notas fiscais e boletos no Sienge, além do apoio às rotinas de compras.",
    icon: Building2,
    tone: "engineering",
  },
  {
    label: "Clube da Unidade de Vizinhança Nº 1",
    period: "10 MESES",
    title: "Clube da Unidade de Vizinhança Nº 1",
    description:
      "Fechamento de caixa, controle de pagamentos, inadimplência e suporte administrativo.",
    icon: Landmark,
    tone: "club",
  },
  {
    label: "Formação acadêmica",
    period: "2026 — 2028",
    title: "Análise e Desenvolvimento de Sistemas — Estácio",
    description:
      "Formação em andamento com foco em Dados, BI, tecnologia e melhoria de processos.",
    icon: GraduationCap,
    tone: "education",
  },
];

const experienceStrengths = [
  "Organização administrativa",
  "Documentos e pagamentos",
  "Controle financeiro",
  "Sienge e planilhas",
  "Compras",
  "Atendimento",
  "Processos e informações",
];

function getProjectOpenNotice(project) {
  return project.openNotice || `Link do projeto ${project.title} ainda não foi informado.`;
}

function formatCounterValue(value, decimals = 0) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function drawLineChart(canvas, data, color = "#32d2ff", fill = "rgba(50, 210, 255, 0.16)") {
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width || canvas.width;
  const height = rect.height || canvas.height;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  const padding = 26;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const max = Math.max(...data) * 1.08;
  const min = Math.min(...data) * 0.72;
  const spread = max - min || 1;
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = padding + (1 - (value - min) / spread) * chartHeight;
    return { x, y };
  });

  context.strokeStyle = "rgba(148, 163, 184, 0.18)";
  context.lineWidth = 1;
  for (let index = 0; index < 4; index += 1) {
    const y = padding + (chartHeight / 3) * index;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  });
  context.lineTo(width - padding, height - padding);
  context.lineTo(padding, height - padding);
  context.closePath();
  context.fillStyle = fill;
  context.fill();

  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  });
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();

  points.forEach((point) => {
    context.beginPath();
    context.arc(point.x, point.y, 4, 0, Math.PI * 2);
    context.fillStyle = "#071827";
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
  });
}

function useScrollUi() {
  const [scrollState, setScrollState] = useState({ progress: 0, scrolled: false });

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      setScrollState({ progress, scrolled: window.scrollY > 20 });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return scrollState;
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function CountUp({ target, decimals = 0, prefix = "", suffix = "" }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    let frame = 0;

    const animate = () => {
      if (animatedRef.current) return;

      animatedRef.current = true;
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    if (!element || !("IntersectionObserver" in window)) {
      animate();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate();
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <strong ref={elementRef}>
      {prefix}
      {formatCounterValue(value, decimals)}
      {suffix}
    </strong>
  );
}

function LineCanvas({ points, color, fill, className, width, height, ariaLabel }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const redraw = () => drawLineChart(canvas, points, color, fill);
    redraw();

    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(redraw) : null;
    resizeObserver?.observe(canvas);
    window.addEventListener("resize", redraw);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", redraw);
    };
  }, [points, color, fill]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={width}
      height={height}
      aria-label={ariaLabel}
    />
  );
}

function Header({ activeSection, navOpen, scrolled, setNavOpen }) {
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a className="brand" href="#inicio" aria-label="Voltar ao início" onClick={() => setNavOpen(false)}>
        <span className="brand-mark">LF</span>
        <span>
          <strong>Letícia Felix</strong>
          <small>Data Analytics & BI</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={navOpen}
        onClick={() => setNavOpen((current) => !current)}
      >
        {navOpen ? <X /> : <Menu />}
      </button>

      <nav className={`site-nav${navOpen ? " open" : ""}`}>
        {navItems.map(([id, label]) => (
          <a
            key={id}
            className={activeSection === id ? "active" : ""}
            href={`#${id}`}
            onClick={() => setNavOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Apresentação">
      <div className="hero-media" aria-hidden="true"></div>
      <div className="hero-overlay"></div>

      <div className="section-inner hero-layout">
        <div className="hero-content" data-reveal>
          <div className="hero-kicker">Data Analytics | Business Intelligence</div>
          <h1>Letícia Felix</h1>
          <p>
            Estudante de ADS com foco em Análise de Dados e Business Intelligence,
            desenvolvendo soluções com SQL, Power BI, Power Query, Excel e Python para
            transformar dados em indicadores e apoiar decisões de negócio.
          </p>

          <div className="hero-actions" aria-label="Ações principais">
            <a className="btn primary" href="#projetos">
              <BarChart3 />
              Ver projetos
            </a>
            <a className="btn secondary" href="#sobre">
              <Activity />
              Sobre mim
            </a>
          </div>

          <div className="hero-metrics" aria-label="Resumo do portfólio">
            <article>
              <CountUp target={3} />
              <span>Projetos de Dados</span>
            </article>
            <article>
              <CountUp target={7} suffix=" mil+" />
              <span>Registros analisados</span>
            </article>
            <article>
              <CountUp target={31.14} suffix="%" decimals={2} />
              <span>Margem do E-commerce</span>
            </article>
          </div>
        </div>

        <aside className="hero-console" aria-label="Resumo analítico" data-reveal>
          <div className="console-head">
            <span className="status-dot"></span>
            <strong>PORTFÓLIO ANALYTICS</strong>
            <small>online</small>
          </div>
          <div className="console-grid">
            <div className="console-kpi wide">
              <span>Stack principal</span>
              <strong>SQL • Power BI • Power Query • Excel</strong>
            </div>
            <div className="console-kpi">
              <span>Visão de negócio</span>
              <strong>Gestão + Dados</strong>
            </div>
            <div className="console-kpi">
              <span>Foco profissional</span>
              <strong>Análise de Dados • BI</strong>
            </div>
          </div>
          <LineCanvas
            className="hero-chart"
            width={520}
            height={190}
            points={heroChartPoints}
            color="#26d9a8"
            fill="rgba(38, 217, 168, 0.16)"
            ariaLabel="Linha de crescimento do portfólio"
          />
        </aside>
      </div>
    </section>
  );
}

function IntroBand() {
  return (
    <section className="intro-band" id="sobre">
      <div className="section-inner intro-grid">
        <div className="profile-panel" data-reveal>
          <div className="avatar" aria-label="Letícia Felix">
            LF
          </div>
          <div>
            <p className="eyebrow">Sobre mim</p>
            <h2>Letícia Felix</h2>
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, com foco em Análise de Dados
              e Business Intelligence. Uno experiência em gestão administrativa e operacional a
              projetos práticos com Power BI, SQL, Excel e Python.
            </p>
          </div>
        </div>

        <div className="summary-list" aria-label="Resumo profissional" data-reveal>
          {profileHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label}>
                <Icon />
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                {item.detail ? <small>{item.detail}</small> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-section">
      <div className="section-inner about-grid">
        <div className="section-heading about-copy" data-reveal>
          <p className="eyebrow">Perfil profissional</p>
          <h2>Transformo dados em informações úteis para decisões de negócio</h2>
          <p>
            Minha experiência em rotinas administrativas, controle financeiro, atendimento a
            clientes e gestão operacional despertou meu interesse pelo uso de dados na melhoria
            de processos. Atualmente, desenvolvo projetos envolvendo tratamento de dados,
            consultas SQL, definição de KPIs e criação de dashboards.
          </p>
        </div>

        <div className="capability-list" aria-label="Competências em dados" data-reveal>
          {professionalCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className={`capability-card ${item.tone}`} key={item.title}>
                <Icon />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  const [activeScenario, setActiveScenario] = useState("vendas");
  const [dashboardStatus, setDashboardStatus] = useState("");
  const scenario = dashboardData[activeScenario];

  useEffect(() => {
    setDashboardStatus("");
  }, [activeScenario]);

  return (
    <section className="section dashboard-section" id="painel">
      <div className="section-inner dashboard-grid">
        <div className="dashboard-copy" data-reveal>
          <div className="dashboard-view" key={`copy-${activeScenario}`}>
            <p className="eyebrow">{scenario.eyebrow}</p>
            <h2>{scenario.heading}</h2>
            <p>{scenario.description}</p>

            <div className="scenario-controls" role="tablist" aria-label="Cenários de análise">
              {scenarioTabs.map(([key, label]) => (
                <button
                  key={key}
                  className={`scenario-btn${activeScenario === key ? " active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={activeScenario === key}
                  onClick={() => setActiveScenario(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            <article className="dashboard-objective">
              <span>{scenario.objectiveLabel}</span>
              {scenario.context ? (
                <div className="context-lines">
                  {scenario.context.map((line) => (
                    <strong key={line}>{line}</strong>
                  ))}
                </div>
              ) : (
                <p>{scenario.objectiveText}</p>
              )}
            </article>

            <div className="tech-stack" aria-label="Tecnologias e competências">
              {scenario.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="dashboard-actions">
              {scenario.actions.map((action) =>
                action.href ? (
                  <a
                    className="dashboard-action"
                    href={action.href}
                    key={action.label}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {action.label}
                  </a>
                ) : (
                  <button
                    className="dashboard-action ghost"
                    key={action.label}
                    type="button"
                    onClick={() => setDashboardStatus(action.notice)}
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>
            <p className="dashboard-status" aria-live="polite">
              {dashboardStatus}
            </p>
          </div>
        </div>

        <div className="analytics-board" data-reveal>
          <div className={`dashboard-view ${activeScenario}`} key={`board-${activeScenario}`}>
            <div className="board-header">
              <div>
                <span>{scenario.panelLabel}</span>
                <h3>{scenario.panelTitle}</h3>
              </div>
            </div>

            <div className="board-kpis">
              {scenario.kpis.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>

            {scenario.kind === "process" ? (
              <>
                <div className="flow-panel">
                  <span>{scenario.flowTitle}</span>
                  <div className="flow-steps">
                    {scenario.flow.map((step, index) => (
                      <span key={step}>
                        {step}
                        {index < scenario.flow.length - 1 ? <b aria-hidden="true">→</b> : null}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="practice-panel">
                  <span>{scenario.practiceTitle}</span>
                  <div className="practice-grid">
                    {scenario.practice.map(([title, text]) => (
                      <article key={title}>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="chart-panel">
                  <div className="chart-head">
                    <span>{scenario.chartTitle}</span>
                    <strong>{scenario.chartMeta}</strong>
                  </div>
                  <LineCanvas
                    className="trend-chart"
                    width={680}
                    height={260}
                    points={scenario.points}
                    color={scenario.color}
                    fill={scenario.fill}
                    ariaLabel={`Gráfico de ${scenario.chartTitle.toLowerCase()}`}
                  />
                </div>

                {scenario.complementary ? (
                  <div className="dashboard-secondary-panel">
                    <span>{scenario.complementaryTitle}</span>
                    <div className="dashboard-secondary-grid">
                      {scenario.complementary.map(([label, value]) => (
                        <article key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}

                {scenario.factors ? (
                  <div className="factor-panel" aria-label={scenario.factorsTitle}>
                    <span>{scenario.factorsTitle}</span>
                    {scenario.factors.map(([label, value]) => (
                      <div className="bar-row" key={label}>
                        <span>{label}</span>
                        <div className="bar-track">
                          <span style={{ width: `${value}%` }}></span>
                        </div>
                        <strong>{value}%</strong>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState("powerbi");
  const skill = skillContent[activeSkill];

  return (
    <section className="section skills-section" id="habilidades">
      <div className="section-inner skills-layout">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Stack de dados</p>
          <h2>Ferramentas para analisar, modelar e apresentar informações</h2>
          <p>Competências aplicadas em projetos de Análise de Dados e Business Intelligence.</p>
        </div>

        <div className="skills-grid" data-reveal>
          {skills.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={`skill-card${activeSkill === item.key ? " active" : ""}`}
                type="button"
                onClick={() => setActiveSkill(item.key)}
              >
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </button>
            );
          })}
        </div>

        <aside className="skill-panel" aria-live="polite" data-reveal>
          <span>Competência aplicada</span>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
          <div className="skill-evidence">
            {skill.evidence.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <strong className="skill-applied">{skill.applied}</strong>
        </aside>
      </div>
    </section>
  );
}

function ProjectOpenButton({ project, onUnavailable }) {
  if (project.link) {
    return (
      <a className="project-link ghost" href={project.link} target="_blank" rel="noopener noreferrer">
        <ExternalLink />
        Abrir projeto
      </a>
    );
  }

  return (
    <button
      className="project-link ghost unavailable"
      type="button"
      onClick={() => onUnavailable(getProjectOpenNotice(project))}
    >
      <ExternalLink />
      Abrir projeto
    </button>
  );
}

function ProjectCard({ project, activeFilter, onOpenProject, onProjectNotice }) {
  const Icon = project.icon;
  const isHidden = activeFilter !== "todos" && !project.categories.includes(activeFilter);

  return (
    <article
      className={`project-card project-featured${isHidden ? " hidden" : ""}`}
      data-category={project.categories.join(" ")}
      data-reveal
    >
      <button className="project-image" type="button" onClick={() => onOpenProject(project.key)}>
        {project.image ? (
          <img src={project.image} alt={project.cardAlt} />
        ) : (
          <span className="project-visual" role="img" aria-label={project.cardAlt}>
            <span className="visual-head">
              <span>Análise</span>
              <strong>Nova Era</strong>
            </span>
            <span className="visual-kpis">
              <span>Campanhas</span>
              <span>Clientes</span>
              <span>Desempenho</span>
            </span>
            <span className="visual-chart">
              <span style={{ height: "48%" }}></span>
              <span style={{ height: "64%" }}></span>
              <span style={{ height: "56%" }}></span>
              <span style={{ height: "78%" }}></span>
              <span style={{ height: "70%" }}></span>
            </span>
          </span>
        )}
      </button>
      <div className="project-content">
        <div className="project-topline">
          <span>{project.category}</span>
          <Icon />
        </div>
        <h3>{project.title}</h3>
        <p>{project.cardDescription}</p>

        <div className="project-techs" aria-label={`Tecnologias utilizadas em ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-highlights" aria-label={`Resultados e destaques do ${project.title}`}>
          {project.highlights.map((highlight) => (
            <article
              className={`project-highlight${highlight.metric ? " metric" : " tag"}`}
              key={highlight.label}
            >
              <span>{highlight.label}</span>
              {highlight.metric ? <CountUp {...highlight.metric} /> : null}
            </article>
          ))}
        </div>

        <div className="project-actions">
          <button
            className="project-link button-link"
            type="button"
            onClick={() => onOpenProject(project.key)}
          >
            <PanelTopOpen />
            Ver detalhes
          </button>
          <ProjectOpenButton project={project} onUnavailable={onProjectNotice} />
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [projectStatus, setProjectStatus] = useState("");
  const visibleProjectsCount = projects.filter(
    (project) => activeFilter === "todos" || project.categories.includes(activeFilter)
  ).length;
  const countLabel = visibleProjectsCount === 1 ? "projeto encontrado" : "projetos encontrados";
  const filters = [
    ["todos", "Todos"],
    ["bi", "Power BI"],
    ["sql", "SQL"],
    ["python", "Python"],
    ["excel", "Excel"],
  ];

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setProjectStatus("");
  };

  return (
    <section className="section projects-section" id="projetos">
      <div className="section-inner">
        <div className="section-heading compact" data-reveal>
          <p className="eyebrow">Portfólio</p>
          <h2>Projetos com dados, indicadores e dashboards</h2>
          <p>Projetos práticos que conectam análise, tecnologia e decisões de negócio.</p>
        </div>

        <div className="project-toolbar" data-reveal>
          <div className="project-filters" role="tablist" aria-label="Filtrar projetos">
            {filters.map(([key, label]) => (
              <button
                key={key}
                className={`filter-btn${activeFilter === key ? " active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeFilter === key}
                onClick={() => handleFilterChange(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="project-count">
            {visibleProjectsCount} {countLabel}
          </span>
        </div>

        <div className="projects-grid featured-projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              activeFilter={activeFilter}
              onOpenProject={onOpenProject}
              onProjectNotice={setProjectStatus}
            />
          ))}
        </div>
        <p className="project-status" aria-live="polite">
          {projectStatus}
        </p>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="section-inner experience-grid">
        <div className="section-heading experience-heading" data-reveal>
          <p className="eyebrow">Trajetória profissional</p>
          <h2>Experiência que conecta operação, processos e análise de dados</h2>
          <p>
            Uma trajetória construída entre gestão administrativa, negócio próprio e projetos
            práticos em Dados e BI.
          </p>
        </div>

        <div className="timeline" data-reveal>
          {careerTimeline.map((item) => {
            const Icon = item.icon;

            return (
              <article className={`timeline-item ${item.tone}`} key={item.title}>
                <span className="timeline-marker">
                  <span className="timeline-dot"></span>
                  <Icon />
                </span>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-label">{item.label}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="experience-strengths" aria-label="Experiências e competências aplicadas" data-reveal>
          {experienceStrengths.map((strength) => (
            <span key={strength}>{strength}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copyLabel, setCopyLabel] = useState("Copiar e-mail");
  const [contactStatus, setContactStatus] = useState("");
  const timeoutRef = useRef(0);

  const showStatus = (message) => {
    window.clearTimeout(timeoutRef.current);
    setContactStatus(message);
    timeoutRef.current = window.setTimeout(() => {
      setContactStatus("");
      setCopyLabel("Copiar e-mail");
    }, 2400);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("E-mail copiado");
      showStatus(`${email} copiado.`);
    } catch {
      showStatus(email);
    }
  };

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className="contact-section" id="contato">
      <div className="section-inner contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">Contato e disponibilidade</p>
          <h2>Vamos conversar sobre oportunidades em Dados e BI?</h2>
          <p>
            Busco estágio em Análise de Dados, Business Intelligence ou áreas relacionadas a
            indicadores e processos.
          </p>
          <span className="availability-badge">
            <BadgeCheck />
            Disponível para estágio
          </span>
          <a className="resume-button" href={resumeUrl} download>
            <Download />
            Baixar currículo
          </a>
        </div>

        <div className="contact-actions" aria-label="Informações de contato" data-reveal>
          <article className="contact-card">
            <div className="contact-card-head">
              <span className="contact-icon">
                <Mail />
              </span>
              <div>
                <span>E-mail</span>
                <strong>{email}</strong>
              </div>
            </div>
            <button className="contact-action" type="button" onClick={copyEmail}>
              <Copy />
              {copyLabel}
            </button>
          </article>

          <article className="contact-card">
            <div className="contact-card-head">
              <span className="contact-icon">
                <Linkedin />
              </span>
              <div>
                <span>LinkedIn</span>
                <strong>{linkedinDisplay}</strong>
              </div>
            </div>
            <a className="contact-action" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
              Abrir perfil
            </a>
          </article>

          <article className="contact-card">
            <div className="contact-card-head">
              <span className="contact-icon">
                <Github />
              </span>
              <div>
                <span>GitHub</span>
                <strong>{githubDisplay}</strong>
              </div>
            </div>
            <a className="contact-action" href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
              Ver projetos
            </a>
          </article>

          <p className="contact-status" aria-live="polite">
            {contactStatus}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ selectedProject, onClose }) {
  const dialogRef = useRef(null);
  const [modalStatus, setModalStatus] = useState("");
  const project = selectedProject ? projectContent[selectedProject] : null;

  useEffect(() => {
    setModalStatus("");
  }, [selectedProject]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
      return;
    }

    if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      className="project-modal"
      ref={dialogRef}
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project ? (
        <div className="modal-shell">
          <button
            className="modal-close"
            type="button"
            aria-label="Fechar detalhes do projeto"
            onClick={onClose}
          >
            <X />
          </button>
          {project.image ? (
            <img src={project.image} alt={project.imageAlt} />
          ) : (
            <div className="modal-visual" role="img" aria-label={project.imageAlt}>
              <div className="visual-head">
                <span>Análise</span>
                <strong>Nova Era</strong>
              </div>
              <div className="visual-kpis">
                <span>Campanhas</span>
                <span>Clientes</span>
                <span>Desempenho</span>
              </div>
              <div className="visual-chart">
                <span style={{ height: "48%" }}></span>
                <span style={{ height: "64%" }}></span>
                <span style={{ height: "56%" }}></span>
                <span style={{ height: "78%" }}></span>
                <span style={{ height: "70%" }}></span>
              </div>
            </div>
          )}
          <div className="modal-content">
            <span>{project.technologies.join(" • ")}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="modal-metrics">
              {project.metrics.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="modal-insights">
              {project.insights.map((insight) => (
                <span key={insight}>{insight}</span>
              ))}
            </div>
            <ProjectOpenButton project={project} onUnavailable={setModalStatus} />
            <p className="modal-status" aria-live="polite">
              {modalStatus}
            </p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export default function App() {
  const { progress, scrolled } = useScrollUi();
  const activeSection = useActiveSection();
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useRevealOnScroll();

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true"></div>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header
        activeSection={activeSection}
        navOpen={navOpen}
        scrolled={scrolled}
        setNavOpen={setNavOpen}
      />

      <main id="conteudo">
        <Hero />
        <IntroBand />
        <AboutSection />
        <DashboardSection />
        <SkillsSection />
        <ProjectsSection onOpenProject={setSelectedProject} />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <span>© 2026 Letícia Felix</span>
        <a href="#inicio">Voltar ao topo</a>
      </footer>

      <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
