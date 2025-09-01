"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Categories
const categories = [
  "All",
  "Branding & Identity",
  "Digital Marketing",
  "SEO & Analytics",
  "Web Design",
];

// Projects
const projects = [
  {
    id: 1,
    title: "Dynamic E–Commerce Platform",
    category: "Branding & Identity",
    image: "/assets/images/pngs/m.jpeg",
  },
  {
    id: 2,
    title: "Innovative Identity Design",
    category: "Digital Marketing",
    image: "/assets/images/pngs/m.jpeg",
  },
  {
    id: 3,
    title: "Dynamic Digital Campaign",
    category: "Branding & Identity",
    image: "/assets/images/pngs/m.jpeg",
  },
  {
    id: 4,
    title: "Impactful Content Creation",
    category: "Branding & Identity",
    image: "/assets/images/pngs/m.jpeg",
  },
  {
    id: 5,
    title: "Visionary Growth Strategy",
    category: "Web Design",
    image: "/assets/images/pngs/m.jpeg",
  },
  {
    id: 6,
    title: "Interactive Website Redesign",
    category: "Branding & Identity",
    image: "/assets/images/pngs/m.jpeg",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative bg-[#ffffff] text-black px-4 md:px-12 lg:px-20 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="flex justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-sm md:text-md font-light text-black leading-none "
          >
            <span className="text-[#6100ff] mr-2">✧</span>
            Projects
          </motion.h2>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-light leading-tight">
          Our proven <span className="text-[#6100ff] font-bold">process</span>{" "}
          for achieving success
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our proven process combines research, strategy, and creativity to
          deliver tailored solutions that drive measurable results.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mt-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-[#6100ff] text-white"
                : "bg-[#ffffff] text-black hover:bg-[#6100ff] hover:text-white  border-2 border-zinc-300 border-r-lg"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-black text-white rounded-2xl  overflow-hidden shadow-lg group w-full max-w-sm"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
              {project.category}
            </span>
            {/* Title */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
