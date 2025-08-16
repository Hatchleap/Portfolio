"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const textVariants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const text = "Websites that Convert, Campaigns that Perform";
  const words = text.split(" ");

  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Samsung_Logo.svg",
  ];

  const cards = [
    {
      title: "Issuing",
      desc: "Issue cards with flexible funding models for both individuals and businesses.",
      content: (
        <div className="bg-zinc-900 rounded-xl p-6 text-white">
          <div className="mb-6">💳</div>
          <p className="text-sm">Shell Gas Station</p>
          <p className="font-medium">$100.00</p>
        </div>
      ),
    },
    {
      title: "Acquiring",
      desc: "Accept payments with rich details, faster settlement, and full visibility.",
      content: (
        <div className="rounded-xl bg-zinc-50 p-4 border">
          <p className="text-sm font-medium">🪑 Wood Chair - $400.00</p>
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full rounded-md border p-2 text-sm"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 rounded-md border p-2 text-sm"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 rounded-md border p-2 text-sm"
              />
            </div>
            <button className="w-full rounded-md bg-black text-white py-2 text-sm">
              Pay
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Unified Payments",
      desc: "Issue cards and accept payments on one platform to unlock unparalleled capabilities.",
      content: (
        <div className="mt-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-200 via-yellow-100 to-cyan-200 flex items-center justify-center">
          <span className="text-2xl">✨</span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-15 w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-purple-50 to-indigo-100 px-6">
      {/* Text Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="text-center max-w-3xl"
      >
        <h1 className="mb-6 text-4xl font-bold leading-tight text-black w-full md:text-6xl">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={textVariants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        <motion.p
          className="mb-8 text-[1rem] font-bold text-black md:text-[1.15rem]"
          transition={transition}
          variants={textVariants}
        >
          At Web Impetus, we blend our web and marketing wizardry
          <br />
          to make your brand's online presence more profitable.
        </motion.p>

        <div className="flex justify-center gap-4 mb-12">
          <motion.div transition={transition} variants={textVariants}>
            <button className="rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800 transition">
              Get Started
            </button>
          </motion.div>
          <motion.div transition={transition} variants={textVariants}>
            <button className="rounded-full bg-white px-6 py-3 text-zinc-800 font-medium border hover:bg-zinc-100 transition">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl">
        {/* Desktop & Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-md flex flex-col items-center justify-center"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: i * 0.2 }}
              variants={cardVariants}
            >
              <h3 className="font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{card.desc}</p>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="flex md:hidden overflow-x-auto gap-4 py-4 snap-x snap-mandatory">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="w-[260px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-md flex flex-col items-center justify-center snap-center"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: i * 0.2 }}
              variants={cardVariants}
            >
              <h3 className="font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{card.desc}</p>
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="overflow-hidden whitespace-nowrap w-full pt-10">
        <div className="flex animate-marquee">
          {Array(4)
            .fill(brands)
            .flat()
            .map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Brand ${index}`}
                className="h-4 mx-8 object-contain flex-shrink-0"
              />
            ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-25%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
