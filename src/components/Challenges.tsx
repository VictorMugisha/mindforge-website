import Challenge from "./Challenge";

export default function Challenges() {
  const videosData = [
    {
      title: "Challenge 1 - Think Tank Introduction",
      description1:
        "This challenge also serves as an introduction to the esteemed members of E-Lab Academy.",
      description2:
        "Join us as we explore our mission, share insights from our team members, and discuss the innovative approaches we employ to tackle pressing challenges in healthcare and education.",
      thumbnail: "/mindforge-team.jpg",
      videoUrl: "https://www.youtube.com/shorts/tCjb_-TaWPk",
      videoId: "tCjb_-TaWPk",
      date: "Wednesday, 5 February 2025",
    },
    {
      title: "Challenge 2 - Discover Africa: The Voice of the Massai",
      description1:
        "During this challenge we explore the rich culture and history of the Massai people.",
      description2:
        "Join us as we delve into the challenges faced by the Massai community and discuss the lives and mysteries that lie behind what we normally see on the media.",
      thumbnail: "/challenge-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=eEQ_krnEZEI",
      videoId: "eEQ_krnEZEI",
      date: "Thursday, 13 February 2025",
    },
    {
      title: "Challenge 3 - Help Lab: Umuganda Activity",
      description1:
        "During this challenge we were supposed to help the community, so we chose to contribute to Umuganda public activity.",
      description2:
        "We joined our hands with the locals and leaders to clean the streets and build a bridge over the river that connets two major cells in Kimironko sector in the city of Kigali.",
      thumbnail: "/challenge-3.jpeg",
      videoUrl: "https://www.youtube.com/watch?v=kuPMgrR5HQY",
      videoId: "kuPMgrR5HQY",
      date: "Saturday, 22 February 2025",
    },
    {
      title: "Challenge 4 - Hunt for The Treausure",
      description1:
        "We had an interview with the Director General in Charge of Africa Department in The Minsistry of Foreigh Affairs and International Cooperation.",
      description2:
        "We discussed lots of topics including the role of Rwanda in the multinational operations, the challenges faced by the Ministry of Foreign Affairs and International Cooperation, and the way every nation puts it's interests before other countries' interest.",
      thumbnail: "/challenge-4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=KS3m_5mcvEs",
      videoId: "KS3m_5mcvEs",
      date: "Thursday, 6 March 2025",
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
          date={video.date}
          videoUrl={video.videoUrl}
          hashatgs={["ThinkTank", "Innovation", "Healthcare", "Education"]}
        />
      ))}
    </section>
  );
}
