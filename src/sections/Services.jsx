// import React from 'react';
// import { GoDotFill } from 'react-icons/go';
// import { IoFlashOutline } from 'react-icons/io5';

// const Services = () => {
//   return (
//     <section
//       className="w-full flex flex-col justify-center items-center mb-[80px] md:mb-[160px] px-8 md:px-10"
//       aria-label="Web development services offered by FavMedia"
//     >
//       {/* Services tag */}
//       <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-10">
//         <div className="flex items-center justify-center text-xs sm:text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
//           <span className="animate-[blink_1s_infinite]" aria-hidden="true">
//             <GoDotFill />
//           </span>
//           <p>Services</p>
//         </div>
//       </div>

//       {/* Heading section */}
//       <div className="text-center flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-6">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] md:leading-[50px]">
//           What We Provide
//         </h2>
//         <p className="text-subtext w-full sm:max-w-[600px] md:w-full text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]">
//           FavMedia offers fast and flexible web development services — choose a ready-to-go template, personalize it to match your brand, or get a fully custom website crafted from scratch.
//         </p>
//       </div>

//       {/* Services cards */}
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
//         {/* Card 1 - Ready-Made Templates */}
//         <div
//           className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
//           role="article"
//           aria-label="Ready-made website templates"
//         >
//           <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
//             <IoFlashOutline className="text-center shadow-white" />
//           </div>
//           <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
//             Ready-Made <br /> Templates
//           </h3>
//           <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
//           <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
//             Launch your website quickly using our pre-designed, mobile-optimized templates. Perfect for startups and small businesses.
//           </p>
//         </div>

//         {/* Card 2 - Templates + Customization */}
//         <div
//           className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
//           role="article"
//           aria-label="Custom tweaks to website templates"
//         >
//           <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
//             <IoFlashOutline className="text-center shadow-white" />
//           </div>
//           <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
//             Templates + <br /> Customization
//           </h3>
//           <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
//           <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
//             Choose a template and let us personalize it with brand colors, content, animations, and features tailored for your audience.
//           </p>
//         </div>

//         {/* Card 3 - Fully Custom Websites */}
//         <div
//           className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
//           role="article"
//           aria-label="Fully custom website development"
//         >
//           <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
//             <IoFlashOutline className="text-center shadow-white" />
//           </div>
//           <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
//             Fully Custom <br /> Websites
//           </h3>
//           <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
//           <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
//             Need something built from the ground up? We create high-performance, scalable websites tailored to your business objectives.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { GoDotFill } from "react-icons/go";
// import { IoFlashOutline } from "react-icons/io5";

// const services = [
//   {
//     title: "Social Media Marketing",
//     desc: "Strategy, content creation, growth, and performance-driven social media campaigns."
//   },
//   {
//     title: "Websites & Applications",
//     desc: "High-performance websites and scalable web applications tailored to your business."
//   },
//   {
//     title: "Video Ads & Motion Graphics",
//     desc: "Scroll-stopping video ads, reels, and motion graphics designed to convert."
//   }
// ];

// const Services = () => {
//   return (
//     <section
//       className="w-full flex flex-col justify-center items-center mb-[80px] md:mb-[160px] px-8 md:px-10"
//       aria-label="Services offered by FavMedia"
//     >
//       {/* Services tag */}
//       <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-8">
//         <div className="flex items-center justify-center text-xs sm:text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
//           <span className="animate-[blink_1s_infinite]">
//             <GoDotFill />
//           </span>
//           <p>Services</p>
//         </div>
//       </div>

//       {/* Heading */}
//       <div className="text-center flex flex-col gap-4 items-center mb-12">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2]">
//           What We Provide
//         </h2>
//         <p className="text-subtext max-w-[600px] text-sm sm:text-[16px] leading-[26px]">
//           We craft digital experiences that feel premium — fast, flexible, and built to scale.
//         </p>
//       </div>

