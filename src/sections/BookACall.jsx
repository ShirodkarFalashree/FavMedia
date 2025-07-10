import React from "react";
import { useNavigate } from "react-router-dom";

const BookACall = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-white">
      {/* Wrapper with gradient border */}
      <div className="p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
        {/* Content box */}
        <div className="md:w-[840px] p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 justify-between bg-black">
          {/* Text Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold mb-2">Need Help Deciding?</h2>
            <p className="text-subtext max-w-[500px]">
              Not sure which plan is right for you? Let's hop on a quick call and we'll help you pick
              the perfect solution tailored to your goals.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="text-sm sm:text-[15px] px-6 py-3 transition-colors duration-300 text-subtext hover:text-white border border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
            onClick={() => navigate("/templates")}
          >
            Book A Free Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
