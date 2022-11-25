import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";
import { StyledHeader } from "../components/layout/headerStyle";

const Header = () => {
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  // const [show4, setShow4] = useState(false);
  // const [show5, setShow5] = useState(false);

  return (
    <StyledHeader className="header">
      <nav className="nav__wrapper">
        <div className="header__logo">
          <a className="header__link" href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="header__logo"
            />
          </a>
        </div>
        <ul className="header__list navigation">
          <li className="header__link">
            <button
              className="nav__link"
              // onClick={() => setShow((show) => !show)}
            >
              movies
            </button>
            {/* {show ? (
              <ul className="header__menu header__items">
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Popular
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Now Playing
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Upcoming
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Top Rated
                  </a>
                </li>
              </ul>
            ) : null} */}
          </li>
          <li className="header__link">
            <button
              className="nav__link"
              // onClick={() => setShow2((show2) => !show2)}
            >
              TV Shows
            </button>
            {/* {show2 ? (
              <ul className="header__menu header__items">
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Popular
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Airing Today
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    On TV
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Top Rated
                  </a>
                </li>
              </ul>
            ) : null} */}
          </li>
          <li className="header__link">
            <button
              className="nav__link"
              // onClick={() => setShow3((show3) => !show3)}
            >
              People
            </button>
            {/* {show3 ? (
              <ul className="header__menu header__items">
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Popular People
                  </a>
                </li>
              </ul>
            ) : null} */}
          </li>
          <li className="header__link">
            <button
              className="nav__link"
              // onClick={() => setShow4((show4) => !show4)}
            >
              More
            </button>
            {/* {show4 ? (
              <ul className="header__menu header__items">
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Discussion
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Leaderboard
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    Support
                  </a>
                </li>
                <li className="header__menu--item">
                  <a className="header__link" href="#">
                    API
                  </a>
                </li>
              </ul>
            ) : null} */}
          </li>
        </ul>
      </nav>
      <div className="header__log">
        <ul className="header__list">
          <li className="header__link">
            <button
              className="header__no--click nav__link"
              // onClick={() => setShow5((show5) => !show5)}
            >
              +
            </button>
            {/* {show5 ? (
              <ul className="new__buttons header__items">
                <IoMdArrowDropup className="new__buttons--item" />
                <li className="header__menu--item">
                  Can't find a movie or TV show?
                </li>
                <li className="header__menu--item">
                  <p>Login to create it.</p>
                </li>
              </ul>
            ) : null} */}
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
      </div>
    </StyledHeader>
  );
};

export default Header;
