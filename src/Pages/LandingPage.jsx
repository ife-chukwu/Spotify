import React from "react";
import { AiFillHome, AiOutlineAppstore, AiOutlineHeart } from "react-icons/ai";
import { BiTrendingUp, BiCompass } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendar3Event } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className=" flex flex-row">
      <div className="w-1/5">
        <div className="fixed w-1/5">
          <h1 className="font-bold mt-10 pl-5 text-2xl">
            <span className="text-orange-600">Bee</span> Music
          </h1>{" "}
          <div className="px-5">
            <ul className="flex flex-col mt-[30px] font1 gap-7 ">
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300   focus:bg-orange-500">
                <AiFillHome className="text-2xl" />
                <Link to="/landing_page">Home</Link>
              </li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer  tracking-wide hover:text-white transition-all duration-300">
                <BiTrendingUp className="text-2xl" />
                Trends
              </li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide mb-5 hover:text-white transition-all duration-300">
                <BiCompass className="text-2xl" />
                Feeds
              </li>
              <li className="font-extralight text-white/50">Discover</li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300">
                <AiOutlineAppstore className="text-2xl" />
                New and Notable{" "}
              </li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300 ">
                <SlCalender className="text-2xl" />
                Released calender{" "}
              </li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300 ">
                <BsCalendar3Event className="text-2xl" />
                Events{" "}
              </li>
              <li className="font-extralight text-white/50">
                Your Collections
              </li>

              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300 ">
                <AiOutlineHeart className="text-2xl" />
                Favorite Songs
              </li>
              <li className="flex  items-center gap-4 text-sm font-semibold text-white/80 cursor-pointer tracking-wide hover:text-white transition-all duration-300 ">
                <FaUserAlt className="text-2xl" />
                Artists{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
