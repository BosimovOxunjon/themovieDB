import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { StyledMovieCast } from "../components/layout/movieCastStyle";
import keys from "../configs";
import DefaultImg from "../assets/defaultImg/default.jpg";

const MovieCast = () => {
  const { id } = useParams();
  const imgUrl = keys.IMG_URL;
  const [peopleInfo, setPeopleInfo] = useState({});
  const [recommendations, setRecommendations] = useState({});
  const [network, setNetwork] = useState({});
  const urlPersonInfo = `${keys.BACKEND_API}/movie/${id}/credits?api_key=${keys.API_KEY}&language=en-US`;
  console.log(id);
  const fetchPeopleInfo = async () => {
    const { data } = await axios.get(urlPersonInfo);
    setPeopleInfo(data);
    console.log(data);
  };

  const urlRecommendations = `${keys.BACKEND_API}/tv/${id}/recommendations?api_key=${keys.API_KEY}&language=en-US`;
  const fetchRecommendations = async () => {
    const { data } = await axios.get(urlRecommendations);
    setRecommendations(data);
  };

  const urlNetwork = `${keys.BACKEND_API}network/${id}?api_key=${keys.API_KEY}`;
  const fetchNetwork = async () => {
    const { data } = await axios.get(urlNetwork);
    setNetwork(data);
  };

  console.log(peopleInfo);
  useEffect(() => {
    fetchPeopleInfo();
    fetchRecommendations();
    fetchNetwork();
  }, []);

  console.log(network);
  return (
    <StyledMovieCast>
      <div className="container">
        <div className="row">
          <div className="card_wrapper">
            {peopleInfo?.cast?.map((item) => {
              return (
                <div className="card">
                  <Link to={`/personalInfo/` + item?.id}>
                    <img
                      src={
                        item?.profile_path
                          ? imgUrl + item?.profile_path
                          : DefaultImg
                      }
                      alt=""
                    />
                    <h4>{item?.name}</h4>
                  </Link>
                  <p>{item?.character}</p>
                </div>
              );
            })}
          </div>
          <Link to={`/series/` + id}>
            <p className="new_button">Full Cast & Crew</p>
          </Link>
          <h4>Recommendations</h4>
          <div className="recommendations">
            {recommendations?.results?.map((item) => {
              return (
                <div className="recommendations_card">
                  <div className="recommendations_image">
                    <Link to={`/movie/` + id}>
                      <img
                        src={
                          item?.poster_path
                            ? imgUrl + item?.poster_path
                            : DefaultImg
                        }
                        alt={item?.original_title}
                      />
                    </Link>
                  </div>
                  <p>
                    <strong>{item?.name}</strong>
                    <span className="vote_average">
                      {Math.floor(item?.vote_average * 10)}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="social">
          <div className="facts">
            <div className="social_links">
              <div className="social_icons">
                <BsTwitter className="social_icons-item" />
                <BsInstagram className="social_icons-item" />
                <CiLink className="social_icons-item" />
              </div>
              <div>
                <h4>Facts</h4>
                <p>
                  <strong>status</strong> <br />
                  Returning Series
                </p>
                <p>
                  <strong>Network</strong> <br />
                  prime video
                </p>
                <p>
                  <strong>Type</strong> <br />
                  scripted
                </p>
                <p>
                  <strong>Original language</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="keywords">
            <h4>Keywords</h4>
            <ul>
              <li>based on novel or book</li>
              <li>war veteran</li>
              <li>time machine</li>
              <li>thriller</li>
              <li>gamer</li>
              <li>cyberpunk</li>
              <li>young woman</li>
              <li>bbroken family</li>
            </ul>
          </div>
          <div className="content_score">
            <h4>Content Score</h4>
            <strong>100</strong>
            <p>Yes! Looking good!</p>
          </div>
        </div>
      </div>
    </StyledMovieCast>
  );
};

export default MovieCast;
