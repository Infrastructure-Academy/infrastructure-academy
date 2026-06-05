# Infrastructure Academy — Monorepo

**iAAi COUNTERFORCE Platform** — 5 interconnected applications serving the Infrastructure Academy ecosystem.

## Architecture

```
infrastructure-academy/
├── apps/
│   ├── academy/       → Main site (infrastructure-academy.com)
│   ├── memorial/      → In Loving Memory & The Quotient Equation
│   ├── quest/         → The Reality Engine (Guided Learning Platform)
│   ├── xchange/       → Knowledge Exchange & Community
│   └── news/          → X Growth Race Tracker (Chart Room)
├── packages/
│   ├── ui/            → Shared components (NetworkBar, LanguageSwitcher)
│   ├── config/        → Domain mappings, constants, network links
│   └── utils/         → i18n helpers, date formatting, locale detection
├── database/          → Shared Drizzle schema (MySQL/PlanetScale)
├── scripts/           → Migration, export, deployment scripts
└── .devcontainer/     → GitHub Codespaces configuration
```

## Quick Start (GitHub Codespaces)

1. Click **Code** → **Codespaces** → **Create Codespace on main**
2. Wait for environment to build (~2 minutes first time)
3. Run any app: `pnpm dev:memorial` or `pnpm dev:academy`

## Quick Start (Local)

```bash
pnpm install
pnpm dev:memorial    # Starts memorial on port 3000
pnpm dev:academy     # Starts academy on port 3001
```

## Deployment (Vercel)

Each app deploys independently via Vercel:

```bash
cd apps/memorial && vercel deploy --prod
cd apps/academy && vercel deploy --prod
```

Or deploy all: `pnpm deploy:all`

## Domain Mapping

| App | Production Domain | Status |
|-----|-------------------|--------|
| Academy | www.infrastructure-academy.com | Active |
| Memorial | memorial.infrastructure-academy.com | Pending DNS |
| Quest | quest.infrastructure-academy.com | Pending DNS |
| xChange | xchange.infrastructure-academy.com | Pending DNS |
| News | news.infrastructure-academy.com | Pending DNS |

## Environment Variables

Each app requires a `.env.local` file. See `apps/<name>/.env.example` for required variables.

Shared variables (set in Vercel project settings):
- `DATABASE_URL` — MySQL connection string (PlanetScale/TiDB)
- `JWT_SECRET` — Session signing key
- `VITE_APP_ID` — OAuth application ID

## Tech Stack

- **Runtime:** Node 20 + TypeScript 5.9
- **Frontend:** React 19 + Tailwind CSS 4 + shadcn/ui
- **Backend:** Express + tRPC 11
- **Database:** Drizzle ORM + MySQL (PlanetScale free tier)
- **Auth:** Clerk (free tier, replaces Manus OAuth)
- **Storage:** Cloudflare R2 (free 10GB)
- **Hosting:** Vercel (free tier)
- **Dev:** GitHub Codespaces + Turborepo

## Author

Ir. Nigel T. Dearden CEng MICE
@dearden_n37258

---

*Per Arya Ad Astra*
