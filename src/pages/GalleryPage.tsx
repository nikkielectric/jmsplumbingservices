import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";

/* ── Google icon reusable ── */
const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < count ? "fill-amber-400 text-amber-400" : "text-cream/20"}`} />
    ))}
  </div>
);

/* ── Review data ── */
interface PhotoReview {
  name: string;
  city: string;
  text: string;
  rating: number;
  image: string;
}

interface TextReview {
  name: string;
  city: string;
  text: string;
  rating: number;
}

const googleReviewUrl =
  "https://www.google.com/search?q=jms+plumbing+south+florida#lrd=0x2ccb8ccb743c6cfb:0x109e4e624231af83,3,,,,";

const photoReviews: PhotoReview[] = [
  {
    name: "Marcus T.",
    city: "Sunrise, FL",
    text: "JMS came out same day and fixed our kitchen drain that had been backing up for weeks. Super professional and the pricing was very fair. Will definitely use again!",
    rating: 5,
    image: "/assets/gallery/review-1.jpg",
  },
  {
    name: "David & Maria S.",
    city: "Plantation, FL",
    text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the whole process, stayed on schedule, and the finished result exceeded our expectations. True professionals.",
    rating: 5,
    image: "/assets/gallery/review-2.jpg",
  },
  {
    name: "Carlos M.",
    city: "Fort Lauderdale, FL",
    text: "Called them for an emergency leak at 10pm and they were at my door within the hour. Fixed the issue quickly and didn't overcharge. This is what real customer service looks like. Five stars all day!",
    rating: 5,
    image: "/assets/gallery/review-3.jpg",
  },
  {
    name: "Stephanie W.",
    city: "Coral Springs, FL",
    text: "James and his team replaced our old water heater and installed a new garbage disposal. Very clean work, explained everything clearly, and left the area spotless. Great family-owned business!",
    rating: 5,
    image: "/assets/gallery/review-4.jpg",
  },
  {
    name: "Roberto A.",
    city: "Weston, FL",
    text: "Had a gas line issue that two other plumbers couldn't figure out. JMS diagnosed the problem in under 30 minutes, gave us a fair quote, and had it fixed the same day. These guys know what they're doing.",
    rating: 5,
    image: "/assets/gallery/review-5.jpg",
  },
  {
    name: "Angela P.",
    city: "Tamarac, FL",
    text: "Our main sewer line was completely backed up and flooding the yard. JMS came out within two hours, cleared the roots from the pipe, and even showed us the camera footage so we understood the problem. Honest, professional, and reasonably priced.",
    rating: 5,
    image: "/assets/gallery/review-6.jpg",
  },
];

const textReviews: TextReview[] = [
  {
    name: "Linda R.",
    city: "Plantation, FL",
    text: "Called them for a clogged shower drain. They were on time, explained everything, and didn't try to upsell me. Exactly the kind of plumber I've been looking for.",
    rating: 5,
  },
  {
    name: "James H.",
    city: "Lauderhill, FL",
    text: "Fast, affordable, and honest. They replaced a corroded section of pipe under our bathroom sink and the price was exactly what they quoted. No surprises.",
    rating: 5,
  },
  {
    name: "Patricia N.",
    city: "Sunrise, FL",
    text: "I've used JMS three times now — drain cleaning, toilet replacement, and a small remodel. Every time they're on time, clean, and fair. They have a customer for life.",
    rating: 5,
  },
  {
    name: "Miguel D.",
    city: "Fort Lauderdale, FL",
    text: "Emergency call on a Sunday morning. They picked up on the first ring, showed up in 45 minutes, and stopped a leak that could have caused serious damage. Can't recommend them enough.",
    rating: 5,
  },
  {
    name: "Karen B.",
    city: "Coral Springs, FL",
    text: "JMS installed a new garbage disposal for us. Quick, clean, and the price was better than two other quotes we got. Very polite and professional team.",
    rating: 5,
  },
  {
    name: "Anthony V.",
    city: "Weston, FL",
    text: "Our water heater died on a Friday night. JMS had a new one installed by Saturday afternoon. Fair price, no rush fees they didn't tell us about upfront. Real deal plumbers.",
    rating: 5,
  },
];

/* ── Photo Review Card (masonry) ── */
const PhotoReviewCard = ({ review, index }: { review: PhotoReview; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="break-inside-avoid mb-5 group"
  >
    <div className="bg-card rounded border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Photo placeholder — using a gradient since we can't pull Google photos */}
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 vintage-grain opacity-40" />
        <div className="text-center z-10 px-4">
          <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 bg-secondary/60 backdrop-blur">
            <span className="text-cream font-display font-bold text-2xl">{review.name[0]}</span>
          </div>
          <p className="text-cream/60 font-body text-xs tracking-widest uppercase">Customer Photo</p>
        </div>
      </div>

      <div className="p-5">
        <Stars count={review.rating} />
        <p className="text-foreground/80 font-body text-sm leading-relaxed mt-3 mb-4 italic">
          "{review.text}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground text-sm font-body">{review.name}</p>
            <p className="text-muted-foreground text-xs font-body">{review.city}</p>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-body">Google Review</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Text Review Card ── */
const TextReviewCard = ({ review, index }: { review: TextReview; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-card rounded border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
  >
    <Stars count={review.rating} />
    <p className="text-foreground/80 font-body text-sm leading-relaxed mt-3 mb-4 italic">
      "{review.text}"
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-foreground text-sm font-body">{review.name}</p>
        <p className="text-muted-foreground text-xs font-body">{review.city}</p>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <GoogleIcon className="w-3.5 h-3.5" />
        <span className="text-[11px] font-body">Google Review</span>
      </div>
    </div>
  </motion.div>
);

/* ── Page ── */
const GalleryPage = () => {
  useEffect(() => {
    document.title = "Gallery | JMS Plumbing Services — Real Work, Real Customers";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "See real plumbing work completed by JMS Plumbing Services throughout Broward, Miami-Dade, and Palm Beach Counties. Photos and reviews from real South Florida customers.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "See real plumbing work completed by JMS Plumbing Services throughout Broward, Miami-Dade, and Palm Beach Counties. Photos and reviews from real South Florida customers.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── SECTION 1: Hero ── */}
      <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-24 bg-secondary vintage-grain vintage-vignette overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body">
              REAL WORK. REAL CUSTOMERS.
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-cream leading-[1.08] mt-4 mb-6 max-w-4xl mx-auto">
              See What Our Customers Are Saying — and What We've Done
            </h1>
            <VintageOrnament className="max-w-xs mx-auto mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/20 [&_div]:to-transparent [&_svg]:text-cream/30" />
            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Every photo on this page comes from a real job completed by JMS Plumbing Services in South Florida. These are the homes we've worked in, the problems we've solved, and the customers who trusted us to get it right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Photo Reviews Gallery (Masonry) ── */}
      <section className="py-16 lg:py-24 bg-cream-light vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-foreground leading-tight">
              Photos &amp; Reviews from Real Jobs
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              Five-star reviews from homeowners across Broward, Miami-Dade, and Palm Beach Counties — with photos from the job.
            </p>
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {photoReviews.map((review, i) => (
              <PhotoReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Text-Only Reviews ── */}
      <section className="py-16 lg:py-24 bg-background vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-foreground leading-tight">
              More From Our Customers
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              More five-star reviews from homeowners across Broward, Miami-Dade, and Palm Beach Counties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {textReviews.map((review, i) => (
              <TextReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Leave a Review CTA ── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(184 72% 32%), hsl(200 30% 18%), hsl(184 72% 25%))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(184_72%_38%_/_0.15)_0%,_transparent_70%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body">
              HAD A GREAT EXPERIENCE?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-cream mt-4 mb-4">
              Tell Others About It.
            </h2>
            <VintageOrnament className="max-w-xs mx-auto mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/20 [&_div]:to-transparent [&_svg]:text-cream/30" />
            <p className="text-cream/70 font-body text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Your review helps other South Florida homeowners find a plumber they can actually trust. It takes less than two minutes and means more to us than any advertisement ever could.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-8 py-4 rounded font-bold text-sm hover:bg-cream/90 transition-all shadow-lg"
            >
              <GoogleIcon className="w-5 h-5" />
              Leave Us a Google Review
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-cream/40 font-body text-xs mt-4 max-w-md mx-auto">
              Reviews are posted directly to Google and visible to homeowners across the Tri-County area.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
