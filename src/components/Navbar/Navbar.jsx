import React from 'react'
import logo from "../../assets/images/hero/image 45.png";

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 h-20 flex items-center bg-[#FFF7E2]'>
      <div className='px-10'>
        <img src={logo} alt="logo.png" />
      </div>
    </div>
  )
}

export default Navbar