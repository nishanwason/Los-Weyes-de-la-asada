export default function Hero() {
  const ticker =
    "🔥 100% AL CARBÓN · ORGULLO MEXICANO 🇲🇽 · HANDMADE TORTILLAS · BEST CARNE ASADA IN SAN ANTONIO · OPEN LATE 🔥 ";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #2a1200 0%, #1a0800 40%, #0d0d0d 100%)",
      }}
    >
      {/* Ambient fire glow blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,93,4,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(193,18,31,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 flex-1">
        {/* Tagline above title */}
        <p
          className="text-ember text-sm sm:text-base tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          San Antonio, TX · Est. 2019
        </p>

        {/* Main title */}
        <h1
          className="text-flicker leading-none mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 14vw, 12rem)",
            letterSpacing: "0.04em",
            color: "#fdf0d5",
          }}
        >
          LOS WEYES
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #e85d04 0%, #ffd60a 60%, #f48c06 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DE LA ASADA
          </span>
        </h1>

        {/* Spanish subtitle */}
        <p
          className="text-cream/90 text-xl sm:text-2xl md:text-3xl mb-3 mt-2"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
        >
          Los más chingones 🔥 | 100% al carbón
        </p>

        {/* English subtitle */}
        <p
          className="text-cream/50 text-sm sm:text-base tracking-widest uppercase mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Authentic Mexican Food Truck · San Antonio, TX
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#menu"
            className="btn-fire px-8 py-4 rounded-full text-xl tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Ver Menú
          </a>
          <a
            href="https://www.doordash.com/store/los-weyes-de-la-asada---1009-avenue-b-san-antonio-34117131/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-xl tracking-widest border-2 border-fire text-fire hover:bg-fire hover:text-bg transition-all duration-200"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Order Online
          </a>
        </div>

        {/* Floating scroll cue */}
        <div className="mt-14 flex flex-col items-center gap-2 opacity-40">
          <span className="text-cream text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Scroll
          </span>
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="#fdf0d5" strokeWidth="1.5" />
            <rect
              x="8.5"
              y="6"
              width="3"
              height="8"
              rx="1.5"
              fill="#fdf0d5"
              style={{ animation: "pulse 1.8s ease-in-out infinite" }}
            />
          </svg>
        </div>
      </div>

      {/* Fire divider */}
      <div className="fire-divider" aria-hidden="true" />

      {/* Marquee ticker */}
      <div
        className="relative overflow-hidden bg-surface py-3"
        aria-label="Ticker: restaurant highlights"
      >
        <div className="animate-marquee">
          {/* Doubled for seamless loop */}
          {[ticker, ticker].map((t, i) => (
            <span
              key={i}
              className="text-ember font-medium tracking-widest text-sm uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-hidden={i === 1 ? "true" : undefined}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
