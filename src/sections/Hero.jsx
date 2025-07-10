import React from "react";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <div className="bg-black text-white md:min-h-[300px]  flex flex-col justify-center items-center py-10 md:py-0 gap-0 md:gap-2 px-4 sm:px-6 lg:px-8 md:mt-[60px] mb-10">
      {/* Animated tagline */}
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-6">
        <div className="flex items-center justify-center bg-white dark:bg-black p-2 rounded-full gap-2 text-xs sm:text-sm">
          <span className="animate-[blink_1s_infinite]">
            <GoDotFill />
          </span>
          <p>Crafting Unique Brand Identities</p>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[92px]  leading-tight md:leading-[92px] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[840px]">
        Branding that you need Indeed
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-[15px] leading-[22px] text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[540px] mt-4 md:mt-4 text-subtext">
        Elevate your brand with custom identity and package design. Showcase
        your story through bold visuals and strategic design solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-6 w-full sm:w-auto px-4 sm:px-0">
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
          <button className="px-4 py-3 sm:px-6 sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base">
            Book A Free Call Now
          </button>
        </div>
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
          <button className="px-4 py-3 sm:px-6 sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base">
            Get Templates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;