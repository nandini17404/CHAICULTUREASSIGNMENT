import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Chai Culture different from other chai brands?",
    answer:
      "Our chai blends are crafted using century-old family recipes passed down through three generations. We source premium spices directly from India and hand-blend each variety to ensure authentic taste and aroma that transports you to the royal courts of Rajasthan.",
  },
  {
    question: "What chai varieties will be available at launch?",
    answer:
      "We are launching with three signature blends: Masala Chai, Ginger Chai, and Cardamom Chai. More varieties including Kashmiri Kahwa and Tulsi Chai will be introduced soon after launch.",
  },
  {
    question: "How do I prepare Chai Culture tea?",
    answer:
      "Each package comes with detailed brewing instructions. For the perfect cup, simmer our tea blend with milk and water for 3–5 minutes. Adjust sweetness to taste. A longer simmer brings out deeper flavors.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We will ship to most countries worldwide. Shipping costs and delivery times vary by location. Sign up for our newsletter to receive launch updates and early-bird offers.",
  },
  {
    question: "Are your products suitable for vegans?",
    answer:
      "Absolutely. All our chai blends are 100% plant-based and vegan-friendly, containing only tea leaves and natural spices.",
  },
  {
    question: "How can I become a wholesale partner?",
    answer:
      "We welcome partnerships with cafés, restaurants, and retailers. Please reach out through our contact form or email us once we launch for wholesale details.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FBF6EE]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-primary font-semibold mb-2">
            Got Questions?
          </p>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Frequently <span className="text-gradient-gold">Asked</span> Questions
          </h2>

          <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-lg mx-auto font-sans">
            Everything you need to know about Chai Culture and our premium chai blends.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-primary/20 bg-white/80 backdrop-blur transition-colors data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="px-4 md:px-6 py-4 md:py-5 text-left font-serif text-base md:text-lg font-semibold text-foreground hover:text-primary data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-5 font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-16 text-center p-6 md:p-8 rounded-2xl bg-gold/10 border border-gold/30">
          <p className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </p>

          <p className="font-sans text-sm md:text-base text-foreground/70 mb-4">
            We'd love to hear from you. Reach out and we’ll get back to you soon.
          </p>

          <a
            href="mailto:hello@chaiculture.com"
            className="inline-flex items-center gap-2 font-sans font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            hello@chaiculture.com
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
