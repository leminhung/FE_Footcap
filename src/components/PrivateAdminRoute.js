import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateAdminRoute = ({ ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  if (userInfo?.token) {
    const { actor } = userInfo;
    if (actor.role === "user") {
      toast.error("You need to sign in as an Admin to access this resource!");
      return <Redirect to='/' />;
    } else {
      console.log(
        "userInfo",
        userInfo?.token && userInfo?.actor.role === "admin"
      );
      return userInfo?.token && userInfo?.actor.role === "admin" ? (
        <Route {...rest} />
      ) : (
        <Redirect to='/' />
      );
    }
  }

  toast.error("You need to sign in as an Admin to access this resource!");
  return <Redirect to='/' />;
};

export default PrivateAdminRoute;
