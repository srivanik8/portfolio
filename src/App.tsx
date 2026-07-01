import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
type Page = "home" | "projects" | "skills" | "about";
type Theme = "light" | "dark";

// ── Theme tokens ───────────────────────────────────────────────────────────────
const themes = {
  light: {
    "--bg": "#f0ece0",
    "--surface": "#ece7db",
    "--surface-strong": "#e6e0d2",
    "--fg": "#1a232c",
    "--ink": "#0f1820",
    "--muted": "#5a6472",
    "--accent": "#9b4a3c",
    "--accent-soft": "rgba(155,74,60,0.10)",
    "--border": "rgba(15,24,32,0.16)",
    "--border-soft": "rgba(15,24,32,0.09)",
  },
  dark: {
    "--bg": "#0f1419",
    "--surface": "#161c23",
    "--surface-strong": "#1c232c",
    "--fg": "#c5c5c5",
    "--ink": "#e2ddd3",
    "--muted": "#9a948b",
    "--accent": "#d19478",
    "--accent-soft": "rgba(209,148,120,0.12)",
    "--border": "rgba(212,207,197,0.16)",
    "--border-soft": "rgba(212,207,197,0.09)",
  },
} as const;

// ── Data ───────────────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Algorithmic Trading using RL",
    stack: ["PyTorch", "Gymnasium", "Transformers", "NLTK", "Pandas"],
    short: "PPO, DQN & A2C agents trading under simulated markets at 92% strategy accuracy — with a sentiment pipeline feeding the signal. Peer-reviewed.",
    description: "Trained PPO, DQN and A2C agents to trade under simulated market conditions, reaching 92% strategy accuracy. Built a sentiment pipeline on top — Transformers and NLTK reading financial news to feed signal into the agents' decisions. Published in a peer-reviewed journal.",
    linkLabel: "Read the paper",
    url: "https://ijsrem.com/download/algorithmic-trading-using-machine-learning",
  },
  {
    name: "EMR Analysis & Disease Prediction",
    stack: ["Python", "Streamlit", "Gemini API", "Scikit-learn"],
    short: "A diagnostic system pairing Scikit-learn on structured symptoms with Gemini reading unstructured EMRs. 87% accuracy, deployed live.",
    description: "End-to-end diagnostic system: Scikit-learn on structured symptom data, Gemini reading unstructured EMRs and lab reports. RAG-style reasoning that maps free-text medical documents to structured outputs. 87% classification accuracy, deployed live.",
    linkLabel: "View on GitHub",
    url: "https://github.com/srivanik8/disease_prediction",
  },
  {
    name: "FunLearn",
    stack: ["Gemini", "React.js", "Whisper", "Vercel"],
    short: "Gemini generates adaptive quizzes; Whisper TTS turns the same material into on-demand podcasts. Built and shipped solo.",
    description: "Gemini generates adaptive quizzes from source material; Whisper TTS converts the same content into on-demand podcasts. Built and shipped solo, concept through deployment.",
    linkLabel: "Live demo",
    url: "https://fun-learn-nine.vercel.app",
  },
  {
    name: "QuickQuery",
    stack: ["MERN", "LangChain.js", "Gemini", "MongoDB"],
    short: "Plain English into correct MongoDB queries in Python or JS, orchestrated by LangChain.js — plus a saved-query library.",
    description: "MongoDB query assistant that converts plain English into correct queries in Python or JavaScript. LangChain.js orchestrates Gemini under the hood. Includes QuickSnippet — a saved-query library for revisiting generated queries.",
    linkLabel: "View on GitHub",
    url: "https://github.com/srivanik8/QuickQuery",
  },
  {
    name: "Vishayamitra",
    stack: ["Python", "Streamlit", "PandasAI"],
    short: "A conversational data assistant — Streamlit front end, PandasAI natural-language querying over tabular data. Built as a team.",
    description: "Conversational data assistant built as a team — Streamlit front end, PandasAI-driven natural language querying over tabular data. Contributed to the data-querying and bot logic.",
    linkLabel: "View on GitHub",
    url: "https://github.com/srivanik8/vishayamitra",
  },
];

