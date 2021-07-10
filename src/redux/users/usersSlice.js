import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addLoadedData: (state, action) => {
      state.value =
        state.value.length !== action.payload.length
          ? action.payload
          : state.value;
    },
  },
});

export const { addLoadedData } = usersSlice.actions;

export default usersSlice.reducer;
