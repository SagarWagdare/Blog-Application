import { createSlice } from "@reduxjs/toolkit";

const initialState = {user:{},userId:""}
export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    setUserId:(state,action)=>{
      state.userId = action.payload
    },
      userProfile:(state,action)=>{
     state.user = action.payload
      }
  }
})

export const {userProfile,setUserId} = userSlice.actions;
export default userSlice.reducer;