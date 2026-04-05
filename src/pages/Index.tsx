import { useRef, useCallback } from "react";
import HeroPage from "@/components/HeroPage";
import PhotoGalleryPage from "@/components/PhotoGalleryPage";
import StoryPage from "@/components/StoryPage";
import RevealPage from "@/components/RevealPage";
import SquadPage from "@/components/SquadPage";
import TimelinePage from "@/components/TimelinePage";
import InvitePage from "@/components/InvitePage";
import NavDots from "@/components/NavDots";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToPage = useCallback((index: number) => {
    const pages = containerRef.current?.querySelectorAll(".page-section");
    pages?.[index]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <NavDots totalPages={7} containerRef={containerRef} />
      <HeroPage onBeginJourney={() => scrollToPage(1)} />
      <PhotoGalleryPage />
      <StoryPage />
      <RevealPage />
      <SquadPage />
      <TimelinePage />
      <InvitePage />
    </div>
  );
};

export default Index;
