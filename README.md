# AI Developer Roadmap 2026

A one-page roadmap for web developers moving into AI engineering and automation: where to start, the skill stages, an interactive 90-day plan, portfolio projects, freelance and job playbooks, and a YouTube growth plan.

Built with Next.js 16 (App Router) and plain CSS. No other dependencies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

All copy lives in [`app/content.ts`](app/content.ts). Before deploying, update the `site` object at the top:

- `author`: your name
- `youtubeUrl`: your channel link
- `url`: your final Vercel URL (used for social share previews)

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repo, and click **Deploy**. No settings or environment variables are needed.

Or deploy from the terminal with `npx vercel`.
