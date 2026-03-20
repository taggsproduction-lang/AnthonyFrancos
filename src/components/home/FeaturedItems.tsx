import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const featured = [
  {
    name: "Margherita Pizza",
    description: "Fresh plum tomato sauce, mozzarella, basil & olive oil",
    price: "$23.35",
    tag: "Fan Favorite",
  },
  {
    name: "Chicken Parmigiana",
    description: "Breaded cutlet with tomato sauce & melted mozzarella",
    price: "$19.15",
    tag: "Best Seller",
  },
  {
    name: "Lobster Ravioli",
    description: "Handmade ravioli in your choice of vodka or tomato sauce",
    price: "$19.00",
    tag: "Chef's Pick",
  },
  {
    name: "Grandma Pie",
    description: "Thin Sicilian crust, plum tomato, oregano & Romano cheese",
    price: "$23.25",
    tag: "Must Try",
  },
  {
    name: "Seafood Marechiara",
    description: "Shrimp, clams, mussels & calamari in special marinara",
    price: "$25.45",
    tag: "Premium",
  },
  {
    name: "Baked Ziti",
    description: "Classic oven-baked comfort in every bite",
    price: "$16.45",
    tag: "Comfort Food",
  },
];

export default function FeaturedItems() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            From Our Kitchen
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-brand-charcoal md:text-4xl">
            Springfield&apos;s Most Ordered
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-charcoal/60">
            Fresh dough daily, mozzarella from Wisconsin, pasta from Brooklyn.
            Every dish made to order.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <a
              key={item.name}
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-charcoal/10 bg-white p-6 transition hover:border-brand-red/30 hover:shadow-lg"
            >
              {/* Placeholder for food photo — will be AI-generated */}
              <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/5 to-brand-gold/10">
                <span className="text-4xl">
                  {item.tag === "Fan Favorite"
                    ? "🍕"
                    : item.tag === "Best Seller"
                      ? "🍗"
                      : item.tag === "Chef's Pick"
                        ? "🦞"
                        : item.tag === "Must Try"
                          ? "🍕"
                          : item.tag === "Premium"
                            ? "🦐"
                            : "🍝"}
                </span>
              </div>

              <span className="inline-block rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
                {item.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-brand-charcoal">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-brand-charcoal/60">
                {item.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-brand-red">
                  {item.price}
                </span>
                <span className="rounded-full bg-brand-red px-4 py-1.5 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  Order
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border-2 border-brand-red px-8 py-3 font-bold text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
