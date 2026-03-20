"use client";

import { menuCategories } from "@/lib/menu-data";

export default function MenuNav() {
  return (
    <nav className="sticky top-16 z-40 -mx-4 overflow-x-auto border-b border-brand-charcoal/10 bg-brand-cream/95 px-4 backdrop-blur-sm">
      <div className="flex gap-1 py-3">
        {menuCategories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-brand-charcoal/60 transition hover:bg-brand-red/10 hover:text-brand-red"
          >
            {cat.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
