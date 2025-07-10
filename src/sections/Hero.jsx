import React from "react";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <div className="bg-black text-white md:min-h-screen flex flex-col justify-center items-center -mt-15 gap-4">
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black">
        <div className="flex items-center justify-center bg-white dark:bg-black p-2 rounded-full gap-2">
          <span className="">
            <GoDotFill />{" "}
          </span>
          <p>Crafting Unique Brand Identities</p>{" "}
        </div>
      </div>
      <h1 className="text-[92px] md:w-[840px] leading-24 text-center">
        Branding that you need Indeed
      </h1>
      <p className="md:w-[540px] text-center">
        Elevate your brand with custom identity and package design. Showcase
        your story through bold visuals and strategic design solutions.
      </p>
      <div className="flex gap-4 ">
        <div className="p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
          <button className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Book A Free Call Now
          </button>
        </div>
        <div className="p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
          <button className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Get Templates
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;
