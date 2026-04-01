import { Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const EmergencyBanner = () => {
  return (
    <section className="bg-forest-deep py-5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-cream/10 rounded-lg px-3 py-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cream" />
                <span className="font-display font-black text-cream text-lg">24/7</span>
              </div>
              <span className="text-cream/80 text-sm font-body">Emergency Service</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-cream/20" />
            <span className="hidden sm:block text-cream font-semibold text-sm font-body">
              Have An Emergency? We're Available Around the Clock
            </span>
          </div>

          <a
            href="tel:9549106883"
            className="inline-flex items-center gap-2 bg-cream text-dark px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-cream/90 transition-all"
          >
            <Phone className="w-4 h-4" />
            Request A Call Back
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
