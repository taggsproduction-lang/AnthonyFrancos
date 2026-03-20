import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Catering by Anthony Franco's — half and full trays for parties, birthdays, corporate events. Hot truck delivery available. Springfield NJ.",
};

const cateringCategories = [
  {
    name: "Cold Appetizers",
    items: [
      { name: "Fresh Mozzarella & Roasted Peppers", half: 50, full: 100 },
      { name: "Fresh Mozzarella with Tomato/Basil", half: 50, full: 100 },
      { name: "Bruschetta", half: 45, full: 90 },
      { name: "Mixed Cheese Platter", half: 60, full: 120 },
      { name: "Shrimp Cocktail", half: 60, full: 120 },
      { name: "Mixed Italian Cheeses & Meats", half: 60, full: 120 },
    ],
  },
  {
    name: "Hot Appetizers",
    items: [
      { name: "Buffalo Wings", half: 50, full: 100 },
      { name: "Fried Calamari", half: 50, full: 95 },
      { name: "Mozzarella Sticks", half: 45, full: 85 },
      { name: "Chicken Fingers", half: 45, full: 80 },
      { name: "Baked Clams", half: 50, full: 100 },
      { name: "Eggplant Rollatini", half: 45, full: 90 },
      { name: "Sampler Platter", half: 60, full: 120 },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Vodka Sauce", half: 45, full: 90 },
      { name: "Marinara", half: 40, full: 80 },
      { name: "Meatballs or Sausage", half: 50, full: 100 },
      { name: "Baked Ziti", half: 45, full: 90 },
      { name: "Homemade Lasagna", half: 50, full: 100 },
      { name: "Stuffed Shells", half: 45, full: 90 },
    ],
  },
  {
    name: "Chicken",
    description: "All chicken trays served with bread",
    items: [
      { name: "Chicken Parmigiana", half: 50, full: 100 },
      { name: "Chicken Marsala", half: 50, full: 100 },
      { name: "Chicken Francese", half: 50, full: 100 },
      { name: "Chicken Scarpariello", half: 50, full: 100 },
    ],
  },
  {
    name: "Salads",
    items: [
      { name: "Caesar", half: 25, full: 50 },
      { name: "House Salad", half: 30, full: 60 },
      { name: "Antipasto", half: 40, full: 80 },
      { name: "Grilled Chicken Caesar", half: 40, full: 80 },
    ],
  },
];

export default function CateringPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Events & Parties
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold text-brand-cream md:text-5xl">
            Let Us Cater Your Next Event
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-cream/70">
            From birthday parties to corporate lunches — half and full trays of
            all your favorites. Hot truck delivery available for large events.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="w-full rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-red-dark sm:w-auto"
            >
              Call to Order Catering
            </a>
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-brand-cream/30 px-8 py-4 text-lg font-semibold text-brand-cream transition hover:border-brand-cream/60 sm:w-auto"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Info badges */}
      <section className="border-b border-brand-charcoal/10 bg-brand-warm py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 text-center text-sm">
          <div>
            <p className="font-bold text-brand-charcoal">Half Trays</p>
            <p className="text-brand-charcoal/60">Serve 8–10 people</p>
          </div>
          <div className="hidden h-8 w-px bg-brand-charcoal/20 sm:block" />
          <div>
            <p className="font-bold text-brand-charcoal">Full Trays</p>
            <p className="text-brand-charcoal/60">Serve 18–20 people</p>
          </div>
          <div className="hidden h-8 w-px bg-brand-charcoal/20 sm:block" />
          <div>
            <p className="font-bold text-brand-charcoal">Hot Truck</p>
            <p className="text-brand-charcoal/60">Available for delivery</p>
          </div>
          <div className="hidden h-8 w-px bg-brand-charcoal/20 sm:block" />
          <div>
            <p className="font-bold text-brand-charcoal">Setup Available</p>
            <p className="text-brand-charcoal/60">Sternos, racks, utensils</p>
          </div>
        </div>
      </section>

      {/* Catering menu */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="space-y-12">
            {cateringCategories.map((cat) => (
              <div key={cat.name}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand-charcoal">
                  {cat.name}
                </h2>
                {cat.description && (
                  <p className="mt-1 text-sm text-brand-charcoal/60">
                    {cat.description}
                  </p>
                )}

                <div className="mt-4 overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white">
                  {/* Header */}
                  <div className="grid grid-cols-[1fr_80px_80px] gap-4 border-b border-brand-charcoal/10 bg-brand-charcoal/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-charcoal/50">
                    <span>Item</span>
                    <span className="text-right">Half</span>
                    <span className="text-right">Full</span>
                  </div>

                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className={`grid grid-cols-[1fr_80px_80px] gap-4 px-5 py-4 ${
                        i !== cat.items.length - 1
                          ? "border-b border-brand-charcoal/5"
                          : ""
                      }`}
                    >
                      <span className="font-medium text-brand-charcoal">
                        {item.name}
                      </span>
                      <span className="text-right text-sm text-brand-charcoal/70">
                        ${item.half}
                      </span>
                      <span className="text-right text-sm font-semibold text-brand-red">
                        ${item.full}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-brand-charcoal p-8 text-center md:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand-cream md:text-3xl">
              Planning a Big Event?
            </h2>
            <p className="mt-2 text-brand-cream/70">
              Call us for custom menus, 3–6 foot subs, and hot truck delivery.
              We&apos;ll take care of everything.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-6 inline-block rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-red-dark"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
