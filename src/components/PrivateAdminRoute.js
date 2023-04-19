import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateAdminRoute = ({ ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  if (userInfo?.token) {
    const { actor } = userInfo;
    if (actor.role === "user") {
      toast.error("You need to sign in as an Admin to access this resource!");
      return <Navigate to='/' />;
    } else {
      return userInfo?.token && actor.role === "admin" ? (
        <Route {...rest} />
      ) : (
        <Navigate to='/admin/dashboards' />
      );
    }
  }

  return <Route {...rest} />;
};

export default PrivateAdminRoute;
