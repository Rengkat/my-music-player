import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isMobileNavOpen: false,
  favorites: [],
  activeSong: {},
  isPlaying: false,
  isActive: false,
  currentSongIndex: 0,
};

const appSlice = createSlice({
  initialState,
  name: "musicStore",
  reducers: {
    openMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      // if (action.payload?.data?.tracks?.hits) {
      //   state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }

      // state.currentIndex = action.payload.i;
      // state.isActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { openMobileNav, addFavorite, setActiveSong, playPause } =
  appSlice.actions;
