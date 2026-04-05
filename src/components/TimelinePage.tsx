const timelineItems = [
  { emoji: "🥂", title: "Arrive & Sparkle", desc: "Walk in and let the evening begin · you're the star tonight" },
  { emoji: "🎀", title: "Bridal Games", desc: "Even a lawyer can't argue her way out of these ones" },
  { emoji: "🌸", title: "Shower of Love", desc: "Gifts, wishes & happy tears from everyone who adores you" },
  { emoji: "🎂", title: "Cake & Sweet Moments", desc: "Because every bride deserves dessert & lots of it" },
  { emoji: "📸", title: "Forever Memories", desc: "Photos, laughter & love — memories you'll treasure always" },
];

const TimelinePage = () => {
  return (
    <section id="page-6" className="page-section bg-cream">
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4 font-light">What&apos;s in store</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-deep font-light mb-10">
          An evening crafted just for you ✨
        </h2>

        <div className="flex flex-col gap-6 w-full text-left">
          {timelineItems.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg border border-border">
                {item.emoji}
              </div>
              <div>
                <h4 className="font-serif text-lg text-deep font-medium">{item.title}</h4>
                <p className="text-deep/60 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => document.getElementById("page-7")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 border border-deep/30 text-deep px-6 py-2 text-sm tracking-[0.15em] uppercase font-light bg-transparent transition-all duration-300 hover:bg-deep/10"
        >
          Your invitation →
        </button>
      </div>
    </section>
  );
};

export default TimelinePage;
