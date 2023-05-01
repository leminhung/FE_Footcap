import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { resetPassword } from "src/store/user/user.action";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newResetToken, setResetToken] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      resetPassword({
        password: newPassword,
        resettoken: newResetToken,
      })
    );
  };

  return (
    <main>
      <section
        className='register_section sec_ptb_140 has_overlay parallaxie clearfix bg-fit bg-fit-signin'
        style={{
          backgroundImage: `url(/assets/images/backgrounds/signin.jpeg)`,
        }}
      >
        <div
          className='overlay'
          style={{ backgroundColor: "rgba(55, 55, 55, 0.75)" }}
        ></div>
        <div className='container'>
          <div className='reg_form_wrap login_form'>
            <form action='#'>
              <div className='reg_form mx-auto'>
                <h2 className='form_title text-center'>Reset Password</h2>
                <div className='form_item mb-2'>
                  <input
                    id='email_input'
                    type='password'
                    name='text'
                    placeholder='New password'
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <label for='email_input'>
                    <i className='fal fa-user'></i>
                  </label>
                </div>
                <div className='form_item mb-2'>
                  <input
                    id='resettoken_input'
                    type='text'
                    name='text'
                    placeholder='Your reset token'
                    onChange={(e) => setResetToken(e.target.value)}
                  />
                  <label for='resettoken_input'>
                    <i className='fal fa-user'></i>
                  </label>
                </div>
                <button
                  type='submit'
                  className='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
