# Harish — Portfolio (Next.js + Tailwind, App Router)

Minimal, Vercel-style portfolio with light/dark mode, smooth CTA scroll, and sections for About, Blog, Experience, and Projects & Impact.

## Quick Start (Local)
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel (Free)
1. Create a new GitHub repo and push this folder, or zip-upload directly in Vercel.
2. Go to https://vercel.com/new and import the project (or drag-drop this folder).
3. Framework Preset: **Next.js**.
4. Click **Deploy**. It will be live at something like `harish.vercel.app`.
5. Later, add a custom domain (e.g., `harish.com`) in Vercel -> Project -> Domains.

## Upload Your Photo
Replace `/public/harish.jpg` with your real headshot (same filename). No code changes needed.

## Customization
- Edit copy in `app/(site)/sections/*`
- Add blog posts later (MDX or CMS can be wired)
- The theme toggle persists via `localStorage`

## Tech
- Next.js App Router
- TailwindCSS (dark mode: class)
- Framer Motion (subtle interactions)
