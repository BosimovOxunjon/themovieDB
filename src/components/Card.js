import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StyeledCard } from "./layout/cardStyle";
import Settings from "../components/settings";
import { Link } from "react-router-dom";

const Card = ({ img, id, date, title, onClick }) => {
  const [show, setShow] = useState(false);
  return (
    // <Link to={`/movie/` + id}>
    <StyeledCard className="card">
      <div className="image" onClick={onClick}>
        <div className="image-wrapper">
          <Link to={`/movie/` + id}>
            <img className="image-link" src={img} alt="img" />
          </Link>
        </div>
      </div>
      <div className="options" onClick={() => setShow((show) => !show)}>
        <span className="options-item">
          <BsThreeDots className="card-icon" />
        </span>
      </div>
      {show ? <Settings /> : null}
      <div className="content">
        <Link to={`/movie/` + id} className="link">
          <h2>{title}</h2>
        </Link>
        <p>{date}</p>
        <p>{id}</p>
      </div>
    </StyeledCard>
    // </Link>
  );
};

export default Card;