//       {/* Service cards */}
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10">
//         {services.map((service, i) => (
//           <div
//             key={i}
//             className="
//               group relative
//               border-[1px] border-[#ffffff46]
//               rounded-4xl
//               bg-[#0e0e0e]
//               p-6
//               flex flex-col items-center text-center
//               transition-all duration-500 ease-out
//               [transform-style:preserve-3d]
//               hover:[transform:rotateX(10deg)_translateY(-10px)]
//               hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]
//             "
//           >
//             {/* Peeking files */}
//             <div className="absolute inset-0 -z-10 pointer-events-none">
//               <div
//                 className="
//                   absolute top-3 left-3 w-full h-full
//                   rounded-4xl bg-[#2a2a2a]
//                   transition-all duration-500
//                   group-hover:translate-x-3 group-hover:-translate-y-3
//                 "
//               />
//               <div
//                 className="
//                   absolute top-6 left-6 w-full h-full
//                   rounded-4xl bg-[#1f1f1f]
//                   transition-all duration-500
//                   group-hover:translate-x-6 group-hover:-translate-y-6
//                 "
//               />
//             </div>

//             {/* Icon */}
//             <div className="h-12 w-12 rounded-full flex justify-center items-center text-2xl text-white bg-[#3D3D3D] mb-6">
//               <IoFlashOutline />
//             </div>

//             {/* Title */}
//             <h3 className="text-xl sm:text-2xl md:text-[32px] leading-[1.2] mb-3">
//               {service.title}
//             </h3>

//             {/* Divider */}
//             <div className="w-full h-[1px] bg-gradient-to-r from-black via-gray-500 to-black mb-4" />

//             {/* Description */}
//             <p className="text-subtext text-sm sm:text-[16px] leading-[26px]">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
// import React from "react";
// import { GoDotFill } from "react-icons/go";
// import { motion } from "framer-motion";
// import { FaInstagram, FaGlobe, FaPlay } from "react-icons/fa";

// /* =======================
//    SERVICES DATA
// ======================= */
// const serviceData = [
//   {
//     title: "Social Media Marketing",
//     color: "bg-pink-500",
//     icon: <FaInstagram />,
//     description: "Strategy, Content Creation & Community Management",
//     files: [
//       { color: "bg-purple-400", height: "h-24", rotate: "-rotate-6" },
//       { color: "bg-pink-400", height: "h-28", rotate: "rotate-3" }
//     ]
//   },
//   {
//     title: "Websites & Applications",
//     color: "bg-blue-500",
//     icon: <FaGlobe />,
//     description: "React, Next.js, High Performance UI/UX",
//     files: [
//       { color: "bg-blue-800", height: "h-24", rotate: "-rotate-3" },
//       { color: "bg-sky-400", height: "h-28", rotate: "rotate-2" }
//     ]
//   },
//   {
//     title: "Video Ads & Motion Graphics",
//     color: "bg-orange-500",
//     icon: <FaPlay />,
//     description: "Editing, VFX, & Promotional Content",
//     files: [
//       { color: "bg-orange-400", height: "h-24", rotate: "-rotate-6" },
//       { color: "bg-red-500", height: "h-28", rotate: "rotate-6" }
//     ]
//   }
// ];

// /* =======================
//    FOLDER CARD
// ======================= */
// const FolderCard = ({ service }) => {
//   return (
//     <motion.div
//       className="relative w-full max-w-[350px] h-[300px] cursor-pointer perspective-1000 mx-auto"
//       initial="initial"
//       whileHover="hover"
//       whileTap="hover"
//     >
//       {/* 1. THE BACK PLATE (Layer 1 - The furthest back) */}
//       <div className="absolute bottom-0 w-full h-[220px] bg-[#1a1a1a] rounded-t-lg rounded-b-2xl border border-white/10 shadow-2xl z-0" />

