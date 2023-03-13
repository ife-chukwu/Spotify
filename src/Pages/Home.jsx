import React, { useContext, useState, Fragment } from "react";
import { context } from "../MyContextApi";
import { FiSearch } from "react-icons/fi";
import { Trending } from "./Trending";
import { Link } from "react-router-dom";

export const Home = () => {
  const { scroll, token, handleSearch, searchArtist } = useContext(context);
  return (
    <div className="w-4/5">
      <div className=" fixed w-4/5">
        <div
          className={` ${
            scroll ? "bg-black/50 backdrop-blur-sm" : ""
          } flex h-[70px] transition-all duration-1000 items-center justify-center overflow-hidden`}
        >
          {token ? (
            <form
              className="w-full items-center flex justify-end mr-10 text-lg text-black"
              onClick={searchArtist}
            >
              <input
                type="text"
                onChange={handleSearch}
                className="w-2/4 py-2 relative rounded-full bg-white/10 border border-white/5 outline-none pr-10 text-white/60 text-sm pl-[5%]"
                placeholder="Search for artists, songs and ..."
              />
              <button type="submit" className="text-white absolute mr-[5%]">
                <Link to="/landing_page/show_search">
                  <FiSearch className="flex items-center" />
                </Link>
              </button>
            </form>
          ) : (
            <h2>Please login</h2>
          )}
        </div>
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
};
