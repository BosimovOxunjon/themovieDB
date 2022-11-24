import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import PersonalInfo from "./pages/PersonalInfo";
import Series from "./pages/Series";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} exact />
        <Route path="/popular" element={<PopularMovies />} exact />
        <Route path="/movie/:id" exact element={<Movie />} />
        <Route path="/series/:id" exact element={<Series />} />
        <Route path="/person/:id" exact element={<PersonalInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
