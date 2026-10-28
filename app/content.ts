// All page copy lives here. Edit this file to change the roadmap — no component changes needed.

export type Tone = "accent" | "green" | "blue" | "rose" | "amber";
export type ResourceLink = { label: string; href: string; note?: string };
export type TitledText = { title: string; body: string };

export const site = {
  name: "AI Dev Roadmap",
  title: "AI Developer Roadmap 2026 — From React Developer to AI Engineer",
  description:
    "A practical roadmap for web developers moving into AI engineering and automation: what to learn, where to start, how to earn while learning, and how to grow on YouTube in 90 days.",
  author: "Imtiaz Hussain",
  youtubeUrl: "https://www.youtube.com/@CodingWithImtiaz",
  url: "https://ai-dev-roadmap.vercel.app",
  updated: "October 2026",
};

export const sections = [
  { id: "start", label: "Start here" },
  { id: "idea", label: "Core idea" },
  { id: "tracks", label: "3 tracks" },
  { id: "youtube-truth", label: "YouTube truth" },
  { id: "skills", label: "Skills" },
  { id: "plan", label: "90-day plan" },
  { id: "projects", label: "Projects" },
  { id: "freelance", label: "Freelance" },
  { id: "jobs", label: "Jobs" },
  { id: "youtube", label: "Grow on YouTube" },
  { id: "routine", label: "Routine" },
  { id: "avoid", label: "Avoid" },
  { id: "resources", label: "Resources" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const heroStats = [
  { value: "90", label: "days, week by week" },
  { value: "7", label: "skill stages" },
  { value: "6", label: "portfolio projects" },
  { value: "3", label: "parallel tracks" },
];

/* ---------- 01 Start here ---------- */

export const startSteps: TitledText[] = [
  {
    title: "Check your runway",
    body: "Count how many months of expenses your savings cover. Under three months? Take paid contract work now — even plain React work — and follow this roadmap alongside it. Money stress makes learning much harder.",
  },
  {
    title: "Reposition yourself publicly",
    body: "Change your LinkedIn, GitHub and YouTube headlines to “Full-stack developer building AI products & automations.” Recruiters and clients search for the new label, not the old one.",
  },
  {
    title: "Make your first AI call",
    body: "Get an API key, set a monthly spending limit, and stream a model response into a Next.js page. It takes under an hour and turns AI from a buzzword into code you wrote.",
  },
  {
    title: "Announce the journey",
    body: "Publish one video or post: “Here's my 90-day plan.” A public commitment keeps you consistent and starts building an audience from day one.",
  },
];

/* ---------- 02 Core idea ---------- */

export const coreIdeas: TitledText[] = [
  {
    title: "Starting over is expensive",
    body: "Switching fields throws away years of skill and restarts you at junior pay. Repositioning keeps everything you already know and adds to it.",
  },
  {
    title: "Plain UI work is getting cheaper",
    body: "AI coding tools now generate a lot of standard UI. “React developer” alone competes with those tools. “Developer who ships AI features” doesn't.",
  },
  {
    title: "AI products are web apps",
    body: "Chat interfaces, dashboards, agents and internal tools mostly ship as web apps — and Next.js with React is one of the most common stacks for them.",
  },
];

/* ---------- 03 Three tracks ---------- */

export const tracks: {
  tone: Tone;
  label: string;
  title: string;
  body: string;
  items: string[];
  edge: string;
}[] = [
  {
    tone: "green",
    label: "Track 1 · Income now",
    title: "Freelance AI automation",
    body: "Small businesses pay for outcomes: faster replies to leads, less manual data entry, support that answers at 2 a.m.",
    items: [
      "Lead capture & qualification bots",
      "Document & invoice extraction",
      "Support chatbots trained on company data",
      "CRM, email & WhatsApp automations",
      "AI voice receptionists",
    ],
    edge: "Your edge: you can write custom code when no-code tools hit their limits.",
  },
  {
    tone: "blue",
    label: "Track 2 · Career",
    title: "AI engineering roles",
    body: "Apply where AI is the product, not a side feature. Your proof is shipped projects, not certificates.",
    items: [
      "AI Engineer",
      "AI Product Engineer",
      "Full-stack Engineer (AI / LLM)",
      "AI Automation Engineer",
      "Solutions / Forward-deployed Engineer",
    ],
    edge: "Your edge: you already ship production React and Next.js — most AI teams need exactly that.",
  },
  {
    tone: "rose",
    label: "Track 3 · Visibility",
    title: "YouTube & build in public",
    body: "Every project becomes videos. Videos bring visibility. Visibility brings clients, job offers and opportunities you can't predict.",
    items: [
      "Build-in-public project videos",
      "Step-by-step tutorials",
      "Monthly progress & lessons",
      "Shorts cut from every long video",
      "Cross-posts on LinkedIn & X",
    ],
    edge: "Your edge: a channel is a portfolio that keeps working while you sleep.",
  },
];

export const flywheel = ["Learn a skill", "Build a project", "Record it", "Publish", "Leads & offers", "Paid work", "Bigger projects"];

/* ---------- 04 YouTube truth ---------- */

export const youtubeCompareRows = ["What it is", "Competition", "Monetization risk", "Who really earns", "Long-term value"];

export const youtubeCompare: { tone: Tone; title: string; verdict: string; values: string[] }[] = [
  {
    tone: "rose",
    title: "Faceless AI content channels",
    verdict: "Avoid",
    values: [
      "AI-written scripts, AI voice-over and stock footage, uploaded in bulk.",
      "Extremely saturated — thousands of channels run the same playbook.",
      "High. YouTube's monetization rules exclude mass-produced, repetitive “inauthentic” content.",
      "Mostly the people selling courses about it.",
      "Low. No personal reputation, and the channel can lose monetization.",
    ],
  },
  {
    tone: "green",
    title: "Developer brand channel",
    verdict: "Do this",
    values: [
      "You building real AI tools on screen: tutorials, walkthroughs and lessons.",
      "Lower — few creators can actually build what they talk about.",
      "Low. Original, educational content fits the monetization rules.",
      "You — through clients, job offers, sponsors and your own products.",
      "Compounds. Every video is a permanent portfolio piece.",
    ],
  },
];

export const channelAutomations: TitledText[] = [
  { title: "Research", body: "Summarize comments and search trends into a weekly list of video ideas." },
  { title: "Scripting", body: "Turn your bullet-point outline into a first draft — then rewrite it in your own voice." },
  { title: "Packaging", body: "Generate ten title and thumbnail-text options, then pick and refine the best one." },
  { title: "Metadata", body: "Create descriptions, chapters and tags from the transcript." },
  { title: "Repurposing", body: "Cut Shorts from long videos; turn transcripts into blog, LinkedIn and X posts." },
  { title: "Community", body: "Triage comments: surface questions worth answering and ideas worth a video." },
];

/* ---------- 05 Skills ---------- */

export type Stage = {
  n: string;
  tone: Tone;
  title: string;
  time: string;
  why: string;
  learn: string[];
  build: string;
  doneWhen: string;
  resources: ResourceLink[];
};

const links = {
  nextLearn: { label: "Next.js Learn", href: "https://nextjs.org/learn" },
  nextDocs: { label: "Next.js docs", href: "https://nextjs.org/docs" },
  tsHandbook: { label: "TypeScript Handbook", href: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  zod: { label: "Zod", href: "https://zod.dev" },
  vercel: { label: "Vercel docs", href: "https://vercel.com/docs" },
  aiSdk: { label: "AI SDK docs", href: "https://ai-sdk.dev/docs" },
  claude: { label: "Claude API docs", href: "https://docs.claude.com" },
  openai: { label: "OpenAI API docs", href: "https://platform.openai.com/docs" },
  anthropicCourses: { label: "Anthropic courses", href: "https://github.com/anthropics/courses" },
  supabaseAi: { label: "Supabase AI & vectors", href: "https://supabase.com/docs/guides/ai" },
  pgvector: { label: "pgvector", href: "https://github.com/pgvector/pgvector" },
  mcp: { label: "Model Context Protocol", href: "https://modelcontextprotocol.io" },
  n8nDocs: { label: "n8n docs", href: "https://docs.n8n.io" },
  n8nTemplates: { label: "n8n workflow templates", href: "https://n8n.io/workflows" },
  stripe: { label: "Stripe docs", href: "https://docs.stripe.com" },
  drizzle: { label: "Drizzle ORM", href: "https://orm.drizzle.team" },
  langfuse: { label: "Langfuse docs", href: "https://langfuse.com/docs" },
  owasp: { label: "OWASP GenAI Security", href: "https://genai.owasp.org" },
  python: { label: "Python tutorial", href: "https://docs.python.org/3/tutorial/" },
  fastapi: { label: "FastAPI", href: "https://fastapi.tiangolo.com" },
  hfLearn: { label: "Hugging Face Learn", href: "https://huggingface.co/learn" },
  deeplearning: { label: "DeepLearning.AI short courses", href: "https://www.deeplearning.ai/short-courses/" },
  roadmapSh: { label: "roadmap.sh AI Engineer", href: "https://roadmap.sh/ai-engineer" },
} satisfies Record<string, ResourceLink>;

export const stages: Stage[] = [
  {
    n: "0",
    tone: "accent",
    title: "Foundations check",
    time: "Week 1",
    why: "Everything in this roadmap sits on solid TypeScript and modern Next.js. Close the gaps first — it makes every later stage faster.",
    learn: [
      "TypeScript: generics, utility types, typing API responses",
      "Runtime validation with Zod",
      "App Router: server vs client components",
      "Route handlers, server actions and streaming",
      "Environment variables and secret handling",
      "Git, GitHub and deploying on Vercel",
    ],
    build: "A Next.js app with one route handler that calls an external API, validates the response with Zod, and deploys to Vercel.",
    doneWhen: "You can explain server vs client components and deploy a project without following a tutorial.",
    resources: [links.nextLearn, links.tsHandbook, links.zod, links.vercel],
  },
  {
    n: "1",
    tone: "accent",
    title: "LLM APIs",
    time: "Weeks 1–2",
    why: "The core skill. Every AI feature — chat, summaries, extraction, agents — starts with a well-made model call.",
    learn: [
      "Chat / messages APIs, system prompts and roles",
      "Tokens, context windows and pricing",
      "Streaming responses into a React UI",
      "Structured output with JSON schemas",
      "Tool (function) calling",
      "Prompt caching to cut cost and latency",
      "Choosing models: fast & cheap vs large & smart",
      "Errors, retries and rate limits",
    ],
    build: "A streaming chat app with the AI SDK, plus a “messy text → clean JSON” extractor that validates its output.",
    doneWhen: "You can stream a response, force structured output, and let a model call a function you wrote.",
    resources: [links.aiSdk, links.claude, links.openai, links.anthropicCourses],
  },
  {
    n: "2",
    tone: "blue",
    title: "RAG: AI on your own data",
    time: "Weeks 3–4",
    why: "Businesses want AI that answers from their documents, websites and tickets — not the open internet. RAG is how you build that, and it shows up in almost every AI job description.",
    learn: [
      "Embeddings and semantic similarity",
      "Chunking strategies for PDFs, docs and web pages",
      "Vector search with Postgres + pgvector",
      "Hybrid search (keyword + vector) and reranking",
      "Citing sources in answers",
      "Refusing to answer when the data isn't there",
      "Keeping indexed data fresh",
    ],
    build: "“Chat with your docs”: upload PDFs, ask questions, get answers with clickable source citations.",
    doneWhen: "Your bot cites its sources and says “I don't know” instead of inventing an answer.",
    resources: [links.supabaseAi, links.pgvector, links.aiSdk],
  },
  {
    n: "3",
    tone: "blue",
    title: "Agents & MCP",
    time: "Weeks 5–6",
    why: "The biggest shift in AI right now: models that take actions — search, update a CRM, send an email, write code. Companies are hiring for exactly this.",
    learn: [
      "The agent loop: model → tool → result → model",
      "Designing clear, safe tools",
      "Multi-step workflows and planning",
      "Human-in-the-loop approval for risky actions",
      "MCP (Model Context Protocol) servers and clients",
      "Agent SDKs such as the Claude Agent SDK or OpenAI Agents SDK",
      "Prompt injection and tool-permission basics",
    ],
    build: "An MCP server that exposes a public API to AI clients — plus an agent that researches a lead and drafts an outreach email for your approval.",
    doneWhen: "Your agent finishes a multi-step task on its own and stops to ask before anything irreversible.",
    resources: [links.mcp, links.claude, links.openai],
  },
  {
    n: "4",
    tone: "green",
    title: "Automation tools",
    time: "Weeks 5–8, in parallel",
    why: "The fastest route to paid freelance work. Clients buy outcomes — “every lead gets a reply in 60 seconds” — not code.",
    learn: [
      "n8n (cloud, or self-hosted with Docker)",
      "Make and Zapier basics — many clients already use them",
      "Webhooks, REST APIs and OAuth",
      "Google Sheets, Gmail and Calendar integrations",
      "CRMs such as HubSpot and Airtable",
      "WhatsApp Business and email APIs",
      "Scheduling, error handling and retries",
    ],
    build: "Lead form → AI qualifies and scores → saved to a CRM or Sheet → personal email and WhatsApp follow-up → alert for hot leads.",
    doneWhen: "A workflow runs unattended for a week and tells you when something fails.",
    resources: [links.n8nDocs, links.n8nTemplates],
  },
  {
    n: "5",
    tone: "green",
    title: "Backend & product skills",
    time: "Weeks 7–10",
    why: "Turns demos into products people pay for — and makes you the developer who can ship a whole AI product alone.",
    learn: [
      "Postgres with an ORM (Drizzle or Prisma)",
      "Authentication (Auth.js, Clerk or Supabase Auth)",
      "Stripe subscriptions and webhooks",
      "Background jobs and queues for long AI tasks",
      "Usage limits, quotas and rate limiting",
      "File uploads, storage and transactional email",
    ],
    build: "Add sign-up, usage limits and Stripe payments to one of your AI apps.",
    doneWhen: "A stranger can sign up, pay and use your app without you touching anything.",
    resources: [links.stripe, links.drizzle, links.nextDocs],
  },
  {
    n: "6",
    tone: "rose",
    title: "Production AI",
    time: "Weeks 9–12",
    why: "This is what separates professionals from hobbyists — and it's what good interviewers ask about.",
    learn: [
      "Evals: test sets, LLM-as-judge, prompt regression tests",
      "Tracing and observability for AI calls",
      "Cost control: caching, smaller models, token budgets",
      "Latency: streaming, parallel calls, background work",
      "Security: prompt injection, data leaks, PII handling",
      "Reducing and detecting hallucinations",
    ],
    build: "An eval suite of 30+ test cases for your RAG bot, and a view of cost per request.",
    doneWhen: "You can change a prompt and prove with numbers that quality didn't drop.",
    resources: [links.langfuse, links.owasp, links.claude],
  },
  {
    n: "+",
    tone: "amber",
    title: "Side track: Python basics",
    time: "30 min a day, ongoing",
    why: "Much of AI tooling, research code and data work is in Python. You need to read and adapt it, not master it.",
    learn: [
      "Syntax, functions and classes",
      "Virtual environments and package managers (uv or pip)",
      "HTTP requests and calling LLM APIs",
      "FastAPI basics",
      "pandas basics and Jupyter notebooks",
    ],
    build: "A small FastAPI service that wraps an LLM call and is called from your Next.js app.",
    doneWhen: "You can clone a Python AI repo, run it and change it.",
    resources: [links.python, links.fastapi, links.hfLearn],
  },
];

/* ---------- 06 90-day plan ---------- */

export type PlanWeek = { week: number; title: string; tasks: string[] };
export type PlanMonth = { label: string; title: string; goal: string; weeks: PlanWeek[] };

export const plan: PlanMonth[] = [
  {
    label: "Month 1 · Days 1–30",
    title: "Foundations & your first AI app",
    goal: "Get fluent with LLM APIs and ship a RAG app you can show anyone.",
    weeks: [
      {
        week: 1,
        title: "Reposition & refresh foundations",
        tasks: [
          "Update your LinkedIn, GitHub and YouTube headlines to the new positioning",
          "Refresh TypeScript and Next.js App Router basics (Stage 0)",
          "Choose 3 content pillars and list 10 video ideas",
          "Publish video #1: your 90-day plan",
        ],
      },
      {
        week: 2,
        title: "LLM APIs",
        tasks: [
          "Get API keys and set monthly spending limits",
          "Build a streaming chat UI with the AI SDK",
          "Build a text → JSON extractor with schema validation",
          "Add one tool call (e.g. a weather or currency lookup)",
        ],
      },
      {
        week: 3,
        title: "RAG, part 1",
        tasks: [
          "Learn embeddings and chunking; set up Postgres with pgvector",
          "Build ingestion: parse PDF → chunk → embed → store",
          "Publish a video on what you learned building with LLM APIs",
        ],
      },
      {
        week: 4,
        title: "RAG, part 2 — ship Project 1",
        tasks: [
          "Add retrieval, source citations and an “I don't know” fallback",
          "Deploy Project 1: Chat with your docs",
          "Write a README with screenshots and an architecture diagram",
          "Publish the Project 1 build video",
        ],
      },
    ],
  },
  {
    label: "Month 2 · Days 31–60",
    title: "Automation, agents & first clients",
    goal: "Ship a real business automation and start earning from it.",
    weeks: [
      {
        week: 5,
        title: "Automation with n8n",
        tasks: [
          "Set up n8n (cloud trial or self-hosted with Docker)",
          "Rebuild and modify 3 templates from the n8n library",
          "Practice webhooks plus Google Sheets and Gmail integrations",
        ],
      },
      {
        week: 6,
        title: "Agents & MCP",
        tasks: [
          "Build an agent with 3+ tools and an approval step",
          "Build and publish a small MCP server",
          "Publish a video about your MCP server",
        ],
      },
      {
        week: 7,
        title: "Ship Project 2 — business automation",
        tasks: [
          "Build the lead-qualification automation end to end",
          "Record a 2-minute demo you can send to prospects",
          "List 50 businesses in your chosen niche",
        ],
      },
      {
        week: 8,
        title: "Start selling",
        tasks: [
          "Send 5 personalized outreach messages every weekday",
          "Set up Upwork or Contra with 2 portfolio items",
          "Offer 1–2 discounted pilots in exchange for testimonials",
          "Publish the Project 2 build video",
        ],
      },
    ],
  },
  {
    label: "Month 3 · Days 61–90",
    title: "A real product & the job hunt",
    goal: "Ship a paid SaaS, learn production AI, and apply with a strong portfolio.",
    weeks: [
      {
        week: 9,
        title: "SaaS foundations",
        tasks: [
          "Pick your Project 3 idea and define the paid feature",
          "Add authentication, a database and usage limits",
          "Share progress in a build-in-public post",
        ],
      },
      {
        week: 10,
        title: "Payments & polish",
        tasks: [
          "Add Stripe subscriptions and webhooks",
          "Build a landing page, onboarding and transactional emails",
          "Publish a video on building the SaaS",
        ],
      },
      {
        week: 11,
        title: "Production AI & launch",
        tasks: [
          "Write an eval set of 30+ test cases",
          "Add tracing and cost-per-request tracking",
          "Launch Project 3 on your channel, LinkedIn, X, Reddit and Product Hunt",
        ],
      },
      {
        week: 12,
        title: "Job hunt sprint",
        tasks: [
          "Rewrite your resume around AI projects and results",
          "Apply to 10+ targeted roles with tailored notes",
          "Do 2 mock interviews on designing an AI feature",
          "Publish your “90 days later” recap video",
        ],
      },
      {
        week: 13,
        title: "Review & double down",
        tasks: [
          "Review what brought the most traction: clients, views or interviews",
          "Raise your freelance prices based on your case studies",
          "Plan the next 90 days around what worked",
        ],
      },
    ],
  },
];

/* ---------- 07 Projects ---------- */

export type Project = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  stack: string[];
  proves: string;
  video: string;
};

export const projects: Project[] = [
  {
    title: "Chat with your docs",
    level: "Beginner",
    summary: "Upload PDFs or a website, ask questions, and get answers with source citations.",
    stack: ["Next.js", "AI SDK", "Postgres + pgvector", "Embeddings"],
    proves: "RAG, streaming UI, citations and handling “I don't know”.",
    video: "“I built ChatGPT for my own documents”",
  },
  {
    title: "Lead follow-up automation",
    level: "Beginner",
    summary: "Every new lead is qualified by AI, saved to a CRM and gets a personal reply within a minute.",
    stack: ["n8n", "LLM API", "Google Sheets / CRM", "Gmail", "WhatsApp"],
    proves: "You can automate a real business process end to end.",
    video: "“This automation replies to every lead in 60 seconds”",
  },
  {
    title: "AI toolkit for YouTubers",
    level: "Intermediate",
    summary: "Paste a transcript, get titles, a description, chapters and Shorts hooks. Free tier plus a paid plan.",
    stack: ["Next.js", "Auth", "Stripe", "LLM API", "YouTube Data API"],
    proves: "A complete product: auth, payments, usage limits and real users.",
    video: "A build-in-public series: “Building a SaaS in 30 days”",
  },
  {
    title: "MCP server for a public API",
    level: "Intermediate",
    summary: "Expose an API — GitHub, weather, your own app — as tools any MCP-compatible AI client can use.",
    stack: ["TypeScript", "MCP SDK", "REST APIs"],
    proves: "You understand agents and the newest AI tooling.",
    video: "“Give AI access to any API with MCP”",
  },
  {
    title: "Invoice & document extractor",
    level: "Intermediate",
    summary: "Upload invoices or receipts and get validated, structured data exported to a spreadsheet.",
    stack: ["Next.js", "Vision-capable LLM", "Structured output", "Postgres"],
    proves: "Structured output, file handling and measuring accuracy with evals.",
    video: "“100 invoices to a spreadsheet in one minute”",
  },
  {
    title: "Embeddable AI support widget",
    level: "Advanced",
    summary: "A chat widget any site can add with one script tag, trained on that site's content, with an admin dashboard.",
    stack: ["Next.js", "Embed script", "RAG", "Multi-tenant DB", "Analytics"],
    proves: "Product thinking: multi-tenancy, embeds, analytics and cost control.",
    video: "“I built my own AI customer-support widget”",
  },
];

export const portfolioChecklist = [
  "A live URL that works on mobile",
  "A README with screenshots, an architecture diagram and setup steps",
  "A 2-minute demo video",
  "Graceful errors and loading states — no blank screens",
  "Notes on cost per request and what you'd improve next",
  "No API keys committed to Git",
];

/* ---------- 08 Freelance ---------- */

export const niches = [
  "Real estate agents",
  "Clinics & dental practices",
  "E-commerce stores",
  "Coaches & course creators",
  "Recruiting agencies",
  "Law & accounting firms",
  "Local service businesses",
  "Marketing agencies (white-label)",
];

export const offers: { tier: string; title: string; body: string; delivery: string; tone: Tone }[] = [
  {
    tier: "Starter",
    title: "One automation",
    body: "A single high-value workflow, such as lead capture → CRM → instant personal reply.",
    delivery: "About 1 week · fixed price",
    tone: "green",
  },
  {
    tier: "Growth",
    title: "AI assistant",
    body: "A chatbot trained on the client's website and documents, with lead capture and handoff to a human.",
    delivery: "2–3 weeks · fixed price",
    tone: "blue",
  },
  {
    tier: "Retainer",
    title: "Ongoing partner",
    body: "Monitoring, fixes, prompt and model updates, and one new workflow each month.",
    delivery: "Monthly · recurring",
    tone: "accent",
  },
];

export const pricingNote =
  "Price by the value of the outcome and your market, not by the hour. Do one or two discounted pilots in exchange for testimonials, then raise your prices with every case study.";

export const clientSources: TitledText[] = [
  { title: "LinkedIn", body: "Post every build with a short demo clip. Comment on posts by founders in your niche, then message them." },
  { title: "Upwork & Contra", body: "Search “AI automation”, “n8n”, “chatbot” and “RAG”. Send short proposals that link a relevant demo." },
  { title: "Local businesses", body: "Find a visible problem — slow replies, no booking system — and show a 2-minute demo that fixes it." },
  { title: "Agencies", body: "Marketing and web agencies resell AI work under their own brand. One good agency can send steady projects." },
  { title: "Your channel", body: "Add “Want this for your business?” and a contact link to every video description." },
  { title: "Communities", body: "Help people in n8n, Reddit and Discord communities. Helpful answers turn into paid work." },
];

export const outreachTemplate = `Hi {name},

I noticed {a specific problem — e.g. your contact form doesn't send an instant reply}.

I build AI automations for {niche}. I recorded a 2-minute demo showing how {business} could reply to every new lead in under a minute and log it in your CRM automatically:
{demo link}

Would a 15-minute call this week be useful?

{your name}`;

export const deliveryTips = [
  "Write a one-page scope: what it does, what it doesn't, and what “done” means",
  "Use the client's own accounts and API keys — they own and pay for usage",
  "Add a human review step wherever an AI mistake would be costly",
  "Set up error alerts so you hear about failures before the client does",
  "Document every workflow with a short screen recording",
  "Offer a maintenance retainer at handover",
];

/* ---------- 09 Jobs ---------- */

export const jobTitles = [
  "AI Engineer",
  "AI Product Engineer",
  "Full-stack Engineer (AI / LLM)",
  "Product Engineer",
  "AI Automation Engineer",
  "LLM Application Developer",
  "Solutions Engineer (AI)",
  "Forward-deployed Engineer",
];

export const resumeTips = [
  "Headline: “Full-stack Engineer — AI products & automation (Next.js, TypeScript, LLMs)”",
  "Lead with your three shipped AI projects, each with a live link and a result",
  "Use the keywords teams search for: RAG, agents, MCP, tool calling, evals, vector databases",
  "Quantify: time saved, accuracy on your eval set, cost per request",
  "Link your YouTube channel — videos prove you can explain your work",
];

export const interviewTopics = [
  "Design a RAG system for a company's internal docs",
  "How do you reduce and detect hallucinations?",
  "How do you evaluate an LLM feature before shipping it?",
  "Trade-offs between cost, latency and quality",
  "How do you defend against prompt injection?",
  "Streaming AI responses into a React UI",
  "React and Next.js fundamentals — still asked",
];

export const jobBoards: ResourceLink[] = [
  { label: "LinkedIn Jobs", href: "https://www.linkedin.com/jobs/", note: "Set alerts for the titles above" },
  { label: "Wellfound", href: "https://wellfound.com", note: "Startup jobs, many remote" },
  { label: "Work at a Startup", href: "https://www.workatastartup.com", note: "Y Combinator companies" },
  { label: "We Work Remotely", href: "https://weworkremotely.com", note: "Remote-only roles" },
];

export const jobTip =
  "Send a hiring manager a short video of you building a mini version of their product. It stands out far more than a cover letter.";

/* ---------- 10 Grow on YouTube ---------- */

export const contentPillars: TitledText[] = [
  { title: "Build in public", body: "“I built X with AI” videos. Show the finished result first, then how you built it." },
  { title: "Tutorials", body: "Step-by-step guides: RAG in Next.js, n8n workflows, MCP servers. People find these through search for years." },
  { title: "Journey & career", body: "Monthly progress, client lessons, what worked and what failed. This builds trust and a loyal audience." },
];

export const cadence = [
  { value: "1", label: "long video a week", note: "8–20 minutes" },
  { value: "3", label: "Shorts", note: "cut from the long video" },
  { value: "1", label: "post", note: "LinkedIn or X, with a demo clip" },
  { value: "1", label: "review", note: "analytics every Sunday" },
];

export const videoIdeas = [
  "I'm going from React developer to AI engineer — my 90-day plan",
  "Build a ChatGPT-style app with Next.js in 20 minutes",
  "RAG explained with real code, no jargon",
  "I automated a real business's lead follow-up with n8n",
  "MCP explained: give AI access to any API",
  "What AI engineering interviews actually ask",
  "What it really costs to run an AI app (real numbers)",
  "“Faceless YouTube automation” — what the courses don't tell you",
  "I built a SaaS for YouTubers in 30 days",
  "5 automations every small business needs",
  "Testing AI coding tools on a real project",
  "90 days later: what worked and what didn't",
];

export const productionWorkflow: TitledText[] = [
  { title: "Plan", body: "Pick the topic from comments and search ideas." },
  { title: "Build", body: "Create the project — the build is the content." },
  { title: "Record", body: "Screen plus face cam, or screen plus voice." },
  { title: "Edit", body: "Cut silences; let AI draft chapters and the description from the transcript." },
  { title: "Package", body: "Write ten title options, pick one, design a clear thumbnail." },
  { title: "Repurpose", body: "Three Shorts, one LinkedIn post and one blog post from the transcript." },
];

export const growthTips = [
  "Titles and thumbnails decide whether anyone clicks — spend real time on them",
  "Show the result in the first 30 seconds, then explain how",
  "Consistency beats perfection: a good video every week beats a perfect one every month",
  "Reply to comments in the first hours after publishing",
  "Put links to your projects, portfolio and contact details in every description",
  "Collaborate with other developer creators once you have 10+ videos",
];

export const channelRule =
  "Keep it real: your voice, your code, your opinions. Use AI for the busywork, and follow YouTube's rules for disclosing realistic AI-generated or altered content.";

/* ---------- 11 Routine ---------- */

export const dailyRoutine = [
  { time: "Morning · 2–3 h", title: "Deep work: learn & build", body: "Hardest task first. No social media, no job boards." },
  { time: "Midday · 1–2 h", title: "Income", body: "Outreach, client work and job applications." },
  { time: "Afternoon · 2 h", title: "Build & create", body: "Project features or recording content." },
  { time: "Evening · 30–60 min", title: "Practice & plan", body: "Python practice or reading, then write tomorrow's top three tasks." },
];

export const weeklyRoutine = [
  { day: "Mon", focus: "Learn + build" },
  { day: "Tue", focus: "Learn + build" },
  { day: "Wed", focus: "Build + outreach" },
  { day: "Thu", focus: "Build + applications" },
  { day: "Fri", focus: "Record & edit video" },
  { day: "Sat", focus: "Publish, Shorts, posts" },
  { day: "Sun", focus: "Rest + weekly review" },
];

export const routineRule = "One rule above all: ship something public every week.";

/* ---------- 12 Avoid ---------- */

export const mistakes: TitledText[] = [
  {
    title: "Get-rich-quick courses",
    body: "Paid “YouTube automation” and “make money with AI” courses mostly profit the seller. Free docs and real projects teach more.",
  },
  { title: "Tutorial hell", body: "Watching without shipping feels productive but isn't. Three deployed projects beat ten finished courses." },
  {
    title: "Quitting code for “prompt engineering”",
    body: "Prompting is a skill inside engineering, not a career on its own. Your ability to build is the moat.",
  },
  {
    title: "Chasing every new tool",
    body: "Models and tools change monthly. Learn the concepts that last — RAG, agents, evals — and swap tools as needed.",
  },
  { title: "Running out of money", body: "Take contract work, even plain React, while you build. Financial stress makes everything harder." },
  { title: "Building in private", body: "If nobody sees your work, it can't bring you clients or offers. Share every project." },
  {
    title: "Leaking API keys",
    body: "Keep keys in environment variables, never in client code or Git, and set spending limits on every account.",
  },
  {
    title: "Overpromising to clients",
    body: "AI makes mistakes. Scope carefully, add human review where it matters, and promise outcomes you can measure.",
  },
];

/* ---------- 13 Resources ---------- */

export const resourceGroups: { title: string; links: ResourceLink[] }[] = [
  {
    title: "Official docs",
    links: [
      { ...links.nextDocs, note: "App Router, data fetching, deployment" },
      { ...links.aiSdk, note: "Streaming, tools, structured output in TypeScript" },
      { ...links.claude, note: "Claude models, tool use, MCP, Agent SDK" },
      { ...links.openai, note: "OpenAI models and Agents SDK" },
      { ...links.mcp, note: "The protocol behind AI tool integrations" },
      { ...links.n8nDocs, note: "Workflow automation" },
      { ...links.supabaseAi, note: "Postgres, pgvector and RAG guides" },
      { ...links.stripe, note: "Subscriptions and webhooks" },
    ],
  },
  {
    title: "Free learning",
    links: [
      { ...links.nextLearn, note: "Official interactive course" },
      { ...links.anthropicCourses, note: "Prompting, tool use and evals notebooks" },
      { ...links.deeplearning, note: "1–2 hour courses on AI topics" },
      { ...links.hfLearn, note: "LLM, agents and ML courses" },
      { ...links.roadmapSh, note: "A community roadmap to compare with" },
      { ...links.python, note: "The official Python tutorial" },
      { ...links.tsHandbook, note: "The official TypeScript guide" },
    ],
  },
  {
    title: "Production & safety",
    links: [
      { ...links.langfuse, note: "Open-source tracing and evals" },
      { ...links.owasp, note: "Top security risks for LLM apps" },
      { ...links.pgvector, note: "Vector search inside Postgres" },
      { ...links.n8nTemplates, note: "Thousands of workflows to learn from" },
    ],
  },
  {
    title: "YouTube rules",
    links: [
      {
        label: "Channel monetization policies",
        href: "https://support.google.com/youtube/answer/1311392",
        note: "Read before building any “automated” channel",
      },
      {
        label: "Disclosing altered or synthetic content",
        href: "https://support.google.com/youtube/answer/14328491",
        note: "When you must label AI-generated content",
      },
    ],
  },
];
