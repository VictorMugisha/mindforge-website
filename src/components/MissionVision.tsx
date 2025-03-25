import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MissionVision() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-24 py-16 bg-white">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="flex flex-col items-center gap-6 bg-white rounded-2xl px-2 lg:px-8 py-8 lg:p-16 text-center shadow-xl"
      >
        <img src="/mission.png" alt="Mission Illustration" className="w-1/2" />
        <h2 className="text-2xl font-bold text-slate-700">Our Mission</h2>
        <p>
          Our mission is{" "}
          <span className="font-semibold">
            to tackle corruption in the East African Community to improve
            government's policies implementation.
          </span>
          Corruption undermines institutional integrity, hampers economic
          development, and erodes public trust.
        </p>
        <Link to="/about#mission">
          <button className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="relative flex flex-col items-center gap-6 bg-blue-500 text-white rounded-2xl px-2 lg:px-8 py-8 lg:p-16 text-center shadow-xl"
      >
        <img src="/vision.png" alt="Vision Illustration" className="w-1/2" />
        <IoNotificationsSharp className="text-6xl text-amber-500 absolute top-[-25px] right-5 rotate-45 hover:text-9xl hover:top-[-60px] hover:right-0 transition-all cursor-pointer" />
        <h2 className="text-2xl font-bold text-white">Our Vision Statement</h2>
        <p>
          Our vision is to establish an East African Community where integrity
          prevails, governance is transparent, and government policies are
          implemented effectively for the benefit of all citizens.
        </p>
        <Link to="/about#mission">
          <button className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 hover:transition-all cursor-pointer">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
