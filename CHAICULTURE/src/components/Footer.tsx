import { forwardRef } from "react";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="absolute bottom-0 left-0 right-0 py-6 px-4 text-center border-t border-gold/10 bg-background/50 backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          © 2025 <span className="text-gold font-medium">Chai Culture</span>. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Crafted with love for chai enthusiasts everywhere.
        </p>
      </div>
    </motion.footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
