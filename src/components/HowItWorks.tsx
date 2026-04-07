import { motion } from "framer-motion";
import { Phone, CalendarCheck, Clock, ClipboardList, Sparkles } from "lucide-react";
import VintageOrnament from "./VintageOrnament";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Call or Request a Quote",
    desc: "Reach us by phone or fill out our online form. A real person picks up — no voicemail maze, no call center.",
  },
  {
    num: "02",
    icon: CalendarCheck,
    title: "We Confirm Your Appointment",
    desc: "We'll get you scheduled fast — often same day. You'll know exactly when to expect us.",
  },
  {
    num: "03",
    icon: Clock,
    title: "On-Time Arrival",
    desc: "We arrive within your scheduled window. No sitting around wondering if someone's coming.",
  },
  {
    num: "04",
    icon: ClipboardList,
    title: "Upfront Price Before We Start",
    desc: "We diagnose the issue and give you a clear price before touching anything. No surprises, no pressure.",
  },
  {
    num: "05",
    icon: Sparkles,
    title: "Job Done. Area Clean. Done Right.",
    desc: "We complete the work, clean up after ourselves, and follow up to make sure you're satisfied.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-cream-light py-20 lg:py-28 overflow-hidden vintage-grain">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase font-body">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-4">
            Getting a Great Plumber{" "}
            <span className="text-primary italic">Shouldn't Be Complicated</span>
          </h2>
          <VintageOrnament className="max-w-xs mx-auto mb-5" />
          <p className="text-muted-foreground font-body leading-relaxed">
            Here's exactly what happens when you call JMS — from first contact to job done.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line – desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="relative mb-4">
                    <div className="w-[104px] h-[104px] rounded-sm border-2 border-border bg-card flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-black text-sm flex items-center justify-center shadow-lg">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
