// Footer.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] mt-20  text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>
            Designed & Built by <strong>Mudassir</strong>
            <br />
            Frontend Developer
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex items-center space-y-2 space-x-4 md:space-y-0 md:space-x-10">
            <li className="size-[3vw]  text-zinc-300">
              <FaFacebook className="size-[3vw] hover:text-blue-700 cursor-pointer" />
            </li>
            <li className="size-[3vw] text-zinc-300">
              <FaInstagram className="size-[3vw] hover:text-red-600 cursor-pointer" />
            </li>
            <li className="text-zinc-300">
              <FaWhatsapp className="size-[3vw] hover:text-green-600 cursor-pointer" />
            </li>
            <li className="text-zinc-300">
              <FaYoutube className="size-[3vw] hover:text-red-700 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 text-center">
          <p>&copy; 2024 Mudassir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
