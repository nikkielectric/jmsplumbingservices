import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Phone, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    initial: "M",
    rating: 5,
    text: "JMS came out same day and fixed our kitchen drain that had been backing up for weeks. Super professional and the pricing was very fair. Will definitely use again!",
    service: "Drain Cleaning",
  },
  {
    name: "Linda R.",
    initial: "L",
    rating: 5,
    text: "Had a gas line issue and they handled everything from inspection to repair. Really knowledgeable team — you can tell they take pride in their craft. Highly recommend!",
    service: "Gas Line Repair",
  },
  {
    name: "David & Maria S.",
    initial: "D",
    rating: 5,
    text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the blueprint, stayed on schedule, and the finished result exceeded our expectations.",
    service: "Plumbing Remodel",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? "fill-amber-400 text-amber-400" : "text-cream/20"
        }`}
      />
    ))}
  </div>
);

const googleMapsUrl =
  "https://www.google.com/maps/place/JMS+Plumbing+Services+LLC/@26.147967,-80.2959248,13.03z/data=!4m6!3m5!1s0x2ccb8ccb743c6cfb:0x109e4e624231af83!8m2!3d26.1479841!4d-80.296254!16s%2Fg%2F11lzdt02kt";

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - guarantee text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-tight mb-6">
              Our Satisfaction{" "}
              <span className="text-steel italic">Guarantee</span>
            </h2>
            <div className="w-20 h-1 bg-steel/50 mb-6" />
            <p className="text-cream/70 font-body leading-relaxed mb-5">
              At JMS Plumbing Services, we value the importance of plumbing that leaves you with
              peace of mind. Which means that we share a promise to leaving you feeling happy
              with the service. This is reflected through our 100% satisfaction guarantee.
            </p>
            <p className="text-cream/70 font-body leading-relaxed mb-8">
              From start to finish, we'll make sure to work closely alongside you.
              If any questions or concerns are raised, these will be addressed.
              For plumbers that value you, choose JMS Plumbing Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9549106883"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-6 py-3 rounded-lg font-bold text-sm hover:bg-cream/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                (954) 910-6883
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-6 py-3 rounded-lg font-bold text-sm hover:bg-cream/90 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right column - review cards */}
          <div className="lg:col-span-3 space-y-5">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-forest-deep rounded-xl p-6 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-cream font-bold font-body text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-cream text-sm font-body">{review.name}</p>
                    <Stars count={review.rating} />
                  </div>
                </div>
                <p className="text-cream/80 font-body text-sm leading-relaxed mb-4">
                  {review.text}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-steel/60 text-xs font-body hover:text-steel transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  See More on Google
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
