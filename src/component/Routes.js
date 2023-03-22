import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "../App";
import Signin from "../user/Signin";
import Signup from "../user/Signup";
import AddToCart from "../cart/AddToCart";
import UserDashboard from "../user/Dashboard/UserInfor";
import UserDashboardEdit from "../user/Dashboard/UserEdit";
import PrivateAdminRoute from "../component/PrivateAdminRoute";
import ViewProduct from "../product/ViewProduct";
import ProductList from "./ProductList";
import PrivateRoute from "./PrivateRoute";

import AdminPage from "../admin"
import AdminDashboard from '../admin/AdminDashboard';
import AdminShowProductList from '../admin/AdminShowProductList';
import AdminShowOrderList from '../admin/AdminShowOrderList';
import AdminShowOrderDetailList from '../admin/AdminShowOrderDetailList';
import AdminCreateProduct from '../admin/AdminCreateProduct';
import AdminEditProduct from '../admin/AdminEditProduct';
import AdminShowCategoryList from '../admin/AdminShowCategoryList';
import AdminCreateCategory from '../admin/AdminCreateCategory';
import AdminEditCategory from '../admin/AdminEditCategory';
import AdminShowUsersList from '../admin/AdminShowUsersList';
import AdminCreateUser from '../admin/AdminCreateUser';
import AdminEditUser from '../admin/AdminEditUser';

// import { loadUser } from "src/store/user/user.action";
// import store from "../store";
// import { ToastContainer, toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import ShippingCard from "../cart/ShippingCard";
import Payment from "../cart/PaymentCart";
import OrderSuccess from "../cart/OrderSuccess";
import UserOrderHistory from "../user/Dashboard/UserOrderHistory";
import Checkout from "./Checkout";
import "react-toastify/dist/ReactToastify.css";
const Routes = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path='/search/:keyword' component={App} />
          <Route path='/' exact component={App} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/productlist' exact component={ProductList} />
          {/* <Route path='/admin/users' exact component={AdminUsersList} /> */}
          <Route path='/product/:productid' exact component={ViewProduct} />

          <PrivateAdminRoute path='/admin/dashboard' exact>
            <AdminPage>
              <AdminDashboard />
            </AdminPage>
          </PrivateAdminRoute>
          {/* users */}
          <PrivateAdminRoute path='/admin/userslist'>
            <AdminPage>
              <AdminShowUsersList />
            </AdminPage>
          </PrivateAdminRoute>
          <PrivateAdminRoute path='/admin/create-user'>
            <AdminPage>
              <AdminCreateUser />
            </AdminPage>
          </PrivateAdminRoute>
          <PrivateAdminRoute
            path='/admin/edit-user/:userId'
            render={({ match, history }) => (
              <AdminPage>
                <AdminEditUser history={history} match={match} />
              </AdminPage>
            )}
          />

          {/* products */}
          <Route path='/admin/productlist' >
            <AdminPage><AdminShowProductList /></AdminPage>
          </Route>

          <Route path='/admin/order' >
            <AdminPage><AdminShowOrderList /></AdminPage>
          </Route>
          <Route path='/admin/order-detail/:orderId' >
            <AdminPage><AdminShowOrderDetailList /></AdminPage>
          </Route>
          <Route path='/admin/create-product'
            render={({ match, history }) => (
              <AdminPage>
                <AdminCreateProduct history={history} />
              </AdminPage>
            )}
          />
          <PrivateAdminRoute
            path='/admin/edit-product/:productId'
            render={({ match, history }) => (
              <AdminPage>
                <AdminEditProduct history={history} match={match} />
              </AdminPage>
            )}
          />

          {/* category */}
          <PrivateAdminRoute path='/admin/categorylist'>
            <AdminPage>
              <AdminShowCategoryList />
            </AdminPage>
          </PrivateAdminRoute>
          <PrivateAdminRoute
            path='/admin/create-category'
            render={({ match, history }) => (
              <AdminPage>
                <AdminCreateCategory history={history} />
              </AdminPage>
            )}
          />
          <PrivateAdminRoute
            path='/admin/edit-category/:categoryId'
            render={({ match, history }) => (
              <AdminPage>
                <AdminEditCategory history={history} match={match} />
              </AdminPage>
            )}
          />

          <PrivateRoute
            path='/user/dashboard'
            exact
            component={UserDashboard}
          />
          <PrivateRoute
            path='/user/dashboard/edit/:id'
            exact
            component={UserDashboardEdit}
          />
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/cart' component={AddToCart} />
          <PrivateRoute path='/shipping' exact component={ShippingCard} />
          <PrivateRoute path='/payment' exact component={Payment} />
          <PrivateRoute path='/success' exact component={OrderSuccess} />
          <PrivateRoute
            path='/user/dashboard/orders'
            exact
            component={UserOrderHistory}
          />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
