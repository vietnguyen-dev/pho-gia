# Pho Gia Milwaukie

Website for Pho Gia Milwaukie, a Vietnamese restaurant located in Milwaukie, Oregon. The site serves as the restaurant's online presence — featuring the full menu, restaurant story, FAQ, and contact information.

## Development

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, React, and Tailwind CSS v4. Menu data is stored in a MySQL database and fetched at runtime via internal API routes. The database connection uses SSL with a CA certificate retrieved from AWS Systems Manager Parameter Store.

### Getting Started

1. Copy `.env` and fill in your database and AWS credentials.
2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

### Stack

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS v4**
- **MySQL** via `mysql2/promise` with SSL
- **AWS SSM Parameter Store** for SSL certificate storage
