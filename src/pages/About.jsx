import React from "react";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About FAVMedia</h2>

        {/* Subheading / Mission */}
        <p className="text-subtext text-base mb-4">
          FAVMedia helps brands go digital — fast, beautifully, and efficiently.
          Whether you're a solo founder or a scaling startup, our flexible web
          solutions are designed to match your pace.
        </p>

        {/* Service Info */}
        <p className="text-gray-400 mb-6">
          We offer everything from ready-made templates and tailored customizations
          to fully custom websites built from scratch — all crafted with performance,
          personality, and purpose in mind.
        </p>

        {/* Vision */}
        <p className="text-subtext text-sm">
          At FAVMedia, we believe great design shouldn't slow you down — it should
          launch you forward.
        </p>
      </div>
    </section>
  );
};

export default About;
