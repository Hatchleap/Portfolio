"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CardContent = {
  websites: [
    { type: "Primary", color: "bg-lime-400 text-black" },
    { type: "Secondary", color: "bg-black text-white" },
    { type: "Outline", color: "bg-white text-gray-600 border" },
  ],
  campaigns: {
    date: "Oct 15, 2023",
    uniqueVisitors: 9706,
    totalPageviews: 6816,
  },
  communication: {
    name: "Web Impetus",
    location: "New Delhi, India",
    status: "AVAILABLE",
    badge: "FRAMER EXPERT",
    messageTime: "45 mins ago",
  },
};

// Animation variants and transition
const transition = { duration: 1, ease: "easeInOut" };

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedCard = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={transition}
      style={{ willChange: "transform, opacity", ...props.style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#ffffff] dark:bg-[#ffffff]">
      {/* Title Animation */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h2 className=" text-[#000000] dark:text-[#000000] text-4xl font-bold">What Sets Us Apart</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Bang for the Buck Marketing and Design. We don't just offer services, we
          provide solutions.
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-14 md:gap-8 max-w-7xl mx-auto">
        {/* Card 1: Websites */}
        <AnimatedCard
          className="rounded-xl bg-orange-100 shadow-lg hover:shadow-2xl border border-gray-300 min-h-[400px] flex flex-col overflow-hidden"
          whileHover={{
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          style={{
            boxShadow:
              "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Image with gradient overlay */}
          <div className="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
              alt="Website Development"
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            {/* Gradient overlay to merge with card background */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-100 to-transparent"></div>
          </div>

          <div className="flex gap-2 mb-4 px-4">
            {CardContent.websites.map((item, idx) => (
              <motion.div
                key={idx}
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${item.color} shadow-sm`}
                whileHover={{ scale: 1.05 }}
              >
                {item.type}
              </motion.div>
            ))}
          </div>

          <div className="flex-grow px-4 pb-6">
            <h3 className="text-xl text-[#000000] dark:text-[#000000] md:text-2xl font-bold mb-3">High Converting Websites</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We create pixel-perfect websites that convert your visitors into
              customers effortlessly.
            </p>
          </div>
        </AnimatedCard>

        {/* Card 2: Campaigns */}
        <AnimatedCard
          className="relative rounded-xl bg-blue-100 shadow-lg hover:shadow-2xl border border-gray-300 min-h-[400px] flex flex-col overflow-visible"
          whileHover={{
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          style={{
            boxShadow:
              "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-white rounded-lg w-64 border border-gray-300 z-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, -6, 0],
              opacity: 1,
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              opacity: { duration: 0.8, delay: 0.2 },
            }}
            style={{
              boxShadow:
                "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <p className="text-xs text-gray-500">{CardContent.campaigns.date}</p>
            <p className="text-xs text-[#6a7282] dark:text-[#6a7282]">
              Unique Visitors: {" "}
              <span className="font-bold">
                {CardContent.campaigns.uniqueVisitors}
              </span>
            </p>
            <p className="text-xs text-[#6a7282] dark:text-[#6a7282]">
              Total Pageviews: {" "}
              <span className="font-bold">
                {CardContent.campaigns.totalPageviews}
              </span>
            </p>
          </motion.div>

          {/* Image with gradient overlay */}
          <div className="relative mb-4 ">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
              alt="Marketing Campaigns"
              className="w-full h-52 object-cover rounded-lg"
              loading="lazy"
            />
            {/* Gradient overlay to merge with card background */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-100 to-transparent rounded-b-lg"></div>
          </div>

          <div className="flex-grow px-4 pb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#000000] dark:text-[#000000]">Effective Campaigns</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We use our Performance Marketing skills to deliver ROIs like you've
              never seen before. From PPC ad management to retargeting campaigns,
              we do it all.
            </p>
          </div>
        </AnimatedCard>

        {/* Card 3: Communication */}
        <AnimatedCard
          className="relative rounded-xl bg-green-100 shadow-lg hover:shadow-2xl border border-gray-300 min-h-[400px] flex flex-col overflow-visible"
          whileHover={{
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          style={{
            boxShadow:
              "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-white rounded-lg w-64 border border-gray-300 z-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, -4, 0],
              opacity: 1,
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              },
              opacity: { duration: 0.8, delay: 0.2 },
            }}
            style={{
              boxShadow:
                "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <p className="text-xs text-gray-500 mb-1">
              Just sent you a message!{" "}
              <span className="font-semibold">
                {CardContent.communication.messageTime}
              </span>
            </p>
            <p className="text-green-600 font-semibold text-xs">
              {CardContent.communication.status}
            </p>
            <p className="mt-1 font-bold text-xs text-[#6a7282] dark:text-[#6a7282]">
              {CardContent.communication.name}
            </p>
            <p className="text-xs text-gray-500">
              {CardContent.communication.location}
            </p>
          </motion.div>

          {/* Image with gradient overlay */}
          <div className="relative mb-4 ">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop"
              alt="Communication"
              className="w-full h-52 object-cover rounded-lg"
              loading="lazy"
            />
            {/* Gradient overlay to merge with card background */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-100 to-transparent rounded-b-lg"></div>
          </div>

          <div className="flex-grow px-4 pb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#000000] dark:text-[#000000]">Great Communication</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Support and communication is key to delivering great outcomes on
              time. That is what we strive for all the time.
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default About;
