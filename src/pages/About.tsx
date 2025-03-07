import { Link } from "react-router-dom";
import Team from "../components/Team";

export default function About() {
  return (
    <section className="flex flex-col gap-7 w-full">
      <div className="w-full flex flex-col md:py-14 md:px-8 items-center gap-5 text-center mb-10 px-4 md:p-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="italic font-bold text-3xl md:text-5xl text-slate-600 pt-6 lg:pt-0 leading-10 md:leading-14"
        >
          About MindForge
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="leading-7 text-slate-500 pb-3 mt-6 lg:w-[80%]"
        >
          MindForge is committed to empowering governance and fostering unity
          through regional integration. Our innovative solutions address complex
          challenges across East Africa, driving positive change and sustainable
          development.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/projects"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 transition-all cursor-pointer"
          >
            Our Projects
          </Link>
          <Link
            to="/contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Team />
    </section>
  );
}
