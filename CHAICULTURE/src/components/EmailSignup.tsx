import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-3 py-4 px-6 bg-card rounded-full animate-scale-in border-2 border-primary/30">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-sans text-foreground font-medium">
          Thank you! We'll notify you when we launch.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center bg-card rounded-full border-2 border-primary/40 overflow-hidden shadow-lg">
          <div className="pl-5 text-primary">
            <Mail className="w-5 h-5" />
          </div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 py-4 px-4 bg-transparent font-sans text-foreground placeholder:text-foreground/50 focus:outline-none"
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className="btn-royal m-1.5 rounded-full flex items-center gap-2 text-sm font-semibold disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <>
                <span className="hidden sm:inline">Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
      
      <p className="mt-3 text-center text-xs text-cream/80 font-sans">
        Be the first to experience the royal tradition of chai.
      </p>
    </form>
  );
};

export default EmailSignup;