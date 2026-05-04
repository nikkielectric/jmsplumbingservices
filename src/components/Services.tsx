import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VintageOrnament from "./VintageOrnament";
import drainImg from "@/assets/drain-cleaning-card.webp";
import gasImg from "@/assets/gas-line-service.jpg";
import repairImg from "@/assets/plumbing-repairs-service.jpg";
import remodelImg from "@/assets/plumbing-remodels-card.webp";
import backflowImg from "@/assets/backflow-prevention-service.jpg";
import emergencyImg from "@/assets/emergency-plumbing-service.jpg";
import waterHeaterImg from "@/assets/water-heater-service.jpg";
import septicImg from "@/assets/septic-service.jpg";
import toiletFaucetImg from "@/assets/fixture-repairs-service.jpg";
import { useT } from "@/i18n/LanguageContext";

const Services = () => {
  const t = useT();
  const services = [
    { img: drainImg, title: t("svc.drain"), description: t("services.drain.desc"), href: "/drain-cleaning" },
    { img: gasImg, title: t("svc.gas"), description: t("services.gas.desc"), href: "/gas-line-services" },
    { img: repairImg, title: t("svc.repairs"), description: t("services.repairs.desc"), href: "/plumbing-repairs" },
    { img: remodelImg, title: t("svc.remodels"), description: t("services.remodels.desc"), href: "/plumbing-remodels" },
    { img: backflowImg, title: t("svc.backflow"), description: t("services.backflow.desc"), href: "/backflow-prevention" },
    { img: emergencyImg, title: t("svc.emergency"), description: t("services.emergency.desc"), href: "/emergency-plumbing" },
    { img: waterHeaterImg, title: t("svc.waterHeaters"), description: t("services.waterHeaters.desc"), href: "/water-heaters" },
    { img: septicImg, title: t("svc.septic"), description: t("services.septic.desc"), href: "/septic-leach-fields" },
    { img: toiletFaucetImg, title: t("svc.fixture"), description: t("services.fixture.desc"), href: "/toilet-faucet-pipe-repairs" },
  ];
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
            {t("services.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3">
            {t("services.h2.line1")} <br />
            {t("services.h2.line2")} <br />
            <span className="text-primary italic">{t("services.h2.line3")}</span>
          </h2>
          <VintageOrnament className="max-w-sm mx-auto mt-5" />
          <p className="text-muted-foreground font-body mt-5 max-w-2xl mx-auto leading-relaxed">
            {t("services.intro")}
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
