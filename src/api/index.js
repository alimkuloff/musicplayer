import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
   headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
   },
   timeout: 10000
});

export default instance