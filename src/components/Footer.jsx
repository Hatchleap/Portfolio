// "use client";
// import React from "react";
// import { FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#8c84c2] text-white px-6 md:px-16 py-10 rounded-t-3xl">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        
//         {/* Logo & Email Subscription */}
//         <div>
//           <div className="flex items-center mb-6">
//             <img
//               src="/assets/images/pngs/rtjgjng.png" // <-- update this path to your actual logo
//               alt="Company Logo"
//               className="w-10 h-10 mr-3 object-contain"
//             />
//             <h1 className="text-4xl font-bold">Hatchleap</h1>
//           </div>
//           <div className="space-y-3.5 pt-1">
//           <p className="mb-3 text-sm">
//             Enter your email and receive information in your inbox
//           </p>
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Placeholder"
//               className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none border border-[#000000]"
//             />
//             <button className="bg-[#000000] text-white px-6 py-2 rounded-r-lg hover:opacity-90 transition">
//               Send
//             </button>
//           </div>
//           <p className="mt-2 text-xs opacity-80">
//             By subscribing you agree to with our privacy policy and provide consent 
//             to receive updates from our company.
//           </p>
//           </div>
//         </div>

//         {/* Navigate */}
//         <div>
//           <h2 className="font-semibold mb-4">Navigate</h2>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">Shop Immunity</a></li>
//             <li><a href="#" className="hover:underline">Shop Original</a></li>
//             <li><a href="#" className="hover:underline">Shop Energy</a></li>
//             <li><a href="#" className="hover:underline">Shop Sleep</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h2 className="font-semibold mb-4">Contact Us</h2>
//           <ul className="space-y-2 text-sm">
//             <li><a href="mailto:friends@duotoothpaste.com" className="hover:underline">friends@duotoothpaste.com</a></li>
//             <li><a href="mailto:medo@duotoothpaste.com" className="hover:underline">medo@duotoothpaste.com</a></li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h2 className="font-semibold mb-4">Follow Us</h2>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2">
//               <FaInstagram /> <a href="#" className="hover:underline">Instagram</a>
//             </li>
//             <li className="flex items-center gap-2">
//               <FaYoutube /> <a href="#" className="hover:underline">Youtube</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="max-w-7xl mx-auto mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
//         <p>© 2023 Hatchleap. All rights reserved.</p>
//         <div className="flex flex-wrap gap-4">
//           <a href="#" className="hover:underline">Privacy policy</a>
//           <a href="#" className="hover:underline">Terms of Service</a>
//           <a href="#" className="hover:underline">About</a>
//           <a href="#" className="hover:underline">FAQ'S</a>
//           <a href="#" className="hover:underline">Refund Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";

const Footer = () => {
  const footerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = footerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect(); // reveal once
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  // Helper classes for blur-reveal
  const base = "transition-all duration-700 ease-out filter will-change-transform";
  const hidden = "opacity-0 blur-sm translate-y-3";
  const shown = "opacity-100 blur-0 translate-y-0";

  // Only render animated content after mount to avoid hydration mismatch
  if (!mounted) {
    return (
      <footer className="bg-black text-white px-6 md:px-12 lg:px-16 py-12" ref={footerRef}>
        {/* Optionally, render a static fallback or nothing */}
      </footer>
    );
  }

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white px-6 md:px-12 lg:px-16 py-12"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className={`text-[#C204E2] text-4xl md:text-7xl font-bold ${base} ${revealed ? shown : hidden}`}>
            Let’s Talk
          </h2>
          <p className={`text-base md:text-lg leading-relaxed ${base} ${revealed ? `${shown} delay-100` : hidden}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={`text-[#C204E2] flex space-x-4 text-xl ${base} ${revealed ? `${shown} delay-200` : hidden}`}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Middle Section (Address/Services links) */}
        <div className="md:w-1/4">
          <h3 className={`text-[#C204E2] font-semibold text-lg mb-4 ${base} ${revealed ? `${shown} delay-100` : hidden}`}>
            Services
          </h3>
          <ul className={`space-y-2 text-base ${base} ${revealed ? `${shown} delay-200` : hidden}`}>
            <li>
              <a href="/web-development" className="hover:underline">Web Development</a>
            </li>
            <li>
              <a href="/ux-ui" className="hover:underline">UX/ UI Design</a>
            </li>
            <li>
              <a href="/mobile-app" className="hover:underline">Mobile Application</a>
            </li>
            <li>
              <a href="/brand-identity" className="hover:underline">Brand Identity Design</a>
            </li>
            <li>
              <a href="/cyber-security" className="hover:underline">Cyber Security</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          <h3 className={`text-[#C204E2] font-semibold text-lg ${base} ${revealed ? `${shown} delay-100` : hidden}`}>
            Get the latest inspiration & insights
          </h3>
          <div className={`flex items-center bg-white rounded-full p-2 shadow mb-6 ${base} ${revealed ? `${shown} delay-200` : hidden}`}>
            <input
              type="email"
              placeholder="Your Email address"
              className="flex-1 px-4 py-2 text-black outline-none rounded-full"
            />
            <button className="bg-[#C204E2]  text-black p-3 rounded-full hover:bg-gray-800">
              <IoPaperPlane />
            </button>
          </div>

          <h3 className={`font-semibold text-lg ${base} ${revealed ? `${shown} delay-200` : hidden}`}>Address</h3>
          <p className={`text-base mb-4 ${base} ${revealed ? `${shown} delay-300` : hidden}`}>
            4140 Parker Rd. <br />
            Allentown, New Mexico <br />
            31134
          </p>

          <h3 className={`font-semibold text-lg ${base} ${revealed ? `${shown} delay-300` : hidden}`}>Support</h3>
          <p className={`text-base ${base} ${revealed ? `${shown} delay-500` : hidden}`}>
            needhelp@company.com <br />
            (+123) 456789 00
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`mt-10 border-t border-white/20 pt-6 text-center text-sm ${base} ${revealed ? `${shown} delay-500` : hidden}`}>
        © Copyright Reserved by Digitaal.com
      </div>
    </footer>
  );
};

export default Footer;