import React from "react";

import SideBar from "src/components/SideBar/SideBar";
import HeaderDark from "src/components/Header/HeaderDark";
import BackToTop from "src/components/BackToTop/BackToTop";
import Footer from "src/components/Footer/Footer";

import "./ProfileEdit.css";

const ProfileEdit = () => {
  return (
    <div>
      <div id='thetop'></div>
      <BackToTop />
      <HeaderDark />
      <SideBar />
      <div class='profile_form'>
        <div class='section-content col-md-12'>
          <h1 class='text-center col-md-12'>Thông tin cá nhân</h1>
          <div class='clearfix'></div>
          <div class='col-sm-2'></div>
          <form
            id='formAcount'
            action='/profile/edit'
            method='POST'
            class='formAcount validate col-sm-8 col-xs-12 clearfix'
          >
            <div className='left'>
              <div class='form-group clearfix'>
                <label class='col-sm-3 control-label'> Họ tên: </label>
                <div class='col-lg-9'>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value='Lê Minh Hưng'
                    placeholder='Họ tên'
                    class='validate[required,minSize[4],maxSize[32]] form-control input-sm'
                  />
                </div>
              </div>
              <div class='form-group clearfix'>
                <label class='col-sm-3 control-label'>Ngày sinh: </label>
                <div class='col-lg-9'>
                  <input
                    type='text'
                    id='birthday'
                    name='birthday'
                    value=''
                    placeholder='Ngày sinh'
                    autocomplete='off'
                    class='form-control input-sm  hasDatepicker'
                  />
                </div>
              </div>
              <div class='form-group clearfix'>
                <label class='col-sm-3 control-label'>Điện thoại:</label>
                <div class='col-lg-9'>
                  <input
                    type='text'
                    id='mobile'
                    name='mobile'
                    value=''
                    placeholder='Điện thoại'
                    class='validate[required,custom[phone]] form-control input-sm'
                  />
                </div>
              </div>
            </div>
            <div className='right'>
              <div class='form-group clearfix'>
                <label class='col-sm-3 control-label'>Email:</label>
                <div class='col-lg-9'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    value='leminhhungtabletennis@gmail.com'
                    placeholder='Email'
                    class='validate[required,custom[email]] form-control input-sm'
                  />
                </div>
              </div>
              <div class='form-group clearfix'>
                <label class='col-sm-3 control-label'>Tỉnh/Thành:</label>
                <div class='col-lg-9'>
                  <select
                    id='cityId'
                    name='cityId'
                    class='validate[required] form-control minimal'
                  >
                    <option value=''>Chọn Tỉnh/ thành phố</option>
                    <option value='254'>Hà Nội</option>
                    <option value='255'>Hồ Chí Minh</option>
                    <option value='256'>An Giang</option>
                    <option value='257'>Bà Rịa - Vũng Tàu</option>
                    <option value='258'>Bắc Ninh</option>
                    <option value='259'>Bắc Giang</option>
                    <option value='260'>Bình Dương</option>
                    <option value='261'>Bình Định</option>
                    <option value='262'>Bình Phước</option>
                    <option value='263'>Bình Thuận</option>
                    <option value='264'>Bến Tre</option>
                    <option value='265'>Bắc Cạn</option>
                    <option value='266'>Cần Thơ</option>
                    <option value='267'>Khánh Hòa</option>
                    <option value='268'>Thừa Thiên Huế</option>
                    <option value='269'>Lào Cai</option>
                    <option value='270'>Quảng Ninh</option>
                    <option value='271'>Đồng Nai</option>
                    <option value='272'>Nam Định</option>
                    <option value='273'>Cà Mau</option>
                    <option value='274'>Cao Bằng</option>
                    <option value='275'>Gia Lai</option>
                    <option value='276'>Hà Giang</option>
                    <option value='277'>Hà Nam</option>
                    <option value='278'>Hà Tĩnh</option>
                    <option value='279'>Hải Dương</option>
                    <option value='280'>Hải Phòng</option>
                    <option value='281'>Hoà Bình</option>
                    <option value='282'>Hưng Yên</option>
                    <option value='283'>Kiên Giang</option>
                    <option value='284'>Kon Tum</option>
                    <option value='285'>Lai Châu</option>
                    <option value='286'>Lâm Đồng</option>
                    <option value='287'>Lạng Sơn</option>
                    <option value='288'>Long An</option>
                    <option value='289'>Nghệ An</option>
                    <option value='290'>Ninh Bình</option>
                    <option value='291'>Ninh Thuận</option>
                    <option value='292'>Phú Thọ</option>
                    <option value='293'>Phú Yên</option>
                    <option value='294'>Quảng Bình</option>
                    <option value='295'>Quảng Nam</option>
                    <option value='296'>Quảng Ngãi</option>
                    <option value='297'>Quảng Trị</option>
                    <option value='298'>Sóc Trăng</option>
                    <option value='299'>Sơn La</option>
                    <option value='300'>Tây Ninh</option>
                    <option value='301'>Thái Bình</option>
                    <option value='302'>Thái Nguyên</option>
                    <option value='303'>Thanh Hoá</option>
                    <option value='304'>Tiền Giang</option>
                    <option value='305'>Trà Vinh</option>
                    <option value='306'>Tuyên Quang</option>
                    <option value='307'>Vĩnh Long</option>
                    <option value='308'>Vĩnh Phúc</option>
                    <option value='309'>Yên Bái</option>
                    <option value='310'>Đắk Lắk</option>
                    <option value='311'>Đồng Tháp</option>
                    <option value='312'>Đà Nẵng</option>
                    <option value='313'>Đắc Nông</option>
                    <option value='314'>Hậu Giang</option>
                    <option value='315'>Bạc Liêu</option>
                    <option value='316'>Điện Biên</option>
                  </select>
                </div>
              </div>
              <div class='form-group clearfix'>
                <label for='districtId' class='col-sm-3 control-label'>
                  Quận/Huyện:{" "}
                </label>
                <div class='col-lg-9'>
                  <select
                    id='districtId'
                    name='districtId'
                    class='validate[required] form-control minimal'
                  >
                    <option value=''>Chọn Quận/ Huyện</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class='form-group clearfix text-center'>
            <button type='submit' class='btn btn-green'>
              {" "}
              Cập nhật
            </button>
            <a href='/profile' class='btn btn-green'>
              Quay lại
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileEdit;
