import React from 'react';
import { BsRobot } from 'react-icons/bs';

const ChatBotWidget = () => {
  const openChatBot = () => {
    alert('Chatbot opened!');
  };

  return (
    <div className="sticky bottom-0 left-0 w-full  backdrop-blur-md   px-4 py-3 flex justify-end items-center">
      <button
        onClick={openChatBot}
        className="flex items-center gap-2 text-white bg-[#1f1f1f] hover:bg-[#333] transition-colors px-4 py-2 rounded-full shadow-lg"
      >
        <BsRobot className="text-lg" />
        Chat with us
      </button>
    </div>
  );
};

export default ChatBotWidget;
