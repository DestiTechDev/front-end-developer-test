import React from "react";
import { FaHiking, FaMap, FaCalendar, FaDollarSign } from "react-icons/fa";

const TravelFilter = () => {
  return (
    <div className="mx-4">
      <div className="mx-auto max-w-screen-xl m-8 p-8 bg-white rounded-lg shadow-md relative bottom-[100px] grid grid-cols-1 lg:grid-cols-5 text-[#707070]">
        <div className="relative mx-4 my-4">
          <FaMap
            color="#4688F2"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <select className="pl-8 p-3 border rounded-md bg-blue-50 w-full h-16">
            <option>Destino</option>
            <option>Destino 1</option>
            <option>Destino 2</option>
          </select>
        </div>

        <div className="relative mx-4 my-4">
          <FaHiking
            color="#4688F2"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <select className="pl-8 p-3 border rounded-md bg-blue-50 w-full h-16">
            <option>Atividade</option>
            <option>Atividade 1</option>
            <option>Atividade 2</option>
          </select>
        </div>

        <div className="relative mx-4 my-4">
          <FaCalendar
            color="#4688F2"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <select className="pl-8 p-3 border rounded-md bg-blue-50 w-full h-16">
            <option>Duração</option>
            <option>1 Semana</option>
            <option>2 Semanas</option>
          </select>
        </div>

        <div className="relative mx-4 my-4">
          <FaDollarSign
            color="#4688F2"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <select className="pl-8 p-3 border rounded-md bg-blue-50 w-full h-16">
            <option>Consulta</option>
            <option>Consulta 1</option>
            <option>Consulta 2</option>
          </select>
        </div>

        <button className="mx-4  my-4 bg-[#192945] text-white h-16 rounded-md">
          PESQUISAR
        </button>
      </div>
    </div>
  );
};

export default TravelFilter;
