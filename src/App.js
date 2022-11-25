import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import PersonalInfo from "./pages/PersonalInfo";
import Series from "./pages/Series";
import Spinner from "./components/Spinner";
import keys from "./configs";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`
    );
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {!isLoading ? (
        <>
          <Routes>
            <Route path="/" element={<Search />} exact />
            <Route path="/popular" element={<PopularMovies />} exact />
            <Route path="/spinner" element={<Spinner />} exact />
            <Route path="/movies/" exact element={<Movies />} />
            <Route path="/tv/" exact element={<Tv />} />
            <Route path="/movie/:id" exact element={<Movie />} />
            <Route path="/series/:id" exact element={<Series />} />
            <Route path="/person/:id" exact element={<PersonalInfo />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
