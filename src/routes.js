import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "src/App";
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
import ProductDetail from "src/containers/ProductDetail/ProductDetail";
import SearchProduct from "src/containers/SearchProduct/SearchProduct";

// Admin Protect Route
import PrivateAdminRoute from "src/components/PrivateAdminRoute";

// Admin
import AdminPage from "src/admin/index";
import AdminDashboard from "src/admin/AdminDashboard/index";

// import AdminShowProductList from "src/admin/AdminShowProductList/index";
// import AdminShowOrderList from "src/admin/AdminShowOrderList/index";
// import AdminShowOrderDetailList from "src/admin/AdminShowOrderDetailList/index";
// import AdminCreateProduct from "src/admin/AdminCreateProduct/index";
// import AdminEditProduct from "src/admin/AdminEditProduct/index";
// import AdminShowCategoryList from "src/admin/AdminShowCategoryList/index";
// import AdminCreateCategory from "src/admin/AdminCreateCategory/index";
// import AdminEditCategory from "src/admin/AdminEditCategory/index";
// import AdminShowUsersList from "src/admin/AdminShowUsersList/index";
// import AdminCreateUser from "src/admin/AdminCreateUser/index";
// import AdminEditUser from "src/admin/AdminEditUser/index";

// const route = () => [
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
//   {
//     path: "signin",
//     element: <Login />,
//   },
//   {
//     path: "signup",
//     element: <SignUp />,
//   },
//   {
//     path: "products/:slug",
//     element: <ProductDetail />,
//   },
//   {
//     path: "blog",
//     element: <Blog />,
//   },
//   {
//     path: "search",
//     element: <SearchProduct />,
//   },
//   {
//     path: "blog/:id",
//     element: <BlogDetail />,
//   },
//   {
//     path: "contact-us",
//     element: <ContactUs />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
//   {
//     path: "profile/edit",
//     element: <ProfileEdit />,
//   },
//   {
//     path: "profile/change-password",
//     element: <ChangePassword />,
//   },
//   {
//     path: "checkout",
//     element: <ShoppingCart />,
//   },
//   {
//     path: "checkout/payment",
//     element: <CheckOut />,
//   },
//   {
//     path: "checkout/order-completed",
//     element: <OrderCompleted />,
//   },

//   // admin
//   {
//     path: "admin/dashboards",
//     element: (
//       <PrivateAdminRoute>
//         <AdminPage>
//           <AdminDashboard />
//         </AdminPage>
//       </PrivateAdminRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ];

const RoutesWrapper = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
  );
};

export default RoutesWrapper;
