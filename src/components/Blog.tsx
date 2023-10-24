import picture10 from '../assets/picture-10.png'
import picture11 from '../assets/picture-11.png'
import picture12 from '../assets/picture-12.png'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { blogPosts } from '../constants'
import BlogCard from './BlogCard'
import { useState } from 'react'

function Blog() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function handleNextCard() {
    setCurrentCardIndex((currentCardIndex + 1) % blogPosts.length);
  };

  function handlePrevCard() {
    setCurrentCardIndex(
      currentCardIndex > 0 ? currentCardIndex - 1 : blogPosts.length - 1
    );
  };

  const visibleCards = 3;
  const cardSlice = blogPosts.slice(currentCardIndex, currentCardIndex + visibleCards);
  if (cardSlice.length < visibleCards) {
    const remainingCards = visibleCards - cardSlice.length;
    const firstCards = blogPosts.slice(0, remainingCards);
    cardSlice.push(...firstCards);
  }

  return (
    <div className="mx-auto relative">
      <div className="flex items-center justify-center space-x-10 mt-4">
        {cardSlice.map((b) => (
          <BlogCard
            key={b.id}
            image={b.image}
            date={b.date}
            comentary={b.comentary}
            title={b.title}
            description={b.description}
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

export default Blog