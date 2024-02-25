"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
const BottomNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-[#f3ebea] shadow-lg">
      <div className="bg-black"></div>
      <nav className="flex items-center justify-center">
        <button className="bg-[#FDBF1E] w-14 h-14 rounded-full transform -translate-y-1/3 border-2 border-[#2c3034] flex items-center justify-center">
          <FiPlus className="text-black" size={50} />
        </button>
      </nav>
    </div>
  );
};

export default BottomNav;
