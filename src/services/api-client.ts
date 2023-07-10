import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5515016228254ce5b81dc547b9c95026",
  },
});
