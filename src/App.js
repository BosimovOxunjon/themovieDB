import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import PersonalInfo from "./pages/PersonalInfo";
import Series from "./pages/Series";
import SearchInfo from "./pages/SearchInfo";
// import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} exact />
        <Route path="/popular" element={<PopularMovies />} exact />
        {/* <Route path="/searchInfo" element={<SearchInfo />} exact /> */}
        <Route path="/movie/:id" exact element={<Movie />} />
        <Route path="/series/:id" exact element={<Series />} />
        <Route path="/personalInfo/:id" exact element={<PersonalInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
