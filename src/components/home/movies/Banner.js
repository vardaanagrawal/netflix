import React from "react";
import "./banner.css";

export default function Banner({ data, setPreviewMovie, setTrailerMovie }) {
  return (
    <div className="banner">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt=""
        className="banner-desktop-img"
      ></img>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt=""
        className="banner-mobile-img"
      ></img>
      <div className="banner-shadow-ttb"></div>
      <div className="banner-content">
        <div className="banner-movie-title">{data.name}</div>
        <div className="banner-movie-desc">{data.overview}</div>
        <div className="banner-btns">
          <div
            className="banner-play-btn"
            onClick={() => {
              setTrailerMovie(data);
            }}
          >
            Play
          </div>
          <div
            className="banner-info-btn"
            onClick={() => {
              setPreviewMovie(data);
            }}
          >
            More Info
          </div>
        </div>
      </div>
    </div>
  );
}
