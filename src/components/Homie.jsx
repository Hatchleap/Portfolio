"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

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

// Framer Motion transition + variants
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { filter: "blur(10px)", y: "20%", opacity: 0 },
  visible: { filter: "blur(0)", y: "0%", opacity: 1, transition },
};

const Homie = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);

  const heroTypedText = useTypingEffect(animatedWords, 200, 2000);

  return (
    <main className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/pngs/herovid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="px-4 md:px-12 py-4 flex items-center justify-between bg-transparent">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-2xl">
  <span className=" p-2 rounded-md flex items-center justify-center">
    <img
      src="/assets/images/pngs/logo.png" // <-- replace with your PNG path
      alt="Logo"
      className="w-8 h-8 object-contain"
    />
  </span>
  Hatchleap
</div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 text-white font-medium items-center">
            <Link href="/" className="hover:text-[#6100ff] transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#6100ff] transition">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#6100ff] transition">
                Services <span className="text-lg">▾</span>
              </button>
              {desktopServicesOpen && (
                <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
                  <Link
                    href="/branding"
                    className="block hover:text-[#6100ff] py-1"
                  >
                    Branding
                  </Link>
                  <Link
                    href="/web"
                    className="block hover:text-[#6100ff] py-1"
                  >
                    Web Design
                  </Link>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopPagesOpen(true)}
              onMouseLeave={() => setDesktopPagesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#6100ff] transition">
                Pages <span className="text-lg">▾</span>
              </button>
              {desktopPagesOpen && (
                <div className="absolute left-0 mt-2 bg-black text-white rounded p-3 min-w-[140px] shadow-lg z-50">
                  <Link
                    href="/portfolio"
                    className="block hover:text-[#6100ff] py-1"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="block hover:text-[#6100ff] py-1"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-[#6100ff] transition">
              Contact
            </Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex gap-5 text-[#6100ff] text-xl items-center">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden text-[#ffffff] bg-[#6100ff] rounded-md text-3xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Only Separator Line */}
        <div className="hidden lg:block border-b border-gray-300/30 w-full"></div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black z-40 transform transition-transform duration-300 ease-in-out flex flex-col pt-20 px-8 gap-4 text-white text-xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#6100ff]"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#6100ff]"
        >
          About Us
        </Link>

        {/* Mobile Services */}
        <button
          className="flex justify-between items-center w-full hover:text-[#6100ff] transition"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          Services <span>{mobileServicesOpen ? "▾" : "▸"}</span>
        </button>
        {mobileServicesOpen && (
          <div className="flex flex-col pl-4 mt-2 gap-2">
            <Link
              href="/branding"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#6100ff]"
            >
              Branding
            </Link>
            <Link
              href="/web"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#6100ff]"
            >
              Web Design
            </Link>
          </div>
        )}

        {/* Mobile Pages */}
        <button
          className="flex justify-between items-center w-full hover:text-[#6100ff] transition"
          onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
        >
          Pages <span>{mobilePagesOpen ? "▾" : "▸"}</span>
        </button>
        {mobilePagesOpen && (
          <div className="flex flex-col pl-4 mt-2 gap-2">
            <Link
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#6100ff]"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#6100ff]"
            >
              Blog
            </Link>
          </div>
        )}

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#6100ff]"
        >
          Contact
        </Link>

        {/* Mobile Social Icons */}
        <div className="flex gap-5 text-[#6100ff] text-xl mt-auto mb-8">
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Hero Section with Blur Reveal Animation */}
      <section className="relative z-20 flex flex-col items-center justify-center text-center md:text-left px-4 md:px-12 w-full min-h-screen pt-10 md:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex flex-col items-center text-center gap-6"
>
  <motion.p
    className="w-full text-3xl sm:text-3xl lg:text-[4rem] font-extralight"
    variants={itemVariants}
  >
    Innovative solutions for
  </motion.p>
  <motion.h1
    className="w-full font-bold text-[#6100ff] py-5 text-5xl sm:text-7xl lg:text-8xl block min-h-[1.2em]"
    variants={itemVariants}
  >
    {heroTypedText}
    <span className="border-r-2 border-[#6100ff] ml-1 animate-blink"></span>
  </motion.h1>
  {/* ...rest of the code... */}
</motion.div>

          <motion.p
            className="max-w-xl text-gray-200 text-base md:text-lg text-md"
            variants={itemVariants}
          >
            At our Creative Digital Agency, we bring your ideas to life by
            crafting engaging, impactful digital experiences that captivate
            audiences and drive results.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="flex items-center gap-2 bg-zinc-600/80 hover:bg-[#6100ff] hover:text-white text-white font-medium px-4 py-1.5 rounded-full shadow-lg text-md transition">
              Get In Touch
              <span className="bg-[#6100ff] text-white rounded-full p-2 ml-2">
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
          </motion.div>
        </motion.div>

        <style jsx>{`
          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          .animate-blink {
            animation: blink 0.8s infinite;
          }
        `}</style>
      </section>

      {/* Marquee */}
      <div className="bg-[#6100ff] text-black py-3 overflow-hidden relative z-20 w-full">
        <Marquee />
      </div>
    </main>
  );
};

export default Homie;
