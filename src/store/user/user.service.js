import constants from "src/constants";
import axios from "src/utils/axios";

const { endpoints } = constants;

const AuthServices = {};

AuthServices.signIn = (email, password) =>
  new Promise((resl, rej) => {
    axios
      .post(endpoints.authLogin, { email, password })
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.forgetPassword = () =>
  new Promise((resl, rej) => {
    axios
      .post(endpoints.forgetPassword)
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.getProfile = (token) =>
  new Promise((resl, rej) => {
    axios
      .get(endpoints.getProfile, { headers: { "Authorization": `Bearer ${token}` } })
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.updateProfile = (formValues) =>
  new Promise((resl, rej) => {
    axios
      .put(endpoints.updateProfile, formValues)
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });
export default AuthServices;
