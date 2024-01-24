import axios from "axios";

const API_URL = "http://185.68.22.4:6001";
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorisaton = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});

export default $api;
