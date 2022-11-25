import axios from "axios";
import React, { useState } from "react";
import { StyledSearch } from "../components/layout/searchStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, useSearchParams } from "react-router-dom";
import SearchInfo from "./SearchInfo";
import keys from "../configs";
import { Link } from "react-router-dom";
import DefaultImg from "../assets/defaultImg/default.jpg";
import PopularMovies from "../pages/PopularMovies";

const Search = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [movies, setMovies] = useState();
  const fetchSeachParam = async (e) => {
    e.preventDefault();
    const urlSearch = `${keys.BACKEND_API}/search/movie?api_key=${
      keys.API_KEY
    }&query=${searchParam.get("query")}&page=1`;
    const { data } = await axios.get(urlSearch);
    setMovies(data);
    console.log(data);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  console.log(movies);
  return (
    <>
      <StyledSearch>
        <div className="container">
          <div className="wrapper">
            <div className="content-wrapper">
              <h2 className="title">Welcome</h2>
              <h3 className="text">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
            <form className="form" onSubmit={fetchSeachParam}>
              <label for="input">
                <input
                  id="input"
                  type="text"
                  onChange={(e) => setSearchParam({ query: e.target.value })}
                  placeholder="Search for a movie, tv show, person......."
                />
              </label>
              <button className="form-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </StyledSearch>
      <section
        style={{
          display: "flex-root",
          flexWrap: "nowrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div className="container">
          <Slider {...settings}>
            {movies?.results?.map((item) => {
              return (
                <>
                  <SearchInfo
                    img={
                      item?.poster_path
                        ? keys.IMG_URL + item?.poster_path
                        : DefaultImg
                    }
                    title={item?.title}
                    id={item?.id}
                    date={item?.release_date}
                    overview={item?.overview}
                  />
                </>
              );
            })}
          </Slider>
        </div>
      </section>
      <PopularMovies />
    </>
  );
};

export default Search;
