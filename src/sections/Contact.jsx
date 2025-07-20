import React from "react";
import { GoDotFill } from "react-icons/go";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Book a free consultation with FavMedia. We offer flexible website development services including templates, custom design, and full-stack development."
        />
        <meta
          name="keywords"
          content="FavMedia, website development, custom website design, responsive web design, web development agency, book a free call"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://favmedia.in/contact" />
      </Helmet>

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-16 px-4 md:px-0"
      >
        <div className="w-full max-w-[840px] p-6 rounded-2xl flex flex-col items-center gap-6 text-center">
          {/* Badge */}
          <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent">
            <div className="flex items-center justify-center bg-white dark:bg-black p-2 rounded-full gap-2">
              <span className="animate-[blink_1s_infinite]">
                <GoDotFill />
              </span>
              <span className="font-semibold">Work with us</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight md:leading-[92px] font-bold text-white max-w-4xl">
            Ready to Elevate Your Brand with Next-Gen Website Innovation?
          </h1>

          {/* Subtext */}
          <p className="text-lg text-subtext max-w-2xl">
            Take the next step with FavMedia. Whether you need a quick launch or a completely custom design, we’re here to bring your digital vision to life.
          </p>

          {/* CTA Button */}
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-300 via-black to-gray-300 shadow-lg">
              <button
                className="px-6 py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition duration-200"
                aria-label="Book a Free Call"
                            onClick={() => navigate("/contact")}

              >
                Book A Free Call Now
              </button>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
