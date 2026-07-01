import { useState, useEffect, useRef } from "react";
import SectionLabel from "./components/SectionLabel";
import {
  profile,
  education,
  experience,
  projects,
  skills,
  accomplishments,
  certifications,
} from "./data";

// ── Coding animation ──────────────────────────────────────────────────────────
const CODE_LINES = [
  "class Engineer:",
  '    role = "Data Engineer"',
  '    based_in = "Dublin, IE"',
  "",
  "    stack = [",
  '        "PyTorch", "Gemini API",',
  '        "LangChain", "RAG"',
  "    ]",
  "",
  "    shipped = 2          # prototype → production",
  "    published = True     # RL + NLP research",
  "    hackathons_won = 7   ",
  "    open_to_work = True",
  "",
  "    def currently_building(self):",
  '        return "GenAI pipelines"',
  "",
  "srivani = Data_Engineer()",
];

function CodePanel() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);
  const lineInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    lineInterval.current = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= CODE_LINES.length) {
          clearInterval(lineInterval.current!);
          return v;
        }
        return v + 1;
      });
    }, 90);
    const cursorInterval = setInterval(() => setCursor((c) => !c), 500);
    return () => {
      clearInterval(lineInterval.current!);
      clearInterval(cursorInterval);
    };
  }, []);

  // Use inline style colors keyed to dark/light so there's zero flash on first render.
  // Tailwind class-based colors can flash briefly before CSS vars resolve.
  const getStyle = (line: string): React.CSSProperties => {
    if (line.startsWith("#"))
      return { color: "var(--color-paper-dim)", opacity: 0.55, fontStyle: "italic" };
    if (
      line.includes("def ") ||
      line.includes("class ") ||
      line.includes("for ") ||
      line.includes("if ") ||
      line.includes("return")
    )
      return { color: "var(--color-amber)" };
    if (line.includes("import") || line.includes("from"))
      return { color: "var(--color-signal)" };
    if (line.includes('"') || line.includes("'"))
      return { color: "#6db88a" }; // muted green for strings, works in both modes
    if (line.startsWith("    ") && line.includes("="))
      return { color: "var(--color-ink)" };
    if (line.trim() === "") return {};
    return { color: "var(--color-paper-dim)" };
  };

  return (
    <div className="hidden lg:flex absolute right-0 top-0 h-full w-[360px] items-center">
      {/* fade edge so panel blends into page background */}
      <div
        className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-paper), transparent)",
        }}
      />
      <div
        className="w-full rounded-xl border border-hairline p-5 font-mono text-[11px] leading-[1.7] shadow-sm"
        style={{ backgroundColor: "var(--color-ink-soft)" }}
      >
        {/* traffic lights */}
        <div
          className="flex items-center gap-1.5 mb-3 pb-2 border-b border-hairline"
        >
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-yellow-300" />
          <span className="h-2 w-2 rounded-full bg-green-300" />
          <span
            className="ml-2 text-[10px] tracking-wide"
            style={{ color: "var(--color-paper-dim)", opacity: 0.5 }}
          >
            srivani.py
          </span>
        </div>
        <div className="overflow-hidden">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="whitespace-pre" style={getStyle(line)}>
              {line === "" ? "\u00A0" : line}
            </div>
          ))}
          {visibleLines <= CODE_LINES.length && (
            <span
              className={`inline-block w-1.5 h-3 bg-signal align-middle ${
                cursor ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Dark mode context ─────────────────────────────────────────────────────────
import { createContext } from "react";
const DarkCtx = createContext(false);

// ── Nav ───────────────────────────────────────────────────────────────────────
const NAV = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          srivani<span className="text-signal">.</span>konda
        </a>
        <nav className="hidden gap-7 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-signal transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* dark/light toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-paper-dim hover:border-signal hover:text-signal transition-colors"
          >
            {dark ? (
              /* sun icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* moon icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs uppercase tracking-[0.18em] text-signal underline-offset-4 hover:underline sm:hidden"
          >
            contact
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Hero (first screen only — name + tagline + buttons) ───────────────────────
function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-6 flex flex-col justify-center min-h-[calc(100vh-57px)] overflow-hidden"
    >
      <CodePanel />

      <div className="relative z-10 max-w-lg">
        <h1 className="font-display text-[clamp(3rem,7vw,5.2rem)] font-medium leading-[0.96] tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-amber">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 text-base leading-relaxed text-paper-dim">
          {profile.tagline}
        </p>
        <div className="mt-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/8 px-3 py-1 font-mono text-xs text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {profile.availability}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-paper"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink hover:border-signal hover:text-signal"
          >
            Let's collaborate
          </a>
        </div>
      </div>
    </section>
  );
}

// ── About (visible after scroll) ──────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="00" label="// init" />
      <p className="max-w-2xl text-lg leading-relaxed text-paper-dim">
        {profile.summary}
      </p>
      <div className="mt-12 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2">
        {education.map((ed) => (
          <div key={ed.school}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              {ed.period}
            </p>
            <p className="mt-2 font-display text-lg text-ink">{ed.school}</p>
            <p className="text-sm text-paper-dim">{ed.degree}</p>
            <p className="font-mono text-xs text-paper-dim/60">
              {ed.detail} · {ed.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Work ──────────────────────────────────────────────────────────────────────
function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="01" label="// work" />
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.role}
            className="grid gap-4 border-b border-hairline/60 pb-8 last:border-none sm:grid-cols-[190px_1fr]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-amber">
                {job.period}
              </p>
              <p className="mt-1 text-xs text-paper-dim/60">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink">{job.role}</h3>
              <p className="mb-3 font-mono text-xs text-signal">{job.org}</p>
              <ul className="space-y-1.5">
                {job.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-paper-dim"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-hairline" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Projects (2 → 3 → 2 layout) ──────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-hairline bg-ink-soft p-5 flex flex-col gap-3">
      <h3 className="font-display text-lg text-ink leading-snug">
        {project.name}
      </h3>
      <p
        className={`text-sm leading-relaxed text-paper-dim flex-1 ${
          open ? "" : "line-clamp-3"
        }`}
      >
        {project.description}
      </p>
      {project.description.length > 160 && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="self-start font-mono text-xs text-signal hover:underline"
        >
          {open ? "less" : "more"}
        </button>
      )}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-hairline bg-paper px-2 py-0.5 font-mono text-[10px] text-paper-dim"
          >
            {s}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link.url}
          target="_blank"
          rel="noreferrer"
          className="self-start font-mono text-xs text-signal hover:underline"
        >
          {project.link.label} →
        </a>
      )}
    </div>
  );
}

function Projects() {
  // Layout: row1=2, row2=3, row3=2 (total 5 projects + overflow in row of 2)
  const row1 = projects.slice(0, 2);
  const row2 = projects.slice(2, 5);
  const row3 = projects.slice(5);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="02" label="// projects" />

      <div className="flex flex-col gap-4">
        {/* Row 1 — 2 cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {row1.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        {row2.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-3">
            {row2.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        )}

        {/* Row 3 — 2 cards (overflow) */}
        {row3.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {row3.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Stack ─────────────────────────────────────────────────────────────────────
function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="03" label="// stack" />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-hairline bg-ink-soft p-5 flex flex-col gap-3"
          >
            {/* category as small signal badge, no divider */}
            <span className="self-start rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] text-signal tracking-wide">
              {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-hairline bg-paper px-2.5 py-1 font-mono text-xs text-paper-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hackathons + Certifications side by side */}
      <div className="mt-12 grid gap-10 border-t border-hairline pt-12 sm:grid-cols-2">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-amber">
            Hackathons
          </p>
          <ul className="space-y-4">
            {accomplishments.map((a) => (
              <li key={a.title} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" />
                <div>
                  <p className="text-sm text-ink">{a.title}</p>
                  <p className="text-xs text-paper-dim mt-0.5">{a.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-amber">
            Certifications
          </p>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" />
                <p className="text-sm text-paper-dim">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="04" label="// contact" />
      <h2 className="max-w-xl font-display text-3xl leading-snug text-ink sm:text-4xl">
        Let's build something worth deploying.
      </h2>
      <p className="mt-3 text-sm text-paper-dim">
        Open to AI/ML, GenAI, and SWE roles in Dublin, Cork, or remote.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 items-center">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 font-mono text-xs text-ink hover:border-signal hover:text-signal transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
          </svg>
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 font-mono text-xs text-ink hover:border-signal hover:text-signal transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 font-mono text-xs text-ink hover:border-signal hover:text-signal transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between font-mono text-xs text-paper-dim/40">
        <span>© {new Date().getFullYear()} Srivani Konda</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);

  const darkVars = {
    backgroundColor: "#0f1210",
    "--color-ink": "#edeae2",
    "--color-paper": "#0f1210",
    "--color-paper-dim": "#8a8880",
    "--color-hairline": "#2a2f2c",
    "--color-ink-soft": "#161a17",
    "--color-signal": "#4ade80",
    "--color-amber": "#f59e0b",
  } as React.CSSProperties;

  const lightVars = {
    backgroundColor: "#faf9f6",
    "--color-ink": "#1c1f1d",
    "--color-paper": "#faf9f6",
    "--color-paper-dim": "#5d5b55",
    "--color-hairline": "#ddd9d0",
    "--color-ink-soft": "#f1efe9",
    "--color-signal": "#1f9d57",
    "--color-amber": "#b3791f",
  } as React.CSSProperties;

  return (
    <DarkCtx.Provider value={dark}>
      <div
        className="min-h-screen text-ink"
        style={dark ? darkVars : lightVars}
      >
        <Nav dark={dark} toggle={() => setDark((d) => !d)} />
        <Hero />
        <About />
        <Work />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </DarkCtx.Provider>
  );
}