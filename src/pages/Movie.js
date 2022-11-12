import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import keys from "../configs";
import { useParams } from "react-router-dom";
import { StyledMovie } from "../components/layout/movieStyle";
import MovieCast from "./MovieCast";
import DefaultImg from "../assets/defaultImg/default.jpg";

const Movie = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [isWatchlistActive, setIsWatchlistActive] = useState(false);
  const imgUrl = keys.IMG_URL;
  const [movieDetails, setMovieDetails] = useState({});
  const [favouriteMovie, setFavouriteMovie] = useState({});
  const [watchlist, setWatchlist] = useState({});
  const urls = `${keys.BACKEND_API}/movie/${id}?api_key=${keys.API_KEY}&language=en-US`;
  const fetchMovie = async () => {
    const { data } = await axios.get(urls);
    setMovieDetails(data);
    setFavouriteMovie(data);
    setWatchlist(data);
  };

  const urlFavouriteMovie = `${keys.BACKEND_API}/account/${id}/favorite?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`;
  const fetchFavouriteMovie = async () => {
    const { data } = await axios.post(urlFavouriteMovie, {
      media_type: "movie",
      media_id: id,
      favorite: !isActive,
      body: { movieDetails },
    });
    setIsActive((isActive) => !isActive);
    fetchMovie();
    setFavouriteMovie(data);
    console.log(data);
    localStorage.setItem("results", data);
  };
  const urlWatchList = `${keys.BACKEND_API}/account/${id}/watchlist?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`;
  const fetchWatchList = async () => {
    const { data } = axios.post(urlWatchList, {
      media_type: "movie",
      media_id: id,
      watchlist: !isActive,
    });
    setIsWatchlistActive((Active) => !Active);
    fetchMovie();
    setWatchlist(data);
    return data;
  };
  console.log(watchlist);
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <StyledMovie
      style={{
        backgroundImage: `url(${imgUrl + movieDetails?.poster_path})`,
      }}
    >
      <div className="container custom_bg">
        <div className="row">
          <div className="poster_wrapper">
            <Link to={`/movie/` + id} />
            <img
              className=""
              src={
                movieDetails?.poster_path
                  ? imgUrl + movieDetails?.poster_path
                  : DefaultImg
              }
              alt="#"
            />
          </div>
          <div className="info">
            <h2>
              {movieDetails?.title}
              {movieDetails?.release_date}
            </h2>
            <p className="facts">
              {/* {movieDetails?.genres?.foreach((item) => {
                <span className="genres">{item?.id}</span>;
              })} */}
              <span className="runtime">{movieDetails?.runtime}</span>
            </p>
            <div className="settings">
              <div className="settings-item">
                <FaList className="settings-icon" />
                <p className="settings-text">Add to list</p>
              </div>
              <div className="settings-item">
                <AiFillHeart
                  className={`settings-icon`}
                  onClick={fetchFavouriteMovie}
                  style={{ color: isActive ? "red" : "" }}
                />
                <p className="settings-text">Mark as favourite</p>
              </div>
              <div className="settings-item">
                <BiBookmark
                  className="settings-icon"
                  onClick={fetchWatchList}
                  style={{ color: isWatchlistActive ? "blue" : "" }}
                />
                <p className="settings-text">Add to your watchlist</p>
              </div>
              <div className="settings-item">
                <AiFillStar className="settings-icon" />
                <p className="settings-text">Rate it!</p>
              </div>
            </div>
            <p>Overview</p>
            <p>{movieDetails?.overview}</p>
          </div>
        </div>
      </div>
      <MovieCast />
    </StyledMovie>
  );
};

export default Movie;
