import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { context } from "../MyContextApi";
import axios from "axios";
import { BsFillPlayFill } from "react-icons/bs";

export const MyPlaylist = () => {
  const { playlist, token } = useContext(context);
  const [trackId, setTrackId] = useState("");
  const [track, setTrack] = useState([]);

  const trackIdOfPlaylist = playlist.map((item) => {
    return item.id;
  });

  useEffect(() => {
    setTrackId(trackIdOfPlaylist[0]);

    const fetchTrackData = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${trackId}/tracks`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setTrack(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    if (token && trackId) {
      fetchTrackData();
    }
  }, [trackId, token]);
  console.log(track);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [feedBack, setFeedBack] = useState("");

  const toggleAudio = () => {
    if (audioRef.current.readyState === 4) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        setFeedBack("");
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      console.log("Audio not ready yet");
      setFeedBack("Audio not ready yet");
    }
  };
  return (
    <div className="w-full h-full">
      <div className="mt-10 flex justify-between items-center px-[13%]">
        <h1 className="font-extrabold text-2xl mb-5">My Playlist</h1>
        <p className=" font-extralight text-[12px]">
          Some audio will not be available
        </p>
        <p className="font-medium text-xl mb-5">Show All</p>
      </div>
      <div>
        {playlist.map((item) => (
          <Fragment key={item.id}></Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 text-center gap-5 text-[12px] w-4/5">
          <p className="text-lg font-bold my-5 tracking-wide">Title</p>
          <p className="text-lg font-bold my-5 tracking-wide">Artist</p>
          <p className="text-lg font-bold my-5 tracking-wide"> Album</p>
          {track.map((trackItem) => (
            <Fragment key={trackItem.id}>
              <div className="mb-10">
                <p className="font-bold mb-2 text-sm">{trackItem.track.name}</p>
                <audio ref={audioRef} controls>
                  <source
                    src={trackItem.track.preview_url}
                    className="py-40"
                    type="audio/ogg"
                  />
                  <source src={trackItem.track.preview_url} type="audio/mpeg" />
                </audio>{" "}
              </div>

              <div>
                {trackItem.track.artists.map((item) => (
                  <p key={item.id} className="font-bold text-lg">
                    {item.name}
                  </p>
                ))}
              </div>

              <div>
                <p className="font-bold text-lg">
                  {trackItem.track.album.name}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
