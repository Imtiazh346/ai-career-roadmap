"use client";

import { useEffect, useRef, useState } from "react";

type Item = { readonly id: string; readonly label: string };

export function SectionNav({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // A thin band ~35% down the viewport decides which section is "current".
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active pill visible inside the horizontally scrolling nav.
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !link) return;
    nav.scrollTo({ left: link.offsetLeft - nav.clientWidth / 2 + link.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav ref={navRef} className="section-nav" aria-label="Sections">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
