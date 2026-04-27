import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import VintageOrnament from "./VintageOrnament";
import { useT } from "@/i18n/LanguageContext";

const PromiseBanner = () => {
  const t = useT();
  const promises = [
    { icon: Clock, title: t("promise.c1.title"), description: t("promise.c1.desc") },
    { icon: MessageCircle, title: t("promise.c2.title"), description: t("promise.c2.desc") },
    { icon: ShieldCheck, title: t("promise.c3.title"), description: t("promise.c3.desc") },
  ];
  return (
    <section className="relative bg-secondary py-24 lg:py-32 overflow-hidden vintage-grain vintage-vignette">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase text-center mb-5"
        >
          {t("promise.eyebrow")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream text-center max-w-4xl mx-auto mb-5 leading-tight"
        >
          {t("promise.h2")}
        </motion.h2>

        <VintageOrnament className="max-w-xs mx-auto mb-10 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/20 [&_div]:to-transparent [&_svg]:text-cream/30" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-cream/80 font-body leading-relaxed mb-4">
            {t("promise.p1")}
          </p>
          <p className="text-cream/80 font-body leading-relaxed">
            {t("promise.p2")}
          </p>
        </motion.div>

        {/* Promise cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promises.map((promise, i) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="group bg-cream/[0.04] border-2 border-cream/10 rounded p-8 text-center hover:bg-cream/[0.08] hover:border-cream/20 transition-all duration-300 relative"
            >
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cream/15 rounded-tl" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cream/15 rounded-tr" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cream/15 rounded-bl" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cream/15 rounded-br" />
              
              <div className="w-14 h-14 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-primary/50 transition-colors duration-300">
                <promise.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-cream text-lg mb-3">
                {promise.title}
              </h3>
              <p className="text-cream/70 font-body text-sm leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseBanner;
