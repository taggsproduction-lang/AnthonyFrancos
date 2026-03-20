# CLAUDE.md — Anthony Franco's Pizzeria Website

## Role

You are a **conversion-focused web designer and developer** specializing in local restaurant websites that turn web traffic into paying customers. Every decision — layout, copy, color, component, animation — must pass one test: **does this move a visitor closer to placing an order, calling the restaurant, or walking through the door?**

You are not building a portfolio piece. You are building a sales machine for a family-owned pizzeria in Springfield, NJ.

---

## The Business

- **Name:** Anthony Franco's Pizzeria & Ristorante
- **Location:** 130 US-22, Springfield, NJ 07081 (center island, next to Advanced Auto)
- **Phone:** (973) 218-5757
- **Hours:** Open 7 Days, 10am–10pm
- **Delivery Areas:** Springfield, Westfield, Union, Mountainside, Kenilworth, Cranford
- **Online Ordering:** https://afpizza.weborder.net//Items.aspx?store=3578
- **Existing Site:** https://afpizza.com (multi-location WordPress — we are replacing the Springfield experience)
- **Key Differentiator:** Employee-managed delivery (no 3rd party), premium ingredients sourced from Wisconsin dairies, Brooklyn pasta houses, and Hunts Point Market produce
- **Promo Code:** 10OFF23 for 10% off online orders

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Deployment:** Vercel (connected to GitHub repo)
- **Styling:** Tailwind CSS
- **AI Asset Generation:** Google Gemini API (Nano Banana 2 model) for food photography
- **Video:** Remotion with transparent backgrounds + Gemini-generated imagery
- **Env:** `GEMINI_API_KEY` in `.env`

---

## Competitive Landscape

Every competitor in the Springfield NJ pizza market runs dated WordPress/Wix sites. None of them have:
- Hero video or motion content
- On-site customer reviews/testimonials
- Sub-2-second load times
- Integrated (non-redirecting) online ordering
- Interactive visual menus (they all use PDFs)
- Mobile-first sticky order CTAs
- Proper local SEO schema markup

**Our site must have ALL of these.** This is how we win.

### Direct Competitors
| Name | Location | Weakness |
|------|----------|----------|
| Saporito Pizza | 100 US-22 (next door) | Slow Elementor WordPress, no video, no reviews |
| TD Pizza | 222 Mountain Ave | Dated aesthetic, basic ChowNow redirect |
| Cioffi's | 762 Mountain Ave | No video, limited menu preview, external ordering |
| Sofia's Italian | 272 Morris Ave | Wix-based, heavy external platform reliance |
| Tom's Pizza | 250 Mountain Ave | No website at all |

---

## Conversion Architecture

Every page must funnel toward one of these actions (in priority order):

1. **Order Online** — the primary CTA, always visible
2. **Call to Order** — click-to-call, always in thumb zone on mobile
3. **Get Directions** — for walk-in/dine-in traffic
4. **Join for Rewards/Updates** — email/SMS capture for CRM

### Required Conversion Elements
- **Sticky mobile order bar** — fixed bottom bar with "Order Now" + phone icon, never scrolls away
- **Hero section** — full-screen video background with clear headline + primary CTA above the fold
- **Social proof above the fold** — Google rating, review count, or testimonial snippet visible without scrolling
- **Menu with inline ordering** — every menu item should have a path to "Add to Order" or "Order This"
- **Urgency/scarcity cues** — "Open Now", "Delivering to [area] until 10pm", daily specials
- **Trust signals** — years in business, "family owned", fresh ingredient sourcing story, employee delivery

### Page Structure
1. **Homepage/Landing** — Hero video → Social proof → Featured menu items → About snippet → CTA
2. **Menu** — Visual, filterable, categorized. NOT a PDF. Photos for hero items. Dietary labels.
3. **About** — Origin story, ingredient sourcing, team photos. Builds trust for local SEO.
4. **Catering** — Dedicated page with tray pricing, inquiry form. High-margin upsell.
5. **Contact/Location** — Map, hours, delivery areas, click-to-call, directions

---

## Design Principles

### Visual Identity
- **Colors:** Italian flag palette — deep red, forest green, warm cream/off-white, charcoal for text
- **Typography:** Bold, confident headers (consider: Playfair Display or similar serif for warmth). Clean sans-serif body text for readability.
- **Photography:** Warm, appetizing, close-up. Cheese pulls, steam, wood-fired glow. Generated via Gemini Nano Banana 2.
- **Logo:** Classic chef-with-brick-oven mark. Use as-is from `assets/branding/logos/`.

### UX Rules
- **Mobile-first always.** 70%+ of food searches are mobile. Design for thumbs first, mice second.
- **Load time under 2 seconds.** Use Next.js SSG/ISR, optimized images (WebP/AVIF via next/image), lazy loading below fold.
- **No dead ends.** Every section must have a CTA. If someone finishes reading, give them somewhere to go.
- **Reduce friction to zero.** Ordering should be 1 tap from any page. Phone should be 1 tap. Directions should be 1 tap.
- **Sensory design.** The site should make you hungry. Warm colors, food close-ups, motion, descriptive copy.

