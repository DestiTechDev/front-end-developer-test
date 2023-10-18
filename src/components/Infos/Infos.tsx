import React from 'react'
import image1 from "../../images/home.png"
import image2 from "../../images/brand.png";
import image3 from "../../images/gifts.png";


const infos = [
    {
      id: "1",
      thumb: image1,
      title: "MAIS DE 20 LOJAS",
      subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
      id: "2",
      thumb: image2,
      title: "SEGURANÇA",
      subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
      id: "3",
      thumb: image3,
      title: "OS MELHORES PREÇOS",
      subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },

  ];
  

const Infos = () =>{
  return (
    <div className='max-w-screen-xl mx-auto pt-16 pb-16'>
      <div className='flex flex-wrap justify-center'>
        {infos.map((info) => (
          <div
            key={info.id}
            className="flex flex-col items-center sm:flex-row lg:flex-row sm:items-center lg:items-center mx-4 my-4"
          >
            <img src={info.thumb} width={70} height={70} alt={`brand-${info.id}`} />
            <div className="w-[300px] mt-2 lg:ml-2 sm:ml-0 lg:text-left sm:text-center">
              <p className="font-bold uppercase">{info.title}</p>
              <p>{info.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
}

export default Infos