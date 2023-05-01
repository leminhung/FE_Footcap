import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { sendMailGetNewPassword } from "src/store/user/user.action";
import { checkEmailValid } from "src/utils/checkValidationField";

import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errEmailMsg, setErrorEmailMsg] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkEmailValid(email)) {
      setErrorEmailMsg("Email is invalid format");
    } else {
      dispatch(sendMailGetNewPassword(email));
    }
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
                <h2 className='form_title text-center'>Forgot Password</h2>
                <div className='form_item mb-2'>
                  <input
                    id='email_input'
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => setErrorEmailMsg("")}
                  />
                  <label for='email_input'>
                    <i className='fal fa-user'></i>
                  </label>
                </div>
                <p className='text-danger mb-4'>{errEmailMsg}</p>
                <button
                  type='submit'
                  className='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
