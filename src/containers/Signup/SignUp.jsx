import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { register } from "src/store/user/user.action";

import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  let history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      toast.success("Sign up successfully");
      setTimeout(() => {
        window.location.href = "/signin";
      }, 0.5);
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
          <h1 class='page_title text-white'>Register Page</h1>
          <ul class='breadcrumb_nav ul_li_center clearfix'>
            <li>
              <a href='#!'>Home</a>
            </li>
            <li>Pages</li>
            <li>Register</li>
          </ul>
        </div>
      </section>

      <section
        class='register_section sec_ptb_140 parallaxie clearfix bg-fit-signin'
        style={{
          backgroundImage: `url(/assets/images/backgrounds/signin.jpeg)`,
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
                <h2 class='form_title text-uppercase'>Register</h2>
                <div class='form_item'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Username'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class='form_item'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class='form_item'>
                  <input type='tel' name='phone' placeholder='phone' />
                </div>
                <div class='form_item'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class='form_item'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div class='checkbox_item mb_30'>
                  <label for='agree_checkbox'>
                    <input id='agree_checkbox' type='checkbox' /> I agree to the
                    Terms of User
                  </label>
                </div>
                <button
                  type='submit'
                  class='custom_btn bg_default_red text-uppercase mb_50'
                  onClick={(e) => submitHandler(e)}
                >
                  Create Account
                </button>

                <div class='create_account text-center'>
                  <h4 class='small_title_text text-center text-uppercase'>
                    Have not account yet?
                  </h4>
                  <a class='create_account_btn text-uppercase' href='/signin'>
                    Login
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

export default SignUp;
