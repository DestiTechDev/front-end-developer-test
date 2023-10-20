import picture1 from "../assets/picture-1.png"
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Form from "./Form"

function PhotoBanner() {
  return (
      <div className="w-screen relative overflow-hidden">
        <img className="w-screen" src={picture1} />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button>
            <MdArrowBackIosNew size={40} color="white" />
          </button>
          <button>
            <MdArrowForwardIos size={40} color="white" />
          </button>
        </div>
      </div>
  )
}

export default PhotoBanner