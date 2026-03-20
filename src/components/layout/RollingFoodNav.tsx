"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "/images/nav-pizza.png" },
  { href: "/menu", label: "Menu", icon: "/images/nav-pasta.png" },
  { href: "/catering", label: "Catering", icon: "/images/nav-chicken.png" },
  { href: "/about", label: "About", icon: "/images/nav-calzone.png" },
  { href: "/contact", label: "Contact", icon: "/images/nav-appetizer.png" },
];

export default function RollingFoodNav({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, rotation: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Find active index from pathname
  useEffect(() => {
    const idx = navItems.findIndex((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href)
    );
    if (idx !== -1 && idx !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(idx);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [pathname, activeIndex]);

  // Calculate indicator position
  useEffect(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const x = activeRect.left - containerRect.left + activeRect.width / 2 - 18;

    // Rotation proportional to distance (simulate rolling)
    const distance = x - indicatorStyle.x;
    const circumference = Math.PI * 36; // diameter 36px
    const rotations = (distance / circumference) * 360;

    setIndicatorStyle({
      x,
      rotation: indicatorStyle.rotation + rotations,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const currentIcon = navItems[activeIndex]?.icon;
  const prevIcon = navItems[prevIndex]?.icon;

  return (
    <div ref={containerRef} className="relative flex items-center gap-7">
      {/* Rolling food indicator */}
      <div
        className="pointer-events-none absolute -bottom-8 z-50 h-9 w-9"
        style={{
          transform: `translateX(${indicatorStyle.x}px)`,
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          className="h-9 w-9 overflow-hidden rounded-full shadow-lg ring-2 ring-brand-red/30"
          style={{
            transform: `rotate(${indicatorStyle.rotation}deg)`,
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Crossfade between food icons */}
          <div className="relative h-full w-full">
            <Image
              src={prevIcon}
              alt=""
              fill
              sizes="36px"
              className={`object-cover transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-0"
              }`}
              aria-hidden
            />
            <Image
              src={currentIcon}
              alt=""
              fill
              sizes="36px"
              className={`object-cover transition-opacity duration-500 ${
                isTransitioning ? "animate-food-fade-in" : "opacity-100"
              }`}
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Nav links */}
      {navItems.map((item, i) => (
        <button
          key={item.href}
          ref={(el) => { itemRefs.current[i] = el; }}
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
