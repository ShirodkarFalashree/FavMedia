import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaCheck, FaBuilding } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { BsRocket } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



const plans = [
  {
    name: 'Ready-Made',
    price: '₹4,999',
    period: ' (One-time)',
    description:
      'Ideal for individuals, freelancers, and solopreneurs needing a fast, no-code website solution.',
    projects: 'All templates',
    revisions: 'All code files',
    features: [
      'Launch-ready website templates',
      'Mobile-responsive layouts',
      'Fast setup & deployment',
      'Basic support (Email)',
    ],
    hasGuarantee: false,
    badge: 'Most Pick',
    icon: <BsRocket className="text-3xl text-white" />,
  },
  {
    name: 'Templates + Customization',
    price: '₹14,999',
    period: ' (One-time)',
    description:
      'Perfect for startups and growing businesses seeking personalized design without full development cost.',
    projects: 'All templates',
    revisions: '2 Free Revisions',
    features: [
      'Unlock all premium templates',
      'Custom brand colors, fonts & layouts',
      'Responsive design optimization',
      'Priority email & chat support',
    ],
    hasGuarantee: false,
    badge: 'Advanced',
    icon: <HiBriefcase className="text-3xl text-white" />,
  },
  {
    name: 'Fully Custom',
    price: 'Starting at ₹29,999',
    period: '(Price varies based on features)',
    description:
      'Enterprise-grade website development tailored from scratch for high-converting, scalable brand presence.',
    projects: 'Your wish, our command ',
    revisions: '3 Free Revisions',
    features: [
      'Custom website built from the ground up',
      'Interactive animations & advanced UX',
      'Performance and SEO optimization',
      'Dedicated 1-on-1 support',
    ],
    hasGuarantee: true,
    badge: 'Recommended',
    icon: <FaBuilding className="text-3xl text-white" />,
  },
];

// The rest of your Pricing component remains the same

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-20 text-white bg-black"
      aria-labelledby="pricing-section-title"
    >
      {/* Section Tag */}
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent mb-4">
        <div className="flex items-center justify-center bg-black p-2 rounded-full gap-2">
          <span className="animate-[blink_1s_infinite] text-white" aria-hidden="true">
            <GoDotFill />
          </span>
          <p>Pricing</p>
        </div>
      </div>

      {/* Main Heading */}
      <header className="text-center mb-12">
        <h2
          id="pricing-section-title"
          className="text-[32px] sm:text-[48px] font-semibold leading-tight md:w-[840px] mx-auto"
        >
          Flexible Website Plans for Every Business Size
          <br className="hidden sm:block" />
          <span className="text-subtext font-light block mt-2">
            Tailored for Agencies, Startups, and Entrepreneurs
          </span>
        </h2>
        <p className="text-center md:w-[640px] mx-auto text-subtext mt-4">
          Choose from fast-launch templates, semi-custom branding, or a fully bespoke website solution—optimized for performance, design, and SEO.
        </p>
      </header>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <article
            key={index}
            className="relative p-6 bg-[#111] rounded-3xl border border-[#2a2a2a] flex flex-col shadow-xl min-h-[600px]"
            aria-label={`${plan.name} Website Plan`}
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 text-xs bg-[#1f1f1f] border border-[#333] rounded-full text-gray-300">
              {plan.badge}
            </div>

            {/* Icon */}
            <div className="text-3xl mb-2">{plan.icon}</div>

            {/* Plan Details */}
            <div className="flex-grow flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{plan.name} Plan</h3>

              {plan.name == "Fully Custom" ? (<p className="text-3xl font-bold">
                <p className='mb-[-12px]'>{plan.price}</p>
                <span className="text-base font-medium text-gray-400 ">{plan.period}</span>
              </p>) : (<p className="text-3xl font-bold">
                {plan.price}
                <span className="text-base font-medium text-gray-400">{plan.period}</span>
              </p>)}
              <p className="text-subtext">{plan.description}</p>

              {/* Project & Revision Info */}
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="bg-white/10 px-3 py-1 rounded-full">{plan.projects}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">{plan.revisions}</span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-2 mt-4 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <FaCheck className="text-gray-500" />
                    {feature}
                  </li>
                ))}
                <li
                  className={`flex items-center gap-2 ${plan.hasGuarantee ? 'text-gray-300' : 'text-gray-500 line-through'
                    }`}
                >
                  <FaCheck className="text-gray-500" />
                  30-Day Money-Back Guarantee
                </li>
              </ul>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%)]">
              <button
                className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label={`Book a free website consultation for ${plan.name}`}
                onClick={() => navigate("/contact")}

              >
                Book a Free Call Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
