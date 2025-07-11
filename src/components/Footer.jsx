import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import favlogo from "../assets/favlogo.png"
const Footer = () => {
  const navigate = useNavigate(); // ✅ This was missing

  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-8 md:px-10 border-t border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] mt-0 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 ">
        {/* Logo & Quote */}
        <div>
          <div className="flex items-center gap-2 mb-6">
                     <Link to="/"><img src={favlogo} className='w-[220px] md:mt-[-6px]' /></Link>
          </div>
          <p className="text-gray-400">
            Made remotely with <span className="text-gray-500">🩶</span> and passion
            <br />– <span className="font-semibold text-white">fav.</span>
          </p>
        </div>

        {/* Template Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Template Pages</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe Form</h2>
          <div className="flex items-center bg-[#1a1a1a] rounded-3xl px-4 py-1">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="bg-transparent outline-none text-white flex-grow text-sm placeholder-gray-400 px-2"
            />
            <button
              className="px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 text-white hover:text-white flex items-center justify-center border border-[#a9a9a954] rounded-3xl bg-[#0F0F0F] h-[38px] cursor-pointer shadow-[inset_0_-0.4px_0.4px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.5px_1.5px_-2.5px_rgba(0,0,0,0.596),inset_0_-6px_6px_-3.75px_rgba(0,0,0,0.235)]"
              onClick={() => navigate("/templates")}
            >
              Get Templates
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
