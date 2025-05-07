import React from 'react'
import logo from '../../assets/img/logo.png'
import lupa from '../../assets/icon/lupa.png'
import menu from '../../assets/icon/menu.png'
import digo from '../../assets/img/digo.png'

const Header = () => {
  return (
    <>
      <div className='bg-[#018495] w-full h-20 flex items-center justify-between  relative z-20 '>
        <div className=' w-250 flex items-center justify-between ml-10' >
            <img src={logo} alt="" />
            <ul className='flex items-center justify-around  w-200 text-2xl text-white'>
                <li>DESTINATIONS</li>
                <li>EXPERIENCES</li>
                <li>ABOUT</li>
                <li>GALLERY</li>
            </ul>
        </div>
        <div className='flex items-center  mr-10 w-30 h-20 justify-around'>
            <img src={lupa} alt="" className='w-12 h-auto'/>
            <img src={menu} alt="" className='w-10 h-auto' />
        </div>
      </div>
    </>
  )
}

export default Header
