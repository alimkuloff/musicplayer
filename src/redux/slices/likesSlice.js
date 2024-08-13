import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedSongs: JSON.parse(localStorage.getItem('likedSongs')) || [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const trackId = action.payload;
      if (state.likedSongs.includes(trackId)) {
        state.likedSongs = state.likedSongs.filter(id => id !== trackId);
      } else {
        state.likedSongs.push(trackId);
      }
      localStorage.setItem('likedSongs', JSON.stringify(state.likedSongs));
    },
  },
});

export const { toggleLike } = likesSlice.actions;

export default likesSlice.reducer;