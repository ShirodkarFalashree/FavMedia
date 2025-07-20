import React from 'react';
import {
  FaCheckCircle,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const TaskCard = ({ icon, text }) => (
  <article
    className="flex items-center gap-3 bg-black/80 text-white px-4 py-2 rounded-xl shadow-md backdrop-blur-md w-full"
    aria-label="Client testimonial card"
  >
    <span className="text-xl" aria-hidden="true">
      {icon}
    </span>
    <blockquote className="text-sm font-medium max-w-[200px]">{text}</blockquote>
  </article>
);

const Testimonials = () => {
  const testimonials = [
    {
      icon: <FaWhatsapp />,
      text: 'Absolutely loved the speed and quality. Would recommend to anyone!',
    },
    {
      icon: <FaInstagram />,
      text: "Our brand's Insta feed has never looked better. Stellar design!",
    },
    {
      icon: <FaGithub />,
      text: 'The UI designs fit our dev stack perfectly. Great job!',
    },
    {
      icon: <FaTwitter />,
      text: 'Quick turnaround and creative results. You earned a follower!',
    },
    {
      icon: <FaInstagram />,
      text: 'Perfect aesthetics for social media. Will work again!',
    },
  ];

  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="flex flex-col lg:flex-row justify-around items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-black text-white"
      aria-labelledby="testimonials-title"
    >
      {/* Animated Testimonial Feed */}
      <div
        className="relative w-full max-w-sm sm:max-w-md h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-8 lg:mb-0"
        style={{
          background: 'radial-gradient(circle at center, #393838 0%, #000 70%)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden px-4">
          <div className="flex flex-col gap-3 sm:gap-4 animate-scrollUp">
            {repeatedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className={`transform ${
                  idx % 3 === 0
                    ? 'rotate-1'
                    : idx % 3 === 1
                    ? '-rotate-2'
                    : 'rotate-2'
                } transition duration-300`}
              >
                <TaskCard icon={t.icon} text={t.text} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 pointer-events-none"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
        <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent mb-4 w-fit">
          <div className="flex items-center justify-center bg-black p-2 rounded-full gap-2">
            <GoDotFill className="animate-[blink_1s_infinite] text-white" aria-hidden="true" />
            <p className="text-sm">Client Reviews</p>
          </div>
        </div>

        <h2
          id="testimonials-title"
          className="text-3xl sm:text-5xl font-semibold mb-4"
        >
          What Our Clients Say About Us
        </h2>

        <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-md">
          Honest reviews from entrepreneurs, creators, and brands who’ve trusted us with their
          website and digital design. Discover what sets us apart.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-left" aria-label="Why people trust us">
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-white" aria-hidden="true" />
            <span>100% verified testimonials from real clients</span>
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-white" aria-hidden="true" />
            <span>Trusted by startups, influencers, and businesses worldwide</span>
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-white" aria-hidden="true" />
            <span>Continual improvements inspired by your feedback</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
