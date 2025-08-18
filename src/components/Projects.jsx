// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

// const textVariants = {
//   hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
//   visible: { filter: "blur(0)", y: 0, opacity: 1 },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// const heading = "Discover the artistry behind our projects";
// const subheading =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna aliquam erat volutpat.";

// const projects = [
//   { title: "Mastertary", year: "2016", img: "/assets/images/pngs/image.png" },
//   { title: "Branding Solutions", year: "2021", img: "/assets/images/pngs/image.png" },
//   { title: "Traffic Grow", year: "2018", img: "/assets/images/pngs/image.png" },
//   { title: "Roadmap", year: "2019", img: "/assets/images/pngs/image.png" },
// ];

// const Projects = () => {
//   const words = heading.split(" ");

//   return (
//     <div className="min-h-screen bg-black text-black px-6 md:px-12 lg:px-20 py-16">
//       {/* Heading Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         transition={{ staggerChildren: 0.04 }}
//         viewport={{ once: true }}
//       >
//         <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-white">
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
//           className="text-lg md:text-xl text-gray-100 max-w-2xl"
//           transition={transition}
//           variants={textVariants}
//         >
//           {subheading}
//         </motion.p>
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden rounded-2xl shadow-lg relative group"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             variants={cardVariants}
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-4 left-4">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <p className="text-sm text-[#1b1c1e] dark:text-[#1b1c1e]">Design — {project.year}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-12">
//         <button className="rounded-full bg-[#d2ff00] text-black px-6 py-3 text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

// const textVariants = {
//   hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
//   visible: { filter: "blur(0)", y: 0, opacity: 1 },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// const heading = "Discover the artistry behind our projects";
// const subheading =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna aliquam erat volutpat.";

// const projects = [
//   { title: "Mastertary", year: "2016", img: "/assets/images/pngs/image.png" },
//   { title: "Branding Solutions", year: "2021", img: "/assets/images/pngs/image.png" },
//   { title: "Traffic Grow", year: "2018", img: "/assets/images/pngs/image.png" },
//   { title: "Roadmap", year: "2019", img: "/assets/images/pngs/image.png" },
// ];

// const Projects = () => {
//   const words = heading.split(" ");

//   return (
//     <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-16">
//       {/* Heading Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         transition={{ staggerChildren: 0.04 }}
//         viewport={{ once: true }}
//       >
//         <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
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
//           className="text-lg md:text-xl text-gray-400 max-w-2xl"
//           transition={transition}
//           variants={textVariants}
//         >
//           {subheading}
//         </motion.p>
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className={`group ${index % 2 === 1 ? "md:translate-y-10" : ""}`}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             variants={cardVariants}
//           >
//             {/* Image Wrapper (rounded + overflow hidden) */}
//             <div className="rounded-2xl overflow-hidden shadow-lg">
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Text under card */}
//             <div className="mt-4 px-1">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-400">Design — {project.year}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-12 md:mt-20">
//         <button className="rounded-full bg-[#d2ff00] text-black px-6 py-3 text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;


"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const textVariants = {
  hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
  visible: { filter: "blur(0)", y: 0, opacity: 1 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const heading = "Discover the artistry behind our projects";
const subheading =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna aliquam erat volutpat.";

const projects = [
  { title: "Mastertary", year: "2016", img: "/assets/images/pngs/loki.jpeg" },
  { title: "Branding Solutions", year: "2021", img: "/assets/images/pngs/image.png" },
  { title: "Traffic Grow", year: "2018", img: "/assets/images/pngs/image.png" },
  { title: "Roadmap", year: "2019", img: "/assets/images/pngs/image.png" },
];

const Projects = () => {
  const words = heading.split(" ");

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-12 lg:px-20 py-16">
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
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
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
          transition={transition}
          variants={textVariants}
        >
          {subheading}
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-32">
        {projects.map((project, index) => {
          // Choose shape based on position (desktop only)
          const shapeClass =
            index === 0 || index === 3
              ? "md:aspect-square" // 1st & 4th
              : "md:aspect-[3/4]"; // 2nd & 3rd

          return (
            <motion.div
              key={index}
              className={`group ${index % 2 === 1 ? "md:translate-y-10" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              variants={cardVariants}
            >
              {/* Image Wrapper (rounded + overflow hidden) */}
              <div className={`rounded-2xl overflow-hidden shadow-lg ${shapeClass}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text under card */}
              <div className="mt-4 px-1">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">Design — {project.year}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="rounded-full bg-[#d2ff00] text-black px-6 py-3 text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
          View All
        </button>
      </div>
    </div>
  );
};

export default Projects;
