import React, { useState } from "react";
import image1 from "../../images/Rectangle22.png";
import image2 from "../../images/Rectangle24.png";
import image3 from "../../images/Rectangle24_(1).png";
import locationIcon from "../../images/location.png";

const travels = [
  {
    id: "1",
    thumb: image1,
    title: "Salvador - BA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.",
    tags: [
      "Cras urna dui",
      "Scelerisque aliquam felis in",
      "Aliquet efficitur neque",
      "Proin eget rutrum mi",
      "Donec tincidunt nunc nec lorem efficitur iaculi",
    ],
    country: "Brasil",
    price: "800,00",
  },
  {
    id: "2",
    thumb: image2,
    title: "Angra dos Reis - RJ",
    description:
      "Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent auctor leo porta, tempus lacus sed, euismod elit. Ut tristique mollis massa et mattis.",
    tags: [
      "Cras urna dui",
      "Scelerisque aliquam felis in",
      "Aliquet efficitur neque",
      "Proin eget rutrum mi",
      "Donec tincidunt nunc nec lorem efficitur iaculi",
    ],
    country: "Brasil",
    price: "640,00",
  },
  {
    id: "3",
    thumb: image3,
    title: "São Paulo - SP",
    description:
      "Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim, sed interdum nulla est vitae risus.",
    tags: [
      "Cras urna dui",
      "Scelerisque aliquam felis in",
      "Aliquet efficitur neque",
      "Proin eget rutrum mi",
      "Donec tincidunt nunc nec lorem efficitur iaculi",
    ],
    country: "Brasil",
    price: "240,00",
  },
  {
    id: "4",
    thumb: image3,
    title: "São Paulo - SP",
    description:
      "Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim, sed interdum nulla est vitae risus.",
    tags: [
      "Cras urna dui",
      "Scelerisque aliquam felis in",
      "Aliquet efficitur neque",
      "Proin eget rutrum mi",
      "Donec tincidunt nunc nec lorem efficitur iaculi",
    ],
    country: "Brasil",
    price: "240,00",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 400;
  const totalSlides = travels.length;
  const totalWidth = totalSlides * cardWidth;
  const itemsPerPage = Math.floor(window.innerWidth / cardWidth);

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + itemsPerPage) % totalSlides);
  };

  const prev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - itemsPerPage + totalSlides) % totalSlides,
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex items-center">
        <button onClick={prev} className={``}>
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
          <div
            className="flex mb-8 "
            style={{
              width: `${totalWidth}px`,
              transform: `translateX(-${currentSlide * cardWidth}px)`,
              transition: "transform 0.5s ease-in-out"
            }}
          >
            {travels.map((travel) => (
              <div
                key={travel.id}
                style={{ minWidth: `${cardWidth}px` }}
                className="ml-4 mr-4 relative shadow-md"
              >
                <img src={travel.thumb} alt="" className="w-full" />
                <div className="text-left">
                  <div className="p-4 pb-8">
                    <p className="font-bold mb-2 text-[20px]">{travel.title}</p>
                    <p className="mb-4 text-[14px]">{travel.description}</p>

                    <ul className="list-disc ml-16 mb-8 text-[12px]">
                      {travel.tags.map((tg, index) => (
                        <li key={index}>{tg}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 w-full">
                    <div className="p-4">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <img
                            src={locationIcon}
                            alt="location icon"
                            width={12}
                            height={15}
                          />
                          <p className="ml-2 text-[12px]font-bold">
                            {travel.country}
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-[32px] text-[#4688F2]">
                          R$ {travel.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className={`ml-4`}>
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

export default Carousel;
