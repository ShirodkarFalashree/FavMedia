import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockup1 from "../assets/mockup1.png";
import p1 from "../assets/process1.avif";
import { BsStars } from 'react-icons/bs';

const data = [
  { id: 1, imageUrl: p1, title: "Cafe Website", price: "Rs.2000", description: "A modern cafe website template. Fully functional e-commerce site. Showcase your work beautifully. Showcase your work beautifully. Showcase your work beautifully.", language: "ReactJS + TailwindCSS", images: [mockup1, mockup1, mockup1, mockup1] },
  { id: 2, imageUrl: mockup1, title: "E-commerce Shop", price: "Rs.250", description: "Fully functional e-commerce site.", language: "ReactJS + TailwindCSS", images: ["", "", "", ""] },
  { id: 3, imageUrl: mockup1, title: "Portfolio Site", price: "Rs.50", description: "Showcase your work beautifully.", language: "HTML", images: ["", "", "", ""] },
  { id: 4, imageUrl: mockup1, title: "Blog Platform", price: "Rs.150", description: "Create and manage your blog.", language: "ReactJS + TailwindCSS", images: ["", "", "", ""] },
  { id: 5, imageUrl: mockup1, title: "Restaurant Menu", price: "Rs.120", description: "Interactive menu for restaurants.", language: "Vue", images: ["", "", "", ""] },
  { id: 6, imageUrl: mockup1, title: "Landing Page", price: "Rs.80", description: "High-converting landing page design.", language: "HTML", images: ["", "", "", ""] },
  { id: 7, imageUrl: mockup1, title: "Photography Gallery", price: "Rs.180", description: "Stunning gallery for photographers.", language: "ReactJS + TailwindCSS", images: ["", "", "", ""] },
  { id: 8, imageUrl: mockup1, title: "Fitness App", price: "Rs.300", description: "Web app for tracking fitness.", language: "Angular", images: ["", "", "", ""] },
  { id: 9, imageUrl: mockup1, title: "Event Planner", price: "Rs.200", description: "Organize events with ease.", language: "ReactJS + TailwindCSS", images: ["", "", "", ""] },
];

const TemplateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = data.find((t) => t.id === parseInt(id));

  if (!template) return <div className="text-white p-8">Template not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-inter md:w-full mx-6 md:px-10 md:mx-auto py-24 md:max-w-7xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-subtext text-sm  mb-6  inline-block cursor-pointer"
      >
        ← Back to Templates
      </button>

      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">{template.title}</h1>
      <p className="text-subtext text-base sm:text-lg max-w-2xl mb-6 md:mb-10">{template.description}</p>

      {/* Details Card */}
      <div className=" rounded-3xl p-0 md:p-0 mb-4 max-w-4xl">
        <div className="flex flex-col md:flex-row md:gap-30">
          <div>
            <p className="text-sm text-gray-400 mb-2">Price</p>
            <p className="text-xl font-semibold mb-4">{template.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Language used</p>
            <p className="text-xl font-semibold">{template.language}</p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <button className='bg-white text-black mb-12 px-4 py-2 rounded-4xl cursor-pointer'>Buy Now</button>
        <button
          className="px-4 py-2 border-[1px] h-fit text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
          onClick={() => { navigate("/templates") }}
        >
          Preview
        </button>
      </div>


      {/* Images Gallery */}
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {template.images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] group"
          >
            <img
              src={img || `https://placehold.co/600x400/000000/FFFFFF?text=Template+Image+${index + 1}`}
              alt={`Template image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateDetails;
