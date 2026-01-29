import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";
import SocialIcons from "@/components/SocialLinks";
import CountdownTimer from "@/components/CountdownTimer";
import IndianMotifBorder from "@/components/IndianMotifBorder";
import FloatingElements from "@/components/FloatingElements";
import FallingTeaLeaves from "@/components/FallingTeaLeaves";
import SpiceWheel from "@/components/SpiceWheel";
import ChaiVarieties from "@/components/ChaiVarieties";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import chaiVideo from "@/assets/chai-hero-video.mp4";
import chaiHero from "@/assets/chai-hero.jpg";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <IndianMotifBorder />

      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 h-screen z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={chaiHero}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={chaiVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 pointer-events-none">
          <FloatingElements />
          <FallingTeaLeaves />
          <SpiceWheel />
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 right-0 z-30 p-6">
        <Logo />
      </header>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-30 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-40 pb-20">
        {/* Center text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-center"
        >
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream mb-6 leading-tight drop-shadow-lg">
            Brew the <br />
            <span className="text-gold italic">Royal</span> Tradition
          </h1>

          <p className="text-lg lg:text-xl text-white/90 drop-shadow-md max-w-xl mx-auto italic">
            Experience the timeless art of Indian chai, crafted with heritage
            spices and passed down through generations. Every sip tells a story
            of warmth, tradition, and hospitality.
          </p>
        </motion.div>

        {/* Divider */}
        <div
          className={`my-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rounded-full bg-gold shimmer" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Launching Soon */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/40">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Launching Soon
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-8">
          <CountdownTimer targetDate={launchDate} />
        </div>

        {/* Email */}
        <div className="mt-8 w-full max-w-md">
          <EmailSignup />
        </div>

        {/* Social */}
        <div className="mt-10 text-center">
          <p className="text-xs text-primary tracking-wide uppercase mb-4 font-medium drop-shadow">
            Follow Our Journey
          </p>
          <SocialIcons />
        </div>

        {/* Smooth handoff to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-background pb-0" />
      </section>

      {/* ================= CONTINUOUS CONTENT ================= */}
<section className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-4 pt-0 pb-0">
          {/* Top wave separator */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 -translate-y-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path 
                d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" 
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
          
          <ChaiVarieties />
        </section>        
        <FAQSection />
        <Footer />
    </div>
  );
};

export default Index;