const skills = [
  { label: "ML / AI", items: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "RL (PPO, DQN, A2C)", "Gymnasium"] },
  { label: "LLMs & GenAI", items: ["Gemini API", "Claude API", "GPT", "Prompt Engineering", "RAG Pipeline Design", "LangChain"] },
  { label: "NLP", items: ["Hugging Face (BERT, RoBERTa)", "NLTK", "Sentiment Analysis", "Document Classification"] },
  { label: "Data", items: ["Pandas", "NumPy", "SQL", "MongoDB", "DuckDB", "EDA"] },
  { label: "Deployment", items: ["Streamlit", "FastAPI", "Docker", "Git", "Vercel", "Azure"] },
  { label: "Visualisation", items: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"] },
  { label: "Other", items: ["React.js", "JavaScript", "OpenCV", "C / C++"] },
];

const experience = [
  {
    role: "Python Developer Intern — AI & Data",
    orgLine: "Intel Unnati · Remote",
    period: "Mar 2024 — Jul 2024",
    points: [
      "Analysed structured datasets with Python, Pandas and SQL to extract actionable insight for data-driven decisions.",
      "Built and evaluated end-to-end ML pipelines for classification tasks — feature engineering and model selection across structured data.",
      "Shipped interactive Streamlit dashboards so stakeholders could explore data and monitor metrics in real time.",
      "Produced visualisations in Matplotlib, Seaborn and Plotly to communicate model performance to non-technical audiences.",
    ],
  },
  {
    role: "Freelance AI-Assisted Web Developer",
    orgLine: "Enshire Ltd · India",
    period: "Dec 2024 — Mar 2025",
    points: [
      "Delivered end-to-end responsive web applications, translating business requirements into working software through iterative feedback loops.",
      "Improved UX through data-driven iteration, contributing to a 30% increase in customer satisfaction scores.",
    ],
  },
  {
    role: "Front End Developer Intern",
    orgLine: "Notify Ltd · Remote",
    period: "Oct 2023 — Dec 2023",
    points: ["Built 15+ dynamic UI components in React.js, increasing platform responsiveness by 80% across the production system."],
  },
];

const education = [
  { school: "University College Dublin", location: "Dublin, Ireland", degree: "MSc in Data and Computational Science", detail: "Grade: 2:1", period: "2025 — Present" },
  { school: "Sreenidhi Institute of Science and Technology", location: "Hyderabad, India", degree: "B.E. Computer Science (AI & ML)", detail: "GPA: 8.9 / 10", period: "2021 — 2025" },
];

const awards = [
  { title: "NodeBrew 2024 Hackathon", detail: "1st Place Overall + Best Accessibility & Inclusivity Award" },
  { title: "MLH TechTogether 2023", detail: "3rd Place Overall + Best Sustainability Hack" },
  { title: "MLH Waffle Hacks 2023", detail: "Best Use of MongoDB Atlas" },
];

const certs = [
  "Data Scientist Professional — DataCamp",
  "Intro to ML, Data Visualisation, Pandas, Data Cleaning — Kaggle",
  "Responsive Web Design — freeCodeCamp",
];

const socials = [
  { label: "GitHub", url: "https://github.com/srivanik8" },
  { label: "LinkedIn", url: "https://linkedin.com/in/srivani-konda" },
  { label: "Email", url: "mailto:imkondasrivani@gmail.com" },
];

