import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional plumber at work in a modern Florida home"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-primary/20 text-steel border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase">
              Family-Owned · Sunrise, FL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-cream leading-tight mb-6"
          >
            Plumbing Is a Craft.{" "}
            <span className="text-steel italic">We Treat It That Way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-steel/80 font-body mb-10 max-w-xl leading-relaxed"
          >
            Premier plumbing services across South Florida's Tri-County area.
            Expert drain cleaning, gas lines, remodels & emergency service —
            with the care your home deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Phone className="w-5 h-5" />
              Call Now — (954) 910-6883
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream px-8 py-4 rounded-lg font-semibold text-base hover:bg-cream/10 transition-all"
            >
              View Services
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
