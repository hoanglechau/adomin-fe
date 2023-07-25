import { createSlice } from "@reduxjs/toolkit";

/**
 * @description This file is used to define the global state of the application. It is using Redux Toolkit to create the global state. The global state is used to store the mode of the application (dark or light)
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
