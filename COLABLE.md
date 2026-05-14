# marketing blog landing page
Stack: nextjs-supabase-vercel-stripe
Created: 2026-05-14

## Decisions
- Next.js 14 App Router + TypeScript + Tailwind with semantic design tokens and class-based dark mode
- Inter + Fraunces fonts; Sonner for toast notifications; lucide icons; Unsplash for imagery
- Supabase for lead capture via server/client helpers; leads table with RLS migration
- Lead submission via /api/leads route with Zod validation and honeypot anti-spam
- shadcn-style UI primitives (Button, Input, Textarea, Label, Accordion) built on semantic tokens
- Stripe planned for future payments (not yet integrated)
- Section components use named exports for consistency with named imports in app/page.tsx

## Components
- Navbar — top navigation with theme toggle
- Hero — gradient headline with Unsplash hero image
- Features — product feature highlights with lucide icons (named export)
- HowItWorks — step-by-step explainer (named export)
- BlogPreview — featured blog posts teaser (named export)
- Testimonials — social proof quotes (named export)
- FAQ — accordion-based Q&A
- CTA — gradient conversion call-to-action banner
- ContactSection — wrapper with supporting copy around ContactForm
- ContactForm — zod-validated form with honeypot, toast feedback, Supabase submission
- Footer — site footer with links
- ThemeToggle — class-based light/dark switcher
- UI primitives — Button, Input, Textarea, Label, Accordion

## Infrastructure
- app/api/leads — POST route with Zod + honeypot writing to Supabase
- lib/supabase — server and client helpers
- lib/utils — cn() class merger
- supabase/migrations/0001_leads.sql — leads table with RLS
- README — setup, env, migration, and structure docs