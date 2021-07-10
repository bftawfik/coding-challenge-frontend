import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  selected: undefined,
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
    changeSelectedUser: (state, action) => {
      state.selected =
        state.selected === undefined || state.selected.id !== action.payload.id
          ? action.payload
          : state.selected;
    },
  },
});

export const { addLoadedData, changeSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;