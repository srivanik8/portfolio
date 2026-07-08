# Srivani Konda — Portfolio

A personal portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

**Live site:** [srivanik8.github.io/portfolio-](https://srivanik8.github.io/portfolio-/)

## Design

A warm, editorial look — cream/paper background, a serif display face for
headlines, and a rust/terracotta accent color, with a full light and dark
mode toggle. Sections: Hero, About, Work, Projects, Skills, and Contact,
each linking out through real GitHub, LinkedIn, and email icons.

- **Type**: Fraunces (display) + Inter (body)
- **Palette**: warm paper/ink neutrals with a rust accent (light), inverted to a deep warm charcoal (dark)

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Development

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint      # oxlint
\`\`\`

## Editing content

All resume content lives in `src/data.ts` — profile, education, experience,
projects, skills, accomplishments and certifications. Update your details
there; no need to touch the components for content-only changes.

## Deployment

Deployed automatically to **GitHub Pages** via GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` triggers a fresh
build and deploy — no manual steps required.

- `vite.config.ts` sets `base: '/portfolio-/'` to match the GitHub Pages
  project-site path (`username.github.io/repo-name/`). Update this if the
  repo is ever renamed.
- Pages source is set to **GitHub Actions** under
  `Settings → Pages → Build and deployment`.

## Project structure

\`\`\`
src/
  App.tsx                    # page layout and sections
  data.ts                    # all resume/profile content
  index.css                  # theme tokens (light/dark CSS variables)
  components/
    SectionLabel.tsx         # small uppercase section headers
\`\`\`

## Contact

- GitHub: [github.com/srivanik8](https://github.com/srivanik8)
- LinkedIn: [linkedin.com/in/srivani-konda](https://linkedin.com/in/srivani-konda)
- Email: imkondasrivani@gmail.com