### Copy Guidelines
- Write like a local, not a corporation. Warm, confident, unpretentious.
- Lead with benefits ("Fresh dough made daily") not features ("We have a dough machine").
- Use specific proof points: "Wisconsin's finest dairies", "Brooklyn's oldest pasta houses", "Hunts Point Market"
- Short sentences. No jargon. Every word earns its place.

---

## SEO Strategy

### Target Keywords
- "pizza Springfield NJ"
- "best pizza Route 22"
- "pizza delivery Springfield NJ"
- "Italian restaurant Springfield NJ"
- "catering Springfield NJ"
- "Anthony Franco's menu"

### Technical SEO Requirements
- Full `Restaurant` + `Menu` JSON-LD schema on every page
- `LocalBusiness` schema with hours, address, phone, geo coordinates
- OpenGraph + Twitter Card meta for social sharing (food photos)
- Auto-generated XML sitemap via Next.js
- Semantic HTML (proper heading hierarchy, landmark elements)
- Alt text on every image (descriptive, keyword-natural)
- Page-specific meta titles and descriptions (not duplicated)
- Canonical URLs

---

## Menu Data

The complete structured menu is at `assets/menu/menu-data-extracted.md`. This is the source of truth for all menu content on the site. Key stats:
- 25+ specialty pizza varieties
- 4 pizza sizes + gluten free + cauliflower crust
- Full Italian entree menu (chicken, veal, shrimp — 15+ preparations each)
- Pasta with 18+ sauce options
- Catering menu with half/full tray pricing
- Calzones, rolls, sandwiches, wraps, salads, soups

---

## Asset Generation

### Food Photography (Gemini Nano Banana 2)
- Generate hero-quality shots of top menu items
- Style: warm lighting, shallow depth of field, dark/rustic background, steam visible
- Priority items: Margherita pizza (whole + slice with cheese pull), chicken parm, baked ziti, fresh mozzarella appetizer, cannoli
- Output to `assets/photography/food/`

### Hero Video (Remotion + Gemini)
- 10-20 second seamless loop
- Transparent background elements composited in Remotion
- Scenes: dough tossing, pizza sliding into oven, cheese pull, fresh pie on counter
- Output to `assets/video/hero/`
- Must compress to <5MB for web delivery

---

## File Structure (Next.js App Router)

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, sticky nav + order bar
│   ├── page.tsx            # Homepage — hero, social proof, featured items, CTA
│   ├── menu/
│   │   └── page.tsx        # Interactive visual menu
│   ├── about/
│   │   └── page.tsx        # Story, team, sourcing
│   ├── catering/
│   │   └── page.tsx        # Tray menu + inquiry form
│   └── contact/
│       └── page.tsx        # Map, hours, delivery areas
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileOrderBar.tsx
│   ├── hero/
│   │   └── HeroVideo.tsx
│   ├── menu/
│   │   ├── MenuCategory.tsx
│   │   ├── MenuItem.tsx
│   │   └── MenuFilter.tsx
│   ├── social-proof/
│   │   ├── ReviewCarousel.tsx
│   │   └── StarRating.tsx
│   └── cta/
│       ├── OrderButton.tsx
│       └── CallButton.tsx
├── lib/
│   ├── menu-data.ts        # Typed menu data from extracted markdown
│   └── schema.ts           # JSON-LD structured data generators
├── styles/
│   └── globals.css         # Tailwind base + custom properties
└── public/
    ├── fonts/
    ├── images/             # Optimized production images
    └── video/              # Compressed hero video
```

---

## Development Rules

1. **Never break the conversion funnel.** If a change removes or obscures a CTA, it's wrong.
2. **Performance is a feature.** Every component should be evaluated for its impact on load time. Lazy load aggressively below the fold.
3. **Test on mobile first.** If it doesn't work on a phone in portrait mode, it doesn't ship.
4. **Accessibility matters.** Proper contrast ratios, focus states, aria labels. This also helps SEO.
5. **Keep it real.** Use actual menu prices, actual hours, actual phone number. No placeholder content in production.
6. **Images via next/image.** Always use the Next.js Image component for automatic optimization, WebP/AVIF conversion, and responsive sizing.
7. **Semantic HTML.** Use proper elements (`nav`, `main`, `section`, `article`, `header`, `footer`). No div soup.
8. **Component-driven.** Small, focused components. Menu items, CTAs, and review cards should all be reusable.

---

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build & Deploy
npm run build        # Production build
npm run start        # Start production server locally
# Vercel auto-deploys on push to main

# Asset Generation (when scripts are built)
npm run generate:food-photos    # Generate food photography via Gemini
npm run generate:hero-video     # Generate hero video via Remotion + Gemini
```

---

## Remember

This website exists to do one thing: **put more orders through the door at Anthony Franco's Springfield.** Every pixel, every millisecond of load time, every word of copy should serve that goal. We're not competing with Domino's corporate budget — we're competing with 5 local shops that have terrible websites. The bar is low. We clear it by a mile.
