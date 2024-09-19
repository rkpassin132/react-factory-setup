import axios from "axios";
import config from '../config';
import { getAuthToken } from "./tokenService";

axios.defaults.baseURL = config.API_BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (error.response.status === 401) {
    // authStorage.logout();
  }

  if (!expectedError) {
    console.error("Unexpected error: ", error);
  }

  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default http;
