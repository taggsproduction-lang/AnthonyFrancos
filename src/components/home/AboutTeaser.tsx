import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Our Promise
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-brand-cream md:text-4xl">
              No Shortcuts.
              <br />
              No Frozen Ingredients.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-cream/70">
              Every pizza starts with fresh dough made that morning. Our
              mozzarella comes from Wisconsin&apos;s finest dairies. Our pasta
              is made weekly at one of Brooklyn&apos;s oldest pasta houses. And
              our produce arrives daily from the Hunts Point Market in The
              Bronx.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-cream/70">
              With 8 locations across Northern NJ, our buying power means
              you get restaurant-quality ingredients at neighborhood prices.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border-2 border-brand-cream/30 px-6 py-3 font-semibold text-brand-cream transition hover:border-brand-cream/60 hover:bg-white/5"
            >
              Our Story
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-red/10 p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-red">
                8
              </p>
              <p className="mt-1 text-sm text-brand-cream/60">
                Locations across NJ
              </p>
            </div>
            <div className="rounded-2xl bg-brand-gold/10 p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-gold">
                Fresh
              </p>
              <p className="mt-1 text-sm text-brand-cream/60">
                Dough made daily
              </p>
            </div>
            <div className="rounded-2xl bg-brand-green/10 p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-green">
                0
              </p>
              <p className="mt-1 text-sm text-brand-cream/60">
                Third-party drivers
              </p>
            </div>
            <div className="rounded-2xl bg-brand-cream/10 p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-cream">
                25+
              </p>
              <p className="mt-1 text-sm text-brand-cream/60">
                Specialty pizzas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
