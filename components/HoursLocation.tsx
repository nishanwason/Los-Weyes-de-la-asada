type HoursRow = {
  day: string;
  hours: string;
  closed?: boolean;
};

const hoursData: HoursRow[] = [
  { day: "Monday", hours: "6:00 PM – 11:00 PM" },
  { day: "Tuesday", hours: "6:00 PM – 11:00 PM" },
  { day: "Wednesday", hours: "CLOSED", closed: true },
  { day: "Thursday", hours: "6:00 PM – 11:00 PM" },
  { day: "Friday", hours: "6:00 PM – 1:00 AM" },
  { day: "Saturday", hours: "1:00 PM – 1:00 AM" },
  { day: "Sunday", hours: "12:00 PM – 11:00 PM" },
];

export default function HoursLocation() {
  return (
    <section
      id="horarios"
      className="relative py-20 sm:py-28 px-4"
      style={{ background: "#0f0904" }}
    >
      {/* Top divider */}
      <div className="fire-divider mb-16" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            className="text-cream leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "0.08em",
            }}
          >
            ENCUÉNTR
            <span
              style={{
                background: "linear-gradient(135deg, #e85d04, #ffd60a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ANOS
            </span>
          </h2>
          <p
            className="text-cream/40 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            (Find Us)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <h3
              className="text-fire text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em", fontSize: "1rem" }}
            >
              Horarios · Hours
            </h3>
            <div
              className="rounded-xl overflow-hidden border border-smoke/50"
              style={{ background: "#1a1008" }}
            >
              <table className="w-full" aria-label="Business hours">
                <tbody>
                  {hoursData.map((row) => (
                    <tr
                      key={row.day}
                      className={`border-b border-smoke/30 last:border-b-0 ${
                        row.closed ? "opacity-40" : ""
                      }`}
                    >
                      <td
                        className="px-5 py-3.5 text-sm"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: row.closed ? "#fdf0d5" : "#fdf0d5",
                          fontWeight: 500,
                        }}
                      >
                        {row.day}
                      </td>
                      <td
                        className="px-5 py-3.5 text-sm text-right"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: row.closed ? "#6b5a4e" : "#f48c06",
                          fontStyle: row.closed ? "italic" : "normal",
                          letterSpacing: row.closed ? "0.1em" : "0",
                        }}
                      >
                        {row.closed ? "— CLOSED —" : row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              className="mt-5 text-cream/30 text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Hours may vary on holidays. Follow us on Facebook for updates.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3
              className="text-fire text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em", fontSize: "1rem" }}
            >
              Ubicación · Location
            </h3>

            {/* Contact info */}
            <div
              className="rounded-xl border border-smoke/50 p-6 mb-5"
              style={{ background: "#1a1008" }}
            >
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-fire text-lg mt-0.5" aria-hidden="true">📍</span>
                  <div>
                    <p
                      className="text-cream font-medium text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      1009 Avenue B, San Antonio, TX 78215
                    </p>
                    <p
                      className="text-cream/40 text-xs mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "italic" }}
                    >
                      El Camino food truck park — northern edge of downtown San Antonio
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-fire text-lg" aria-hidden="true">📞</span>
                  <a
                    href="tel:+12107889121"
                    className="text-cream/80 text-sm hover:text-fire transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    (210) 788-9121
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-fire text-lg" aria-hidden="true">✉️</span>
                  <a
                    href="mailto:info@losweyesdelaasada.com"
                    className="text-cream/80 text-sm hover:text-fire transition-colors duration-200 break-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    info@losweyesdelaasada.com
                  </a>
                </div>
              </address>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-smoke/50" style={{ height: "220px" }}>
              <iframe
                title="Los Weyes de la Asada location — 1009 Avenue B, San Antonio TX"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.3442143!2d-98.4836!3d29.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5e7b4f8d4e3f%3A0x9a4b2c1d3e5f6a7b!2s1009+Avenue+B%2C+San+Antonio%2C+TX+78215!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fire-divider mt-16" aria-hidden="true" />
    </section>
  );
}
