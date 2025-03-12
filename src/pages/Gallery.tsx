import { useState } from "react";
import { Image, images } from "../data/galleryData.ts";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-4 sm:py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover cursor-pointer rounded-md shadow-sm hover:opacity-75 transition-opacity duration-300"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center custom-transparent-black backdrop-blur-sm z-50"
          onClick={closeModal}
        >
          {/* Modal Header */}
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="text-white text-lg sm:text-xl">
              {selectedImage.alt}
            </h2>
            <button
              className="text-white text-3xl sm:text-5xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          {/* Modal Content */}
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full md:max-w-3xl max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
