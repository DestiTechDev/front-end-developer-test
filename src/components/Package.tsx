import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { packages } from '../constants'
import PackageCard from './PackageCard'
import { useState } from 'react';
import '../index.css'

function Package() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function handleNextCard() {
    setCurrentCardIndex((currentCardIndex + 1) % packages.length);
  };

  function handlePrevCard() {
    setCurrentCardIndex(
      currentCardIndex > 0 ? currentCardIndex - 1 : packages.length - 1
    );
  };

  const visibleCards = 3;
  const cardSlice = packages.slice(currentCardIndex, currentCardIndex + visibleCards);
  if (cardSlice.length < visibleCards) {
    const remainingCards = visibleCards - cardSlice.length;
    const firstCards = packages.slice(0, remainingCards);
    cardSlice.push(...firstCards);
  }

  return (
    <div className="mx-auto relative">
      <div className="flex items-center justify-center space-x-10 mt-4">
          {cardSlice.map((p) => (
            <PackageCard
              key={p.id}
              image={p.image}
              location={p.location}
              description={p.description}
              amenities={p.amenities}
              country={p.country}
              price={p.price}
            />
          ))}
        </div>
      <div className="w-full absolute flex items-center justify-center top-1/2 gap-[1280px]">
        <MdArrowBackIosNew
          className="cursor-pointer"
          size={40}
          color="black"
          onClick={handlePrevCard}
        />
        <MdArrowForwardIos
          className="cursor-pointer"
          size={40}
          color="black"
          onClick={handleNextCard}
        />
      </div>
    </div>
  )
}

export default Package