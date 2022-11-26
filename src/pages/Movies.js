import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { url } from "../components/axios";
import DefaultImg from "../assets/defaultImg/default.jpg";
import { Pagination } from "antd";
import keys from "../configs";
import { StyledMovies } from "../components/layout/moviesStyle";

const Movies = () => {
  const [movies, setMovies] = useState({});
  const imgUrl = keys.IMG_URL;
  const fetchPopularTv = async () => {
    const { data } = await axios.get(url);
    setMovies(data);
  };
  const changePagination = async (page) => {
    const { data } = await axios.get(
      `${keys.BACKEND_API}/discover/movie?api_key=${keys.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    setMovies(data);
  };
  useEffect(() => {
    fetchPopularTv();
  }, []);
  console.log(movies);
  return (
    <StyledMovies>
      <div className="container">
        <div className="row">
          <div className="card_wrapper">
            {movies?.results?.map((item) => {
              return (
                <Card
                  img={
                    item?.backdrop_path
                      ? imgUrl + item?.backdrop_path
                      : DefaultImg
                  }
                  id={item?.id}
                  key={item?.id}
                  title={item?.title}
                  date={item?.release_date}
                />
              );
            })}
            <Card />
          </div>
          <Pagination
            current={movies?.page}
            onChange={changePagination}
            total={movies?.total_pages}
          />
        </div>
      </div>
    </StyledMovies>
  );
};

export default Movies;
