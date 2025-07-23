import React, { useEffect, useState } from 'react';
import mockup1 from "../assets/mockup1.png"
import { LuSearch } from 'react-icons/lu';
import p1 from "../assets/process1.avif"
import { Link } from 'react-router-dom';
// Main App component
const Templates = () => {
  // Sample data for the grid items
  const gridItems = [
  //   { id: 1, imageUrl:"https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126170/0a8cb03f-6fc9-43fa-bb0d-eb43445e961f_vzlwhl.png", title: "Cafe Website", price: "Rs.100", description: "A modern cafe website template.", language: "React", images: ["", "", "", ""] },
  //   { id: 2, imageUrl: mockup1, title: "E-commerce Shop", price: "Rs.250", description: "Fully functional e-commerce site.", language: "React", images: ["", "", "", ""] },
  //   { id: 3, imageUrl: mockup1, title: "Portfolio Site", price: "Rs.50", description: "Showcase your work beautifully.", language: "HTML", images: ["", "", "", ""] },
  //   { id: 4, imageUrl: mockup1, title: "Blog Platform", price: "Rs.150", description: "Create and manage your blog.", language: "React", images: ["", "", "", ""] },
  //   { id: 5, imageUrl: mockup1, title: "Restaurant Menu", price: "Rs.120", description: "Interactive menu for restaurants.", language: "Vue", images: ["", "", "", ""] },
  //   { id: 6, imageUrl: mockup1, title: "Landing Page", price: "Rs.80", description: "High-converting landing page design.", language: "HTML", images: ["", "", "", ""] },
  //   { id: 7, imageUrl: mockup1, title: "Photography Gallery", price: "Rs.180", description: "Stunning gallery for photographers.", language: "React", images: ["", "", "", ""] },
  //   { id: 8, imageUrl: mockup1, title: "Fitness App", price: "Rs.300", description: "Web app for tracking fitness.", language: "Angular", images: ["", "", "", ""] },
  //   { id: 9, imageUrl: mockup1, title: "Event Planner", price: "Rs.200", description: "Organize events with ease.", language: "React", images: ["", "", "", ""] },
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126170/0a8cb03f-6fc9-43fa-bb0d-eb43445e961f_vzlwhl.png",
    title: "Cafe Website",
    price: "Rs.2000",
    description:
      "A beautifully crafted modern cafe website. Perfect for showcasing menu, ambience, and driving footfall or orders online. Fully responsive and built to convert.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://favachinno.vercel.app/",
    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124803/Screenshot_2025-07-22_001614_kuejrw.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124815/Screenshot_2025-07-22_001858_i3ho0r.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124908/Screenshot_2025-07-22_001922_pbczsd.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124906/Screenshot_2025-07-22_001940_p8qrma.png",
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126825/b26b6554-18f5-49b1-83a6-2fd55915470c_aloppd.png",
    title: "E-commerce Shop",
    price: "Rs.250",
    description:
      "A fully functional online store built to sell products with ease. Clean UI, dynamic cart system, and ready-to-scale for any business niche.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://favjewels.netlify.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125553/Screenshot_2025-07-22_004343_ghbrht.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125367/Screenshot_2025-07-22_004419_i5bzsc.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125319/Screenshot_2025-07-22_004458_lvgfje.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125322/Screenshot_2025-07-22_004444_qntuvn.png",
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127261/a96149c1-82cb-4af9-a701-02382a728b01_aj4ka7.png",
    title: "Portfolio Site",
    price: "Rs.50",
    description:
      "A clean, minimal portfolio template for developers, designers, and creatives. Perfect to showcase projects and skills professionally.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://real-estate-ruddy-one.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125600/Screenshot_2025-07-22_004556_rxdzck.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125598/Screenshot_2025-07-22_004623_psv38e.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125596/Screenshot_2025-07-22_004702_ooqdhq.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125602/Screenshot_2025-07-22_004900_ea8rhl.png",
    ],
  },
  // {
  //   id: 4,
  //   imageUrl: mockup1,
  //   title: "Blog Platform",
  //   price: "Rs.150",
  //   description: "A modern blog template perfect for creators and writers. Fully responsive with clean layouts, reading-time estimate, and comment-ready.",
  //   language: "ReactJS + TailwindCSS",
  //   images: ["", "", "", ""]
  // },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127830/70d07093-f2bd-4915-97f3-864b8375f84e_c9ae8i.png",
    title: "Course Landing page",
    price: "Rs.120",
    description:
      "Designed for online educators. Showcase course features, modules, testimonials, and drive signups with a high-converting layout.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://courses-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127507/Screenshot_2025-07-22_011919_recgym.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127507/Screenshot_2025-07-22_011935_ona3lk.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127506/Screenshot_2025-07-22_012003_kdgd52.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127456/Screenshot_2025-07-22_012020_z9fijq.png",
    ],
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128177/47544738-f53c-4429-9ab6-0f871030cab1_palvwi.png",
    title: "Cafeteria website",
    price: "Rs.80",
    description:
      "A stylish landing page template for cafeterias and snack bars. Promote your offerings, timings, and customer reviews effortlessly.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://mocha-cafe-alpha.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126141/Screenshot_2025-07-22_005343_zm6ato.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126138/Screenshot_2025-07-22_005404_nnkv8u.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125965/Screenshot_2025-07-22_005436_xypmgu.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125922/Screenshot_2025-07-22_005503_cz5tnn.png",
    ],
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128547/9a9fd084-1ec5-4dea-abc7-b5be2534caf0_yt6kdv.png",
    title: "Product Showcase",
    price: "Rs.180",
    description:
      "Stunning gallery-style layout to beautifully display any product — from tech to fashion to art. Great for portfolios or boutique brands.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://groomify-pink.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128156/Screenshot_2025-07-22_012917_cgpzw9.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128155/Screenshot_2025-07-22_012933_x99b8v.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128063/Screenshot_2025-07-22_013009_cazvmi.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128061/Screenshot_2025-07-22_013028_dfacfd.png",
    ],
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129020/b2dfc30f-78db-49cd-986b-618da7dd4538_ql2i9r.png",
    title: "Fitness App",
    price: "Rs.300",
    description:
      "Web interface for fitness trainers, gyms, or tracking apps. Comes with goal trackers, programs, testimonials, and contact forms.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://gym-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128539/Screenshot_2025-07-22_013702_rof3xt.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128537/Screenshot_2025-07-22_013716_fkojza.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128538/Screenshot_2025-07-22_013735_nxidr3.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128536/Screenshot_2025-07-22_013748_typibn.png",
    ],
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129521/32c135a1-5a14-42ff-ba34-9395651ce128_rvaonk.png",
    title: "Saas Showcase",
    price: "Rs.200",
    description:
      "Modern landing page for SaaS startups. Highlight features, pricing, testimonials, and drive leads with smart CTAs.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://purple-theme-seven.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129001/Screenshot_2025-07-22_014452_smq7x8.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129000/Screenshot_2025-07-22_014522_jzsdaf.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129001/Screenshot_2025-07-22_014506_q65pcd.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129000/Screenshot_2025-07-22_014541_kth6ew.png",
    ],
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129939/7810c394-4301-461c-8831-d2549fbd34a0_btvdcy.png",
    title: "Business landing page",
    price: "Rs.200",
    description:
      "A versatile landing page for agencies, startups, or consultants. Built for conversion with clean sections and strong messaging.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://realestate-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129503/Screenshot_2025-07-22_015010_mvmlx3.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129434/Screenshot_2025-07-22_015040_q37mrh.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129501/Screenshot_2025-07-22_015026_i5vkwb.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129400/Screenshot_2025-07-22_015056_azppzr.png",
    ],
  },

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter pt-24 md:pt-30 ">
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
           <Link to={`/template/${item.id}`} key={item.id}>
           <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group">
             <img
               src={item.imageUrl}
               alt={`Grid item ${item.id}`}
               className="w-full h-70 object-cover rounded-xl transform transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = `https://placehold.co/600x400/000000/FFFFFF?text=Image+${item.id}+Error`;
               }}
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-xl flex items-center justify-between">
               <div>
                 <p className="text-white text-sm">{item.title}</p>
                 <p className="text-subtext text-sm">{item.price}</p>
               </div>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6 ml-1"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 strokeWidth={2}
               >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>
         </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Templates;
