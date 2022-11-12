import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import PersonalInfo from "./pages/PersonalInfo";
// import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Search />} exact /> */}
        <Route path="/" element={<PopularMovies />} exact />
        <Route path="/movie/:id" exact element={<Movie />} />
        <Route path="/personalInfo/:id" exact element={<PersonalInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
