import React, { useState } from 'react';
import { IoFlashOutline } from 'react-icons/io5';
import { MdCall, MdClose, MdEmail, MdPerson, MdMessage } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      await emailjs.send(
        'service_g9cdn7a',
        'template_odepa2n',
        formData,
        'VfirSYT9Efr3uPizV'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='pt-30 w-full h-screen flex items-center justify-center'>
      <div className='w-full  mt-[-100px] px-16'>
        <div className='text-center flex flex-col gap-4 md:gap-6 items-center justify-center mb-6 md:mb-6'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] md:leading-[50px]'>
            Contact Us
          </h2>
          <p className='text-subtext w-full sm:max-w-[600px] md:w-full text-sm sm:text-[16px] leading-[1.6] md:leading-[26px]'>
            FavMedia gives you flexible solutions to launch your website — whether you need a quick template, custom tweaks, or a fully unique design.
          </p>
        </div>

        {/* Services cards */}
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12'>
          <div className='border-[1px] cursor-pointer rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center'>
            <div className='text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]'>
              <MdCall className='text-center shadow-white' />
            </div>
            <div className='text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]'>
              Call Us
            </div>
            <div className='w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]'></div>
            <div className='text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext'>
              +91 8097966352 <br />+91 9029656714
            </div>
          </div>
          <div className='border-[1px] cursor-pointer rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center'>
            <div className='text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]'>
              <FaWhatsapp className='text-center shadow-white' />
            </div>
            <div className='text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]'>
              Whatsapp Us
            </div>
            <div className='w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]'></div>
            <div className='text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext'>
              +91 8097966352 <br />+91 9029656714
            </div>
          </div>
          <div
            className='border-[1px] cursor-pointer rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center'
            onClick={() => setIsModalOpen(true)}
          >
            <div className='text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]'>
              <MdEmail className='text-center shadow-white' />
            </div>
            <div className='text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]'>
              Mail Us
            </div>
            <div className='w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]'></div>
            <div className='text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext'>
            favmediabusiness@gmail.com
            </div>
          </div>
          <div className='border-[1px] cursor-pointer rounded-4xl border-[#ffffff46] shadow-[0_0_5px_5px_#ffffff0e] w-full p-4 sm:p-[20px] flex flex-col items-center'>
            <div className='text-center h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center text-xl sm:text-3xl text-white bg-[#3D3D3D] mb-4 sm:mb-[26px]'>
              <SiGooglemeet className='text-center shadow-white' />
            </div>
            <div className='text-xl sm:text-2xl md:text-[34px] leading-[1.2] md:leading-[36px] font-sans text-center mb-2 sm:mb-[6px]'>
              Schedule A Meet
            </div>
            <div className='w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-black via-gray-500 to-black mb-3 sm:mb-[16px]'></div>
         <div
  className='text-center text-sm sm:text-[16px] leading-[1.6] md:leading-[26px] text-subtext cursor-pointer '
  onClick={() => window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=favmediabusiness@gmail.com&su=Meeting Request&body=Hi, I’d like to schedule a meeting. Please let me know your availability.',
    '_blank'
  )}
>
  favmediabusiness@gmail.com
</div>


          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-[4px] bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#0d0d0d] rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <MdClose size={24} />
            </button>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[34px] leading-[1.2] md:leading-[50px] text-center">Send us a message</h3>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-lg mb-2">Message sent successfully!</div>
                <div className="text-subtext">We'll get back to you soon.</div>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="text-center py-8">
                <div className="text-red-500 text-lg mb-2">Failed to send message.</div>
                <div className="text-subtext">Please try again later.</div>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-black border-subtext"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-subtext mb-2" htmlFor="name">
                    Name
                  </label>
                  <div className="w-full border-[1px] border-subtext max-w-xl flex items-center justify-around px-4 rounded-xl mb-2">
                    <MdPerson className=" text-subtext" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 focus:outline-none  rounded-lg  dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-subtext mb-2" htmlFor="name">
                    Email
                  </label>
                  <div className="w-full border-[1px] border-subtext max-w-xl flex items-center justify-around px-4 rounded-xl mb-2">
                    <MdEmail className=" text-subtext" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 focus:outline-none  rounded-lg  dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-subtext mb-2" htmlFor="name">
                    Message
                  </label>
                  <div className="w-full border-[1px] border-subtext max-w-xl flex items-center justify-around px-4 rounded-xl mb-2">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 focus:outline-none  rounded-lg  dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-200 via-black to-gray-200 w-full sm:w-auto">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-3 sm:px-6 cursor-pointer sm:py-3 bg-black text-white rounded-xl w-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-sm sm:text-base">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;