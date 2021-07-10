import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "jo",
  post: "ko",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changePostData: (state, action) => {
      const { label, value } = action.payload;
      state[label] = value;
    },
  },
});

export const { changePostData } = postSlice.actions;
export default postSlice.reducer;