//       {/* 2. THE FILES (Layer 2 - Sandwiched in the middle) */}
//       <div className="absolute inset-0 flex justify-center items-end pb-0 z-10 px-4"> 
//         {service.files.map((file, i) => (
//           <motion.div
//             key={i}
//             variants={{
//               initial: { 
//                 y: 5, // Start slightly hidden deep in the folder
//                 scale: 0.9,
//                 opacity: 1 
//               },
//               hover: { 
//                 y: -70 - (i * 15), // Rise up out of the pocket
//                 scale: 1,
//                 rotate: file.rotate === 'rotate-left' ? -5 : 5, // Optional subtle rotation on hover
//                 transition: { 
//                   type: "spring", 
//                   stiffness: 200, 
//                   damping: 15,
//                   delay: 0.1 // Slight delay so the folder opens first
//                 } 
//               }
//             }}
//             // Added `bottom-[10px]` to position them inside the folder bounds
//             className={`absolute bottom-[20px] w-[85%] rounded-xl shadow-xl border border-white/20 ${file.color} ${file.height} ${file.rotate} origin-bottom flex items-center justify-center overflow-hidden`}
//           >
//             {/* Mock content inside files */}
//             <div className="opacity-40 w-full h-full flex flex-col gap-2 p-2">
//                <div className="w-full h-2 bg-white/50 rounded-full"></div>
//                <div className="w-2/3 h-2 bg-white/50 rounded-full"></div>
//                {file.type === 'browser' && <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500"></div>}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 3. THE FRONT PLATE (Layer 3 - The closest to the user) */}
//       <motion.div
//         className="absolute bottom-0 w-full h-[200px] bg-[#0f0f0f] border-t border-white/20 rounded-t-lg rounded-b-2xl shadow-[0_-5px_30px_rgba(0,0,0,0.8)] z-20 overflow-hidden"
//         style={{ transformOrigin: "bottom" }}
//         variants={{
//           initial: { rotateX: 0 },
//           hover: { 
//             rotateX: 20, // Tilt forward to open the "V" shape
//             transition: { duration: 0.4, ease: "backOut" } 
//           }
//         }}
//       >
//         {/* Glass shine effect */}
//         <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
//         {/* Content on the Folder Face */}
//         <div className="p-6 flex flex-col justify-between h-full relative">
//           <div className="flex justify-between items-start">
//              {/* Folder Tab Visual */}
//             <div className="absolute -top-[25px] left-0 w-[40%] h-[30px] bg-[#0f0f0f] rounded-t-xl border-t border-l border-r border-white/10" />
            
//             <div className={`p-3 rounded-lg ${service.color} text-white text-xl z-10`}>
//               {service.icon}
//             </div>
//           </div>

//           <div className="z-10 mt-4">
//             <h3 className="text-2xl font-bold text-white leading-tight mb-2">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-400">
//               {service.description}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };
// /* =======================
//    SERVICES SECTION
// ======================= */
// const Services = () => {
//   return (
//     <section className="w-full bg-black text-white px-8 md:px-10 py-[100px] overflow-hidden">
//       {/* TAG */}
//       <div className="flex justify-center mb-10">
//         <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black">
//           <div className="flex items-center gap-2 px-4 py-1 bg-black rounded-full text-sm">
//             <GoDotFill className="animate-pulse" />
//             Services
//           </div>
//         </div>
//       </div>

//       {/* HEADING */}
//       <div className="text-center max-w-2xl mx-auto mb-20">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           What We Provide
//         </h2>
//         <p className="text-gray-400">
//           From social growth to high-performance web experiences — we build
//           digital products that stand out.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
//         {serviceData.map((service, i) => (
//           <FolderCard key={i} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { GoDotFill } from "react-icons/go";
// import { motion } from "framer-motion";
// import { FaInstagram, FaGlobe, FaPlay } from "react-icons/fa";

// /* =======================
//    SERVICES DATA
// ======================= */
// const serviceData = [
//   {
//     title: "Social Media Marketing",
//     // color: "bg-grey-500",
//     icon: <FaInstagram />,
//     description: "Strategy, Content Creation & Community Management",
//     files: [
//       { color: "bg-purple-500", height: "h-24", rotate: "-rotate-6" },
//       { color: "bg-pink-500", height: "h-28", rotate: "rotate-3" }
//     ]
//   },
//   {
//     title: "Websites & Applications",
//     // color: "bg-blue-500",
//     icon: <FaGlobe />,
//     description: "React, Next.js, High Performance UI/UX",
//     files: [
//       { color: "bg-blue-600", height: "h-24", rotate: "-rotate-3" },
//       { color: "bg-cyan-500", height: "h-28", rotate: "rotate-2" }
//     ]
//   },
//   {
//     title: "Video Ads & Motion Graphics",
//     // color: "bg-orange-500",
//     icon: <FaPlay />,
//     description: "Editing, VFX, & Promotional Content",
//     files: [
//       { color: "bg-orange-600", height: "h-24", rotate: "-rotate-6" },
//       { color: "bg-red-500", height: "h-28", rotate: "rotate-6" }
//     ]
//   }
// ];

