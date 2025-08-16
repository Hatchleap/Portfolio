// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   return (
//     <header className="w-full py-4 border-b border-gray-200">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-6">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/assets/images/pngs/rtjgjng.png"
//             alt="Portfolio Logo"
//             width={32}
//             height={32}
//             unoptimized
//           />
//           <span className="text-black text-2xl font-semibold">HatchLeap</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-2 text-sm font-bold text-white bg-black px-4 py-1 rounded-full shadow-lg">
//           <Link
//             href="/"
//             className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
//               pathname === "/" ? "bg-gray-800 text-white" : "hover:text-gray-300"
//             }`}
//           >
//             HOME
//           </Link>

//           <Link
//             href="/about"
//             className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
//               pathname === "/about"
//                 ? "bg-gray-800 text-white"
//                 : "hover:text-gray-300"
//             }`}
//           >
//             ABOUT
//           </Link>

//           {/* Services Dropdown */}
//           <div className="relative group">
//             <div
//               className={`flex items-center space-x-1 cursor-pointer px-4 py-1 rounded-full ${
//                 pathname.startsWith("/services")
//                   ? "bg-gray-800 text-white"
//                   : "hover:text-gray-300"
//               }`}
//             >
//               <span>SERVICES</span>
//               <span className="text-purple-500 text-2xl">▾</span>
//             </div>
//             <div className="absolute left-0 top-full hidden group-hover:block bg-gray-900 rounded-lg shadow-lg w-44 animate-fadeIn z-50">
//               <ul className="py-2 text-sm text-white">
//                 <li className="px-4 py-2 hover:bg-gray-800 transition-all">
//                   <Link href="/services/web-development">Web Development</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-800 transition-all">
//                   <Link href="/services/app-development">App Development</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-800 transition-all">
//                   <Link href="/services/seo">SEO Services</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <Link
//             href="/case-studies"
//             className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
//               pathname === "/case-studies"
//                 ? "bg-gray-800 text-white"
//                 : "hover:text-gray-300"
//             }`}
//           >
//             CASE STUDIES
//           </Link>

//           <Link
//             href="/contact"
//             className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
//               pathname === "/contact"
//                 ? "bg-gray-800 text-white"
//                 : "hover:text-gray-300"
//             }`}
//           >
//             CONTACT
//           </Link>
//         </nav>

//         {/* Desktop Button */}
//         <button className="hidden lg:block bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
//           Get Started
//         </button>

//         {/* Mobile Menu Button - Using CSS instead of icons */}
//         <button
//           className="lg:hidden p-2 text-gray-800 flex flex-col space-y-1 justify-center items-center w-8 h-8"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             // X icon
//             <div className="relative w-6 h-6">
//               <span className="absolute w-6 h-0.5 bg-gray-800 transform rotate-45 top-3"></span>
//               <span className="absolute w-6 h-0.5 bg-gray-800 transform -rotate-45 top-3"></span>
//             </div>
//           ) : (
//             // Hamburger menu
//             <>
//               <span className="w-6 h-0.5 bg-gray-800"></span>
//               <span className="w-6 h-0.5 bg-gray-800"></span>
//               <span className="w-6 h-0.5 bg-gray-800"></span>
//             </>
//           )}
//         </button>
//       </div>

//       {/* Mobile & Tablet Navigation */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-black text-white px-4 py-3 space-y-2">
//           <Link href="/" className="block py-2 hover:text-gray-300">
//             HOME
//           </Link>
//           <Link href="/about" className="block py-2 hover:text-gray-300">
//             ABOUT
//           </Link>

