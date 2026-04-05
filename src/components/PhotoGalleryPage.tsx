const PhotoGalleryPage = () => {
  return (
    <section className="page-section bg-deep">
      <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4 font-light">Through the years</p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream text-center font-light mb-10 px-4">
        Our favourite lawyer,<br />our forever friend ✨
      </h2>
      <div className="grid grid-cols-3 gap-3 max-w-lg px-6">
        {["Radiant Bride", "Free Spirit", "Always Chic"].map((caption, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg bg-muted ${i === 0 ? "row-span-2" : ""}`}
            style={{ minHeight: i === 0 ? "260px" : "120px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="text-cream text-[10px] tracking-widest uppercase">{caption}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const next = document.getElementById("page-3");
          next?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-10 border border-rose/40 text-rose px-6 py-2 text-sm tracking-[0.15em] uppercase font-light bg-transparent transition-all duration-300 hover:bg-rose/10"
      >
        See her story →
      </button>
    </section>
  );
};

export default PhotoGalleryPage;
