import { Phone, ArrowRight, Star, Shield, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plumber.webp";
import VintageOrnament from "./VintageOrnament";
import { useT } from "@/i18n/LanguageContext";

const Hero = () => {
  const t = useT();
  const valueProps = [
    { icon: Shield, title: t("hero.licensed.title"), desc: t("hero.licensed.desc") },
    { icon: Clock, title: t("hero.247.title"), desc: t("hero.247.desc") },
    { icon: DollarSign, title: t("hero.pricing.title"), desc: t("hero.pricing.desc") },
  ];
  return (
    <section className="relative pt-24 lg:pt-44 bg-secondary vintage-grain vintage-vignette">
      {/* Water wave animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[30%] left-0 w-[200%] opacity-[0.045] wave-slow">
          <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1260,120 1380,60 1440,80 L1440,160 L0,160 Z" fill="hsl(38 35% 94% / 1)" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-0 w-[200%] opacity-[0.03] wave-medium">
          <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,160 L0,160 Z" fill="hsl(184 72% 38% / 1)" />
          </svg>
        </div>
        <div className="absolute bottom-[45%] left-0 w-[200%] opacity-[0.025] wave-fast">
          <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,100 C360,40 720,120 1080,80 C1260,60 1380,100 1440,80 L1440,160 L0,160 Z" fill="hsl(38 35% 94% / 1)" />
          </svg>
        </div>
      </div>
      {/* Main hero content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 mb-6 max-w-full overflow-hidden flex-wrap sm:flex-nowrap">
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="h-4 w-px bg-cream/30 hidden sm:block" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-cream font-bold text-sm font-body tracking-wide">5.0</span>
              <div className="h-4 w-px bg-cream/30 hidden sm:block" />
              <span className="text-cream/70 text-xs font-body hidden sm:inline">{t("hero.5star")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-cream leading-[1.1] mb-6">
              {t("hero.h1.part1")} <span className="text-steel italic">{t("hero.h1.italic")}</span> {t("hero.h1.part2")}
            </h1>

            <VintageOrnament className="max-w-xs mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />

            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9549106883"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                (954) 910-6883
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/90 transition-all"
              >
                {t("hero.getFreeQuote")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right column - image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
              <img
                src={heroImg}
                alt="Professional JMS plumber at work in a modern Florida home"
                className="w-full h-[400px] lg:h-[500px] object-cover object-[75%_30%]"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value proposition cards */}
      <div className="bg-primary relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-full border-2 border-cream/20 flex items-center justify-center flex-shrink-0">
                  <prop.icon className="w-5 h-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream text-base mb-1">{prop.title}</h3>
                  <p className="text-cream/60 text-sm font-body leading-relaxed">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
