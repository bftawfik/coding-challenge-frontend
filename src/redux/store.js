import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/usersSlice";
import postSlice from "./post/postSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    post: postSlice,
  },
});

export default store;
