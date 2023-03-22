import React from "react";
import { useSelector } from "react-redux";

import Header from "src/component/Header";
import Footer from "src/component/Footer";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  const actor = useSelector((state) => state.auth?.user?.data?.actor);

  return (
    <div className='bg-grey'>
      <Header />

      <div className='content-wrapper mb-60 mt-100'>
        <Sidebar id={4} />

        <div className='container py-5'>
          <h2 className='signup_title '>USER INFO</h2>
          <div className='profile'>
            <div className='profile-content'>
              <div className='profile-img'>
                <img src={actor?.avatar} alt='hung' className='dash_profile' />
              </div>
              <ul className='list-group list-group-flush profile-right'>
                <li className='list-group-item'>
                  <b>Name: </b> {actor?.name}
                </li>
                <li className='list-group-item'>
                  <b>E-mail: </b> {actor?.email}
                </li>
                <li className='list-group-item'>
                  <b>Join at:</b>{" "}
                  {new Date(actor?.createdAt).toLocaleDateString()}
                </li>
                <li className='list-group-item'>
                  <b>Status: </b>{" "}
                  {actor?.role?.charAt(0).toUpperCase() + actor?.role?.slice(1)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;
