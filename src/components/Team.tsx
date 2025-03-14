import { teamData } from "../data/teamData";

export default function Team() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-white flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-2xl flex flex-col gap-4">
        <h2 className="font-bold text-3xl md:text-4xl text-slate-700">
          Meet Our Team
        </h2>
        <p>
          Our team is made up of passionate individuals who are committed to
          driving positive change and sustainable development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 sm:gap-x-4 sm:gap-y-14 mt-10">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`flex items-center justify-center relative  bg-radial-[at_50%_75%] ${member.firstColor} ${member.secondColor} rounded-2xl w-full pt-8 mx-auto shadow-md shadow-slate-300 cursor-pointer`}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <img src={member.image} alt="" />
            <div className="absolute bg-white text-center py-4 w-[80%] rounded-2xl bottom-[-30px] shadow-md shadow-slate-300 flex flex-col items-center gap-1">
              <h3 className="font-semibold text-sm text-slate-700">
                {member.name}
              </h3>
              <div className="w-20 h-1 bg-slate-300 rounded-4xl"></div>
              <p className="text-sm italic text-slate-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
