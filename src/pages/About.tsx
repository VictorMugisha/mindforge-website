export default function About() {
  return (
    <section className="flex gap-7 md:py-28 md:px-8 w-full">
      <div className="w-full flex flex-col items-center gap-5 text-center mb-10 py-10 px-4 md:p-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="italic font-bold text-3xl md:text-5xl text-slate-600 pb-3 leading-10 md:leading-14"
        >
          About MindForge
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="leading-7 text-slate-500 pb-3 mt-6"
        >
          MindForge is committed to empowering governance and fostering unity
          through regional integration. Our innovative solutions address complex
          challenges across East Africa, driving positive change and sustainable
          development.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex flex-col items-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-bold text-2xl text-blue-400 pb-2"
            >
              Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-slate-500"
            >
              To create sustainable governance models that promote transparency,
              collaboration, and prosperity for all communities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-bold text-2xl text-blue-400 pb-2"
            >
              Our Vision
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-slate-500"
            >
              To be the driving force behind regional integration and innovative
              governance in East Africa.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="/services"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 transition-all cursor-pointer"
          >
            Our Services
          </a>
          <a
            href="/contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
