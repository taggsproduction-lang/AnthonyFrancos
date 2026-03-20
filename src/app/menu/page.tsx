import type { Metadata } from "next";
import { menuCategories } from "@/lib/menu-data";
import MenuNav from "@/components/menu/MenuNav";
import MenuCategory from "@/components/menu/MenuCategory";
import OrderButton from "@/components/cta/OrderButton";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu for Anthony Franco's Springfield — pizza, pasta, chicken, veal, seafood, sandwiches, salads, and catering. Order online or call (973) 218-5757.",
};

export default function MenuPage() {
  return (
    <div className="pt-20">
      {/* Menu hero */}
      <section className="bg-brand-charcoal py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-cream md:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/60">
            New York-style pizza and authentic Italian dishes made fresh daily.
            Hover any item to order it directly.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <OrderButton size="md" />
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full border-2 border-brand-cream/30 px-6 py-3 font-semibold text-brand-cream transition hover:border-brand-cream/60"
            >
              Call to Order
            </a>
          </div>
          <p className="mt-3 text-sm text-brand-gold">
            Use code <span className="font-bold">{BUSINESS.promoCode}</span> for{" "}
            {BUSINESS.promoDiscount} online orders
          </p>
        </div>
      </section>

      {/* Menu content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <MenuNav />

        <div className="mt-8 space-y-16">
          {menuCategories.map((category) => (
            <MenuCategory key={category.slug} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-brand-red p-8 text-center md:p-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
            Ready to Order?
          </h2>
          <p className="mt-2 text-white/80">
            Delivery to Springfield, Westfield, Union, Mountainside, Kenilworth
            &amp; Cranford
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-white px-8 py-3 font-bold text-brand-red transition hover:bg-brand-cream sm:w-auto"
            >
              Order Online Now
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="w-full rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white transition hover:border-white sm:w-auto"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
