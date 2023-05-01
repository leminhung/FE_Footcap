import React from "react";
import { ToastContainer } from "react-toastify";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

import RoutesWrapper from "src/routes";

const Wrapper = () => {
  let checkAdminPath = window.location.pathname.includes("admin");
  let checkSignin = window.location.pathname.includes("signin");
  let checkSignup = window.location.pathname.includes("signup");
  let checkPasswordSubDomain = window.location.pathname.includes("password");

  return (
    <div>
      <BackToTop />
      {!checkAdminPath &&
      !checkSignin &&
      !checkSignup &&
      !checkPasswordSubDomain ? (
        <>
          <Header />
          <SideBar />
        </>
      ) : (
        ""
      )}
      <RoutesWrapper />
      <ToastContainer />
      {!checkAdminPath &&
      !checkSignin &&
      !checkSignup &&
      !checkPasswordSubDomain ? (
        <>
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Wrapper;
