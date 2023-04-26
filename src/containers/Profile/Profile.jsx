import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "src/store/user/user.action";

import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <main className='profile__main'>
      <div className='profile__title'>
        <h3>Personal Inforamation</h3>
      </div>
      <div className='profile__details'>
        <div className='left'>
          <div className='profile__info-title'>Your Inforamation</div>
          <div className='profile__info-details'>
            <p>Your accumulated points: 0</p>
            <p>Customer level: Silver</p>
            <p>Account Status: Active</p>
            <p className='isCursor'>
              <Link to={"/profile/change-password/"}>Change Password</Link>
            </p>
            <p className='isCursor' onClick={() => logoutHandler()}>
              Sign out
            </p>
          </div>
        </div>
        <div className='right'>
          <div className='profile__info-title'>Favorite products</div>
          <div className='profile__info-details'>
            <p>Products you prefered </p>
            <p className='isCursor'>History order </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
