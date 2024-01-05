import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {}, userId: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    userData: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = {};
      state.userId = "";
    },
  },
});

export const { userData, setUserId, signOut } = userSlice.actions;
export default userSlice.reducer;
