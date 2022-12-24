import axios from "axios";

export const api = axios.create({
  baseURL: "https://shortly-api-8pn1.onrender.com/",
});
