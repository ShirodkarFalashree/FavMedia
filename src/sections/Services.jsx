import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoFlashOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <div className='w-screen flex flex-col justify-center  items-center mb-[180px]'>
      <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-black mb-10">
        <div className="flex items-center justify-center text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
          <span className="animate-[blink_1s_infinite] ">
            <GoDotFill />
          </span>

          <p>Services</p>{" "}
        </div>
      </div>
      <div className='text-center flex flex-col gap-6 items-center justify-center mb-10'>
        <h2 className='text-[54px] leading-[50px]'>What We Provide</h2>
        <p className='text-subtext md:w-[540px] text-[16px] ledaing-[26px]'>FavMedia gives you flexible solutions to launch your website — whether you need a quick template, custom tweaks, or a fully unique design.</p>
      </div>
      <div className="p-[2px] mb-20 rounded-xl bg-[linear-gradient(143deg,_rgba(194,194,194,1)_0%,_black_50%,_rgba(194,194,194,1)_100%,_black_100%)]">
        <button className="px-6 py-3 bg-black text-white rounded-xl w-full h-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Get Started
        </button>
      </div>
      <div className='container  flex gap-12 justify-between'>
        <div className='border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-[20px] flex flex-col items-center'>
          <div className='text-center h-[50px] w-[50px] rounded-full flex justify-center items-center text-3xl text-white bg-[#3D3D3D] mb-[26px]'><IoFlashOutline className='text-center shadow-white  ' /></div>
          <div className='text-[34px]  leading-[36px] font-sans text-center mb-[6px]'>Ready-Made <br />Templates</div>
          <div className='w-full h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-[16px]'></div>
          <div className='text-center text-[16px] leading-[26px] text-subtext mb-26px'>Need something truly unique? We design and build custom websites.</ div>
        </div>
        <div className='border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-[20px] flex flex-col items-center'>
          <div className='text-center h-[50px] w-[50px] rounded-full flex justify-center items-center text-3xl text-white bg-[#3D3D3D] mb-[26px]'><IoFlashOutline className='text-center shadow-white  ' /></div>
          <div className='text-[34px]  leading-[36px] font-sans text-center mb-[6px]'>Templates + Customization</div>
          <div className='w-full h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-[16px]'></div>
          <div className='text-center text-[16px] leading-[26px] text-subtext mb-26px'>Need something truly unique? We design and build custom websites.</ div>
        </div>
        <div className='border-[1px] rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-[20px] flex flex-col items-center'>
          <div className='text-center h-[50px] w-[50px] rounded-full flex justify-center items-center text-3xl text-white bg-[#3D3D3D] mb-[26px]'><IoFlashOutline className='text-center shadow-white  ' /></div>
          <div className='text-[34px]  leading-[36px] font-sans text-center mb-[6px]'>Fully Custom<br /> Websites</div>
          <div className='w-full h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-[16px]'></div>
          <div className='text-center text-[16px] leading-[26px] text-subtext mb-26px'>Need something truly unique? We design and build custom websites.</ div>
        </div>
      </div>
    </div>
  )
}

export default Services