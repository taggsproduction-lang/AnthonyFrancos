const reviews = [
  {
    name: "Mike R.",
    text: "Best pizza on Route 22, hands down. The Grandma pie is incredible — crispy thin crust with the perfect amount of sauce.",
    stars: 5,
  },
  {
    name: "Sarah L.",
    text: "We order from here at least once a week. The chicken parm sub is enormous and the delivery is always fast. Love that they use their own drivers.",
    stars: 5,
  },
  {
    name: "Tom D.",
    text: "Finally a real Italian spot in Springfield. The lobster ravioli and veal marsala are restaurant quality at takeout prices.",
    stars: 5,
  },
  {
    name: "Jessica M.",
    text: "Ordered catering for my son's birthday — half trays of baked ziti and chicken parm. Everything was hot, fresh, and enough to feed 30 people.",
    stars: 5,
  },
];

export default function ReviewCarousel() {
  return (
    <section className="bg-brand-warm py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            What Our Customers Say
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-brand-charcoal md:text-4xl">
            Springfield&apos;s Favorite Slice
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-charcoal">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
