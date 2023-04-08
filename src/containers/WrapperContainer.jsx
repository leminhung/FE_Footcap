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

  return (
    <div>
      <BackToTop />
      <Header />
      <SideBar />
      {routing}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Wrapper;
