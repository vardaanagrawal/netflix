import React, { useState } from "react";
import "./trailer.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";

export default function Trailer({ movie, setTrailerMovie }) {
  const [trailerURL, setTrailerURL] = useState();

  useEffect(() => {
    movieTrailer(movie?.name || movie?.title || "air").then((url) => {
      if (url) {
        let urlparams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlparams.get("v"));
      } else {
        movieTrailer("John Wick: Chapter 4").then((res) => {
          let urlparams = new URLSearchParams(new URL(res).search);
          setTrailerURL(urlparams.get("v"));
        });
      }
    });
  }, []);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="trailer">
      <div className="trailer-head">
        <div
          className="trailer-back-btn"
          onClick={() => {
            setTrailerMovie(false);
          }}
        >
          Back
        </div>
        {movie?.name || movie?.title}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}
