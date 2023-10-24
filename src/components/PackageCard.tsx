import React from "react";
import { GrLocation } from "react-icons/gr"

type PackageCardProps = {
  image: string;
  location: string;
  description: string;
  amenities: string[];
  country: string;
  price: string;
};

function PackageCard({ image, location, description, amenities, country, price }: PackageCardProps) {
  return (
    <div className="w-96">
      <div className="h-[600px] flex flex-col justify-between flex-wrap shadow-xl">
        <img src={image} alt={location}></img>
        <div className="m-4 text-left p-2 border-b-2 border-b-slate-200">
          <p className="font-semibold text-xl -mt-4 mb-2">{location}</p>
          <p className="text-sm">{description}</p>
          <ul className="list-disc text-xs my-6 ml-6">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between px-4 pb-4">
          <div className="w-12 flex justify-between items-center">
            <GrLocation size={12} />
            <p className="text-xs">{country}</p>
          </div>
          <p className="text-2xl text-secondary font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard
