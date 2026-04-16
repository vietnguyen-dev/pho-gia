# AGENTS.md

Guidance for coding agents working in this repository.

## Project Context

Pho Gia Milwaukie is a restaurant website for a Vietnamese restaurant in Milwaukie, Oregon. The app is built with Next.js App Router, TypeScript, React, and Tailwind CSS v4.

Menu data is fetched at runtime from a MySQL database through internal API routes. Database SSL uses a CA certificate retrieved from AWS Systems Manager Parameter Store.

## Commands

```bash
npm run dev      # Start the development server at http://localhost:3000
npm run build    # Create a production build
npm run start    # Run the production build
npm run lint     # Run ESLint
```

Run `npm run lint` after code changes when practical. Run `npm run build` for changes that affect routing, server/client boundaries, API routes, database access, or framework configuration.

## Architecture

- `app/layout.tsx` defines the root layout and wraps pages with `Header` and `Footer`.
- `app/page.tsx` is the homepage.
- `app/about/page.tsx` contains the restaurant story.
- `app/faq/page.tsx` contains FAQ accordion content.
- `app/menu/page.tsx` is the server wrapper for the menu page.
- `app/menu/menu-client.tsx` handles menu search and category filtering on the client.
- `app/components/Header.tsx` contains the fixed navigation and mobile menu.
- `app/components/Footer.tsx` contains contact info, hours, and the Google Maps address link.
- `app/api/items/route.ts` returns menu items from the `vw_items` database view.
- `app/api/sections/route.ts` returns menu sections from the `vw_sections` database view.
- `app/lib/db.ts` owns MySQL connection setup, SSL configuration, AWS SSM access, and in-memory CA certificate caching.

The `@/*` path alias resolves to the repository root.

## Styling

- Use Tailwind CSS v4 patterns already present in the app.
- Keep brand usage aligned with `app/globals.css`; the main brand color is burgundy `#6a3940`.
- Preserve the existing restaurant-site tone: warm, direct, readable, and mobile-friendly.
- Avoid broad redesigns unless the task explicitly asks for them.
- Keep fixed/header spacing and responsive behavior in mind when changing page layouts.

## Data And Environment

- Menu pages and API routes depend on MySQL and AWS credentials in `.env`.
- Do not hard-code secrets, database credentials, certificates, or AWS values.
- Treat `app/lib/db.ts` as the central place for database connection behavior.
- If local database credentials are unavailable, still run lint/type/build checks that do not require live DB access, and clearly note any verification gap.

## Working Guidelines

- Prefer small, focused changes that match the existing file structure.
- Use server components by default in `app/`; add `"use client"` only for interactive state, browser APIs, or event handlers.
- Keep API route responses stable unless the task explicitly changes the contract.
- Reuse existing components and styling conventions before introducing new abstractions.
- Put static image assets in `public/` and reference them with root-relative paths.
- Do not overwrite unrelated work in the tree.

## Verification

Before finishing, choose the checks that match the change:

- Content or styling only: `npm run lint`.
- Routing, server/client boundaries, or config: `npm run lint` and `npm run build`.
- Database or API behavior: inspect the relevant route and run build/lint; if credentials are available, test the endpoint through the dev server.

When reporting back, mention which checks ran and any checks that could not be run.
