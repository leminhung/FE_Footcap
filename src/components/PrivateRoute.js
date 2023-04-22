import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateRoute = ({ ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  console.log(userInfo?.token);

  if (userInfo?.token) {
    return <Route {...rest} />;
  }

  toast.error("You need to sign in to access this resource");
  return <Redirect to='/signin' />;
};

export default PrivateRoute;
