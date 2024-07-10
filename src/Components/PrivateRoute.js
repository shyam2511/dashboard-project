/* eslint-disable */
import { useNavigate, Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return user ? <Outlet /> : null;
};

export default PrivateRoute;
