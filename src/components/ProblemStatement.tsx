import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ProblemStatement() {
  return (
    <section className="flex justify-center py-16 bg-gray-100">
      <div className="relative w-[90%] md:w-3/4 bg-red-100 px-8 py-12 rounded-3xl lg:rounded-full shadow-lg">
        {/* Icon with Animation */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
          <ExclamationCircleIcon className="h-12 w-12 text-red-600" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 px-0 sm:px-2">
            The Challenge of Corruption in Governance
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed md:px-12">
            Corruption stands as a formidable barrier to equitable development,
            eroding public trust and diverting resources from essential
            services. It manifests in various forms—
            <span className="font-semibold">
              {" "}
              bribery, embezzlement, nepotism
            </span>
            —each contributing to systemic inefficiencies and social injustices.
            Citizens often encounter obstacles such as
            <span className="font-semibold">
              {" "}
              opaque bureaucratic processes, misallocation of public funds,
            </span>{" "}
            and a pervasive sense of disenfranchisement. Addressing these
            challenges requires a concerted effort to promote transparency,
            accountability, and civic engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
