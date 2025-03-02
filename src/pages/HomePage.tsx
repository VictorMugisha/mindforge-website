import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroServices from "../components/HeroServices";
import Impact from "../components/Impact";
import MissionVision from "../components/MissionVision";
import NewsLetter from "../components/NewsLetter";

export default function HomePage() {
  return (
    <div className="max-w-[2000px] mx-auto mt-2">
      <Header />
      <Hero />
      <HeroServices />
      <Impact />
      <MissionVision />
      <NewsLetter />
      <Footer />
    </div>
  );
}
