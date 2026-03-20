"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const FLIP_DURATION = 200; // ms for the chef to turn around
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
  const [facingLeft, setFacingLeft] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [shouldMove, setShouldMove] = useState(true);
  const xRef = useRef(0);

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

  // Two-step: 1) flip to face direction, 2) then run
  const moveChef = useCallback(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const newX =
      activeRect.left - containerRect.left + activeRect.width / 2 - 16;

    const needsFlip = (newX < xRef.current && !facingLeft) ||
                      (newX > xRef.current && facingLeft);

    if (newX !== xRef.current) {
      // Step 1: Flip to face the direction he's about to run
      const goingLeft = newX < xRef.current;
      setFacingLeft(goingLeft);

      // Step 2: After flip completes, start the lateral movement
      const delay = needsFlip ? FLIP_DURATION : 0;
      setTimeout(() => {
        setShouldMove(true);
        setX(newX);
        xRef.current = newX;
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), RUN_DURATION);
      }, delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, facingLeft]);

  useEffect(() => {
    moveChef();
  }, [moveChef]);

  return (
    <div ref={containerRef} className="relative flex items-center gap-7">
      {/* Running chef indicator — positioned below nav text */}
      <div
        className="pointer-events-none absolute -bottom-9 z-50"
        style={{
          transform: `translateX(${x}px)`,
          transition: shouldMove
            ? `transform ${RUN_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
            : "none",
        }}
      >
        <div
          className={`relative h-10 w-8 ${isRunning ? "animate-chef-run" : ""}`}
          style={{
            transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
            transition: `transform ${FLIP_DURATION}ms ease`,
          }}
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
