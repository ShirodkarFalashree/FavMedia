import React, { useState } from 'react';
import mockup1 from "../assets/mockup1.png"
import { LuSearch } from 'react-icons/lu';
import p1 from "../assets/process1.avif"
// Main App component
const Templates = () => {
  // Sample data for the grid items
  const gridItems = [
    { id: 1, imageUrl: p1, title: "Cafe Website", price: "Rs.100", description: "A modern cafe website template.", language: "React", images: ["", "", "", ""] },
    { id: 2, imageUrl: mockup1, title: "E-commerce Shop", price: "Rs.250", description: "Fully functional e-commerce site.", language: "React", images: ["", "", "", ""] },
    { id: 3, imageUrl: mockup1, title: "Portfolio Site", price: "Rs.50", description: "Showcase your work beautifully.", language: "HTML", images: ["", "", "", ""] },
    { id: 4, imageUrl: mockup1, title: "Blog Platform", price: "Rs.150", description: "Create and manage your blog.", language: "React", images: ["", "", "", ""] },
    { id: 5, imageUrl: mockup1, title: "Restaurant Menu", price: "Rs.120", description: "Interactive menu for restaurants.", language: "Vue", images: ["", "", "", ""] },
    { id: 6, imageUrl: mockup1, title: "Landing Page", price: "Rs.80", description: "High-converting landing page design.", language: "HTML", images: ["", "", "", ""] },
    { id: 7, imageUrl: mockup1, title: "Photography Gallery", price: "Rs.180", description: "Stunning gallery for photographers.", language: "React", images: ["", "", "", ""] },
    { id: 8, imageUrl: mockup1, title: "Fitness App", price: "Rs.300", description: "Web app for tracking fitness.", language: "Angular", images: ["", "", "", ""] },
    { id: 9, imageUrl: mockup1, title: "Event Planner", price: "Rs.200", description: "Organize events with ease.", language: "React", images: ["", "", "", ""] },
  ];

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered grid items based on search query
  const filteredGridItems = gridItems.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query) ||
      item.language.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) // Also search by description for better results
    );
  });

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter md:pt-30">
      {/* header section */}
      <div className='text-center flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-6'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] md:leading-[50px]'>
          Start Fast with<br /> Our Premium Templates
        </h2>
        <p className='text-subtext w-full sm:max-w-[600px] md:w-full text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]'>
          Browse stunning designs and launch your site in days, not weeks.
        </p>
      </div>
      <div className="w-[340px] border-[1px] border-subtext max-w-xl flex items-center justify-around px-4 rounded-4xl mb-8">
        <LuSearch className='text-[20px] text-white' />
        <input
          type="text"
          placeholder="Search templates"
          className="w-[300px] p-3 rounded-lg text-white placeholder-subtext focus:outline-none transition-all duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Main grid section */}
      <main className="w-full max-w-7xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGridItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.imageUrl}
                alt={`Grid item ${item.id}`}
                className="w-full h-70 object-cover rounded-xl transform transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                // Fallback for broken images
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/000000/FFFFFF?text=Image+${item.id}+Error`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-xl flex items-center justify-between ">
                <div>
                  <a
                    href="#"
                    className="text-white text-sm flex  items-center transition-colors duration-200"
                  >
                    {item.title}

                  </a>
                  <a
                    href="#"
                    className="text-subtext text-sm flex  items-center transition-colors duration-200"
                  >
                    {item.price}

                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Templates;
