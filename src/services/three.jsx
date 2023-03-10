import { createSlice } from "@reduxjs/toolkit";

const threeSlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
    route:"Home",
    rotation:0
  },
  reducers: {
    openMenu: (state) => {
      state.menuOpen = true;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    triggerMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setRoute:(state,action)=>{
      state.route=action.payload.route;
    },
    initiateRef:(state,action)=>{
      state.refObject=action.payload;
    },
    changeRotation:(state,action)=>{
      state.rotation=action.payload
    }
  },
});

export const { openMenu, closeMenu, changeRotation,triggerMenu,setRoute,initiateRef } = threeSlice.actions;

export default threeSlice.reducer;