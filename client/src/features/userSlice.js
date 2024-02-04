import { createSlice } from "@reduxjs/toolkit";

const initialState = {userToken:false, user: {}, userId: "",allBlogs:[],filterValue:"Filter Category" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      state.filterValue = "Filter Category";
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    userData: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.userToken = false;
      state.user = {};
      state.userId = "";
      state.allBlogs=[]
      state.filterValue = "";
    },
    filter:(state,action)=>{
      state.filterValue = action.payload
    },
    setBlog:(state,action)=>{
      state.allBlogs.push(action.payload)
    },
    deleteBlog:(state,action)=>{
      const blogIdDelete = action.payload;
      state.allBlogs.filter(blog => blog.id !== blogIdDelete)
    }
  },
});

export const { userData, setUserId, signOut,filter ,setUserToken,setBlog,deleteBlog} = userSlice.actions;
export default userSlice.reducer;
