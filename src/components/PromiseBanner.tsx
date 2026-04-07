import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PromiseBanner = () => {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream mb-6">
            We Show Up. We're Straight With You. We Do It Right.
          </h2>
          <div className="w-20 h-1 bg-cream/30 mx-auto mb-6" />
          <p className="text-cream/80 font-body leading-relaxed mb-4">
            That's not a marketing line — it's how we operate on every single job. 
            As a family-owned business, our reputation is built one home at a time. 
            We don't have a corporate office covering for bad work. 
            When we leave your property, our name goes with us.
          </p>
          <p className="text-cream/80 font-body leading-relaxed mb-10">
            You'll get a real price before we start. You'll know exactly what we're doing and why. 
            And when the job is done, we clean up and follow up — because that's what we'd want if it were our home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-cream/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              (954) 910-6883
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-cream/90 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseBanner;
