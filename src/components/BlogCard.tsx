import React from 'react'

type BlogCardProps = {
  image: string;
  date: string;
  comentary: number;
  title: string;
  description: string;
};

function BlogCard({ image, date, comentary, title, description }: BlogCardProps) {
  return (
    <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
      <img src={image} alt={title}></img>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-secondary">{date}  |  {comentary} Comentários</p>
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard