import { motion } from "framer-motion";
import drainImg from "@/assets/service-drain.jpg";
import gasImg from "@/assets/service-gas.jpg";
import repairImg from "@/assets/service-repair.jpg";
import remodelImg from "@/assets/service-remodel.jpg";
import disposalImg from "@/assets/service-disposal.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";

const services = [
  {
    img: drainImg,
    title: "Drain Cleaning",
    description: "Keep your drains functioning smoothly. From main lines to kitchen sinks, tubs & showers — we clear blockages fast with professional-grade equipment.",
  },
  {
    img: gasImg,
    title: "Gas Line Services",
    description: "Safe installation, repair & leak inspection of gas lines by certified professionals. Your family's safety is our top priority.",
  },
  {
    img: repairImg,
    title: "Plumbing Repairs",
    description: "Faucets, spouts, water heaters — full repair & replacement for every fixture. Our expert team handles it all with precision and care.",
  },
  {
    img: remodelImg,
    title: "Plumbing Remodels",
    description: "Complete bathroom & kitchen remodels with blueprint planning. We transform your space from the ground up with expert craftsmanship.",
  },
  {
    img: disposalImg,
    title: "Garbage Disposal",
    description: "Professional inspection, replacement & new installation of garbage disposal units. Keeping your kitchen running efficiently.",
  },
  {
    img: emergencyImg,
    title: "Emergency Plumbing",
    description: "After-hours, weekends & holidays — we're here when disaster strikes. Fast response times to prevent further damage to your home.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3">
            South Florida Plumbing <br />
            Has A Different Set Of Rules. <br />
            <span className="text-primary italic">We Know Them All.</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-5" />
          <p className="text-muted-foreground font-body mt-5 max-w-2xl mx-auto leading-relaxed">
            Hard water. Cast iron pipes. Slab construction. Humidity that turns a small leak into a mold problem in 48 hours. South Florida plumbing isn't like anywhere else — and cookie-cutter fixes don't cut it here. JMS handles it all, with the expertise your home actually needs.
          </p>
        </motion.div>

        {/* Services grid - 3x2 like L&W */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={1024}
              />
              {/* Blue overlay matching brand */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 transition-opacity duration-500" />
              {/* Content pinned to bottom with slide-up animation */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-[calc(100%-5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                <div className="w-12 h-0.5 bg-white/50 mb-3" />
                <p className="text-white/80 text-sm font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
