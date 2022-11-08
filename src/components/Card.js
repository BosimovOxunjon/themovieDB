import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StyeledCard } from "./layout/cardStyle";
import Settings from "../components/settings";

const Card = ({ img, link, date, title }) => {
  const [show, setShow] = useState(false);

  return (
    <StyeledCard className="card">
      <div className="image">
        <div className="image-wrapper">
          <img className="image-link" src={img} alt="img" />
        </div>
      </div>
      <div className="options" onClick={() => setShow((show) => !show)}>
        <span className="options-item">
          <BsThreeDots className="card-icon" />
        </span>
      </div>
      {show ? <Settings /> : null}
      <div className="content">
        <h2>
          <a href={link}>{title}</a>
        </h2>
        <p>{date}</p>
      </div>
    </StyeledCard>
  );
};

export default Card;
