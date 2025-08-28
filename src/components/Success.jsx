"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Counter animation
const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const end = to;
    const increment = (end - start) / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}%</span>;
};

// Animation variants
const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { filter: "blur(10px)", y: "20%", opacity: 0 },
  visible: { filter: "blur(0)", y: "0%", opacity: 1, transition },
};

const Success = () => {
  return (
    <section className="relative w-full flex justify-center px-4 py-16 bg-white">
      {/* Border Wrapper with fade-out bottom */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative scrollreveal w-full max-w-6xl rounded-xl p-[10px] border-8 overflow-hidden"
      >
        {/* Top + side glowing border */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000] to-transparent  rounded-xl" />
        </div>

        {/* Inner Content */}
        <div className="relative rounded-xl bg-white p-8 md:p-12 flex flex-col md:flex-row gap-8 border border-gray-200/40">
          {/* Left Section */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-black flex flex-col gap-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
              Expertise that <span className="font-semibold">drives</span> digital
            </h2>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h2 className="md:text-5xl text-3xl font-bold text-[#6100ff]">
                  +<Counter from={0} to={23} duration={2} />
                </h2>
                <p className="text-sm md:text-sm text-gray-700">
                  By optimizing your website for search engines.
                </p>
              </div>
              <div>
                <h2 className="md:text-5xl text-3xl font-extrabold text-[#6100ff]">
                  +<Counter from={0} to={11} duration={2} />
                </h2>
                <p className="text-sm text-gray-700">
                  Rise in revenue as more visitors convert into paying customers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-gray-700 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-semibold text-lg md:text-xl text-black">
                <span className="text-[#6100ff]">✶</span> Social Media Management:
              </h3>
              <p className="text-sm">
                Our social media management services focus on building and enhancing
                your brand’s online presence. We create engaging content, manage
                your social media accounts, and analyze performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl text-black">
                <span className="text-[#6100ff]">✶</span> E-commerce Solutions:
              </h3>
              <p className="text-sm">
                Our e-commerce solutions are designed to create seamless online
                shopping experiences. From user-friendly website design to secure
                payment processing and inventory management.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Success;
