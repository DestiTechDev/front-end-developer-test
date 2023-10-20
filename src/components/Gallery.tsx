import React from 'react'

import picture5 from '../assets/picture-5.png'
import picture6 from '../assets/picture-6.png'
import picture7 from '../assets/picture-7.png'
import picture8 from '../assets/picture-8.png'


function Gallery() {
  return (
      <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
        <img src={picture5}></img>
        <img src={picture6}></img>
        <img src={picture7}></img>
        <img src={picture8}></img>
      </div>
  )
}

export default Gallery