import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "src/store/user/user.action";

import "./ProfileEdit.css";

const ProfileEdit = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setEmail(userInfo?.actor?.email);
    setName(userInfo?.actor?.name);
    setPhone(userInfo?.actor?.phone);
    setDate(userInfo?.actor?.date);
  }, [userInfo]);

  const handleChangeAvatar = (e) => {
    const files = Array.from(e.target.files);
    setAvatar(`/images/${files[0].name}`);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const user = { name, email, phone, date, avatar };
    dispatch(updateUser(user));
    setTimeout(() => {
      window.location.href = "/";
    }, 0.5);
  };

  return (
    <div class='profile_form'>
      <div class='section-content col-md-12'>
        <h1 class='text-center col-md-12'>Personal Inforamation</h1>
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
              <label class='col-sm-3 control-label'> Username: </label>
              <div class='col-lg-9'>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={name}
                  placeholder='Họ tên'
                  onChange={(e) => setName(e.target.value)}
                  class='validate[required,minSize[4],maxSize[32]] form-control input-sm'
                />
              </div>
            </div>
            <div class='form-group clearfix'>
              <label class='col-sm-3 control-label'>Avatar:</label>
              <div class='col-lg-9'>
                <input
                  type='file'
                  id='email'
                  placeholder='Avatar'
                  onChange={(e) => handleChangeAvatar(e)}
                  class='validate[required,custom[email]] form-control input-sm'
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
                  value={email}
                  placeholder='Email'
                  onChange={(e) => setEmail(e)}
                  class='validate[required,custom[email]] form-control input-sm'
                />
              </div>
            </div>
            <div class='form-group clearfix'>
              <label class='col-sm-3 control-label'>Date born: </label>
              <div class='col-lg-9'>
                <input
                  type='date'
                  id='birthday'
                  name='birthday'
                  onChange={(e) => setDate(e.target.value)}
                  placeholder='Ngày sinh'
                  class='form-control input-sm  hasDatepicker'
                />
              </div>
            </div>
            <div class='form-group clearfix'>
              <label class='col-sm-3 control-label'>Phone number:</label>
              <div class='col-lg-9'>
                <input
                  type='text'
                  id='mobile'
                  name='mobile'
                  value={phone}
                  placeholder='Điện thoại'
                  class='validate[required,custom[phone]] form-control input-sm'
                />
              </div>
            </div>
          </div>
        </form>
        <div class='form-group text-center'>
          <button
            type='submit'
            class='custom_btn bg_default_red text-uppercase mb_20'
            onClick={(e) => submitHandler(e)}
          >
            {" "}
            Update now
          </button>
          <a
            href='/'
            class='custom_btn bg_default_red text-uppercase mb_50 ml-3'
          >
            Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
