import React, { useEffect, useState } from "react";
import { axios, url } from "../components/axios";
import { StyledPopularMovies } from "../components/layout/popularMoviesStyle";
import keys from "../configs";

const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState({});
  const imgUrl = keys.IMG_URL;
  const baseURL = keys.BACKEND_API;
  const fetchPopularMovies = async () => {
    const { data } = await axios.get(url);
    setPopularMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <StyledPopularMovies>
      <div className="container">
        <div className="column-header">
          <h2>What's Popular</h2>
          <div className="selector-wrapper">
            <div className="selector">
              <div className="selector-item">
                <h3>
                  <a className="selector-link" href="#">
                    On Tv
                  </a>
                  <div className="selector-background"></div>
                </h3>
              </div>
              <div className="selector-item">
                <h3>
                  <a className="selector-link" href="#">
                    In Theater
                  </a>
                  {/* <div className="selector-background"></div> */}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="popular-scroller">
          <div className="column-content">
            <div className="card">
              <div className="image">
                <div className="image-wrapper">
                  <a className="image-link" href="#">
                    <img
                      src={
                        // "https://image.tmdb.org/t/p/w500/"
                        imgUrl + popularMovie?.poster_path
                      }
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="content">
                <h2>
                  <a href={popularMovie?.homepage}>
                    {popularMovie?.original_title}
                  </a>
                </h2>
                <p>{popularMovie?.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPopularMovies>
  );
};

export default PopularMovies;
