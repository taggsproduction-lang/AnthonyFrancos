import { BUSINESS } from "./constants";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.fullName,
    image: "/images/af-logo-primary.png",
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 US-22",
      addressLocality: "Springfield",
      addressRegion: "NJ",
      postalCode: "07081",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.6942,
      longitude: -74.3224,
    },
    url: BUSINESS.orderUrl,
    servesCuisine: ["Italian", "Pizza", "Pasta"],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Pizza",
          hasMenuItem: {
            "@type": "MenuItem",
            name: "Margherita Pizza",
            description:
              "Fresh plum tomato sauce, fresh mozzarella, basil and olive oil",
            offers: { "@type": "Offer", price: "23.35", priceCurrency: "USD" },
          },
        },
      ],
    },
  };
}
