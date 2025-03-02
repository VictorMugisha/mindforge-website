
export default function Hero() {
  return (
    <section className="flex gap-7 md:py-28 md:px-8 w-full">
      <div className="w-full flex flex-col items-center gap-5 text-center mb-10 py-10 px-4 md:p-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="font-bold text-3xl lg:text-5xl text-slate-600 pb-3 leading-10 lg:leading-14"
        >
          Empowering <span className="text-blue-400">Governance,</span>{" "}
          Fostering <span className="text-blue-400">Unity</span> Through{" "}
          <span className="text-blue-400">Regional Integration</span>
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="leading-7 text-slate-500 pb-3 mt-6 text-center"
        >
          At <span className="font-bold">MindForge</span>, we are dedicated to
          identifying and addressing governance challenges across East Africa to
          enhance regional integration. Our mission is to promote effective
          governance practices, strengthen institutional frameworks, and foster
          collaboration among nations. By tackling issues such as transparency,
          accountability, and policy development, we aim to build a more unified
          and prosperous East African community.
        </p>
        <div className="flex gap-4">
          <button
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer"
          >
            Contact Us
          </button>
          <button
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 hover:transition-all cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
