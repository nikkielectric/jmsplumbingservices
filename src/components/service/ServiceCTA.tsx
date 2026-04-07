import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";

interface ServiceCTAProps {
  heading: string;
  subtext: string;
}

const ServiceCTA = ({ heading, subtext }: ServiceCTAProps) => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(184 72% 32%), hsl(200 30% 18%), hsl(184 72% 25%))" }}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(184_72%_38%_/_0.15)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stamp-style badge */}
          <div className="inline-flex items-center gap-2 border border-cream/20 rounded-full px-5 py-1.5 mb-6">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span className="text-cream/60 text-xs font-body uppercase tracking-widest">24/7 Emergency Service</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-cream mb-4">
            {heading}
          </h2>
          <VintageOrnament className="max-w-xs mx-auto mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/20 [&_div]:to-transparent [&_svg]:text-cream/30" />
          <p className="text-cream/70 font-body text-base leading-relaxed max-w-2xl mx-auto mb-10">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream px-8 py-4 rounded font-bold text-sm hover:bg-cream/10 hover:border-cream/50 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call (954) 910-6883
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
    </section>
  );
};

export default ServiceCTA;