// /* =======================
//    FOLDER CARD
// ======================= */
// const FolderCard = ({ service }) => {
//   return (
//     <motion.div
//       className="relative w-full max-w-[350px] h-[320px] cursor-pointer perspective-1000 mx-auto group"
//       initial="initial"
//       whileHover="hover"
//       whileTap="hover"
//     >
//       {/* 1. THE BACK PLATE (Darker backing to create depth) */}
//       <div className="absolute bottom-0 w-full h-[220px] bg-neutral-900/80 rounded-t-lg rounded-b-2xl border border-white/5 shadow-2xl z-0" />

//       {/* 2. THE FILES (Bright colors to pop through the glass) */}
//       <div className="absolute inset-0 flex justify-center items-end z-10 px-4 pb-8"> 
//         {service.files.map((file, i) => (
//           <motion.div
//             key={i}
//             variants={{
//               initial: { 
//                 y: 0, 
//                 scale: 0.9,
//               },
//               hover: { 
//                 y: -90 - (i * 15), 
//                 scale: 1,
//                 rotate: file.rotate === 'rotate-left' ? -5 : 5,
//                 transition: { 
//                   type: "spring", 
//                   stiffness: 260, 
//                   damping: 20,
//                   delay: 0.1 
//                 } 
//               }
//             }}
//             className={`absolute bottom-[30px] w-[85%] rounded-xl shadow-lg border border-white/10 ${file.color} ${file.height} ${file.rotate} origin-bottom flex items-center justify-center overflow-hidden`}
//           >
//             {/* Glossy Overlay on Files */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            
//             {/* Mock content inside files */}
//             <div className="opacity-50 w-full h-full flex flex-col gap-2 p-2">
//                <div className="w-full h-2 bg-black/20 rounded-full"></div>
//                <div className="w-2/3 h-2 bg-black/20 rounded-full"></div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 3. THE FRONT PLATE (GLASSMORPHISM) */}
//       <motion.div
//         // KEY CHANGES HERE: backdrop-blur, bg-opacity, inset shadows
//         className="absolute bottom-0 w-full h-[200px] rounded-t-lg rounded-b-2xl z-20 overflow-hidden border border-white/10 bg-gray-900/40 backdrop-blur-xl"
//         style={{ transformOrigin: "bottom" }}
//         variants={{
//           initial: { rotateX: 0 },
//           hover: { 
//             rotateX: 25, 
//             transition: { duration: 0.4, ease: "backOut" } 
//           }
//         }}
//       >
//         {/* Top Highlight (Rim Light) */}
//         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
//         {/* Glass Reflection Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
//         {/* Content on the Folder Face */}
//         <div className="p-6 flex flex-col justify-between h-full relative">
//           <div className="flex justify-between items-start">
             
//              {/* Glass Tab Visual */}
//              {/* We use a separate glass div for the tab to match the body */}
//             <div className="absolute -top-[25px] left-0 w-[40%] h-[30px] rounded-t-xl border-t border-l border-r border-white/10 bg-gray-900/40 backdrop-blur-xl flex justify-center overflow-hidden">
//                 {/* Tab Highlight */}
//                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//             </div>
            
//             <div className={`p-3 rounded-lg ${service.color} text-white text-xl z-10 shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
//               {service.icon}
//             </div>
//           </div>

//           <div className="z-10 mt-4">
//             <h3 className="text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-300 font-medium">
//               {service.description}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// /* =======================
//    SERVICES SECTION
// ======================= */
// const Services = () => {
//   return (
//     <section className="relative w-full bg-black text-white px-8 md:px-10 py-[100px] overflow-hidden">
      
