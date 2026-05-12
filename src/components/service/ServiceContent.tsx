import { motion } from "framer-motion";
import { CheckCircle, Phone, ClipboardCheck, Sparkles } from "lucide-react";
import VintageOrnament from "@/components/VintageOrnament";
import type { ServiceSign, ServiceStep } from "@/data/servicePages";

interface ServiceContentProps {
  introHeading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  signsHeading: string;
  signs: ServiceSign[];
  extraSection?: { heading: string; paragraphs: string[] };
  diyHeading: string;
  diyParagraphs: string[];
  expectHeading: string;
  steps: ServiceStep[];
  postExpectSection?: { heading: string; paragraphs: string[] };
}

const stepIcons = [Phone, ClipboardCheck, Sparkles];

const ServiceContent = ({
  introHeading,
  paragraph1,
  paragraph2,
  paragraph3,
  signsHeading,
  signs,
  extraSection,
  diyHeading,
  diyParagraphs,
  expectHeading,
  steps,
  postExpectSection,
}: ServiceContentProps) => {
  return (
    <div className="space-y-12">
      {/* Service Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-black text-foreground mb-4">
          {introHeading}
        </h2>
        <VintageOrnament className="max-w-xs mb-6" />
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
      </motion.div>

      {/* Signs You Need This Service */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-5">
          {signsHeading}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {signs.map((sign, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-body text-foreground">{sign.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Extra section (page-specific, optional) */}
      {extraSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
            {extraSection.heading}
          </h3>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            {extraSection.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      )}

      {/* Why Not DIY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
          {diyHeading}
        </h3>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          {diyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>

      {/* What to Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-6">
          {expectHeading}
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] || Sparkles;
            return (
              <div key={i} className="text-center">
                <div className="relative mx-auto mb-3">
                  <div className="w-16 h-16 rounded-sm border-2 border-border bg-card flex items-center justify-center shadow-md mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display font-black text-xs flex items-center justify-center shadow-lg">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-display font-bold text-foreground text-sm mb-1">{step.title}</h4>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* Post-expect section (page-specific, optional) */}
      {postExpectSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
            {postExpectSection.heading}
          </h3>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            {postExpectSection.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceContent;
