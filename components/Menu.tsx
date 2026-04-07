type MenuItem = {
  id: string;
  name: string;
  nameMx?: string;
  description: string;
  badge?: string;
  badgeColor?: "gold" | "red";
  icon: string;
};

const menuItems: MenuItem[] = [
  {
    id: "tacos",
    name: "Tacos",
    nameMx: "3-pack o 5-pack",
    description:
      "Homemade 6-inch flour or corn tortilla. Choice of meat: Asada (skirt steak), Chorizo (pork sausage), or Campechano (skirt steak + pork sausage). Served with onion, cilantro, fresh limes, and house-made mild or spicy salsa.",
    icon: "🌮",
  },
  {
    id: "signature-tacos",
    name: "Signature Tacos",
    nameMx: "Tacos de la Casa",
    description:
      "Three or five tacos with premium, signature house combinations on handmade tortillas, grilled over charcoal. Served with grilled onions, cilantro, lime wedges, and house salsas.",
    icon: "🔥",
  },
  {
    id: "mini-tacos",
    name: "Mini Tacos",
    nameMx: "Tacos Mini",
    description:
      "Five mini tacos on double corn tortillas. Choice of meat: Asada, Chorizo, or Mix. Topped with onion, cilantro, and salsa. Choice of mild or spicy salsa.",
    icon: "🌽",
  },
  {
    id: "tortas",
    name: "Signature Tortas",
    nameMx: "Tortas de la Casa",
    description:
      "Toasted torta bread with mayo, grilled cheese, choice of meat (Asada, Chorizo, or Mix), beans, onion, cilantro, guacamole, and salsa.",
    icon: "🥖",
  },
  {
    id: "nachos-papa",
    name: "Nachos & Papa",
    nameMx: "Papa Cargada",
    description:
      "Mexican white potato topped with house butter, grilled cheese, crema, choice of meat (Asada, Chorizo, or Mix), onion, cilantro, guacamole, and salsa.",
    icon: "🥔",
  },
  {
    id: "ribeye",
    name: "Ribeye Plates",
    nameMx: "Plato de Ribeye",
    description:
      "16 oz grilled ribeye, cooked to order over charcoal. Served with a loaded baked potato (cheese, more beef) and two small corn or flour quesadillas. Featured every Tuesday.",
    badge: "⭐ STEAK NIGHT — TUESDAYS",
    badgeColor: "gold",
    icon: "🥩",
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    nameMx: "Quesadillas",
    description:
      "Available in flour or corn tortilla variations. Perfectly grilled over charcoal — crispy outside, melted goodness inside.",
    icon: "🫓",
  },
  {
    id: "extras",
    name: "Extras & Drinks",
    nameMx: "Extras y Bebidas",
    description:
      "Bottled house salsa available for purchase — take the heat home. Drinks available. Ask about our seasonal specials.",
    icon: "🌶️",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article
      className="relative rounded-xl overflow-hidden border border-smoke/60 hover:border-fire/60 transition-colors duration-300"
      style={{ background: "#1a1008" }}
    >
      {/* Ember left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{
          background:
            item.badge
              ? "linear-gradient(180deg, #ffd60a, #f48c06)"
              : "linear-gradient(180deg, #e85d04, #c1121f)",
        }}
        aria-hidden="true"
      />

      <div className="pl-6 pr-5 py-6">
        {/* Badge */}
        {item.badge && (
          <div className="mb-3">
            <span
              className="inline-block text-xs tracking-widest px-3 py-1 rounded-full"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                background: item.badgeColor === "gold" ? "#ffd60a22" : "#c1121f22",
                color: item.badgeColor === "gold" ? "#ffd60a" : "#c1121f",
                border: `1px solid ${item.badgeColor === "gold" ? "#ffd60a66" : "#c1121f66"}`,
              }}
            >
              {item.badge}
            </span>
          </div>
        )}

        {/* Icon + Name */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl" aria-hidden="true">
            {item.icon}
          </span>
          <div>
            <h3
              className="text-fire leading-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.06em",
              }}
            >
              {item.name}
            </h3>
            {item.nameMx && (
              <p
                className="text-ember/70 text-xs"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                {item.nameMx}
              </p>
            )}
          </div>
        </div>

        {/* Grill divider */}
        <div
          className="mb-4 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg, #3d3028 0px, #3d3028 6px, transparent 6px, transparent 10px)",
          }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className="text-cream/70 text-sm leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28 px-4 grill-bg"
    >
      {/* Dark overlay over grill texture */}
      <div className="absolute inset-0 bg-bg/85" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-cream leading-none mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "0.08em",
            }}
          >
            EL{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e85d04, #ffd60a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MENÚ
            </span>
          </h2>
          <p
            className="text-cream/50 text-base sm:text-lg"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Hecho con fuego. Hecho con orgullo.
          </p>
          <p
            className="text-cream/30 text-xs mt-1 tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            (Made with fire. Made with pride.)
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Meat options note */}
        <div
          className="mt-10 text-center border border-smoke/50 rounded-xl p-5"
          style={{ background: "#1a1008" }}
        >
          <p
            className="text-fire text-sm tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
          >
            Choice of Meat
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Asada", desc: "Skirt Steak", icon: "🥩" },
              { name: "Chorizo", desc: "Pork Sausage", icon: "🌶️" },
              { name: "Campechano", desc: "Skirt Steak + Pork Sausage", icon: "🔥" },
            ].map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-smoke/60"
              >
                <span aria-hidden="true">{m.icon}</span>
                <span
                  className="text-cream font-medium text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.name}
                </span>
                <span
                  className="text-cream/40 text-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  · {m.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
