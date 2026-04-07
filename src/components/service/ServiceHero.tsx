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
  return (
    <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-24 bg-secondary vintage-grain vintage-vignette">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body">
              {serviceCategory} | BROWARD, MIAMI-DADE &amp; PALM BEACH COUNTIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-[1.1] mt-4 mb-6">
              {h1}
            </h1>
            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              {subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9549106883"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all"
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
              <img
                src={heroImage || heroImg}
                alt={`${serviceCategory} plumbing service`}
                className="w-full h-[350px] lg:h-[450px] object-cover object-[center_25%]"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
