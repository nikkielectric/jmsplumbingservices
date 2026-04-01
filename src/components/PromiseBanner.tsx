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
            Our Plumbing Promise to You
          </h2>
          <div className="w-20 h-1 bg-cream/30 mx-auto mb-6" />
          <p className="text-cream/80 font-body leading-relaxed mb-4">
            As a family-owned and operated business, we pride ourselves on servicing the Tri-County
            area of South Florida. Our plumbers are committed to ensuring safe and operational plumbing
            for the community. All our solutions meet the highest standards.
          </p>
          <p className="text-cream/80 font-body leading-relaxed mb-10">
            We don't believe in surprise fees — only plumbing that's convenient for you.
            Upon your inquiry, you can expect honest quotes for your service. Trust JMS Plumbing
            for all your plumbing needs.
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
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseBanner;
