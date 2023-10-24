import { IoMdMap } from "react-icons/io"
import { MdKeyboardArrowDown, MdAttachMoney } from "react-icons/md"
import { PiPersonSimpleRunFill } from "react-icons/pi"
import { FaRegCalendarAlt } from "react-icons/fa"
import React, { useState } from 'react';
import { activities, consultations, destinations, durations } from "../constants";


function Form() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedConsultation, setSelectedConsultation] = useState("");

  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
  const [activityDropdownOpen, setActivityDropdownOpen] = useState(false);
  const [durationDropdownOpen, setDurationDropdownOpen] = useState(false);
  const [consultationDropdownOpen, setConsultationDropdownOpen] = useState(false);

  function toggleDestinationDropdown() {
    setDestinationDropdownOpen(!destinationDropdownOpen);
  };

  function handleDestinationClick(name: string) {
    setSelectedDestination(name);
    setDestinationDropdownOpen(false);
  };

  function toggleActivityDropdown() {
    setActivityDropdownOpen(!activityDropdownOpen);
  };

  function handleActivityClick(name: string) {
    setSelectedActivity(name);
    setActivityDropdownOpen(false);
  };

  function toggleDurationDropdown() {
    setDurationDropdownOpen(!durationDropdownOpen);
  };

  function handleDurationClick(name: string) {
    setSelectedDuration(name);
    setDurationDropdownOpen(false);
  };

  function toggleConsultationDropdown() {
    setConsultationDropdownOpen(!consultationDropdownOpen);
  };

  function handleConsultationClick(name: string) {
    setSelectedConsultation(name);
    setConsultationDropdownOpen(false);
  };


  return (
    <div className="mx-20 p-8 bg-white flex items-center justify-between rounded-lg shadow-xl">
    <div className="w-1/6">
      <div className="relative">
        <div className="h-16 p-4 bg-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <IoMdMap size={24} color="#4688F2" />
            <input
              className="w-full ml-2 text-gray-600 bg-gray-100"
              placeholder="Destino"
              value={selectedDestination}
              readOnly
            />
          </div>
          <MdKeyboardArrowDown size={40} color="#4688F2" onClick={toggleDestinationDropdown} />
        </div>
        {destinationDropdownOpen && (
          <div className="absolute bg-white border border-gray-200 mt-2 rounded-lg shadow-md" style={{ top: "100%" }}>
            <ul className="py-2">
              {destinations.map((d) => (
                <li
                  key={d.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDestinationClick(d.name)}
                >
                  {d.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    <div className="w-1/6">
      <div className="relative">
        <div className="h-16 p-4 bg-gray-100 flex items-center justify-between">
          <div className="flex items-center relative">
            <PiPersonSimpleRunFill size={24} color="#4688F2" />
            <input
              className="w-full ml-2 text-gray-600 bg-gray-100"
              placeholder="Atividade"
              value={selectedActivity}
              readOnly
            />
          </div>
          <MdKeyboardArrowDown size={40} color="#4688F2" onClick={toggleActivityDropdown} />
        </div>
        {activityDropdownOpen && (
          <div className="absolute bg-white border border-gray-200 mt-2 rounded-lg shadow-md" style={{ top: "100%" }}>
            <ul className="py-2">
              {activities.map((a) => (
                <li
                  key={a.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleActivityClick(a.name)}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>


    <div className="w-1/6">
  <div className="relative">
    <div className="h-16 p-4 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center">
        <FaRegCalendarAlt size={24} color="#4688F2" />
        <input
          className="w-full ml-2 text-gray-600 bg-gray-100"
          placeholder="Duração"
          value={selectedDuration}
          readOnly
        />
      </div>
      <MdKeyboardArrowDown size={40} color="#4688F2" onClick={toggleDurationDropdown} />
    </div>
    {durationDropdownOpen && (
      <div className="absolute bg-white border border-gray-200 mt-2 rounded-lg shadow-md" style={{ top: "100%" }}>
        <ul className="py-2">
          {durations.map((d) => (
            <li
              key={d.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleDurationClick(d.name)}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>

<div className="w-1/6">
  <div className="relative">
    <div className="h-16 p-4 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center justify-between">
        <MdAttachMoney size={24} color="#4688F2" />
        <input
          className="w-full ml-2 text-gray-600 bg-gray-100"
          placeholder="Consulta"
          value={selectedConsultation}
          readOnly
        />
      </div>
      <MdKeyboardArrowDown size={40} color="#4688F2" onClick={toggleConsultationDropdown} />
    </div>
    {consultationDropdownOpen && (
      <div className="absolute bg-white border border-gray-200 mt-2 rounded-lg shadow-md" style={{ top: "100%" }}>
        <ul className="py-2">
          {consultations.map((c) => (
            <li
              key={c.id}
              className="px-4 py-2 hover-bg-gray-100 cursor-pointer"
              onClick={() => handleConsultationClick(c.name)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>
      <button className="w-1/6 h-16 bg-primary text-white font-semibold rounded-lg hover:bg-secondary">PESQUISAR</button>
    </div>
  )
}

export default Form