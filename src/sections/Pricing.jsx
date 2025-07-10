import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/Month',
    description: 'Perfect for individuals and freelancers starting out.',
    projects: '100+ Projects',
    revisions: '75+ Revisions',
    features: [
      'All templates unlocked',
      'Unlimited Licenses',
      'Lifetime Updates',
      'Email support',
    ],
    hasGuarantee: false,
    badge: 'Most Pick',
    icon: '✈️',
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/Month',
    description: 'Ideal for growing agencies and small businesses.',
    projects: '150+ Projects',
    revisions: '125+ Revisions',
    features: [
      'All templates unlocked',
      'Unlimited Licenses',
      'Lifetime Updates',
      'Email support',
    ],
    hasGuarantee: false,
    badge: 'Advanced',
    icon: '👜',
  },
  {
    name: 'Enterprise',
    price: '$2,599',
    period: '/Month',
    description: 'Advanced solutions for large teams and startups.',
    projects: '180+ Projects',
    revisions: '140+ Revisions',
    features: [
      'All templates unlocked',
      'Unlimited Licenses',
      'Lifetime Updates',
      'Email support',
    ],
    hasGuarantee: true,
    badge: 'Recommended',
    icon: '🖥️',
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
            className="relative p-6 bg-[#111] rounded-3xl border border-[#2a2a2a] flex flex-col gap-4 shadow-xl"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 text-xs bg-[#1f1f1f] border border-[#333] rounded-full text-gray-300">
              {plan.badge}
            </div>

            {/* Icon */}
            <div className="text-3xl">{plan.icon}</div>

            {/* Title & Price */}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold">
              {plan.price}
              <span className="text-base font-medium text-gray-400">{plan.period}</span>
            </p>

            {/* Description */}
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
                  <FaCheck className="text-purple-500" />
                  {feature}
                </li>
              ))}
              <li className="flex items-center gap-2 text-gray-500 line-through">
                <FaCheck className="text-purple-500" />
                30-Days Money-back Guarantee
              </li>
              {plan.hasGuarantee && (
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCheck className="text-purple-500" />
                  30-Days Money-back Guarantee
                </li>
              )}
            </ul>

            {/* CTA Button */}
            <button className="mt-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all text-sm py-3 rounded-xl font-medium">
              Book an Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
