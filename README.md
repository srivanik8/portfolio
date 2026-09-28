# Srivani Konda — Portfolio

A personal portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

**Live site:** [srivanik8.github.io/portfolio](https://srivanik8.github.io/portfolio/)

## Design

A warm, editorial look — cream/paper background, a serif display face for
headlines, and a rust/terracotta accent color, with a full light and dark
mode toggle. Four pages behind a single nav — Home, Projects, Skills and
About — each linking out through real GitHub, LinkedIn, email and resume icons.

- **Type**: Cormorant Garamond (display) + Newsreader (pull quotes) + Satoshi (body)
- **Palette**: warm paper/ink neutrals with a rust accent (light), inverted to a deep warm charcoal (dark)

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Editing content

The rendered content — projects, skills, experience, education, awards and
certifications — lives in `src/App.tsx`, in the plain arrays just above the
components. **Edit those to change what the site shows.**

Order matters: the Home page features the first three entries of `projects`,
and the Projects page renders the whole array in order — so moving a project
to the top of that array is what gives it top billing in both places.

`src/data.ts` holds the same content in a longer-form shape (and is the one
place the full project write-ups live), but nothing imports it yet, so editing
it alone will not change the site. Keep the two in step until they are merged.

## Deployment

Deployed automatically to **GitHub Pages** via GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` triggers a fresh
build and deploy — no manual steps required. Work on any other branch will
not appear on the live site until it is merged into `main`.

- `vite.config.ts` sets `base: '/portfolio/'` to match the GitHub Pages
  project-site path (`username.github.io/repo-name/`). Update this if the
  repo is ever renamed.
- Pages source is set to **GitHub Actions** under
  `Settings → Pages → Build and deployment`.

## Project structure

```
src/
  main.tsx                   # entry point — mounts App
  App.tsx                    # every page, plus the content arrays they render
  data.ts                    # long-form copy of the same content (not imported yet)
  index.css                  # base styles and Tailwind theme tokens
  components/
    SectionLabel.tsx         # small uppercase section headers (unused)
    SignalHero.tsx           # earlier hero treatment (unused)
```

## Contact

- GitHub: [github.com/srivanik8](https://github.com/srivanik8)
- LinkedIn: [linkedin.com/in/srivani-konda](https://linkedin.com/in/srivani-konda)
- Email: imkondasrivani@gmail.com
