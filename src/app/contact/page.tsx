import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import OrderButton from "@/components/cta/OrderButton";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Anthony Franco's Pizzeria at 130 US-22, Springfield NJ. Open 7 days 10am-10pm. Delivery, takeout, and dine-in. Call (973) 218-5757.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand-cream md:text-5xl">
            Visit Us
          </h1>
          <p className="mt-3 text-lg text-brand-cream/60">
            Right on Route 22, center island next to Advanced Auto
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                  Location
                </h2>
                <p className="mt-2 text-brand-charcoal/70">
                  {BUSINESS.address}
                </p>
                <p className="text-sm text-brand-charcoal/50">
                  {BUSINESS.addressNote}
                </p>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                  Hours
                </h2>
                <div className="mt-3 space-y-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-brand-charcoal/70">{day}</span>
                      <span className="font-medium text-brand-charcoal">
                        10:00 AM – 10:00 PM
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                  Call Us
                </h2>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-2 block text-2xl font-bold text-brand-red transition hover:text-brand-red-dark"
                >
                  {BUSINESS.phone}
                </a>
                <p className="mt-1 text-sm text-brand-charcoal/50">
                  Order by phone or ask about catering
                </p>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-brand-charcoal">
                  Delivery Areas
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BUSINESS.deliveryAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-brand-green/10 px-3 py-1 text-sm font-medium text-brand-green"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-brand-gold">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-gold" />
                  Employee-managed delivery — no third parties
                </p>
              </div>

              <OrderButton size="lg" className="w-full text-center" />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-brand-charcoal/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2!2d-74.3224!3d40.6942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b1234567890%3A0x1234567890abcdef!2s130%20US-22%2C%20Springfield%2C%20NJ%2007081!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anthony Franco's Pizzeria Springfield NJ location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
