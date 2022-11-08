import React from "react";
import { StyledSettings } from "./layout/settingsStyle";
import { FaList } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const settings = () => {
  return (
    <StyledSettings>
      <div className="settings-item">
        <p className="settings-text">
          <a className="settings-link" href="#">
            <FaList className="settings-icon" />
            <span>Add to list</span>
          </a>
        </p>
      </div>
      <div className="settings-item">
        <p className="settings-text">
          <a className="settings-link" href="#">
            <AiFillHeart className="settings-icon" />
            <span>Favourite</span>
          </a>
        </p>
      </div>
      <div className="settings-item">
        <p className="settings-text">
          <a className="settings-link" href="#">
            <BiBookmark className="settings-icon" />
            <span>Watch list</span>
          </a>
        </p>
      </div>
      <div className="settings-item">
        <p className="settings-text">
          <a className="settings-link" href="#">
            <AiFillStar className="settings-icon" />
            <span>Your rating</span>
          </a>
        </p>
      </div>
    </StyledSettings>
  );
};

export default settings;
