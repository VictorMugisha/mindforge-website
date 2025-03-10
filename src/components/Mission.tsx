export default function Mission() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-xl italic mb-6">
            "Our mission is to tackle corruption in the East African Community
            to improve government's policies implementation."
          </p>
          <p className="mb-4 text-gray-700">
            At MindForge, we are committed to addressing the pervasive issue of
            corruption within the East African Community (EAC). Corruption
            undermines governance, hampers economic development, and erodes
            public trust. By focusing on combating corrupt practices, we aim to
            enhance the effectiveness of government policies and ensure that
            resources are utilized for the greater good.
          </p>
          <p className="text-gray-700">
            Our dedication stems from a profound desire to see East African
            nations thrive. We believe that by promoting transparency,
            accountability, and integrity, we can foster environments where
            equitable development and social justice prevail. Through
            collaborative efforts with governments, civil society, and
            international partners, we strive to create sustainable solutions
            that address the root causes of corruption.
          </p>
        </div>
        <div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/people_united_against_corruption.jpg"
            alt="People united against corruption"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
