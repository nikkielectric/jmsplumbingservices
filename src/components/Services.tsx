import { motion } from "framer-motion";
import {
  Droplets,
  Trash2,
  Flame,
  Wrench,
  Home,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description:
      "Main lines, sinks, tubs, showers & kitchen drains cleared fast with professional-grade equipment.",
  },
  {
    icon: Trash2,
    title: "Garbage Disposal",
    description:
      "Inspection, replacement & new installation of garbage disposal units for your kitchen.",
  },
  {
    icon: Flame,
    title: "Gas Lines",
    description:
      "Safe installation, repair & leak inspection of gas lines by certified professionals.",
  },
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    description:
      "Faucets, spouts, water heaters — full repair & replacement for every fixture in your home.",
  },
  {
    icon: Home,
    title: "Plumbing Remodels",
    description:
      "Complete remodels with blueprint planning. Transform your kitchen or bath from the ground up.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description:
      "After-hours, weekends & holidays — we're here when disaster strikes. Additional fees apply.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            From routine maintenance to complex remodels, JMS Plumbing delivers
            expert craftsmanship across South Florida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-cream rounded-xl p-8 border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
