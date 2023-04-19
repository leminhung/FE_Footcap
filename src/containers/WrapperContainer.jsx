import React from "react";

import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "src/routes";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

const Wrapper = () => {
  const routing = useRoutes(routes());

  const { pathname } = routing?.props?.match;
  let checkAdminPath = pathname.includes("admin");

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
      {routing}
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
