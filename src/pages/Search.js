import axios from "axios";
import React, { useState } from "react";
import { StyledSearch } from "../components/layout/searchStyle";
import { useParams } from "react-router-dom";
import keys from "../configs";

const Search = () => {
  const [searchParam, setSearchParam] = useState({});
  const fetchSeachParam = async (query) => {
    const urlSearch = `${keys.BACKEND_API}/search/company?api_key=${keys.API_KEY}&query=${query.target}&page=1`;
    const { data } = axios.get(urlSearch);
    setSearchParam(data);
    console.log(data);
  };
  console.log(searchParam);
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
                onChange={(e) => setSearchParam(e.target.value)}
              />
            </label>
            <button
              className="form-btn"
              onClick={fetchSeachParam}
              type="submit"
            >
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
