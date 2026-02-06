// import React from "react";
// import { GoDotFill } from "react-icons/go";
// import { Link, useNavigate } from 'react-router-dom'

// const Hero = () => {
//     const navigate = useNavigate()

//   return (
//     <section
//       className="bg-black text-white md:min-h-[300px] flex flex-col justify-center items-center py-10 md:py-0 gap-0 md:gap-2 px-4 sm:px-6 lg:px-8 md:pt-[150px] md:mb-10"
//       aria-label="Hero section showcasing FavMedia website development agency"
//       role="banner"
//       id="hero"
//     >
//       {/* Animated tagline */}
//       <header className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-6">
//         <div className="flex items-center justify-center bg-white dark:bg-black p-2 rounded-full gap-2 text-xs sm:text-sm">
//           <span className="animate-[blink_1s_infinite]" aria-hidden="true">
//             <GoDotFill />
//           </span>
//           <p className="text-black dark:text-white">
//             Crafting Unique Brand Identities
//           </p>
//         </div>
//       </header>

//       {/* SEO-friendly Main Heading */}
//           <h1 className="text-3xl sm:text-5xl md:text-6xl text-center lg:text-[72px] leading-tight md:leading-[92px] font-bold text-white max-w-4xl">
//         Elevate Your Business with a Top Website Development Agency
//       </h1>

//       {/* Keyword-rich Description */}
//       <p className="text-sm sm:text-base md:text-[15px] leading-[22px] text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[540px] mt-4 md:mt-4 text-gray-300">
//         FavMedia offers SEO-optimized, mobile-responsive websites. From custom web development to creative UI/UX and branding — we build websites that convert and grow your business.
//       </p>

//       {/* CTA Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-6 w-full sm:w-auto px-4 sm:px-0">
//         <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
//           <button
//             className="px-4 py-3 sm:px-6 sm:py-3 bg-black cursor-pointer text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base"
//             aria-label="Book a free consultation call for website development"
// onClick={() => navigate('/contact')}
//           >
//             Book A Free Call Now
//           </button>
//         </div>
//         <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
//           <button
//             className="px-4 py-3 sm:px-6 sm:py-3 bg-black cursor-pointer text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base"
//             aria-label="Explore professional web design templates"
//                         onClick={()=>navigate('/templates')}

//           >
//             Get Templates
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-black text-white md:min-h-[300px] flex flex-col justify-center items-center py-10 md:py-0 px-4 sm:px-6 lg:px-8 md:pt-[150px] md:mb-10"
      role="banner"
      id="hero"
    >
      {/* Animated Tagline */}
      <div className="p-[1px] mb-10 rounded-full bg-gradient-to-r from-white/20 to-white/0">
        <div className="flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
          <GoDotFill className="animate-pulse text-white" />
          Building Brands That Look Sharp & Grow Fast

        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl text-center lg:text-[72px] leading-tight md:leading-[92px] font-bold text-white max-w-4xl">
        We Help Brands Grow Through{" "}
        <span className="text-gray-300">
          <Typewriter
            words={["Design", "Code", "Content"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-[15px] leading-[22px] text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[540px] mt-4 text-gray-300">
        We build high-performing websites & applications, scale brands with
        social media marketing, and create scroll-stopping video ads & motion
        graphics <br /> everything your business needs to stand out online.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0">
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
          <button
            className="px-4 cursor-pointer py-3 sm:px-6 sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base"
            onClick={() => navigate("/contact")}
          >
            Book a Free Strategy Call
          </button>
        </div>

        <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
          <button
            className="px-4 cursor-pointer py-3 sm:px-6 sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base"
            onClick={() => navigate("/templates")}
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
