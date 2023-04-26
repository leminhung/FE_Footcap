import { Route, Switch } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

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
// import AdminShowProductList from "src/admin/AdminShowProductList/index";

function AdminPage({ children }) {
  return (
    <div>
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default AdminPage;
