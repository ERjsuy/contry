import React from 'react'
import walk from '../../assets/img/walk.png'
import way from '../../assets/img/way.png'
import coco from '../../assets/img/coco.png'
import coco2 from '../../assets/img/coco2.png'

const Section1 = () => {
  return (
    <>
        <div className="flex items-center justify-center  bg-[#010a20] mt-30">
      <img
        src={walk}
        alt="Walkway"
        className=" bg-gradient-to-t from-[#010a20] to-[#010a20] absolute"
      />

      <div className="flex items-center gap-19 relative z-10">
        <img src={way} alt="Way" className="w-100 rounded-lg shadow-lg" />

        <div className="text-white max-w-md">
          <p className="text-2xl font-bold mb-2">
            The walkways of <br /> Indonesia spellbind
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Fusce commodo magna et libero mollis rhoncus.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

      
    </div>
    
    <div className="relative w-full h-screen flex justify-center items-center ">
      {/* Фоновое изображение */}
      <img
        src={coco}
        alt="Background"
        className="mt-35 absolute top-0 left-0 w-full h-150 object-cover z-0 bg-gradient-to-t from-[#010a20] to-[#010a20]"
      />

      {/* Затемнение */}
      <div className="absolute  w-full h-full  z-10 " />

      {/* Контент */}
      <div className="relative z-20 flex flex-col md:flex-row items-center max-w-6xl w-full mt-45 px-40">
        {/* Текст слева */}
        <div className="text-white md:w-1/2 w-full mb-10 md:mb-0 md:">
          <p className="text-2xl font-semibold mb-4">
            Perfect beaches exude <br /> relaxation and fun
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adip <br />
            iscing elit. Fusce commodo magna et libero <br />
            mollis rhoncus.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Learn more
          </button>
        </div>

        {/* Картинка справа */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={coco2} alt="Beach" className="w-100 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>


    </>
    
  )
}

export default Section1
