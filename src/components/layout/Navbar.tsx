"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Warm background with subtle pizza-inspired texture */}
      <div className="absolute inset-0 bg-brand-cream border-b border-brand-gold/20 shadow-md" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C41E24' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='40' cy='25' r='2'/%3E%3Ccircle cx='25' cy='45' r='2.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Cellipse cx='30' cy='15' rx='4' ry='2.5' transform='rotate(25 30 15)'/%3E%3Cellipse cx='50' cy='8' rx='3' ry='2' transform='rotate(-15 50 8)'/%3E%3Cellipse cx='8' cy='40' rx='3.5' ry='2' transform='rotate(40 8 40)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/af-logo-cropped.png"
            alt="Anthony Franco's Pizzeria"
            width={197}
            height={82}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
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
              className="text-sm font-semibold text-brand-charcoal/70 transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BUSINESS.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-red-dark hover:shadow-md"
          >
            Order Online
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-brand-charcoal transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-charcoal transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-charcoal transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="relative border-t border-brand-gold/20 bg-brand-cream md:hidden">
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
                className="rounded-lg px-3 py-3 text-brand-charcoal/80 transition hover:bg-brand-red/5 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-red px-6 py-3 text-center font-bold text-white shadow-sm"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
