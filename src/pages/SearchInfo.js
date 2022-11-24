import React from "react";
import { StyledSearchInfo } from "../components/layout/searchInfoStyle";
import { Link } from "react-router-dom";

const SearchInfo = ({ title, date, img, alt, id, overview }) => {
  return (
    <StyledSearchInfo className="search_info">
      <div className="card_wrapper">
        <div className="card">
          <div className="card_img">
            <img src={img} alt={alt} />
          </div>
          <div className="card_info">
            <Link to={`/movie/` + id}>
              <h4 className="card_title">{title}</h4>
            </Link>
            <p className="card_date">{date}</p>
            <p className="card_text">
              {overview || "We don't have any information about this"}
            </p>
          </div>
        </div>
      </div>
    </StyledSearchInfo>
  );
};

export default SearchInfo;
