"use client";

import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites to showcase your business.",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, ads, and strategies to boost your online reach.",
    },
    {
      title: "Branding",
      desc: "Create a memorable identity for your business.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h2>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              transition: "all 0.3s ease",
            }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03]"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
