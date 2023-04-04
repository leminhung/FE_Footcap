import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  ADD_TO_CART_FAIL,
  // SAVE_SHIPPING_ADDRESS,
  // CLEAR_SHIPPING_ADDRESS,
  // GET_CART_PRODUCTS,
  // ORDER_CART,
} from "src/constants/cartConstants";
// import axios from "axios";
// import { toast } from "react-toastify";

export const addItemToCart = (item) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.response.data.messsage,
    });
  }
};

//remove item in the cart
export const removeToCart = (item) => async (dispatch) => {
  console.log("datacarAction", item);

  dispatch({
    type: REMOVE_TO_CART,
    payload: item,
  });

  // localStorage.setItem(ORDER_CART, JSON.stringify(getState().cart.cartItems));
  // toast.success("Removed successfully from cart");
};

// // save shipping
// export const saveShippingAddress = (data) => async (dispatch) => {
//   dispatch({
//     type: SAVE_SHIPPING_ADDRESS,
//     payload: data,
//   });

//   localStorage.setItem("shippingAddress", JSON.stringify(data));
// };

// // clear shipping address
// export const clearShippingAddress = (data) => async (dispatch) => {
//   dispatch({
//     type: CLEAR_SHIPPING_ADDRESS,
//     payload: {},
//   });

//   localStorage.removeItem("shippingAddress");
// };

// export const getCartProducts = () => async (dispatch) => {
//   try {
//     const orderCart = JSON.parse(localStorage.getItem(ORDER_CART));

//     let promis = [];
//     orderCart.forEach((item) => {
//       const url = `http://localhost:5000/api/v1/products/${item.product}`;
//       promis.push(axios.get(url));
//     });

//     Promise.all(promis)
//       .then((resp) => {
//         for (let i = 0; i < resp.length; i++) {
//           const item = resp[i].data.data;
//           orderCart[i].images = item.images;
//           orderCart[i].price = item.price;
//           orderCart[i].name = item.title;
//         }

//         dispatch({
//           type: GET_CART_PRODUCTS,
//           payload: orderCart,
//         });
//       })
//       .catch((err) => {
//         console.log("--err", err);
//       });
//   } catch (err) {
//     console.log("--err", err);
//   }
// };
