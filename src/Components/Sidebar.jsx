import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { SiDsautomobiles } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbFreezeRowColumn } from "react-icons/tb";

import img1 from "../assets/14.png";
import img2 from "../assets/29.png";
import img3 from "../assets/41.png";
import img4 from "../assets/18.png";
import img5 from "../assets/5.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`
        fixed top-0 left-0  pt-16 min-h-screen
        bg-gray-100 shadow-[6px_0_8px_rgba(0,0,0,0.08)]
        overflow-y-auto z-40 transition-all duration-300

        ${sidebar
          ? "w-56 sm:w-56 lg:w-64 px-3"
          : "w-16 px-2 [&_div>p]:hidden [&_.subscribe]:hidden"
        }
      `}
    >
      {/* Categories */}

      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(0)}
      >
        <IoMdHome className={`mr-3 shrink-0 ${category === 0
          ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
          : "w-4 h-4"
          }`} />

        <p className={`text-[13px] ${category === 0 ? "text-red-700 font-bold" : ""
          }`}
        >
          Home
        </p>
      </div>


      {/* Gaming */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(20)}>

        <SiYoutubegaming
          className={`mr-3 shrink-0 ${category === 20
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`}
        />
        <p className={`text-[13px] ${category === 20 ? "text-red-700 font-bold" : ""
          }`}> Gaming </p> </div>


      {/* Automobile */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(2)}>

        <SiDsautomobiles
          className={`mr-3 shrink-0 ${category === 2
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />

        <p className={`text-[13px] ${category === 2 ? "text-red-700 font-bold" : ""
          }`}> Automobile
        </p>
      </div>

      {/* Entertainment */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(24)}>

        <TbFreezeRowColumn
          className={`mr-3 shrink-0 ${category === 24
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />

        <p className={`text-[13px] ${category === 24 ? "text-red-700 font-bold" : ""
          }`}>
          Entertainment
        </p>
      </div>

      {/* Sports */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(17)}>

        <MdOutlineSportsBaseball
          className={`mr-3 shrink-0 ${category === 17
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />

        <p className={`text-[13px] ${category === 17 ? "text-red-700 font-bold" : ""
          }`}
        >
          Sports
        </p>
      </div>

      {/* Technology */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(28)}>

        <GrTechnology
          className={`mr-3 shrink-0 ${category === 28
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />

        <p className={`text-[13px] ${category === 28 ? "text-red-700 font-bold" : ""
          }`}>Technology
        </p>
      </div>

      {/* Music */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(10)}>
        <MdLibraryMusic
          className={`mr-3 shrink-0 ${category === 10
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />
        <p className={`text-[13px] ${category === 10 ? "text-red-700 font-bold" : ""
          }`}
        >
          Music
        </p>
      </div>

      {/* Blogs */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(22)}>
        <SiBloglovin
          className={`mr-3 shrink-0 ${category === 22
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />
        <p className={`text-[13px] ${category === 22 ? "text-red-700 font-bold" : ""
          }`}
        >
          Blogs
        </p>
      </div>

      {/* News */}
      <div
        className="flex items-center mb-4 cursor-pointer whitespace-nowrap"
        onClick={() => setCategory(25)}>
        <IoNewspaperOutline
          className={`mr-3 shrink-0 ${category === 25
            ? "border-b-3 pb-0.5 w-5 h-5 border-b-red-700"
            : "w-4 h-4"
            }`} />
        <p className={`text-[13px] ${category === 25 ? "text-red-700 font-bold" : ""
          }`}
        >
          News
        </p>
      </div>

      <hr className="h-0.5 bg-gray-300 border-0 outline-0 mb-4" />


      {/* Subscribe */}

      <div className="subscribe">
        <p className="mb-4 text-sm font-bold">SUBSCRIBED</p>

        <div className="flex items-center mb-4 cursor-pointer whitespace-nowrap">
          <img
            src={img1}
            alt="PewDiePie"
            className="mr-3 w-6 h-6 rounded-full shrink-0"
          />
          <p className="text-[13px]">PewDiePie</p>
        </div>

        <div className="flex items-center mb-4 cursor-pointer whitespace-nowrap">
          <img
            src={img2}
            alt="MrBeast"
            className="mr-3 w-6 h-6 rounded-full shrink-0"
          />
          <p className="text-[13px]">MrBeast</p>
        </div>

        <div className="flex items-center mb-4 cursor-pointer whitespace-nowrap">
          <img
            src={img3}
            alt="Justin"
            className="mr-3 w-6 h-6 rounded-full shrink-0"
          />
          <p className="text-[13px]">Justin Bieber</p>
        </div>

        <div className="flex items-center mb-4 cursor-pointer whitespace-nowrap">
          <img
            src={img4}
            alt="Crafts"
            className="mr-3 w-6 h-6 rounded-full shrink-0"
          />
          <p className="text-[13px]">5-Minute Crafts</p>
        </div>

        <div className="flex items-center mb-4 cursor-pointer whitespace-nowrap">
          <img
            src={img5}
            alt="Nas"
            className="mr-3 w-6 h-6 rounded-full shrink-0"
          />
          <p className="text-[13px]">Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;