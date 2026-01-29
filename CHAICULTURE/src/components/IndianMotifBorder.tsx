const IndianMotifBorder = () => {
  const motifColor = "hsl(0 0% 55%)"; // neutral grey (NOT yellow)

  return (
    <>
      {/* Top Border */}
      <div className="fixed top-0 left-0 right-0 h-6 md:h-8 z-30 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 32">
          <defs>
            <pattern id="topMotif" x="0" y="0" width="60" height="32" patternUnits="userSpaceOnUse">
              <path
                d="M30 4 C35 4 40 8 40 14 C40 20 35 26 28 26 C22 26 18 22 18 18 C18 14 22 12 26 14 C28 15 28 18 26 19"
                fill="none"
                stroke={motifColor}
                strokeWidth="1"
                opacity="0.4"
              />
              <circle cx="10" cy="16" r="1.5" fill={motifColor} opacity="0.3" />
              <circle cx="50" cy="16" r="1.5" fill={motifColor} opacity="0.3" />
              <path d="M30 28 L33 24 L30 20 L27 24 Z" fill={motifColor} opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topMotif)" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-400/40 to-transparent" />
      </div>

      {/* Bottom Border */}
      <div className="fixed bottom-0 left-0 right-0 h-6 md:h-8 z-30 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        <svg className="absolute bottom-0 left-0 w-full h-full rotate-180" preserveAspectRatio="none" viewBox="0 0 1200 32">
          <rect width="100%" height="100%" fill="url(#topMotif)" />
        </svg>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-400/40 to-transparent" />
      </div>

      {/* Left Border */}
      <div className="fixed top-0 bottom-0 left-0 w-4 md:w-6 z-30 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 24 800">
          <defs>
            <pattern id="leftMotif" x="0" y="0" width="24" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M12 0 Q8 12 12 25 Q16 38 12 50"
                fill="none"
                stroke={motifColor}
                strokeWidth="1"
                opacity="0.35"
              />
              <ellipse
                cx="8"
                cy="15"
                rx="3"
                ry="5"
                fill={motifColor}
                opacity="0.25"
                transform="rotate(-30, 8, 15)"
              />
              <ellipse
                cx="16"
                cy="35"
                rx="3"
                ry="5"
                fill={motifColor}
                opacity="0.25"
                transform="rotate(30, 16, 35)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leftMotif)" />
        </svg>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-neutral-400/30 to-transparent" />
      </div>

      {/* Right Border */}
      <div className="fixed top-0 bottom-0 right-0 w-4 md:w-6 z-30 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent" />
        <svg className="absolute top-0 right-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 24 800">
          <rect width="100%" height="100%" fill="url(#leftMotif)" />
        </svg>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-neutral-400/30 to-transparent" />
      </div>

      {/* Corner Ornaments */}
      {[
        { pos: "top-4 md:top-6 left-2 md:left-4", d: "M8 32 Q8 8 32 8", dot1: [32, 8], dot2: [8, 32] },
        { pos: "top-4 md:top-6 right-2 md:right-4", d: "M56 32 Q56 8 32 8", dot1: [32, 8], dot2: [56, 32] },
        { pos: "bottom-4 md:bottom-6 left-2 md:left-4", d: "M8 32 Q8 56 32 56", dot1: [32, 56], dot2: [8, 32] },
        { pos: "bottom-4 md:bottom-6 right-2 md:right-4", d: "M56 32 Q56 56 32 56", dot1: [32, 56], dot2: [56, 32] },
      ].map((c, i) => (
        <div key={i} className={`fixed ${c.pos} w-12 h-12 md:w-16 md:h-16 z-40 pointer-events-none`}>
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d={c.d} fill="none" stroke={motifColor} strokeWidth="2" opacity="0.45" />
            <circle cx={c.dot1[0]} cy={c.dot1[1]} r="3" fill={motifColor} opacity="0.35" />
            <circle cx={c.dot2[0]} cy={c.dot2[1]} r="3" fill={motifColor} opacity="0.35" />
            <circle cx="16" cy="16" r="2" fill={motifColor} opacity="0.25" />
          </svg>
        </div>
      ))}
    </>
  );
};

export default IndianMotifBorder;
