import { FaInstagram, FaRegCopy } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ProfileModal from "./ProfileModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  const ussdCode = "*182*1*1*0799303355#";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ussdCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.log("Failed to copy: ", error);
      toast.error("Failed to copy!", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <footer className="w-full py-8 px-4 md:px-8 bg-white shadow-lg mt-8">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold text-blue-500">MindForge</h1>
          <p className="text-slate-700 mt-2 text-sm">
            MindForge is a dynamic think tank comprising highly motivated
            individuals dedicated to addressing challenges in the East African
            Community through innovative solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Explore</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/"
                className="text-slate-600 hover:text-blue-500 transition- cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-slate-600 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-slate-600 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-slate-600 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support and Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Support Us</h2>
          <p className="text-slate-700 mt-2 text-sm">
            Would you like to support the development of our projects? Feel free
            to MoMo us on <span className="font-medium">+250 799 303 355</span>.
          </p>
          <p className="text-slate-700 mt-2 flex items-center">
            <FaPhone className="text-blue-500 mr-2" />
            <span className="text-slate-700 mr-2">{ussdCode}</span>
            <button
              onClick={copyToClipboard}
              className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
              aria-label="Copy USSD code to clipboard"
            >
              {copySuccess ? (
                <LuCopyCheck className="text-xl text-green-500" />
              ) : (
                <FaRegCopy className="text-xl" />
              )}
            </button>
          </p>
          {copySuccess && (
            <p className="text-green-500 mt-1 text-sm">USSD code copied!</p>
          )}
          <div className="flex items-center gap-4 mt-4">
            <Link
              to="https://www.youtube.com/@MindForge-p1i"
              target="_blank"
              aria-label="YouTube"
            >
              <IoLogoYoutube className="text-2xl text-red-500 hover:text-red-400 transition-colors" />
            </Link>
            <Link
              to="https://www.instagram.com/mindforge_alu/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-slate-600 hover:text-blue-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-4">
        <p className="text-center text-slate-600">
          <span className="font-semibold text-blue-500">MindForge:</span> &copy;
          All Rights Reserved, 2025. Proudly developed by{" "}
          <button
            onClick={openModal}
            className="text-blue-500 underline font-semibold cursor-pointer"
          >
            Victor Mugisha
          </button>
        </p>
        <ProfileModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </footer>
  );
}