//       {/* BACKGROUND BLOBS (Required for Glass Effect to be visible) */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
//           <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
//           <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10">
//         {/* TAG */}
//         <div className="flex justify-center mb-10">
//           <div className="p-[1px] rounded-full bg-gradient-to-r from-white/20 to-white/0">
//             <div className="flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
//               <GoDotFill className="animate-pulse text-blue-400" />
//               Services
//             </div>
//           </div>
//         </div>

//         {/* HEADING */}
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
//             What We Provide
//           </h2>
//           <p className="text-gray-400 text-lg">
//             From social growth to high-performance web experiences — we build
//             digital products that stand out.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
//           {serviceData.map((service, i) => (
//             <FolderCard key={i} service={service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

  // import React from "react";
  // import { GoDotFill } from "react-icons/go";
  // import { motion } from "framer-motion";
  // import { FaInstagram, FaGlobe, FaPlay } from "react-icons/fa";

  // /* =======================
  //   SERVICES DATA
  //   (Replace the 'image' URLs below with your own)
  // ======================= */
  // const serviceData = [
  //   {
  //     title: "Social Media Marketing",
  //     // color: "bg-pink-500",
  //     icon: <FaInstagram />,
  //     description: "Strategy, Content Creation & Community Management",
  //     files: [
  //       { 
  //         // Example: An Instagram UI or Phone shot
  //         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", 
  //         height: "h-24", 
  //         rotate: "-rotate-6" 
  //       },
  //       { 
  //         // Example: Analytics Dashboard
  //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
  //         height: "h-28", 
  //         rotate: "rotate-3" 
  //       }
  //     ]
  //   },
  //   {
  //     title: "Websites & Applications",
  //     // color: "bg-blue-500",
  //     icon: <FaGlobe />,
  //     description: "React, Next.js, High Performance UI/UX",
  //     files: [
  //       { 
  //         // Example: Code Editor
  //         image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", 
  //         height: "h-24", 
  //         rotate: "-rotate-3" 
  //       },
  //       { 
  //         // Example: Modern UI Design
  //         image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop", 
  //         height: "h-28", 
  //         rotate: "rotate-2" 
  //       }
  //     ]
  //   },
  //   {
  //     title: "Video Ads & Motion Graphics",
  //     // color: "bg-orange-500",
  //     icon: <FaPlay />,
  //     description: "Editing, VFX, & Promotional Content",
  //     files: [
  //       { 
  //         // Example: Video Editing Timeline
  //         image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2070&auto=format&fit=crop", 
  //         height: "h-24", 
  //         rotate: "-rotate-6" 
  //       },
  //       { 
  //         // Example: Camera Gear or Studio
  //         image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop", 
  //         height: "h-28", 
  //         rotate: "rotate-6" 
  //       }
  //     ]
  //   }
  // ];

  // /* =======================
  //   FOLDER CARD
  // ======================= */
  // const FolderCard = ({ service }) => {
  //   return (
  //     <motion.div
  //       className="relative w-full max-w-[350px] h-[320px] cursor-pointer perspective-1000 mx-auto group"
  //       initial="initial"
  //       whileHover="hover"
  //       whileTap="hover"
  //     >
  //       {/* 1. THE BACK PLATE */}
  //       <div className="absolute bottom-0 w-full h-[220px] border-[#ffffff2a] shadow-[0_0_5px_5px_#ffffff0e] rounded-t-2xl rounded-b-2xl border z-0" />

  //       {/* 2. THE FILES (Now Images) */}
  //       <div className="absolute inset-0 flex justify-center items-end z-10 px-4 pb-8"> 
  //         {service.files.map((file, i) => (
  //           <motion.div
  //             key={i}
  //             variants={{
  //               initial: { 
  //                 y: 0, 
  //                 scale: 0.9,
  //               },
  //               hover: { 
  //                 y: -90 - (i * 15), 
  //                 scale: 1,
  //                 rotate: file.rotate === 'rotate-left' ? -5 : 5,
  //                 transition: { 
  //                   type: "spring", 
  //                   stiffness: 260, 
  //                   damping: 20,
  //                   delay: 0.1 
  //                 } 
  //               }
  //             }}
  //             className={`absolute bottom-[30px] w-[85%] rounded-xl shadow-lg border-[2px] border-white/20 bg-neutral-800 ${file.height} ${file.rotate} origin-bottom flex items-center justify-center overflow-hidden`}
  //           >
  //             {/* THE IMAGE */}
  //             <img 
  //                 src={file.image} 
  //                 alt="Project Preview" 
  //                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
  //             />

  //             {/* Glossy Overlay (makes it look like a photo print) */}
  //             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
  //           </motion.div>
  //         ))}
  //       </div>

  //       {/* 3. THE FRONT PLATE (GLASSMORPHISM) */}
  //       <motion.div
  //         className="absolute bottom-0 w-full h-[200px]  rounded-2xl z-20 overflow-hidden border border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e]"
  //         style={{ transformOrigin: "bottom" }}
  //         variants={{
  //           initial: { rotateX: 0 },
  //           hover: { 
  //             rotateX: 25, 
  //             transition: { duration: 0.4, ease: "backOut" } 
  //           }
  //         }}
  //       >
  //         {/* Top Highlight (Rim Light) */}
  //         <div className="absolute top-0 left-0 w-full h-[1px] bg-black" />
          
  //         {/* Glass Reflection Gradient */}
  //         <div className="absolute inset-0 bg-[#000000] pointer-events-none" />
          
  //         {/* Content on the Folder Face */}
  //         <div className="p-6 flex flex-col justify-between h-full relative">
  //           <div className="flex  justify-between items-center">
              
  //             {/* Glass Tab Visual */}
  //             <div className="absolute -top-[25px] left-0 w-[40%] h-[30px] rounded-t-xl border-t border-l border-r border-white/10 bg-gray-900/40 backdrop-blur-xl flex justify-center overflow-hidden">
  //                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
  //             </div>
              
  //             <div className={`p-3 rounded-lg ${service.color}  text-white text-xl z-10 shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
  //               {service.icon}
  //             </div>
  //           </div>

  //           <div className="z-10 mt-4">
  //             <h3 className="text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
  //               {service.title}
  //             </h3>
  //             <p className="text-sm text-gray-300 font-medium">
  //               {service.description}
  //             </p>
  //           </div>
  //         </div>
  //       </motion.div>
  //     </motion.div>
  //   );
  // };

  // /* =======================
  //   SERVICES SECTION
  // ======================= */
  // const Services = () => {
  //   return (
  //     <section className="relative w-full bg-black text-white px-8 md:px-10 py-[100px] overflow-hidden">
        
  //       {/* BACKGROUND BLOBS */}
  //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
  //           <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
  //           <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
  //       </div>

  //       <div className="relative z-10">
  //         {/* TAG */}
  //         <div className="flex justify-center mb-10">
  //           <div className="p-[1px] rounded-full bg-gradient-to-r from-white/20 to-white/0">
  //             <div className="flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
  //               <GoDotFill className="animate-pulse text-blue-400" />
  //               Services
  //             </div>
  //           </div>
  //         </div>

  //         {/* HEADING */}
  //         <div className="text-center max-w-2xl mx-auto mb-20">
  //           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
  //             What We Provide
  //           </h2>
  //           <p className="text-gray-400 text-lg">
  //             From social growth to high-performance web experiences — we build
  //             digital products that stand out.
  //           </p>
  //         </div>

  //         {/* GRID */}
  //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
  //           {serviceData.map((service, i) => (
  //             <FolderCard key={i} service={service} />
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default Services;

