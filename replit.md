# JobJam Website

## Overview

JobJam is a single-page marketing website for a New Zealand-based online coaching service that helps jobseekers (primarily ages 16–24) land their first jobs. The site showcases coaching services, pricing plans, testimonials, FAQs, and contact information. It's built as a full-stack TypeScript application with a React frontend and Express backend, though the current functionality is primarily frontend-focused (static marketing site with no significant backend logic yet).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side router) — currently only two routes: Home (`/`) and a 404 catch-all
- **Styling:** Tailwind CSS with CSS custom properties for theming. Brand colors (deep navy, teal, golden yellow, off-white, light grey) are defined as CSS variables in `client/src/index.css`
- **UI Components:** shadcn/ui component library (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Fonts:** Google Fonts — Poppins (headings) and Inter (body), loaded via `<link>` in `client/index.html`
- **State Management:** React Query (`@tanstack/react-query`) for server state, React `useState` for local UI state
- **Build Tool:** Vite with React plugin, outputs to `dist/public`

### Page Structure
The site is a single-page layout (`client/src/pages/Home.tsx`) composed of these sections in order:
1. **Header** — Sticky navigation with logo and "Enrol now" CTA
2. **Hero** — Main headline, subheadline, and action buttons
3. **ValueSection** — Three benefit cards with icons
4. **PricingSection** — Three pricing tiers (Free chat, 8-Month Plan, 4-Month Fast Path)
5. **HowItWorks** — Three-step process visualization
6. **Testimonials** — Carousel of success stories
7. **FAQ** — Accordion-style frequently asked questions
8. **About** — Founder story with photo
9. **CTA** — Final call-to-action banner
10. **Contact** — Contact form
11. **Footer** — Links and copyright
12. **EnrollDialog** — Modal enrollment form (triggered by CTA buttons)
13. **CookieConsent** — Cookie consent banner

### Backend Architecture
- **Runtime:** Node.js with Express
- **Language:** TypeScript, compiled with `tsx` (dev) and `esbuild` (production)
- **Server entry:** `server/index.ts` — sets up Express middleware, registers routes, serves Vite in dev or static files in production
- **Routes:** `server/routes.ts` — currently no custom API routes defined; the structure is ready for `/api/*` endpoints
- **Storage:** `server/storage.ts` — uses an in-memory storage implementation (`MemStorage`) with a simple user CRUD interface. A PostgreSQL-backed implementation can replace it.

### Database Schema
- **ORM:** Drizzle ORM configured for PostgreSQL (`drizzle.config.ts`)
- **Schema location:** `shared/schema.ts`
- **Current tables:** Only a `users` table with `id` (UUID), `username`, and `password` fields
- **Validation:** Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Database provider:** Neon serverless PostgreSQL (`@neondatabase/serverless`), requires `DATABASE_URL` environment variable
- **Note:** The database is configured but not actively used — the app currently runs with in-memory storage

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/` (for images and static files)

### Content Management
Content (testimonials, pricing, FAQs, about text) is hardcoded in component files. The `CLIENT_TUTORIAL.md` documents which files to edit for each content type. There is no CMS — updates are made directly in the source code.

## External Dependencies

### Third-Party Services
- **Stripe:** `@stripe/react-stripe-js` and `@stripe/stripe-js` are installed but not actively integrated yet — likely intended for future payment processing
- **Neon Database:** `@neondatabase/serverless` for PostgreSQL connectivity (requires `DATABASE_URL` env var)
- **Google Fonts:** Poppins and Inter loaded from `fonts.googleapis.com`

### Key NPM Packages
- **UI:** Radix UI primitives (accordion, dialog, select, tabs, tooltip, etc.), Lucide React icons, class-variance-authority, tailwind-merge
- **Forms:** React Hook Form with `@hookform/resolvers` (Zod)
- **Data:** TanStack React Query, Drizzle ORM with drizzle-zod
- **Sessions:** `connect-pg-simple` for PostgreSQL session storage (installed but not configured)
- **Misc:** `wouter` (routing), `date-fns`, `embla-carousel-react`, `vaul` (drawer), `recharts`

### Development Tools
- **Vite** with `@vitejs/plugin-react`
- **Replit plugins:** `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`
- **Drizzle Kit** for database migrations (`db:push` script)
- **esbuild** for production server bundling