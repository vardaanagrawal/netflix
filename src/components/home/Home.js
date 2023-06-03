import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Preview from "./preview/Preview";
import Movies from "./movies/Movies";
import Trailer from "./trailer/Trailer";

export default function Home() {
  const [previewMovie, setPreviewMovie] = useState(false);
  const [trailerMovie, setTrailerMovie] = useState(false);

  return (
    <div className="home">
      <Navbar />
      <Movies
        setPreviewMovie={setPreviewMovie}
        setTrailerMovie={setTrailerMovie}
      />
      {previewMovie && (
        <Preview
          movie={previewMovie}
          setPreviewMovie={setPreviewMovie}
          setTrailerMovie={setTrailerMovie}
        />
      )}
      {trailerMovie && (
        <Trailer movie={trailerMovie} setTrailerMovie={setTrailerMovie} />
      )}
    </div>
  );
}
