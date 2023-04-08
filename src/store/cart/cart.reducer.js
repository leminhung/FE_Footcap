import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from "src/constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, subtotal: 0, total: 0 },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        let subtotal = state.subtotal + item.price;
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          subtotal,
          total: Math.round((subtotal * 0.9 + Number.EPSILON) * 100) / 100,
        };
      }
    case CART_REMOVE_ITEM:
      item = state.cartItems.find((x) => x.product === action.payload);
      let subtotal = state.subtotal - item.price;
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        subtotal,
        total: Math.round((subtotal * 0.9 + Number.EPSILON) * 100) / 100,
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
