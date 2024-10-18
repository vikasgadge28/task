import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-100 p-16 rounded-t-2xl">
      <div className="mx-auto flex gap-20">
        {/* Left section: Logo, Socials, Email */}
        <div>
          <h2 className="text-2xl font-bold mb-4 ">Logo</h2>
          <p className="text-lg font-medium mb-2">Our Socials</p>
          <div className="flex space-x-3 mb-5">
            {/* Social Icons */}
            <a href="/facebook" className="text-blue-600"><i className="fab fa-facebook"></i></a>
            <a href="/instagram" className="text-blue-600"><i className="fab fa-instagram"></i></a>
            <a href="/" className="text-blue-600"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="text-blue-600"><i className="fab fa-youtube"></i></a>
            <a href="/" className="text-blue-600"><i className="fab fa-twitter"></i></a>
          </div>
          <p className="text-lg font-medium mb-2">Stay updated with the latests</p>
          <div className="flex bg-[#EAF1FF] rounded-lg w-[20rem] ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border  w-full"
              
            />
            <button className="bg-[#EAF1FF] p-2 rounded-r-lg text-black">
              &#x27A4; {/* Right arrow icon */}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">Home</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>About us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">About us</h3>
          <ul className="space-y-2">
            <li>Know us</li>
            <li>Our Team</li>
            <li>Testimonials</li>
            <li>Our Awards & Achievements</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li>Developers</li>
            <li>Consumer</li>
            <li>Channel partner</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">Nextdeals</h3>
          <ul className="space-y-2">
            <li>Projects</li>
            <li>Lands</li>
            <li>Hotels</li>
          </ul>
        </div>

        <div>
        <h3 className="text-xl font-bold text-blue-600 mb-3">Careers</h3>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
