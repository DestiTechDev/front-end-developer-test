import React, { useState } from "react";
import image1 from "../../images/customer1.svg";
import image2 from "../../images/customer2.svg";
import image3 from "../../images/customer3.svg";
import image4 from "../../images/customer4.svg";
import image5 from "../../images/customer5.svg";

const images = [image1, image2, image3, image4, image5];

const Customers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="bg-[#F7F7F7] py-8 mt-16">
      <div className="flex mt-8 mb-14 justify-center max-w-screen-xl mx-auto ">
        <button onClick={handlePrev} className={`px-4 py-2`}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
            <svg
              className="w-[20px] h-[20px] text-black "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`mr-4 mb-4 transition-opacity duration-300 ${
                index === currentIndex ? "" : "opacity-30"
              }`}
            >
              <img
                key={index}
                src={image}
                width={180}
                height={111}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover p-4"
              />
            </div>
          ))}
        </div>

        <button onClick={handleNext} className={`px-4 py-2`}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
            <svg
              className="w-[20px] h-[20px] text-black "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Customers;
