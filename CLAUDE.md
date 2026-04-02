# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Restaurant website for Pho Gia Milwaukie, a Vietnamese restaurant. Built with Next.js (App Router), TypeScript, React, and Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

**App Router layout** — all pages live under `app/`:

- `app/layout.tsx` — Root layout wrapping every page with `Header` and `Footer`
- `app/page.tsx` — Homepage (hero, featured dishes, about preview)
- `app/menu/page.tsx` + `app/menu/menu-client.tsx` — Menu page; split into a server wrapper and a client component that handles search, category filtering, and localStorage persistence
- `app/about/page.tsx` — Restaurant story and values
- `app/faq/page.tsx` — Accordion FAQ sections
- `app/components/Header.tsx` — Fixed nav with mobile hamburger toggle
- `app/components/Footer.tsx` — Contact info, hours, Google Maps address link
- `app/data/menu.ts` — Single source of truth for all menu items (name, description, price, variants, dietary flags like `V` / `GF`, category)

**Styling** — Tailwind CSS v4 with `@theme` inline syntax. Brand color `#6a3940` (burgundy) is defined as a CSS custom property in `app/globals.css` and referenced throughout.

**Path alias** — `@/*` resolves to the repo root (configured in `tsconfig.json`).
