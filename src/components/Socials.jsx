"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    id: 1,
    name: "Follow Us On Twitter",
    handle: "@artistic_official",
    icon: <Twitter className="w-6 h-6" />,
    link: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Join Us On Linked In",
    handle: "user_artistic_official",
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://linkedin.com/",
  },
  {
    id: 3,
    name: "Follow On Instagram",
    handle: "@artistic_insta_official",
    icon: <Instagram className="w-6 h-6" />,
    link: "https://instagram.com/",
  },
];

const Socials = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-12 lg:px-20 py-16">
      {/* Reveal Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading (center aligned) */}
        <div className="flex justify-center ">
                              <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center text-sm md:text-md font-light text-white leading-none px-4 py-3"
                              >
                                <span className="text-[#6100ff] mr-2">✧</span>
                                Join our agency
                              </motion.h2>
                            </div>
        <div className="mb-10 text-center">
          {/* <p className="text-sm tracking-wide text-green-400 mb-2">
            ✱ JOIN AGENCY
          </p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug">
            Join our <span className="text-[#6100ff] font-semibold">agency</span>{" "}
            of creative <br className="hidden md:block" />
            <span className="text-white">innovators</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white text-sm md:text-base">
            Join our creative community to collaborate, innovate, and thrive
            together. We welcome passionate individuals eager to make.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {socials.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-between bg-[#141414] rounded-full px-6 py-4 transition-all duration-300 group"
            >
              {/* Left: Icon */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6100ff] text-white transition-all duration-300 group-hover:bg-neutral-800 group-hover:text-white">
                  {social.icon}
                </div>
                <div>
                  <h4 className="text-base text-white md:text-lg font-medium">
                    {social.name}
                  </h4>
                  <p className="text-sm text-gray-300">{social.handle}</p>
                </div>
              </div>

              {/* Right: Arrow (switch from ↗ to → on hover) */}
              <div className="relative w-6 h-6">
                {/* Default tilted arrow */}
                <ArrowUpRight
                  className="absolute w-6 h-6 text-gray-300 transition-all duration-500 group-hover:opacity-0"
                  style={{ transform: "rotate(7deg)" }}
                />
                {/* Flat arrow appears on hover */}
                <ArrowRight
                  className="absolute w-6 h-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Socials;
