export default function Header() {
  return (
    <header className="flex md:items-center md:justify-between md:py-4 md:px-8 w-full md:rounded-lg md:shadow-lg bg-white sticky top-0">
      <a href="#">
        <div>
          <h2 className="font-bold text-xl text-blue-500">MINDFORGE</h2>
        </div>
      </a>
      <nav className="flex md:items-center md:justify-start md:space-x-2 md:gap-4">
        <ul className="flex md:items-center md:justify-start md:space-x-2 md:gap-2">
          <li>
            <a
              href="#"
              className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
            >
              Blog
            </a>
          </li>
        </ul>

        <button className="text-sm font-semibold text-white bg-blue-500 py-3 px-4 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer">
          Contact Us
        </button>
      </nav>
    </header>
  );
}
