import React, { useState, useEffect } from 'react';
import { BsRobot } from 'react-icons/bs';

const ChatBotWidget = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const openChatBot = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      alert('Chatbot is not ready yet!');
    }
  };

  useEffect(() => {
    if (window.Tawk_API) {
      // Set chatbotOpen = true when chat is opened
      window.Tawk_API.onChatMaximized = () => {
        setChatbotOpen(true);
      };

      // Set chatbotOpen = false when chat is minimized
      window.Tawk_API.onChatMinimized = () => {
        setChatbotOpen(false);
      };
    }
  }, []);

  // Don't render the button if chatbot is open
  if (chatbotOpen) return null;

  return (
    <div className="sticky bottom-0 left-0 w-full z-50 backdrop-blur-md px-4 py-3 flex justify-end items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-[#0F0F0F]/70 to-[#0F0F0F]/30 pointer-events-none rounded-t-xl" />

      <div className="relative w-full flex justify-end items-center">
        <button
          onClick={openChatBot}
          className="flex items-center gap-2 text-white bg-[#1f1f1f] hover:bg-[#333] transition-colors px-4 py-2 rounded-full shadow-lg"
        >
          <BsRobot className="text-lg" />
          Chat with us
        </button>
      </div>
    </div>
  );
};

export default ChatBotWidget;
