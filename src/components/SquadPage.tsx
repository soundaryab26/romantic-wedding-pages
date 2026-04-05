const squadMembers = [
  { name: "Soundarya", role: "The Co-ord 🎀", tagline: "Made everything match — including the vibes" },
  { name: "Kaviya", role: "The Planner 📋", tagline: "Had a spreadsheet before anyone else had a clue" },
  { name: "Kalai", role: "Venue Hunter 📍", tagline: "Found Wanderbite and secured the magic spot" },
];

const SquadPage = () => {
  return (
    <section id="page-5" className="page-section bg-background">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl">
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4 font-light">The ones who made it happen</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-light mb-2">
          Her Ride-or-Die Squad 💕
        </h2>
        <p className="text-foreground/50 text-sm mb-10">Carrying the bride to be with all the love</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8">
          {squadMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 rounded-full bg-muted mb-4 border border-gold/20" />
              <span className="text-gold text-[10px] tracking-widest uppercase mb-1">{member.role}</span>
              <span className="font-serif text-xl text-foreground mb-2">{member.name}</span>
              <p className="text-foreground/50 text-xs leading-relaxed">{member.tagline}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/40 text-xs italic mb-8">
          "Behind every bride-to-be is a squad that never sleeps ✨"
        </p>

        <button
          onClick={() => document.getElementById("page-6")?.scrollIntoView({ behavior: "smooth" })}
          className="border border-blush/30 text-blush px-6 py-2 text-sm tracking-[0.15em] uppercase font-light bg-transparent transition-all duration-300 hover:bg-blush/10"
        >
          See what&apos;s planned →
        </button>
      </div>
    </section>
  );
};

export default SquadPage;