// ── ProjectCard ────────────────────────────────────────────────────────────────
function ProjectCard({ p, full = false }: { p: typeof projects[0]; full?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: full ? "1.4rem 1.5rem 1.5rem" : "1.3rem 1.4rem 1.4rem",
        border: "1px solid var(--border)",
        borderRadius: "0.7rem",
        background: "var(--surface)",
        color: "var(--ink)",
        textDecoration: "none",
        boxShadow: hovered ? "0 14px 40px rgba(0,0,0,0.13)" : "0 4px 16px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderColor: hovered ? "var(--accent)" : "var(--border)",
        transition: "transform 240ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 240ms ease, border-color 200ms ease",
      }}
    >
      <span style={{ position: "absolute", top: full ? "1.2rem" : "1.1rem", right: full ? "1.2rem" : "1.1rem", fontSize: "0.95rem", color: "var(--muted)" }}>↗</span>
      <h3 style={{ margin: 0, paddingRight: "1.2rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: full ? "1.5rem" : "1.4rem", fontWeight: 700, lineHeight: 1.2, color: "var(--ink)" }}>{p.name}</h3>
      <p style={{ margin: full ? "0.15rem 0 0" : 0, fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.92rem", lineHeight: 1.62, color: "var(--fg)" }}>{full ? p.description : p.short}</p>
      {full && <p style={{ margin: "0.65rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)" }}>{p.linkLabel} →</p>}
      <p style={{ margin: full ? "0.55rem 0 0" : "0.4rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.76rem", letterSpacing: "0.02em", color: "var(--muted)" }}>{p.stack.join("  ·  ")}</p>
    </a>
  );
}

// ── Home page ──────────────────────────────────────────────────────────────────
function HomePage({ go }: { go: (p: Page) => void }) {
  const [linkHover, setLinkHover] = useState<string | null>(null);
  const [pillHover, setPillHover] = useState(false);
  return (
    <div>
      <header style={{ paddingTop: "1.2rem" }}>
        <p style={{ margin: "0 0 0.9rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>
          AI / ML Engineer · Dublin, Ireland
        </p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 6vw, 4.2rem)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.015em", color: "var(--ink)" }}>
          I build systems that learn from noisy data.
        </h1>
        <p style={{ margin: "1.4rem 0 0", maxWidth: "40rem", fontFamily: "'Newsreader', Georgia, serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.5, color: "var(--fg)" }}>
          Trading agents, diagnostic pipelines, and the GenAI plumbing in between — I'm most at home at the intersection of research and deployment.
        </p>
        <p style={{ margin: "1rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.95rem", color: "var(--muted)" }}>
          <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "9999px", background: "#4a9b6a", marginRight: 8, verticalAlign: "middle" }} />
          Open to work · Dublin · Cork · Remote
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.4rem", paddingTop: "1.5rem" }}>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setLinkHover(s.label)}
              onMouseLeave={() => setLinkHover(null)}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "1rem", color: linkHover === s.label ? "var(--accent)" : "var(--ink)", textDecoration: "none", transition: "color 160ms ease" }}>
              {s.label}<span style={{ fontSize: "0.85rem", color: "var(--accent)" }}>↗</span>
            </a>
          ))}
        </div>
      </header>

      {/* About */}
      <section style={{ paddingTop: "4rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>About</p>
        <p style={{ margin: 0, maxWidth: "46rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "1.12rem", lineHeight: 1.72, color: "var(--fg)" }}>
          I'm Srivani — a CS grad specialising in AI & ML, currently doing my MSc at UCD. I got into machine learning because I liked the idea of writing code that figures things out on its own, and that's still what drives most of what I build. Over the past couple of years I've shipped a reinforcement-learning trading system that got published, built a Gemini-powered diagnostic tool that's live on Streamlit, and put together a multimodal learning app from scratch. Reading papers on a Monday, pushing something to production by Friday.
        </p>
      </section>

      {/* Selected Work */}
      <section style={{ paddingTop: "4rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.25rem", marginBottom: "1.4rem", flexWrap: "wrap" }}>
          <div>
            <p style={{ margin: "0 0 0.35rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Selected Work</p>
            <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink)" }}>Things I've built</h2>
          </div>
          <button onClick={() => go("projects")}
            onMouseEnter={() => setPillHover(true)}
            onMouseLeave={() => setPillHover(false)}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", cursor: "pointer", border: "1px solid var(--border)", borderRadius: "9999px", background: pillHover ? "var(--accent-soft)" : "none", borderColor: pillHover ? "var(--accent)" : "var(--border)", color: "var(--ink)", padding: "0.45rem 0.95rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.9rem", fontWeight: 600, transition: "background-color 160ms ease, border-color 160ms ease", whiteSpace: "nowrap" }}>
            All projects ↗
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1rem" }}>
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </section>
    </div>
  );
}

// ── Projects page ──────────────────────────────────────────────────────────────
function ProjectsPage() {
  return (
    <div>
      <header style={{ maxWidth: "44rem", marginBottom: "2rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Projects</p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.015em", color: "var(--ink)" }}>Research that ships</h1>
        <p style={{ margin: "0.8rem 0 0", fontFamily: "'Newsreader', Georgia, serif", fontSize: "1.15rem", lineHeight: 1.5, color: "var(--muted)" }}>
          From a published RL trading system to a live diagnostic tool — the through-line is turning models into things people can actually use.
        </p>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {projects.map((p) => <ProjectCard key={p.name} p={p} full />)}
      </div>
    </div>
  );
}

// ── Skills page ────────────────────────────────────────────────────────────────
function SkillsPage() {
  return (
    <div>
      <header style={{ maxWidth: "44rem", marginBottom: "2.2rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Toolkit</p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.015em", color: "var(--ink)" }}>Skills & recognition</h1>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.6rem 2rem" }}>
        {skills.map((cat) => (
          <div key={cat.label}>
            <h3 style={{ margin: "0 0 0.7rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)" }}>{cat.label}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {cat.items.map((s) => (
                <span key={s} style={{ display: "inline-flex", padding: "0.32rem 0.7rem", border: "1px solid var(--border)", borderRadius: "9999px", background: "var(--surface)", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.82rem", color: "var(--fg)" }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: "var(--border-soft)", margin: "3rem 0 2.4rem" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2.4rem" }}>
        <div>
          <p style={{ margin: "0 0 1rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Awards</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {awards.map((a) => (
              <div key={a.title}>
                <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.25, color: "var(--ink)" }}>{a.title}</p>
                <p style={{ margin: "0.15rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.92rem", lineHeight: 1.5, color: "var(--muted)" }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ margin: "0 0 1rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Certifications</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {certs.map((c) => (
              <p key={c} style={{ margin: 0, fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.98rem", lineHeight: 1.5, color: "var(--fg)" }}>{c}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── About page ─────────────────────────────────────────────────────────────────
function AboutPage() {
  const [linkHover, setLinkHover] = useState<string | null>(null);
  return (
    <div>
      <header style={{ maxWidth: "44rem", marginBottom: "2.4rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>About</p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.015em", color: "var(--ink)" }}>The path so far</h1>
        <p style={{ margin: "0.8rem 0 0", fontFamily: "'Newsreader', Georgia, serif", fontSize: "1.15rem", lineHeight: 1.55, color: "var(--muted)" }}>
          A CS grad specialising in AI & ML, now on an MSc at UCD — building at the seam between research and production.
        </p>
      </header>

      {/* Experience */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ margin: "0 0 1.4rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "var(--ink)" }}>Experience</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experience.map((e) => (
            <div key={e.role} style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1.3rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)" }}>{e.role}</h3>
                <span style={{ fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.85rem", color: "var(--muted)", whiteSpace: "nowrap" }}>{e.period}</span>
              </div>
              <p style={{ margin: "0.2rem 0 0.7rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--accent)" }}>{e.orgLine}</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {e.points.map((pt) => (
                  <li key={pt} style={{ fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--fg)" }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ margin: "0 0 1.4rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "var(--ink)" }}>Education</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          {education.map((ed) => (
            <div key={ed.school} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", paddingBottom: "1.3rem", borderBottom: "1px solid var(--border-soft)" }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.2, color: "var(--ink)" }}>{ed.school}</h3>
                <p style={{ margin: "0.2rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.98rem", color: "var(--fg)" }}>{ed.degree}</p>
                <p style={{ margin: "0.1rem 0 0", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.9rem", color: "var(--muted)" }}>{ed.detail} · {ed.location}</p>
              </div>
              <span style={{ fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.85rem", color: "var(--muted)", whiteSpace: "nowrap" }}>{ed.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact card */}
      <section style={{ border: "1px solid var(--border)", borderRadius: "0.8rem", background: "var(--surface)", padding: "1.8rem 2rem" }}>
        <p style={{ margin: "0 0 0.4rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Get in touch</p>
        <h2 style={{ margin: "0 0 1rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "var(--ink)" }}>Let's build something.</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.4rem" }}>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setLinkHover(s.label)}
              onMouseLeave={() => setLinkHover(null)}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "1rem", color: linkHover === s.label ? "var(--accent)" : "var(--ink)", textDecoration: "none", transition: "color 160ms ease" }}>
              {s.label}<span style={{ fontSize: "0.85rem", color: "var(--accent)" }}>↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav({ page, go, theme, toggleTheme }: { page: Page; go: (p: Page) => void; theme: Theme; toggleTheme: () => void }) {
  const navItems: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "About", page: "about" },
  ];
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [toggleHov, setToggleHov] = useState(false);

  return (
    <>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "1.7rem 0 0.4rem", flexWrap: "wrap" }}>
        <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.55rem", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
          Srivani Konda
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "1.35rem" }}>
          {navItems.map((item) => (
            <button key={item.page} onClick={() => go(item.page)}
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.2rem 0", position: "relative", fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "1rem", color: hoveredNav === item.label ? "var(--ink)" : "var(--muted)", transition: "color 160ms ease" }}>
              {item.label}
              {page === item.page && <span style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: "1.5px", background: "var(--accent)" }} />}
            </button>
          ))}
          <button onClick={toggleTheme}
            onMouseEnter={() => setToggleHov(true)}
            onMouseLeave={() => setToggleHov(false)}
            aria-label="Toggle theme"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem", borderRadius: "9999px", cursor: "pointer", border: "1px solid var(--border)", background: "var(--accent-soft)", color: "var(--ink)", fontSize: "0.95rem", transition: "transform 160ms ease", transform: toggleHov ? "translateY(-1px)" : "none" }}>
            {theme === "light" ? "☾" : "☀"}
          </button>
        </div>
      </nav>
      <div style={{ height: 1, background: "var(--border-soft)", marginBottom: "2.6rem" }} />
    </>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<Theme>("dark");

  const go = (p: Page) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const t = themes[theme];
  const rootStyle = {
    ...t,
    minHeight: "100vh",
    background: "var(--bg)",
    color: "var(--fg)",
    fontFamily: "'Satoshi', system-ui, sans-serif",
    transition: "background-color 250ms ease, color 250ms ease",
  } as React.CSSProperties;

  return (
    <div style={rootStyle}>
      <div style={{ width: "min(100%, 960px)", margin: "0 auto", padding: "0 28px 96px" }}>
        <Nav page={page} go={go} theme={theme} toggleTheme={() => setTheme(t => t === "light" ? "dark" : "light")} />

        {page === "home" && <HomePage go={go} />}
        {page === "projects" && <ProjectsPage />}
        {page === "skills" && <SkillsPage />}
        {page === "about" && <AboutPage />}

        <footer style={{ marginTop: "5rem", paddingTop: "1.6rem", borderTop: "1px solid var(--border-soft)", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.85rem", color: "var(--muted)" }}>Srivani Konda · Dublin, Ireland</span>
          <span style={{ fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.85rem", color: "var(--muted)" }}>© 2026 · Designed with care</span>
        </footer>
      </div>
    </div>
  );
}