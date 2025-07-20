import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsStars, BsList, BsX } from "react-icons/bs";
import favlogo from "../assets/favlogo.png"

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 w-full h-[80px] z-50 backdrop-blur-md bg-[#000]/60 flex justify-between items-center px-4 sm:px-8 lg:px-12'>
      {/* Logo */}
      <div className='text-white text-xl sm:text-2xl font-bold '>
        <Link to="/"><img src={favlogo} className='w-[200px] md:w-[220px]' /></Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-6 items-center'>
        <div className='flex gap-4 lg:gap-6 items-center'>
 <Link 
            className='cursor-pointer text-subtext hover:text-white text-sm sm:text-[15px]' 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                scrollToSection('hero');
              } else {
                navigate('/');
                setTimeout(() => scrollToSection('hero'), 100);
              }
            }}
          >
            Home
          </Link>          <Link 
            className='cursor-pointer text-subtext hover:text-white text-sm sm:text-[15px]' 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                scrollToSection('services');
              } else {
                navigate('/');
                setTimeout(() => scrollToSection('services'), 100);
              }
            }}
          >
            Services
          </Link>
          <Link className='cursor-pointer text-subtext hover:text-white text-sm sm:text-[15px]' to="/about-us">About us</Link>
          <Link className='cursor-pointer text-subtext hover:text-white text-sm sm:text-[15px]' to="/blogs">Blogs</Link>
        </div>
        <div>
          <button
            className="w-[140px] sm:w-[160px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-[40px] sm:h-[44px] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
            onClick={() => { navigate("/templates") }}
          >
            <BsStars className='text-[18px] sm:text-[20px]' /> Get Templates
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white text-2xl focus:outline-none'
        >
          {isMenuOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 right-0 bg-[#0F0F0F] z-50 py-4 px-6 flex flex-col items-center space-y-4 border-t border-gray-800'>
          <Link 
            className='w-full text-center py-2 text-subtext hover:text-white' 
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            className='w-full text-center py-2 text-subtext hover:text-white' 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (window.location.pathname === '/') {
                scrollToSection('services');
              } else {
                navigate('/');
                setTimeout(() => scrollToSection('services'), 100);
              }
            }}
          >
            Services
          </Link>
          <Link 
            className='w-full text-center py-2 text-subtext hover:text-white' 
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
          <Link 
            className='w-full text-center py-2 text-subtext hover:text-white' 
            to="/blogs"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <button
            className="w-full max-w-[160px] border-[1px] text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-[44px] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
            onClick={() => { 
              navigate("/templates")
              setIsMenuOpen(false)
            }}
          >
            <BsStars className='text-[20px]' /> Get Templates
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar