import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-plumber.webp";
import VintageOrnament from "./VintageOrnament";
import { useT } from "@/i18n/LanguageContext";

const EmergencySection = () => {
  const t = useT();
  return (
    <div className="relative bg-cream-light py-20 lg:py-28 overflow-hidden vintage-grain">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-last"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-body">
              {t("emSec.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              {t("emSec.h2.part1")}{" "}
              <span className="text-primary italic">{t("emSec.h2.italic")}</span>
            </h2>
            <VintageOrnament className="max-w-xs mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {t("emSec.p1")}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {t("emSec.p2")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9549106883"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 text-primary px-6 py-3 rounded font-bold text-sm hover:bg-primary/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                (954) 910-6883
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-primary/90 transition-all"
              >
                {t("hero.getFreeQuote")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block lg:order-first"
          >
            <div className="rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
              <img
                src={heroImg}
                alt="JMS Plumbing technician responding to a 24/7 emergency plumbing call in Sunrise, FL"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;
