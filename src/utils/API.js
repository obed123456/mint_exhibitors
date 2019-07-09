import axios from "axios";

export default axios.create({
  baseURL: "https://5d2324eb4e05c600146efc50.mockapi.io/exhibitor/",
  responseType: "json"
});