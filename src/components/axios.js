import axios from "axios";
import keys from "../configs";

const baseURL = keys.BACKEND_API;

const url = baseURL + "movie/550?api_key=3a299670d2100bc6b0f781049674b644";

// https://api.themoviedb.org/3/discover/movie?api_key=3a299670d2100bc6b0f781049674b644&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const urlResults = ` ${baseURL}discover/movie?api_key=${keys.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

//https://api.themoviedb.org/3/discover/tv?api_key=3a299670d2100bc6b0f781049674b644&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
const urlTV = `${baseURL}discover/tv?api_key=${keys.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

export { axios, url, urlResults, urlTV };
