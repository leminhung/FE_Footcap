import { toast } from "react-toastify";
import axios from "axios";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  GET_COUPON_SUCCESS,
} from "src/constants/cartConstants";

export const checkValidCoupon =
  ({ coupon_code, total }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/coupons/check`,
        { coupon_code, total }
      );

      dispatch({
        type: GET_COUPON_SUCCESS,
        payload: data,
      });
      toast.success(
        `Yeah, your payment just has decreased ${data.data?.discount}$`
      );
      localStorage.setItem(
        "coupon",
        JSON.stringify({
          value: data.data?.discount,
          code: data.data?.coupon_code,
        })
      );
    } catch (error) {
      toast.error(error.response.data.msg || "Invalid request");
    }
  };

export const addToCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: product,
  });
  toast.success("Added new item");
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("subtotal", JSON.stringify(getState().cart.subtotal));
  localStorage.setItem("total", JSON.stringify(getState().cart.total));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: product,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("subtotal", JSON.stringify(getState().cart.subtotal));
  localStorage.setItem("total", JSON.stringify(getState().cart.total));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
