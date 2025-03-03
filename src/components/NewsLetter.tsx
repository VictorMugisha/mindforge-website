export default function NewsLetter() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 justify-center gap-7 text-center ">
      <h2 className="font-bold text-2xl lg:text-3xl text-slate-700 px-4">
        Interested in us? Subscribe to our Newsletter
      </h2>
      <div className="flex items-center justify-center px-4" data-aos="fade-up" data-aos-duration="1000">
        <input
          type="email"
          name="user-email"
          placeholder="Your Email..."
          className="text-sm outline-none border-none py-3 md:py-5 px-4 md:px-6 sm:text-lg bg-white rounded-xl shadow-lg md:w-sm"
        />
        <button type="button" className="text-sm sm:text-lg py-3 md:py-5 px-4 md:px-6 text-white bg-cyan-950 rounded-xl cursor-pointer">Subscribe</button>
      </div>
    </section>
  );
}
