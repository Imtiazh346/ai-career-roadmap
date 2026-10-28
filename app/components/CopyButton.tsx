"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — the text is still selectable.
    }
  };

  return (
    <button type="button" className="btn btn-small" onClick={copy}>
      {copied ? "Copied" : "Copy template"}
    </button>
  );
}
