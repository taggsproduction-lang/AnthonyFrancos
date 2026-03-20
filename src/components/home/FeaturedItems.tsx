import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const featured = [
  {
    name: "Margherita Pizza",
    description: "Fresh plum tomato sauce, mozzarella, basil & olive oil",
    price: "$23.35",
    tag: "Fan Favorite",
    image: "/images/food-margherita.png",
  },
  {
    name: "Chicken Parmigiana",
    description: "Breaded cutlet with tomato sauce & melted mozzarella",
    price: "$19.15",
    tag: "Best Seller",
    image: "/images/food-chicken-parm.png",
  },
  {
    name: "Lobster Ravioli",
    description: "Handmade ravioli in your choice of vodka or tomato sauce",
    price: "$19.00",
    tag: "Chef's Pick",
    image: "/images/food-lobster-ravioli.png",
  },
  {
    name: "Grandma Pie",
    description: "Thin Sicilian crust, plum tomato, oregano & Romano cheese",
    price: "$23.25",
    tag: "Must Try",
    image: "/images/food-grandma-pie.png",
  },
  {
    name: "Seafood Marechiara",
    description: "Shrimp, clams, mussels & calamari in special marinara",
    price: "$25.45",
    tag: "Premium",
    image: "/images/food-seafood-marechiara.png",
  },
  {
    name: "Baked Ziti",
    description: "Classic oven-baked comfort in every bite",
    price: "$16.45",
    tag: "Comfort Food",
    image: "/images/food-baked-ziti.png",
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
              className="group overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white transition hover:border-brand-red/30 hover:shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden sm:h-48 lg:h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-gold backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-charcoal">
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
