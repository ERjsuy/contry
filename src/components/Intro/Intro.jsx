import React from 'react'
import digo from '../../assets/img/digo.png'

const Intro = () => {
  return (
    <>
      <div>
      
      <div className="relative w-full h-screen flex items-center justify-center text-white">
      <img
        src={digo}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-opacity-40 z-0"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold">EXPLORE</h1>
        <h2 className="text-5xl md:text-7xl font-extrabold mt-2">INDONESIA</h2>
        <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-full shadow-lg transition">
          Start travelling
        </button>
      </div>
    </div>
        
        
      </div>
      
    </>
  )
}

export default Intro
