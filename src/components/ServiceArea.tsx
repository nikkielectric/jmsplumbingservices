import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import areaImg from "@/assets/service-area.webp";
import jmsLogoPin from "@/assets/jms-logo-pin.webp";
import VintageOrnament from "./VintageOrnament";
import { useT } from "@/i18n/LanguageContext";

const ServiceArea = () => {
  const t = useT();
  return (
    <section id="area" className="py-20 lg:py-28 bg-cream vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              {t("area.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              {t("area.h2.part1")}{" "}
              <span className="text-primary italic">{t("area.h2.italic")}</span>
            </h2>
            <VintageOrnament className="max-w-xs mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {t("area.p1")}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              {t("area.p2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded overflow-hidden shadow-2xl vintage-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57200!2d-80.27780045272723!3d26.16470198032312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="384"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JMS Plumbing service area map"
              className="w-full h-80 lg:h-96 vintage-sepia"
            />
            <div className="absolute top-[40%] left-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center"
              >
                <img
                  src={jmsLogoPin}
                  alt="JMS Plumbing Services headquarters location pin in Sunrise, FL on the service area map"
                  className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-lg"
                />
                <div className="w-2 h-2 rounded-full bg-secondary shadow-md mt-1" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 rounded bg-secondary p-8 shadow-xl overflow-hidden vintage-border"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-secondary-foreground mb-2">
                {t("area.communities")}
              </p>
              <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed tracking-wide">
                {t("area.communitiesList")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
