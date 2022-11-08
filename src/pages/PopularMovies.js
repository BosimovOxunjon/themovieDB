import React, { useEffect, useState } from "react";
import { axios, url, urlResults, urlTV } from "../components/axios";
// import Slider from "react-slick";
import Card from "../components/Card";
import { StyledPopularMovies } from "../components/layout/popularMoviesStyle";
import keys from "../configs";

const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState({});
  const imgUrl = keys.IMG_URL;

  const fetchPopularMovies = async () => {
    const { data } = await axios.get(urlTV);
    setPopularMovie(data);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  console.log(popularMovie);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  // };

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
            {popularMovie?.results?.map((item) => {
              return (
                <Card
                  img={imgUrl + item?.poster_path}
                  title={item?.original_name}
                  link={item?.id}
                  date={item?.first_air_date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyledPopularMovies>
  );
};

export default PopularMovies;
