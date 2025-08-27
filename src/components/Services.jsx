"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Example icons for each service (replace with your own or use images)
const serviceIcons = [
  "assets/images/pngs/w3.png",
  "assets/images/pngs/wo.png",
  "assets/images/pngs/s1.png",
  "assets/images/pngs/f.png",
  "assets/images/pngs/m2.png",
  "assets/images/pngs/b2.png",
];

// Mapping backgrounds for Tailwind to recognize
const bgClasses = {
  1: {  active: "bg-[#CDC1FF]", hover: "hover:bg-[#CDC1FF]" },
  2: {  active: "bg-[#C4E1F6]", hover: "hover:bg-[#C4E1F6]" },
  3: {  active: "bg-[#CAE8BD]", hover: "hover:bg-[#CAE8BD]" },
  4: {  active: "bg-[#FFFFC5]", hover: "hover:bg-[#FFFFC5]" },
  5: {  active: "bg-[#E7D4B5]", hover: "hover:bg-[#E7D4B5]" },
  6: { base: "bg-red-0", active: "bg-[#EBD6FB]", hover: "hover:bg-[#EBD6FB]" },
};

const services = [
  {
    id: 1,
    title: "Web Design",
    desc: "Web Design that leaves an impression and converts your visitors to customers effortlessly.",
    img: "assets/images/pngs/ux.jpeg",
  },
  {
    id: 2,
    title: "WordPress Development",
    desc: "Custom WordPress solutions to power your business websites with speed and flexibility.",
    img: "assets/images/pngs/ux.jpeg",
  },
  {
    id: 3,
    title: "E-Commerce Development",
    desc: "Seamless online stores built for performance, scalability, and user experience.",
    img: "assets/images/pngs/s.jpeg",
  },
  {
    id: 4,
    title: "Framer Development",
    desc: "Build visually stunning websites with Framer tailored to your brand identity.",
    img: "assets/images/pngs/ux.jpeg",
  },
  {
    id: 5,
    title: "Performance Marketing",
    desc: "Result-driven strategies to maximize your ROI and grow your audience.",
    img: "assets/images/pngs/m.jpeg",
  },
  {
    id: 6,
    title: "Branding",
    desc: "Crafting brand experiences that connect with your customers emotionally.",
    img: "assets/images/pngs/b.jpeg",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="w-full py-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center ">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center text-sm md:text-md font-light text-black leading-none px-4 py-3"
            >
              <span className="text-[#6100ff] mr-2">✧</span>
              Our Service
            </motion.h2>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            Here's What We Can Do For{" "}
            <span className="text-[#6100ff]"><br className="hidden md:block text-[#6100ff]" /> Your Brand.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our solutions are centered around delivering profitable outcomes for
            your business.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* Left: Service List */}
          <div className="flex flex-col gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-start gap-4 cursor-pointer rounded-2xl transition-all duration-200
                  ${bgClasses[service.id].base}
                  ${
                    activeService.id === service.id
                      ? `${bgClasses[service.id].active} shadow-md p-6`
                      : `${bgClasses[service.id].hover} p-4`
                  }
                `}
                onClick={() => setActiveService(service)}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md ">
                  <img
                    src={serviceIcons[idx]}
                    alt={service.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base text-black md:text-lg font-semibold">
                    {service.title}
                  </h3>
                  {activeService.id === service.id && (
                    <>
                      <p className="text-gray-600 mt-2">{service.desc}</p>
                      <button className="mt-4 px-4 py-2 border border-[#6100ff] rounded-md text-sm hover:bg-gray-200 transition text-[#6100ff]">
                        Learn More
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Service Image */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center items-start md:h-full"
          >
            <div className="w-full rounded-2xl bg-gray-50 p-2 md:p-4 flex justify-center items-center shadow-lg md:h-full">
              <img
                src={activeService.img}
                alt={activeService.title}
                className="rounded-2xl w-full object-cover aspect-video md:aspect-auto md:h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
