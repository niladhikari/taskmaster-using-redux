import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export default store;
