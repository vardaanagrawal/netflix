import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Profile from "../components/profile/Profile";
import Home from "../components/home/Home";
import Movies from "../components/home/movies/Movies";

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Profile />} /> */}
        <Route exact path="/" element={<Home />}>
          <Route exact path="" element={<Movies />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
