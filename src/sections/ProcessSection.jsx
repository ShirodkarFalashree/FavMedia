import React from 'react'
import { BsStars } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import process1 from "../assets/process1.avif"

const ProcessSection = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center mb-[80px] md:mb-[180px] px-10 sm:px-6'>
      <div className='container flex flex-col-reverse lg:flex-row items-start justify-between gap-10'>
        {/* steps section - will scroll */}
        <div className='w-full lg:w-full order-2 lg:order-1'>
          <div className="p-[1px] w-fit rounded-full bg-gradient-to-r from-white to-black mb-6 md:mb-6">
            <div className="flex items-center justify-start text-xs sm:text-sm bg-white dark:bg-black p-1 rounded-full gap-2">
              <span className="animate-[blink_1s_infinite]">
                <GoDotFill />
              </span>
              <p>Steps</p>
            </div>
          </div>
          
          {/* Heading section */}
          <div className='flex flex-col gap-4 md:gap-6 items-start mb-6 md:mb-16'>
            <h2 className='text-3xl sm:text-5xl font-semibold leading-[1.2] md:leading-[50px]'>
              Ready-Made Templates
            </h2>
            <p className='text-subtext w-full sm:max-w-[600px] md:w-full text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]'>
              FavMedia gives you flexible solutions to launch your website — whether you need a quick template, custom tweaks, or a fully unique design.
            </p>
          </div>
          
          <div className='flex flex-col items-start gap-6 md:pl-4'>
            {/* Step 1 */}
            <div className='w-full md:max-w-[588px] h-auto sm:h-[363px] flex items-center justify-center rounded-3xl border-[1px] border-[#ffffff46]'>
              <div className='w-full md:w-[588px] h-auto sm:h-[363px] p-6 sm:p-[30px] flex flex-col items-center justify-around rounded-3xl shadow-[inset_0_0_40px_0_rgba(255,255,255,0.2)]'>
                <div className='w-full flex justify-between'>
                  <div className='w-10 h-10 rounded-xl bg-[#0F0F0F] border-[1px] border-[#a9a9a954] flex items-center justify-center'>1</div>
                  <div>
                    <button
                      className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                      onClick={() => { navigate("/templates") }}
                    >
                      Access
                    </button>
                  </div>
                </div>
                <div className='w-full h-auto sm:h-[133px] flex flex-col justify-between my-4 sm:my-0'>
                  <p className='text-lg sm:text-[18px] leading-[26px] text-white mb-2'>Advanced AI, Streamlined Design</p>
                  <div className='w-[240px] h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-[#8b8b8b] to-black mb-3 sm:mb-[16px]'></div>
                  <p className='text-base sm:text-[16px] leading-[26px] text-subtext'>Nubien blends cutting-edge AI capabilities with sleek, modern design. It's built for agencies that need to showcase sophisticated technology in a user-friendly and visually compelling way.</p>
                </div>
                <div className='w-full flex gap-2 mt-4 sm:mt-0'>
                  <button
                    className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    AI Design
                  </button>
                  <button
                    className="w-[100px] sm:w-[140px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    Tech Innovation
                  </button>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
             <div className='w-full md:max-w-[588px] h-auto sm:h-[363px] flex items-center justify-center rounded-3xl border-[1px] border-[#ffffff46]'>
              <div className='w-full md:w-[588px] h-auto sm:h-[363px] p-6 sm:p-[30px] flex flex-col items-center justify-around rounded-3xl shadow-[inset_0_0_40px_0_rgba(255,255,255,0.2)]'>
               <div className='w-full flex justify-between'>
                  <div className='w-10 h-10 rounded-xl bg-[#0F0F0F] border-[1px] border-[#a9a9a954] flex items-center justify-center'>2</div>
                  <div>
                    <button
                      className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                      onClick={() => { navigate("/templates") }}
                    >
                      Access
                    </button>
                  </div>
                </div>
                <div className='w-full h-auto sm:h-[133px] flex flex-col justify-between my-4 sm:my-0'>
                  <p className='text-lg sm:text-[18px] leading-[26px] text-white mb-2'>Advanced AI, Streamlined Design</p>
                  <div className='w-[240px] h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-[#8b8b8b] to-black mb-3 sm:mb-[16px]'></div>
                  <p className='text-base sm:text-[16px] leading-[26px] text-subtext'>Nubien blends cutting-edge AI capabilities with sleek, modern design. It's built for agencies that need to showcase sophisticated technology in a user-friendly and visually compelling way.</p>
                </div>
                <div className='w-full flex gap-2 mt-4 sm:mt-0'>
                  <button
                    className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    AI Design
                  </button>
                  <button
                    className="w-[100px] sm:w-[140px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    Tech Innovation
                  </button>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
             <div className='w-full md:max-w-[588px] h-auto sm:h-[363px] flex items-center justify-center rounded-3xl border-[1px] border-[#ffffff46]'>
              <div className='w-full md:w-[588px] h-auto sm:h-[363px] p-6 sm:p-[30px] flex flex-col items-center justify-around rounded-3xl shadow-[inset_0_0_40px_0_rgba(255,255,255,0.2)]'>
               <div className='w-full flex justify-between'>
                  <div className='w-10 h-10 rounded-xl bg-[#0F0F0F] border-[1px] border-[#a9a9a954] flex items-center justify-center'>3</div>
                  <div>
                    <button
                      className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                      onClick={() => { navigate("/templates") }}
                    >
                      Access
                    </button>
                  </div>
                </div>
                <div className='w-full h-auto sm:h-[133px] flex flex-col justify-between my-4 sm:my-0'>
                  <p className='text-lg sm:text-[18px] leading-[26px] text-white mb-2'>Advanced AI, Streamlined Design</p>
                  <div className='w-[240px] h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-[#8b8b8b] to-black mb-3 sm:mb-[16px]'></div>
                  <p className='text-base sm:text-[16px] leading-[26px] text-subtext'>Nubien blends cutting-edge AI capabilities with sleek, modern design. It's built for agencies that need to showcase sophisticated technology in a user-friendly and visually compelling way.</p>
                </div>
                <div className='w-full flex gap-2 mt-4 sm:mt-0'>
                  <button
                    className="w-[100px] sm:w-[100px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    AI Design
                  </button>
                  <button
                    className="w-[100px] sm:w-[140px] border-[1px] text-sm sm:text-[15px] transition-colors duration-300 text-subtext hover:text-white flex items-center gap-1 justify-center border-[#a9a9a954] rounded-4xl bg-[#0F0F0F] h-10 sm:h-10 cursor-pointer shadow-[inset_0_-0.48175px_0.48175px_-1.25px_rgba(0,0,0,0.68),inset_0_-1.83083px_1.83083px_-2.5px_rgba(0,0,0,0.596),inset_0_-8px_8px_-3.75px_rgba(0,0,0,0.235)]"
                    onClick={() => { navigate("/templates") }}
                  >
                    Tech Innovation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* image section - will be sticky on desktop only */}
        <div className='w-full lg:w-fit order-1 lg:order-2 lg:sticky lg:top-40 self-start mb-10 lg:mb-0'>
          <div className='w-full max-w-[528px] mx-auto lg:w-[528px] h-auto lg:h-[534px] flex justify-center items-center border-[1px] border-[#ffffff19] rounded-3xl'>
            <img src={process1} className='w-full max-w-[508px] h-auto lg:h-[514px] rounded-3xl' alt="Process illustration" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSection