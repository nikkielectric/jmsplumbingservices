import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast.success("Quote request sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-cream-light py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - text & contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              Ready For A Plumber Who{" "}
              <span className="text-primary italic">Actually Shows Up?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Call us or fill out the form and we'll get back to you fast — with a real answer 
              and a fair quote. No runaround, no voicemail maze, no surprise fees.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", value: "(954) 910-6883", href: "tel:9549106883" },
                { icon: Mail, label: "Email", value: "Jmsplumbingservicesllc@gmail.com", href: "mailto:Jmsplumbingservicesllc@gmail.com" },
                { icon: MapPin, label: "Location", value: "Sunrise, FL 33322" },
                { icon: Clock, label: "Emergency", value: "Available 24/7" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-body">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground font-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 lg:p-10 bg-secondary"
          >
            <h3 className="text-2xl lg:text-3xl font-display font-black text-cream mb-2">
              Request a Free Quote
            </h3>
            <p className="text-cream/60 font-body text-sm mb-6">
              We'll review your request and call you back — usually within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" className="bg-secondary text-cream">Select a service</option>
                    <option value="general" className="bg-secondary text-cream">General Plumbing</option>
                    <option value="emergency" className="bg-secondary text-cream">Emergency Repair</option>
                    <option value="water-heater" className="bg-secondary text-cream">Water Heater</option>
                    <option value="drain" className="bg-secondary text-cream">Drain Cleaning</option>
                    <option value="leak" className="bg-secondary text-cream">Leak Detection</option>
                    <option value="remodel" className="bg-secondary text-cream">Bathroom/Kitchen Remodel</option>
                    <option value="other" className="bg-secondary text-cream">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe your plumbing issue or project..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all w-full disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Quote Request"}
                {!sending && <Send className="w-4 h-4" />}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-cream/10">
              <p className="text-cream/50 text-xs font-body text-center">
                Serving Sunrise, Plantation, Fort Lauderdale, Tamarac, Lauderhill,
                Coral Springs, Weston & surrounding areas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
