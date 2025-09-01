// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Lightbulb,
//   Search,
//   Layout,
//   Code2,
//   Rocket,
//   Headphones,
// } from "lucide-react";

// const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { filter: "blur(10px)", y: "20%", opacity: 0 },
//   visible: { filter: "blur(0)", y: "0%", opacity: 1, transition },
// };

// const steps = [
//   {
//     icon: <Lightbulb className="w-6 h-6 text-[#ffc200]" />,
//     title: "Discovery",
//     desc: "To better understand your project’s vision and objectives, we arrange a consultation session...",
//     color: "bg-white",
//   },
//   {
//     icon: <Search className="w-6 h-6 text-[#0f52b9]" />,
//     title: "Research",
//     desc: "To get a good overview of your business, we will send you a questionnaire...",
//     color: "bg-white",
//   },
//   {
//     icon: <Layout className="w-6 h-6 text-[#6100ff]" />,
//     title: "Web Design",
//     desc: "Before we build your website, we will create a prototype for you to review...",
//     color: "bg-white",
//   },
//   {
//     icon: <Code2 className="w-6 h-6 text-[#6a0241]" />,
//     title: "Development",
//     desc: "We adhere to best practices. Your website will be optimized for conversions, responsive, and SEO-friendly.",
//     color: "bg-white",
//   },
//   {
//     icon: <Rocket className="w-6 h-6 text-[#ee2400]" />,
//     title: "Launch",
//     desc: "We will train your team to use and leverage your new website once the project has launched.",
//     color: "bg-white",
//   },
//   {
//     icon: <Headphones className="w-6 h-6 text-[#7FFF00] " />,
//     title: "Support & Maintenance",
//     desc: "We provide ongoing support to ensure you never have to worry about security or updates.",
//     color: "bg-white",
//   },
// ];

// const Process = () => {
//   return (
//     <section className="relative w-full px-6 md:px-16 py-20 ">
//       {/* Centered Section Heading */}
//       <div className="w-full flex justify-center ">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex items-center justify-center text-sm md:text-md font-light text-black leading-none px-4 py-3 md:sticky self-start"
//         >
//           <span className="text-[#6100ff] mr-2">✧</span>
//           Our Process
//         </motion.h2>
//       </div>

//       {/* Two-column layout */}
//       <div className="flex flex-col md:flex-row items-start justify-center gap-12">
//         {/* Left Text */}
//         <motion.div
//           className="w-full md:w-1/2 md:sticky md:top-20 space-y-6 self-start"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black"
//           >
//             What does working <br /> with us <span className="text-[#6100ff]">look like?</span>
//           </motion.h2>

//           <motion.p
//             variants={itemVariants}
//             className="text-gray-600 max-w-lg"
//           >
//             Our philosophy is simple: we want our clients to love their brand’s
//             online presence, and we do everything we can to help them achieve
//             that. We understand your business and what makes it special.
//           </motion.p>
//         </motion.div>

//         {/* Right Stacked Cards */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-6">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               className={`
//                 ${step.color} stack-cards__item rounded-xl shadow-md p-6 
//                 flex flex-col gap-2 
//                 sticky top-16 md:top-24  
//                 border-2 border-zinc-300
//               `}
//             >
//               <div className="flex items-center gap-2 font-semibold text-lg md:text-xl text-black">
//                 {step.icon}
//                 {step.title}
//               </div>
//               <p className="text-sm md:text-lg text-gray-700">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Circle, Layers, Database } from "lucide-react";

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

const itemVariants = {
  hidden: { filter: "blur(10px)", y: "20%", opacity: 0 },
  visible: { filter: "blur(0)", y: "0%", opacity: 1, transition },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

const steps = [
  {
    id: 1,
    title: "Discovery Phase",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <Circle className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Implementation",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Collaboration",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <Database className="w-8 h-8" />,
  },
];

const Process = () => {
  return (
    <section className="w-full py-20 mt-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex justify-center ">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center text-sm md:text-md font-light text-white leading-none px-4 py-3"
                    >
                      <span className="text-[#6100ff] mr-2">✧</span>
                      Our Process
                    </motion.h2>
                  </div>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-2xl  text-center max-w-2xl mx-auto"
        >
          Our proven process combines research, strategy, and creativity to deliver tailored
          solutions that drive measurable results.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col justify-between bg-black rounded-2xl p-6 border border-gray-800 shadow-lg transition-transform transform hover:-translate-y-5 h-[320px] overflow-hidden"
            >
              {/* Top-right arrow */}
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Title + Desc */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>

              {/* Step Number */}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-xl md:text-2xl font-semibold">STEP</span>
                <h3 className="text-[#6100ff] font-bold text-lg">
                  {step.id < 10 ? `0${step.id}` : step.id}
                </h3>
              </div>

              {/* Lime Corner Background with Icon */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#6100ff] rounded-tl-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;



