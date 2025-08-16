"use client";
import React from "react";

const Marquee = () => {
  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Samsung_Logo.svg",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 py-4">
      <div className="flex animate-marquee">
        {/* First set */}
        {brands.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brand ${index}`}
            className="h-7 mx-8 object-contain flex-shrink-0"
          />
        ))}
        {/* Second set */}
        {brands.map((src, index) => (
          <img
            key={`dup1-${index}`}
            src={src}
            alt={`Brand duplicate ${index}`}
            className="h-7 mx-8 object-contain flex-shrink-0"
          />
        ))}
        {/* Third set */}
        {brands.map((src, index) => (
          <img
            key={`dup2-${index}`}
            src={src}
            alt={`Brand duplicate ${index}`}
            className="h-7 mx-8 object-contain flex-shrink-0"
          />
        ))}
        {/* Fourth set */}
        {brands.map((src, index) => (
          <img
            key={`dup3-${index}`}
            src={src}
            alt={`Brand duplicate ${index}`}
            className="h-7 mx-8 object-contain flex-shrink-0"
          />
        ))}
      </div>

      {/* Tailwind inline animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
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
