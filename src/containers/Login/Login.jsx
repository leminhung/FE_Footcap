import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "src/store/user/user.action";
import { checkEmailValid } from "src/utils/checkValidationField";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmailMsg, setErrorEmailMsg] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkEmailValid(email)) {
      setErrorEmailMsg("Email is invalid format");
    } else {
      dispatch(login(email, password));
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
                <h2 className='form_title text-uppercase text-center'>Login</h2>
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
                <div className='form_item'>
                  <input
                    id='password_input'
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label for='password_input'>
                    <i className='fal fa-unlock-alt'></i>
                  </label>
                </div>
                <a
                  className='forget_pass text-uppercase mb_30'
                  href='/forgot-password'
                >
                  Forgot password?
                </a>
                <button
                  type='submit'
                  className='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Login
                </button>

                <div className='create_account text-center'>
                  <h4 className='small_title_text text-center text-uppercase'>
                    Have not account yet?
                  </h4>
                  <a
                    className='create_account_btn text-uppercase'
                    href='/signup'
                  >
                    Sign Up
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

export default Login;
