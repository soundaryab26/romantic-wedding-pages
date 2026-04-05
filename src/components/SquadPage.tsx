import squadSoundarya from "@/assets/squad-soundarya.jpeg";
import squadKaviya from "@/assets/squad-kaviya.jpeg";
import squadKalaivani from "@/assets/squad-kalaivani.jpeg";
import squadPreethi from "@/assets/squad-preethi.jpeg";
import squadVinitha from "@/assets/squad-vinitha.jpeg";
import squadMichlin from "@/assets/squad-michlin.jpeg";
import squadSeetha from "@/assets/squad-seetha.jpeg";

const squadMembers = [
  { name: "Soundarya", caption: "The one who acts calm but is secretly panicking inside 😌🔥", photo: squadSoundarya },
  { name: "Kaviya", caption: "Will cry at the wedding before the bride does 😭💀", photo: squadKaviya },
  { name: "Kalaivani", caption: "Shows up late but makes an entrance worth waiting for 💃✨", photo: squadKalaivani },
  { name: "Preethi", caption: "Has more energy than the DJ at 2 AM 🔥🎤", photo: squadPreethi },
  { name: "Vinitha", caption: "Already planning what to wear to the next 3 weddings 👗😂", photo: squadVinitha },
  { name: "Michlin", caption: "The emotional support bestie — tissues always ready 💖🥺", photo: squadMichlin },
  { name: "Seetha", caption: "First on the dance floor, last to leave 🎶💃", photo: squadSeetha },
];

const SquadPage = () => {
  return (
    <section id="page-5" className="page-section bg-background py-8">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl overflow-y-auto max-h-[100vh]">
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-2 font-light">The ones who made it happen</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-light mb-1">
          Her Ride-or-Die Squad 💕
        </h2>
        <p className="text-foreground/50 text-xs mb-5">Carrying the bride to be with all the love</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 w-full mb-4">
          {squadMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-xl p-3 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full mb-2 border-2 border-gold/30 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gold text-[9px] sm:text-[10px] tracking-widest uppercase mb-0.5">{member.role}</span>
              <span className="font-serif text-sm sm:text-lg text-foreground mb-0.5">{member.name}</span>
              <p className="text-foreground/50 text-[10px] sm:text-[11px] leading-relaxed hidden sm:block">{member.tagline}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/40 text-xs italic mb-4">
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
