import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import img from "../assets/system.png";
import fal from "../assets/falashree.jpg";
import avi from "../assets/avishkar.jpg";
import CompaniesStrip2 from "../components/CompaniesStrip2";
import { CircleChevronDown } from "lucide-react";

const founders = [
  {
    name: "Falashree Shirodkar",
    role: "Co-founder, FAVMedia",
    image: fal,
    bio: `Falashree is the co-founder of FAVMedia — a digital-first agency offering website development, video editing, and creative strategy. With a background in full-stack development, she has built impactful solutions for startups and brands alike.`,
  },
  {
    name: "Avishkar Kakade",
    role: "Co-founder, FAVMedia",
    image: avi,
    bio: `Avishkar leads operations and digital direction at FAVMedia. His passion for content and strategic marketing makes him an integral part of the agency’s success and client growth journey.`,
  },
];

const stats = [
  {
    title: "+15 Clients",
    description: "Worked with creators, startups & brands across industries",
  },
  {
    title: "And Growing...",
    description: "New collaborations, projects, and opportunities every week",
  },
];

const About = () => {
  const nextSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Helmet>
        <meta
          name="description"
          content="Learn about FavMedia, a creative website development and digital strategy agency."
        />
        <meta
          name="keywords"
          content="FavMedia, website development, digital agency, creative agency"
        />
        <link rel="canonical" href="https://favmedia.in/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* HERO SECTION */}
      <section
        id="about-hero"
        className="md:min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12"
      >
        <div className="text-left mt-32 sm:mt-40 md:mt-56 lg:mt-72">
          <p className="text-3xl sm:text-5xl md:text-7xl text-white/20">
            See
          </p>

          <h1
            className="
              text-[60px]
              sm:text-[80px]
              md:text-[140px]
              lg:text-[220px]
              font-semibold
              tracking-tight
              leading-none
            "
          >
            WHO WE ARE
          </h1>
        </div>

        <div className="hidden md:flex justify-center">
          <CircleChevronDown
            onClick={() =>
              nextSectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="
              mt-12 sm:mt-16 md:mt-20
              text-white/30
              hover:text-white
              transition
              cursor-pointer
              animate-bounce
            "
            size={36}
          />
        </div>
      </section>

      {/* COMPANIES STRIP */}
      <div
        ref={nextSectionRef}
        className="flex flex-col mt-12 sm:mt-16 gap-4 overflow-hidden"
      >
        <CompaniesStrip2 duration={5} />
        <CompaniesStrip2 duration={10} />
        <CompaniesStrip2 duration={7} />
      </div>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="w-full px-4 sm:px-6 py-16 md:py-24 bg-black"
      >
        <div className="bg-[#0D0D0D] border border-[#262626] rounded-3xl p-6 sm:p-10 md:p-14 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-white/50">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Built to Help Brands <br /> Grow Online
            </h2>
          </div>

          <div className="md:w-2/3 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              FavMedia began in 2025 with a simple mission — to help startups,
              creators, and businesses build a powerful digital presence.
            </p>

            <p className="mt-4">
              Our team works at the intersection of{" "}
              <span className="text-white">design, technology, and content</span>{" "}
              to create digital experiences that perform.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 hover:scale-[1.02] transition"
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

      {/* FOUNDERS */}
      <section id="team" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Meet Our Founders
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          Behind FavMedia is a team of passionate builders and marketers.
        </p>

        <div className="grid gap-16 md:grid-cols-2">
          {founders.map((member, idx) => (
            <div
              key={idx}
              className="relative bg-[#0D0D0D] rounded-2xl p-6 sm:p-8 border border-[#222]"
            >
              <div
                className="
                  absolute
                  -top-14
                  sm:-top-16
                  left-1/2
                  -translate-x-1/2
                  w-[110px]
                  h-[110px]
                  sm:w-[140px]
                  sm:h-[140px]
                  rounded-full
                  overflow-hidden
                  border-4
                  border-[#222]
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-16 sm:mt-20 text-center">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm text-white mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-[#cccccc] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section
        id="values"
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              desc: "Exploring new technologies and creative approaches.",
            },
            {
              title: "Client Success",
              desc: "Building partnerships that drive real growth.",
            },
            {
              title: "Impactful Design",
              desc: "Designs that look stunning and perform.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-[#0D0D0D] p-8 rounded-2xl border border-[#333]"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {value.title}
              </h3>
              <p className="text-[#cccccc] text-sm sm:text-base">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
