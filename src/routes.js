import Movie from "./pages/Movie";
import Search from "./pages/Search";
import SearchInfo from "./pages/SearchInfo";

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
  {
    path: "/searchInfo",
    component: SearchInfo,
    key: "search",
  },
];
