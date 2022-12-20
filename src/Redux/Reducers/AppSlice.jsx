import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isMobileNavOpen: false,
  favorites: [],
  activeSong: {},
  currentSongs: [],
  isPlaying: false,
  isActive: false,
  currentSongIndex: 0,
  shuffle: false,
  repeat: false,
};

const appSlice = createSlice({
  initialState,
  name: "musicStore",
  reducers: {
    setShuffle(state) {
      state.shuffle = !state.shuffle;
    },
    setRepeat(state) {
      state.repeat = !state.repeat;
    },
    openMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    playPause(state, action) {
      state.isPlaying = action.payload;
    },
    setActiveSong(state, action) {
      state.activeSong = action.payload.song;

      // if (action.payload?.data?.tracks?.hits) {
      //   state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }

      state.currentSongIndex = action.payload.i;
      state.isActive = true;
    },
  },
});

export default appSlice.reducer;
export const {
  openMobileNav,
  setRepeat,
  setShuffle,
  addFavorite,
  setActiveSong,
  playPause,
} = appSlice.actions;
