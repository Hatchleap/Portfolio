"use client";
import React from "react";

const marqueeWords = [
  "Custom Branding",
  "✧",
  "Website Design",
  "✧",
  "Digital Marketing",
  "✧",
  "Custom Branding",
  "✧",
  "Website Design",
  "✧",
  "Digital Marketing",
  "✧",
  "Custom Branding",
  "✧",
  "Website Design",
  "✧",
  "Digital Marketing",
  "✧",
  "Custom Branding",
  "✧",
  "Website Design",
  "✧",
  "Digital Marketing",
  "✧",
];

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full  bg-transparent">
      <div className="flex animate-marquee">
        {marqueeWords.map((word, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-semibold text-white whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
