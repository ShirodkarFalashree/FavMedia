import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from '../components/BlogPosts';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  // Find the blog that matches the slug
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="text-white p-10 min-h-screen bg-black">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <button
          onClick={() => navigate('/blogs')}
          className="mt-4 text-blue-400 underline"
        >
          Go back to blogs
        </button>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen bg-black px-6 mt-1 md:px-32 py-16">
      <img src={blog.image} alt={blog.title} className="w-full max-h-[400px] object-contain rounded-xl mb-8" />
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{blog.date}</p>
      <p className="text-lg leading-8 text-[#dddddd]">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
