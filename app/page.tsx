import type { ReactNode } from "react";
import { Checklist } from "./components/Checklist";
import { CopyButton } from "./components/CopyButton";
import { SectionNav } from "./components/SectionNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { ArrowRight, Check, Cross, External, Play } from "./components/icons";
import {
  cadence,
  channelAutomations,
  channelRule,
  clientSources,
  contentPillars,
  coreIdeas,
  dailyRoutine,
  deliveryTips,
  flywheel,
  growthTips,
  heroStats,
  interviewTopics,
  jobBoards,
  jobTip,
  jobTitles,
  mistakes,
  niches,
  offers,
  outreachTemplate,
  plan,
  portfolioChecklist,
  pricingNote,
  productionWorkflow,
  projects,
  resourceGroups,
  resumeTips,
  routineRule,
  sections,
  site,
  stages,
  startSteps,
  tracks,
  videoIdeas,
  weeklyRoutine,
  youtubeCompare,
  youtubeCompareRows,
  type Project,
  type ResourceLink,
  type SectionId,
} from "./content";

const levelTone: Record<Project["level"], string> = {
  Beginner: "tone-green",
  Intermediate: "tone-blue",
  Advanced: "tone-rose",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <Section id="start" title="Where to start — this week" lead="Four steps to finish before you learn anything new. They cost almost nothing and set up everything else.">
          <ol className="grid grid-4 steps">
            {startSteps.map((step, i) => (
              <li key={step.title} className="card step">
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="idea" title="Stay a developer. Change the label." lead="Don't switch careers — reposition. Your web skills are the foundation AI products are built on.">
          <div className="relabel card">
            <span className="relabel-old">React Developer</span>
            <span className="relabel-arrow" aria-hidden="true">
              <ArrowRight size={22} />
            </span>
            <span className="relabel-new">
              AI Product Engineer
              <small>Builds and ships AI features, agents and automations end to end</small>
            </span>
          </div>
          <div className="grid grid-3 mt">
            {coreIdeas.map((idea) => (
              <article key={idea.title} className="card">
                <h3>{idea.title}</h3>
                <p className="muted">{idea.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="tracks" title="Run three tracks in parallel" lead="Each track feeds the others: projects become videos, videos bring clients, client work becomes better projects.">
          <div className="grid grid-3">
            {tracks.map((track) => (
              <article key={track.title} className={`card track tone-${track.tone}`}>
                <p className="tag">{track.label}</p>
                <h3>{track.title}</h3>
                <p className="muted">{track.body}</p>
                <ul className="list">
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="track-edge">{track.edge}</p>
              </article>
            ))}
          </div>
          <div className="flywheel card">
            <p className="flywheel-title">The flywheel</p>
            <ol>
              {flywheel.map((step) => (
                <li key={step}>
                  <span>{step}</span>
                </li>
              ))}
              <li className="flywheel-repeat">
                <span>↻ Repeat</span>
              </li>
            </ol>
          </div>
        </Section>

        <Section
          id="youtube-truth"
          title="The truth about “YouTube automation”"
          lead="Two very different things are sold under the same name. One is a shortcut that rarely works; the other is a career asset."
        >
          <div className="grid grid-2">
            {youtubeCompare.map((col) => (
              <article key={col.title} className={`card compare tone-${col.tone}`}>
                <header className="compare-head">
                  <h3>{col.title}</h3>
                  <span className="verdict">
                    {col.tone === "green" ? <Check size={14} /> : <Cross size={14} />}
                    {col.verdict}
                  </span>
                </header>
                <dl>
                  {youtubeCompareRows.map((row, i) => (
                    <div key={row}>
                      <dt>{row}</dt>
                      <dd>{col.values[i]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <h3 className="sub-title">What you should automate on your channel</h3>
          <p className="muted sub-lead">Let AI handle the busywork so you can spend your time on the parts only you can do.</p>
          <div className="grid grid-3">
            {channelAutomations.map((item) => (
              <div key={item.title} className="card compact">
                <h4>{item.title}</h4>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="The skill roadmap"
          lead="Seven stages plus a Python side track. Each one has what to learn, something to build, a clear “done when”, and where to learn it."
        >
          <ol className="stages">
            {stages.map((stage) => (
              <li key={stage.title} className={`stage tone-${stage.tone}`}>
                <span className="stage-num" aria-hidden="true">
                  {stage.n}
                </span>
                <article className="card stage-card">
                  <header className="stage-head">
                    <h3>{stage.title}</h3>
                    <span className="chip chip-tone">{stage.time}</span>
                  </header>
                  <p className="muted">{stage.why}</p>
                  <div className="stage-body">
                    <div>
                      <p className="label">Learn</p>
                      <ul className="check-list">
                        {stage.learn.map((item) => (
                          <li key={item}>
                            <Check size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="stage-side">
                      <div className="build">
                        <p className="label">Build</p>
                        <p>{stage.build}</p>
                      </div>
                      <div className="done">
                        <p className="label">Done when</p>
                        <p>{stage.doneWhen}</p>
                      </div>
                    </div>
                  </div>
                  <div className="res-row">
                    <span className="label">Learn from</span>
                    {stage.resources.map((link) => (
                      <a key={link.href} className="res-pill" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <External size={12} />
                      </a>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="plan"
          title="The 90-day plan"
          lead="Thirteen weeks, three months, three shipped projects. Tick tasks off as you go — your progress is saved in your browser."
        >
          <Checklist months={plan} />
        </Section>

        <Section
          id="projects"
          title="Portfolio projects that get you hired"
          lead="Each project proves a skill employers and clients pay for — and doubles as a video. Build the first three in your 90 days."
        >
          <div className="grid grid-3">
            {projects.map((project, i) => (
              <article key={project.title} className={`card project ${levelTone[project.level]}`}>
                <header className="project-head">
                  <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="chip chip-tone">{project.level}</span>
                </header>
                <h3>{project.title}</h3>
                <p className="muted">{project.summary}</p>
                <div className="chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <dl className="project-meta">
                  <div>
                    <dt>Proves</dt>
                    <dd>{project.proves}</dd>
                  </div>
                  <div>
                    <dt>Video idea</dt>
                    <dd>{project.video}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="card mt">
            <h3>Make every project portfolio-ready</h3>
            <ul className="check-list two-col">
              {portfolioChecklist.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="freelance"
          title="Freelance playbook: earn while you learn"
          lead="Pick a niche, package a clear offer, and show proof. Businesses buy results they can understand, not technology."
        >
          <h3 className="sub-title first">1. Pick a niche</h3>
          <p className="muted sub-lead">Speaking to one industry makes your outreach sharper and your demos reusable.</p>
          <div className="chips">
            {niches.map((niche) => (
              <span key={niche} className="chip chip-lg">
                {niche}
              </span>
            ))}
          </div>

          <h3 className="sub-title">2. Package productized offers</h3>
          <div className="grid grid-3">
            {offers.map((offer) => (
              <article key={offer.tier} className={`card offer tone-${offer.tone}`}>
                <p className="tag">{offer.tier}</p>
                <h4>{offer.title}</h4>
                <p className="muted">{offer.body}</p>
                <p className="offer-delivery">{offer.delivery}</p>
              </article>
            ))}
          </div>
          <p className="callout tone-amber mt">
            <strong>Pricing: </strong>
            {pricingNote}
          </p>

          <h3 className="sub-title">3. Find clients</h3>
          <div className="grid grid-3">
            {clientSources.map((source) => (
              <div key={source.title} className="card compact">
                <h4>{source.title}</h4>
                <p className="muted">{source.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-2 mt-lg">
            <div className="card template">
              <header className="template-head">
                <h3>Outreach message template</h3>
                <CopyButton text={outreachTemplate} />
              </header>
              <pre>{outreachTemplate}</pre>
            </div>
            <div className="card">
              <h3>4. Deliver like a pro</h3>
              <ul className="check-list">
                {deliveryTips.map((tip) => (
                  <li key={tip}>
                    <Check size={16} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="jobs" title="Job search playbook" lead="Search for the new titles, show shipped work, and prepare for the questions AI teams actually ask.">
          <div className="grid grid-2">
            <div className="card">
              <h3>Titles to search</h3>
              <div className="chips mt-sm">
                {jobTitles.map((title) => (
                  <span key={title} className="chip chip-lg">
                    {title}
                  </span>
                ))}
              </div>
              <h3 className="mt">Where to apply</h3>
              <LinkList links={jobBoards} />
            </div>
            <div className="card">
              <h3>Resume & profile</h3>
              <ul className="check-list">
                {resumeTips.map((tip) => (
                  <li key={tip}>
                    <Check size={16} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card mt">
            <h3>Interview topics to prepare</h3>
            <ol className="numbered two-col">
              {interviewTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ol>
          </div>
          <p className="callout tone-accent mt">
            <strong>Stand out: </strong>
            {jobTip}
          </p>
        </Section>

        <Section
          id="youtube"
          title="Grow on YouTube"
          lead="Treat your channel as a public portfolio. Three content pillars, a weekly rhythm, and a repeatable production workflow."
        >
          <div className="grid grid-3">
            {contentPillars.map((pillar, i) => (
              <article key={pillar.title} className="card">
                <p className="tag">Pillar {i + 1}</p>
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.body}</p>
              </article>
            ))}
          </div>

          <h3 className="sub-title">Weekly cadence</h3>
          <dl className="stats stats-compact">
            {cadence.map((item) => (
              <div key={item.label}>
                <dt>
                  {item.label}
                  <span>{item.note}</span>
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-2 mt-lg">
            <div className="card">
              <h3>12 video ideas to start with</h3>
              <ol className="numbered">
                {videoIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ol>
            </div>
            <div className="card">
              <h3>Production workflow</h3>
              <ol className="flow">
                {productionWorkflow.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong>
                    <span className="muted">{step.body}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="card mt">
            <h3>Growth tips</h3>
            <ul className="check-list two-col">
              {growthTips.map((tip) => (
                <li key={tip}>
                  <Check size={16} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="callout tone-blue mt">{channelRule}</p>
        </Section>

        <Section id="routine" title="Daily & weekly routine" lead="Structure beats motivation. Aim for 6–8 focused hours a day, and protect the morning for deep work.">
          <div className="grid grid-2">
            <div className="card">
              <h3>A typical day</h3>
              <ol className="day">
                {dailyRoutine.map((block) => (
                  <li key={block.time}>
                    <span className="day-time">{block.time}</span>
                    <div>
                      <strong>{block.title}</strong>
                      <p className="muted">{block.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card">
              <h3>A typical week</h3>
              <ul className="week-grid">
                {weeklyRoutine.map((d) => (
                  <li key={d.day}>
                    <span className="week-day">{d.day}</span>
                    <span>{d.focus}</span>
                  </li>
                ))}
              </ul>
              <p className="callout tone-green mt">{routineRule}</p>
            </div>
          </div>
        </Section>

        <Section id="avoid" title="Mistakes to avoid" lead="Most people who don't make it hit one of these. Knowing them in advance saves months.">
          <div className="grid grid-4">
            {mistakes.map((mistake) => (
              <article key={mistake.title} className="card mistake">
                <span className="mistake-icon">
                  <Cross size={16} />
                </span>
                <h4>{mistake.title}</h4>
                <p className="muted">{mistake.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="resources" title="Resources" lead="Official docs and free courses first. You don't need to buy anything to follow this roadmap.">
          <div className="grid grid-2">
            {resourceGroups.map((group) => (
              <div key={group.title} className="card">
                <h3>{group.title}</h3>
                <LinkList links={group.links} />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <ArrowRight size={16} />
            </span>
            {site.name}
          </a>
          <div className="header-actions">
            <a className="btn btn-small" href={site.youtubeUrl} target="_blank" rel="noreferrer">
              <Play size={16} />
              <span className="hide-sm">Watch on YouTube</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
        <SectionNav items={sections} />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-badge">Career roadmap · Updated {site.updated}</p>
        <h1>
          From React developer to <span className="grad">AI engineer</span>
        </h1>
        <p className="hero-lead">
          A practical, no-hype roadmap for web developers: what to learn, where to start, how to earn while you learn, and how
          to grow an audience — in 90 days.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#start">
            Start here <ArrowRight size={16} />
          </a>
          <a className="btn" href="#plan">
            Open the 90-day plan
          </a>
        </div>
        <dl className="stats">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Section({ id, title, lead, children }: { id: SectionId; title: string; lead?: string; children: ReactNode }) {
  const index = sections.findIndex((s) => s.id === id);
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {sections[index].label}
          </p>
          <h2>{title}</h2>
          {lead ? <p className="lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

function LinkList({ links }: { links: ResourceLink[] }) {
  return (
    <ul className="link-list">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <External />
          </a>
          {link.note ? <span className="muted">{link.note}</span> : null}
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          Made by <strong>{site.author}</strong> ·{" "}
          <a href={site.youtubeUrl} target="_blank" rel="noreferrer">
            Follow the journey on YouTube
          </a>
        </p>
        <p className="muted">
          Updated {site.updated}. Built with Next.js and deployed on Vercel. Tools change fast — the concepts here last.
        </p>
      </div>
    </footer>
  );
}
