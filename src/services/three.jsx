import { createSlice } from "@reduxjs/toolkit";

const threeSlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.menuOpen = true;
    },
    closeMenu: (state) => {
      state.menuOpen = true;
    },
    triggerMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    }
  },
});

export const { openMenu, closeMenu, triggerMenu } = threeSlice.actions;

export default threeSlice.reducer;