import React, { useEffect, useState } from "react";
import {IoMdClose} from 'r'
export const Login = () => {
  const CLIENT_ID = "36775f11cfd84b9f8f516dfdb79f3011";
  const REDIRECT_URI = "http://127.0.0.1:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      console.log(token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <div>
        <IoMdClose/>
      <div className="w-full flex justify-center items-center">
        <div className="border-2 border-white/10 mt-40 shadow-[#111010] rounded-2xl shadow-md py-10 w-4/5 lg:w-2/5">
          <div className="h-full w-full flex justify-center">
            <figure className="w-3/4 lg:w-2/4  h-auto ">
              <img src="Logos/Logo1.jpeg" className="w-full h-full" />
            </figure>
          </div>
          <div className="flex justify-center">
            {!token ? (
              <h1 className="mt-5 md:mt-[50px] text-lg text-white/50 font-normal">
                {" "}
                Sign Up to use Spotify !
              </h1>
            ) : (
              <h1 className="mt-5 md:mt-[50px] text-lg text-white/50 font-normal">
                {" "}
                Log Out of Spotify !
              </h1>
            )}
          </div>
          <div className="flex justify-center mt-5 w-full h-full">
            {!token ? (
              <button className="bg-[#11af4d] mt-5 py-3 w-2/4 rounded-xl font-bold text-[#e2dfdf] hover:bg-[#1b8d1b] hover:text-white">
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                  Login
                </a>
              </button>
            ) : (
              <button
                onClick={logout}
                className="bg-[#11af4d] mt-5 py-3 w-2/4 rounded-xl font-bold text-[#e2dfdf] hover:bg-[#1b8d1b] hover:text-white"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
