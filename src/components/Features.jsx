"use client";

import React from "react";
import { FaMoneyBill, FaUniversity, FaBullseye, FaHeadphones } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaMoneyBill className="text-[#6100ff] text-3xl mb-1" />,
      title: "Low Cost",
      points: ["Competitive fee", "Flexible rates"],
    },
    {
      icon: <FaUniversity className="text-[#6100ff] text-3xl mb-1" />,
      title: "Permission Less",
      points: ["Open for integration", "Run your own nodes"],
    },
    {
      icon: <FaBullseye className="text-[#6100ff] text-3xl mb-1" />,
      title: "Secure Data",
      points: ["Open source sheet", "360 Security"],
    },
    {
      icon: <FaHeadphones className="text-[#6100ff] text-3xl mb-1" />,
      title: "24X7 Support",
      points: ["Toll free number", "Ticket systems"],
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 md:px-12 lg:px-20 mb-14">
      <div className="bg-white border border-gray-400 rounded-2xl shadow-sm w-full max-w-7xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 relative">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {feature.icon}
              <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>✱ {point}</li>
                ))}
              </ul>

              {/* Vertical Divider with fade */}
              {idx !== features.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-[1px]">
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-80" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
