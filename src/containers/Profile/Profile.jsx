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
        <h3>Tài khoản</h3>
      </div>
      <div className='profile__details'>
        <div className='left'>
          <div className='profile__info-title'>Thông tin tài khoản</div>
          <div className='profile__info-details'>
            <p>Điểm tích lũy của bạn: 0</p>
            <p>Cấp độ khách hàng: Silver</p>
            <p>Trạng thái tài khoản: Active</p>
            <p className='isCursor'>
              <Link to={"/profile/change-password/"}>Thay đổi mật khẩu</Link>
            </p>
            <p className='isCursor' onClick={() => logoutHandler()}>
              Đăng xuất
            </p>
          </div>
        </div>
        <div className='right'>
          <div className='profile__info-title'>Các sản phẩm ưa thích</div>
          <div className='profile__info-details'>
            <p>Sản phẩm ưu thích </p>
            <p className='isCursor'>Lịch sử order </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
