import axios from "axios";
import keys from "../configs";

const baseURL = keys.BACKEND_API;

const url = baseURL + "movie/550?api_key=3a299670d2100bc6b0f781049674b644";

export { axios, url };
