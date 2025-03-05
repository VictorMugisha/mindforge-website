export default function Team() {
  const teamData = [
    {
      name: "Shania Keza",
      role: "Team Leader",
      image: "/profile-1.png",
      firstColor: "from-slate-200",
      secondColor: "to-slate-300",
    },
    {
      name: "Chanella Keza",
      role: "Marketing Manager",
      image: "/profile-1.png",
      firstColor: "from-blue-100",
      secondColor: "to-blue-200",
    },
    {
      name: "Victor Mugisha",
      role: "Software Developer",
      image: "/victor-profile.png",
      firstColor: "from-gray-200",
      secondColor: "to-gray-300",
    },
    {
      name: "Grace Muzirankoni",
      role: "Product Manager",
      image: "/profile-1.png",
      firstColor: "from-emerald-50",
      secondColor: "to-emerald-100",
    },
    {
      name: "Boaz Prince Iza",
      role: "Software Developer",
      image: "/profile-2.png",
      firstColor: "from-lime-50",
      secondColor: "to-lime-100",
    },
  ];
  return (
    <section className="py-10 px-4 md:px-8 bg-white flex flex-col items-center justify-center">
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
