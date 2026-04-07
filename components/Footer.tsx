export default function Footer() {
  return (
    <footer
      className="relative py-12 px-4"
      style={{ background: "#080503" }}
    >
      {/* Fire divider top */}
      <div className="fire-divider mb-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <div>
          <p
            className="text-fire leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              letterSpacing: "0.08em",
            }}
          >
            LOS WEYES DE LA ASADA
          </p>
          <p
            className="text-cream/50 text-sm mt-1"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Orgullo Mexicano 🇲🇽
          </p>
        </div>

        {/* Divider dots */}
        <div className="flex gap-2 items-center" aria-hidden="true">
          <span className="w-1 h-1 rounded-full bg-smoke" />
          <span className="w-12 h-px bg-smoke" />
          <span className="text-fire text-base">🔥</span>
          <span className="w-12 h-px bg-smoke" />
          <span className="w-1 h-1 rounded-full bg-smoke" />
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/losweyesdelaasada/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-smoke/60 hover:border-fire/60 transition-colors duration-200 text-cream/60 hover:text-cream text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            aria-label="Los Weyes de la Asada on Facebook"
          >
            {/* Facebook icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        {/* Bottom meta */}
        <div
          className="flex flex-col sm:flex-row items-center gap-2 text-xs text-cream/20"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span>© 2025 Los Weyes de la Asada. All rights reserved.</span>
          <span className="hidden sm:block" aria-hidden="true">·</span>
          <span>
            Built by{" "}
            <a
              href="https://summitdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-fire transition-colors duration-200"
            >
              Summit Digital
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
