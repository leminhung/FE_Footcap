import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SAVE_SHIPPING_ADDRESS,
  CART_EMPTY,
  CLEAR_SHIPPING_ADDRESS,
  GET_CART_PRODUCTS,
  ORDER_CART,
} from "src/constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {

  try {
    switch (action.type) {
      case ADD_TO_CART: {

        const item = action.payload;
        const isItemExist = state.cartItems.find(
          (i) => i.product == item.product && i.size == item.size && i.color==item.color
        );

        if (isItemExist) {
          const productList = state.cartItems.map((i) =>
            (i.product == item.product && i.size == item.size && i.color==item.color) ? {...i, ...item} : i
          );
          localStorage.setItem(ORDER_CART, JSON.stringify(productList));
          return {
            ...state,
            cartItems: productList,
          };
        } else {
          const productList= [...state.cartItems,item];
          localStorage.setItem(ORDER_CART, JSON.stringify(productList));
          return {
            ...state,
            cartItems:productList,
          };
        }

      }


      case REMOVE_TO_CART:
        {

          const item  =action.payload;
          return {
            ...state,
            cartItems: state.cartItems.filter((i) => !(i.product == item.product && i.size == item.size && i.color==item.color)),
          };
        }


      case SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        };

      case CLEAR_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: {},
        };

      case CART_EMPTY:
        return {
          ...state,
          cartItems: [],
        };
      case GET_CART_PRODUCTS: {

        return {
          ...state,
          cartItems: action.payload,
        };


      }
      default:
        return state;
    }

  } catch (err) {
    console.log(err);
  }
};
