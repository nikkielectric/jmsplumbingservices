import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VintageOrnament from "./VintageOrnament";
import drainImg from "@/assets/service-drain.jpg";
import gasImg from "@/assets/service-gas.jpg";
import repairImg from "@/assets/service-repair.jpg";
import remodelImg from "@/assets/service-remodel.jpg";
import disposalImg from "@/assets/service-disposal.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import waterHeaterImg from "@/assets/service-water-heater.jpg";
import septicImg from "@/assets/service-septic.jpg";
import toiletFaucetImg from "@/assets/service-toilet-faucet.jpg";

const services = [
  {
    img: drainImg,
    title: "Drain Cleaning",
    description: "Slow or fully blocked — we clear main lines, sinks, tubs, and showers fast. And we tell you why it happened.",
    href: "/drain-cleaning",
  },
  {
    img: gasImg,
    title: "Gas Line Services",
    description: "Installations, repairs, and leak inspections. Licensed, insured, and done right the first time.",
    href: "/gas-line-services",
  },
  {
    img: repairImg,
    title: "Plumbing Repairs",
    description: "We fix what actually needs fixing. No unnecessary replacements, no upsells. Honest work at a fair price.",
    href: "/plumbing-repairs",
  },
  {
    img: remodelImg,
    title: "Plumbing Remodels",
    description: "From blueprint to final install — precise, clean plumbing work that's built to last.",
    href: "/plumbing-remodels",
  },
  {
    img: disposalImg,
    title: "Garbage Disposal",
    description: "Jammed, leaking, or dead? We inspect, repair, and install — usually same day.",
    href: "/garbage-disposal",
  },
  {
    img: emergencyImg,
    title: "Emergency Plumbing",
    description: "Nights, weekends, holidays — we pick up. After-hours fees always disclosed upfront.",
    href: "/emergency-plumbing",
  },
  {
    img: waterHeaterImg,
    title: "Water Heaters",
    description: "Tank or tankless — we repair, replace, and install water heaters built for South Florida's hard water.",
    href: "/water-heaters",
  },
  {
    img: septicImg,
    title: "Septic Leach Fields",
    description: "Installation, repair, and inspections for drain fields across the Tri-County area.",
    href: "/septic-leach-fields",
  },
  {
    img: toiletFaucetImg,
    title: "Fixture Repairs",
    description: "Running toilets, dripping faucets, leaking pipes — we fix them right the first time.",
    href: "/toilet-faucet-pipe-repairs",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-light vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
          <VintageOrnament className="max-w-sm mx-auto mt-5" />
          <p className="text-muted-foreground font-body mt-5 max-w-2xl mx-auto leading-relaxed">
            Hard water. Cast iron pipes. Slab construction. Humidity that turns a small leak into a mold problem in 48 hours. South Florida plumbing isn't like anywhere else — and cookie-cutter fixes don't cut it here. JMS handles it all, with the expertise your home actually needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link key={service.title} to={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative h-96 rounded overflow-hidden cursor-pointer vintage-border"
              >
                <img
                  src={service.img}
                  alt={`${service.title} services in Sunrise, FL — JMS Plumbing Services`}
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

export default Services;
