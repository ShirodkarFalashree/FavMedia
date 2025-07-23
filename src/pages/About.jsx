import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import img from "../assets/system.png";
// import img from "../assets/system2.jpg";
import fal from '../assets/falashree.png'
import avi from '../assets/avishkar.jpg'
import CompaniesStrip2 from "../components/CompaniesStrip2";
import team from '../assets/team.jpg'
const founders = [
  {
    name: "Falashree Shirodkar",
    role: "Co-founder, FAVMedia",
    image:fal,
    bio: `Falashree is the co-founder of FAVMedia — a digital-first agency offering website development, video editing, and creative strategy. With a background in full-stack development, she has built impactful solutions for startups and brands alike.`,
  },
  {
    name: "Avishkar Kakade",
    role: "Co-founder, FAVMedia",
    image:avi,
    bio: `Avishkar leads operations and digital direction at FAVMedia. His passion for content and strategic marketing makes him an integral part of the agency’s success and client growth journey.`,
  },
];

const stats = [
  {
    title: "+15 Clients",
    description: "Worked with creators, startups & brands across industries",
  },
  {
    title: "+30 Templates Sold",
    description: "Modern website & design templates crafted with purpose",
  },
  {
    title: "And Growing...",
    description: "New collaborations, projects, and opportunities every week",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Helmet>
        <meta
          name="description"
          content="Learn about FavMedia, a creative website development and digital strategy agency. Meet our founders, explore our mission, and see how we help brands grow online."
        />
        <meta
          name="keywords"
          content="FavMedia, website development, digital agency, creative agency, co-founders, custom website design, India web agency"
        />
        <link rel="canonical" href="https://favmedia.in/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        id="about-hero"
        className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-10">
          We are at the heart of digital innovation — helping brands stand out
          with design, strategy, and code.
        </h1>
        <img
          src={img}
          alt="Creative process at FavMedia"
          className="w-full max-w-[600px] mx-auto object-contain rounded-4xl filter grayscale"
        />
        <div className="flex flex-col mt-16 gap-4">
          <CompaniesStrip2 duration={5} />
          <CompaniesStrip2 duration={10} />
          <CompaniesStrip2 duration={7} />
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="w-full px-6 py-16 md:py-24">
        <div className="bg-[#0D0D0D] border border-[#333] rounded-3xl p-6 md:p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="relative w-full md:max-w-sm">
            <img
              src={team}
              alt="FavMedia team working together"
              className="rounded-2xl w-full object-cover border border-[#1a1a1a]"
            />
            <div className="absolute bottom-[-20px] left-[-20px] bg-white text-black font-extrabold rounded-full w-24 h-24 flex items-center justify-center text-xl border border-[#444] text-center">
              OUR <br /> STORY
            </div>
          </div>
          <div className="max-w-xl text-[#cccccc] text-base md:text-lg">
            <p>
              FavMedia began in 2023 with a mission to empower startups, creators, and businesses with powerful digital presence. Our team of developers, strategists, and creatives blends code and design to craft websites that convert, connect, and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="team" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Meet Our Founders
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          Behind FavMedia is a team of passionate builders, coders, and marketers
          — led by founders committed to pushing creative boundaries.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {founders.map((member, idx) => (
            <div
              key={idx}
              className="relative bg-[#0D0D0D] rounded-2xl p-6 md:p-8 border border-[#222] shadow-lg"
            >
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-[#222]">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm text-white mt-1 mb-4">{member.role}</p>
                <p className="text-[#cccccc] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Our Core Values</h2>
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
