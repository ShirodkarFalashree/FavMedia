import React from 'react'

const founders = [
  {
    name: 'Falashree Shirodkar',
    role: 'Co-founder, FAVMedia',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: `Falashree is the co-founder of FAVMedia — a modern agency focused on website development, video editing, and digital strategy. As a Computer Engineering student and full-stack developer, she has worked with startups and businesses across industries, building sleek, performance-driven solutions. Alongside leading the team, she manages client relations and product delivery, and also actively creates content around tech and design.`,
    highlights: [
      'Full-Stack Web Developer (MERN, .NET)',
      'Freelancer turned agency owner',
      'Internship at Eduswitch Solutions',
      'Loves painting, badminton, and building brands',
    ],
  },
  {
    name: 'Avishkar Kakade',
    role: 'Co-founder, FAVMedia',
    image:
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: `Avishkar is the driving force behind operations and creative direction at FAVMedia. With strong leadership and a deep passion for digital business, he leads strategy, marketing, and content creation. Avishkar brings structure and vision into projects, ensuring that every client receives not just a service — but a business transformation.`,
    highlights: [
      'Creative Strategist & Business Lead',
      'Expert in lead generation & client communication',
      'Co-leader of “The Dolphins” Hackathon Team',
      'Focused on growth, branding, and impact',
    ],
  },
]

const Founders = () => {
  return (
    <section className="md:pt-36 py-16 px-6 md:px-12 text-white">
      {/* Agency Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About FAVMedia</h2>
        <p className="text-[#cccccc] text-base md:text-lg leading-relaxed">
          FAVMedia is a creative agency built for the modern era — blending code, design, and strategy to help brands stand
          out in the digital world. From building interactive websites to crafting visually engaging videos, we help
          entrepreneurs, creators, and businesses connect with their audience through impactful storytelling and solid tech.
        </p>
      </div>

      {/* Founders Cards */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-10">Meet the Founders</h2>
      <div className="grid gap-12 md:grid-cols-2">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
            <p className="text-[#bbbbbb] mb-4 italic">{founder.role}</p>
            <p className="text-[#cccccc] mb-4">{founder.bio}</p>
            <ul className="list-disc list-inside text-sm text-[#aaaaaa] space-y-1">
              {founder.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Founders
