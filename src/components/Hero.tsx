import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex items-center justify-between gap-7 md:px-8 md:py-10 w-full bg-linear-to-r from-blue-100 to-blue-50">
      <div className="w-full flex flex-col items-center lg:items-start gap-5 mb-10 py-10 px-4 md:p-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="italic font-bold text-3xl md:text-4xl text-slate-600 pb-3 leading-10 md:leading-14 text-center lg:text-left"
        >
          Empowering <span className="text-blue-400">Governance,</span> Through{" "}
          <span className="text-blue-400">Regional Integration</span>
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="leading-7 text-slate-500 pb-3 mt-6 text-center lg:text-left"
        >
          <span className="font-bold">MindForge</span>, is a dedicated
          organization committed to combating corruption within the East African
          Community. By promoting transparency and accountability.
        </p>
        <div className="flex gap-4">
          <Link to="/contact">
            <button className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer">
              Contact Us
            </button>
          </Link>
          <Link to="/about">
            <button className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 hover:transition-all cursor-pointer">
              View More
            </button>
          </Link>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        src="/leadership-rafiki.png"
        alt="Leadership"
        className="hidden lg:block size-1/2 object-cover object-center"
      />
    </section>
  );
}
