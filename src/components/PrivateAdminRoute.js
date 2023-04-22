import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateAdminRoute = ({ children, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  console.log("rest--", rest);

  // const routeResult = useRoutes([
  //   {
  //     path: rest.path,
  //     element:
  //       userInfo?.token && userInfo?.actor.role === "admin" ? (
  //         children
  //       ) : (
  //         <Redirect to='/' />
  //       ),
  //   },
  // ]);

  // return routeResult;

  if (userInfo?.token) {
    const { actor } = userInfo;
    if (actor.role === "user") {
      toast.error("You need to sign in as an Admin to access this resource!");
      return <Redirect to='/' />;
    } else {
      console.log("hello");
      return <Route {...rest}>{children}</Route>;
      // return  ? (
      //   <Route {...rest} />
      // ) : (
      //   <Navigate to='/admin/dashboards' />
      // );
    }
  }

  return null;

  // toast.error("You need to sign in as an Admin to access this resource!");
  // return <Navigate to='/' />;
};

export default PrivateAdminRoute;
