import Challenge from "./Challenge";

export default function Challenges() {
  const videosData = [
    {
      title: "Challenge 1 - Think Tank Introduction",
      description1:
        "This challenge also serves as an introduction to the esteemed members of E-Lab Academy.",
      description2:
        "Join us as we explore our mission, share insights from our team members, and discuss the innovative approaches we employ to tackle pressing challenges in healthcare and education.",
      thumbnail: "/governance-in-africa.jpg",
      videoUrl: "https://www.youtube.com/watch?v=kuPMgrR5HQY",
      videoId: "kuPMgrR5HQY",
    },
  ];
  return (
    <section>
      {videosData.map((video, index) => (
        <Challenge
          key={index}
          title={video.title}
          description1={video.description1}
          description2={video.description2}
          thumbnail={video.thumbnail}
          videoId={video.videoId}
          videoUrl={video.videoUrl}
          hashatgs={["ThinkTank", "Innovation", "Healthcare", "Education"]}
        />
      ))}
    </section>
  );
}
