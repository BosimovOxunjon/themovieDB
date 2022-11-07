import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <PopularMovies />
      <Footer />
    </>
  );
}

export default App;
