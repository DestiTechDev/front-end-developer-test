import { IoMdMap } from "react-icons/io"
import { MdKeyboardArrowDown, MdAttachMoney } from "react-icons/md"
import { PiPersonSimpleRunFill } from "react-icons/pi"
import { FaRegCalendarAlt } from "react-icons/fa"


function Form() {
  return (
    <div className="w-2/3 p-8 bg-white flex items-center justify-between rounded-lg shadow-xl">
      <div className="w-1/6 h-16 p-4 bg-gray-100 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
          <IoMdMap size={24} color="#4688F2" />
          <p className="ml-2 text-gray-600">Destino</p>
        </div>
        <MdKeyboardArrowDown size={24} color="#4688F2" />
      </div>
      <div className="w-1/6 h-16 p-4 bg-gray-100 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
          <PiPersonSimpleRunFill size={24} color="#4688F2" />
          <p className="ml-2 text-gray-600">Atividade</p>
        </div>
        <MdKeyboardArrowDown size={24} color="#4688F2" />
      </div>
      <div className="w-1/6 h-16 p-4 bg-gray-100 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
          <FaRegCalendarAlt size={24} color="#4688F2" />
          <p className="ml-2 text-gray-600">Duração</p>
        </div>
        <MdKeyboardArrowDown size={24} color="#4688F2" />
      </div>
      <div className="w-1/6 h-16 p-4 bg-gray-100 flex items-center justify-between rounded-lg">
        <div className="flex items-center justify-between">
          <MdAttachMoney size={24} color="#4688F2" />
          <p className="ml-2 text-gray-600">Consulta</p>
        </div>
        <MdKeyboardArrowDown size={24} color="#4688F2" />
      </div>
      <button className="w-1/6 h-16 bg-primary text-white font-semibold rounded-lg">PESQUISAR</button>

    </div>
  )
}

export default Form