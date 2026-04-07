import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-plumber.png";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Top section - about text + image */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                FAMILY OWNED & OPERATED IN SUNRISE, FL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                You're Not a Ticket Number.{" "}
                <span className="text-primary italic">You're A Neighbor.</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Most plumbing companies send whoever's available, charge whatever they want, and move on. 
                That's not how we operate. At JMS, the owner is personally invested in every job — 
                because our name and our reputation are on the line every single time we pull up to your door.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                We're based right here in Sunrise and we serve Broward, Miami-Dade, and Palm Beach Counties. 
                We know these pipes, this water, and these homes. When you call us, you'll get a straight answer, 
                a fair price, and a plumber who actually shows up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9549106883"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Phone className="w-4 h-4" />
                  (954) 910-6883
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="JMS Plumbing professional at work"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-primary rounded-xl px-6 py-4 shadow-lg">
                <div className="text-center">
                  <span className="text-cream font-display font-black text-3xl block">Family</span>
                  <span className="text-cream/80 text-xs font-body uppercase tracking-widest">Owned & Operated</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
