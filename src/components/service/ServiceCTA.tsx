import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";

interface ServiceCTAProps {
  heading: string;
  subtext: string;
}

const ServiceCTA = ({ heading, subtext }: ServiceCTAProps) => {
  return (
    <section className="py-20 lg:py-28 bg-secondary vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-cream mb-4">
            {heading}
          </h2>
          <VintageOrnament className="max-w-xs mx-auto mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/20 [&_div]:to-transparent [&_svg]:text-cream/30" />
          <p className="text-cream/70 font-body text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call (954) 910-6883
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-all"
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

export default ServiceCTA;
