import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function VideoAdsMotion() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =======================
     VIDEO SERVICES DATA
     (EDIT FREELY LATER)
  ======================= */
  const videoServices = [
    {
      title: "Motion Graphics Videos",
      type: "2D / 3D Animation",
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1600",
      description:
        "Smooth, engaging motion graphics to explain ideas, highlight features, and elevate brand communication.",
      tags: ["After Effects", "2D", "3D", "Animation"],
    },
    {
      title: "SaaS Explainer Videos",
      type: "Product Explainers",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600",
      description:
        "Clear and concise explainer videos that simplify complex software and improve user understanding.",
      tags: ["Explainer", "UI Walkthrough", "Narration"],
    },
    {
      title: "3D Product Showcase",
      type: "Product Visualization",
      image:
        "https://images.unsplash.com/photo-1633113215888-3a2b5d90b2ef?q=80&w=1600",
      description:
        "High-end 3D visuals that showcase products from every angle with realistic lighting and detail.",
      tags: ["3D", "Product Render", "Lighting"],
    },
    {
      title: "Advertisement Videos",
      type: "Marketing & Ads",
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600",
      description:
        "Scroll-stopping advertisements optimized for social media, YouTube, and paid campaigns.",
      tags: ["Ads", "Social Media", "Branding"],
    },
    {
      title: "Cinematic Videos",
      type: "Brand Films",
      image:
        "https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1600",
      description:
        "Emotion-driven cinematic storytelling that builds strong brand identity and connection.",
      tags: ["Cinematic", "Storytelling", "4K"],
    },
    {
      title: "Video Shoots & Editing",
      type: "Production & Post",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600",
      description:
        "Professional shoots, editing, color grading, and sound design for a polished final output.",
      tags: ["Editing", "Color Grading", "Production"],
    },
  ];
  
  const handleWhatsAppDemo = () => {
    const phoneNumber = "919029656714"; // ← replace with your WhatsApp number
    const message = "Hey Avishkar, I would like to see demo videos";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-20"
    >
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 bg-white/5 rounded-full border border-white/10"
        >
          <FiArrowLeft /> Back
        </button>
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          FavMedia Agency / 2026
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="max-w-5xl mb-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
          Video Ads & Motion Graphics
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
          Visual storytelling designed to grab attention, explain ideas, and
          drive engagement across platforms.
        </p>
      </div>

      {/* ================= VIDEO CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {videoServices.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              relative
              h-[420px]
              bg-neutral-900
              rounded-[32px]
              overflow-hidden
              border
              border-white/5
            "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                grayscale
                hover:grayscale-0
                transition-all duration-700
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <p className="text-blue-400 text-sm uppercase font-mono">
                {item.type}
              </p>

              <h3 className="text-3xl font-bold mt-1">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-[90%]">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 bg-white/10 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
  onClick={handleWhatsAppDemo}
  className="
    mt-6
    px-6
    py-3
    rounded-full
    bg-white
    text-black
    text-sm
    font-semibold
    w-fit
    cursor-pointer

    transition-all
    duration-300
    ease-out

    hover:bg-gray-100
    hover:-translate-y-0.5
    hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)]
    active:translate-y-0
  "
>
  Request a Demo
</button>


            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
