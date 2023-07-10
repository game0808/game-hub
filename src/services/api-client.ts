import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e8ac9ce289a64facb480e6261e60ec15",
  },
});
