"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    review:
      "We cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand, and they kept us informed every step of the way.",
    name: "Ralph Edwards",
    role: "DESIGNER",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 4,
    review:
      "We cannot say enough good things about the team there. They took our vision and turned it into a stunning website that perfectly captures everything.",
    name: "Theresa Webb",
    role: "DESIGNER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 5,
    review:
      "Fantastic collaboration! They built exactly what we wanted with great communication and creativity.",
    name: "John Carter",
    role: "UI/UX EXPERT",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { rating, review, name, role, image } = testimonials[current];

  return (
    <section className="text-black dark:text-black bg-white py-16 px-6 lg:px-20 relative overflow-hidden">
      {/* Centered Section Title */}
      {/* <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-4xl font-bold text-black text-center w-full mb-12 border-2 border-black/85 border-r-4"
      >
        <span className="text-[#C204E2]">✧</span> Testimonial
      </motion.h2> */}

    <div className="flex justify-center mb-12">
  {/* <div className="border-2 border-gray-400 rounded-lg flex items-center justify-center"> */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex items-center justify-center text-2xl md:text-4xl font-bold text-black leading-none px-4 py-3"
    >
      <span className="text-[#6100ff] mr-2">✧</span>
      Testimonial
    </motion.h2>
  {/* </div> */}
</div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
      >
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Hear what others say about{" "}
            <span className="text-[#6100ff]">partnering with us</span>
          </h2>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <div className="text-6xl font-bold">4.8</div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#6100ff] w-6 h-6 fill-[#6100ff]"
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-2">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonial Card */}
        <motion.div
          key={current} // re-animates when changing testimonial
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 rounded-2xl p-8 relative shadow-lg"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="text-[#6100ff] w-5 h-5 fill-[#6100ff]"
              />
            ))}
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <Star key={i} className="text-[#6100ff] w-5 h-5" />
            ))}
          </div>

          {/* Review */}
          <p className="text-lg text-gray-200 mb-6">{review}</p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="rounded-full border-2 border-purple-600"
            />
            <div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#6100ff] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % testimonials.length)
              }
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#6100ff] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
