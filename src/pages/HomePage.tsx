import Hero from "../components/Hero";
import HeroServices from "../components/HeroServices";
import Impact from "../components/Impact";
import MissionVision from "../components/MissionVision";
import NewsLetter from "../components/NewsLetter";

export default function HomePage() {
  return (
    <div className="max-w-[2000px] mx-auto mt-2">
      <Hero />
      <HeroServices />
      <Impact />
      <MissionVision />
      <NewsLetter />
    </div>
  );
}
