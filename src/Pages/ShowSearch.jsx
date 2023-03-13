import React, { useContext, Fragment } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { context } from "../MyContextApi";
import { Link } from "react-router-dom";
import {IoMdClose} from 'react-icons/io'

export const ShowSearch = () => {
  const { loading, artists, searchId } = useContext(context);
  return (
    <div
      className={`${
        !searchId || loading ? "h-screen" : "h-auto"
      } w-4/5 bg-white/5`}
    >
      <Link to="/landing_page">
        <div className="ml-5 mt-5">
          <IoMdClose className="text-xl"/>
        </div>
      </Link>
      <h1 className="text-white/80 font-semibold flex justify-center pt-10 text-xl ">
       Hope your Search came out great
      </h1>

      {loading ? (
        <p>Please Wait...</p>
      ) : (
        <div className="pt-10 w-full justify-center overflow-hidden">
          {artists
            .filter((artist) => artist.images !== "")
            .map((item) => {
              <h1 key={item.id} className="text-white">
                {item.name} and other related Artist
              </h1>;
            })}
          <div className="grid grid-cols-3 gap-10 ">
            {artists.map((artist) => (
              <Fragment key={artist.id}>
                <div className=" h-full w-full ">
                  <div className="bg-white/10 transition duration-500 rounded-xl play-bg py-20 w-4/5 cursor-pointer  ml-[10%]">
                    <div className="w-full flex justify-center">
                      {artist.images.length ? (
                        <figure className="w-3/5 h-2/4 flex justify-center">
                          <img
                            src={artist.images[0].url}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </figure>
                      ) : null}
                    </div>
                    <div className="flex justify-end w-full play  transition duration-500">
                      <div className="bg-[#168d43] w-1/5 h-10 mr-10 rounded-full">
                        <BsFillPlayFill className="flex justify-center w-full h-full items-center" />
                      </div>
                    </div>

                    <div className="flex justify-start pt-5  w-4/5 ml-[10%]">
                      {artist.name ? (
                        <p className="font-extrabold   text-white/80">
                          {artist.name}
                        </p>
                      ) : (
                        "No Name Found"
                      )}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
