import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import areaImg from "@/assets/service-area.jpg";

const ServiceArea = () => {
  return (
    <section id="area" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              Where We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              Serving South Florida's{" "}
              <span className="text-primary italic">Tri-County Area</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Based in Sunrise, FL 33322, we proudly serve homeowners and
              businesses across Broward, Miami-Dade, and Palm Beach counties.
              No project is too small or too large for our skilled team.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              We proudly serve Sunrise, Plantation, Fort Lauderdale, Tamarac, Lauderhill,
              Coral Springs, Weston, and surrounding communities. From routine maintenance
              to complex installations, we're ready to help.
            </p>
            <div className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-sm">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground font-body">Sunrise, FL 33322</p>
                <p className="text-sm text-muted-foreground font-body">
                  Broward · Miami-Dade · Palm Beach Counties
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={areaImg}
              alt="Aerial view of South Florida neighborhoods with palm trees"
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
