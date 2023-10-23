import airtravel from '../assets/airtravel.svg'
import cloudtravel from '../assets/cloudtravel.svg'
import travelagency from '../assets/travelangecy.svg'
import traveling from '../assets/traveling.svg'
import travelwave from '../assets/travelwave.svg'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

function Partners() {
  return (
    <div className="mt-40 p-20 bg-gray-100 flex items-center justify-center gap-20 relative">
      <div className="w-40 opacity-30 hover:opacity-100">
        <img src={airtravel} />
      </div>
      <div className="w-40 opacity-30 hover:opacity-100">
        <img src={travelagency} />
      </div>
      <div className="w-40 opacity-30 hover:opacity-100">
        <img src={traveling} />
      </div>
      <div className="w-40 opacity-30 hover:opacity-100">
        <img src={travelwave} />
      </div>
      <div className="w-40 opacity-30 hover:opacity-100">
        <img src={cloudtravel} />
      </div>
      <div className="w-full absolute flex items-center justify-center top-1/2 gap-[1200px]">
          <MdArrowBackIosNew size={40} color="black" />
          <MdArrowForwardIos size={40} color="black" />
      </div>
    </div>
  )
}

export default Partners