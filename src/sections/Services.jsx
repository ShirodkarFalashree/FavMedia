import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoFlashOutline } from 'react-icons/io5';

const Services = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center mb-[80px] md:mb-[160px] px-8 md:px-10"
      aria-label="Web development services offered by FavMedia"
    >
      {/* Services tag */}
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-10">
        <div className="flex items-center justify-center text-xs sm:text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
          <span className="animate-[blink_1s_infinite]" aria-hidden="true">
            <GoDotFill />
          </span>
          <p>Services</p>
        </div>
      </div>

      {/* Heading section */}
      <div className="text-center flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] md:leading-[50px]">
          What We Provide
        </h2>
        <p className="text-subtext w-full sm:max-w-[600px] md:w-full text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]">
          FavMedia offers fast and flexible web development services — choose a ready-to-go template, personalize it to match your brand, or get a fully custom website crafted from scratch.
        </p>
      </div>

      {/* Services cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {/* Card 1 - Ready-Made Templates */}
        <div
          className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
          role="article"
          aria-label="Ready-made website templates"
        >
          <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
            <IoFlashOutline className="text-center shadow-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
            Ready-Made <br /> Templates
          </h3>
          <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
          <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
            Launch your website quickly using our pre-designed, mobile-optimized templates. Perfect for startups and small businesses.
          </p>
        </div>

        {/* Card 2 - Templates + Customization */}
        <div
          className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
          role="article"
          aria-label="Custom tweaks to website templates"
        >
          <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
            <IoFlashOutline className="text-center shadow-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
            Templates + <br /> Customization
          </h3>
          <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
          <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
            Choose a template and let us personalize it with brand colors, content, animations, and features tailored for your audience.
          </p>
        </div>

        {/* Card 3 - Fully Custom Websites */}
        <div
          className="border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center"
          role="article"
          aria-label="Fully custom website development"
        >
          <div className="text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]">
            <IoFlashOutline className="text-center shadow-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]">
            Fully Custom <br /> Websites
          </h3>
          <div className="w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]"></div>
          <p className="text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext">
            Need something built from the ground up? We create high-performance, scalable websites tailored to your business objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
