import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import config from '../config';
import { getAuthToken } from "./localStorageService";
import { InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = config.API_BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use(
  async (axiosConfig: InternalAxiosRequestConfig) => {
    const token = await getAuthToken();
    if (token) {
      axiosConfig.headers.Authorization = `Bearer ${token}`;
    }
    return axiosConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Define your request and response interceptor managers
const requestInterceptor: number = axios.interceptors.request.use(
  (axiosConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Add authorization header or modify request
    const token = localStorage.getItem("authToken");
    if (token) {
      axiosConfig.headers.Authorization = `Bearer ${token}`;
    }
    return axiosConfig;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    handleHttpError(error);
    return Promise.reject(error);
  }
);

// Centralized error handling
const handleHttpError = (error: AxiosError): void => {
  if (!error.response) {
    console.error("Network error or request was not completed:", error.message);
    return;
  }

  const { status, data }:any = error.response;

  if (status === 401) {
    console.error("Unauthorized access. Please log in again.");
  } else if (status >= 400 && status < 500) {
    console.error(`Client error: ${data?.message || "An error occurred."}`);
  } else if (status >= 500) {
    console.error(`Server error: ${data?.message || "Server issue occurred."}`);
  } else {
    console.error("Unexpected error:", error);
  }
};

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default http;