import React from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { FaInstagram, FaGlobe, FaPlay } from "react-icons/fa";

/* =======================
   SERVICES DATA
======================= */
const serviceData = [
  {
    title: "Social Media Marketing",
    // Accent color for the little tab top
    color: "bg-pink-500", 
    icon: <FaInstagram />,
    description: "Strategy, Content Creation & Community Management",
    files: [
      { 
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", 
        height: "h-32", 
        rotate: "-rotate-6" 
      },
      { 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
        height: "h-40", 
        rotate: "rotate-3" 
      }
    ]
  },
  {
    title: "Websites & Applications",
    color: "bg-blue-500",
    icon: <FaGlobe />,
    description: "React, Next.js, High Performance UI/UX",
    files: [
      { 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", 
        height: "h-32", 
        rotate: "-rotate-3" 
      },
      { 
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop", 
        height: "h-40", 
        rotate: "rotate-2" 
      }
    ]
  },
  {
    title: "Video Ads & Motion Graphics",
    color: "bg-orange-500",
    icon: <FaPlay />,
    description: "Editing, VFX, & Promotional Content",
    files: [
      { 
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2070&auto=format&fit=crop", 
        height: "h-32", 
        rotate: "-rotate-6" 
      },
      { 
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop", 
        height: "h-40", 
        rotate: "rotate-6" 
      }
    ]
  }
];

