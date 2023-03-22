import Axios from "axios";

const axios = (() => {
  const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  return instance;
})();

export default axios;
