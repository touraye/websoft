'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  // State to manage if the chat window is open
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the message in the input field
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  // Function to handle sending the message
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return; // Don't send empty messages

    // --- IMPORTANT: CONFIGURE YOUR PHONE NUMBER HERE ---
    const phoneNumber = '15551234567'; // Use your full number in international format without '+' or '00'

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset the state after sending
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* The floating button bottom-[7rem] right-[4rem] w-[375px] */}
      <div
        onClick={toggleChat}
        className="fixed right-6 bottom-6 sm:right-10 sm:bottom-10 w-16 h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center z-50 hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.214 4.425 4.569-1.207z" />
        </svg>
      </div>

      {/* The Chat Window */}
      <div
        className={`fixed right-0 left-0 bottom-[7rem] md:right-[4rem] w-[375px] max-w-[90%] ml-auto mr-auto md:mr-0 md:ml-auto  bg-white rounded-t-2xl shadow-lg transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <header className="bg-[#008069] text-white p-4 flex items-center gap-4 ">
          <div className="relative">
            <Image src="/assets/logos/websoft_logo.webp" alt="Websoft Logo" width={50} height={50} className="rounded-full bg-white p-1" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#008069]"></span>
          </div>
          <div>
            <h3 className="font-bold">Websoft</h3>
            <p className="text-sm">Typically replies within 1 hour</p>
          </div>
          <button onClick={closeChat} className="ml-auto text-white/80 hover:text-white">
            <X size={24} />
          </button>
        </header>

        {/* Chat Body */}
        <main className="h-auto max-h-[340px] p-4 overflow-y-auto bg-[#eae6df] bg-[url('/assets/logos/whatsapp-bg.webp')] bg-contain">
            {/* Welcome Message */}
            <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm self-start">
                <p className="font-bold text-sm text-[hsla(0, 0%, 7%, .5)]">Websoft</p>
                <p className="text-gray-800">Hello, welcome to websoft! How can we help?</p>
                <p className="text-right text-xs text-gray-400 mt-1">12:53 PM ✓✓</p>
            </div>
        </main>

        {/* Input Footer */}
        <footer className="p-3 bg-gray-100 border-t border-gray-200">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message.."
              className="w-full p-3 bg-white text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
              aria-label="Send message"
            >
              <Send size={24} />
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

export default WhatsAppWidget;
