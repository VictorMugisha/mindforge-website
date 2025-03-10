export default function Vision() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <img
            src="/prosperous_east_africa.jpg"
            alt="Prosperous East Africa"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div
          className="md:w-1/2 mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-xl italic mb-6">
            "To cultivate a transparent and thriving East African Community
            where integrity drives development and prosperity."
          </p>
          <p className="mb-4 text-gray-700">
            MindForge envisions an East African Community where transparency and
            accountability are the norms, leading to sustainable development and
            widespread prosperity. We aspire to create societies where
            governments operate with integrity, citizens trust public
            institutions, and economic opportunities are accessible to all.
          </p>
          <p className="text-gray-700">
            By eradicating corruption, we aim to unlock the region's full
            potential, attracting investment, fostering innovation, and
            improving the quality of life for all citizens. Our vision is a
            future where the EAC stands as a beacon of good governance and
            equitable growth on the African continent.
          </p>
        </div>
      </div>
    </section>
  );
}
