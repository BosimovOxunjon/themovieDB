import React from "react";
import { StyledSearch } from "../components/layout/searchStyle";

const Search = () => {
  return (
    <StyledSearch>
      <div className="container">
        <div className="wrapper">
          <div className="content-wrapper">
            <h2 className="title">Welcome</h2>
            <h3 className="text">
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <form className="form">
            <label for="input">
              <input
                id="input"
                type="text"
                placeholder="Search for a movie, tv show, person......."
              />
            </label>
            <button className="form-btn" type="submit">
              Search
            </button>
          </form>
          <h2></h2>
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
