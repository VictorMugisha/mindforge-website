import {
  LightBulbIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function SolutionSection() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Decorative Background Elements with lower z-index */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-green-50 transform -skew-y-6 origin-top-left -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-green-100 transform skew-y-6 origin-bottom-right -z-10"></div>
        {/* Icon with Animation */}
        <div className="relative inline-block p-4 bg-green-100 rounded-full animate-bounce">
          <LightBulbIcon className="h-16 w-16 text-green-600" />
        </div>
        {/* Solution Title */}
        <h2 className="mt-6 text-2xl md:text-4xl font-extrabold text-gray-800 z-30">
          Introducing the Digital Accountability Platform (DAP)
        </h2>
        {/* Solution Description */}
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          To confront the pervasive issue of corruption, we have developed the
          Digital Accountability Platform (DAP)—an innovative ecosystem designed
          to empower citizens and foster transparent governance. DAP serves as a
          conduit for individuals to actively participate in monitoring and
          reporting corrupt practices, thereby strengthening the pillars of
          democracy and justice.
        </p>
        {/* Feature Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {/* Safe Reports */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="inline-block p-3 bg-blue-100 rounded-full">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Safe Reports
            </h3>
            <p className="mt-2 text-gray-600">
              DAP ensures that all reports are handled with the utmost
              confidentiality, protecting the identity and safety of
              whistleblowers.
            </p>
          </div>
          {/* Educational Resources */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="inline-block p-3 bg-yellow-100 rounded-full">
              <BookOpenIcon className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Educational Resources
            </h3>
            <p className="mt-2 text-gray-600">
              Access a comprehensive library of materials aimed at educating
              citizens on recognizing and combating corruption effectively.
            </p>
          </div>
          {/* Data Analytics */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="inline-block p-3 bg-purple-100 rounded-full">
              <ChartBarIcon className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Data Analytics
            </h3>
            <p className="mt-2 text-gray-600">
              Utilize powerful analytics tools to identify trends and hotspots
              of corrupt activities, enabling targeted interventions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
