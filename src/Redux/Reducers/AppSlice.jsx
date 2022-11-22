import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isMobileNavOpen: false,
};

const appSlice = createSlice({
  initialState,
  name: "musicStore",
  reducers: {
    openMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
  },
});

export default appSlice.reducer;
export const { openMobileNav } = appSlice.actions;
