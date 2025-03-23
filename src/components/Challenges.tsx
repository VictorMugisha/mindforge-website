import { challengesData } from "../data/challengesData";
import Challenge from "./Challenge";

export default function Challenges() {
  
  return (
    <section>
      {challengesData.map((challenge, index) => (
        <Challenge
          key={index}
          title={challenge.title}
          description1={challenge.description1}
          description2={challenge.description2}
          thumbnail={challenge.thumbnail}
          videoId={challenge.videoId}
          date={challenge.date}
          videoUrl={challenge.videoUrl}
          hashatgs={challenge.hashtags}
        />
      ))}
    </section>
  );
}
