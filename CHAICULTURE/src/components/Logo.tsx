import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-3 md:gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Premium chai cup icon with ornate details */}
      <div className="relative">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 56 56" 
          fill="none" 
          className="text-gold md:w-14 md:h-14"
        >
          <defs>
            <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(43 80% 55%)" />
              <stop offset="50%" stopColor="hsl(43 80% 50%)" />
              <stop offset="100%" stopColor="hsl(43 65% 45%)" />
            </linearGradient>
            <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(43 80% 50%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(43 80% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Decorative plate/saucer */}
          <ellipse 
            cx="24" 
            cy="46" 
            rx="18" 
            ry="4" 
            fill="url(#cupGradient)"
            fillOpacity="0.3"
          />
          <ellipse 
            cx="24" 
            cy="46" 
            rx="18" 
            ry="4" 
            stroke="url(#cupGradient)"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Cup body with ornate pattern */}
          <path 
            d="M8 20C8 18 10 16 12 16H36C38 16 40 18 40 20V34C40 40 33 46 24 46C15 46 8 40 8 34V20Z" 
            fill="url(#cupGradient)"
            fillOpacity="0.15"
          />
          <path 
            d="M8 20C8 18 10 16 12 16H36C38 16 40 18 40 20V34C40 40 33 46 24 46C15 46 8 40 8 34V20Z" 
            stroke="url(#cupGradient)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Decorative pattern on cup */}
          <path 
            d="M14 24 Q24 28 34 24" 
            stroke="url(#cupGradient)"
            strokeWidth="1"
            strokeOpacity="0.6"
            fill="none"
          />
          <path 
            d="M14 30 Q24 34 34 30" 
            stroke="url(#cupGradient)"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
          
          {/* Cup handle with ornate curve */}
          <path 
            d="M40 22C42 22 48 24 48 30C48 36 42 38 40 38" 
            stroke="url(#cupGradient)"
            strokeWidth="2"
            fill="none"
          />
          <circle 
            cx="46" 
            cy="30" 
            r="1.5" 
            fill="url(#cupGradient)"
          />
          
          {/* Animated steam lines */}
          <motion.path 
            d="M16 12 Q18 8 16 4" 
            stroke="url(#steamGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ 
              d: ["M16 12 Q18 8 16 4", "M16 12 Q14 8 16 4", "M16 12 Q18 8 16 4"],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M24 10 Q26 6 24 2" 
            stroke="url(#steamGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ 
              d: ["M24 10 Q26 6 24 2", "M24 10 Q22 6 24 2", "M24 10 Q26 6 24 2"],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path 
            d="M32 12 Q34 8 32 4" 
            stroke="url(#steamGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ 
              d: ["M32 12 Q34 8 32 4", "M32 12 Q30 8 32 4", "M32 12 Q34 8 32 4"],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-cream tracking-wide">
          Chai Culture
        </span>
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-gradient-to-r from-gold to-transparent" />
          <span className="text-[10px] md:text-xs text-gold font-sans tracking-[0.25em] uppercase">
            Est. 2025
          </span>
          <div className="h-px w-4 bg-gradient-to-l from-gold to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
