import axios from "axios";

const api = axios.create({
  baseURL: "https://api-estoque-topicos.herokuapp.com",
});

export default api;
