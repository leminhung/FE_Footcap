import React from "react";

import { ToastContainer } from "react-toastify";

import HomePage from "src/containers/HomePage/HomePage";
import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

const Wrapper = () => {
  // const { pathname } = routing?.props?.match;
  // const pathname = "admin";
  // let checkAdminPath = pathname.includes("admin");

  return (
    <div>
      {/* <BackToTop />
      {!checkAdminPath ? (
        <>
          <Header />
          <SideBar />
        </>
      ) : (
        ""
      )}
      <RoutesWrapper />
      <ToastContainer />
      {!checkAdminPath ? (
        <>
          <Footer />
        </>
      ) : (
        ""
      )} */}

      <BackToTop />
      <Header />
      <HomePage />
      <SideBar />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Wrapper;
