import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import isClientSlice from "./isClient/isClientSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    isClient: isClientSlice,
  },
});
