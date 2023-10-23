import picture10 from '../assets/picture-10.png'
import picture11 from '../assets/picture-11.png'
import picture12 from '../assets/picture-12.png'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

function Blog() {
  return (
    <div className="mx-auto relative">
      <div className="flex items-center justify-center space-x-10 mt-4">

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture10}></img>
          <div className="p-4 flex flex-col gap-2">
            <p className="text-sm text-secondary">01 de Julho, 2022  |  5 Comentários</p>
            <p className="font-semibold text-xl">The Best Trip</p>
            <p className="text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
        </div>

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture11}></img>
          <div className="p-4 flex flex-col gap-2">
            <p className="text-sm text-secondary">01 de Julho, 2022  |  5 Comentários</p>
            <p className="font-semibold text-xl">The Best Trip</p>
            <p className="text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
        </div>

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture12}></img>
          <div className="p-4 flex flex-col gap-2">
            <p className="text-sm text-secondary">01 de Julho, 2022  |  5 Comentários</p>
            <p className="font-semibold text-xl">The Best Trip</p>
            <p className="text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
        </div>


      </div>
      <div className="w-full absolute flex items-center justify-center top-1/2 gap-[1280px]">
          <MdArrowBackIosNew size={40} color="black" />
          <MdArrowForwardIos size={40} color="black" />
      </div>
    </div>
  )
}

export default Blog