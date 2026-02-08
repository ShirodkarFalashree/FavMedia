import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const testimonials = [
  {
    text: "Would recommend to anyone! Absolutely loved the speed and quality.",
    name: "Neha",
    role: "Business Owner",
  },
  {
    text: "Our brand's Insta feed has never looked better. Stellar design!",
    name: "Manju",
    role: "NGO Worker",
  },
  {
    text: "The UI designs fit our dev stack perfectly. Great job!",
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
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-6 text-center relative">
        {/* Section Tag */}
        <div className="mb-10">
          <div className="flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
            <GoDotFill className="animate-pulse text-white" />
            Testimonials
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
          What Our Clients Say
        </h2>

        {/* Quote */}
        <p
          className="
            mt-10
            max-w-2xl
            text-base
            sm:text-lg
            md:text-2xl
            leading-relaxed
            text-white/70
            min-h-[120px]
            flex
            items-center
          "
        >
          “{text}”
        </p>

        {/* Client Info */}
        <div className="mt-10">
          <h4 className="text-base sm:text-lg font-medium text-white">
            {name}
          </h4>
          <p className="mt-1 text-sm text-white/50">{role}</p>
        </div>

        {/* Navigation (Desktop) */}
        <button
          onClick={prev}
          className="
            hidden
            md:flex
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            w-11
            h-11
            rounded-full
            border
            border-white/20
            items-center
            justify-center
            text-white/70
            hover:text-white
            hover:border-white/40
            transition
          "
        >
          <FiArrowLeft size={20} />
        </button>

        <button
          onClick={next}
          className="
            hidden
            md:flex
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            w-11
            h-11
            rounded-full
            border
            border-white/20
            items-center
            justify-center
            text-white/70
            hover:text-white
            hover:border-white/40
            transition
          "
        >
          <FiArrowRight size={20} />
        </button>

        {/* Navigation (Mobile) */}
        <div className="flex md:hidden gap-6 mt-10">
          <button
            onClick={prev}
            className="
              w-11
              h-11
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white/70
              hover:text-white
              hover:border-white/40
              transition
            "
          >
            <FiArrowLeft size={20} />
          </button>

          <button
            onClick={next}
            className="
              w-11
              h-11
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white/70
              hover:text-white
              hover:border-white/40
              transition
            "
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
