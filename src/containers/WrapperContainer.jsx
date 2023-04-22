import React from "react";
import { ToastContainer } from "react-toastify";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

import RoutesWrapper from "src/routes";

const Wrapper = () => {
  let checkAdminPath = window.location.pathname.includes("admin");

  return (
    <div>
      <BackToTop />
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
      )}
    </div>
  );
};

export default Wrapper;
