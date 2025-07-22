import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockup1 from "../assets/mockup1.png";
import p1 from "../assets/process1.avif";
import { BsStars } from "react-icons/bs";

const data = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126170/0a8cb03f-6fc9-43fa-bb0d-eb43445e961f_vzlwhl.png",
    title: "Cafe Website",
    price: "Rs.2000",
    description:
      "A beautifully crafted modern cafe website. Perfect for showcasing menu, ambience, and driving footfall or orders online. Fully responsive and built to convert.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://favachinno.vercel.app/",
    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124803/Screenshot_2025-07-22_001614_kuejrw.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124815/Screenshot_2025-07-22_001858_i3ho0r.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124908/Screenshot_2025-07-22_001922_pbczsd.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753124906/Screenshot_2025-07-22_001940_p8qrma.png",
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126825/b26b6554-18f5-49b1-83a6-2fd55915470c_aloppd.png",
    title: "E-commerce Shop",
    price: "Rs.250",
    description:
      "A fully functional online store built to sell products with ease. Clean UI, dynamic cart system, and ready-to-scale for any business niche.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://favjewels.netlify.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125553/Screenshot_2025-07-22_004343_ghbrht.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125367/Screenshot_2025-07-22_004419_i5bzsc.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125319/Screenshot_2025-07-22_004458_lvgfje.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125322/Screenshot_2025-07-22_004444_qntuvn.png",
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127261/a96149c1-82cb-4af9-a701-02382a728b01_aj4ka7.png",
    title: "Portfolio Site",
    price: "Rs.50",
    description:
      "A clean, minimal portfolio template for developers, designers, and creatives. Perfect to showcase projects and skills professionally.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://real-estate-ruddy-one.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125600/Screenshot_2025-07-22_004556_rxdzck.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125598/Screenshot_2025-07-22_004623_psv38e.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125596/Screenshot_2025-07-22_004702_ooqdhq.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125602/Screenshot_2025-07-22_004900_ea8rhl.png",
    ],
  },
  // {
  //   id: 4,
  //   imageUrl: mockup1,
  //   title: "Blog Platform",
  //   price: "Rs.150",
  //   description: "A modern blog template perfect for creators and writers. Fully responsive with clean layouts, reading-time estimate, and comment-ready.",
  //   language: "ReactJS + TailwindCSS",
  //   images: ["", "", "", ""]
  // },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127830/70d07093-f2bd-4915-97f3-864b8375f84e_c9ae8i.png",
    title: "Course Landing page",
    price: "Rs.120",
    description:
      "Designed for online educators. Showcase course features, modules, testimonials, and drive signups with a high-converting layout.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://courses-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127507/Screenshot_2025-07-22_011919_recgym.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127507/Screenshot_2025-07-22_011935_ona3lk.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127506/Screenshot_2025-07-22_012003_kdgd52.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753127456/Screenshot_2025-07-22_012020_z9fijq.png",
    ],
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128177/47544738-f53c-4429-9ab6-0f871030cab1_palvwi.png",
    title: "Cafeteria website",
    price: "Rs.80",
    description:
      "A stylish landing page template for cafeterias and snack bars. Promote your offerings, timings, and customer reviews effortlessly.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://mocha-cafe-alpha.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126141/Screenshot_2025-07-22_005343_zm6ato.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753126138/Screenshot_2025-07-22_005404_nnkv8u.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125965/Screenshot_2025-07-22_005436_xypmgu.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753125922/Screenshot_2025-07-22_005503_cz5tnn.png",
    ],
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128547/9a9fd084-1ec5-4dea-abc7-b5be2534caf0_yt6kdv.png",
    title: "Product Showcase",
    price: "Rs.180",
    description:
      "Stunning gallery-style layout to beautifully display any product — from tech to fashion to art. Great for portfolios or boutique brands.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://groomify-pink.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128156/Screenshot_2025-07-22_012917_cgpzw9.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128155/Screenshot_2025-07-22_012933_x99b8v.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128063/Screenshot_2025-07-22_013009_cazvmi.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128061/Screenshot_2025-07-22_013028_dfacfd.png",
    ],
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129020/b2dfc30f-78db-49cd-986b-618da7dd4538_ql2i9r.png",
    title: "Fitness App",
    price: "Rs.300",
    description:
      "Web interface for fitness trainers, gyms, or tracking apps. Comes with goal trackers, programs, testimonials, and contact forms.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://gym-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128539/Screenshot_2025-07-22_013702_rof3xt.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128537/Screenshot_2025-07-22_013716_fkojza.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128538/Screenshot_2025-07-22_013735_nxidr3.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753128536/Screenshot_2025-07-22_013748_typibn.png",
    ],
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129521/32c135a1-5a14-42ff-ba34-9395651ce128_rvaonk.png",
    title: "Saas Showcase",
    price: "Rs.200",
    description:
      "Modern landing page for SaaS startups. Highlight features, pricing, testimonials, and drive leads with smart CTAs.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://purple-theme-seven.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129001/Screenshot_2025-07-22_014452_smq7x8.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129000/Screenshot_2025-07-22_014522_jzsdaf.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129001/Screenshot_2025-07-22_014506_q65pcd.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129000/Screenshot_2025-07-22_014541_kth6ew.png",
    ],
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129939/7810c394-4301-461c-8831-d2549fbd34a0_btvdcy.png",
    title: "Business landing page",
    price: "Rs.200",
    description:
      "A versatile landing page for agencies, startups, or consultants. Built for conversion with clean sections and strong messaging.",
    language: "ReactJS + TailwindCSS",
    previewLink: "https://realestate-favmedia.vercel.app/",

    images: [
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129503/Screenshot_2025-07-22_015010_mvmlx3.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129434/Screenshot_2025-07-22_015040_q37mrh.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129501/Screenshot_2025-07-22_015026_i5vkwb.png",
      "https://res.cloudinary.com/dpukwl1rg/image/upload/v1753129400/Screenshot_2025-07-22_015056_azppzr.png",
    ],
  },
];

const TemplateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = data.find((t) => t.id === parseInt(id));

  if (!template)
    return <div className="text-white p-8">Template not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-inter md:w-full mx-6 md:px-10 md:mx-auto py-24 md:max-w-7xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-subtext text-sm  mb-6  inline-block cursor-pointer"
      >
        ← Back to Templates
      </button>

      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        {template.title}
      </h1>
      <p className="text-subtext text-base sm:text-lg max-w-2xl mb-6 md:mb-10">
        {template.description}
      </p>

      {/* Details Card */}
      <div className=" rounded-3xl p-0 md:p-0 mb-4 max-w-4xl">
        <div className="flex flex-col md:flex-row md:gap-30">
          <div>
            <p className="text-sm text-gray-400 mb-2">Price</p>
            <p className="text-xl font-semibold mb-4">{template.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Language used</p>
            <p className="text-xl font-semibold">{template.language}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-white text-black mb-12 px-4 py-2 rounded-4xl cursor-pointer"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Buy Now
        </button>
        <a
          href={template.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-[1px] h-fit text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
        >
          Preview
        </a>
      </div>

      {/* Images Gallery */}
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {template.images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] group"
          >
            <img
              src={
                img ||
                `https://placehold.co/600x400/000000/FFFFFF?text=Template+Image+${
                  index + 1
                }`
              }
              alt={`Template image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateDetails;
