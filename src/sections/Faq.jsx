import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What’s included in your ready-made templates?",
    answer:
      "Our ready-made templates come with a complete layout, responsive design, pre-styled components, and basic animations — ideal for fast and professional launches.",
  },
  {
    question: "Can I request changes to a ready-made template?",
    answer:
      "Yes, we offer customization services including content updates, color and font changes, layout restructuring, and animation tweaks to align with your brand.",
  },
  {
    question: "I need a fully custom website. How do I get started?",
    answer:
      "Book a free call with us. We’ll understand your goals, brand identity, and technical needs to design and develop a fully custom site from scratch.",
  },
  {
    question: "How do I choose between a template and a custom website?",
    answer:
      "If you're short on time or budget, templates are perfect. For unique branding, complex features, or growth-focused designs, custom websites are ideal.",
  },
  {
    question: "Can I upgrade from a template to a custom site later?",
    answer:
      "Absolutely. Many clients begin with a template and transition to a custom solution as their business grows. We're here to scale with you.",
  },
  {
    question: "What will I get after purchasing?",
    answer:
      "Depending on your package, you’ll receive the codebase, relevant assets (images, fonts, etc.), documentation, and access to future updates and support.",
  },
];


const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-[#333] rounded-xl overflow-hidden">
    <button
      className="w-full flex justify-between items-center p-4  text-left text-white bg-[#111] hover:bg-[#1a1a1a] transition"
      onClick={onToggle}
    >
      <span className="text-sm sm:text-base">{question}</span>
      {isOpen ? <FiMinus /> : <FiPlus />}
    </button>
    {isOpen && (
      <div className="px-4 pb-4 text-sm text-subtext bg-[#111]">
        {answer}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 text-white bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">
        {/* Left Content */}
<div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent mb-4 w-fit">
            <div className="flex items-center justify-center bg-black p-2 rounded-full gap-2">
              <GoDotFill className="animate-[blink_1s_infinite] text-white" />
              <p className="text-sm">FAQ</p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
            Frequently <br className="hidden sm:block" />
            Asked Questions
          </h2>
          <p className="text-subtext text-sm sm:text-base max-w-md">
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
