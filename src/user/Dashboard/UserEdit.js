import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Header from "src/component/Header";
import Footer from "src/component/Footer";
import Sidebar from "./Sidebar";

import { headers } from "src/utils/getTokenFromLocalStorage";

import "./style.css";

const UserDashboardEdit = ({ match, history }) => {
  const location = useLocation();
  const { actor } = location.state;

  const [name, setName] = useState(actor?.name);
  const [email, setEmail] = useState(actor?.email);
  const [avatarr, setAvatar] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  console.log(headers);

  //send values to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/auth/update-details`,
        {
          name,
          email,
        },
        { headers: headers }
      )
      .then(function (response) {
        if (response) {
          toast.success(`User name: ${name}, was updated`);
          history.push("/user/dashboard");
        }
      })
      .catch(function (error) {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className='bg-grey'>
        <Header />

        <div className='content-wrapper mt-100'>
          <Sidebar />
          <div className='container custom_class'>
            <h2 className='signup_title '>EDIT USER INFO</h2>
            <form className='pt-5 signup_form ' encType='multipart/form-data'>
              <div className='form-outline mb-4 flex ml-10 edit-item'>
                <label>Name: </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  id='form4Example1'
                  className='form-control'
                  value={name}
                />
              </div>
              <div className='form-outline mb-4 flex ml-10 edit-item'>
                <label>Email: </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  id='form4Example2'
                  className='form-control'
                  value={email}
                />
              </div>

              <div className='form-outline mb-4 flex ml-10 edit-item'>
                <label>Avatar: </label>
                <input
                  onChange={handleImage}
                  type='file'
                  id='formupload'
                  name='image'
                  className='form-control pl-3'
                />
              </div>

              <div className='button-update'>
                <button
                  onClick={handleSubmit}
                  type='submit'
                  className='btn btn-primary mb-4'
                >
                  Update user
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UserDashboardEdit;
