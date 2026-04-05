import keerthanaWings from "@/assets/keerthana-wings.jpeg";
import keerthanaNature from "@/assets/keerthana-nature.jpeg";
import keerthanaChic from "@/assets/keerthana-chic.jpeg";

const photos = [
  { src: keerthanaWings, caption: "Free Spirit" },
  { src: keerthanaNature, caption: "At Peace" },
  { src: keerthanaChic, caption: "Always Chic" },
];

const PhotoGalleryPage = () => {
  return (
    <section className="page-section bg-deep py-16">
      <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4 font-light">Through the years</p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream text-center font-light mb-10 px-4">
        Our favourite lawyer,<br />our forever friend ✨
      </h2>

      <div className="w-full max-w-md px-4 mx-auto">
        {/* Row 1: Large feature image */}
        <div className="relative overflow-hidden rounded-xl mb-3 aspect-[4/5]">
          <img src={photos[0].src} alt={photos[0].caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-0 right-0 text-center text-cream text-xs tracking-[0.2em] uppercase font-light">
            {photos[0].caption}
          </span>
        </div>

        {/* Row 2: Two side by side */}
        <div className="grid grid-cols-2 gap-3">
          {photos.slice(1, 3).map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-[3/4]">
              <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-0 right-0 text-center text-cream text-[10px] tracking-[0.2em] uppercase font-light">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
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
