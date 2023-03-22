import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateAdminRoute = ({ ...rest }) => {
  const infor = useSelector((state) => state.auth?.user?.data);

  if (infor?.token) {
    const { actor } = infor;
    if (actor.role === "user") {
      toast.error("You need to sign in as an Admin to access this resource!");
      return <Redirect to='/' />;
    } else {
      return infor?.token && actor.role === "admin" ? (
        <Route {...rest} />
      ) : (
        <Redirect to='/admin/dashboard' />
      );
    }
  }

  return <Route {...rest} />;
};

export default PrivateAdminRoute;
