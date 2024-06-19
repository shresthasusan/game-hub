import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4662d2d38b4b4111b07ea294c19a6dbb",
  },
});
