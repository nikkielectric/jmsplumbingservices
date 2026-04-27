import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, CalendarCheck, Clock, ClipboardList, Sparkles } from "lucide-react";
import VintageOrnament from "./VintageOrnament";
import { useT } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const t = useT();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    { num: "01", icon: Phone, title: t("how.s1.title"), desc: t("how.s1.desc") },
    { num: "02", icon: CalendarCheck, title: t("how.s2.title"), desc: t("how.s2.desc") },
    { num: "03", icon: Clock, title: t("how.s3.title"), desc: t("how.s3.desc") },
    { num: "04", icon: ClipboardList, title: t("how.s4.title"), desc: t("how.s4.desc") },
    { num: "05", icon: Sparkles, title: t("how.s5.title"), desc: t("how.s5.desc") },
  ];

  return (
    <section className="relative bg-cream-light py-20 lg:py-28 overflow-hidden vintage-grain">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase font-body">
            {t("how.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-4">
            {t("how.h2.part1")}{" "}
            <span className="text-primary italic">{t("how.h2.italic")}</span>
          </h2>
          <VintageOrnament className="max-w-xs mx-auto mb-5" />
          <p className="text-muted-foreground font-body leading-relaxed">
            {t("how.intro")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative" ref={sectionRef}>
          {/* Animated connecting line – desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "left center" }}
            />
            {/* Animated dot that travels along the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
              initial={{ left: "0%" }}
              animate={isInView ? { left: ["0%", "100%"] } : { left: "0%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {/* Animated connecting line – mobile only (vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-primary/40 via-primary to-primary/40"
              initial={{ scaleY: 0, height: "100%" }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "top center" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon square */}
                  <div className="relative mb-4">
                    <div className="w-[104px] h-[104px] rounded-sm border-2 border-border bg-card flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <motion.span
                      className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-black text-sm flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: i * 0.3 + 0.5,
                      }}
                    >
                      {step.num}
                    </motion.span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
