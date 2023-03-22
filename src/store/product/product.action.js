import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "src/constants/productConstants";

export const listProducts = (params) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/products`,
      {
        params: {
          page: params?.pageNumber,
          limit: params?.limit,
          sort: params?.sort,
          category: params?.cate,
          color: params?.color,
          size: params?.size,
          title: params?.title,
        },
      }
    );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data.messsage,
    });
  }
};
