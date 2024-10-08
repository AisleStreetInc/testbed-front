import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

export default axiosInstance;
