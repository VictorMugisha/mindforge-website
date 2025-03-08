import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 flex flex-col items-center justify-center bg-white drop-shadow-2xl relative bottom-0 mt-8 gap-2">
      <p className="text-slate-600">
        <span className="font-semibold">MindForge:</span> &copy; All Rights
        Reserved. 2025
      </p>
      <div className="flex items-center gap-4">
        <Link to="https://www.youtube.com/@MindForge-p1i" target="_blank">
          <IoLogoYoutube className="text-2xl text-red-500" />
        </Link>
        <Link to="https://www.instagram.com/mindforge_alu/" target="_blank">
          <FaInstagram className="text-2xl" />
        </Link>
      </div>
    </footer>
  );
}
