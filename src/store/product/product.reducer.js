import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "src/constants/productConstants";

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, products: {} };
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
