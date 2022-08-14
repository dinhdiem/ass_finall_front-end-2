import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getUserStart: (state) => {
      state.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
      state.error = false;
    },
    getUserError: (state) => {
      state.isFetching = false;
      state.isFetching = true;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserError } = userSlice.actions;

export default userSlice.reducer;
