# AI Developer Roadmap: project context

## What this is

A single-page public website: **"From React developer to AI engineer: a 90-day roadmap"**. It guides web developers who want to move into AI engineering and automation: where to start, which skills to learn, a week-by-week plan, portfolio projects, freelance and job playbooks, and how to grow a YouTube channel.

The owner is a React / Next.js developer with a YouTube channel who is moving into AI engineering and automation. The site is part of that journey: it's both a portfolio piece and something to share with their audience. It will be deployed on **Vercel**.

### The thinking behind the content (keep new content consistent with it)

- **Stay a developer, change the label:** from "React Developer" to "AI Product Engineer". Don't switch careers.
- **Three parallel tracks:** freelance AI automation (income now), AI engineering jobs (career), and YouTube / build in public (visibility).
- **Be honest about "YouTube automation".** Faceless, mass-produced AI channels are saturated and risk demonetization under YouTube's inauthentic-content rules. A real developer-brand channel is the recommendation. Use AI for busywork (titles, chapters, Shorts, repurposing), not to fake the content.
- **The skill path:** LLM APIs → RAG → agents & MCP → automation tools (n8n) → backend & product (auth, Stripe) → production AI (evals, cost, security), with Python basics on the side.
- **Tone:** plain, practical, no hype. Write short, clear sentences that non-native English speakers can follow easily. Don't promise income, and don't give specific prices or salaries (they vary by country).

## Stack

- **Next.js 16.4.3** (App Router, Turbopack), **React 19.3.1**, **TypeScript ~5.9.3**
  - Don't upgrade to TypeScript 7. It's the new native rewrite, and Next.js compatibility hasn't been confirmed.
- **Plain CSS** in `app/globals.css`: no Tailwind and no UI libraries. There are zero runtime dependencies beyond next, react and react-dom. Keep it that way unless the owner asks.
- Fonts: Geist and Geist Mono via `next/font/google`.
- Node 24 on Windows 10. Both PowerShell and Git Bash are available.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # must pass before calling any change done (it also type-checks)
npm run start   # serve the production build
```

## File map

| File | Purpose |
|---|---|
| `app/content.ts` | **All page copy and data.** The `site` config, the `sections` list, and data for every section. Edit text here, not in components. |
| `app/page.tsx` | Server component that renders every section from `content.ts`. Also has the small `Section`, `Hero`, `SiteHeader`, `LinkList` and `Footer` helpers. |
| `app/layout.tsx` | Metadata, fonts, and an inline script that applies the saved theme before first paint (prevents a light/dark flash). |
| `app/globals.css` | Design tokens and all styles, organized by section with comment headers. |
| `app/components/SectionNav.tsx` | Client component. Sticky pill nav that highlights the current section using IntersectionObserver. |
| `app/components/ThemeToggle.tsx` | Client component. Light/dark toggle, saved in localStorage under the key `theme`. |
| `app/components/Checklist.tsx` | Client component. The interactive 90-day plan with a progress bar. Saved in localStorage under `ai-roadmap-progress-v1`. |
| `app/components/CopyButton.tsx` | Client component. Copies the outreach template. |
| `app/components/icons.tsx` | Inline SVG icons (stroke-based, `currentColor`). |
| `app/opengraph-image.tsx` | Generates the 1200×630 social-share image. |
| `app/icon.svg` | Favicon. |

## Conventions and gotchas

- **Adding or reordering a section:** update the `sections` array in `content.ts` **and** the matching `<Section id="...">` in `page.tsx`, in the same order. The "01, 02…" numbering and the nav both come from the array index.
- **Colors:** use the CSS tokens (`--bg`, `--surface`, `--text`, `--muted`, `--accent`…). Never hard-code colors in components. Dark-mode tokens are defined **twice** in `globals.css`: under `@media (prefers-color-scheme: dark)` and under `:root[data-theme="dark"]`. Keep both blocks identical.
- **Tones:** to color a card, chip or callout, add `tone-accent`, `tone-green`, `tone-blue`, `tone-rose` or `tone-amber`. Styles inside then use `var(--tone)` and `var(--tone-soft)`.
- **Checklist IDs** are positional (`w{week}-t{index}`). Inserting or reordering tasks in `plan` shifts which boxes appear ticked for returning visitors. If the plan changes structurally, bump the storage key (`-v2`).
- **localStorage:** wrap every read and write in try/catch. The page must still work when storage is blocked.
- **Client components:** add `"use client"` only where interactivity is needed. Everything else stays a server component.
- **Layout:** pages must work at 390px wide with no horizontal scroll. Use the grid helpers (`grid grid-2/3/4`); they collapse to one column on mobile.
- **External links:** use `target="_blank" rel="noreferrer"`. Check that new resource URLs actually resolve before adding them.

## Current status (October 2026)

Done and verified:
- Production build passes (static export of `/`, `/icon.svg`, `/opengraph-image`).
- Checked in headless Chrome at 1280px and 390px wide, in light and dark themes: no console errors, no horizontal overflow.
- Checklist progress and theme choice both persist after a reload.
- `site.author` is "Imtiaz Hussain" and `site.youtubeUrl` is `https://www.youtube.com/@CodingWithImtiaz` (the channel is "Coding with Imtiaz").
- Git repo initialized in this folder on branch `main`. The repo root is this folder, not the parent `AI Automation` folder.

Still to do (the owner's next steps):
1. **Push to GitHub and deploy on Vercel.** Create an empty GitHub repo, add it as `origin`, push `main`, then import the repo in Vercel. No env vars are needed.
2. **Set `site.url`** in `app/content.ts` to the real Vercel URL once deployed. It still holds the guess `https://ai-dev-roadmap.vercel.app`.

Possible improvements. **Ask the owner before doing any of these:**
- An "About me" section with the owner's photo, story and latest videos
- `app/sitemap.ts` and `app/robots.ts` for SEO
- Vercel Analytics (`@vercel/analytics`), the first extra dependency
- Links to the owner's real videos and projects as they're published (e.g. a `videoUrl` field on each project)
- A contact or newsletter form for freelance leads
- Print-friendly styles, so the roadmap can be saved as a PDF

## How to verify visual changes

After `npm run build` and `npx next start -p 3123`, take screenshots with headless Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe` (Edge is also installed). Drive it with a small Node script over the DevTools protocol: set the viewport to 1280 and 390 wide, toggle `prefers-color-scheme`, scroll, and capture. Keep those scripts out of this repo (use a temp folder), and stop the server when finished.
