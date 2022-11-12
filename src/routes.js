import Movie from "./pages/Movie";
import Search from "./pages/Search";

export default [
  {
    path: "/movie/:id",
    component: Movie,
    key: "movie",
  },
  {
    path: "/search",
    component: Search,
    key: "search",
  },
];
