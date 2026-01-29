/*import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const SocialLinks = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-cream/10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  );
});

SocialLinks.displayName = "SocialLinks";

export default SocialLinks;*/
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="group relative p-3 rounded-full border-2 border-primary/50 bg-card hover:border-primary hover:bg-primary/20 transition-all duration-300 opacity-0 animate-fade-in shadow-md"
            style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="relative w-5 h-5 text-black group-hover:text-primary transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;