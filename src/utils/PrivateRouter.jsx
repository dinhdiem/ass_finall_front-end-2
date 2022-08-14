import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: JSX.Element,
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const isLogin = useSelector((store) => store.auth.login.dontLogin);
  const user = useSelector((store) => store.auth.login.isLogin?.user.role);
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  if (!user) {
    return <Navigate to="/" />;
  }
  return props.children;
};

export default PrivateRouter;
