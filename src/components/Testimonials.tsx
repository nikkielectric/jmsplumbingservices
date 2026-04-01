import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "JMS came out same day and fixed our kitchen drain that had been backing up for weeks. Super professional and the pricing was very fair. Will definitely use again!",
    date: "March 2026",
    service: "Drain Cleaning",
  },
  {
    name: "Linda R.",
    rating: 5,
    text: "Had a gas line issue and they handled everything from inspection to repair. Really knowledgeable team — you can tell they take pride in their craft. Highly recommend!",
    date: "February 2026",
    service: "Gas Line Repair",
  },
  {
    name: "David & Maria S.",
    rating: 5,
    text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the blueprint, stayed on schedule, and the finished result exceeded our expectations.",
    date: "January 2026",
    service: "Plumbing Remodel",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? "fill-amber-400 text-amber-400" : "text-border"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/JMS+Plumbing+Services+LLC/@26.147967,-80.2959248,13.03z/data=!4m6!3m5!1s0x2ccb8ccb743c6cfb:0x109e4e624231af83!8m2!3d26.1479841!4d-80.296254!16s%2Fg%2F11lzdt02kt";

  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3">
            What Our Customers Say
          </h2>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 bg-background rounded-full px-5 py-2.5 border border-border shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl font-bold text-foreground">5.0</span>
              <Stars count={5} />
              <span className="text-sm text-muted-foreground font-body">on Google</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-xl p-7 border border-border hover:shadow-lg transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="text-foreground font-body mt-4 mb-5 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm font-body">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {review.service} · {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline transition-colors"
          >
            See all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
