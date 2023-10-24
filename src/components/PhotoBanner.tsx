import picture1 from "../assets/picture-1.png"
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

function PhotoBanner() {
  return (
      <div className="w-screen relative overflow-hidden">
        <img className="w-screen" src={picture1} alt="Foto de Paisagem"/>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <MdArrowBackIosNew className="cursor-pointer" size={40} color="white" />
            <MdArrowForwardIos className="cursor-pointer" size={40} color="white" />
        </div>
      </div>
  )
}

export default PhotoBanner