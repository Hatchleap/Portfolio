"use client";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8c84c2] text-white px-6 md:px-16 py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        
        {/* Logo & Email Subscription */}
        <div>
          <div className="flex items-center mb-6">
            <img
              src="/assets/images/pngs/rtjgjng.png" // <-- update this path to your actual logo
              alt="Company Logo"
              className="w-10 h-10 mr-3 object-contain"
            />
            <h1 className="text-4xl font-bold">Hatchleap</h1>
          </div>
          <p className="mb-3 text-sm">
            Enter your email and receive information in your inbox
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none border border-[#000000]"
            />
            <button className="bg-[#000000] text-white px-6 py-2 rounded-r-lg hover:opacity-90 transition">
              Send
            </button>
          </div>
          <p className="mt-2 text-xs opacity-80">
            By subscribing you agree to with our privacy policy and provide consent 
            to receive updates from our company.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h2 className="font-semibold mb-4">Navigate</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shop Immunity</a></li>
            <li><a href="#" className="hover:underline">Shop Original</a></li>
            <li><a href="#" className="hover:underline">Shop Energy</a></li>
            <li><a href="#" className="hover:underline">Shop Sleep</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:friends@duotoothpaste.com" className="hover:underline">friends@duotoothpaste.com</a></li>
            <li><a href="mailto:medo@duotoothpaste.com" className="hover:underline">medo@duotoothpaste.com</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaInstagram /> <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> <a href="#" className="hover:underline">Youtube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
        <p>© 2023 Hatchleap. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">FAQ'S</a>
          <a href="#" className="hover:underline">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
