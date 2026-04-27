import { motion } from "framer-motion";
import VintageOrnament from "@/components/VintageOrnament";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceFAQ as ServiceFAQType } from "@/data/servicePages";
import { useT } from "@/i18n/LanguageContext";

interface ServiceFAQProps {
  heading: string;
  faqs: ServiceFAQType[];
}

const ServiceFAQ = ({ heading, faqs }: ServiceFAQProps) => {
  const t = useT();
  return (
    <section className="py-14 lg:py-20 bg-cream-light vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
            {t("sp.faq.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-foreground mt-3 mb-4">
            {heading}
          </h2>
          <VintageOrnament className="max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground text-sm hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
