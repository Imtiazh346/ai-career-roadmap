"use client";

import { useEffect, useState } from "react";
import type { PlanMonth } from "../content";

const STORAGE_KEY = "ai-roadmap-progress-v1";

const taskId = (week: number, index: number) => `w${week}-t${index}`;

export function Checklist({ months }: { months: PlanMonth[] }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDone(JSON.parse(saved));
    } catch {
      // Storage unavailable (private mode, blocked site data) — progress just won't persist.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {}
  }, [done, loaded]);

  const allIds = months.flatMap((m) => m.weeks.flatMap((w) => w.tasks.map((_, i) => taskId(w.week, i))));
  const completed = allIds.filter((id) => done[id]).length;
  const percent = Math.round((completed / allIds.length) * 100);

  const toggle = (id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  const reset = () => {
    if (window.confirm("Reset all progress on the 90-day plan?")) setDone({});
  };

  return (
    <div className="checklist">
      <div className="progress card">
        <div className="progress-row">
          <strong aria-live="polite">
            {completed} of {allIds.length} tasks done
          </strong>
          <span className="progress-pct">{percent}%</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="90-day plan progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <div className="progress-row progress-meta">
          <span>Progress is saved in this browser only.</span>
          <button type="button" className="link-btn" onClick={reset} disabled={completed === 0}>
            Reset
          </button>
        </div>
      </div>

      {months.map((month) => (
        <div key={month.label} className="month">
          <div className="month-head">
            <p className="month-label">{month.label}</p>
            <h3>{month.title}</h3>
            <p className="muted">{month.goal}</p>
          </div>
          <div className="grid grid-2">
            {month.weeks.map((week) => {
              const ids = week.tasks.map((_, i) => taskId(week.week, i));
              const weekDone = ids.every((id) => done[id]);
              return (
                <article key={week.week} className={`card week${weekDone ? " is-done" : ""}`}>
                  <header className="week-head">
                    <span className="week-num">Week {week.week}</span>
                    {weekDone ? <span className="week-badge">Complete</span> : null}
                  </header>
                  <h4>{week.title}</h4>
                  <ul className="tasks">
                    {week.tasks.map((task, i) => {
                      const id = taskId(week.week, i);
                      return (
                        <li key={id}>
                          <label className="task">
                            <input type="checkbox" checked={!!done[id]} onChange={() => toggle(id)} />
                            <span>{task}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
