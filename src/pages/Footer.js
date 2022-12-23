import React from "react";
import { StyledFooter } from "../components/layout/footerStyle";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <nav>
          <div className="join">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="logo"
            />
            <br />
            <button className="logo-link">join the community</button>
          </div>
          <ul className="user-list">
            <li>
              <h5 className="title">the basics</h5>
            </li>
            <li>
              <button className="link">about TMDB</button>
            </li>
            <li>
              <button className="link" href="#">
                contact us
              </button>
            </li>
            <li>
              <button className="link" href="#">
                Support Forums
              </button>
            </li>
            <li>
              <button className="link" href="#">
                API
              </button>
            </li>
            <li>
              <button className="link" href="#">
                system status
              </button>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">get involved</h5>
            </li>
            <li>
              <button className="link" href="#">
                contribution bible
              </button>
            </li>
            <li>
              <button className="link" href="#">
                add new movie
              </button>
            </li>
            <li>
              <button className="link" href="#">
                add new TV show
              </button>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">community</h5>
            </li>
            <li>
              <button className="link" href="#">
                guidelines
              </button>
            </li>
            <li>
              <button className="link" href="#">
                Discussions
              </button>
            </li>
            <li>
              <button className="link" href="#">
                Leaderboard
              </button>
            </li>
            <li>
              <button className="link" href="#">
                twitter
              </button>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">legal</h5>
            </li>
            <li>
              <button className="link" href="#">
                Terms of use
              </button>
            </li>
            <li>
              <button className="link" href="#">
                API Terms of use
              </button>
            </li>
            <li>
              <button className="link" href="#">
                Privacy Policy
              </button>
            </li>
          </ul>
        </nav>
        <div className="footer_text">
          <p className="text">
            <span>Created by </span>
            <button href="https://github.com/BosimovOxunjon" target="_blank">
              Bosimov Okhunjon
            </button>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