//           {/* Services Dropdown */}
//           <div>
//             <button
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className="w-full flex justify-between items-center py-2"
//             >
//               <span>SERVICES</span>
//               <span className="text-purple-500 text-2xl">▾</span>
//             </button>
//             {servicesOpen && (
//               <div className="pl-4 space-y-1">
//                 <Link
//                   href="/services/web-development"
//                   className="block py-1 hover:text-gray-300"
//                 >
//                   Web Development
//                 </Link>
//                 <Link
//                   href="/services/app-development"
//                   className="block py-1 hover:text-gray-300"
//                 >
//                   App Development
//                 </Link>
//                 <Link
//                   href="/services/seo"
//                   className="block py-1 hover:text-gray-300"
//                 >
//                   SEO Services
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/case-studies" className="block py-2 hover:text-gray-300">
//             CASE STUDIES
//           </Link>
//           <Link href="/contact" className="block py-2 hover:text-gray-300">
//             CONTACT
//           </Link>
//           <button className="w-full bg-purple-600 py-2 rounded-full hover:bg-purple-700">
//             Get Started
//           </button>
//         </div>
//       )}

//       {/* Animation styles */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-5px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;




"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // At top → transparent
        setIsAtTop(true);
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down → hide
        setShowHeader(false);
        setIsAtTop(false);
      } else {
        // Scrolling up → show with glass
        setShowHeader(true);
        setIsAtTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full py-4 sticky top-0 left-0 z-50 bg-transparent ${
        showHeader
          ? isAtTop
            ? "bg-transparent"
            : "backdrop-blur-md bg-black/40 shadow-md"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/pngs/rtjgjng.png"
            alt="Portfolio Logo"
            width={32}
            height={32}
            unoptimized
          />
          <span className="text-black text-2xl font-semibold">Hatchleap</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 text-sm font-bold text-white bg-black/40 backdrop-blur-md px-4 py-1 rounded-full shadow-lg">
          <Link
            href="/"
            className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
              pathname === "/" ? "bg-gray-800 text-white" : "hover:text-gray-300"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
              pathname === "/about"
                ? "bg-gray-800 text-white"
                : "hover:text-gray-300"
            }`}
          >
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div
              className={`flex items-center space-x-1 cursor-pointer px-4 py-1 rounded-full ${
                pathname.startsWith("/services")
                  ? "bg-gray-800 text-white"
                  : "hover:text-gray-300"
              }`}
            >
              <span>SERVICES</span>
              <span className="text-purple-500 text-2xl">▾</span>
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-gray-900 rounded-lg shadow-lg w-44 animate-fadeIn z-50">
              <ul className="py-2 text-sm text-white">
                <li className="px-4 py-2 hover:bg-gray-800 transition-all">
                  <Link href="/services/web-development">Web Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 transition-all">
                  <Link href="/services/app-development">App Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 transition-all">
                  <Link href="/services/seo">SEO Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/case-studies"
            className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
              pathname === "/case-studies"
                ? "bg-gray-800 text-white"
                : "hover:text-gray-300"
            }`}
          >
            CASE STUDIES
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
              pathname === "/contact"
                ? "bg-gray-800 text-white"
                : "hover:text-gray-300"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white flex flex-col space-y-1 justify-center items-center w-8 h-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            // X icon
            <div className="relative w-6 h-6">
              <span className="absolute w-6 h-0.5 bg-black transform rotate-45 top-3"></span>
              <span className="absolute w-6 h-0.5 bg-black transform -rotate-45 top-3"></span>
            </div>
          ) : (
            // Hamburger menu
            <>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile & Tablet Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md text-white px-4 py-3 space-y-2">
          <Link href="/" className="block py-2 hover:text-gray-300">
            HOME
          </Link>
          <Link href="/about" className="block py-2 hover:text-gray-300">
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center py-2"
            >
              <span>SERVICES</span>
              <span className="text-purple-500 text-2xl">▾</span>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/services/web-development"
                  className="block py-1 hover:text-gray-300"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/app-development"
                  className="block py-1 hover:text-gray-300"
                >
                  App Development
                </Link>
                <Link
                  href="/services/seo"
                  className="block py-1 hover:text-gray-300"
                >
                  SEO Services
                </Link>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="block py-2 hover:text-gray-300">
            CASE STUDIES
          </Link>
          <Link href="/contact" className="block py-2 hover:text-gray-300">
            CONTACT
          </Link>
          <button className="w-full bg-purple-600 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </button>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;

