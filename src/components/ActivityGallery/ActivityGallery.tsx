import React from 'react'
import image1 from "../../images/Rectangle-act.png"
import image2 from "../../images/Rectangle_24_act.png";
import image3 from "../../images/Rectangle_25_act.png";
import image4 from "../../images/Rectangle_26_act.png";
import SectionTitle from '../SectionTitle/SectionTitle';

const activities = [
    {
      id: "1",
      thumb: image1,
    },
    {
      id: "2",
      thumb: image2,
    },
    {
      id: "3",
      thumb: image3,
    },
    {
      id: "4",
      thumb: image4,
    },
  ];
  

const ActivityGallery = () => {
  return (
    <>
      <SectionTitle title="Nossas atividades"/>
      <div className='max-w-screen-xl mx-auto py-8 px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center'>
          {
            activities.map(activity => (
              <div key={activity.id} className="relative overflow-hidden cursor-pointer">
                <img
                  src={activity.thumb}
                  width={640}
                  height={385}
                  className="object-cover transform transition-transform hover:scale-110"
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ActivityGallery
