import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoFlashOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mb-[80px] md:mb-[180px] px-8 md:px-10'>
      {/* Services tag */}
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-10">
        <div className="flex items-center justify-center text-xs sm:text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
          <span className="animate-[blink_1s_infinite]">
            <GoDotFill />
          </span>
          <p>Services</p>
        </div>
      </div>

      {/* Heading section */}
      <div className='text-center flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-10'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] md:leading-[50px]'>
          What We Provide
        </h2>
        <p className='text-subtext w-full sm:max-w-md md:w-[540px] text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]'>
          FavMedia gives you flexible solutions to launch your website — whether you need a quick template, custom tweaks, or a fully unique design.
        </p>
      </div>

      {/* Get Started button */}
      <div className="p-[2px] mb-10 md:mb-20 rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">
        <button className="px-4 py-3 sm:px-6 sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-sm sm:text-base">
          Get Started
        </button>
      </div>

      {/* Services cards */}
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12'>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className='border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center'>
            <div className='text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]'>
              <IoFlashOutline className='text-center shadow-white' />
            </div>
            <div className='text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]'>
              {index === 0 && <>Ready-Made <br />Templates</>}
              {index === 1 && <>Templates + <br />Customization</>}
              {index === 2 && <>Fully Custom <br />Websites</>}
            </div>
            <div className='w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]'></div>
            <div className='text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext'>
              Need something truly unique? We design and build custom websites.
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services