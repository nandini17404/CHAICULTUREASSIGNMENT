import { motion } from "framer-motion";

const SpiceWheel = () => {
  const spices = [
    { name: "Cardamom", color: "hsl(85, 30%, 40%)", shape: "ellipse" },
    { name: "Cinnamon", color: "hsl(20, 50%, 35%)", shape: "rect" },
    { name: "Star Anise", color: "hsl(30, 40%, 30%)", shape: "star" },
    { name: "Clove", color: "hsl(15, 45%, 25%)", shape: "clove" },
    { name: "Ginger", color: "hsl(45, 60%, 55%)", shape: "ginger" },
    { name: "Black Pepper", color: "hsl(0, 0%, 20%)", shape: "circle" },
  ];

  return (
    <motion.div
      className="absolute bottom-8 right-8 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-10"
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
      <div className="absolute inset-2 rounded-full border border-gold/20" />
      
      {/* Center medallion */}
      <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 border border-gold/50 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 rounded-full bg-gold/80"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Spice elements arranged in a circle */}
      {spices.map((spice, index) => {
        const angle = (index * 360) / spices.length;
        const radian = (angle * Math.PI) / 180;
        const radius = 45; // Percentage from center
        const x = 50 + radius * Math.cos(radian - Math.PI / 2);
        const y = 50 + radius * Math.sin(radian - Math.PI / 2);

        return (
          <motion.div
            key={spice.name}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
            }}
          >
            {spice.shape === "ellipse" && (
              <div
                className="w-4 h-6 rounded-full"
                style={{ backgroundColor: spice.color }}
              />
            )}
            {spice.shape === "rect" && (
              <div
                className="w-6 h-2 rounded-sm"
                style={{ backgroundColor: spice.color }}
              />
            )}
            {spice.shape === "star" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z"
                  fill={spice.color}
                />
              </svg>
            )}
            {spice.shape === "clove" && (
              <div
                className="w-2 h-5 rounded-b-full"
                style={{ backgroundColor: spice.color }}
              />
            )}
            {spice.shape === "ginger" && (
              <div
                className="w-5 h-3 rounded-lg"
                style={{ backgroundColor: spice.color }}
              />
            )}
            {spice.shape === "circle" && (
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: spice.color }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Decorative connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {spices.map((_, index) => {
          const angle = (index * 360) / spices.length;
          const radian = (angle * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(radian - Math.PI / 2);
          const y = 50 + 35 * Math.sin(radian - Math.PI / 2);
          return (
            <line
              key={index}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="hsl(43, 80%, 50%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
      </svg>
    </motion.div>
  );
};

export default SpiceWheel;
