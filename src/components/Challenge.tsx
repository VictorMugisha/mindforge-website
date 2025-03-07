import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface ChallengeProps {
  title: string;
  description1: string;
  description2: string;
  thumbnail: string;
  videoId: string;
  date: string;
  videoUrl: string;
  hashatgs?: string[];
}

export default function Challenge({
  title,
  description1,
  description2,
  thumbnail,
  videoId,
  date,
  videoUrl,
  hashatgs,
}: ChallengeProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg mx-4 lg:mx-10">
      <div className="w-full md:w-1/2">
        <LiteYouTubeEmbed
          id={videoId}
          title="Challenge 1 - Think Tank Introduction"
          thumbnail={thumbnail}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-xs md:text-sm text-gray-500 mb-2">{date}</p>
        <h2 className="text-lg lg:text-2xl font-bold mb-4 text-blue-600">
          {title}
        </h2>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          {description1}
        </p>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          {description2}
        </p>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-lg font-semibold text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-400 transition-all self-start"
        >
          Watch on YouTube
        </a>
        <div className="flex flex-wrap mt-4 gap-y-2">
          {hashatgs?.map((hashatg, index) => (
            <span
              key={index}
              className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2"
            >
              #{hashatg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
