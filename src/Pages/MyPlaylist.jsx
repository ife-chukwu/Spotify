import React, { Fragment, useContext, useState, useEffect } from "react";
import { context } from "../MyContextApi";
import axios from "axios";

export const MyPlaylist = () => {
  const { playlist, token } = useContext(context);
  const [trackId, setTrackId] = useState("");
  const [track, setTrack] = useState([]);

  const trackIdOfPlaylist = playlist.map((item) => {
    return item.id;
  });

  useEffect(() => {
    setTrackId(trackIdOfPlaylist[0]);
    console.log(trackId);

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

  // useEffect(() => {
  //   async function fetchData() {
  //     // Get the user's playlists
  //     const response = await fetch('https://api.spotify.com/v1/me/playlists', {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     const playlists = await response.json();

  //     console.log(playlist)

  //     // Parse the response JSON to get the ID of the desired playlist
  //     const playlist_id = playlists.items.id;

  //     // Get the tracks in the playlist
  //     const tracks_response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
  //       headers: {
  //         'Authorization': `Bearer ${access_token}`
  //       }
  //     });
  //     const tracks = await tracks_response.json();
  //     // Extract the track URIs and create an array of them
  //     const track_uris = tracks.items.map(item => item.track.uri);

  //     // Play the tracks
  //     const play_response = await fetch('https://api.spotify.com/v1/me/player/play', {
  //       method: 'PUT',
  //       headers: {
  //         'Authorization': `Bearer ${access_token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         uris: track_uris
  //       })
  //     });
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="w-full h-full">
      <div className="mt-10 flex justify-between px-[13%]">
        <h1 className="font-extrabold text-2xl mb-5">My Playlist</h1>
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
              {/* <div>
              {trackItem.track.album.images.map((image, index) => (
                <div key={index}>
                  <figure>
                    <img
                      src={image.url}
                      alt="Album Cover"
                      className="w-full h-full"
                    />
                  </figure>
                </div>
              ))}
            </div> */}
              <div>
                <p>{trackItem.track.name}</p>
              </div>

              <div>
                {trackItem.track.artists.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>

              <div>
                <p>{trackItem.track.album.name}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
