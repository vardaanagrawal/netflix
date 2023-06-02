import React, { useEffect, useState } from "react";
import "./movies.css";
import Banner from "./Banner";
import Row from "./Row";
import {
  getMoviesFromGenre,
  getOriginalMovies,
  getTrendingMovies,
} from "../../api";

export default function Movies({ setPreviewMovie, setTrailerMovie }) {
  const [loading, setLoading] = useState(true);
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const am = await getMoviesFromGenre("action");
    setActionMovies(am.results);
    const hm = await getMoviesFromGenre("horror");
    setHorrorMovies(hm.results);
    const rm = await getMoviesFromGenre("romance");
    setRomanceMovies(rm.results);
    const dm = await getMoviesFromGenre("drama");
    setDramaMovies(dm.results);
    const cm = await getMoviesFromGenre("comedy");
    setComedyMovies(cm.results);
    const om = await getOriginalMovies();
    setOriginalMovies(om.results);
    setBannerMovie(om.results[17]);
    const tm = await getTrendingMovies();
    setTrendingMovies(tm.results);
    setLoading(false);
  }

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="movies-page">
      <Banner
        data={bannerMovie}
        setPreviewMovie={setPreviewMovie}
        setTrailerMovie={setTrailerMovie}
      />
      <div className="movies-body">
        <Row
          data={originalMovies}
          title="Netflix Originals"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={actionMovies}
          title="Action Movies"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={romanceMovies}
          title="Romance Movies"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={trendingMovies}
          title="Trending Movies"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={dramaMovies}
          title="Drama Movies"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={comedyMovies}
          title="Comedy Movies"
          setPreviewMovie={setPreviewMovie}
        />
        <Row
          data={horrorMovies}
          title="Horror Movies"
          setPreviewMovie={setPreviewMovie}
        />
      </div>
    </div>
  );
}
