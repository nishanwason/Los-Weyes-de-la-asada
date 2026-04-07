export default function Story() {
  return (
    <section
      id="historia"
      className="relative py-20 sm:py-28 px-4"
      style={{ background: "#0f0904" }}
    >
      {/* Top fire divider */}
      <div className="fire-divider mb-16" aria-hidden="true" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <p
            className="text-fire text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Nuestra Historia
          </p>
          <h2
            className="text-cream leading-tight mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            From a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e85d04, #ffd60a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $50 Grill
            </span>{" "}
            to San Antonio&rsquo;s Best Asada
          </h2>

          <p
            className="text-cream/80 text-base sm:text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Diego Zamora started Los Weyes de la Asada in December 2019 with a
            borrowed grill and a dream from Celaya, Guanajuato, Mexico. He
            cooked on a $49.99 Walmart asador for nearly two years before
            earning his own trailer. Through a pandemic, long nights, and events
            across San Antonio — he built something real.
          </p>
          <p
            className="text-cream/80 text-base sm:text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Today, Los Weyes is featured in{" "}
            <em className="text-gold">Texas Monthly</em> and serves what many
            call the best carne asada in the city. Every taco is made with 100%
            mesquite charcoal, handmade tortillas, and fresh-cut vegetables.
            That&rsquo;s the commitment. That&rsquo;s the pride.
          </p>
          <p
            className="text-fire text-xl"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Orgullo Mexicano.
          </p>

          {/* Texas Monthly badge */}
          <div className="mt-8 inline-flex items-center gap-3 border border-smoke rounded-lg px-5 py-3">
            <span className="text-gold text-2xl" aria-hidden="true">⭐</span>
            <span
              className="text-cream/70 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              As featured in{" "}
              <span className="text-gold font-medium">Texas Monthly</span>
            </span>
          </div>
        </div>

        {/* Right — Typographic display */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Glow bg */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(232,93,4,0.15) 0%, transparent 70%)",
            }}
          />

          {/* EST. 2019 */}
          <p
            className="relative z-10 text-center leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              letterSpacing: "0.6em",
              color: "#f48c06",
            }}
          >
            ESTABLISHED
          </p>
          <p
            className="relative z-10 text-center leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(6rem, 20vw, 14rem)",
              letterSpacing: "0.02em",
              background: "linear-gradient(180deg, #ffd60a 0%, #e85d04 60%, #c1121f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.9,
            }}
          >
            2019
          </p>

          {/* Flame SVG */}
          <svg
            width="80"
            height="100"
            viewBox="0 0 80 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 mt-4 flame-wiggle"
            aria-hidden="true"
          >
            <path
              d="M40 95C40 95 8 76 8 48C8 30 20 20 28 14C26 24 30 30 36 32C34 22 38 10 52 2C48 14 52 22 56 26C62 18 64 8 62 2C72 14 72 30 68 40C72 36 74 28 74 28C80 44 72 62 60 72C62 62 60 54 56 50C58 62 52 76 40 95Z"
              fill="url(#flameGrad)"
            />
            <defs>
              <linearGradient id="flameGrad" x1="40" y1="2" x2="40" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd60a" />
                <stop offset="40%" stopColor="#f48c06" />
                <stop offset="80%" stopColor="#e85d04" />
                <stop offset="100%" stopColor="#c1121f" />
              </linearGradient>
            </defs>
          </svg>

          <p
            className="relative z-10 text-center text-smoke text-sm tracking-[0.4em] uppercase mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Celaya, Gto. → San Antonio, TX
          </p>
        </div>
      </div>

      <div className="fire-divider mt-16" aria-hidden="true" />
    </section>
  );
}
