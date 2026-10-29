import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Database,
  BarChart3,
  BrainCircuit,
  Layers3,
  Search,
  Terminal,
  Workflow,
} from "lucide-react";
// import './styles.css';

type Domain =
  | "All"
  | "Data Science"
  | "AI / ML"
  | "Frontend"
  | "Cybersecurity"
  | "Analytics";
type Project = {
  title: string;
  domain: Exclude<Domain, "All">;
  type: string;
  description: string;
  stack: string[];
  status: string;
  outcome: string;
  report: string[];
  repo: string;
  live: string;
};
const domains: Domain[] = [
  "All",
  "Data Science",
  "AI / ML",
  "Frontend",
  "Cybersecurity",
  "Analytics",
];
const internships = [
  {
    company: "Bluestock Fintech",
    role: "Data Analyst Intern",
    domain: "Data Science" as const,
    duration: "2 months",
    kind: "Virtual internship",
    summary:
      "Worked through foundational and advanced data-analysis project tasks, building experience in data preparation, analysis and communicating insights.",
    projects: [
      "N100 Financial Intelligence Platform",
      "Financial Data Analysis Tasks",
    ],
    skills: ["Python", "Pandas", "NumPy", "SQL", "Data visualization"],
    certificate: "Bluestock Fintech · Data Analyst Internship",
    proof: "Add your verified certificate URL/PDF",
  },
  {
    company: "Robokwik · Prabandhan, IIT Kanpur",
    role: "Machine Learning with Python Intern",
    domain: "AI / ML" as const,
    duration: "Internship",
    kind: "Internship / project work",
    summary:
      "Worked on a sales-forecast prediction project using a Python-based machine-learning workflow.",
    projects: ["Sales Forecast Prediction"],
    skills: ["Python", "Pandas", "Machine Learning", "Model evaluation"],
    certificate: "Machine Learning with Python",
    proof: "Add your verified certificate URL/PDF",
  },
  {
    company: "IBM",
    role: "Cyber Security Virtual Intern",
    domain: "Cybersecurity" as const,
    duration: "Virtual internship",
    kind: "Virtual internship",
    summary:
      "Cybersecurity-focused learning experience covering defensive security concepts. Add specific labs and tools only if they match your completion record.",
    projects: ["Cybersecurity learning / lab work"],
    skills: ["Security fundamentals", "Threat awareness", "Cyber hygiene"],
    certificate: "IBM · Cyber Security Virtual Internship",
    proof: "Add your verified certificate URL/PDF",
  },
  {
    company: "TechSaksham · Edunet Foundation",
    role: "AI Transformative Learning Program",
    domain: "AI / ML" as const,
    duration: "Program",
    kind: "Learning program",
    summary:
      "AI learning program delivered in collaboration with Microsoft and SAP, focused on building familiarity with applied AI concepts.",
    projects: ["AI learning exercises"],
    skills: [
      "AI fundamentals",
      "Problem solving",
      "Python (if used in program)",
    ],
    certificate: "AI Transformative Learning Program",
    proof: "Add your verified certificate URL/PDF",
  },
];
const projects: Project[] = [
  {
    title: "Real Estate Buyer Segmentation",
    domain: "AI / ML",
    type: "Internship project · Clustering",
    description:
      "Buyer segmentation and investment profiling from client and property data, with feature engineering, K-Means and hierarchical clustering, cluster evaluation and a Streamlit insight dashboard.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "Hierarchical clustering",
      "Streamlit",
    ],
    status: "Built dashboard · report in progress",
    outcome:
      "Prepared a 2,000-client feature dataset and compared segmentation approaches using Elbow and Silhouette analysis.",
    report: [
      "Problem: segment buyers to support real-estate market intelligence.",
      "Data: client and property tables; engineered buyer-level property count, value, price and floor-area features.",
      "Methods: cleaning, categorical encoding, scaling, K-Means, hierarchical clustering, Elbow and Silhouette evaluation.",
      "Deliverable: interactive Streamlit dashboard with buyer overview, investor behavior, geography and segment insights.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "N100 Financial Intelligence Platform",
    domain: "Analytics",
    type: "Capstone · Financial analytics",
    description:
      "Financial intelligence and screening platform for Nifty 100 companies, covering financial ratios, KPI tracking, peer percentiles, screening, cash-flow analysis and risk-oriented insights.",
    stack: [
      "Python",
      "SQLite",
      "Pandas",
      "Excel",
      "Streamlit",
      "Financial ratios",
    ],
    status: "Capstone · multiple sprints",
    outcome:
      "Worked with 92 companies and a financial-ratio history spanning Dec 2012–Sep 2024, plus screening and peer-comparison outputs.",
    report: [
      "Goal: turn company financial statements into comparable decision-support indicators.",
      "Pipeline: ingest and clean source data, calculate ratios and KPIs, persist data in SQLite.",
      "Analysis: peer percentiles, screening outputs, pros/cons summaries, cash-flow intelligence and distress alerts.",
      "Outputs recorded in the project workflow include financial_ratios, screener_output, peer_percentiles and distress_alerts.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Auto Data Analysis Tool",
    domain: "Data Science",
    type: "Streamlit application",
    description:
      "A guided workflow for dataset inspection, data-quality checks, EDA, cleaning, encoding, preprocessing and automated machine-learning preparation.",
    stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
    status: "In development",
    outcome:
      "Designed as a modular app with separate data loading, quality, EDA, cleaning, encoding and AutoML engines.",
    report: [
      "Workflow: Inspection → Quality Analysis → EDA → Cleaning → Encoding → AutoML.",
      "Input formats planned: CSV, Excel, TSV and JSON.",
      "Cleaning flow: heatmap, duplicate removal, outlier report, missing-value treatment choices, preview, then apply.",
      "Modules separate loading, cleaning, encoding, feature engineering, statistical analysis and model execution.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Phishing URL Detection",
    domain: "Cybersecurity",
    type: "Security + machine learning",
    description:
      "A defensive ML project concept for extracting URL-based signals and classifying suspicious links to support phishing awareness and triage.",
    stack: [
      "Python",
      "Pandas",
      "Feature engineering",
      "Scikit-learn",
      "Security",
    ],
    status: "Portfolio project · verify implementation",
    outcome:
      "Project scope is defined; add measured model results and a repository once your implementation is ready.",
    report: [
      "Problem: help flag potentially suspicious URLs for further review.",
      "Possible features: URL length, hostname patterns, special characters, HTTPS indicator and lexical tokens.",
      "Evaluation: precision, recall, F1 and confusion matrix; avoid relying on accuracy alone.",
      "Safety: classification should assist review, not guarantee that a URL is safe or malicious.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Bangalore House Price Prediction",
    domain: "Data Science",
    type: "Regression · ML practice",
    description:
      "A property-price prediction project exploring feature preparation, exploratory analysis, regression and evaluation.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Regression"],
    status: "Practice project",
    outcome:
      "A portfolio-ready regression case study; publish actual evaluation metrics after checking your final notebook.",
    report: [
      "Problem: estimate property prices from available housing attributes.",
      "Workflow: inspect data, clean missing and inconsistent values, encode categorical features, split data.",
      "Modeling: establish a baseline and compare appropriate regression models.",
      "Report: add MAE, RMSE and R² from your actual run before publishing.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Weather Report Dashboard",
    domain: "Analytics",
    type: "Data visualization",
    description:
      "A weather-focused reporting project that presents conditions and visual summaries in an approachable dashboard.",
    stack: ["Python", "Pandas", "Plotly", "Streamlit"],
    status: "Project",
    outcome:
      "A data storytelling project; add the data source and screenshots for the exact version you built.",
    report: [
      "Goal: make weather information easy to scan and compare.",
      "Visual approach: clear KPI cards, time-series charts and concise labels.",
      "Recommended validation: identify data source, units, refresh time and missing observations.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Diabetes Prediction Analysis",
    domain: "AI / ML",
    type: "Classification · model evaluation",
    description:
      "Exploration and model evaluation on a diabetes dataset, emphasizing preprocessing and class-aware metrics alongside accuracy.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Decision Tree"],
    status: "ML practice",
    outcome:
      "Previously recorded Decision Tree accuracy of about 0.9716 and F1 of about 0.808; re-check against the final split before publication.",
    report: [
      "Data fields include age, gender, hypertension, heart disease, smoking history, BMI, HbA1c, blood glucose and diabetes.",
      "Model note: a Decision Tree result was previously recorded at accuracy 0.971607 and F1 0.808.",
      "Use a held-out test set, class-aware metrics and leakage checks; accuracy alone can mislead.",
      "This is an educational project, not a clinical diagnostic tool.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "YouTube Trending Analytics",
    domain: "Analytics",
    type: "BI · data visualization",
    description:
      "A data storytelling project exploring YouTube trending content across time with interactive charts and dashboard-style analysis.",
    stack: ["Power BI", "Python", "Plotly", "Data cleaning"],
    status: "Project concept / development",
    outcome:
      "Scope discussed for a 2020–2026 analysis; verify dataset coverage and actual dashboard outputs before publishing.",
    report: [
      "Questions: how do categories, engagement and publishing patterns change over time?",
      "Possible measures: views, likes, comments, category share and time-to-trend.",
      "Use Power BI or Plotly for trend comparisons and clear interactive filters.",
      "Clearly disclose dataset coverage and avoid claiming complete platform-wide coverage.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Sales Forecast Prediction",
    domain: "AI / ML",
    type: "Internship project · forecasting",
    description:
      "A sales-forecast prediction project associated with the Robokwik / Prabandhan IIT Kanpur Machine Learning with Python internship.",
    stack: [
      "Python",
      "Pandas",
      "Time-series / regression concepts",
      "Model evaluation",
    ],
    status: "Internship project · verify final metrics",
    outcome:
      "Project association is known; add the actual dataset, model choice, validation strategy and results from your notebook.",
    report: [
      "Goal: estimate future sales from historical observations.",
      "Document the actual time period, target variable, features and data source.",
      "Use time-aware validation rather than randomly shuffling ordered time-series observations.",
      "Add baseline comparison and validated error metrics from the completed project.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Malware Analysis & Reverse Engineering",
    domain: "Cybersecurity",
    type: "Defensive security · research",
    description:
      "A defensive analysis topic for learning static/dynamic inspection, indicators of compromise and structured malware-behavior reporting in an isolated lab.",
    stack: [
      "Static analysis concepts",
      "IOC extraction",
      "Sandbox / isolated lab",
      "Threat reporting",
    ],
    status: "Research / learning project",
    outcome:
      "Present as a research workflow until you have a reproducible lab report, sample provenance and screenshots to show.",
    report: [
      "Use only authorized samples in an isolated, disposable analysis environment.",
      "Record file metadata and hashes before analysis; never execute samples on a personal host.",
      "Describe static and dynamic observations and distinguish observed behavior from assumptions.",
      "Include containment, safety limitations and indicators of compromise in the final report.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Mutual Fund Analytics",
    domain: "Analytics",
    type: "Financial analytics · project",
    description:
      "A financial-analysis project topic previously associated with your analytics work. Confirm the exact data, measures and deliverables from your original files.",
    stack: ["Python", "Pandas", "Financial data", "Visualization"],
    status: "Details to verify",
    outcome:
      "Included as a portfolio placeholder based on prior project context; replace the summary with evidence from the real implementation.",
    report: [
      "Define the exact question: performance comparison, risk, allocation, or fund screening.",
      "Document the source and date range of the fund data.",
      "Use appropriate measures such as returns and risk metrics only when calculated correctly.",
      "Add verified charts, methodology and limitations from your actual analysis.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Attendance Management System",
    domain: "Frontend",
    type: "Application project · 2024",
    description:
      "An attendance-management project worked on in 2024; update the stack and feature list to match the actual implementation.",
    stack: ["Application development", "Data handling", "UI"],
    status: "Worked on in 2024",
    outcome:
      "Project history is recorded; exact implementation details and repository link still need confirmation.",
    report: [
      "Purpose: manage and review attendance records.",
      "Document the real features implemented, user roles and storage approach.",
      "Add screenshots and setup instructions from the original project.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Dhoomchhalle Travel Helper",
    domain: "Frontend",
    type: "React / Node chatbot concept",
    description:
      "A traveler-help assistant concept using a React/Node interface and an LLM API, with an avatar concept named visu.",
    stack: ["React", "Node.js", "LLM API concept", "Chat UI"],
    status: "Concept",
    outcome:
      "Idea recorded; mark as a concept until a working demo and repository are available.",
    report: [
      "Goal: help travelers get contextual answers and trip assistance.",
      "Frontend concept: conversational interface with a friendly avatar.",
      "Backend concept: Node.js API calling an LLM provider securely from the server.",
      "Never expose API keys in frontend code; document limitations and verify outputs.",
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "UPI Fraud Detection",
    domain: "AI / ML",
    type: "Project idea · anomaly detection",
    description:
      "A proposed ML project to identify suspicious transaction patterns and support fraud triage.",
    stack: ["Python", "Pandas", "Scikit-learn", "Anomaly detection"],
    status: "Idea",
    outcome:
      "Project idea saved in your portfolio context; do not present it as completed until implemented.",
    report: [
      "Goal: identify transactions that may warrant further review.",
      "Consider class imbalance, leakage, privacy and realistic train/test splits.",
      "Compare precision-recall, F1 and cost-sensitive thresholds.",
      "Use synthetic or properly authorized data and avoid exposing personal transaction details.",
    ],
    repo: "#",
    live: "#",
  },
];
const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    desc: "Interfaces, responsive layouts & motion",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    desc: "APIs, server-side logic & data storage",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST API fundamentals",
    ],
  },
  {
    title: "AI / ML & Data Science",
    icon: BrainCircuit,
    desc: "From data preparation to model evaluation",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "TensorFlow",
      "ANN",
      "CNN",
      "RNN",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Defensive foundations to build on",
    skills: [
      "Networking fundamentals",
      "Linux fundamentals",
      "TCP/IP & DNS concepts",
      "HTTP/HTTPS",
      "OWASP Top 10 awareness",
      "Phishing analysis",
      "Log analysis fundamentals",
      "Basic threat modeling",
      "Git & GitHub",
      "VS Code",
    ],
  },
];
const nav = [
  ["Home", "home"],
  ["About", "about"],
  ["Work & Experience", "work"],
  ["Skills", "skills"],
  ["Projects", "projects"],
];
function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [page, setPage] = useState("home");
  const [domain, setDomain] = useState<Domain>("All");
  const [skillTab, setSkillTab] = useState("AI / ML & Data Science");
  const [selected, setSelected] = useState<Project | null>(null);
  const [photo, setPhoto] = useState(0);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const t = setInterval(() => setPhoto((p) => (p + 1) % 3), 4200);
    return () => clearInterval(t);
  }, []);
  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (p) =>
          (domain === "All" || p.domain === domain) &&
          `${p.title} ${p.description} ${p.stack.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [domain, query],
  );
  const filteredInternships = internships.filter(
    (i) =>
      domain === "All" ||
      i.domain === domain ||
      (domain === "Analytics" && i.domain === "Data Science"),
  );
  const go = (p: string) => {
    setPage(p);
    setMenu(false);
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openProject = (title: string) => {
    const p = projects.find((x) => x.title === title);
    if (p) setSelected(p);
    else
      setSelected({
        title,
        domain: "AI / ML",
        type: "Internship project",
        description:
          "Project details based on the internship and learning information currently available.",
        stack: ["Python", "Data analysis / ML"],
        status: "Details to verify",
        outcome:
          "Add final deliverables, repository, and measured results after verification.",
        report: [
          "Document the problem and intended users.",
          "Describe data sources and preprocessing.",
          "List methods and tools actually used.",
          "Add validated results, screenshots and limitations.",
        ],
        repo: "#",
        live: "#",
      });
  };
  return (
    <div className={`app-shell ${theme}`}>
      <div className="grain" />
      <header className="site-header">
        <button className="wordmark" onClick={() => go("home")}>
          <span className="logo-box">
            v<span>.</span>
          </span>
          <span>
            VISHESH <small>PORTFOLIO / 2026</small>
          </span>
        </button>
        <nav className={menu ? "main-nav show" : "main-nav"}>
          {nav.map(([label, id]) => (
            <button
              key={id}
              className={page === id ? "nav-link active" : "nav-link"}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
          <button className="nav-contact" onClick={() => go("contact")}>
            Let's connect <ArrowUpRight size={15} />
          </button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Switch theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button mobile-menu"
            aria-label="Open navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -7 }}
            transition={{ duration: 0.22 }}
          >
            {page === "home" && (
              <>
                <section className="home-hero wrap">
                  <div className="hero-copy">
                    <div className="eyebrow">
                      <span className="status-dot" /> OPEN TO INTERNSHIPS &
                      ENTRY-LEVEL ROLES
                    </div>
                    <h1>
                      Curious mind.
                      <br />
                      <em>Useful intelligence.</em>
                    </h1>
                    <p className="hero-description">
                      I'm <strong>Vishesh Kumar Modanwal</strong> — a final-year
                      B.Tech CSE student specializing in AI & Machine Learning,
                      with a growing focus on data science and cybersecurity. I
                      like turning real-world questions into useful, explainable
                      projects.
                    </p>
                    <div className="hero-actions">
                      <button
                        className="button button-primary"
                        onClick={() => go("projects")}
                      >
                        Explore projects <ArrowDownRight size={17} />
                      </button>
                      <button
                        className="button button-quiet"
                        onClick={() => go("about")}
                      >
                        A little about me <ArrowRight size={16} />
                      </button>
                    </div>
                    <div className="social-line">
                      <span>FIND ME</span>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin />
                      </a>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                      >
                        <Github />
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                      >
                        <Instagram />
                      </a>
                    </div>
                  </div>
                  <div className="hero-art">
                    <div className="orbit orbit-a" />
                    <div className="orbit orbit-b" />
                    <div className="hero-monogram">
                      V<span>.</span>
                    </div>
                    <div className="floating-chip chip-top">
                      <BrainCircuit size={15} /> ML + DATA
                    </div>
                    <div className="floating-chip chip-bottom">
                      <ShieldCheck size={15} /> SECURITY-MINDED
                    </div>
                    <div className="art-index">
                      01 — 05 <span>BUILD / LEARN / REPEAT</span>
                    </div>
                  </div>
                </section>
                <section className="home-strip wrap">
                  <div>
                    <span className="strip-label">CURRENTLY EXPLORING</span>
                    <strong>
                      Machine Learning <i>·</i> Data Science <i>·</i>{" "}
                      Cybersecurity
                    </strong>
                  </div>
                  <button onClick={() => go("work")}>
                    See my experience <ChevronRight size={16} />
                  </button>
                </section>
                <section className="home-feature wrap">
                  <div>
                    <div className="section-kicker">
                      A SELECTED STARTING POINT
                    </div>
                    <h2>
                      Not just what I know.
                      <br />
                      <span>What I'm building.</span>
                    </h2>
                  </div>
                  <div className="feature-cards">
                    {projects.slice(0, 3).map((p, i) => (
                      <button
                        className="feature-card"
                        key={p.title}
                        onClick={() => openProject(p.title)}
                      >
                        <span className="feature-number">0{i + 1}</span>
                        <span className="feature-domain">{p.domain}</span>
                        <strong>{p.title}</strong>
                        <span className="feature-arrow">
                          <ArrowUpRight size={17} />
                        </span>
                      </button>
                    ))}
                  </div>
                  <button className="text-link" onClick={() => go("projects")}>
                    Browse all projects <ArrowRight size={16} />
                  </button>
                </section>
              </>
            )}
            {page === "about" && (
              <section className="wrap page-content">
                <PageHeading
                  index="01"
                  title="A little about me."
                  sub="The person behind the projects — curious, practical, and still learning."
                />
                <div className="about-layout">
                  <div className="photo-column">
                    <div className="photo-frame">
                      <div className={`photo-slide slide-${photo}`}>
                        <div className="photo-initials">
                          VK<span>.</span>
                        </div>
                        <span className="photo-caption">
                          {
                            [
                              "LEARNER / BUILDER",
                              "DATA EXPLORER",
                              "SECURITY CURIOUS",
                            ][photo]
                          }
                        </span>
                        <span className="photo-art-label">
                          PORTRAIT {String(photo + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="photo-controls">
                        <button
                          onClick={() => setPhoto((photo + 2) % 3)}
                          aria-label="Previous portrait"
                        >
                          <ArrowLeft />
                        </button>
                        <span>
                          0{photo + 1} <i>/ 03</i>
                        </span>
                        <button
                          onClick={() => setPhoto((photo + 1) % 3)}
                          aria-label="Next portrait"
                        >
                          <ArrowRight />
                        </button>
                      </div>
                    </div>
                    <p className="photo-note">
                      Portrait slots are styled placeholders — replace them with
                      2–3 of your own photos in <code>public/images</code>.
                    </p>
                  </div>
                  <div className="about-copy">
                    <div className="section-kicker">HELLO, I'M VISHESH</div>
                    <h2>
                      Building at the intersection of{" "}
                      <em>data, intelligence & digital safety.</em>
                    </h2>
                    <p>
                      I'm a final-year Computer Science and Engineering student
                      specializing in AI & Machine Learning. My learning path
                      has moved across Python-based data analysis,
                      machine-learning workflows, interactive dashboards, and
                      cybersecurity fundamentals.
                    </p>
                    <p>
                      I enjoy breaking a broad problem into a clean workflow:
                      understand the data, ask the right question, test a
                      method, explain the result, and improve what doesn't work.
                      I'm also developing my foundations in Linux and networking
                      as I grow toward security-focused work.
                    </p>
                    <div className="interest-tags">
                      <span>Machine Learning</span>
                      <span>Data Science</span>
                      <span>Cybersecurity</span>
                      <span>Data Visualization</span>
                    </div>
                    <div className="education-block">
                      <div className="section-kicker">EDUCATION</div>
                      <article className="education-card">
                        <div className="education-icon">
                          <GraduationCap />
                        </div>
                        <div>
                          <span className="education-year">
                            2022 — 2026 · EXPECTED
                          </span>
                          <h3>B.Tech — Computer Science & Engineering</h3>
                          <p>
                            Specialization: Artificial Intelligence & Machine
                            Learning
                          </p>
                          <small>
                            Institution name can be added once verified.
                          </small>
                        </div>
                        <span className="education-badge">Final year</span>
                      </article>
                      <p className="small-note">
                        Please verify the year range and add your college name,
                        location, and earlier education before publishing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {page === "work" && (
              <section className="wrap page-content">
                <PageHeading
                  index="02"
                  title="Work & experience."
                  sub="Filter by domain to see relevant internships, learning experiences and their associated projects."
                />
                <div className="work-callout">
                  <div className="callout-icon">
                    <BriefcaseBusiness />
                  </div>
                  <div>
                    <strong>Experience, connected to evidence.</strong>
                    <p>
                      Choose a domain, explore the related experience, then open
                      a project for its report card, methods and deliverables.
                    </p>
                  </div>
                  <span className="callout-count">
                    {filteredInternships.length} MATCHING ITEMS
                  </span>
                </div>
                <DomainFilters value={domain} onChange={setDomain} />
                <div className="experience-grid">
                  {filteredInternships.map((item, i) => (
                    <motion.article
                      layout
                      className="experience-card"
                      key={item.company}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <div className="experience-card-top">
                        <span className="exp-icon">
                          {item.domain === "Cybersecurity" ? (
                            <ShieldCheck />
                          ) : item.domain === "AI / ML" ? (
                            <BrainCircuit />
                          ) : (
                            <BarChart3 />
                          )}
                        </span>
                        <span className="domain-tag">{item.domain}</span>
                      </div>
                      <div className="exp-duration">
                        {item.duration} <i>·</i> {item.kind}
                      </div>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                      <p>{item.summary}</p>
                      <div className="skill-chip-list">
                        {item.skills.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                      <div className="related-projects">
                        <span className="micro-label">
                          RELATED PROJECTS / WORK
                        </span>
                        {item.projects.map((t) => (
                          <button key={t} onClick={() => openProject(t)}>
                            {t}
                            <ArrowUpRight size={14} />
                          </button>
                        ))}
                      </div>
                      <div className="certificate-row">
                        <Award size={17} />
                        <div>
                          <strong>{item.certificate}</strong>
                          <small>{item.proof}</small>
                        </div>
                        <span className="verify-pending">ADD PROOF</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
                <div className="domain-projects">
                  <div className="domain-projects-heading">
                    <div>
                      <span className="section-kicker">
                        PROJECTS MATCHING THIS FILTER
                      </span>
                      <h3>
                        Work connected to{" "}
                        {domain === "All" ? "your domains" : domain}.
                      </h3>
                    </div>
                    <span className="micro-label">OPEN A REPORT CARD ↗</span>
                  </div>
                  <div className="domain-project-list">
                    {projects
                      .filter(
                        (p) =>
                          domain === "All" ||
                          p.domain === domain ||
                          (domain === "Data Science" &&
                            p.domain === "Analytics") ||
                          (domain === "Analytics" &&
                            p.domain === "Data Science"),
                      )
                      .slice(0, 6)
                      .map((p) => (
                        <button key={p.title} onClick={() => setSelected(p)}>
                          <span className="domain-project-icon">
                            {p.domain === "Cybersecurity" ? (
                              <ShieldCheck />
                            ) : p.domain === "AI / ML" ? (
                              <BrainCircuit />
                            ) : p.domain === "Frontend" ? (
                              <Code2 />
                            ) : (
                              <BarChart3 />
                            )}
                          </span>
                          <span>
                            <strong>{p.title}</strong>
                            <small>
                              {p.domain} · {p.status}
                            </small>
                          </span>
                          <ArrowUpRight size={16} />
                        </button>
                      ))}
                  </div>
                  {domain === "Frontend" && (
                    <p className="small-note">
                      Frontend-tagged work is shown as project/concept work, not
                      as an internship. Add implementation evidence and
                      repository links when available.
                    </p>
                  )}
                </div>
                <div className="honesty-banner">
                  <CheckCircle2 />
                  <p>
                    <strong>Honest portfolio rule:</strong> internships and
                    programs are included from the information you've shared.
                    Add certificate files, exact dates and verified links; no
                    credential URL is fabricated here.
                  </p>
                </div>
              </section>
            )}
            {page === "skills" && (
              <section className="wrap page-content">
                <PageHeading
                  index="03"
                  title="Tools of the trade."
                  sub="A growing toolkit across interface development, data, machine learning and defensive security."
                />
                <div className="skills-intro">
                  <div className="skills-intro-mark">
                    <Sparkles />
                  </div>
                  <div>
                    <span className="section-kicker">
                      LEARN · APPLY · IMPROVE
                    </span>
                    <h2>
                      Skills are a practice, <em>not a badge.</em>
                    </h2>
                    <p>
                      Use the category switcher to explore the stack. The items
                      below are a skills inventory, not claims of expert-level
                      proficiency.
                    </p>
                  </div>
                </div>
                <div className="skill-tabs">
                  {skillGroups.map((g) => (
                    <button
                      key={g.title}
                      className={skillTab === g.title ? "skill-tab active" : "skill-tab inactive"}
                      onClick={() => setSkillTab(g.title)}
                    >
                      {<g.icon size={17} />}
                      <span>{g.title}</span>
                      <ChevronRight size={15} />
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillTab}
                    className="skill-panel"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <div className="skill-panel-heading">
                      <div>
                        <span className="section-kicker">SELECTED STACK</span>
                        <h3>{skillTab}</h3>
                        <p>
                          {skillGroups.find((g) => g.title === skillTab)?.desc}
                        </p>
                      </div>
                      <div className="skill-orb">
                        <Layers3 />
                      </div>
                    </div>
                    <div className="skill-grid">
                      {skillGroups
                        .find((g) => g.title === skillTab)
                        ?.skills.map((s, i) => (
                          <motion.div
                            className="skill-tile"
                            key={s}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.035 }}
                          >
                            <span className="skill-tile-index">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <strong>{s}</strong>
                            <span className="skill-tile-dot" />
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="security-note">
                  <Terminal />
                  <p>
                    <strong>Cybersecurity focus:</strong> networking, Linux, web
                    security fundamentals, phishing awareness, safe lab practice
                    and log analysis are good next areas to deepen. Only list
                    tools you have actually used hands-on.
                  </p>
                </div>
              </section>
            )}
            {page === "projects" && (
              <section className="wrap page-content">
                <PageHeading
                  index="04"
                  title="Selected projects."
                  sub="A practical mix of internship work, capstone development, analysis, application concepts and ML practice."
                />
                <div className="project-toolbar">
                  <DomainFilters value={domain} onChange={setDomain} />
                  <label className="project-search">
                    <Search size={16} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search projects or tools…"
                    />
                  </label>
                </div>
                <div className="project-count">
                  SHOWING <strong>{filteredProjects.length}</strong> PROJECTS{" "}
                  <span>· Select any card for its project report card.</span>
                </div>
                <div className="project-grid">
                  {filteredProjects.map((p, i) => (
                    <motion.button
                      layout
                      className="project-card"
                      key={p.title}
                      onClick={() => setSelected(p)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.035, 0.25) }}
                    >
                      <div className={`project-art art-${i % 4}`}>
                        <span className="project-art-code">
                          {
                            [
                              "01 / MODEL",
                              "02 / INSIGHT",
                              "03 / PIPELINE",
                              "04 / SIGNAL",
                            ][i % 4]
                          }
                        </span>
                        <div className="project-art-symbol">
                          {p.domain === "Cybersecurity" ? (
                            <ShieldCheck />
                          ) : p.domain === "AI / ML" ? (
                            <BrainCircuit />
                          ) : p.domain === "Frontend" ? (
                            <Code2 />
                          ) : (
                            <BarChart3 />
                          )}
                        </div>
                        <span className="project-art-domain">{p.domain}</span>
                      </div>
                      <div className="project-card-body">
                        <div className="project-meta">
                          <span>{p.type}</span>
                          <span className="project-status-dot">{p.status}</span>
                        </div>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="skill-chip-list">
                          {p.stack.slice(0, 4).map((s) => (
                            <span key={s}>{s}</span>
                          ))}
                        </div>
                        <div className="project-open">
                          Open project report card <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="project-footnote">
                  <Workflow />
                  <p>
                    Some entries are marked as ideas, concepts, practice work or
                    in progress. Keep that status visible until the
                    implementation and results are ready to show.
                  </p>
                </div>
              </section>
            )}
            {page === "contact" && (
              <section className="wrap page-content contact-page">
                <PageHeading
                  index="05"
                  title="Let's build something useful."
                  sub="Open to relevant internships, entry-level roles, collaborative projects and thoughtful technical conversations."
                />
                <div className="contact-layout">
                  <div className="contact-card">
                    <span className="section-kicker">GET IN TOUCH</span>
                    <h2>
                      Have a problem worth <em>figuring out?</em>
                    </h2>
                    <p>
                      I'm especially interested in machine learning, data
                      science, analytics and cybersecurity opportunities where I
                      can keep learning and contribute to real work.
                    </p>
                    <a
                      className="button button-primary"
                      href="mailto:your.email@example.com"
                    >
                      Email me <Mail size={16} />
                    </a>
                    <small>
                      Replace this placeholder with your professional email
                      before publishing.
                    </small>
                  </div>
                  <div className="contact-links">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin />
                      <span>
                        <strong>LinkedIn</strong>
                        <small>
                          Professional profile · replace with your URL
                        </small>
                      </span>
                      <ArrowUpRight />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github />
                      <span>
                        <strong>GitHub</strong>
                        <small>Code and project repositories</small>
                      </span>
                      <ArrowUpRight />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram />
                      <span>
                        <strong>Instagram</strong>
                        <small>Personal / creator profile</small>
                      </span>
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="site-footer wrap">
        <button className="wordmark footer-mark" onClick={() => go("home")}>
          <span className="logo-box">
            v<span>.</span>
          </span>
          <span>
            VISHESH <small>PORTFOLIO / 2026</small>
          </span>
        </button>
        <span>
          Made with curiosity <i>✳</i> and room to grow.
        </span>
        <button onClick={() => go("home")}>BACK TO TOP ↑</button>
      </footer>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} report card`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top">
                <span className="section-kicker">
                  PROJECT REPORT CARD / {selected.domain.toUpperCase()}
                </span>
                <button
                  className="icon-button"
                  onClick={() => setSelected(null)}
                  aria-label="Close report"
                >
                  <X />
                </button>
              </div>
              <div className="modal-heading">
                <div>
                  <span className="domain-tag">{selected.type}</span>
                  <h2>{selected.title}</h2>
                  <p>{selected.description}</p>
                </div>
                <div className="modal-symbol">
                  <BookOpen />
                </div>
              </div>
              <div className="report-summary">
                <span className="micro-label">STATUS</span>
                <strong>{selected.status}</strong>
                <span className="micro-label">OUTCOME / CURRENT RECORD</span>
                <p>{selected.outcome}</p>
              </div>
              <div className="report-details">
                <h3>Project overview</h3>
                {selected.report.map((line, i) => (
                  <div className="report-line" key={line}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <p>{line}</p>
                  </div>
                ))}
              </div>
              <div className="report-stack">
                <span className="micro-label">TECH STACK</span>
                <div className="skill-chip-list">
                  {selected.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="modal-links">
                <a
                  href={selected.repo === "#" ? "#" : selected.repo}
                  onClick={(e) => {
                    if (selected.repo === "#") {
                      e.preventDefault();
                      alert(
                        "Replace this placeholder with your real GitHub repository URL in src/App.tsx.",
                      );
                    }
                  }}
                  target={selected.repo === "#" ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub repository{" "}
                  <ExternalLink size={14} />
                </a>
                <a
                  href={selected.live === "#" ? "#" : selected.live}
                  onClick={(e) => {
                    if (selected.live === "#") {
                      e.preventDefault();
                      alert(
                        "Replace this placeholder with your deployed project URL in src/App.tsx.",
                      );
                    }
                  }}
                  target={selected.live === "#" ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink size={16} /> Live project{" "}
                  <ArrowUpRight size={14} />
                </a>
              </div>
              <p className="modal-disclaimer">
                Links are placeholders until you add real URLs. Results and
                implementation details should be verified against the final
                code/report.
              </p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function PageHeading({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="page-heading">
      <div className="section-kicker">{index} — VISHESH / PORTFOLIO</div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  );
}
function DomainFilters({
  value,
  onChange,
}: {
  value: Domain;
  onChange: (d: Domain) => void;
}) {
  return (
    <div className="domain-filters" aria-label="Filter by domain">
      {domains.map((d) => (
        <button
          key={d}
          className={value === d ? "filter-pill active" : "filter-pill"}
          onClick={() => onChange(d)}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
export default App;
