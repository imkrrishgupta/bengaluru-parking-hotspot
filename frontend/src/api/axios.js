import axios from "axios";

// Fallback ensures API calls work even if .env is not picked up
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
