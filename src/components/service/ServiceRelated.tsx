import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";
import type { RelatedService } from "@/data/servicePages";

interface ServiceRelatedProps {
  services: RelatedService[];
}

const ServiceRelated = ({ services }: ServiceRelatedProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background vintage-grain relative">
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
            <motion.a
              key={i}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded p-6 bg-card border border-border hover:border-primary/40 transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;
