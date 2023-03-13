import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { context } from "../MyContextApi";

export const Login = () => {
  const {
    logout,
    CLIENT_ID,
    REDIRECT_URI,
    AUTH_ENDPOINT,
    RESPONSE_TYPE,
    token,
  } = useContext(context);
  return (
    <div className="w-full h-full">
      {token && (
        <div className="flex justify-end w-full">
          <Link to="landing_page">
            {" "}
            <IoMdClose className="text-white  mr-10 mt-10 text-4xl cursor-pointer hover:text-green-400 transition duration-300" />
          </Link>
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        <div
          className={`border border-white/10 ${
            token ? "mt-20" : "mt-40"
          } shadow-[#111010] rounded-lg shadow-md py-10 w-4/5 lg:w-2/5`}
        >
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
              <button className="bg-[#11af4d] mt-5 shadow-md shadow-white/10 py-3 w-2/4 rounded-xl font-bold text-[#e2dfdf] hover:bg-[#0d9746] transition duration-200 hover:text-white">
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                  Login
                </a>
              </button>
            ) : (
              <button
                onClick={logout}
                className="bg-[#11af4d] mt-5 py-3 w-2/4 rounded-xl font-bold text-[#e2dfdf] hover:bg-[#0d9746] transition duration-200 hover:text-white"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full  h-full flex justify-center">
        <p className="w-2/4 mt-20 text-white/50 text-center font-light text-sm">
          Spotify is a digital music, podcast, and video service that gives you
          access to millions of songs and other content from creators all over
          the world. Basic functions such as playing music are totally free, but
          you can also choose to upgrade to Spotify Premium.
        </p>
      </div>
    </div>
  );
};
