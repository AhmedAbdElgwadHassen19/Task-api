import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/react.svg";

export default function Slider() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <div>
          <button onClick={() => setIsOpen(true)} className="fixed top-4 left-4 z-50 md:hidden p-2 bg-blue-600 text-white rounded-lg shadow-lg">☰ Menu </button>
    
          <div
            className={`
              fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform
              transition-transform duration-300 z-50
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0
            `}
          >
            <div className="flex justify-end md:hidden">
              <button onClick={() => setIsOpen(false)} className="p-3 text-xl text-gray-600 hover:text-black">✕</button>
            </div>
              <img src={image} alt="React Logo" className="w-24 h-24 m-auto mt-10" />
            <div className="flex flex-col items-center justify-center gap-6 pt-10">
              
              <button onClick={() => navigate("/cardPage")} className="w-40 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Cards
              </button>
    
              <button onClick={() => { localStorage.removeItem("password"); localStorage.removeItem("userEmail"); navigate("/"); }} className="w-40 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
    
          
        </div>
  )
}
