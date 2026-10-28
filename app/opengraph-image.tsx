import { ImageResponse } from "next/og";
import { site } from "./content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0c 0%, #1a1030 100%)",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#c4b5fd", letterSpacing: 3 }}>
          AI DEVELOPER ROADMAP · 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>From React developer to AI engineer</div>
          <div style={{ fontSize: 32, color: "#a1a1aa" }}>What to learn · Where to start · How to grow — in 90 days</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>{site.author}</div>
      </div>
    ),
    size
  );
}
