import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function AdminPage({ children }) {
  return (
    <>
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default AdminPage;
