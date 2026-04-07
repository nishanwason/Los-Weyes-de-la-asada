type Review = {
  reviewer: string;
  platform: string;
  text: string;
};

const reviews: Review[] = [
  {
    reviewer: "Visiting San Antonio",
    platform: "Google Review",
    text: "10/10, meat was tender and flavors were on point. Despite how much food we ordered, our food came out really fast & hot and of course fresh.",
  },
  {
    reviewer: "Google User",
    platform: "Google Review",
    text: "The food is amazing and the asada tacos were on special for $10 for 5 mini tacos and they did not disappoint. The salsa was so good as well. 😋 10/10 I will definitely come back.",
  },
  {
    reviewer: "Google User",
    platform: "Google Review",
    text: "The ingredients, which all had distinct flavors, were really good, very flavorful, and mouthwatering. It's clear that the ingredients are top-notch. Despite everything being freshly prepared, the service was very fast. The price was absolutely right.",
  },
  {
    reviewer: "Yahoo / Google User",
    platform: "Google Review",
    text: "Siempre estoy en busca de buenos tacos de carne asada y estos están MUUUUY buenos. Pedí el taco chingon con queso, tortillas de harina, el guacamole BUENÍSIMO con frijoles y una rica salsa picosa.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-gold text-lg" aria-hidden="true">
          ⭐
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="relative rounded-xl p-6 border border-smoke/50 hover:border-ember/40 transition-colors duration-300 overflow-hidden"
      style={{ background: "#15100a" }}
    >
      {/* Left ember border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{
          background: "linear-gradient(180deg, #f48c06, #e85d04)",
        }}
        aria-hidden="true"
      />

      <div className="pl-2">
        {/* Stars */}
        <StarRating />

        {/* Review text */}
        <blockquote className="mt-4 mb-5">
          <p
            className="text-cream/85 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            &ldquo;{review.text}&rdquo;
          </p>
        </blockquote>

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p
            className="text-cream/50 text-sm font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            — {review.reviewer}
          </p>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: "#4285F422",
              color: "#8ab4f8",
              border: "1px solid #4285F444",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {review.platform}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      id="resenas"
      className="relative py-20 sm:py-28 px-4"
      style={{ background: "#0a0804" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2
            className="text-cream leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "0.08em",
            }}
          >
            LO QUE{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f48c06, #ffd60a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DICEN
            </span>
          </h2>
          <p
            className="text-cream/50 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            (What They&rsquo;re Saying)
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-gold text-xl" aria-hidden="true">
                  ⭐
                </span>
              ))}
            </div>
            <span
              className="text-cream font-medium text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              4.7
            </span>
            <span
              className="text-cream/40 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              on Google · 695+ reviews
            </span>
          </div>
        </div>

        {/* Fire divider */}
        <div className="fire-divider my-10" aria-hidden="true" />

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Press mention */}
        <div className="mt-10 text-center">
          <p
            className="text-cream/40 text-xs sm:text-sm tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            As featured in{" "}
            <span className="text-gold">Texas Monthly</span>
            {" "}·{" "}
            <span className="text-ember">#35 Best Tacos in San Antonio</span>
            {" "}(Wanderlog)
          </p>
        </div>
      </div>
    </section>
  );
}
