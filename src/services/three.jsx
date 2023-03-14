import { createSlice } from "@reduxjs/toolkit";

const threeSlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
    route: "Home",
    rotation: 0,
    current: 0,
    page: null,
    pageTransition: null,
    currentTransition: 0,
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
    setRoute: (state, action) => {
      state.route = action.payload.route;
      // if(action.payload.route==="Slider"){
      //   state.rotation= -((0) * (Math.PI / 4) + Math.PI / 8);
      // state.current=0;
      // }
    },
    initiateRef: (state, action) => {
      state.refObject = action.payload;
    },
    changeRotation: (state, action) => {
      state.rotation = action.payload;
    },
    currentVid: (state, action) => {
      state.rotation = -(action.payload * (Math.PI / 4) + Math.PI / 8);
      state.current = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    transitionEvent: (state, action) => {
      state.pageTransition = action.payload;
    },
    transitionEventCurrent: (state, action) => {
      state.currentTransition = action.payload;
    },
  },
});

export const {
  openMenu,
  closeMenu,
  transitionEvent,
  changeRotation,
  currentVid,
  triggerMenu,
  setRoute,
  initiateRef,
  changePage,
  transitionEventCurrent,
} = threeSlice.actions;

export default threeSlice.reducer;
