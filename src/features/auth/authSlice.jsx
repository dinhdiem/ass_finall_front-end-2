import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const login = createAsyncThunk("auth/login", async (dataLogin: any) => {
  const { data } = await login(dataLogin);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isLogin: null,
      isFetching: false,
      error: false,
      dontLogin: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    logout: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.isLogin = action.payload;
      state.login.dontLogin = true;
      state.login.error = false;
    },
    loginError: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerError: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    logoutStart: (state) => {
      state.logout.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.login.isLogin = null;
    },
    logoutError: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutStart,
  logoutError,
} = authSlice.actions;

export default authSlice.reducer;
