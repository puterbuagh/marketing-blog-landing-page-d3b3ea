# Signalwire — Marketing Blog Landing Page

A polished marketing landing page for a content marketing blog, with a validated lead-capture form that writes directly into Supabase.

Built with **Next.js (App Router)**, **Tailwind CSS**, **Supabase**, and deployed on **Vercel**.

## Features

- Hero, Features, How It Works, Blog Preview, Testimonials, FAQ, CTA sections
- Dark mode toggle (class-based)
- Semantic design tokens (no hardcoded colors)
- Lead capture form with:
  - Zod validation
  - Honeypot bot protection (hidden `website` field)
  - Inline error messages
  - Sonner toast notifications
  - Direct insert into Supabase `leads` table with RLS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Required variables:

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` — your Supabase service role key (server only)

### 3. Run the Supabase migration

Apply the migration that creates the `leads` table and RLS policies:

```bash
supabase db push
```

Or, in the Supabase Dashboard, open the SQL editor and run the contents of `supabase/migrations/0001_leads.sql`.

The migration creates:

- `leads` table (id, name, email, phone, message, source, created_at)
- Row-Level Security enabled
- Policy allowing **anonymous inserts only** (no public reads)

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx              # Landing composition
  layout.tsx            # Root layout, fonts, metadata, Toaster
  globals.css           # Design tokens + Tailwind layers
  api/leads/route.ts    # Lead submission endpoint
components/
  layout/               # Navbar, Footer
  sections/             # Hero, Features, HowItWorks, BlogPreview, Testimonials, FAQ, CTA, ContactSection
  forms/ContactForm.tsx # Validated lead capture form
  ui/                   # Button, Input, Textarea, Label, Accordion
  ThemeToggle.tsx       # Light/dark toggle
lib/
  supabase/             # Browser + server Supabase clients
  utils.ts              # cn() helper
supabase/
  migrations/           # SQL migrations
```

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import the repo in Vercel
3. Add the three environment variables in Project Settings → Environment Variables
4. Deploy

## License

MIT
