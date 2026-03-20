"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const menuNavItems = [
  { slug: "pizza", label: "Pizza", icon: "/images/nav-pizza.png" },
  { slug: "pasta", label: "Pasta", icon: "/images/nav-pasta.png" },
  { slug: "chicken-veal", label: "Chicken & Veal", icon: "/images/nav-chicken.png" },
  { slug: "seafood", label: "Seafood", icon: "/images/nav-seafood.png" },
  { slug: "appetizers", label: "Appetizers", icon: "/images/nav-appetizer.png" },
  { slug: "salads", label: "Salads", icon: "/images/nav-salad.png" },
  { slug: "sandwiches", label: "Sandwiches", icon: "/images/nav-sandwich.png" },
  { slug: "calzones", label: "Calzones", icon: "/images/nav-calzone.png" },
];

export default function RollingMenuNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorX, setIndicatorX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevIndexRef = useRef(0);

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      let newIndex = 0;

      for (let i = menuNavItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(menuNavItems[i].slug);
        if (el && el.offsetTop <= scrollY) {
          newIndex = i;
          break;
        }
      }

      if (newIndex !== prevIndexRef.current) {
        prevIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update indicator position when active index changes
  const updatePosition = useCallback(() => {
    const container = scrollRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const newX =
      activeRect.left -
      containerRect.left +
      container.scrollLeft +
      activeRect.width / 2 -
      16;

    const distance = newX - indicatorX;
    const circumference = Math.PI * 32;
    const newRotation = rotation + (distance / circumference) * 360;

    setIndicatorX(newX);
    setRotation(newRotation);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);

    // Auto-scroll the nav to keep active item visible
    const scrollLeft =
      activeRect.left -
      containerRect.left +
      container.scrollLeft -
      containerRect.width / 2 +
      activeRect.width / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  // Also recalc on resize
  useEffect(() => {
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [updatePosition]);

  const currentIcon = menuNavItems[activeIndex]?.icon;

  return (
    <nav className="sticky top-[72px] z-40 -mx-4 border-b border-brand-charcoal/10 bg-brand-cream/95 px-4 backdrop-blur-sm md:top-[80px]">
      <div ref={containerRef} className="relative">
        <div
          ref={scrollRef}
          className="flex gap-1 overflow-x-auto py-3 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {menuNavItems.map((item, i) => (
            <a
              key={item.slug}
              ref={(el) => { itemRefs.current[i] = el; }}
              href={`#${item.slug}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.slug);
                if (el) {
                  const offset = 160;
                  const top = el.offsetTop - offset;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                i === activeIndex
                  ? "text-brand-red"
                  : "text-brand-charcoal/60 hover:bg-brand-red/10 hover:text-brand-red"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Rolling food indicator */}
        <div
          className="pointer-events-none absolute -bottom-4 left-0 z-50 h-8 w-8"
          style={{
            transform: `translateX(${indicatorX}px)`,
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div
            className="h-8 w-8 overflow-hidden rounded-full shadow-md ring-2 ring-brand-red/20"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <Image
              src={currentIcon}
              alt=""
              fill
              sizes="32px"
              className={`object-cover transition-opacity duration-400 ${
                isTransitioning ? "animate-pulse" : ""
              }`}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
