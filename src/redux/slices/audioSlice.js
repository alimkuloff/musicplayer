// redux/slices/audioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  progress: 0,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    playTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
      state.progress = 0;
    },
    pauseTrack: (state) => {
      state.isPlaying = false;
    },
    resumeTrack: (state) => {
      state.isPlaying = true;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { playTrack, pauseTrack, resumeTrack, setProgress } = audioSlice.actions;

export default audioSlice.reducer;
