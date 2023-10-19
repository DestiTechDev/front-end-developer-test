import React, { useState } from 'react';
import image1 from "../../images/blog1.png";
import image2 from "../../images/blog2.png";
import image3 from "../../images/blog3.png";

const news = [
    {
      id: "1",
      thumb: image1,
      title: "The Best Trip",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal",
      createdAt: "01 de Julho, 2022",
      commentAccount: '5'
    },
    {
      id: "2",
      thumb: image2,
      title: "The Best Trip",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal",
      createdAt: "01 de Julho, 2022",
      commentAccount: '5'
    },
    {
      id: "3",
      thumb: image3,
      title: "The Best Trip",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal",
      createdAt: "01 de Julho, 2022",
      commentAccount: '5'
    }
  ];


const BlogCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 400;
  const totalSlides = news.length;
  const totalWidth = totalSlides * cardWidth;

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };



  return (
    <div className="w-full max-w-screen-xl mx-auto py-8">
    <div className="flex items-center">

      <button onClick={prev} className={`px-4 py-2`}>
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

      <div className="overflow-hidden">
        <div className="flex mb-8" style={{ width: `${totalWidth}px`, transform: `translateX(-${currentSlide * cardWidth}px)` }}>
          {news.map((travel) => (
            <div key={travel.id} style={{ minWidth: `${cardWidth}px` }} className="ml-4 mr-4 relative shadow-md">
              <img src={travel.thumb} alt="" className="w-full" />
              <div className="text-left">
                <div className="p-4">
                  <p className="mb-2 text-[#4688F2] text-[14px]">{`${travel.createdAt} | ${travel.commentAccount} comentários         `}</p>
                  <p className="font-bold mb-2 text-lg capitalize text-[20px]">{travel.title}</p>
                  <p className="text-[14px]">{travel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={next} className={`px-4 py-2`}>
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

export default BlogCarousel;
