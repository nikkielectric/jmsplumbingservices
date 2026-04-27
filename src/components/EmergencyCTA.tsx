import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import VintageOrnament from "./VintageOrnament";
import { submitToFormspree } from "@/lib/formspree";
import ThankYouModal from "./ThankYouModal";
import { useT } from "@/i18n/LanguageContext";

const EmergencyCTA = () => {
  const t = useT();
  const { toast } = useToast();
  const trustBullets = [t("emCta.bullet1"), t("emCta.bullet2"), t("emCta.bullet3"), t("emCta.bullet4")];
  const issueOptions = [
    { v: "Burst Pipe", l: t("emCta.issue.burst") },
    { v: "No Hot Water", l: t("emCta.issue.noHot") },
    { v: "Clogged Drain", l: t("emCta.issue.clog") },
    { v: "Gas Line Issue", l: t("emCta.issue.gas") },
    { v: "Flooding", l: t("emCta.issue.flood") },
    { v: "Other", l: t("emCta.issue.other") },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cityZip: "",
    issue: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.cityZip || !formData.issue) {
      toast({
        title: t("emCta.fillAll"),
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitToFormspree({
        _subject: 'EMERGENCY — New Lead',
        "Form Source": 'Emergency Service Request',
        Name: formData.name,
        Phone: formData.phone,
        "City/Zip": formData.cityZip,
        Issue: formData.issue,
        Description: formData.description,
      });
      setFormData({ name: "", phone: "", cityZip: "", issue: "", description: "" });
      setShowThankYou(true);
    } catch (err) {
      console.error('Form submission error:', err);
      toast({
        title: t("emCta.error"),
        description: t("emCta.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE — COPY */}
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase font-body">
              {t("emCta.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-4 mb-6 leading-tight">
              {t("emCta.h2")}
            </h2>
            <VintageOrnament className="max-w-xs mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-8 text-base lg:text-lg">
              {t("emCta.intro")}
            </p>

            <ul className="space-y-3 mb-10">
              {trustBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-body text-sm lg:text-base">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="tel:9549106883"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base hover:bg-primary/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              {t("emCta.callNow")}
            </a>
            <p className="text-muted-foreground text-sm font-body mt-4">
              {t("emCta.preferType")}
            </p>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded p-6 lg:p-8 shadow-xl bg-primary vintage-border relative">
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cream/20 rounded-tl" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cream/20 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cream/20 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cream/20 rounded-br" />

            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              {t("emCta.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {t("emCta.fullName")} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 rounded border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("emCta.fullNamePh")}
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {t("emCta.phone")} <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 rounded border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(954) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {t("emCta.cityZip")} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cityZip}
                  onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                  className="w-full h-11 rounded border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("emCta.cityZipPh")}
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {t("emCta.issue")} <span className="text-primary">*</span>
                </label>
                <select
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full h-11 rounded border border-input bg-background px-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  <option value="">{t("emCta.issuePh")}</option>
                  {issueOptions.map((opt) => (
                    <option key={opt.v} value={opt.v}>{opt.l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {t("emCta.brief")} <span className="text-foreground">{t("emCta.optional")}</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={t("emCta.briefPh")}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-background text-foreground h-12 rounded font-bold text-sm hover:bg-background/90 transition-all disabled:opacity-60"
              >
                {isSubmitting ? t("emCta.sending") : t("emCta.send")}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
              <p className="text-xs font-body text-center text-primary-foreground">
                {t("emCta.responseNote")}
              </p>
            </form>
          </div>
        </div>
      </div>
      <ThankYouModal open={showThankYou} onOpenChange={setShowThankYou} />
    </section>
  );
};

export default EmergencyCTA;
