# JMS Plumbing Services

Website for JMS Plumbing Services LLC — a licensed and insured plumbing company based in Sunrise, FL serving Broward, Miami-Dade, and Palm Beach Counties.

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Backend:** Supabase (form submissions) + Formspree
- **i18n:** Custom EN/ES localization context

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nikkielectric/jmsplumbingservices.git
   cd jmsplumbingservices
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables file and fill in your values:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build (also regenerates sitemap) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level page components
├── hooks/          # Custom React hooks
├── i18n/           # EN/ES language context + translations
├── lib/            # Utilities (formspree client)
├── data/           # Service page content (EN + ES)
├── integrations/   # Supabase client
└── assets/         # Images and static assets

supabase/
├── functions/      # Edge functions (send-form-email)
└── migrations/     # Database migrations

public/
├── gallery/        # Gallery images
├── sitemap.xml     # Auto-generated on build
└── robots.txt
```

## Environment Variables

See `.env.example` for required variables. These are Supabase anon (public) keys and are safe to expose client-side.

## Deployment

Build the project with:

```bash
npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, etc.). The sitemap is automatically regenerated on each build.

For Supabase edge functions:

```bash
supabase functions deploy send-form-email
```
