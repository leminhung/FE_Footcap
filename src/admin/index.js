import { Route, Switch } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

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
