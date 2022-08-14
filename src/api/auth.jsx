import {
  loginError,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerError,
} from "../features/auth/authSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const loginUser = async (user: any, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post("http://localhost:3001/login", user);
    dispatch(loginSuccess(data));
    toast.success("Đăng nhập thành công");
    navigate("/");
  } catch (error) {
    dispatch(loginError());
    toast.error("Đăng nhập không thành công");
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:3001/register", user);
    dispatch(registerSuccess());
    toast.success("Đăng ký thành công");
    navigate("/login");
  } catch (error) {
    dispatch(registerError());
    toast.error("Đăng ký không thành công");
  }
};
