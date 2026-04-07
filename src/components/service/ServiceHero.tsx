import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-plumber.png";

interface ServiceHeroProps {
  serviceCategory: string;
  h1: string;
  subtext: string;
  heroImage?: string;
}

const ServiceHero = ({ serviceCategory, h1, subtext, heroImage }: ServiceHeroProps) => {
  const bgImage = heroImage || heroImg;

  return (
    <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-28 overflow-hidden">
      {/* Full-span background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Secondary color overlay */}
        <div className="absolute inset-0 bg-secondary/85" />
        {/* Gradient for extra depth at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/60" />
      </div>

      {/* Grain & vignette on top */}
      <div className="absolute inset-0 vintage-grain vintage-vignette pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body">
            {serviceCategory} | BROWARD, MIAMI-DADE &amp; PALM BEACH COUNTIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-cream leading-[1.08] mt-4 mb-6 drop-shadow-lg">
            {h1}
          </h1>
          <p className="text-cream/80 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg drop-shadow">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Call (954) 910-6883
            </a>
            <a
              href="#service-form"
              className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/90 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
