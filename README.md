# Srivani Konda — Portfolio

A personal portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

## Design

Dark "signal/noise" theme — a scatter of data points with an animated line that
sweeps in to fit them, echoing the throughline of the work itself: extracting
signal from noisy, unstructured data (RL trading agents, RAG pipelines,
multimodal GenAI apps).

- **Type**: Fraunces (display) + Inter (body) + JetBrains Mono (labels/data)
- **Palette**: ink background, paper text, signal-green accent, amber for secondary emphasis

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All resume content lives in `src/data.ts` — update your profile, experience,
projects, skills, accomplishments and certifications there. No need to touch
the components for content changes.

## Deploying to GitHub Pages

1. Set `base` in `vite.config.ts` to `/your-repo-name/` if deploying to
   `username.github.io/repo-name` (skip this if your repo is
   `username.github.io`).
2. `npm run build`
3. Push the `dist/` folder to a `gh-pages` branch, or use a GitHub Action
   (e.g. `actions/deploy-pages`).

