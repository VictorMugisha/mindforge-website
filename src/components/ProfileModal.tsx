import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

interface ProfileModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ProfileModal({ isOpen, closeModal }: ProfileModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 custom-transparent-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center">
                  <img
                    src="/profiles/victor-profile.png"
                    alt="Victor Mugisha"
                    className="size-56 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    Victor Mugisha
                  </h2>
                  <p className="text-gray-600">Software Developer</p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href="https://victormugisha.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Website
                    </a>
                    <a
                      href="https://github.com/VictorMugisha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors flex items-center"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/victor-mugisha-shyaka-47b10b233/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-500 transition-colors flex items-center"
                    >
                      <FaLinkedin className="mr-1" /> LinkedIn
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
