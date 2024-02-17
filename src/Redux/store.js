import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/tasksSlice";
import userSlice from "./features/User/userSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
});

export default store;
