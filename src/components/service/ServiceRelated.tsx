import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";
import type { RelatedService } from "@/data/servicePages";

import drainImg from "@/assets/drain-cleaning-card.png";
import gasImg from "@/assets/gas-line-card.png";
import repairImg from "@/assets/plumbing-repairs-card.png";
import remodelImg from "@/assets/plumbing-remodels-card.png";
import disposalImg from "@/assets/service-disposal.jpg";
import emergencyImg from "@/assets/emergency-plumbing-card.png";
import waterHeaterImg from "@/assets/water-heaters-card.png";
import septicImg from "@/assets/septic-leach-card.png";
import fixtureImg from "@/assets/fixture-repairs-card.png";

const imageMap: Record<string, string> = {
  "/drain-cleaning": drainImg,
  "/gas-line-services": gasImg,
  "/plumbing-repairs": repairImg,
  "/plumbing-remodels": remodelImg,
  "/garbage-disposal": disposalImg,
  "/emergency-plumbing": emergencyImg,
  "/water-heaters": waterHeaterImg,
  "/septic-leach-fields": septicImg,
  "/toilet-faucet-pipe-repairs": fixtureImg,
};

interface ServiceRelatedProps {
  services: RelatedService[];
}

const ServiceRelated = ({ services }: ServiceRelatedProps) => {
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
            Other Services We Offer
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
