import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    title: 'How We Built a Personal Branding Website in 3 Days',
    slug: 'branding-website-in-3-days',
    excerpt: 'Go behind the scenes of how our team at FAVMedia delivered a full personal branding site in just 3 days — design, development, and deployment.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753047857/ChatGPT_Image_Jul_21_2025_03_12_52_AM_wdng5x.png',
    date: '2025-07-07',
  },
  {
    title: 'The Art of Editing: Video Content That Converts',
    slug: 'video-content-that-converts',
    excerpt: 'Learn how our editors transform raw footage into high-converting video content with storytelling, pacing, and branding.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753048477/ChatGPT_Image_Jul_21_2025_03_24_13_AM_bd61ee.png',
    date: '2025-06-25',
  },
  {
    title: 'Top 5 Website Animations to Try in 2025',
    slug: 'top-5-animations-2025',
    excerpt: 'Discover the top 5 animation techniques that make websites feel alive and increase engagement in 2025.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753049030/ChatGPT_Image_Jul_21_2025_03_33_14_AM_hl7n2v.png',
    date: '2025-06-10',
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 text-white min-h-screen bg-black">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>FAVMedia Blogs | Insights, Design Tips & Digital Strategy</title>
        <meta
          name="description"
          content="Explore blog posts from FAVMedia about branding, design, web development, and digital marketing strategy. Stay ahead with creative tips and insights."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FAVMedia Blog" />
        <meta property="og:description" content="Discover insights, tutorials, and industry trends from FAVMedia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.favmedia.in/blogs" />
      </Helmet>

      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Blogs</h1>
        <p className="text-[#bbbbbb] max-w-2xl mx-auto mb-12">
          Insights, tutorials, and behind-the-scenes from the team at FAVMedia. Learn what drives modern digital creativity.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="group cursor-pointer bg-[#0F0F0F] border border-[#a9a9a954] rounded-3xl shadow-[inset_0_0_40px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <img
              src={post.image}
              alt={`Preview of blog: ${post.title}`}
              className="w-full h-62 object-cover rounded-t-3xl filter grayscale hover:grayscale-0 bg-cover"
              loading="lazy"
            />

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-[15px] text-subtext">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center">
                <time
                  className="text-xs text-[#666] mt-4"
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-subtext p-3 border border-[#666] rounded-full transition-transform duration-300 group-hover:-rotate-45">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
