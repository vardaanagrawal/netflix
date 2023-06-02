import axios from "axios";

const genres = {
  action: 28,
  comedy: 35,
  drama: 18,
  romance: 10749,
  horror: 36,
};

const API_KEY = "6a1444f2f634e26a68b9a254db3ef257";

export async function getMoviesFromGenre(genre) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres[genre]}`
  );
  return res.data;
}

export async function getTrendingMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`
  );
  return res.data;
}

export async function getOriginalMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
  );
  return res.data;
}
