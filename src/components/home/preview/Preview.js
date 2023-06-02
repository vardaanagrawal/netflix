import React, { useEffect, useState } from "react";
import "./preview.css";
import axios from "axios";
const API_KEY = "6a1444f2f634e26a68b9a254db3ef257";

export default function Preview({ movie, setPreviewMovie, setTrailerMovie }) {
  useEffect(() => {
    getGenres();
  }, []);

  const [genres, setGenres] = useState();

  async function getGenres() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    setGenres(res.data.genres);
  }

  return (
    <div
      className="preview"
      onClick={(e) => {
        e.target.className === "preview" && setPreviewMovie(false);
      }}
    >
      <div className="prev-box">
        <div className="prev-box-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
            className="banner-desktop-img"
          ></img>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="banner-mobile-img"
          ></img>
          <div className="prev-box-img-shadow"></div>
        </div>
        <div className="prev-box-content">
          <div className="prev-box-title">
            <div
              className="prev-back-btn"
              onClick={() => {
                setPreviewMovie(false);
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVR4nO3Y0QqCQBRF0f2FZTGDD/bvQUEFfYKBMjAQhD537uUs8N3DVnAEs9ROwBN4A4WgRmAGln61MeFHLMCLBCNm4EwgdWPEB5gIxCNUuIQKl1DhEipcQoVLqKj+ABRRM5QYdg5F7bAUyj3DiFRDhiyPFv3/09bLfiGg4jGiisuIKi4jqriMKJdR5TKqXEZVqjLjzuHsSJIxN4L6HfMgsPY4XXuNw79vxoyvFeVU7Pycczv1AAAAAElFTkSuQmCC" />
            </div>{" "}
            {movie.name || movie.title}
          </div>
          <div className="prev-movie-info">
            <div className="prev-box-date">
              {movie.first_air_date?.split("-")[0]}
              <div className="prev-hd">HD</div>
              <div className="movie-card-rating">
                {movie.vote_average > 0 ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII=" />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII=" />
                )}
                {movie.vote_average > 2 ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII=" />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII=" />
                )}
                {movie.vote_average > 4 ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII=" />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII=" />
                )}
                {movie.vote_average > 6 ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII=" />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII=" />
                )}
                {movie.vote_average > 8 ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII=" />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII=" />
                )}
              </div>
            </div>
            <div className="prev-movie-desc">{movie.overview}</div>
            <div className="prev-movie-genres">
              {genres &&
                movie.genre_ids.map((b, index) => (
                  <div className="movie-card-genre" key={index}>
                    {genres.filter((a) => a.id === b)[0]?.name}
                  </div>
                ))}
            </div>
            <div className="banner-btns">
              <div
                className="banner-play-btn"
                onClick={() => {
                  setTrailerMovie(movie);
                }}
              >
                Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
