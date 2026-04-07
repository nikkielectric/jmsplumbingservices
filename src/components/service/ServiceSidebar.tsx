import { useState } from "react";
import { Send, Star, Shield, Users } from "lucide-react";
import { toast } from "sonner";
import type { ServiceTestimonial } from "@/data/servicePages";
import { submitToFormspree } from "@/lib/formspree";
import ThankYouModal from "@/components/ThankYouModal";
interface ServiceSidebarProps {
  defaultService: string;
  testimonials: ServiceTestimonial[];
}

const ServiceSidebar = ({ defaultService, testimonials }: ServiceSidebarProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zip: "",
    service: defaultService,
    description: "",
  });
  const [sending, setSending] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.zip.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      await submitToFormspree({
        _subject: `New Lead — ${defaultService}`,
        "Form Source": `Service Page — ${defaultService}`,
        Name: form.name,
        Phone: form.phone,
        "City/Zip": form.zip,
        Service: form.service,
        Description: form.description,
      });
      setForm({ name: "", phone: "", zip: "", service: defaultService, description: "" });
      setShowThankYou(true);
    } catch (err) {
      console.error('Form submission error:', err);
      toast.error("Something went wrong. Please call us at (954) 910-6883.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="service-form" className="space-y-5">
      {/* Quote Form */}
      <div className="rounded p-6 lg:p-8 bg-secondary vintage-border relative">
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cream/15 rounded-tl" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cream/15 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cream/15 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cream/15 rounded-br" />

        <h3 className="text-xl lg:text-2xl font-display font-black text-cream mb-1">
          Request a Free Quote
        </h3>
        <p className="text-cream/60 font-body text-sm mb-5">
          We'll call you back fast — usually within minutes.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-2.5 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-2.5 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">City / Zip Code *</label>
            <input
              type="text"
              value={form.zip}
              onChange={(e) => setForm({ ...form, zip: e.target.value })}
              maxLength={50}
              className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-2.5 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
              placeholder="Sunrise, FL 33322"
            />
          </div>
          <div>
            <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Service Needed</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-2.5 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="drain" className="bg-secondary text-cream">Drain Cleaning</option>
              <option value="repairs" className="bg-secondary text-cream">Plumbing Repairs &amp; Replacements</option>
              <option value="gas" className="bg-secondary text-cream">Gas Line Services</option>
              <option value="garbage-disposal" className="bg-secondary text-cream">Garbage Disposal</option>
              <option value="remodel" className="bg-secondary text-cream">Bathroom/Kitchen Remodel</option>
              <option value="emergency" className="bg-secondary text-cream">Emergency Repair</option>
              <option value="other" className="bg-secondary text-cream">Other</option>
            </select>
          </div>
          <div>
            <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Brief Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              maxLength={500}
              rows={2}
              className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-2.5 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us what's happening so we can come prepared."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-primary/90 transition-all w-full disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send My Request"}
            {!sending && <Send className="w-4 h-4" />}
          </button>
        </form>
        <p className="text-cream/40 text-xs font-body text-center mt-4">
          Serving Broward, Miami-Dade &amp; Palm Beach Counties
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Star, label: "5-Star Rated" },
          { icon: Shield, label: "Licensed & Insured" },
          { icon: Users, label: "Family Owned" },
        ].map((badge) => (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-1.5 py-3 px-2 rounded bg-card border border-border text-center"
          >
            <badge.icon className="w-5 h-5 text-primary" />
            <span className="text-xs font-body font-semibold text-foreground leading-tight">{badge.label}</span>
          </div>
        ))}
      </div>

      {/* Testimonial Cards */}
      {testimonials.map((t, i) => (
        <div key={i} className="rounded border-2 border-cream/10 bg-forest-deep p-5 relative">
          <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cream/15 rounded-tr" />
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                className={`w-3.5 h-3.5 ${j < t.rating ? "fill-amber-400 text-amber-400" : "text-cream/20"}`}
              />
            ))}
          </div>
          <p className="text-cream/80 font-body text-sm leading-relaxed mb-3 italic">
            "{t.text}"
          </p>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-cream/60 text-xs font-body">{t.name} — {t.city}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSidebar;
