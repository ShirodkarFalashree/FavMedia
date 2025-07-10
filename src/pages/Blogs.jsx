import React from 'react'

const blogPosts = [
  {
    title: 'How We Built a Personal Branding Website in 3 Days',
    excerpt:
      'Go behind the scenes of how our team at FAVMedia designed, developed, and deployed a branding website in just 72 hours.',
    image: 'https://source.unsplash.com/random/400x300/?technology,design',
    date: 'July 7, 2025',
  },
  {
    title: 'The Art of Editing: Video Content That Converts',
    excerpt:
      'Learn the strategies our editors use to turn raw footage into engaging, high-converting content for brands and creators.',
    image: 'https://source.unsplash.com/random/400x300/?video,editing',
    date: 'June 25, 2025',
  },
  {
    title: 'Top 5 Website Animations to Try in 2025',
    excerpt:
      'Animations are no longer just "nice-to-have". They define user experience. Here are our favorite picks for this year.',
    image: 'https://source.unsplash.com/random/400x300/?animation,web',
    date: 'June 10, 2025',
  },
]

const Blogs = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12  text-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Latest Blogs</h1>
      <p className="text-center text-[#bbbbbb] max-w-2xl mx-auto mb-12">
        Insights, tutorials, and behind-the-scenes from the team at FAVMedia. Learn what drives modern digital creativity.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-[#A9A9A9] rounded-xl overflow-hidden shadow shadow-[#ffffff9d] hover:shadow-lg transition-shadow duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col justify-between h-[240px]">
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-[#aaaaaa]">{post.excerpt}</p>
              </div>
              <p className="text-xs text-[#666] mt-4">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blogs
