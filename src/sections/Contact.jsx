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
          content="Book a free consultation with FavMedia. We design and develop modern, high-performance websites for growing businesses."
        />
        <meta
          name="keywords"
          content="FavMedia, website development, web design agency, business websites, custom web development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://favmedia.in/contact" />
      </Helmet>

      <section
        id="contact"
        className="relative overflow-hidden py-0 px-4 flex items-center justify-center"
      >
        {/* Black & White Gradient Background */}
        <div className="absolute inset-0 -z-10">
          {/* Soft white glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-[140px]" />

          {/* Secondary glow */}
          <div className="absolute top-1/3 right-[-200px] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        {/* Content Card */}
        <div className="w-full max-w-[2000px] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 md:py-12 mb-4 text-center flex flex-col items-center gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-sm text-white/80">
            <GoDotFill className="text-white" />
            Work with FavMedia
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Let’s Build a Website That Grows Your Business
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            We help brands launch high-quality websites with clean design,
            strong performance, and long-term scalability.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-xl bg-white text-black font-medium
              hover:bg-gray-200 transition-all duration-200"
              aria-label="Book a Free Consultation"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
