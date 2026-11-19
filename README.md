# Form Atlas — Web Design Gallery

**28 original, interactive landing pages** demonstrating different visual design languages. Browse, search, save favorites, preview responsive breakpoints, inspect tokens, and copy code examples.

**Source repository:** https://github.com/mmashharawi2021-cell/Gallery

## All 28 styles

| # | Style | # | Style |
|---|---|---|---|
| 01 | Glassmorphism | 15 | 3D Web Design |
| 02 | Neumorphism | 16 | Immersive Design |
| 03 | Claymorphism | 17 | Motion UI |
| 04 | Skeuomorphism | 18 | Parallax Scrolling |
| 05 | Flat Design | 19 | Scrollytelling |
| 06 | Material Design | 20 | Cinematic Design |
| 07 | Minimalism | 21 | Editorial Design |
| 08 | Brutalism | 22 | Typography-First |
| 09 | Neo-Brutalism | 23 | Futuristic UI |
| 10 | Bento Grid | 24 | Cyberpunk |
| 11 | Dark UI | 25 | Bauhaus Design |
| 12 | Gradient Design | 26 | Organic Design |
| 13 | Aurora UI | 27 | Isometric Design |
| 14 | Mesh Gradient | 28 | Interactive Landing Page |

## Running locally

Requires Node.js 20+ (22 recommended).

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. To validate and build:

```bash
npm test
npm run build
npm run preview
```

## Deployment

A GitHub Actions workflow at `.github/workflows/pages.yml` runs validation and a TypeScript/Vite production build on pushes to `main`, then deploys `dist` to GitHub Pages. In GitHub repository settings, enable **Pages → Build and deployment → Source: GitHub Actions** if Pages has not been configured. The resulting expected URL is `https://mmashharawi2021-cell.github.io/Gallery/` after a successful deployment.

Routes use the URL hash (for example `/#/styles/glassmorphism`), so refreshing a deep link works on static GitHub Pages without a server rewrite.

## Project structure

```text
src/
  App.tsx          Gallery, category filters, favorites, tabs, device preview, routes
  catalog.ts       28 styles and selected implementation excerpts
  PreviewArt.tsx   Individually created miniature artwork for each style
  Demos.tsx        28 standalone interactive React page components
  app.css          Main gallery design + 28 artwork compositions
  demos.css        Shared rules for all standalone pages
  demo-a.css       Styles 01–07
  demo-b.css       Styles 08–14
  demo-c.css       Styles 15–21
  demo-d.css       Styles 22–28
scripts/
  validate.mjs     No-dependency checks for complete catalogue coverage
.github/workflows/
  pages.yml        Test, build, deploy to Pages
```

## Features

- Original full-page demonstrations, not reused recolored templates
- Text search across names, tags and design descriptions
- 5 category filters, sorting, and favorite styles saved locally
- Interactive responsive preview in isolated iframes; mobile (390px), tablet (820px) and desktop
- Each design available as a standalone, shareable page
- Design color tokens and useful selected JSX/CSS excerpts, with copy controls
- Keyboard-accessible links/buttons, labeled controls and reduced-motion support
- Pure CSS illustrations where possible; no paid or copyrighted visual assets

## Important notes

All 28 sample brands and fictional product concepts were created as illustrative demos. Charts and numbers inside demo pages are placeholders, not operational statistics. No external design templates have been copied. Fonts are enhanced through an optional Google Fonts request and fall back to system fonts. The site requires no user registration and no backend.

## Technology

React 18, TypeScript, Vite 6, CSS, lucide-react, GitHub Actions and GitHub Pages.

MIT License © 2026.
