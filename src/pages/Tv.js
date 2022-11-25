import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { urlTV } from "../components/axios";
import DefaultImg from "../assets/defaultImg/default.jpg";
import keys from "../configs";
import { StyledMovies } from "../components/layout/styleMovies";

const Tv = () => {
  const [movies, setMovies] = useState({});
  const imgUrl = keys.IMG_URL;
  const fetchPopularTv = async () => {
    const { data } = await axios.get(urlTV);
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
                  title={item?.name}
                  date={item?.release_date}
                />
              );
            })}
            <Card />
          </div>
        </div>
      </div>
    </StyledMovies>
  );
};

export default Tv;
