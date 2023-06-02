import React, { useState } from "react";
import "./card.css";
import Preview from "../preview/Preview";

export default function Card({ movie, img, setPreviewMovie }) {
  return (
    <div
      className="card-1"
      onClick={() => {
        setPreviewMovie(movie);
      }}
    >
      {img === 1 && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        ></img>
      )}
      {img === 2 && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt=""
        ></img>
      )}
    </div>
  );
}
