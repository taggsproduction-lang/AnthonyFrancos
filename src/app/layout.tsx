import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileOrderBar from "@/components/layout/MobileOrderBar";
import { getRestaurantSchema } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anthony Franco's Pizzeria | Springfield NJ | Pizza Delivery & Dine-In",
    template: "%s | Anthony Franco's Pizzeria",
  },
  description:
    "Authentic New York-style pizza, pasta, and Italian dishes in Springfield NJ. Fresh dough daily, premium ingredients, and employee-managed delivery. Order online or call (973) 218-5757.",
  keywords: [
    "pizza Springfield NJ",
    "best pizza Route 22",
    "Italian restaurant Springfield NJ",
    "pizza delivery Springfield NJ",
    "Anthony Francos menu",
    "catering Springfield NJ",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Anthony Franco's Pizzeria & Ristorante",
    title: "Anthony Franco's Pizzeria | Springfield NJ",
    description:
      "Authentic New York-style pizza with premium ingredients. Order online for delivery or pickup.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRestaurantSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}
