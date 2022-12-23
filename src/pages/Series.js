import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import keys from "../configs";
import { StyledSeries } from "../components/layout/seriesStyle";
import DefaultImg from "../assets/defaultImg/default.jpg";
import { Link } from "react-router-dom";

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
  });
  return (
    <StyledSeries>
      <div className="container">
        <div className="row">
          <div className="cast">
            <h3>
              Series Cast
              <span className="cast_num"> {peopleInfo?.cast?.length}</span>
            </h3>
            {peopleInfo?.cast?.map((item) => {
              return (
                <div className="cast_item">
                  <div className="cast_img">
                    <Link to={`/person/` + item?.id}>
                      <img
                        className="cast_img-item"
                        src={
                          item?.profile_path
                            ? imgUrl + item?.profile_path
                            : DefaultImg
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="cast_info">
                    <div>
                      <Link to={`/person/` + item?.id} className="cast_link">
                        <h4>{item?.name}</h4>
                      </Link>
                      <p>{item?.character}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="crew cast">
            <h3>
              Series Crew
              <span className="cast_num"> {peopleInfo?.crew?.length}</span>
            </h3>

            {peopleInfo?.crew?.map((item) => {
              return (
                <div className="cast_item">
                  <div className="cast_img">
                    <Link to={`/person/` + item?.id}>
                      <img
                        className="cast_img-item"
                        src={
                          item?.profile_path
                            ? imgUrl + item?.profile_path
                            : DefaultImg
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="cast_info">
                    <div>
                      <Link to={`/person/` + item?.id} className="cast_link">
                        <h4>{item?.name}</h4>
                      </Link>
                      <p>{item?.job}</p>
                    </div>
                  </div>
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
