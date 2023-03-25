import React from "react";

import HomePage from "src/containers/HomePage/HomePage";
import NotFound from "src/containers/NotFound/NotFound";
import Cart from "src/containers/Cart/Cart";

import ShoppingCart from "src/containers/CheckOut/ShoppingCart";
import CheckOut from "src/containers/CheckOut/CheckOut";
import OrderCompleted from "src/containers/CheckOut/OrderComplete";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <ShoppingCart />,
  },
  {
    path: "checkout/payment",
    element: <CheckOut />,
  },
  {
    path: "checkout/order-completed",
    element: <OrderCompleted />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
