import React from "react";
import { Link } from 'react-router-dom';
import favlogo from "../assets/favlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-8 md:px-10 border-t border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] mt-0" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo & Brand Message */}
        <div>
<div className='text-white text-xl sm:text-2xl font-bold '>
<Link to="/"  className='font-figtreee text-3xl'>FAVMedia</Link>
      </div>
         
          <p className="text-gray-400 mt-4 leading-relaxed">
            Crafting websites with passion, precision, and purpose. <br />
            Built by <span className="font-semibold text-white">favMedia</span>.
          </p>
        </div>

        {/* Website Navigation */}
        <nav aria-label="Footer Navigation">
          <h2 className="text-lg font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/" className="hover:text-white">FAQ</Link></li>
          </ul>
        </nav>

        {/* Social Media */}
        <nav aria-label="Social Media Links">
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://x.com/favmedia" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
            <li><a href="https://www.instagram.com/f.a.v.media" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            {/* <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li> */}
          </ul>
        </nav>

        {/* CTA: Templates */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Free Templates</h2>
          <p className="text-gray-400 mb-3 text-sm">
            Discover fast-launch templates built for performance and design.
          </p>
          <Link
            to="/templates"
            className="inline-block px-5 py-2 text-sm font-medium text-white border border-[#a9a9a954] rounded-3xl bg-[#0F0F0F] hover:bg-white hover:text-black transition duration-300"
          >
            Browse Templates
          </Link>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-16 text-center text-gray-500 text-sm border-t border-[#ffffff1a] pt-6">
        © {new Date().getFullYear()} favMedia. All rights reserved. | <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
