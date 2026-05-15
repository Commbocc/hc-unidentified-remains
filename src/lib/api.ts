import axios, { AxiosInstance } from "axios";

const url =
  "https://hc-county-data-stack.netlify.app/api/v1/content_types/unidentified_remains";

const api: AxiosInstance = axios.create({
  baseURL: url,
});

export default api;
