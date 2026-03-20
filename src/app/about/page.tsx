import type { Metadata } from "next";
import Image from "next/image";
import OrderButton from "@/components/cta/OrderButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anthony Franco's Pizzeria — authentic New York-style pizza made with premium ingredients from Wisconsin dairies, Brooklyn pasta houses, and Hunts Point Market.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Our Story
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold text-brand-cream md:text-5xl">
              Real Pizza Takes
              <br />
              Real Ingredients
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-cream/70">
              At Anthony Franco&apos;s, we believe quality and satisfaction go
              hand in hand. We take great care to offer authentic New York-style
              pizza and classic Italian dishes without compromising on cost or
              relying on frozen ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10 text-3xl">
                🧀
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                Wisconsin Dairies
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                Our mozzarella comes from exclusive deals with Wisconsin&apos;s
                finest dairies. The stretch, the melt, the flavor — you can
                taste the difference in every slice.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-3xl">
                🍝
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                Brooklyn Pasta Houses
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                Our pasta is made weekly at one of Brooklyn&apos;s oldest pasta
                houses. Fresh, never dried. The texture and taste of real
                Italian craftsmanship.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-3xl">
                🥬
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                Hunts Point Market
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                Daily deliveries of the freshest meat and produce from the Hunts
                Point Market in The Bronx — the largest food distribution center
                in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Springfield Location */}
      <section className="bg-brand-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                Springfield Location
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-brand-charcoal">
                The Newest Franco&apos;s on Route 22
              </h2>
              <p className="mt-4 text-brand-charcoal/70 leading-relaxed">
                Our Springfield location brings the full Anthony Franco&apos;s
                experience to Union County. From our pizza counter to our
                dining room, every detail is designed to make you feel at
                home.
              </p>
              <p className="mt-4 text-brand-charcoal/70 leading-relaxed">
                With 8 locations across Northern NJ, our buying power means
                you get premium ingredients at neighborhood prices. That&apos;s
                the Franco&apos;s difference.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <OrderButton />
                <a
                  href="tel:+19732185757"
                  className="inline-block rounded-full border-2 border-brand-charcoal/20 px-6 py-3 text-center font-bold text-brand-charcoal transition hover:border-brand-charcoal/40"
                >
                  (973) 218-5757
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/springfield-exterior.jpg"
                alt="Anthony Franco's Springfield storefront"
                width={400}
                height={300}
                className="rounded-2xl object-cover"
              />
              <Image
                src="/images/pizza-counter.jpg"
                alt="Pizza counter at Anthony Franco's Springfield"
                width={400}
                height={300}
                className="rounded-2xl object-cover"
              />
              <Image
                src="/images/grand-opening.jpg"
                alt="Anthony Franco's Springfield grand opening"
                width={400}
                height={300}
                className="col-span-2 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Promise */}
      <section className="bg-brand-charcoal py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-brand-cream">
            Our Drivers. Your Doorstep.
          </h2>
          <p className="mt-4 text-lg text-brand-cream/70">
            Unlike the chains, we never use third-party delivery services. Every
            order is delivered by our own team — people who know the food and
            care about getting it to you hot and fresh. No middlemen, no
            markups, no strangers at your door.
          </p>
          <OrderButton size="lg" className="mt-8" />
        </div>
      </section>
    </div>
  );
}
