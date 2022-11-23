import React from "react";
import { StyledSearchInfo } from "../components/layout/searchInfoStyle";

const SearchInfo = ({ title, date, img, alt, overview }) => {
  return (
    <StyledSearchInfo className="search_info">
      <div className="card_wrapper">
        <div className="card">
          <div className="card_img">
            <img src={img} alt={alt} />
          </div>
          <div className="card_info">
            <h4 className="card_title">{title}</h4>
            <p className="card_date">{date}</p>
            <p className="card_text">{overview}</p>
          </div>
        </div>
      </div>
    </StyledSearchInfo>
  );
};

export default SearchInfo;
