import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../.Store/Reducers/TaskReducer";

export const store = configureStore({
  reducer: {
    taskVault: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
