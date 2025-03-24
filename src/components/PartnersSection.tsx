import { FaExternalLinkAlt } from "react-icons/fa";

export default function PartnersSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Partners
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src="/alu_logo.gif"
              alt="African Leadership University Logo"
              className="h-24 md:h-32 object-contain"
            />
          </div>
          <div className="lg:w-2/3 md:pl-8 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-700">
              The African Leadership University
            </h3>
            <p className="text-gray-600 mt-2">
              The African Leadership University (ALU) is dedicated to equipping
              it's students with the skills and qualities needed to succeed as
              ethical, entrepreneurial leaders. With campuses in Mauritius and
              Rwanda, ALU offers innovative undergraduate programs designed to
              foster leadership and problem-solving skills.
            </p>
            <a
              href="https://www.alueducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition-colors"
            >
              Visit ALU Website <FaExternalLinkAlt className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
