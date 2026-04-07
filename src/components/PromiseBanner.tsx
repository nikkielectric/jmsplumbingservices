import { Phone, ArrowRight, Shield, Wrench, Heart } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  { icon: Shield, label: "We Show Up" },
  { icon: Wrench, label: "We're Straight With You" },
  { icon: Heart, label: "We Do It Right" },
];

const PromiseBanner = () => {
  return (
    <section className="relative bg-secondary py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cream/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cream/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Pillar badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 * i }}
              className="flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/10 rounded-full px-5 py-2.5"
            >
              <pillar.icon className="w-4 h-4 text-primary" />
              <span className="text-cream font-body font-semibold text-sm">{pillar.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream mb-4 leading-tight">
            We Show Up. We're Straight With You.{" "}
            <span className="text-primary">We Do It Right.</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Two-column text cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <p className="text-cream/90 font-body leading-relaxed">
              That's not a marketing line — it's how we operate on every single job. 
              As a family-owned business, our reputation is built one home at a time. 
              We don't have a corporate office covering for bad work. 
              When we leave your property, <strong className="text-cream">our name goes with us.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <p className="text-cream/90 font-body leading-relaxed">
              You'll get a real price before we start. You'll know exactly what we're doing and why. 
              And when the job is done, we clean up and follow up — because{" "}
              <strong className="text-cream">that's what we'd want if it were our home.</strong>
            </p>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:9549106883"
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream px-8 py-4 rounded-xl font-bold text-sm hover:bg-cream/10 hover:border-cream/50 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            (954) 910-6883
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-cream px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseBanner;
