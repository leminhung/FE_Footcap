import { toast } from "react-toastify";
import axios from "axios";

import { removeDataFromReduxPersit } from "src/utils/removeDataReduxPersit";

import AuthServices from "./user.service";

export const AuthActionsEnum = {
  LOADING: "auth/LOADING",
  STOP_LOADING: "auth/STOP_LOADING",
  SET_DATA: "auth/SET_DATA",
  FAILED: "auth/FAILED",
  SET_TOKEN: "auth/TOKEN",
  LOGOUT: "auth/LOGOUT",
  RESET_ERROR: "auth/RESET_ERROR",
  SUBMITTING: "auth/SUBMITTING",
  STOP_SUBMITTING: "auth/STOP_SUBMITTING",
  LOGOUT_SUCCESS: "auth/LOGOUT_SUCCESS",
  LOGOUT_FAIL: "auth/LOGOUT_FAIL",
};

export const authLoadingAction = () => ({
  type: AuthActionsEnum.LOADING,
});

export const authStopLoadingAction = () => ({
  type: AuthActionsEnum.STOP_LOADING,
});

export const authSubmittingAction = () => ({
  type: AuthActionsEnum.SUBMITTING,
});

export const authStopSubmittingAction = () => ({
  type: AuthActionsEnum.STOP_SUBMITTING,
});

export const authFailedAction = (error) => ({
  type: AuthActionsEnum.FAILED,
  payload: { error },
});

export const authSetDataAction = (data) => ({
  type: AuthActionsEnum.SET_DATA,
  payload: { data },
});

export const authSetAccessToken = (token) => ({
  type: AuthActionsEnum.SET_TOKEN,
  payload: { token },
});

export const authLogout = () => ({
  type: AuthActionsEnum.LOGOUT,
});

export const resetError = () => ({
  type: AuthActionsEnum.RESET_ERROR,
});

export const authSignInAsyncAction = (email, password) => async (dispatch) => {
  try {
    dispatch(authLoadingAction());
    const res = await AuthServices.signIn(email, password);
    toast.success("Login successfully");
    localStorage.setItem("jwt", JSON.stringify(res.data));
    localStorage.setItem("user_email",email);
    dispatch(authSetDataAction(res.data));
  } catch (err) {
    const { status, data } = err.response;
    if (status === 401) toast.error(data.msg);
    if (status === 404) toast.error(data.msg);
    dispatch(authFailedAction(data.msg));
  } finally {
    dispatch(authStopLoadingAction());
  }
};

// //CURRENTLY LOGGED USER
export const loadUser = (token) => async (dispatch) => {
  dispatch(authLoadingAction());
  const res = await AuthServices.getProfile(token);
  dispatch(authSetDataAction(res?.data?.data));
};

//LOG OUT
export const logOut = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/auth/logout`
    );
    dispatch({
      type: AuthActionsEnum.LOGOUT_SUCCESS,
    });
    toast.success("Signout successfully");
    console.log("signout--", data);
    // dispatch({ type: CART_EMPTY });
    // dispatch({ type: CLEAR_SHIPPING_ADDRESS });
    // localStorage.removeItem("cartItems");
    // localStorage.removeItem("shippingAddress");

    await removeDataFromReduxPersit();
  } catch (error) {
    dispatch({
      type: AuthActionsEnum.LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// export const logOutAuto = () => async (dispatch) => {
//   setTimeout(async () => {
//     try {
//       const { data } = await axios.get("/api/logout");
//       dispatch({
//         type: LOGOUT_AUTO_SUCCESS,
//       });
//       dispatch({ type: CART_EMPTY });
//       dispatch({ type: CLEAR_SHIPPING_ADDRESS });
//       localStorage.removeItem("cartItems");
//       localStorage.removeItem("shippingAddress");
//       window.location.reload(true);
//       toast.error("Your token is expired, please log again");
//     } catch (error) {
//       dispatch({
//         type: LOGOUT_AUTO_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   }, 3600000);
// };
