import React, { useEffect } from 'react';
import {
  FaUserAlt,
  FaBriefcase,
  FaShoppingCart,
  FaPenNib,
  FaRocket,
  FaBuilding,
  FaSitemap,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaGraduationCap,
  FaUsers,
  FaComments,
  FaCalendarCheck,
  FaUtensils,
  FaHome,
  FaNewspaper,
  FaCode,
  FaStar,
  FaListUl,
  FaHourglassHalf,
} from 'react-icons/fa';

const icons = {
  FaUserAlt,
  FaBriefcase,
  FaShoppingCart,
  FaPenNib,
  FaRocket,
  FaBuilding,
  FaSitemap,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaGraduationCap,
  FaUsers,
  FaComments,
  FaCalendarCheck,
  FaUtensils,
  FaHome,
  FaNewspaper,
  FaCode,
  FaStar,
  FaListUl,
  FaHourglassHalf,
};

const companies = [
  { title: 'Portfolio Website', icon: 'FaUserAlt' },
  { title: 'Business Website', icon: 'FaBriefcase' },
  { title: 'E-commerce Website', icon: 'FaShoppingCart' },
  { title: 'Blog or Personal Website', icon: 'FaPenNib' },
  { title: 'Landing Page', icon: 'FaRocket' },
  { title: 'Agency Website', icon: 'FaBuilding' },
  { title: 'Corporate Website', icon: 'FaSitemap' },
  { title: 'Non-Profit & Charity Website', icon: 'FaHandHoldingHeart' },
  { title: 'Event Website', icon: 'FaCalendarAlt' },
  { title: 'Educational Website', icon: 'FaGraduationCap' },
  { title: 'Membership Website', icon: 'FaUsers' },
  { title: 'Community or Forum Website', icon: 'FaComments' },
  { title: 'Booking Website', icon: 'FaCalendarCheck' },
  { title: 'Restaurant & Cafe Website', icon: 'FaUtensils' },
  { title: 'Real Estate Website', icon: 'FaHome' },
  { title: 'News & Magazine Website', icon: 'FaNewspaper' },
  { title: 'SaaS / Product Website', icon: 'FaCode' },
  { title: 'Personal Brand Website', icon: 'FaStar' },
  { title: 'Directory & Listing Website', icon: 'FaListUl' },
  { title: 'Coming Soon Page', icon: 'FaHourglassHalf' },
];

const CompaniesStrip2 = ({ duration = 20 }) => {
  const duplicatedCompanies = [...companies, ...companies];
  const animationClass = `scroll-speed-${duration}`;

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll-left-${duration} {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .${animationClass} {
        animation: scroll-left-${duration} ${duration}s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [duration]);

  return (
    <div className="bg-transparent flex items-center justify-center font-sans relative">
      <style>
        {/* {`
          .gradient-mask {
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          }

          .blur-edges::before,
          .blur-edges::after {
            content: '';
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            z-index: 10;
            pointer-events: none;
          }

          .blur-edges::before {
            left: 0;
            background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, transparent 100%);
            backdrop-filter: blur(4px);
          }

          .blur-edges::after {
            right: 0;
            background: linear-gradient(270deg, rgba(0,0,0,0.8) 0%, transparent 100%);
            backdrop-filter: blur(4px);
          }

          @media (max-width: 768px) {
            .gradient-mask {
              mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
            }

            .blur-edges::before,
            .blur-edges::after {
              width: 50px;
              backdrop-filter: blur(2px);
            }
          }
        `} */}
      </style>

      <div className="w-full relative overflow-hidden py-4 blur-edges">
        <div className="gradient-mask">
          <div className={`flex whitespace-nowrap ${animationClass}`}>
            {duplicatedCompanies.map((company, index) => {
              const IconComponent = icons[company.icon];
              return (
                <div
                  key={`${company.title}-${index}`}
                  className="flex-shrink-0 mx-4 px-4 py-2 bg-[#0D0D0D] rounded-3xl shadow-lg flex items-center justify-center gap-2 text-white"
                  style={{ minWidth: '180px' }}
                >
                  {IconComponent && <IconComponent size={16} />}
                  <span className="text-subtext">{company.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesStrip2;
