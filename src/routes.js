import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "src/containers/HomePage/HomePage";
import NotFound from "src/containers/NotFound/NotFound";
import Cart from "src/containers/Cart/Cart";

// checkout
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

// Protect Route
import PrivateAdminRoute from "src/components/PrivateAdminRoute";
import PrivateRoute from "src/components/PrivateRoute";

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

const RoutesWrapper = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/cart' component={Cart} />
          <Route path='/signin' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/products/:slug' component={ProductDetail} />
          <Route path='/blog' component={Blog} />
          <Route path='/search' component={SearchProduct} />
          <Route path='/blog/:id' component={BlogDetail} />
          <Route path='/contact-us' component={ContactUs} />

          {/* auth */}
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/profile/edit' component={ProfileEdit} />
          <PrivateRoute
            path='/profile/change-password'
            exact
            component={ChangePassword}
          />

          {/* checkout */}
          <Route path='/checkout/shopping-cart' component={ShoppingCart} />
          <Route path='/checkout/payment' component={CheckOut} />
          <Route path='/checkout/order-completed' component={OrderCompleted} />

          {/* admin */}
          <PrivateAdminRoute path='/admin/dashboard' exact>
            <AdminPage>
              <AdminDashboard />
            </AdminPage>
          </PrivateAdminRoute>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default RoutesWrapper;
