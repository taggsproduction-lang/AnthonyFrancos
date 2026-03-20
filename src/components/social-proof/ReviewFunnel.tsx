"use client";

import { useState } from "react";

const GBP_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJOwg_06VPwokRYv534QaPC8g";

export default function ReviewFunnel() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [step, setStep] = useState<"rate" | "feedback" | "thanks">("rate");
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  const handleStarClick = (star: number) => {
    setRating(star);
    if (star === 5) {
      // 5 stars → send to Google Business Profile
      window.open(GBP_REVIEW_URL, "_blank", "noopener,noreferrer");
      setStep("thanks");
    } else {
      // < 5 stars → show feedback form
      setStep("feedback");
    }
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to backend logging
    console.log("Review submitted:", { rating, name, feedback });
    setStep("thanks");
  };

  const displayStars = hoveredStar || rating;

  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-8 text-center shadow-sm md:p-10">
          {step === "rate" && (
            <>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                How Was Your Experience?
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-brand-charcoal md:text-3xl">
                Rate Anthony Franco&apos;s
              </h2>
              <p className="mt-2 text-brand-charcoal/60">
                Your feedback helps us serve you better
              </p>

              {/* Star rating */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  >
                    <svg
                      className={`h-12 w-12 transition-colors md:h-14 md:w-14 ${
                        star <= displayStars
                          ? "text-brand-gold"
                          : "text-brand-charcoal/15"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-charcoal/40">
                Tap a star to rate
              </p>
            </>
          )}

          {step === "feedback" && (
            <>
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-6 w-6 ${
                      star <= rating
                        ? "text-brand-gold"
                        : "text-brand-charcoal/15"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-brand-charcoal">
                We Want to Make It Right
              </h2>
              <p className="mt-2 text-brand-charcoal/60">
                We take every piece of feedback seriously. Tell us what we can
                do better — your comments go directly to our management team.
              </p>

              <form
                onSubmit={handleSubmitFeedback}
                className="mt-6 space-y-4 text-left"
              >
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-sm font-medium text-brand-charcoal/70"
                  >
                    Your Name{" "}
                    <span className="text-brand-charcoal/40">(optional)</span>
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className="mt-1 w-full rounded-xl border border-brand-charcoal/15 bg-brand-cream/50 px-4 py-3 text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-red/50 focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review-feedback"
                    className="block text-sm font-medium text-brand-charcoal/70"
                  >
                    What can we improve?
                  </label>
                  <textarea
                    id="review-feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us about your experience — what could we have done better?"
                    rows={4}
                    required
                    className="mt-1 w-full resize-none rounded-xl border border-brand-charcoal/15 bg-brand-cream/50 px-4 py-3 text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-red/50 focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-brand-red-dark"
                >
                  Submit Feedback
                </button>

                <p className="text-center text-xs text-brand-charcoal/40">
                  Your feedback is private and will only be seen by our team.
                </p>
              </form>
            </>
          )}

          {step === "thanks" && (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
                <svg
                  className="h-8 w-8 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-brand-charcoal">
                Thank You!
              </h2>
              <p className="mt-2 text-brand-charcoal/60">
                {rating === 5
                  ? "We appreciate you taking the time to leave a review. Your support means the world to our family!"
                  : "Your feedback has been received. We take every comment seriously and will work to improve your experience."}
              </p>

              <button
                onClick={() => {
                  setStep("rate");
                  setRating(0);
                  setFeedback("");
                  setName("");
                }}
                className="mt-6 text-sm font-semibold text-brand-red transition hover:text-brand-red-dark"
              >
                Leave another review
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
