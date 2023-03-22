import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { productListReducer } from "./product/product.reducer";
import { authReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { OrderReducer } from "./order/order.reducer";

const persistAuth = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  productList: productListReducer,
  auth: persistReducer(persistAuth, authReducer),
  cart: cartReducer,
  orderCreate: OrderReducer,
});

export default rootReducer;
