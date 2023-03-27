import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "src/containers/HomePage/HomePage";
import NotFound from "src/containers/NotFound/NotFound";
import Cart from "src/containers/Cart/Cart";

import ShoppingCart from "src/containers/CheckOut/ShoppingCart";
import CheckOut from "src/containers/CheckOut/CheckOut";
import OrderCompleted from "src/containers/CheckOut/OrderComplete";
import ProductDetail from "src/containers/ProductDetail/ProductDetail";
import Login from "src/containers/Login/Login";
import SignUp from "src/containers/Signup/SignUp";
import Blog from "src/containers/Blog/Blog";
import BlogDetail from "src/containers/Blog/BlogDetail";
import ContactUs from "src/containers/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout-shopping-cart' element={<ShoppingCart />} />
          <Route path='/checkout-payment' element={<CheckOut />} />
          <Route
            path='/checkout-order-completed'
            element={<OrderCompleted />}
          />
          <Route path='/product-details' element={<ProductDetail />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-detail' element={<BlogDetail />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