/* =======================
   FOLDER CARD COMPONENT
======================= */
const FolderCard = ({ service }) => {
  return (
    <motion.div
      // 1. INCREASED HEIGHT to 400px
      className="relative w-full max-w-[400px] h-[400px] cursor-pointer perspective-1000 mx-auto group"
      initial="initial"
      whileHover="hover"
      whileTap="hover"
    >
      {/* --- BACK PLATE (The dark background behind files) --- */}
      <div className="absolute bottom-0 w-full h-full bg-neutral-900 rounded-[24px] border border-white/5 shadow-2xl z-0" />

      {/* --- THE FILES (Images peeking out) --- */}
      <div className="absolute inset-0 flex justify-center items-end z-10 px-4 pb-10"> 
        {service.files.map((file, i) => (
          <motion.div
            key={i}
            variants={{
              initial: { 
                y: 0, 
                scale: 0.95,
              },
              hover: { 
                y: -110 - (i * 140), // Increased travel so they peek out of the taller folder
                scale: 1,
                rotate: file.rotate === 'rotate-left' ? -5 : 5,
                transition: { 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.1 
                } 
              }
            }}
            className={`absolute bottom-[30px] w-[85%] rounded-2xl shadow-lg border-[2px] border-white/10 bg-neutral-800 ${file.height} ${file.rotate} origin-bottom flex items-center justify-center overflow-hidden`}
          >
            <img 
                src={file.image} 
                alt="Project Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* --- FRONT PLATE (The Folder Face) --- */}
      <motion.div
        className="absolute bottom-0 w-full h-full rounded-[24px] z-20 overflow-hidden border border-white/10 bg-neutral-900/90 backdrop-blur-xl"
        style={{ transformOrigin: "bottom" }}
        variants={{
          initial: { rotateX: 0 },
          hover: { 
            rotateX: 20, 
            transition: { duration: 0.4, ease: "backOut" } 
          }
        }}
      >
        {/* Top Highlight (Rim Light) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* --- FOLDER TAB (Restored) --- */}
        {/* This creates the little tab at the top-left */}
        <div className="absolute -top-[30px] left-0 w-[40%] h-[40px] rounded-t-2xl border-t border-l border-r border-white/10 bg-neutral-900/90 backdrop-blur-xl flex justify-center overflow-hidden z-10">
            {/* Tab Rim Light */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-black " />
            {/* Small accent color line on the tab */}
            <div className={`w-full h-1 ${service.color} opacity-50`} />
        </div>
        
        {/* --- CONTENT (Centered & Formatted) --- */}
        <div className="p-8 flex flex-col items-center  justify-center h-full relative text-center gap-5">
            
            {/* 2. CIRCULAR ICON */}
            <div className={`h-16 w-16 rounded-full bg-[#1F1F1F] border border-white/5 flex items-center justify-center text-2xl shadow-inner text-white group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-white leading-tight">
              {service.title}
            </h3>

            {/* 3. DIVIDER LINE */}
       <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3 sm:mb-[16px]"></div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
              {service.description}
            </p>

        </div>
      </motion.div>
    </motion.div>
  );
};

/* =======================
   SERVICES SECTION
======================= */
const Services = () => {
  return (
    <section className="relative w-full bg-black text-white px-8 md:px-10 py-[100px] overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Tag */}
        <div className="flex justify-center mb-10">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-white/20 to-white/0">
            <div className="flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
              <GoDotFill className="animate-pulse text-blue-400" />
              Services
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            What We Provide
          </h2>
          <p className="text-gray-400 text-lg">
            From social growth to high-performance web experiences — we build
            digital products that stand out.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pt-10">
          {serviceData.map((service, i) => (
            <FolderCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;