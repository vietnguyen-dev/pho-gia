# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Restaurant website for Pho Gia Milwaukie, a Vietnamese restaurant. Built with Next.js (App Router), TypeScript, React, and Tailwind CSS v4. Menu data is stored in a MySQL database and fetched at runtime.

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
- `app/menu/page.tsx` + `app/menu/menu-client.tsx` — Menu page; server wrapper fetches data from the DB, client component handles search and category filtering
- `app/about/page.tsx` — Restaurant story and values
- `app/faq/page.tsx` — Accordion FAQ sections
- `app/components/Header.tsx` — Fixed nav with mobile hamburger toggle
- `app/components/Footer.tsx` — Contact info, hours, Google Maps address link

**API routes** — under `app/api/`:

- `GET /api/items` — Returns all menu items from the `vw_items` database view
- `GET /api/sections` — Returns all menu sections from the `vw_sections` database view

**Database** — `app/lib/db.ts` exports `getConnection()` which creates a `mysql2/promise` connection with SSL. The SSL CA certificate is fetched from AWS SSM Parameter Store and cached in memory. Required DB and AWS credentials are configured via environment variables in `.env`.

**Styling** — Tailwind CSS v4 with `@theme` inline syntax. Brand color `#6a3940` (burgundy) is defined as a CSS custom property in `app/globals.css` and referenced throughout.

**Path alias** — `@/*` resolves to the repo root (configured in `tsconfig.json`).
