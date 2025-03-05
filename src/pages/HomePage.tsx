import Hero from "../components/Hero";
import HeroServices from "../components/HeroServices";
import Impact from "../components/Impact";
import MissionVision from "../components/MissionVision";
import NewsLetter from "../components/NewsLetter";
import Timeline from "../components/Timeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroServices />
      <Impact />
      <Timeline />
      <MissionVision />
      <NewsLetter />
    </>
  );
}
