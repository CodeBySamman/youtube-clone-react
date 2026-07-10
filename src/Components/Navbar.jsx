import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import img from "../assets/youtube.png";
import us from "../assets/14.png";
import img1 from "../assets/upload.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-300 shadow-[0_5px_2px_rgba(0,0,0,0.08)] sticky top-0 z-50 px-3 sm:px-[2%] py-2">
      <div className="flex items-center justify-between gap-3">
        
        {/* Left */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setSidebar((prev) => !prev)}
            onBlur={()=>setSidebar(false)}
            className="cursor-pointer"
            
          >
            <BiMenuAltLeft className="w-7 h-7 mr-3" />
          </button>

          <Link to="/" className="flex items-center">
            <img
              src={img}
              alt="VidTube Logo"
              className="w-6 h-6 mr-1"
            />
            <p className="font-bold text-sm sm:text-base">
              VidTube
            </p>
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search Videos"
              className="w-full outline-none border border-gray-400/70 rounded-full py-1.5 pl-4 pr-10 text-sm"
            />

            <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-lg cursor-pointer" />
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="sm:hidden flex-1 flex justify-end">
          <IoSearchOutline
            className="text-2xl cursor-pointer"
            aria-label="Search"
          />
        </div>

        {/* Right */}
        <div className="flex items-center shrink-0">
          <img
            src={img1}
            alt="Upload Video"
            className="hidden md:block w-5 h-5 mr-4 cursor-pointer"
          />

          <IoMdMore
            className="hidden md:block w-5 h-5 mr-4 cursor-pointer"
            aria-label="More Options"
          />

          <MdNotifications
            className="hidden md:block w-5 h-5 mr-4 cursor-pointer"
            aria-label="Notifications"
          />

          <img
            src={us}
            alt="User Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;