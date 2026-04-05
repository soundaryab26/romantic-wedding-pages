import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroPageProps {
  onBeginJourney: () => void;
}

const HeroPage = ({ onBeginJourney }: HeroPageProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".anim-hidden");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add("animate-fade-slide-up");
        item.classList.remove("anim-hidden");
      }, 300 + i * 250);
    });
  }, []);

  return (
    <section className="page-section bg-background cursor-pointer" onClick={onBeginJourney}>
      {/* Background photo with blur overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, filter: "blur(2px) brightness(0.4)" }}
      />
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Gold decorative line */}
        <div className="anim-hidden w-12 h-px bg-gold mb-8" />

        {/* Eyebrow */}
        <p className="anim-hidden text-gold-light text-xs tracking-[0.35em] uppercase font-light mb-6">
          A very special invitation
        </p>

        {/* Main heading */}
        <h1 className="anim-hidden font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-wide mb-3">
          <span className="text-gold-gradient">Keerthana</span>
        </h1>
        <p className="anim-hidden font-serif text-xl sm:text-2xl md:text-3xl italic font-light text-foreground/80 mb-8">
          is getting hitched 💍
        </p>

        {/* Decorative divider */}
        <div className="anim-hidden flex items-center gap-3 mb-6 text-gold/60 text-sm tracking-widest">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        {/* Tagline */}
        <p className="anim-hidden text-foreground/70 text-sm sm:text-base tracking-[0.15em] font-light mb-12">
          With love, laughter & happily ever after
        </p>

        {/* CTA Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBeginJourney();
          }}
          className="anim-hidden group border border-gold/40 bg-transparent text-gold-light px-8 py-3 text-sm tracking-[0.2em] uppercase font-light rounded-none transition-all duration-500 hover:bg-gold/10 hover:border-gold/70 hover:shadow-[0_0_20px_hsl(42,50%,54%,0.15)]"
        >
          Begin the Journey ↓
        </button>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-foreground/30 text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <div className="w-px h-8 bg-foreground/20 origin-top animate-scroll-line" />
      </div>
    </section>
  );
};

export default HeroPage;
