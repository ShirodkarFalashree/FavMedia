import React from "react";
import img from "../assets/process1.avif";
import CompaniesStrip2 from "../components/CompaniesStrip2";

const founders = [
  {
    name: "Falashree Shirodkar",
    role: "Co-founder, FAVMedia",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: `Falashree is the co-founder of FAVMedia — a modern agency focused on website development, video editing, and digital strategy. As a Computer Engineering student and full-stack developer, she has worked with startups and businesses across industries, building sleek, performance-driven solutions.`,
  },
  {
    name: "Avishkar Kakade",
    role: "Co-founder, FAVMedia",
    image:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: `Avishkar is the driving force behind operations and creative direction at FAVMedia. With strong leadership and a deep passion for digital business, he leads strategy, marketing, and content creation.`,
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
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-center relative">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl my-6 font-extrabold leading-tight tracking-tight space-y-4">
            <div>WE ARE AT THE HEART OF DIGITAL INNOVATION! HELPING BRANDS STAND OUT WITH DESIGN, STRATEGY, AND CODE. BUILDING EXPERIENCES THAT CONNECT, CONVERT, AND GROW.</div>
       
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <img
            src={img}
            alt=""
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col mt-16 gap-4">
          <CompaniesStrip2 duration={5} />
          <CompaniesStrip2 duration={10} />
          <CompaniesStrip2 duration={7} />
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full px-6 py-16 md:py-24 flex justify-center items-center">
        <div className="bg-[#0D0D0D] border border-[#333] rounded-3xl p-6 md:p-12 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-2xl">
          <div className="relative w-full md:max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Team"
              className="rounded-2xl w-full h-auto object-cover border border-[#1a1a1a]"
            />
            <div className="absolute bottom-[-20px] left-[-20px] bg-white text-black font-bold rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-md text-sm border border-[#444]">
              Our <br /> Story
            </div>
          </div>

          <div className="max-w-xl text-[#cccccc] text-base md:text-lg">
            <p>
              At FAVMedia, we started with a simple yet powerful mission: to
              help businesses create smart, impactful, and data-driven content.
              Since 2023, a team of developers, marketers, and creatives has
              come together to build an agency that blends technology and
              storytelling into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white font-sans">
        <div className="max-w-5xl mx-auto px-6 md:px-0">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Our Team
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          We’re a passionate team of innovators, problem-solvers, and creative
          thinkers dedicated to making a difference and inspiring.
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
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold">
                  {member.name.split(" ")[0]}
                  <span className="text-white">
                    {" "}
                    {member.name.split(" ")[1]}
                  </span>
                </h3>
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
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
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
