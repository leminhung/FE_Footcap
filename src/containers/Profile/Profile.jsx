import React from "react";

import SideBar from "src/components/SideBar/SideBar";
import HeaderDark from "src/components/Header/HeaderDark";
import BackToTop from "src/components/BackToTop/BackToTop";
import Footer from "src/components/Footer/Footer";

import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div id='thetop'></div>
      <BackToTop />
      <HeaderDark />
      <SideBar />
      <main className='profile__main'>
        <div className='profile__title'>
          <h3>Tài khoản</h3>
        </div>
        <div className='profile__details'>
          <div className='left'>
            <div className='profile__info-title'>Thông tin tài khoản</div>
            <div className='profile__info-details'>
              <p>Điểm tích lũy của bạn: </p>
              <p>Cấp độ khách hàng: </p>
              <p>Thông tin tài khoản</p>
              <p>Thay đổi mật khẩu</p>
              <p>Đăng xuất</p>
            </div>
          </div>
          <div className='right'>
            <div className='profile__info-title'>Các sản phẩm ưa thích</div>
            <div className='profile__info-details'>
              <p>Sản phẩm ưu thích </p>
              <p>Lịch sử order </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
