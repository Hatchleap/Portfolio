"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Marquee from "./Marquee"; // Make sure the path is correct if Marquee.jsx is in the same folder

// Animated words for typing effect
const animatedWords = [
  "Art & Design",
  "Web Designing",
  "Ecommerce",
  "Branding",
  "Graphic Designing",
];

// Typing Effect Hook
function useTypingEffect(words, speed = 100, pause = 1200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && text === currentWord) {
      typingSpeed = pause;
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

const Homie = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);

  const heroTypedText = useTypingEffect(animatedWords, 200, 2000);

  return (
    <main className="relative md:min-h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/pngs/herovid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <span className="bg-[#C204E2] p-2 rounded-md">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#C204E2" />
              <path d="M8 14L14 8L20 14" stroke="#222" strokeWidth="2" />
            </svg>
          </span>
          artistic.
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-white font-medium items-center">
          <Link href="/" className="hover:text-[#C204E2] transition">Home</Link>
          <Link href="/about" className="hover:text-[#C204E2] transition">About Us</Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#C204E2] transition">
              Services <span className="text-lg">▾</span>
            </button>
            {desktopServicesOpen && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
                <Link href="/branding" className="block hover:text-[#C204E2] py-1">Branding</Link>
                <Link href="/web" className="block hover:text-[#C204E2] py-1">Web Design</Link>
              </div>
            )}
          </div>

          {/* Desktop Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopPagesOpen(true)}
            onMouseLeave={() => setDesktopPagesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#C204E2] transition">
              Pages <span className="text-lg">▾</span>
            </button>
            {desktopPagesOpen && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
                <Link href="/portfolio" className="block hover:text-[#C204E2] py-1">Portfolio</Link>
                <Link href="/blog" className="block hover:text-[#C204E2] py-1">Blog</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-[#C204E2] transition">Contact</Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-5 text-[#C204E2] text-xl items-center">
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden text-[#C204E2] text-3xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <hr className="w-full my-24 border-t-2 border-zinc-700 opacity-85 relative z-30 hidden sm:block" />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black z-40 transform transition-transform duration-300 ease-in-out flex flex-col pt-20 px-8 gap-4 text-white text-xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">About Us</Link>

        {/* Mobile Services Dropdown */}
        <button
          className="flex justify-between items-center w-full hover:text-[#C204E2] transition"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          Services <span>{mobileServicesOpen ? "▾" : "▸"}</span>
        </button>
        {mobileServicesOpen && (
          <div className="flex flex-col pl-4 mt-2 gap-2">
            <Link href="/branding" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Branding</Link>
            <Link href="/web" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Web Design</Link>
          </div>
        )}

        {/* Mobile Pages Dropdown */}
        <button
          className="flex justify-between items-center w-full hover:text-[#C204E2] transition"
          onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
        >
          Pages <span>{mobilePagesOpen ? "▾" : "▸"}</span>
        </button>
        {mobilePagesOpen && (
          <div className="flex flex-col pl-4 mt-2 gap-2">
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Portfolio</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Blog</Link>
          </div>
        )}

        <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Contact</Link>

        {/* Mobile Social Icons */}
        <div className="flex gap-5 text-[#C204E2] text-xl mt-auto mb-8">
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col md:min-h-screen md:pt-[40px] pt-28 z-20 px-4 md:px-0 text-center">
        <h1 className="w-full text-4xl sm:text-5xl lg:text-[7rem] font-extralight mb-8 md:mb-14 text-center md:text-left px-4 md:px-12">
          Innovative solutions for <br />
          <span className="font-bold text-[#C204E2] text-5xl sm:text-6xl lg:text-8xl block min-h-[1.2em]">
            {heroTypedText}
            <span className="border-r-2 border-[#C204E2] ml-1 animate-blink"></span>
          </span>
        </h1>

        {/* Hero Content Below */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto gap-8">
          <p className="max-w-xl text-gray-200 text-base md:text-2xl mb-6 md:mb-12">
            At our Creative Digital Agency, we bring your ideas to life by
            crafting engaging, impactful digital experiences that captivate
            audiences and drive results.
          </p>
          <button className="flex items-center gap-2 bg-zinc-600/80 hover:bg-[#C204E2] hover:text-black text-white font-medium px-8 py-4 rounded-full shadow-lg text-lg transition">
            Get In Touch
            <span className="bg-[#C204E2] text-black rounded-full p-2 ml-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M4 9h10M9 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.8s infinite;
          }
        `}</style>
      </section>

      {/* Marquee Section */}
      <div className="bg-[#C204E2] text-black py-3 overflow-hidden relative z-20 mt-28 md:mt-20 w-full">
        <Marquee />
      </div>
    </main>
  );
};

export default Homie;




// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import Marquee from "./Marquee"; // Ensure this path is correct

// // Animated words for typing effect
// const animatedWords = [
//   "Art & Design",
//   "Web Designing",
//   "Ecommerce",
//   "Branding",
//   "Graphic Designing",
// ];

// // Typing Effect Hook
// function useTypingEffect(words, speed = 100, pause = 1200) {
//   const [text, setText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[wordIndex];
//     let typingSpeed = isDeleting ? speed / 2 : speed;

//     if (!isDeleting && text === currentWord) {
//       typingSpeed = pause;
//       setIsDeleting(true);
//     } else if (isDeleting && text === "") {
//       setIsDeleting(false);
//       setWordIndex((prev) => (prev + 1) % words.length);
//     }

//     const timeout = setTimeout(() => {
//       setText((prev) =>
//         isDeleting
//           ? currentWord.substring(0, prev.length - 1)
//           : currentWord.substring(0, prev.length + 1)
//       );
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, wordIndex, words, speed, pause]);

//   return text;
// }

// const Homie = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
//   const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);

//   const heroTypedText = useTypingEffect(animatedWords, 200, 2000);

//   return (
//     <main className="relative md:min-h-screen overflow-hidden font-sans">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/assets/images/pngs/herovid.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full z-10" />

//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex items-center justify-between bg-transparent">
//         {/* Logo */}
//         <div className="flex items-center gap-2 text-white font-bold text-2xl">
//           <span className="bg-[#C204E2] p-2 rounded-md">
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//               <circle cx="14" cy="14" r="14" fill="#C204E2" />
//               <path d="M8 14L14 8L20 14" stroke="#222" strokeWidth="2" />
//             </svg>
//           </span>
//           artistic.
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex gap-8 text-white font-medium items-center">
//           <Link href="/" className="hover:text-[#C204E2] transition">Home</Link>
//           <Link href="/about" className="hover:text-[#C204E2] transition">About Us</Link>

//           <div
//             className="relative"
//             onMouseEnter={() => setDesktopServicesOpen(true)}
//             onMouseLeave={() => setDesktopServicesOpen(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-[#C204E2] transition">
//               Services <span className="text-lg">▾</span>
//             </button>
//             {desktopServicesOpen && (
//               <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
//                 <Link href="/branding" className="block hover:text-[#C204E2] py-1">Branding</Link>
//                 <Link href="/web" className="block hover:text-[#C204E2] py-1">Web Design</Link>
//               </div>
//             )}
//           </div>

//           <div
//             className="relative"
//             onMouseEnter={() => setDesktopPagesOpen(true)}
//             onMouseLeave={() => setDesktopPagesOpen(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-[#C204E2] transition">
//               Pages <span className="text-lg">▾</span>
//             </button>
//             {desktopPagesOpen && (
//               <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
//                 <Link href="/portfolio" className="block hover:text-[#C204E2] py-1">Portfolio</Link>
//                 <Link href="/blog" className="block hover:text-[#C204E2] py-1">Blog</Link>
//               </div>
//             )}
//           </div>

//           <Link href="/contact" className="hover:text-[#C204E2] transition">Contact</Link>
//         </div>

//         {/* Social Icons */}
//         <div className="hidden lg:flex gap-5 text-[#C204E2] text-xl items-center">
//           <FaTwitter className="hover:text-white cursor-pointer" />
//           <FaFacebookF className="hover:text-white cursor-pointer" />
//           <FaInstagram className="hover:text-white cursor-pointer" />
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="lg:hidden text-[#C204E2] text-3xl z-50"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </nav>

//       <hr className="w-full my-24 border-t-2 border-gray-800 opacity-85 relative z-30 hidden sm:block" />

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-72 bg-black z-40 transform transition-transform duration-300 ease-in-out flex flex-col pt-20 px-8 gap-4 text-white text-xl ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">Home</Link>
//         <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C204E2]">About Us</Link>
//       </div>

//       {/* Hero Section */}
//       <section className="relative w-full flex flex-col justify-center items-center md:min-h-screen z-20 pt-28 md:pt-40  px-4 md:px-24 ">
//         <h1 className="w-full text-4xl sm:text-5xl lg:text-8xl font-light mb-6 text-center md:text-left">
//           Innovative solutions for <br />
//           <span className="font-bold text-[#C204E2] text-5xl sm:text-6xl lg:text-8xl block min-h-[1.2em]">
//             {heroTypedText}
//             <span className="border-r-2 border-[#C204E2] ml-1 animate-blink"></span>
//           </span>
//         </h1>

//         <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-6 text-center">
//           <p className="max-w-xl text-gray-200 text-base md:text-lg">
//             At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results.
//           </p>
//           <button className="flex items-center gap-2 bg-zinc-900/80 hover:bg-[#C204E2] hover:text-black text-white font-medium px-8 py-4 rounded-full shadow-lg text-lg transition">
//             Get In Touch
//             <span className="bg-[#C204E2] text-black rounded-full p-2 ml-2">
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </span>
//           </button>
//         </div>

//         <style jsx>{`
//           @keyframes blink {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0; }
//           }
//           .animate-blink {
//             animation: blink 0.8s infinite;
//           }
//         `}</style>
//       </section>

//       {/* Marquee Section */}
//       <div className="bg-[#C204E2] text-black py-4 overflow-hidden relative z-20 mt-8 md:mt-12 w-full">
//         <Marquee />
//       </div>
//     </main>
//   );
// };

// export default Homie;

