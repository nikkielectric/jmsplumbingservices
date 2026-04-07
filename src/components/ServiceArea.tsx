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
              We Come to You{" "}
              <span className="text-primary italic">Anywhere in South Florida's Tri-County Area</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Based in Sunrise, our trucks serve communities across Broward, Miami-Dade, and Palm Beach Counties. We know South Florida's homes, its aging pipes, and its climate — and we bring that local knowledge to every job.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Don't see your city listed? Call us. If you're in the Tri-County area, there's a good chance we can get to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20"
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
              className="w-full h-80 lg:h-96"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 rounded-2xl bg-secondary p-8 shadow-xl overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-secondary-foreground mb-2">
                Communities We Serve
              </p>
              <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed tracking-wide">
                Broward · Miami-Dade · Palm Beach Counties · Sunrise · Plantation · Fort Lauderdale · Tamarac · Lauderhill · Coral Springs · Weston
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
