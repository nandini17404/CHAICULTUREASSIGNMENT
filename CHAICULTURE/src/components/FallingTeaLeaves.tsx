import { motion } from "framer-motion";

const FallingTeaLeaves = () => {
  // Generate leaves with random properties
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 6,
    size: 10 + Math.random() * 15,
    rotation: Math.random() * 360,
    swayAmount: 30 + Math.random() * 50,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {leaves.map((leaf) => (
        <motion.div
          key={`leaf-${leaf.id}`}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: "-5%",
          }}
          initial={{ y: 0, opacity: 0, rotate: leaf.rotation }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, leaf.swayAmount, -leaf.swayAmount, leaf.swayAmount / 2, 0],
            opacity: [0, 0.8, 0.6, 0.4, 0],
            rotate: [leaf.rotation, leaf.rotation + 180, leaf.rotation + 360],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.5}
            viewBox="0 0 20 30"
            className="drop-shadow-sm"
          >
            {/* Tea leaf shape */}
            <defs>
              <linearGradient id={`leafGradient-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(85, 35%, 40%)" />
                <stop offset="50%" stopColor="hsl(85, 40%, 30%)" />
                <stop offset="100%" stopColor="hsl(85, 30%, 25%)" />
              </linearGradient>
            </defs>
            <path
              d="M10 0 Q20 10 10 30 Q0 10 10 0"
              fill={`url(#leafGradient-${leaf.id})`}
            />
            {/* Leaf vein */}
            <path
              d="M10 2 L10 26"
              stroke="hsl(85, 25%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Side veins */}
            <path
              d="M10 8 Q14 10 16 8 M10 14 Q15 16 17 14 M10 20 Q14 22 15 20"
              stroke="hsl(85, 25%, 50%)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M10 8 Q6 10 4 8 M10 14 Q5 16 3 14 M10 20 Q6 22 5 20"
              stroke="hsl(85, 25%, 50%)"
              strokeWidth="0.3"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}

      {/* A few golden-tinted dried leaves */}
      {Array.from({ length: 5 }, (_, i) => ({
        id: i + 100,
        x: 20 + Math.random() * 60,
        delay: 2 + Math.random() * 8,
        duration: 10 + Math.random() * 5,
        size: 8 + Math.random() * 10,
      })).map((leaf) => (
        <motion.div
          key={`dried-${leaf.id}`}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: "-5%",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, 40, -30, 20, 0],
            opacity: [0, 0.6, 0.5, 0.3, 0],
            rotate: [0, 270, 540],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.2}
            viewBox="0 0 16 20"
          >
            <path
              d="M8 0 Q16 8 8 20 Q0 8 8 0"
              fill="hsl(35, 50%, 45%)"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingTeaLeaves;
