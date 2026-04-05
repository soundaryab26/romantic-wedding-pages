import { useEffect, useRef } from "react";
import keerthanaGlam from "@/assets/keerthana-glam.jpeg";

const RevealPage = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 70; i++) {
      const star = document.createElement("div");
      const sz = 1 + Math.random() * 2.5;
      star.className = "absolute rounded-full bg-foreground/40 animate-twinkle";
      star.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${2 + Math.random() * 4}s;animation-delay:${Math.random() * 4}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <section id="page-4" className="page-section bg-background">
      <div ref={starsRef} className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="text-2xl mb-6">🎉 Surprise! 🎉</p>
        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-2 border-gold/30">
          <img src={keerthanaGlam} alt="Keerthana" className="w-full h-full object-cover" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-light mb-2">
          Keerthana
        </h2>
        <p className="font-serif text-2xl sm:text-3xl text-gold-gradient italic mb-4">Bride To Be</p>
        <p className="text-foreground/50 text-sm tracking-wider mb-6">
          The counsellor rests her case · Love wins
        </p>
        <div className="text-4xl mb-6 animate-float">💍</div>
        <button
          onClick={() => document.getElementById("page-5")?.scrollIntoView({ behavior: "smooth" })}
          className="border border-gold/40 text-gold-light px-6 py-2 text-sm tracking-[0.15em] uppercase font-light bg-transparent transition-all duration-300 hover:bg-gold/10"
        >
          Meet the squad →
        </button>
      </div>
    </section>
  );
};

export default RevealPage;
