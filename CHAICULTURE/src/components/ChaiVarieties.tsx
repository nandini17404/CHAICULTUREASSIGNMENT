import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const chaiVarieties = [
  {
    name: "Masala Chai",
    description:
      "A bold blend of black tea infused with aromatic spices like cardamom, cinnamon, cloves, and ginger.",
    color: "from-primary/40 to-primary/10",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12 text-gold group-hover:text-primary transition-colors duration-500"
        fill="none"
      >
        <path
          d="M10 18 L12 38 C12 40 14 42 24 42 C34 42 36 40 36 38 L38 18 Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="24"
          cy="18"
          rx="14"
          ry="3"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Ginger Chai",
    description:
      "Warm and invigorating chai with fresh ginger root, perfect for a cozy evening or morning boost.",
    color: "from-primary/40 to-primary/10",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12 text-gold group-hover:text-primary transition-colors duration-500"
        fill="none"
      >
        <path
          d="M16 28 Q12 24 14 20 Q18 16 24 18 Q28 14 34 18 Q38 22 34 28 Q30 32 26 30 Q22 34 16 28"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Cardamom Chai",
    description:
      "The queen of spices meets premium tea leaves for an aromatic, soothing, and subtly sweet experience.",
    color: "from-primary/40 to-primary/10",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12 text-gold group-hover:text-primary transition-colors duration-500"
        fill="none"
      >
        <ellipse
          cx="24"
          cy="26"
          rx="8"
          ry="12"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M24 18 L24 34" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

/* ================= COMPONENT ================= */

const ChaiVarieties = () => {
  return (
    <section className="relative py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-2">
            Explore Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Premium <span className="text-gradient-gold">Chai Blends</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-lg mx-auto">
            Each blend is carefully crafted using traditional recipes passed down through generations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chaiVarieties.map((variety, index) => (
            <motion.div
              key={variety.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative cursor-pointer"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${variety.color}
                blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              {/* Card */}
              <div
                className="relative bg-background/80 backdrop-blur-md rounded-2xl p-6 md:p-8
                border border-primary/20 group-hover:border-primary/50
                transition-all duration-500 group-hover:-translate-y-2 shadow-lg"
              >
                {/* Icon */}
                <div
                  className="mb-4 p-3 w-fit rounded-xl bg-primary/10 border border-primary/30
                  group-hover:bg-primary/20
                  group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]
                  transition-all duration-500"
                >
                  {variety.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {variety.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {variety.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaiVarieties;
