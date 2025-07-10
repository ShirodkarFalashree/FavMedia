import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsStars } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-[80px] flex justify-between items-center px-12 '>
      <div className='text-white text-2xl font-bold'><Link to="/">FAVMedia</Link></div>
      <div className='flex gap-6'>
        <div className='flex gap-6 items-center'>
          <Link className='cursor-pointer text-subtext hover:text-white text-[15px] ' to="/">Home</Link>
          <Link className='cursor-pointer text-subtext hover:text-white text-[15px] ' to="/#services">Services</Link>
          <Link className='cursor-pointer text-subtext hover:text-white text-[15px] ' to="/about-us">About us</Link>
          <Link className='cursor-pointer text-subtext hover:text-white text-[15px] ' to="/blogs">Blogs</Link>
        </div>
        <div>
          <button
            className="w-[160px] border-[1px] text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-[44px] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
            onClick={() => { navigate("/templates") }}
          >
            <BsStars className='text-[20px]' /> Get Templates
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar