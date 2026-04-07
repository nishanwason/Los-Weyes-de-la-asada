export default function OrderOnline() {
  return (
    <section
      id="pide"
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2a0a00 0%, #1a0500 40%, #0d0000 70%, #1a0800 100%)",
      }}
    >
      {/* Background ember glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(232,93,4,0.22) 0%, transparent 65%)",
        }}
      />

      {/* Fire particle SVG dots */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          [10, 20, 3], [25, 70, 4], [40, 15, 2], [55, 80, 5], [70, 30, 3],
          [85, 65, 4], [15, 50, 2], [90, 10, 3], [60, 90, 5], [35, 45, 4],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r={r}
            fill="#f48c06"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="text-5xl mb-6 flame-wiggle inline-block">🔥</div>

        {/* Headline */}
        <h2
          className="text-cream leading-tight mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "0.06em",
          }}
        >
          ¿Tienes{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffd60a, #f48c06)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hambre?
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="text-cream/70 text-base sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Order delivery or pick up tonight. We&rsquo;re grilling right now.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          {/* DoorDash */}
          <a
            href="https://www.doordash.com/store/los-weyes-de-la-asada---1009-avenue-b-san-antonio-34117131/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-bg font-semibold text-lg transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #ff3008, #e85d04)",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 6px 24px rgba(255,48,8,0.4)",
              minWidth: "200px",
              justifyContent: "center",
            }}
            aria-label="Order on DoorDash"
          >
            {/* DoorDash "D" icon (inline SVG) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm-1 4v6h2.5C15.33 15 16 14.1 16 13s-.67-2-2.5-2H11z" fill="white" />
            </svg>
            DoorDash
          </a>

          {/* Uber Eats */}
          <a
            href="https://www.ubereats.com/store/los-weyes-de-la-asada-1009-avenue-b/ENVbZlUxR4qdGjWcbpw31w"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "#000",
              color: "#fff",
              border: "2px solid #333",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
              minWidth: "200px",
              justifyContent: "center",
            }}
            aria-label="Order on Uber Eats"
          >
            {/* Uber Eats icon (inline SVG) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#06C167" />
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">UE</text>
            </svg>
            Uber Eats
          </a>
        </div>

        {/* Delivery hours note */}
        <p
          className="mt-10 text-cream/30 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Delivery & pickup available during business hours · Closed Wednesdays
        </p>
      </div>
    </section>
  );
}
