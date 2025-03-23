import Challenges from "../components/Challenges";

export default function Projects() {
  return (
    <section className="flex flex-col gap-7 w-full">
      <div className="w-full flex flex-col md:py-14 md:px-8 items-center gap-5 text-center mb-10 px-4 md:p-0 bg-blue-100">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="italic font-bold text-3xl md:text-5xl text-slate-600 pt-6 lg:pt-0 leading-10 md:leading-14"
        >
          E-Lab Challenges
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="leading-7 text-slate-500 pb-3 mt-6 lg:w-[80%]"
        >
          MindForge is a dynamic Think Tank with very motivated individuals who all contributed to the success of the E-Lab Challenges. The E-Lab Challenges are a series of challenges that had to tackle during our journey at ALU and mostly in E-Lab Courses.
        </p>
      </div>
      <Challenges />
    </section>
  );
}
