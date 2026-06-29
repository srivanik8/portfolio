import { useState } from "react";
import SignalHero from "./components/SignalHero";
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

const NAV = [
  { href: "#summary", label: "summary" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-paper">
          srivani<span className="text-signal">.</span>konda
        </a>
        <nav className="hidden gap-7 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs uppercase tracking-[0.18em] text-signal underline-offset-4 hover:underline sm:hidden"
        >
          contact
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 pt-10"
    >
      <div className="relative h-[260px] w-full sm:h-[340px]">
        <SignalHero />
        <div className="relative z-10 flex h-full flex-col justify-end pb-2">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-amber">
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-tight text-paper">
            {profile.name}
          </h1>
        </div>
      </div>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper-dim sm:text-xl">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-signal px-6 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.03]"
        >
          View projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-hairline px-6 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-signal hover:text-signal"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section id="summary" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="00" label="Summary" />
      <p className="max-w-3xl font-display text-2xl font-normal leading-snug text-paper sm:text-3xl">
        {profile.summary}
      </p>

      <div className="mt-14 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2">
        {education.map((ed) => (
          <div key={ed.school}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              {ed.period}
            </p>
            <p className="mt-2 font-display text-lg text-paper">{ed.school}</p>
            <p className="text-sm text-paper-dim">{ed.degree}</p>
            <p className="font-mono text-xs text-paper-dim/70">
              {ed.detail} · {ed.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="01" label="Experience" />
      <div className="space-y-12">
        {experience.map((job) => (
          <div
            key={job.role}
            className="grid gap-4 border-b border-hairline/60 pb-10 last:border-none sm:grid-cols-[200px_1fr]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
                {job.period}
              </p>
              <p className="mt-1 text-sm text-paper-dim">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-paper">{job.role}</h3>
              <p className="mb-4 font-mono text-sm text-signal">{job.org}</p>
              <ul className="space-y-2">
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

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group rounded-2xl border border-hairline bg-ink-soft/40 p-7 transition-colors hover:border-signal/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
            {project.tag}
          </p>
          <h3 className="mt-2 font-display text-2xl text-paper">
            {project.name}
          </h3>
        </div>
        <span className="whitespace-nowrap rounded-full border border-signal/40 px-3 py-1 font-mono text-xs text-signal">
          {project.metric}
        </span>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed text-paper-dim ${
          open ? "" : "line-clamp-2"
        }`}
      >
        {project.description}
      </p>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-signal hover:underline"
      >
        {open ? "Show less" : "Read more"}
      </button>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-paper-dim"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="02" label="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="03" label="Skills" />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-hairline px-2.5 py-1 text-sm text-paper-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-hairline pt-10 sm:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-amber">
            Accomplishments
          </p>
          <ul className="space-y-3">
            {accomplishments.map((a) => (
              <li key={a.title}>
                <p className="text-sm text-paper">{a.title}</p>
                <p className="text-xs text-paper-dim">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-amber">
            Certifications
          </p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-paper-dim">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionLabel index="04" label="Contact" />
      <h2 className="max-w-2xl font-display text-3xl leading-snug text-paper sm:text-4xl">
        Looking for an AI/ML or GenAI engineer who ships. Let's talk.
      </h2>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-signal px-6 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.03]"
        >
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-hairline px-6 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-paper hover:border-signal hover:text-signal"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-hairline px-6 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-paper hover:border-signal hover:text-signal"
        >
          GitHub
        </a>
      </div>
      <p className="mt-12 font-mono text-xs text-paper-dim/60">
        {profile.phone} · {profile.location}
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-paper-dim/60 sm:flex-row">
        <span>© {new Date().getFullYear()} Srivani Konda</span>
        <span>Built with React + Tailwind</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
