import { useEffect, useState, RefObject } from "react";

interface NavDotsProps {
  totalPages: number;
  containerRef: RefObject<HTMLDivElement>;
}

const NavDots = ({ totalPages, containerRef }: NavDotsProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pages = container.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(pages).indexOf(entry.target as Element);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.4 }
    );

    pages.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, [containerRef]);

  const scrollTo = (i: number) => {
    const pages = containerRef.current?.querySelectorAll(".page-section");
    pages?.[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={`nav-dot ${active === i ? "active" : ""}`}
        />
      ))}
    </nav>
  );
};

export default NavDots;
