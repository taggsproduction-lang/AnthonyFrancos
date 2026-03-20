"use client";

import { BUSINESS } from "@/lib/constants";
import type { MenuCategory as MenuCategoryType } from "@/lib/menu-data";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-brand-charcoal md:text-4xl">
          {category.name}
        </h2>
        {category.description && (
          <p className="mt-2 text-brand-charcoal/60">{category.description}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="group relative rounded-2xl border border-brand-charcoal/10 bg-white p-5 transition hover:border-brand-red/30 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-brand-charcoal">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm text-brand-charcoal/60">
                    {item.description}
                  </p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-2 flex gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          tag === "popular"
                            ? "bg-brand-gold/15 text-brand-gold"
                            : tag === "gf"
                              ? "bg-brand-green/10 text-brand-green"
                              : tag === "spicy"
                                ? "bg-brand-red/10 text-brand-red"
                                : tag === "new"
                                  ? "bg-blue-50 text-blue-600"
                                  : ""
                        }`}
                      >
                        {tag === "popular"
                          ? "Popular"
                          : tag === "gf"
                            ? "GF"
                            : tag === "spicy"
                              ? "Spicy"
                              : "New"}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="shrink-0 text-sm font-bold text-brand-red">
                {item.price}
              </span>
            </div>

            {/* Order overlay on hover */}
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-brand-red/90 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <span className="rounded-full bg-white px-6 py-2 text-sm font-bold text-brand-red">
                Order This
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
