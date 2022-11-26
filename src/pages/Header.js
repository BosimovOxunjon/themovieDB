import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { StyledHeader } from "../components/layout/headerStyle";

const Header = () => {
  return (
    <StyledHeader className="header">
      <nav className="nav__wrapper">
        <div className="header__logo">
          <Link to={`/`} className="header__link" href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="header__logo"
            />
          </Link>
        </div>
        <ul className="header__list navigation">
          <li className="header__link">
            <Link to={`/movies`} className="nav__link">
              movies
            </Link>
          </li>
          <Link to={`/tv`} className="nav__link">
            TV Shows
          </Link>
          <li className="header__link">
            <Link to={`/people`} className="nav__link">
              People
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className="header__log">
        <ul className="header__list">
          <li className="header__link">
            <button className="header__no--click nav__link">+</button>
          </li>
          <li className="header__link translate">
            <div className="nav__link translate__item ">EN</div>
          </li>
          <li className="header__link">
            <a className="nav__link " href="#">
              Login
            </a>
          </li>
          <li className="header__link">
            <a className="nav__link header__search--item" href="#">
              Join TMDB
            </a>
          </li>
          <li className="header__link header__search-icon">
            <ImSearch className="search" />
          </li>
        </ul>
      </div> */}
    </StyledHeader>
  );
};

export default Header;
