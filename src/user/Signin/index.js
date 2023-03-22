import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authSignInAsyncAction } from "src/store/user/user.action.js";

import "./styles.css";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    if (user && user.data?.token) history.push("/");
  }, [user, history]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "")
      dispatch(authSignInAsyncAction(email, password));
  };

  return (
    <div>
      <div className='container custom_class'>
        <div className='row'>
          <div className='col-md-offset-3 col-md-6'>
            <form className='form-horizontal col-sm-12 offset-6 pt-5 signup_form'>
              <span className='heading'>Log In</span>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail3'
                  placeholder='Email'
                  onChange={handleChange("email")}
                  value={email}
                  required
                />
                <i className='fa fa-user'></i>
              </div>
              <div className='form-group help'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword3'
                  placeholder='Password'
                  onChange={handleChange("password")}
                  value={password}
                  required
                />
                <i className='fa fa-lock'></i>
                <a href='#' className='fa fa-question-circle'></a>
              </div>
              <div className='form-group'>
                <div className='main-checkbox'>
                  <input
                    type='checkbox'
                    value='None'
                    id='checkbox1'
                    name='check'
                  />
                  <label for='checkbox1'></label>
                </div>
                <span className='text'>Remember me</span>
                <button
                  type='submit'
                  className='btn btn-default'
                  onClick={handleSubmit}
                >
                  log in
                </button>
              </div>
              <span className='register'>
                <a href='/signup'>Signup /</a>
                <a href='#'>Forgot password</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
