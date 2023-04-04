import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "src/constants/productConstants";

export const setProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: error.response.data.messsage,
    });
  }
};
