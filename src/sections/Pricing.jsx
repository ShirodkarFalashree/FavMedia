import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaCheck, FaBuilding } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { BsRocket } from 'react-icons/bs';

const plans = [
  {
    name: 'Ready-Made',
    price: '$99',
    period: '/Month',
    description: 'Perfect for individuals and freelancers who need a quick launch with minimal setup.',
    projects: '3 Projects',
    revisions: '2 Revisions',
    features: [
      'Pre-built templates',
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
    price: '$599',
    period: '/Month',
    description: 'Ideal for startups and agencies that want templates personalized to fit their brand.',
    projects: '6 Projects',
    revisions: '5 Revisions',
    features: [
      'All templates unlocked',
      'Custom color, font & layout changes',
      'Responsive optimization',
      'Priority email + chat support',
    ],
    hasGuarantee: false,
    badge: 'Advanced',
    icon: <HiBriefcase className="text-3xl text-white" />,
  },
  {
    name: 'Fully Custom',
    price: '$2,599',
    period: '/Month',
    description: 'Advanced solution for brands needing a unique, scalable, and conversion-optimized site.',
    projects: 'Unlimited Projects',
    revisions: 'Unlimited Revisions',
    features: [
      'Custom website from scratch',
      'Advanced animations & interactions',
      'Performance & SEO optimization',
      'Dedicated 1-on-1 support',
    ],
    hasGuarantee: true,
    badge: 'Recommended',
    icon: <FaBuilding className="text-3xl text-white" />,
  },
];


const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 text-white bg-black">
      {/* Tag */}
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-transparent mb-4">
        <div className="flex items-center justify-center bg-black p-2 rounded-full gap-2">
          <span className="animate-[blink_1s_infinite] text-white">
            <GoDotFill />
          </span>
          <p>Pricing</p>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[32px] sm:text-[48px] font-semibold text-center md:w-[840px] leading-tight mb-4">
        Flexible Plans for Every Need—<br className="hidden sm:block" />
        <span className="text-subtext font-light">Perfect for Agencies, and Startups.</span>
      </h1>

      <p className="text-center md:w-[640px] text-subtext mb-12">
        Our pricing plans are designed to make getting started as effortless as possible. With
        flexible options tailored to suit a variety of needs and budgets.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <div
  key={index}
  className="relative p-6 bg-[#111] rounded-3xl border border-[#2a2a2a] flex flex-col shadow-xl min-h-[600px]"
>
  {/* Badge */}
  <div className="absolute top-4 right-4 px-3 py-1 text-xs bg-[#1f1f1f] border border-[#333] rounded-full text-gray-300">
    {plan.badge}
  </div>

  {/* Icon */}
  <div className="text-3xl mb-2">{plan.icon}</div>

  {/* Main Content */}
  <div className="flex-grow flex flex-col gap-4">
    <h3 className="text-xl font-semibold">{plan.name}</h3>
    <p className="text-3xl font-bold">
      {plan.price}
      <span className="text-base font-medium text-gray-400">{plan.period}</span>
    </p>
    <p className="text-subtext">{plan.description}</p>

    {/* Projects & Revisions */}
    <div className="flex items-center gap-4 text-sm text-white/80">
      <span className="bg-white/10 px-3 py-1 rounded-full">{plan.projects}</span>
      <span className="bg-white/10 px-3 py-1 rounded-full">{plan.revisions}</span>
    </div>

    {/* Features */}
    <ul className="flex flex-col gap-2 mt-4 text-sm">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-gray-300">
          <FaCheck className="text-gray-500" />
          {feature}
        </li>
      ))}
      <li className="flex items-center gap-2 text-gray-500 line-through">
        <FaCheck className="text-gray-500" />
        30-Days Money-back Guarantee
      </li>
      {plan.hasGuarantee && (
        <li className="flex items-center gap-2 text-gray-300">
          <FaCheck className="text-gray-500" />
          30-Days Money-back Guarantee
        </li>
      )}
    </ul>
  </div>

  {/* Button - Always at Bottom */}
  <div className="mt-6 p-[2px] rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
    <button className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
      Book A Free Call Now
    </button>
  </div>
</div>

        ))}
      </div>
    </section>
  );
};

export default Pricing;
