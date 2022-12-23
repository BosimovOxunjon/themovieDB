import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultImg from "../assets/defaultImg/default.jpg";
import { Link } from "react-router-dom";
import keys from "../configs";
import { Pagination } from "antd";
import { StyledPeople } from "../components/layout/peopleStyle";

const People = () => {
  const [movies, setMovies] = useState({});
  const imgUrl = keys.IMG_URL;
  const urlPeople = `${keys.BACKEND_API}/person/popular?api_key=${
    keys.API_KEY
  }&language=en-US&page=${1}`;
  const fetchPopularTv = async () => {
    const { data } = await axios.get(urlPeople);
    setMovies(data);
    console.log(data);
  };
  const changePagination = async (page) => {
    const { data } = await axios.get(
      `${keys.BACKEND_API}/person/popular?api_key=${keys.API_KEY}&language=en-US&page=${page}`
    );
    setMovies(data);
  };
  useEffect(() => {
    fetchPopularTv();
  });
  console.log(movies);
  return (
    <StyledPeople>
      <div className="container">
        <div className="row">
          <div className="card_wrapper">
            {movies?.results?.map((item) => {
              return (
                <div className="card" key={item?.id}>
                  <div className="image">
                    <div className="img_wrapper">
                      <Link to={`/person/` + item?.id} className="card_link">
                        <img
                          src={
                            item?.profile_path
                              ? imgUrl + item?.profile_path
                              : DefaultImg
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <Link to={`/person/` + item?.id} className="card_link">
                    <h4>{item?.name}</h4>
                  </Link>
                  <p>{item?.character}</p>
                </div>
              );
            })}
          </div>
          <div className="pages"></div>
        </div>
        <Pagination
          current={movies?.page}
          onChange={changePagination}
          total={movies?.total_pages}
        />
      </div>
    </StyledPeople>
  );
};

export default People;
