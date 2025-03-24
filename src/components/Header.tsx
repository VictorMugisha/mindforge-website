import { useState, useCallback, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "E-Lab Challenges", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Prototype", href: "/prototype" },
];

export default function Header() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCloseNav = useCallback(() => setDisplayMobileNav(false), []);
  const handleOpenNav = useCallback(() => setDisplayMobileNav(true), []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    handleCloseNav();
  };

  useEffect(() => {
    if (displayMobileNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [displayMobileNav]);

  return (
    <header className="flex items-center justify-between py-2 px-4 md:px-8 w-full md:rounded-lg  bg-white sticky top-0 z-50">
      <button
        onClick={handleLogoClick}
        className="focus:outline-none cursor-pointer"
      >
        <h2 className="font-bold text-xl md:text-2xl text-blue-500">
          MINDFORGE
        </h2>
      </button>

      {/* Mobile Navigation Button */}
      <button className="md:hidden cursor-pointer" onClick={handleOpenNav}>
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
        <ul className="flex flex-col space-y-4 w-full items-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-semibold text-blue-500 transition-all"
                    : "text-sm font-semibold text-slate-700 hover:text-blue-500 transition-all"
                }
                onClick={handleCloseNav}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to="/contact"
          className="text-sm font-semibold text-white bg-blue-500 py-3 px-4 rounded-lg hover:bg-blue-400 transition-all cursor-pointer"
          onClick={handleCloseNav}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-start gap-6">
        <ul className="flex items-center justify-start gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-semibold text-blue-500 transition-all"
                    : "text-sm font-semibold text-slate-700 hover:text-blue-500 transition-all"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to="/contact"
          className="text-sm font-semibold text-white bg-blue-500 py-3 px-4 rounded-lg hover:bg-blue-400 transition-all cursor-pointer"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
