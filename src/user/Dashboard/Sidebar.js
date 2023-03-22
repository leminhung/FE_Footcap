import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";

const Sidebar = ({ id }) => {
  const actor = useSelector((state) => state.auth?.user?.data?.actor);

  return (
    <>
      <div style={{ width: "300px" }}>
        <div
          id='sidebarMenu'
          className='collapse d-lg-block sidebar collapse bg-white'
        >
          <div className='position-sticky'>
            <div class='account-left-header'>
              <div class='user-account'>
                <div class='user-acc-logo'>
                  <img src={actor?.avatar} alt='Huyen ngao' />
                </div>
                <div class='user-account-right'>
                  <h4 class='user-account-name'>{actor?.name}</h4>
                  <div class='user-account-email'>{actor?.email}</div>
                </div>
              </div>
            </div>
            <div className='list-group list-group-flush mx-3 mt-4'>
              <Link
                to='/user/dashboard'
                className='list-group-item list-group-item-action py-2 ripple flex'
                aria-current='true'
              >
                <i className='fas fa-user-circle fa-fw me-3'></i>
                <span>User information</span>
              </Link>

              <Link
                to={{
                  pathname: `/user/dashboard/edit/${actor?._id}`,
                  state: { actor: actor },
                }}
                className='list-group-item list-group-item-action py-2 ripple flex'
              >
                <i className='fas fa-edit fa-fw me-3'></i>
                <span>Edit info</span>
              </Link>

              <Link
                to='/user/dashboard/orders'
                className='list-group-item list-group-item-action py-2 ripple flex'
              >
                <i className='fas fa-chart-bar fa-fw me-3'></i>
                <span>Orders history</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
