import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    indexes: false,
  },
});
axiosClient.interceptors.request.use(
  (config) => {
    const getLocalToken = localStorage.getItem("token");
    if (getLocalToken) {
      config.headers.Authorization = `Bearer ${getLocalToken}`;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
