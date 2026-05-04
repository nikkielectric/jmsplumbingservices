import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";
import ImmersiveShowcase from "@/components/gallery/ImmersiveShowcase";

// Existing project photos used as gallery images
import drainCleaningImg from "@/assets/drain-cleaning-hero.webp";
import galleryReview1Img from "@/assets/gallery-review-1.webp";
import gasLineImg from "@/assets/gas-line-hero.webp";
import galleryReview2Img from "@/assets/gallery-review-2.webp";
import plumbingRepairsImg from "@/assets/Plumbing Repairs Service.jpg";

import galleryReview3Img from "@/assets/gallery-review-3.webp";
import galleryReview4Img from "@/assets/gallery-review-4.webp";
import galleryReviewJoeSImg from "@/assets/gallery-review-joe-s.webp";
import galleryReview6Img from "@/assets/gallery-review-6.webp";
import repipingImg from "@/assets/repiping-hero.webp";
import emergencyImg from "@/assets/emergency-plumbing-hero.webp";
import plumberFixingSinkImg from "@/assets/plumber-fixing-sink.webp";
import teamVanImg from "@/assets/plumbing-team-van.webp";

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

/* ── Real Google Review data ── */
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
    name: "Lu I.",
    city: "South Florida",
    text: "About 6 weeks ago I had James come out and completely redo my leach field. My drains weren't draining and I'd had it hydrojetted 2 times in 1 year and my tank pumped as well. He showed up and did what he said he would do. James is a good guy and will tell you what he can do to help you out, but will also warn you about what you need to do afterwards. My leach field is draining beautifully and I'm glad I went with JMS Plumbing, and I think you will be too.",
    rating: 5,
    image: galleryReview1Img,
  },
  {
    name: "Mark F.",
    city: "South Florida",
    text: "These guys are the BEST!!! It's rare to find a trustworthy, high quality plumber with fair prices. JMS has earned my trust and they are the first plumber I call for any plumbing issue in my house. James from JMS has been to my house a few times and every single time he has been professional, on time, and thorough.",
    rating: 5,
    image: galleryReview2Img,
  },
  {
    name: "Melissa G.",
    city: "South Florida",
    text: "James was available right away when I called him in regards to my toilet being clogged. He came out on Tuesday night with his team and stayed 2 hours and 30 mins repairing it. The next day I had a separate issue with the valve and he sent his team back out to take care of it.",
    rating: 4,
    image: galleryReview3Img,
  },
  {
    name: "Diane H.",
    city: "South Florida",
    text: "Excellent Service!! Reliable, honest. They fixed our plumbing problem perfectly. Was very knowledgeable and would only call JMS Plumbing Services for future issues!",
    rating: 5,
    image: galleryReview6Img,
  },
  {
    name: "Evan S.",
    city: "South Florida",
    text: "James from JMS Plumbing was an absolute lifesaver! After dealing with a disaster left behind by another plumbing company, James came in and quickly assessed the situation. He was efficient, professional, and left everything clean and tidy.",
    rating: 5,
    image: galleryReview4Img,
  },
  {
    name: "Joe S.",
    city: "South Florida",
    text: "James came out within 30 minutes of us calling him. We had a major leak on the side of the house from the sprinkler. It was diagnosed within 2 minutes and fixed within the hour. He even went out of the way to fix a small issue we had with the sink. Will definitely be back!",
    rating: 5,
    image: galleryReviewJoeSImg,
  },
];

const textReviews: TextReview[] = [
  {
    name: "Laurie",
    city: "Boynton Beach, FL",
    text: "JMS Plumbing Services truly goes above and beyond. When their previous job ran late into the evening, they didn't call it a day — they still showed up to take care of my mom who lives in Boynton Beach. Her job also ended up taking much longer than expected and they stayed until it was done right.",
    rating: 5,
  },
  {
    name: "Josh P.",
    city: "South Florida",
    text: "James has worked on several of our investment properties and has been nothing short of excellent. He's extremely honest, reliable, and knowledgeable, which is exactly what you want in a plumber.",
    rating: 5,
  },
  {
    name: "Christina M.",
    city: "South Florida",
    text: "JMS plumbing service was beyond helpful with our plumbing issues. He was prompt, professional and knowledgeable. Definitely recommend and would use again.",
    rating: 5,
  },
  {
    name: "Beth B.",
    city: "South Florida",
    text: "I called JSM and spoke personal to owner James about my emergency situation. He was out within a day and went above and beyond to help us in any way he could. He even educated us on some of our plumbing issues and we had everything resolved within a day and a half. He was easy to communicate with and his pricing was more than fair and reasonable. He was clean and the quality of his work is very professional. Thank you JSM for helping us, and thank you James. We will definitely use you again and we highly recommend you to others.",
    rating: 5,
  },
  {
    name: "Wayne S.",
    city: "South Florida",
    text: "JMS Plumbing repaired an underground main water pipe to my home that had split. The service was fast professional and at a reasonable price. If you need any plumbing work done this should be your guy.",
    rating: 5,
  },
  {
    name: "Andrea D.",
    city: "South Florida",
    text: "Quickest service ever. I called him day of and my shower was fixed!!! Recommend for any plumbing needs!!",
    rating: 5,
  },
  {
    name: "Robert D.",
    city: "South Florida",
    text: "Did a great job installing a new septic tank at my parents house. Very efficient.",
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
      {/* Real photo from completed job */}
      <div className="w-full aspect-[4/3] overflow-hidden relative">
        <img
          src={review.image}
          alt={`Plumbing work completed for ${review.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
    document.title = "Work Gallery | JMS Plumbing Services | Sunrise, FL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "See real plumbing work and customer reviews from JMS Plumbing across South Florida. Licensed plumber serving Broward, Miami-Dade & Palm Beach Counties.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "See real plumbing work and customer reviews from JMS Plumbing across South Florida. Licensed plumber serving Broward, Miami-Dade & Palm Beach Counties.";
      document.head.appendChild(newMeta);
    }

    // Gallery JSON-LD with review markup
    const jsonLdId = "gallery-jsonld";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jmsplumbingservices.com/#business",
      "name": "JMS Plumbing Services LLC",
      "url": "https://jmsplumbingservices.com/gallery",
      "review": [...photoReviews, ...textReviews].map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating,
          "bestRating": 5
        },
        "reviewBody": r.text
      }))
    });

    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── SECTION 1: Hero ── */}
      <section className="relative pt-24 lg:pt-44 bg-secondary vintage-grain vintage-vignette overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-12 lg:py-20">
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
              <TextReviewCard key={review.name + i} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Immersive Media Showcase ── */}
      <ImmersiveShowcase />

      {/* ── SECTION 5: Leave a Review CTA ── */}
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
