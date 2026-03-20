import { BUSINESS } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="bg-brand-red py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
          Hungry? We&apos;re Open Right Now.
        </h2>
        <p className="mt-3 text-lg text-white/80">
          Order online for pickup or delivery to{" "}
          {BUSINESS.deliveryAreas.slice(0, 3).join(", ")} and more.
          Use code <span className="font-bold">{BUSINESS.promoCode}</span> for
          10% off.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={BUSINESS.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-red transition hover:bg-brand-cream sm:w-auto"
          >
            Order Online Now
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="w-full rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
