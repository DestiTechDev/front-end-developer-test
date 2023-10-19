import React from "react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) {
    return null; 
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center" 
         style={{zIndex: 500000}}
         onClick={onClose}>
      <div className="bg-black bg-opacity-50 w-full h-full fixed"></div>
      <div className="bg-white p-4 rounded shadow-md w-2/5 h-2/5  text-left px-8 mt-8" style={{zIndex: 500000}}>
        <h2 className="font-bold mb-4 text-left text-3xl mt-4">{title}</h2>
        <p className="text-gray-700 text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
