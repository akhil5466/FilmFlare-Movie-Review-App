import axios from "axios";

const client = axios.create({ baseURL: "https://filmflare-movie-review-backend.onrender.com/api" });

export default client;