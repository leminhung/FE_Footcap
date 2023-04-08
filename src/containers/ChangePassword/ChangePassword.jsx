import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { updatePassword } from "src/store/user/user.action";

import "./ChangePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(updatePassword({ currentPassword, newPassword }));
    }
  };
  return (
    <main>
      <section
        class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
        style={{
          backgroundImage: `url(/assets/images/slider/classic_ecommerce/test.png)`,
        }}
      >
        <div
          class='overlay'
          style={{
            backgroundColor: `#1d1d1d`,
          }}
        ></div>
        <div class='container'>
          <h1 class='page_title text-white'>Change Password Page</h1>
          <ul class='breadcrumb_nav ul_li_center clearfix'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>Pages</li>
            <li>Change password</li>
          </ul>
        </div>
      </section>

      <section
        class='register_section sec_ptb_140 parallaxie clearfix bg-fit-signin'
        style={{
          backgroundImage: `url(/assets/images/backgrounds/bg_23.jpg)`,
        }}
      >
        <div class='container'>
          <div
            class='reg_form_wrap signup_form'
            style={{
              backgroundImage: `url(/assets/images/reg_bg_02.png)`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <form action='#'>
              <div class='reg_form'>
                <h2 class='form_title text-uppercase'>Change Password</h2>
                <div class='form_item'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={userInfo?.actor?.email}
                    disabled
                  />
                </div>
                <div class='form_item'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Current password'
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div class='form_item'>
                  <input
                    type='password'
                    name='password'
                    placeholder='New password'
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div class='form_item'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Confirm New Password'
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  class='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Change Now
                </button>

                <div class='create_account text-center'>
                  <h4 class='small_title_text text-center text-uppercase'>
                    Have you want to change password now?
                  </h4>
                  <a class='create_account_btn text-uppercase' href='/'>
                    Home
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;
