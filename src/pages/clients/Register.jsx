import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [sdt, setSdt] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSDT, setErrorSDT] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      sdt: sdt,
      password: password,
      role: false,
    };
    if (errorEmail === newUser.email) {
      return setErrorEmail(!errorEmail);
    }
    if (errorSDT === newUser.sdt) {
      return setErrorSDT(!errorSDT);
    }
    if (errorPassword === newUser.password) {
      return setErrorPassword(!errorPassword);
    }
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div className="flex justify-center items-center py-[185px] px-[320px] bg-[#E5E5E5] w-full">
      <div className="w-[550px] h-[400px] bg-[#FFFFFF] rounded-xl grid grid-cols-[70%,1fr]">
        <form onSubmit={handleRegister}>
          <div className="px-5 pt-10">
            <div className="rounded">
              <label>Email:</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                className="border-2 w-full p-[3px]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errorEmail && (
                <div className="text-red-600">Không được để trống</div>
              )}
            </div>
            <div className="rounded">
              <label>SDT:</label>
              <br />
              <input
                type="number"
                className="border-2 w-full p-[3px]"
                onChange={(e) => setSdt(e.target.value)}
              />
              {errorSDT && (
                <div className="text-red-600">Không được để trốn</div>
              )}
            </div>
            <div className="rounded">
              <label>Password:</label>
              <br />
              <input
                type="password"
                className="border-2 w-full p-[3px]"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorPassword && (
                <div className="text-red-600">Không được để trống</div>
              )}
            </div>
            <button className="w-full bg-red-500 mt-2 h-[30px] text-[13px] text-white rounded">
              Đăng ký
            </button>
            <NavLink to="/login">
              <div className="flex justify-end text-[13px] cursor-pointer underline">
                Đã có tài khoản
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

export default Register;
