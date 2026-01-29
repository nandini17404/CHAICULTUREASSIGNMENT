import { motion } from "framer-motion";

const SteamParticles = () => {
  // Generate random particles for steam effect
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 2 + Math.random() * 4,
  }));

  // Generate spice particles (cardamom, cinnamon bits)
  const spices = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 3 + Math.random() * 5,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Steam particles */}
      {particles.map((particle) => (
        <motion.div
          key={`steam-${particle.id}`}
          className="absolute rounded-full bg-cream/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            bottom: "30%",
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0],
            y: [-20, -100, -200],
            scale: [0.5, 1.2, 0.8],
            x: [0, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating spice particles */}
      {spices.map((spice) => (
        <motion.div
          key={`spice-${spice.id}`}
          className="absolute"
          style={{
            left: `${spice.x}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0],
            y: [0, -30, -60, -100],
            x: [0, (Math.random() - 0.5) * 50],
            rotate: [spice.rotation, spice.rotation + 180],
          }}
          transition={{
            duration: spice.duration,
            delay: spice.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Cardamom-like shapes */}
          {spice.id % 3 === 0 ? (
            <div
              className="rounded-full bg-gradient-to-br from-[hsl(85,30%,35%)] to-[hsl(85,25%,25%)]"
              style={{
                width: spice.size * 1.5,
                height: spice.size * 2,
              }}
            />
          ) : spice.id % 3 === 1 ? (
            /* Cinnamon stick bits */
            <div
              className="rounded-sm bg-gradient-to-r from-[hsl(20,60%,30%)] to-[hsl(15,50%,25%)]"
              style={{
                width: spice.size * 2.5,
                height: spice.size,
              }}
            />
          ) : (
            /* Star anise points */
            <div
              className="bg-[hsl(30,40%,25%)]"
              style={{
                width: spice.size,
                height: spice.size,
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Glowing warmth particles */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SteamParticles;
