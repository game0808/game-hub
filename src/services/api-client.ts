import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6bf69586f504555bbb16d32da8f8f97",
  },
  timeout: 10000,
});
