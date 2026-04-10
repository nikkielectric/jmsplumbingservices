import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from "lucide-react";

import slideHoseBib from "@/assets/gallery/slide-hose-bib.jpg";
import slideCopperRepipe from "@/assets/gallery/slide-copper-repipe.jpg";
import slideWaterHeater from "@/assets/gallery/slide-water-heater.jpg";
import slideToilet from "@/assets/gallery/slide-toilet.jpg";
import slideShowerPanel from "@/assets/gallery/slide-shower-panel.jpg";
import slideHoseBib2 from "@/assets/gallery/slide-hose-bib-2.jpg";
import slideSoldering from "@/assets/gallery/slide-soldering.jpg";
import slideShowerPan from "@/assets/gallery/slide-shower-pan.jpg";
import slideShowerFixture from "@/assets/gallery/slide-shower-fixture.jpg";

/* ── Types ── */
export interface ShowcaseSlide {
  id: string;
  type: "image" | "video" | "youtube" | "instagram";
  src: string;
  poster?: string;
  category?: string;
  location?: string;
}

/* ── Data ── */
export const showcaseSlides: ShowcaseSlide[] = [
  { id: "1", type: "image", src: slideSoldering, category: "COPPER REPIPING", location: "South Florida" },
  { id: "2", type: "image", src: slideCopperRepipe, category: "COPPER REPIPING", location: "South Florida" },
  { id: "3", type: "image", src: slideWaterHeater, category: "WATER HEATER INSTALLATION", location: "South Florida" },
  { id: "4", type: "video", src: "/gallery/slide-video-1.mp4", category: "PLUMBING WORK", location: "South Florida" },
  { id: "5", type: "image", src: slideToilet, category: "TOILET INSTALLATION", location: "South Florida" },
  { id: "6", type: "image", src: slideShowerPanel, category: "FIXTURE INSTALLATION", location: "South Florida" },
  { id: "7", type: "image", src: slideShowerPan, category: "SHOWER PAN LINER", location: "South Florida" },
  { id: "8", type: "image", src: slideShowerFixture, category: "FIXTURE INSTALLATION", location: "South Florida" },
  { id: "9", type: "image", src: slideHoseBib, category: "HOSE BIB REPAIR", location: "South Florida" },
  { id: "10", type: "image", src: slideHoseBib2, category: "HOSE BIB REPAIR", location: "South Florida" },
];

/* ── Lightbox for full-screen viewing ── */
const Lightbox = ({
  slide,
  onClose,
  onPrev,
  onNext,
}: {
  slide: ShowcaseSlide;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (slide.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [slide]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 text-cream/60 hover:text-cream text-3xl font-light transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-sm text-cream p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-sm text-cream p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media */}
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[85vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={slide.category || "Project photo"}
              className="w-full h-full max-h-[85vh] object-contain rounded-lg"
            />
          ) : slide.type === "video" ? (
            <div className="relative">
              <video
                ref={videoRef}
                src={slide.src}
                poster={slide.poster}
                muted={muted}
                loop
                playsInline
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !muted;
                    setMuted(!muted);
                  }
                }}
                className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-cream p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          ) : (
            <iframe
              src={slide.src}
              className="w-full aspect-video rounded-lg"
              allow="autoplay; encrypted-media"
              loading="lazy"
              title={slide.category || "Video"}
            />
          )}

          {/* Caption */}
          {(slide.category || slide.location) && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
              {slide.category && (
                <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body block mb-1">
                  {slide.category}
                </span>
              )}
              {slide.location && (
                <span className="text-cream/50 font-body text-xs">{slide.location}</span>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Thumbnail Card ── */
const SlideCard = ({
  slide,
  index,
  onClick,
}: {
  slide: ShowcaseSlide;
  index: number;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[420px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
        {slide.type === "image" ? (
          <img
            src={slide.src}
            alt={slide.category || "Project photo"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src={slide.src}
              poster={slide.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 group-hover:bg-primary/80 transition-colors duration-300">
                <Play className="w-6 h-6 text-cream fill-cream" />
              </div>
            </div>
          </>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Caption */}
        {(slide.category || slide.location) && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {slide.category && (
              <span className="text-primary font-semibold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-body block mb-1">
                {slide.category}
              </span>
            )}
            {slide.location && (
              <span className="text-cream/50 font-body text-xs">{slide.location}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* ── Main Component ── */
const ImmersiveShowcase = () => {
  const slides = showcaseSlides;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);
  const scrollSpeed = 0.5; // px per frame

  /* Slow auto-scroll */
  const autoScroll = useCallback(() => {
    if (!scrollRef.current || isPaused) {
      animRef.current = requestAnimationFrame(autoScroll);
      return;
    }
    const el = scrollRef.current;
    el.scrollLeft += scrollSpeed;
    // Loop back when reaching the end
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
      el.scrollLeft = 0;
    }
    animRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [autoScroll]);

  const scrollBy = (dir: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  if (slides.length === 0) return null;

  return (
    <>
      <section className="relative py-16 lg:py-24 bg-secondary vintage-grain overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Section header */}
        <div className="container mx-auto px-4 lg:px-8 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body">
              BEHIND THE SCENES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-cream leading-tight mt-3 mb-4">
              Our Work, Up Close
            </h2>
            <p className="text-cream/50 font-body text-sm sm:text-base max-w-xl mx-auto">
              Real photos and videos from real jobs across South Florida. Click any image for a closer look.
            </p>
          </motion.div>
        </div>

        {/* Scrolling gallery strip */}
        <div className="relative">
          {/* Arrow buttons */}
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm text-cream p-2.5 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm text-cream p-2.5 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-8 sm:px-16 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          >
            {slides.map((slide, i) => (
              <SlideCard
                key={slide.id}
                slide={slide}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          slide={slides[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + slides.length) % slides.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % slides.length)}
        />
      )}
    </>
  );
};

export default ImmersiveShowcase;
