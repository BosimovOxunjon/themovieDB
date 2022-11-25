import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultImg from "../assets/defaultImg/default.jpg";
import { Link } from "react-router-dom";
import keys from "../configs";
import { StyledPeople } from "../components/layout/peopleStyle";
import PaginationFunc from "../components/Pagination";

const People = (num) => {
  const [movies, setMovies] = useState({});
  // const [current, setCurrent] = useState(1);
  const imgUrl = keys.IMG_URL;
  const urlPeople = `${keys.BACKEND_API}/person/popular?api_key=${keys.API_KEY}&language=en-US&page=${num}`;

  const fetchPopularTv = async () => {
    const { data } = await axios.get(urlPeople);
    setMovies(data);
    console.log(data);
  };
  for (let i = 0; i < movies?.total_pages; i++) {
    console.log(i);
  }
  useEffect(() => {
    fetchPopularTv();
  }, []);
  console.log(movies);
  return (
    <StyledPeople>
      <div className="container">
        <div className="row">
          <div className="card_wrapper">
            {movies?.results?.map((item) => {
              return (
                <div className="card">
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
            {/* <Card /> */}
          </div>
          <div className="pages">
            {/* {
              for (let i = 0; i < array.length; i++) {
                const element = array[i];
                
              }
            } */}
          </div>
        </div>
      </div>
      <PaginationFunc />
    </StyledPeople>
  );
};

export default People;
