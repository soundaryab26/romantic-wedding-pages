import { useEffect, useRef } from "react";
import keerthanaBride from "@/assets/keerthana-bride.jpeg";

const InvitePage = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      const sz = 1 + Math.random() * 2.5;
      star.className = "absolute rounded-full bg-foreground/40 animate-twinkle";
      star.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${2 + Math.random() * 4}s;animation-delay:${Math.random() * 4}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <section id="page-7" className="page-section bg-background">
      <div ref={starsRef} className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 border border-gold/30 rounded-2xl p-8 sm:p-12 max-w-md mx-6 text-center bg-background/80 backdrop-blur-sm">
        {/* Corner gems */}
        <div className="absolute top-3 left-3 text-gold/40 text-xs">✦</div>
        <div className="absolute top-3 right-3 text-gold/40 text-xs">✦</div>
        <div className="absolute bottom-3 left-3 text-gold/40 text-xs">✦</div>
        <div className="absolute bottom-3 right-3 text-gold/40 text-xs">✦</div>

        <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-gold/30 overflow-hidden">
          <img src={keerthanaBride} alt="Keerthana" className="w-full h-full object-cover" />
        </div>

        <p className="text-foreground/40 text-xs tracking-[0.3em] uppercase mb-2">You are invited to</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mb-1">Keerthana&apos;s</h2>
        <p className="font-serif text-xl text-gold-gradient italic mb-6">Bridal Shower</p>

        <div className="mb-6">
          <div className="font-serif text-5xl text-gold font-light">26</div>
          <div className="text-foreground/60 text-sm tracking-wider">April · 2026</div>
          <div className="text-foreground/40 text-xs tracking-widest uppercase">Sunday</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <div className="text-foreground/40 text-[10px] tracking-widest uppercase mb-1">Time</div>
            <div className="text-foreground text-sm font-light">1:30 PM</div>
          </div>
          <div>
            <div className="text-foreground/40 text-[10px] tracking-widest uppercase mb-1">Dress Code</div>
            <div className="text-foreground text-sm font-light">Bodycon</div>
          </div>
        </div>

        <p className="text-foreground/30 text-[10px] tracking-[0.2em]">
          ✦ Keerthana · This is your moment · We love you ✦
        </p>
      </div>
    </section>
  );
};

export default InvitePage;
