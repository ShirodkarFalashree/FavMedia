import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    text: " Would recommend to anyone! Absolutely loved and quality. Would recommend to anyone Absolutely loved the speed and quality. Would recommend to anyone Absolutely loved the speed and quality. Would recommend to anyone",
    name: "Neha",
    role: "Business Owner",
  },
  {
    text: "Our brand's Insta feed has never looked better. Stellar design! Our brand's Insta feed has never looked better. Our brand's Insta feed has never looked better. Stellar Our brand's Insta feed has never looked better. ",
    name: "Manju",
    role: "NGO Worker",
  },
  {
    text: "The UI designs fit our dev fit our dev fit our dev fit our dev fit our dev stack perfectly. Great job! The UI designs fit our dev stack perfectly. Great job! The UI designs fit our dev stack perfectly. Great job! ",
    name: "GitHub User",
    role: "Frontend Developer",
  },
  
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const { text, name, role } = testimonials[current];

  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-6 text-center relative">
        {/* Section Tag */}
        <span className="inline-block mb-4 px-4 py-1 text-sm border border-white/20 rounded-full text-white/70">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          What Our Clients Say
        </h2>

        {/* Quote */}
        <p className="mt-16 text-xl md:text-2xl w-[700px] h-[140px] leading-relaxed text-white/70">
          “{text}”
        </p>

        {/* Client Info */}
        <div className="mt-20">
          <h4 className="text-lg font-medium text-white">
            {name}
          </h4>
          <p className="mt-1 text-sm text-white/50">
            {role}
          </p>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition"
        >
          <FiArrowLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
