import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: 'How We Built a Personal Branding Website in 3 Days',
    slug: 'branding-website-in-3-days',
    excerpt: 'Go behind the scenes of how our team at FAVMedia...',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80',
    date: 'July 7, 2025',
  },
  {
    title: 'The Art of Editing: Video Content That Converts',
    slug: 'video-content-that-converts',
    excerpt: 'Learn the strategies our editors use to turn raw footage...',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80',
    date: 'June 25, 2025',
  },
  {
    title: 'Top 5 Website Animations to Try in 2025',
    slug: 'top-5-animations-2025',
    excerpt: 'Animations are no longer just "nice-to-have"...',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80',
    date: 'June 10, 2025',
  },
];


const Blogs = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 text-white min-h-screen bg-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Latest Blogs</h1>
      <p className="text-center text-[#bbbbbb] max-w-2xl mx-auto mb-12">
        Insights, tutorials, and behind-the-scenes from the team at FAVMedia. Learn what drives modern digital creativity.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="group cursor-pointer bg-[#0F0F0F] border border-[#a9a9a954] rounded-3xl shadow-[inset_0_0_40px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-62 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">{post.title}</h2>
                <p className="text-sm sm:text-[15px] text-subtext">{post.excerpt}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className="text-xs text-[#666] mt-4">{post.date}</p>
                <span className='text-subtext p-3 border border-[#666] rounded-full transition-transform duration-300 group-hover:-rotate-45'>
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
