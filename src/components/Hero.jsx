// "use client";

// import React from "react";
// import { motion } from "framer-motion";


// const HERO_VIDEO = "/assets/images/pngs/herovid.mp4";

// const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
// const textVariants = {
//   hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
//   visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0 },
// };

// const Hero = () => {
//   const text = "Websites that Convert, Campaigns that Perform";
//   const words = text.split(" ");

//   const brands = [
//     "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
//     "https://upload.wikimedia.org/wikipedia/commons/2/20/Samsung_Logo.svg",
//   ];

//   const cards = [
//     {
//       title: "Issuing",
//       desc: "Issue cards with flexible funding models for both individuals and businesses.",
//       content: (
//         <div className="bg-zinc-900 rounded-xl p-6 text-white">
//           <div className="mb-6">💳</div>
//           <p className="text-sm">Shell Gas Station</p>
//           <p className="font-medium">$100.00</p>
//         </div>
//       ),
//     },
//     {
//       title: "Acquiring",
//       desc: "Accept payments with rich details, faster settlement, and full visibility.",
//       content: (
//         <div className="rounded-xl bg-zinc-50 p-4 border">
//           <p className="text-sm font-medium">🪑 Wood Chair - $400.00</p>
//           <div className="mt-4 space-y-2">
//             <input
//               type="text"
//               placeholder="Card Number"
//               className="w-full rounded-md border p-2 text-sm"
//             />
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 className="w-1/2 rounded-md border p-2 text-sm"
//               />
//               <input
//                 type="text"
//                 placeholder="CVV"
//                 className="w-1/2 rounded-md border p-2 text-sm"
//               />
//             </div>
//             <button className="w-full rounded-md bg-black text-white py-2 text-sm">
//               Pay
//             </button>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Unified Payments",
//       desc: "Issue cards and accept payments on one platform to unlock unparalleled capabilities.",
//       content: (
//         <div className="mt-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-200 via-yellow-100 to-cyan-200 flex items-center justify-center">
//           <span className="text-2xl">✨</span>
//         </div>
//       ),
//     },
//   ];

//   return (
//       <section
//       className="relative py-15 w-full flex flex-col items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden"
//       style={{
//         // Remove backgroundImage
//       }}
//     >
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover pointer-events-none"
//         src={HERO_VIDEO}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       {/* Text Animation */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         transition={{ staggerChildren: 0.04 }}
//         className="text-center max-w-3xl"
//       >
//         <h1 className="mb-6 text-4xl font-bold leading-tight text-white w-full md:text-6xl">
//           {words.map((word, index) => (
//             <React.Fragment key={index}>
//               <motion.span
//                 className="inline-block"
//                 transition={transition}
//                 variants={textVariants}
//               >
//                 {word}
//               </motion.span>
//               {index < words.length - 1 && " "}
//             </React.Fragment>
//           ))}
//         </h1>

//         <motion.p
//           className="mb-8 text-[1rem] font-bold text-white md:text-[1.15rem]"
//           transition={transition}
//           variants={textVariants}
//         >
//           At Web Impetus, we blend our web and marketing wizardry
//           <br />
//           to make your brand's online presence more profitable.
//         </motion.p>

//         <div className="flex justify-center gap-4 mb-12">
//           <motion.div transition={transition} variants={textVariants}>
//             <button className="rounded-full bg-[#C204E2] px-6 py-3 text-white font-medium hover:bg-zinc-800 transition">
//               Get Started
//             </button>
//           </motion.div>
//           <motion.div transition={transition} variants={textVariants}>
//             <button className="rounded-full bg-white px-6 py-3 text-zinc-800 font-medium border hover:bg-zinc-100 transition">
//               Contact Sales
//             </button>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Cards Section */}
//       <div className="w-full max-w-6xl">
//         {/* Desktop & Tablet Grid */}
//         <div className="hidden md:grid md:grid-cols-3 gap-6">
//           {cards.map((card, i) => (
//             <motion.div
//               key={i}
//               className="rounded-2xl bg-white p-6 shadow-md flex flex-col items-center justify-center"
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.8, delay: i * 0.2 }}
//               variants={cardVariants}
//             >
//               <h3 className="font-semibold mb-3">{card.title}</h3>
//               <p className="text-sm text-zinc-500 mb-4">{card.desc}</p>
//               {card.content}
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Horizontal Scroll */}
//         <div className="flex md:hidden overflow-x-auto gap-4 py-4 snap-x snap-mandatory">
//           {cards.map((card, i) => (
//             <motion.div
//               key={i}
//               className="w-[260px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-md flex flex-col items-center justify-center snap-center"
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.8, delay: i * 0.2 }}
//               variants={cardVariants}
//             >
//               <h3 className="font-semibold mb-3">{card.title}</h3>
//               <p className="text-sm text-zinc-500 mb-4">{card.desc}</p>
//               {card.content}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Brand Marquee */}
//       {/* <div className="overflow-hidden whitespace-nowrap w-full pt-10">
//         <div className="flex animate-marquee">
//           {Array(4)
//             .fill(brands)
//             .flat()
//             .map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`Brand ${index}`}
//                 className="h-4 mx-8 object-contain flex-shrink-0"
//               />
//             ))}
//         </div>

//         <style jsx>{`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0%);
//             }
//             100% {
//               transform: translateX(-25%);
//             }
//           }
//           .animate-marquee {
//             animation: marquee 20s linear infinite;
//           }
//         `}</style>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;
"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  // text animation for "Art & Design"
  const texts = ["Art & Design", "Creative Branding", "Digital Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/assets/images/pngs/herovid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 absolute top-0 left-0 w-full z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/pngs/logo.png"
            alt="logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">artistic.</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About Us</li>
          <li className="hover:text-green-400 cursor-pointer">Services</li>
          <li className="hover:text-green-400 cursor-pointer">Pages</li>
          <li className="hover:text-green-400 cursor-pointer">Contact Us</li>
        </ul>

        {/* Social */}
        <div className="flex gap-4 text-lg">
          <FaXTwitter className="cursor-pointer hover:text-green-400" />
          <FaFacebookF className="cursor-pointer hover:text-green-400" />
          <FaInstagram className="cursor-pointer hover:text-green-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Innovative solutions for{" "}
          <span className="text-green-400 transition-all duration-500">
            {texts[index]}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-300">
          At our Creative Digital Agency, we bring your ideas to life by crafting engaging,
          impactful digital experiences that captivate audiences and drive results. From
          innovative web design to compelling content and cutting-edge digital strategies.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-8">
          {/* Spinning Circle */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-green-400 flex items-center justify-center animate-spin-slow">
              <span className="absolute text-xs text-white rotate-[-45deg]">
                LEARN MORE
              </span>
            </div>
            <button className="absolute inset-0 flex items-center justify-center text-green-400 text-3xl">
              ▶
            </button>
          </div>

          {/* CTA */}
          <button className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300 transition">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-green-400 text-black py-3 overflow-hidden whitespace-nowrap text-lg font-semibold absolute bottom-0 w-full">
        <div className="animate-marquee inline-block">
          * Custom Branding * Website Design * Digital Marketing * Custom
          Branding * Website Design * Digital Marketing *
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
