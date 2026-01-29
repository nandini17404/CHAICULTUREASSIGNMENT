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