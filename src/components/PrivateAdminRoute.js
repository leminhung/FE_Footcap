import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const displayErr = async () => {
  toast.error("You need to sign in as an Admin to access this resource!");
  window.location.href = "/signin";
};

const PrivateAdminRoute = async ({ ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  if (userInfo?.token) {
    const { actor } = userInfo;
    if (actor.role === "user") {
      await displayErr();
    } else {
      return userInfo?.token && userInfo?.actor.role === "admin" ? (
        <Route {...rest} />
      ) : (
        setTimeout(() => {
          window.location.href = "/signin";
        }, 0.5)
      );
    }
  }

  await displayErr();
};

export default PrivateAdminRoute;
