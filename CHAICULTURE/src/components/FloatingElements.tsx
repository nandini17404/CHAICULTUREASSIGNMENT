import { motion } from "framer-motion";

const FloatingElements = () => {
  // Golden sparkles
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  // Floating spice elements
  const spicePositions = [
    { left: "10%", top: "20%", type: "cardamom" },
    { left: "85%", top: "15%", type: "cinnamon" },
    { left: "75%", top: "70%", type: "star" },
    { left: "15%", top: "75%", type: "cardamom" },
    { left: "90%", top: "45%", type: "leaf" },
    { left: "5%", top: "50%", type: "leaf" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Golden sparkle particles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0],
            scale: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating spice elements */}
      {spicePositions.map((spice, index) => (
        <motion.div
          key={`spice-${index}`}
          className="absolute"
          style={{ left: spice.left, top: spice.top }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {spice.type === "cardamom" && (
            <svg width="20" height="28" viewBox="0 0 20 28" className="text-gold/40">
              <ellipse cx="10" cy="14" rx="6" ry="10" fill="currentColor" />
              <path d="M10 4 Q12 0 10 0 Q8 0 10 4" fill="currentColor" />
            </svg>
          )}
          {spice.type === "cinnamon" && (
            <svg width="40" height="12" viewBox="0 0 40 12" className="text-gold/30">
              <rect x="0" y="0" width="40" height="10" rx="5" fill="currentColor" />
              <path d="M2 5 C10 2, 30 8, 38 5" stroke="hsl(43 80% 60%)" strokeWidth="0.5" fill="none" />
            </svg>
          )}
          {spice.type === "star" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold/35">
              <path
                d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z"
                fill="currentColor"
              />
            </svg>
          )}
          {spice.type === "leaf" && (
            <svg width="18" height="24" viewBox="0 0 18 24" className="text-gold/25">
              <path
                d="M9 0 Q18 8 9 24 Q0 8 9 0"
                fill="currentColor"
              />
              <path d="M9 4 L9 20" stroke="hsl(43 80% 60%)" strokeWidth="0.5" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Subtle golden glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-gold/5 blur-3xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingElements;
