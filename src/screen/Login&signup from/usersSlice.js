import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user))
    },

    logout: (state) =>{
        state.user = null;
        localStorage.setItem("user", JSON.stringify(state.user))
    }
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;