import React from 'react'
import Logo from '../assests/Logo.png'
const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between rounded-sm bg-[#F4F4F4] pb-1'>
      <div>
         <img className=' w-56 h-14 ' src={Logo} alt='Logo'/>
      </div>

      <div className=' space-x-10'>
          <a href="/Home">Home</a> 
          <a href="/About">About Us</a> 
          <a href="/Projects">Projects</a>
          <a href="/Lands">Lands</a>
          <a href="/Hotels">Hotels</a>
          <a href="/Contact">Contact Us</a>
      </div>
      <div className=' flex '>
        <div>City</div>
         <img src="" alt="habber" />
      </div>
    </nav>
  )
}

export default Navbar
