import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";
import type { RelatedService } from "@/data/servicePages";
import { useT } from "@/i18n/LanguageContext";

import drainImg from "@/assets/drain-cleaning-card.webp";
import gasImg from "@/assets/Gas Line Service.jpg";
import repairImg from "@/assets/Plumbing Repairs Service.jpg";
import remodelImg from "@/assets/plumbing-remodels-card.webp";
import backflowImg from "@/assets/Backflow Prevention Service.jpg";
import emergencyImg from "@/assets/Emergency Plumbing Service.jpg";
import waterHeaterImg from "@/assets/Water heater service.jpg";
import septicImg from "@/assets/Septic Service.jpg";
import fixtureImg from "@/assets/fixture-repairs-card.webp";

const imageMap: Record<string, string> = {
  "/drain-cleaning": drainImg,
  "/gas-line-services": gasImg,
  "/plumbing-repairs": repairImg,
  "/plumbing-remodels": remodelImg,
  "/backflow-prevention": backflowImg,
  "/emergency-plumbing": emergencyImg,
  "/water-heaters": waterHeaterImg,
  "/septic-leach-fields": septicImg,
  "/toilet-faucet-pipe-repairs": fixtureImg,
};

interface ServiceRelatedProps {
  services: RelatedService[];
}

const ServiceRelated = ({ services }: ServiceRelatedProps) => {
  const t = useT();
  return (
    <section className="py-20 lg:py-28 bg-cream-light vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-foreground mb-4">
            {t("sp.related.h2")}
          </h2>
          <VintageOrnament className="max-w-xs mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link key={i} to={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-96 rounded overflow-hidden cursor-pointer vintage-border"
              >
                <img
                  src={imageMap[service.href]}
                  alt={`${service.title} services in South Florida — JMS Plumbing`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 vintage-sepia"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-[calc(100%-5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                  <div className="w-12 h-0.5 bg-white/50 mb-3" />
                  <p className="text-white/80 text-sm font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;
