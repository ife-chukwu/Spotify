// import React, { useContext, useState, useEffect } from "react";
// import { context } from "../MyContextApi";

// export const Music = () => {
//   const { token, scroll } = useContext(context);
//   const [searchId, setSearchId] = useState("");
//   const [artists, setArtists] = useState([]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);

//   const searchArtists = async (e) => {
//     e.preventDefault();
//     const { data } = await axios.get("https://api.spotify.com/v1/search", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         q: searchId,
//         type: "album,artist,playlist,track",
//       },
//     });

//     setArtists(data.artists.items);
//   };

//   console.log(artists);

//   return (
//     <div className="">
//       <div className=" fixed w-4/5 bg-white/10">
//         <div
//           className={` ${
//             scroll ? "bg-black" : ""
//           } flex h-[70px] transition-all duration-1000 items-center overflow-hidden`}
//         >
         
//         </div>
//       </div>
     
//     </div>
//   );
// };
