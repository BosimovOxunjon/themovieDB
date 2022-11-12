import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import keys from "../configs";

const FavoriteMovie = () => {
  const { id } = useParams();
  const [favoriteMovie, setFavoriteMovie] = useState({});
  const urlFavoriteMovie = `${keys.BACKEND_API}/account/${id}/favorite?api_key=${keys.API_KEY}&session_id=${keys.API_KEY}`;
  const fetchFavoriteMovie = () => {
    const { data } = axios.post(urlFavoriteMovie, {
      media_type: "movie",
      media_id: 550,
      favorite: true,
    });
    setFavoriteMovie(data);
  };
  useEffect(() => {
    fetchFavoriteMovie();
  }, []);
  console.log(favoriteMovie);
  return <div>FavoriteMovie</div>;
};

export default FavoriteMovie;
