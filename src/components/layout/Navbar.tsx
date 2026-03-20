"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/af-logo-primary.png"
            alt="Anthony Franco's"
            width={120}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-brand-cream/80 transition hover:text-brand-cream"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-sm font-medium text-brand-cream/80 transition hover:text-brand-cream"
          >
            Menu
          </Link>
          <Link
            href="/catering"
            className="text-sm font-medium text-brand-cream/80 transition hover:text-brand-cream"
          >
            Catering
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-brand-cream/80 transition hover:text-brand-cream"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-brand-cream/80 transition hover:text-brand-cream"
          >
            Contact
          </Link>
          <a
            href={BUSINESS.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Order Online
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-brand-cream transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-cream transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-charcoal md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/catering", label: "Catering" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-brand-cream/80 transition hover:bg-white/5 hover:text-brand-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-red px-6 py-3 text-center font-bold text-white"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
