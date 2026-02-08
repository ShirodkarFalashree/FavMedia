import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMaximize2, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import data from "../data/projects.json";

import services1_1_1 from "../assets/servicesimage/service1_1_1.png";
import services1_1_2 from "../assets/servicesimage/service1_1_2.png";
import services1_2_1 from "../assets/servicesimage/services1_2_1.png";
import services1_2_2 from "../assets/servicesimage/services1_2_2.png";

export default function SocialMediaMarketing() {
  const navigate = useNavigate();
  const service = data["social-media-marketing"];

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================
     GALLERY DATA
  ========================= */
  const galleries = [
    {
      title: "Posts for Social Media",
      images: [services1_1_1, services1_1_2],
    },
    {
      title: "Thumbnails for YouTube",
      images: [services1_2_1, services1_2_2],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-24"
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
        <h1 className="text-6xl md:text-8xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
          {service.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
          {service.tagline}{" "}
          <span className="text-gray-600">{service.description}</span>
        </p>
      </div>

      {/* ================= SECTIONED WORK ================= */}
      <div className="space-y-28">
        {galleries.map((section, i) => (
          <div key={i}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {section.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="
                    relative
                    w-full
                    bg-neutral-900
                    rounded-[32px]
                    overflow-hidden
                    border
                    border-white/5
                    group
                  "
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={section.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setActiveImage(img)}
                    className="
                      absolute
                      right-4
                      bottom-4
                      z-10
                      h-11
                      w-11
                      hover:h-12
                      hover:w-12
                      rounded-full
                      bg-white
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      text-black
                      cursor-pointer
                      opacity-100
                      hover:bg-white/80
                      transition-all
                      ease
                    "
                  >
                    <FiMaximize2 size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= FULLSCREEN MODAL ================= */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="
            fixed
            inset-0
            z-50
            bg-black/70
            backdrop-blur-xl
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="
                absolute
                -top-12
                right-0
                text-white/80
                hover:text-white
                transition
                cursor-pointer
              "
            >
              <FiX size={30} />
            </button>

            {/* Fullscreen Image */}
            <img
              src={activeImage}
              alt="Fullscreen preview"
              className="
                w-full
                max-h-[85vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
