import { BUSINESS } from "@/lib/constants";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Background gradient overlay — will be replaced with video */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,36,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center md:pt-0">
        {/* Trust badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5">
          <span className="text-brand-gold">&#9733; 4.5</span>
          <span className="text-sm text-brand-cream/70">Rated on Google</span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight text-brand-cream md:text-7xl">
          Real Pizza.
          <br />
          <span className="text-brand-red">Real Ingredients.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-cream/70 md:text-xl">
          New York-style pies made fresh daily with mozzarella from Wisconsin&apos;s
          finest dairies and pasta from Brooklyn&apos;s oldest pasta houses.
          Serving Springfield &amp; surrounding areas.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={BUSINESS.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-red-dark hover:scale-105 sm:w-auto"
          >
            Order Online
          </a>
          <Link
            href="/menu"
            className="w-full rounded-full border-2 border-brand-cream/30 px-8 py-4 text-lg font-semibold text-brand-cream transition hover:border-brand-cream/60 hover:bg-white/5 sm:w-auto"
          >
            View Menu
          </Link>
        </div>

        {/* Promo */}
        <p className="mt-6 text-sm text-brand-gold">
          Use code <span className="font-bold">{BUSINESS.promoCode}</span> for{" "}
          {BUSINESS.promoDiscount} your first online order
        </p>

        {/* Delivery badge */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-cream/50">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            Open Now — Until 10pm
          </span>
          <span>|</span>
          <span>Delivery &bull; Takeout &bull; Dine-In</span>
          <span>|</span>
          <span className="text-brand-gold/70">Our drivers, not third-party</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-brand-cream/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
