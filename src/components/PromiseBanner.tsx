import { Phone, ArrowRight, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const promises = [
  {
    icon: Clock,
    title: "We Show Up",
    description: "On time, every time. We give you a real arrival window and we honor it.",
  },
  {
    icon: MessageCircle,
    title: "We're Straight With You",
    description: "You'll know the price before we touch anything. No surprises, no hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "We Do It Right",
    description: "Licensed, insured, and thorough. We don't leave until the job is done properly.",
  },
];

const PromiseBanner = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-cream/60 font-body font-semibold text-xs tracking-[0.2em] uppercase text-center mb-5"
        >
          Our Commitment to Every Customer
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream text-center max-w-4xl mx-auto mb-5 leading-tight"
        >
          We Show Up. We're Straight With You. We Do It Right.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-16 h-1 bg-cream/30 mx-auto mb-10 rounded-full origin-center"
        />

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-cream/80 font-body leading-relaxed mb-4">
            That's not a marketing line — it's how we operate on every single job.
            As a family-owned business, our reputation is built one home at a time.
            We don't have a corporate office covering for bad work.
            When we leave your property, our name goes with us.
          </p>
          <p className="text-cream/80 font-body leading-relaxed">
            You'll get a real price before we start. You'll know exactly what we're doing and why.
            And when the job is done, we clean up and follow up — because that's what we'd want if it were our home.
          </p>
        </motion.div>

        {/* Promise cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {promises.map((promise, i) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="group bg-cream/[0.04] backdrop-blur-sm border border-cream/10 rounded-2xl p-8 text-center hover:bg-cream/[0.08] hover:border-cream/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                <promise.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-cream text-lg mb-3">
                {promise.title}
              </h3>
              <p className="text-cream/70 font-body text-sm leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.85 }}
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
