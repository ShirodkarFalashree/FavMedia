import React from "react";
import { GoDotFill } from "react-icons/go";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-[840px] p-6 rounded-2xl flex flex-col items-center gap-6 justify-center ">
        
        <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent">
          <div className="flex items-center justify-center bg-white dark:bg-black p-2 rounded-full gap-2">
            <span className="animate-[blink_1s_infinite] ">
              <GoDotFill />
            </span>
            <p>Work with us</p>{" "}
          </div>
        </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[92px]  leading-tight md:leading-[92px] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[840px]">
          Ready to Elevate Your Brand with Next-Gen Innovation?
        </h1>
        <p className="text-center md:w-[640px] text-subtext">
          Ready to take the next step? Join us now and start transforming your
          vision into reality with expert support.
        </p>
        <div className="p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
          <button className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Book A Free Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
