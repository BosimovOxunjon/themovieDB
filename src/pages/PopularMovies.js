import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  axios,
  urlTV,
  url,
  urlTrendingMoiveDay,
  urlTrendingMoiveWeek,
} from "../components/axios";
import Card from "../components/Card";
import { StyledPopularMovies } from "../components/layout/popularMoviesStyle";
import keys from "../configs";
import DefaultImg from "../assets/defaultImg/default.jpg";

const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState({});
  const [trendingMovie, setTrendingMovie] = useState({});
  const imgUrl = keys.IMG_URL;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchPopularMovies = async () => {
    const { data } = await axios.get(urlTV);
    setPopularMovie(data);
  };

  const fetchPopularTv = async () => {
    const { data } = await axios.get(url);
    setPopularMovie(data);
  };

  const fetchTrendingMovie = async () => {
    const { data } = await axios.get(urlTrendingMoiveDay);
    setTrendingMovie(data);
  };

  const fetchTrendingMovieWeek = async () => {
    const { data } = await axios.get(urlTrendingMoiveWeek);
    setTrendingMovie(data);
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchTrendingMovie();
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
                  <button
                    onClick={fetchPopularMovies}
                    className="selector-link"
                    href="#"
                  >
                    On Tv
                  </button>
                </h3>
              </div>
              <div className="selector-item">
                <h3>
                  <button
                    onClick={fetchPopularTv}
                    className="selector-link"
                    href="#"
                  >
                    In Theater
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-scroller">
          <div className="column-content">
            <Slider {...settings}>
              {popularMovie?.results?.map((item) => {
                return (
                  <Card
                    key={item?.id}
                    img={
                      item?.poster_path
                        ? imgUrl + item?.poster_path
                        : DefaultImg
                    }
                    title={item?.original_title || item?.name}
                    id={item?.id}
                    date={item?.first_air_date || item?.release_date}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="column-header">
          <h2>Trending</h2>
          <div className="selector-wrapper">
            <div className="selector">
              <div className="selector-item">
                <h3>
                  <button
                    onClick={fetchTrendingMovie}
                    className="selector-link"
                    href="#"
                  >
                    Today
                  </button>
                </h3>
              </div>
              <div className="selector-item">
                <h3>
                  <button
                    onClick={fetchTrendingMovieWeek}
                    className="selector-link"
                    href="#"
                  >
                    This week
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-scroller">
          <div className="column-content">
            <Slider {...settings}>
              {trendingMovie?.results?.map((item) => {
                return (
                  <Card
                    img={
                      item?.poster_path
                        ? imgUrl + item?.poster_path
                        : DefaultImg
                    }
                    title={item?.original_title || item?.name}
                    id={item?.id}
                    date={item?.first_air_date || item?.release_date}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </StyledPopularMovies>
  );
};

export default PopularMovies;
