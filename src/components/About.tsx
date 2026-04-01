import { motion } from "framer-motion";
import { Shield, Heart, Star } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Expert Craftsmanship",
    text: "We consider plumbing a craft — a blending of expertise and artistry in every job.",
  },
  {
    icon: Heart,
    title: "Family Values",
    text: "As a family-owned business, we treat every customer's home like our own.",
  },
  {
    icon: Star,
    title: "Customer First",
    text: "Your satisfaction drives everything we do. We value your feedback and earn your trust.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              A Growing Family,{" "}
              <span className="text-primary italic">Built on Trust</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              JMS Plumbing Services LLC is a family-owned small business serving
              the Tri-County area of South Florida from our home base in Sunrise, FL.
              We're new and growing, but our commitment to premier customer service
              and satisfaction is unwavering.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-display text-lg">
              "I consider plumbing a craft — a blending of expertise and artistry."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((v, i) => (
              <div
                key={i}
                className="flex gap-5 bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
