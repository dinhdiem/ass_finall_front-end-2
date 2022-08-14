import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useDispatch } from "react-redux";
// import { useFormik } from "formik";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className="flex justify-center items-center py-[210px] px-[320px] bg-[#E5E5E5] w-full overflow-y-hidden">
      <div className="w-[550px] h-[300px] bg-[#FFFFFF] rounded-xl grid grid-cols-[70%,1fr]">
        <form onSubmit={handleLogin}>
          <div className="px-5 pt-10">
            <div className="rounded">
              <label>Email:</label>
              <br />
              <input
                type="text"
                className="border-2 w-full p-[3px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="rounded">
              <label>Password:</label>
              <br />
              <input
                type="password"
                className="border-2 w-full p-[3px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-red-500 mt-2 h-[30px] text-[13px] text-white rounded">
              Đăng nhập
            </button>
            <NavLink to="/register">
              <div className="flex justify-end text-[13px] cursor-pointer underline">
                Đăng kí tài khoản
              </div>
            </NavLink>
            <span className="flex justify-center my-2">
              Hoặc đăng nhập bằng
            </span>
            <div className="flex justify-center space-x-2">
              <div className="text-2xl border rounded-full p-1 text-blue-700">
                <FaFacebook />
              </div>
              <div className="text-2xl border rounded-full p-1">
                <FcGoogle />
              </div>
            </div>
          </div>
        </form>
        <div className="bg-gray-100 flex justify-center items-center">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[100px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
