import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
  GET_COUPON_SUCCESS,
} from "src/constants/cartConstants";

import { roundNumber } from "src/utils/roundNumber";

export const cartReducer = (
  state = {
    cartItems: [],
    shippingAddress: {},
    subtotal: 0,
    total: 0,
    coupon: { value: 0, code: "" },
  },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let item = action.payload;
      let subtotal = state.subtotal + item.price * item.quantity;
      let total = roundNumber(subtotal * 0.9);

      // differrent color && differrent size
      let existedItem = state.cartItems.find(
        (i) =>
          i.product === item.product &&
          i.color === item.color &&
          i.size === item.size
      );

      if (existedItem) {
        if (item.increase) {
          existedItem.quantity += item.increase;
          subtotal = state.subtotal + item.price;
        } else existedItem.quantity += item.quantity;
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === state.cartItems.product &&
            x.color === item.color &&
            x.size === item.size
              ? existedItem
              : x
          ),
          subtotal,
          total,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, item],
        subtotal,
        total,
      };
    case CART_REMOVE_ITEM:
      item = action.payload;
      subtotal = state.subtotal - item.price * item.quantity;

      existedItem = state.cartItems.find(
        (i) =>
          i.product === item.product &&
          i.color === item.color &&
          i.size === item.size
      );

      if (item.decrease && existedItem.quantity - item.decrease > 0) {
        existedItem.quantity -= item.decrease;
        subtotal = state.subtotal - item.price;
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === item.product &&
            i.color === item.color &&
            i.size === item.size
              ? existedItem
              : i
          ),
          subtotal,
          total: roundNumber(subtotal * 0.9),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x !== existedItem),
        subtotal,
        total: roundNumber(subtotal * 0.9),
      };
    case GET_COUPON_SUCCESS:
      return {
        ...state,
        coupon: {
          value: action.payload.data.discount,
          code: action.payload.data.coupon_code,
        },
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
