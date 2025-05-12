import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com/timelessinteriors001?igsh=eXVwbXJubHNsYnNr" target="_blank" rel="noopener noreferrer" className="text-[#F1C40F] hover:opacity-80">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/share/1BJ1pkozUh/" target="_blank" rel="noopener noreferrer" className="text-[#F1C40F] hover:opacity-80">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://wa.me/2348078092964" target="_blank" rel="noopener noreferrer" className="text-[#F1C40F] hover:opacity-80">
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          © 2025 Timeless Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
