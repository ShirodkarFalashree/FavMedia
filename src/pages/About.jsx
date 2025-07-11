import React from "react";
import img from "../assets/process1.avif"
const founders = [
  {
    name: "Falashree Shirodkar",
    role: "Co-founder, FAVMedia",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: `Falashree is the co-founder of FAVMedia — a modern agency focused on website development, video editing, and digital strategy. As a Computer Engineering student and full-stack developer, she has worked with startups and businesses across industries, building sleek, performance-driven solutions. Alongside leading the team, she manages client relations and product delivery, and also actively creates content around tech and design.`,
    highlights: [
      "Full-Stack Web Developer (MERN, .NET)",
      "Freelancer turned agency owner",
      "Internship at Eduswitch Solutions",
      "Loves painting, badminton, and building brands",
    ],
  },
  {
    name: "Avishkar Kakade",
    role: "Co-founder, FAVMedia",
    image:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: `Avishkar is the driving force behind operations and creative direction at FAVMedia. With strong leadership and a deep passion for digital business, he leads strategy, marketing, and content creation. Avishkar brings structure and vision into projects, ensuring that every client receives not just a service — but a business transformation.`,
    highlights: [
      "Creative Strategist & Business Lead",
      "Expert in lead generation & client communication",
      "Co-leader of “The Dolphins” Hackathon Team",
      "Focused on growth, branding, and impact",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center relative">
        <div className="text-center px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white space-y-4">
            <div>WE ARE AT THE HEART OF DIGITAL INNOVATION!</div>
            <div>HELPING BRANDS STAND OUT WITH DESIGN, STRATEGY, AND CODE.</div>
            <div>BUILDING EXPERIENCES THAT CONNECT, CONVERT, AND GROW.</div>
          </h1>
        </div>

<img src={img} alt="" className="h-[600px] w-[600px]"/>
        <p className="text-[#cccccc] text-lg md:text-xl max-w-3xl mx-auto">
          FAVMedia is a creative agency built for the modern era — blending
          code, design, and strategy to help brands stand out in the digital
          world. From building interactive websites to crafting engaging videos,
          we help creators and businesses connect through storytelling and tech.
        </p>
        <div className="absolute w-60 h-60 bg-[#2a2a2a] rounded-full blur-3xl opacity-20 top-10 left-1/2 -translate-x-1/2 z-0" />
      </section>

      {/* Founders Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Meet Our Visionaries
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="relative bg-[#0D0D0D] p-8 rounded-2xl border border-[#333] shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              {/* Lightning icon */}
              <div className="absolute top-4 right-4 text-[#4a4a4a] opacity-10 z-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="relative z-10 flex items-center mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#4a4a4a] shadow-lg mr-5"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-[#e0e0e0] mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-[#aaaaaa] text-base italic">
                    {founder.role}
                  </p>
                </div>
              </div>
              <p className="text-[#cccccc] mb-6 leading-relaxed">
                {founder.bio}
              </p>
              <ul className="text-[#bbbbbb] space-y-3 text-sm">
                {founder.highlights.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#888] mr-2 mt-1">✔️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We explore new technologies and creative approaches to deliver cutting-edge solutions.",
            },
            {
              title: "Client Success",
              desc: "Your success is our priority. We build strong partnerships and drive real growth.",
            },
            {
              title: "Impactful Design",
              desc: "We craft stunning, functional designs that leave a lasting impression.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-[#0D0D0D] p-8 rounded-2xl border border-[#333] shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#e0e0e0]">
                {value.title}
              </h3>
              <p className="text-[#cccccc]">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
