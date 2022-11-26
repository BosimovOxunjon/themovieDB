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
            <a className="logo-link" href="#">
              join the community
            </a>
          </div>
          <ul className="user-list">
            <li>
              <h5 className="title">the basics</h5>
            </li>
            <li>
              <a className="link" href="#">
                about TMDB
              </a>
            </li>
            <li>
              <a className="link" href="#">
                contact us
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Support Forums
              </a>
            </li>
            <li>
              <a className="link" href="#">
                API
              </a>
            </li>
            <li>
              <a className="link" href="#">
                system status
              </a>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">get involved</h5>
            </li>
            <li>
              <a className="link" href="#">
                contribution bible
              </a>
            </li>
            <li>
              <a className="link" href="#">
                add new movie
              </a>
            </li>
            <li>
              <a className="link" href="#">
                add new TV show
              </a>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">community</h5>
            </li>
            <li>
              <a className="link" href="#">
                guidelines
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Discussions
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Leaderboard
              </a>
            </li>
            <li>
              <a className="link" href="#">
                twitter
              </a>
            </li>
          </ul>
          <ul className="user-list">
            <li>
              <h5 className="title">legal</h5>
            </li>
            <li>
              <a className="link" href="#">
                Terms of use
              </a>
            </li>
            <li>
              <a className="link" href="#">
                API Terms of use
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer_text">
          <p className="text">
            <span>Created by </span>
            <a href="https://github.com/BosimovOxunjon" target="_blank">
              Bosimov Okhunjon
            </a>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
