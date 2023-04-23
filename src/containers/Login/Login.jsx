import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "src/store/user/user.action";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  let history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <main>
      <section
        className='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
        style={{
          backgroundImage: `url(/assets/images/slider/classic_ecommerce/test.png)`,
        }}
      >
        <div
          className='overlay'
          style={{
            backgroundColor: `#1d1d1d`,
          }}
        ></div>
        <div className='container'>
          <h1 className='page_title text-white'>Login Page</h1>
          <ul className='breadcrumb_nav ul_li_center clearfix'>
            <li>
              <a href='#!'>Home</a>
            </li>
            <li>Pages</li>
            <li>Login</li>
          </ul>
        </div>
      </section>
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
          <div
            className='reg_form_wrap login_form'
            style={{
              backgroundImage: `url(/assets/images/reg_bg_01.png)`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <form action='#'>
              <div className='reg_form'>
                <h2 className='form_title text-uppercase text-center'>Login</h2>
                <div className='form_item'>
                  <input
                    id='email_input'
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for='email_input'>
                    <i className='fal fa-user'></i>
                  </label>
                </div>
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
                <a className='forget_pass text-uppercase mb_30' href='#!'>
                  Forgot password?
                </a>
                <button
                  type='submit'
                  className='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Login
                </button>

                <div className='social_wrap mb_100'>
                  <h4 className='small_title_text mb_15 text-center text-uppercase'>
                    Or Login With
                  </h4>
                  <ul className='circle_social_links ul_li_center clearfix'>
                    <li>
                      <a
                        style={{
                          backgroundColor: `#3b5998`,
                        }}
                        href='#!'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          backgroundColor: `#1da1f2`,
                        }}
                        href='#!'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          backgroundColor: `#ea4335`,
                        }}
                        href='#!'
                      >
                        <i className='fab fa-google-plus-g'></i>
                      </a>
                    </li>
                  </ul>
                </div>

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
