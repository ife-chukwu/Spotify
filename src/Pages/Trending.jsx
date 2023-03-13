import React from "react";
import { MyPlaylist } from "./MyPlaylist";

export const Trending = () => {
  return (
    <div className=" w-full">
      <p className="ml-[12%] text-sm mt-5 mb-5 text-white/70">What's hot🔥 </p>
      <div className="flex justify-between items-center mx-[13%]">
        <h1 className="font-bold text-4xl  mb-5">Trending</h1>
        <p>More ...</p>
      </div>
      <div className=" flex justify-center w-full ">
        <div className=" rounded-3xl w-4/5  ">
          <div className="bg-[url('Jumbotron/jumbo.jpeg')]   bg-no-repeat bg-center bg-cover w-full h-[350px] rounded-3xl ">
            <div className="text-white ml-10  pt-[50px]">
              <p className=" text-opacity-80 text-xl font-medium mb-5">
                Artist
              </p>
              <h1 className="text-5xl leading-[60px] font-extrabold">
                On Top <br /> of The World
              </h1>
              <div className="flex justify-between mt-10 ">
                <div className="flex gap-4">
                  <button className="bg-black px-10 py-3  hover:bg-black/30 duration-300 transition  rounded-full font-bold">
                    PLay
                  </button>
                  <button className="bg-transparent border hover:bg-black/30 duration-300 transition px-10 py-3  rounded-full font-bold">
                    Follow
                  </button>
                </div>
                <div className=" text-xl pr-10">
                  <p>Monthly Listener</p>
                  <p className="font-bold">32.092</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyPlaylist/>
    </div>
  );
};
