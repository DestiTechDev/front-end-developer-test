import React, { useState } from "react";
import imageExample from "../../images/carousel_example1.png";
import imageExample2 from "../../images/Logo-excursion.png";

const images = [
  {
    id: "1",
    url: imageExample,
  },
  {
    id: "2",
    url: imageExample2,
  },
];

const Carousel = () => {
    const [imageIndex, setImageIndex] = useState(0)


    // function to handle carousel index
    const handleIndexImage = (action: string) => {

        if(action === 'prev'){
            if(imageIndex === 0){
                setImageIndex(images.length - 1)
            } else{
                setImageIndex(imageIndex - 1)
            }
        }

        if(action === 'next'){
            if(imageIndex === images.length - 1){
                setImageIndex(0)
            } else{
                setImageIndex(imageIndex + 1)
            }
        }


    }

  return (
    <div
      id="animation-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden md:h-96">
   
          <div
            key={images[imageIndex].id}
            className="duration-200 ease-linear"
            data-carousel-item
          >
            <img
              src={images[imageIndex].url}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => handleIndexImage('prev')}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
          <svg
            className="w-[20px] h-[20px] text-white "
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
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleIndexImage('next')}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
          <svg
            className="w-[20px] h-[20px] text-white "
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
  );
};

export default Carousel;
