import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import keys from "../configs";
import { StyledSeries } from "../components/layout/seriesStyle";

const Series = () => {
  const { id } = useParams();
  const [peopleInfo, setPeopleInfo] = useState({});
  const urlPersonInfo = `${keys.BACKEND_API}/movie/${id}/credits?api_key=${keys.API_KEY}&language=en-US`;
  const imgUrl = keys.IMG_URL;
  const fetchPeopleInfo = async () => {
    const { data } = await axios.get(urlPersonInfo);
    setPeopleInfo(data);
  };
  useEffect(() => {
    fetchPeopleInfo();
  }, []);
  console.log(id);
  console.log(peopleInfo);
  return (
    <StyledSeries>
      <div className="container">
        <div className="row">
          <div className="cast">
            {peopleInfo?.cast?.map((item) => {
              return (
                <div className="cast_item">
                  <img
                    className="cast_img"
                    src={imgUrl + item?.profile_path}
                    alt=""
                  />
                  <p>{item?.name}</p>
                  <p>{item?.character}</p>
                </div>
              );
            })}
          </div>
          <div className="crew">
            {peopleInfo?.crew?.map((item) => {
              return (
                <div className="crew_item">
                  <img
                    className="crew_img"
                    src={imgUrl + item?.profile_path}
                    alt=""
                  />
                  <p>{item?.name}</p>
                  <p>{item?.character}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledSeries>
  );
};

export default Series;
