import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream/70">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand-cream">
              Anthony Franco&apos;s
            </h3>
            <p className="mt-2 text-sm">Pizzeria & Ristorante</p>
            <p className="mt-4 text-sm leading-relaxed">
              Authentic New York-style pizza with premium ingredients from
              Wisconsin&apos;s finest dairies and Brooklyn&apos;s oldest pasta houses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Menu
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/menu#pizza" className="transition hover:text-brand-cream">Pizza</Link>
              <Link href="/menu#pasta" className="transition hover:text-brand-cream">Pasta</Link>
              <Link href="/menu#chicken-veal" className="transition hover:text-brand-cream">Chicken & Veal</Link>
              <Link href="/menu#seafood" className="transition hover:text-brand-cream">Seafood</Link>
              <Link href="/menu#sandwiches" className="transition hover:text-brand-cream">Sandwiches</Link>
              <Link href="/catering" className="transition hover:text-brand-cream">Catering</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Visit Us
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>{BUSINESS.address}</p>
              <p>{BUSINESS.addressNote}</p>
              <a href={BUSINESS.phoneHref} className="transition hover:text-brand-cream">
                {BUSINESS.phone}
              </a>
              <p>{BUSINESS.hours}</p>
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-cream">
              We Deliver
            </h4>
            <p className="text-sm leading-relaxed">
              {BUSINESS.deliveryAreas.join(", ")}
            </p>
            <p className="mt-3 text-xs text-brand-gold">
              Employee-managed delivery — no third parties
            </p>
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Order Online
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-brand-cream/40">
          <p>&copy; {new Date().getFullYear()} Anthony Franco&apos;s Pizzeria & Ristorante. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
