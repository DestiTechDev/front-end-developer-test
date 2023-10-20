import React from 'react'
import picture2 from '../assets/picture-2.png'
import { GrLocation } from "react-icons/gr"
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

function Package() {
  return (
    <div className="w-2/3 mx-auto relative">
      <div className="flex items-center justify-center space-x-10 mt-4">

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture2}></img>
          <div className="m-4 text-left p-2 border-b-2 border-b-slate-200">
            <p className="font-semibold text-xl">Salvador - BA</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.</p>
            <ul className="list-disc text-xs my-6 ml-6">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>

          <div className="flex justify-between px-4 pb-4">
            <div className="w-12 flex justify-between items-center">
              <GrLocation size={12} />
              <p className="text-xs">Brasil</p>
            </div>
            <p className="text-2xl text-secondary font-semibold">R$ 800,00</p>
          </div>
        </div>

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture2}></img>
          <div className="m-4 text-left p-2 border-b-2 border-b-slate-200">
            <p className="font-semibold text-xl">Salvador - BA</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.</p>
            <ul className="list-disc text-xs my-6 ml-6">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>

          <div className="flex justify-between px-4 pb-4">
            <div className="w-12 flex justify-between items-center">
              <GrLocation size={12} />
              <p className="text-xs">Brasil</p>
            </div>
            <p className="text-2xl text-secondary font-semibold">R$ 800,00</p>
          </div>
        </div>

        <div className="w-96 flex-col justify-center flex-wrap shadow-xl">
          <img src={picture2}></img>
          <div className="m-4 text-left p-2 border-b-2 border-b-slate-200">
            <p className="font-semibold text-xl">Salvador - BA</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.</p>
            <ul className="list-disc text-xs my-6 ml-6">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>

          <div className="flex justify-between px-4 pb-4">
            <div className="w-12 flex justify-between items-center">
              <GrLocation size={12} />
              <p className="text-xs">Brasil</p>
            </div>
            <p className="text-2xl text-secondary font-semibold">R$ 800,00</p>
          </div>
        </div>

        
      </div>
      <div className="w-full absolute flex items-center justify-between top-1/2">
          <button style={{ transform: "translateX(-44px)"}}>
            <MdArrowBackIosNew size={40} color="black" />
          </button>
          <button style={{ transform: "translateX(44px)"}}>
            <MdArrowForwardIos size={40} color="black" />
          </button>
        </div>
    </div>
  )
}

export default Package