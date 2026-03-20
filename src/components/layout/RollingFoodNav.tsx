"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const RUN_DURATION = 700; // ms for lateral movement

export default function RollingFoodNav({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [x, setX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Find active index from pathname
  useEffect(() => {
    const idx = navItems.findIndex((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href)
    );
    if (idx !== -1 && idx !== activeIndex) {
      setActiveIndex(idx);
    }
  }, [pathname, activeIndex]);

  // Move chef to active nav item
  useEffect(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const newX =
      activeRect.left - containerRect.left + activeRect.width / 2 - 16;

    if (newX !== x) {
      setX(newX);
      setIsRunning(true);
      setTimeout(() => setIsRunning(false), RUN_DURATION);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative flex items-center gap-7">
      {/* Running chef indicator — positioned below nav text */}
      <div
        className="pointer-events-none absolute -bottom-9 z-50"
        style={{
          transform: `translateX(${x}px)`,
          transition: `transform ${RUN_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        }}
      >
        <div
          className={`relative h-10 w-8 ${isRunning ? "animate-chef-run" : ""}`}
        >
          <Image
            src="/images/chef-running.png"
            alt=""
            fill
            sizes="32px"
            className="object-contain drop-shadow-sm"
            aria-hidden
          />
        </div>
      </div>

      {/* Nav links */}
      {navItems.map((item, i) => (
        <button
          key={item.href}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          onClick={() => onNavigate(item.href)}
          className={`text-sm font-semibold transition ${
            i === activeIndex
              ? "text-brand-red"
              : "text-brand-charcoal/70 hover:text-brand-red"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
