import { createSlice } from "@reduxjs/toolkit";

const isClientSlice = createSlice({
  name: "isClient",
  initialState: { isClient: true },
  reducers: {
    setIsClient(state, action) {
      state.isClient = action.payload;
    },
    clearIsClient(state) {
      state.isClient = true;
    },
  },
});

export const { setIsClient, clearIsClient } = isClientSlice.actions;
export default isClientSlice.reducer;
