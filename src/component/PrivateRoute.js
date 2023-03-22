import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateRoute = ({ ...rest }) => {
  const infor = useSelector((state) => state.auth?.user?.data);

  if (infor) {
    return <Route {...rest} />;
  }

  toast.error("You need to sign in to view profile");
  return <Redirect to='/signin' />;
};

export default PrivateRoute;
