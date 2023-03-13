import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const context = createContext();
const MyContextApi = ({ children }) => {
  const CLIENT_ID = "36775f11cfd84b9f8f516dfdb79f3011";
  const REDIRECT_URI = "http://127.0.0.1:5173/";
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
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const [scroll, setScroll] = useState(false);
  const handleColor = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleColor);

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setPlaylist(response.data.items);
    };

    token && fetchPlaylist();
  }, [token]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [searchId, setSearchId] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchArtist = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchId,
        type: "album,artist,playlist,track",
      },
    });
    setArtists(data.artists.items);
    setLoading(false);
  };

  console.log(artists);

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const value = {
    logout,
    CLIENT_ID,
    REDIRECT_URI,
    AUTH_ENDPOINT,
    RESPONSE_TYPE,
    token,
    scroll,
    playlist,
    handleSearch,
    searchArtist,
    loading,
    artists,
    searchId,
  };

  return (
    <div>
      <context.Provider value={value}>{children}</context.Provider>
    </div>
  );
};

export { MyContextApi, context };
