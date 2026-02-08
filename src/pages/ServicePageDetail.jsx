// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
// import data from '../data/projects.json';

// const ServiceDetail = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0)
//       }, []) 
//   const { serviceId } = useParams();
//   const navigate = useNavigate();
//   const service = data[serviceId];

//   if (!service) return <div className="text-white p-20 text-center">Service Not Found</div>;

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-20"
//     >
//       {/* Navigation Header */}
//       <div className="flex justify-between items-center mb-16">
//         <button 
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 rounded-full border border-white/10"
//         >
//           <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
//         </button>
//         <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">FavMedia Agency / 2026</div>
//       </div>

//       {/* Hero Section */}
//       <div className="max-w-5xl mb-24">
//         <motion.h1 
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-6xl h-[200px] md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600"
//         >
//           {service.title}
//         </motion.h1>
//         <motion.p 
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl"
//         >
//           {service.tagline} <span className="text-gray-600">{service.description}</span>
//         </motion.p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {service.showcase.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="group relative h-[500px] w-full bg-neutral-900 rounded-[32px] overflow-hidden border border-white/5"
//           >
//             {/* Background Image with Scale/Grayscale Effect */}
//             <img 
//               src={project.image} 
//               alt={project.name} 
//               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
//             />
            
//             {/* Dark Overlay that fades in on hover */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

//             {/* Project Content */}
//             <div className="absolute inset-0 p-10 flex flex-col justify-end">
//               <div className="flex justify-between items-end">
//                 <div className="space-y-3">
//                   <p className="text-blue-400 font-mono text-sm tracking-tighter uppercase">{project.type}</p>
//                   <h3 className="text-3xl font-bold text-white">{project.name}</h3>
//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {project.tags.map((tag, i) => (
//                       <span key={i} className="text-[10px] px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-gray-300">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* External Link Circle */}
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-black shadow-xl"
//                 >
//                   <FiExternalLink size={20} />
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceDetail;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ServiceLayout = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <div className="text-white p-20 text-center">Service Not Found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-20"
    >
      {/* Header */}
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

      {/* Hero */}
      <div className="max-w-5xl mb-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
          {service.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
          {service.tagline}{' '}
          <span className="text-gray-600">{service.description}</span>
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {service.showcase.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative h-[500px] bg-neutral-900 rounded-[32px] overflow-hidden border border-white/5"
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <p className="text-blue-400 text-sm uppercase font-mono">
                {project.type}
              </p>
              <h3 className="text-3xl font-bold">{project.name}</h3>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 bg-white/10 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute right-10 bottom-10 h-14 w-14 bg-white text-black rounded-full flex items-center justify-center">
                <FiExternalLink />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceLayout;
