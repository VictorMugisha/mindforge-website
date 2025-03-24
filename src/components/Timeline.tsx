export default function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <h2 className="font-bold text-2xl md:text-3xl text-slate-700 pb-10 text-center">
        MindForge Impact: Driving Change in Africa
      </h2>
      <div className="relative w-full max-w-[85rem] mx-auto py-12">
        <div className="hidden md:block border-l-4 border-dashed border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full bottom-4"></div>

        {/* First Block - Governance in Africa */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12 relative">
          <div className="w-full md:w-1/2 px-6 order-2 md:order-1">
            <span className="text-sm text-gray-500 font-light">
              Governance in Africa
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-black mt-2 md:py-5">
              Addressing Governance Challenges in East Africa
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Governance in Africa faces various challenges, including policy
              inconsistencies and weak institutional frameworks. MindForge works
              to enhance policy implementation by supporting governments in East
              Africa with data-driven insights, technology solutions, and
              strategic advisory services.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-6 order-1 md:order-2 flex justify-center">
            <img
              src="governance-in-africa.jpg"
              alt="Governance in Africa"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Second Block - Corruption in Africa */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left mb-12 relative">
          <div className="w-full md:w-1/2 px-6 order-2 md:order-1">
            <span className="text-sm text-gray-500 font-light">
              Corruption in Africa
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-black mt-2 md:py-5">
              Fighting Corruption for a Better Future
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Corruption remains one of Africa’s biggest obstacles to
              development. MindForge is actively involved in creating digital
              transparency solutions, promoting accountability, and advocating
              for stronger anti-corruption policies across the continent.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-6 order-1 md:order-2 flex justify-center">
            <img
              src="corruption.png"
              alt="Corruption in Africa"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Third Block - Role of Regional Integration */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left relative">
          <div className="w-full md:w-1/2 px-6 order-2 md:order-1">
            <span className="text-sm text-gray-500 font-light">
              Regional Integration
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-black mt-2 md:py-5">
              Harnessing Regional Integration for Growth
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Regional integration fosters economic collaboration and shared
              development efforts. MindForge is leveraging regional partnerships
              to tackle common challenges, enhance trade, and drive innovation,
              starting with East Africa.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-6 order-1 md:order-2 flex justify-center">
            <img
              src="regional-integration.png"
              alt="Regional Integration"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
