import React from "react";

import HomePage from "src/containers/HomePage/HomePage";
import NotFound from "src/containers/NotFound/NotFound";
import Cart from "src/containers/Cart/Cart";

import ShoppingCart from "src/containers/CheckOut/ShoppingCart";
import CheckOut from "src/containers/CheckOut/CheckOut";
import OrderCompleted from "src/containers/CheckOut/OrderComplete";
import Login from "src/containers/Login/Login";
import SignUp from "src/containers/Signup/SignUp";
import Blog from "src/containers/Blog/Blog";
import BlogDetail from "src/containers/Blog/BlogDetail";
import ContactUs from "src/containers/ContactUs/ContactUs";
import Profile from "src/containers/Profile/Profile";
import ProfileEdit from "src/containers/Profile/ProfileEdit";
import ChangePassword from "src/containers/ChangePassword/ChangePassword";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/edit",
    element: <ProfileEdit />,
  },
  {
    path: "profile/change-password",
    element: <ChangePassword />,
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
