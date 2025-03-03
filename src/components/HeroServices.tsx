import { GiArchiveResearch } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { SiReverbnation } from "react-icons/si";

export default function HeroServices() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8 md:px-8 md:py-10 w-full border-b border-slate-200">
      <div className="flex gap-4 items-center justify-start">
        <div className="flex items-center justify-center size-16 bg-blue-100 rounded-2xl">
          <GiArchiveResearch className="text-5xl text-blue-500" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-slate-700">
            Research and Analysis
          </h2>
          <p className="text-slate-600 text-sm">Identify governance issues.</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-start">
        <div className="flex items-center justify-center size-16 bg-amber-100 rounded-2xl">
          <MdModelTraining className="text-4xl text-amber-500" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-slate-700">
            Training and Capacity Building
          </h2>
          <p className="text-slate-600 text-sm">Enhance officials' skills.</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-start">
        <div className="flex items-center justify-center size-16 bg-emerald-100 rounded-2xl">
          <RiGovernmentFill className="text-4xl text-emerald-500" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-slate-700">
            Policy Advocacy
          </h2>
          <p className="text-slate-600 text-sm">Promote policy reforms.</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-start">
        <div className="flex items-center justify-center size-16 bg-lime-100 rounded-2xl">
          <SiReverbnation className="text-4xl text-lime-500" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-slate-700">
            Regional Integration
          </h2>
          <p className="text-slate-600 text-sm">Facilitate collaboration.</p>
        </div>
      </div>
    </section>
  );
}
