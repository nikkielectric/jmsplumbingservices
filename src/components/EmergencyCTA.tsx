import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const trustBullets = [
  "We answer 24/7 — a real person, every time",
  "Upfront pricing before any work begins",
  "Serving Broward, Miami-Dade & Palm Beach County",
  "After-hours fees always disclosed upfront",
];

const issueOptions = [
  "Burst Pipe",
  "No Hot Water",
  "Clogged Drain",
  "Gas Line Issue",
  "Flooding",
  "Other",
];

const EmergencyCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cityZip: "",
    issue: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.cityZip || !formData.issue) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Request Sent!",
        description: "We'll call you back as soon as possible.",
      });
      setFormData({ name: "", phone: "", cityZip: "", issue: "", description: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-cream-light py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE — COPY */}
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase font-body">
              Available 24/7 — Nights, Weekends &amp; Holidays
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-4 mb-6 leading-tight">
              Got a Plumbing Emergency in South Florida?
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8 text-base lg:text-lg">
              Don't wait. In South Florida's climate, a burst pipe or active leak can cause
              serious water damage and mold within 24–48 hours. We answer our phone around
              the clock — no voicemail, no runaround.
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
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-base hover:bg-primary/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now — (954) 910-6883
            </a>
            <p className="text-muted-foreground text-sm font-body mt-4">
              Prefer to type? Fill out the form and we'll call you back fast.
            </p>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-2xl p-6 lg:p-8 shadow-xl bg-primary">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Request Emergency Service
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(954) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  City / Zip Code <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cityZip}
                  onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. Sunrise, 33351"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  What's the issue? <span className="text-primary">*</span>
                </label>
                <select
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  <option value="">Select an issue...</option>
                  {issueOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Brief description <span className="text-foreground">(optional)</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us what's happening so we can come prepared."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-background text-foreground h-12 rounded-lg font-bold text-sm hover:bg-background/90 transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send My Request"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
              <p className="text-xs font-body text-center text-primary-foreground">
                We typically respond within minutes during business hours and as fast as possible after hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
