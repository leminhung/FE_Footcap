import "./sidebar.scss";

import {
  LineStyle,
  TrendingUp,
  PermIdentity,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebarComponent fixed-left h-100'>
      <div className='wrapper'>
        <div className='menu'>
          <h3>Dashboard</h3>
          <ul>
            <Link to='/admin' className='link'>
              <li>
                <LineStyle className='icon' />
                Home
              </li>
            </Link>
            <li>
              <TrendingUp className='icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='menu'>
          <h3>Quick Menu</h3>
          <ul>
            <li>
              <Link to='/admin/userslist' className='link'>
                <PermIdentity className='icon' />
                <span className='ml-1'>Users</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/categorieslist' className='link'>
                <CategoryIcon className='icon' />
                <span className='ml-1'>Category</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/products' className='link'>
                <LocalMallIcon className='icon' />
                <span className='ml-1'>Products</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/orderslist' className='link'>
                <LocalShippingIcon className='icon' />
                <span className='ml-1'>Orders</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/couponlist' className='link'>
                <FavoriteIcon className='icon' />
                <span className='ml-1'>Coupons</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='menu'>
          <h3>Notifications</h3>
          <ul>
            <li>
              <DynamicFeed className='icon' />
              Feedback
            </li>
            <li>
              <ChatBubbleOutline className='icon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='menu'>
          <h3>Staff</h3>
          <ul>
            <li>
              <WorkOutline className='icon' />
              Manage
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
