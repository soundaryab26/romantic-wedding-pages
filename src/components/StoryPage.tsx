import keerthanaBeach from "@/assets/keerthana-beach.jpeg";

const StoryPage = () => {
  const traits = ["⚖️ Advocate", "🌸 Dreamer", "☀️ Sunshine", "👑 Bride", "💛 Our person"];

  return (
    <section id="page-3" className="page-section bg-background px-6 sm:px-12 items-start justify-center">
      <div className="max-w-xl">
        <div className="inline-block bg-gold/10 text-gold-light text-xs px-4 py-1.5 rounded-full tracking-wider mb-6">
          The woman, the myth, the advocate
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-light leading-tight mb-6">
          She argued her<br />way into our<br />
          <span className="text-gold-gradient">hearts forever.</span>
        </h2>
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold/20 mb-6 float-right ml-4">
          <img src={keerthanaBeach} alt="Keerthana" className="w-full h-full object-cover" />
        </div>
        <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
          A brilliant <strong className="text-foreground/80">lawyer</strong> by day, the most loyal friend by night —
          she&apos;s the one who brings everyone together and never lets go.
        </p>
        <div className="flex flex-wrap gap-2 mb-8 clear-both">
          {traits.map((trait) => (
            <span
              key={trait}
              className="border border-border px-4 py-1.5 rounded-full text-foreground/70 text-xs tracking-wider"
            >
              {trait}
            </span>
          ))}
        </div>
        <button
          onClick={() => document.getElementById("page-4")?.scrollIntoView({ behavior: "smooth" })}
          className="border border-gold/40 text-gold-light px-6 py-2 text-sm tracking-[0.15em] uppercase font-light bg-transparent transition-all duration-300 hover:bg-gold/10"
        >
          The big moment →
        </button>
      </div>
    </section>
  );
};

export default StoryPage;
