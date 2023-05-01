import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { register } from "src/store/user/user.action";
import { checkEmailValid } from "src/utils/checkValidationField";

import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errEmailMsg, setErrorEmailMsg] = useState("");

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

    if (!checkEmailValid(email)) {
      setErrorEmailMsg("Email is invalid format");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      toast.success("Sign up successfully");
      setTimeout(() => {
        history.push("/signin");
      }, 0.5);
    }
  };
  return (
    <main>
      <section
        class='register_section sec_ptb_140 has_overlay parallaxie clearfix bg-fit bg-fit-signin '
        style={{
          backgroundImage: `url(/assets/images/backgrounds/signin.jpeg)`,
        }}
      >
        <div
          className='overlay'
          style={{ backgroundColor: "rgba(55, 55, 55, 0.75)" }}
        ></div>
        <div class='container'>
          <div class='reg_form_wrap signup_form'>
            <form action='#'>
              <div class='reg_form mx-auto'>
                <h2 class='form_title text-uppercase text-center'>Register</h2>
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
                    onClick={() => setErrorEmailMsg("")}
                  />
                </div>
                <p className='text-danger mb-4'>{errEmailMsg}</p>

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
