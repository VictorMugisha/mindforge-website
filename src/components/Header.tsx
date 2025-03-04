import { useState, useCallback, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Gallery", href: "gallery" },
  { name: "Blog", href: "blog" },
];

export default function Header() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const handleCloseNav = useCallback(() => setDisplayMobileNav(false), []);
  const handleOpenNav = useCallback(() => setDisplayMobileNav(true), []);

  useEffect(() => {
    if (displayMobileNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [displayMobileNav]);

  return (
    <header className="flex items-center justify-between py-2 px-4 md:px-8 w-full md:rounded-lg shadow-sm md:shadow-lg bg-white sticky top-0 z-10">
      <Link to="/">
        <h2 className="font-bold text-xl md:text-2xl text-blue-500">
          MINDFORGE
        </h2>
      </Link>

      {/* Mobile Navigation Button */}
      <button className="md:hidden" onClick={handleOpenNav}>
        <HiMenuAlt3 className="text-3xl" />
      </button>

      {/* Background Overlay */}
      {displayMobileNav && (
        <div
          className="fixed inset-0 custom-transparent-black z-40 duration-300"
          onClick={handleCloseNav}
        ></div>
      )}

      {/* Mobile Navigation */}
      <nav
        aria-hidden={!displayMobileNav}
        className={`${
          displayMobileNav ? "flex" : "hidden"
        } md:hidden flex-col items-end p-6 space-y-4 bg-white w-[70%] h-screen fixed top-0 right-0 z-50`}
      >
        <button className="font-bold mb-10" onClick={handleCloseNav}>
          <ImCross className="text-2xl font-bold cursor-pointer" />
        </button>
        <ul className="flex flex-col space-y-8 w-full items-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-lg font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="text-lg font-semibold text-white bg-blue-500 py-3 px-4 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer">
          Contact Us
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-start gap-6">
        <ul className="flex items-center justify-start gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-sm font-semibold hover:text-blue-500 hover:transition-all text-slate-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="text-sm font-semibold text-white bg-blue-500 py-3 px-4 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer">
          Contact Us
        </button>
      </nav>
    </header>
  );
}
