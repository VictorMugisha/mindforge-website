import Hero from "../components/Hero";
import HeroServices from "../components/HeroServices";
import Impact from "../components/Impact";
import MissionVision from "../components/MissionVision";
import NewsLetter from "../components/NewsLetter";
import ProblemStatement from "../components/ProblemStatement";
import SolutionOverview from "../components/SolutionOverview";
import Timeline from "../components/Timeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroServices />
      <Impact />
      <Timeline />
      <ProblemStatement />
      <SolutionOverview />
      <MissionVision />
      <NewsLetter />
    </>
  );
}
