"use client";
import { RxAvatar } from "react-icons/rx";
import React from "react";
const Topbar = () => {
  const [selected, setSelected] = React.useState("portfolio");
  const tabButton = "p-4 rounded-2xl";
  const tabButtonSelected = "bg-[#f3ebea] border-[#c7bab8] border-[1px] ";
  return (
    <div className="flex justify-between text-black items-center m-2 p-4">
      <div className="flex space-x-4">
        <p
          className={`${tabButton} ${
            selected == "overview" && tabButtonSelected
          }`}
          onClick={() => setSelected("overview")}
        >
          Overview
        </p>
        <p
          className={`${tabButton} ${
            selected == "portfolio" && tabButtonSelected
          }`}
          onClick={() => setSelected("portfolio")}
        >
          Portfolio
        </p>
      </div>
      <RxAvatar className="text-3xl" size={30} />
    </div>
  );
};

export default Topbar;
