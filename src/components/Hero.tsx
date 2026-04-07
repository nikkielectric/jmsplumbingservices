import { Phone, ArrowRight, Shield, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plumber.png";
import VintageOrnament from "./VintageOrnament";

const valueProps = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Florida-licensed and fully insured. Every job is done right, to code — protecting your home and your wallet.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    desc: "Burst pipe at midnight? No water on a Sunday? We pick up the phone when other plumbers don't. We're here when it counts.",
  },
  {
    icon: DollarSign,
    title: "Upfront & Fair Pricing",
    desc: "You'll know the price before we start — every time. No hidden fees, no shock invoices. Just honest work at a fair rate.",
  },
];

const Hero = () => {
  return (
    <section className="relative pt-36 lg:pt-44 bg-secondary vintage-grain vintage-vignette">
      {/* Main hero content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-cream leading-[1.1] mb-6">
              South Florida's <span className="text-steel italic">Plumber</span> That Actually Shows Up
            </h1>

            <VintageOrnament className="max-w-xs mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />

            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              We answer our phone. We arrive on time. We tell you the price before we touch a thing. 
              JMS Plumbing Services is a family-owned, licensed plumber serving Broward, Miami-Dade, 
              and Palm Beach Counties — and we treat your home like it's our own.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9549106883"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                (954) 910-6883
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/90 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right column - image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
              <img
                src={heroImg}
                alt="Professional JMS plumber at work in a modern Florida home"
                className="w-full h-[400px] lg:h-[500px] object-cover object-[center_25%]"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value proposition cards */}
      <div className="bg-primary relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-full border-2 border-cream/20 flex items-center justify-center flex-shrink-0">
                  <prop.icon className="w-5 h-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream text-base mb-1">{prop.title}</h3>
                  <p className="text-cream/60 text-sm font-body leading-relaxed">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
