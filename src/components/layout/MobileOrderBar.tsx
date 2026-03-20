import { BUSINESS } from "@/lib/constants";

export default function MobileOrderBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-brand-red/20 bg-brand-charcoal px-4 py-3 md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center gap-2 rounded-full border border-brand-cream/20 px-4 py-2.5 text-sm font-semibold text-brand-cream transition hover:bg-white/5"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call
      </a>
      <a
        href={BUSINESS.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 ml-3 rounded-full bg-brand-red px-6 py-2.5 text-center text-sm font-bold text-white transition hover:bg-brand-red-dark"
      >
        Order Now
      </a>
    </div>
  );
}
