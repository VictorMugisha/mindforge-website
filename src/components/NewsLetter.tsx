export default function NewsLetter() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 justify-center gap-7 text-center ">
      <h2 className="font-bold text-2xl lg:text-3xl text-slate-700 px-4">
        Interested in us? Subscribe to our Newsletter
      </h2>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center w-full md:w-md">
        <input
          type="email"
          name="user-email"
          placeholder="Your Email..."
          className="text-sm outline-none border-none py-3 md:py-5 px-4 md:px-6 sm:text-lg bg-white rounded-xl md:rounded-br-none md:rounded-tr-none shadow-lg md:w-sm"
        />
        <button
          type="button"
          className="text-sm sm:text-lg py-3 md:py-5 px-4 md:px-6 text-white bg-cyan-950 rounded-xl md:rounded-bl-none md:rounded-tl-none shadow-lg cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}
