import Movie from "./pages/Movie";
import Search from "./pages/Search";
import SearchInfo from "./pages/SearchInfo";
import PersonalInfo from "./pages/PersonalInfo";
import Spinner from "./components/Spinner";

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
  {
    path: "/person",
    component: PersonalInfo,
    key: "person",
  },
  {
    path: "/spinner",
    component: Spinner,
    key: "spinner",
  },
];
