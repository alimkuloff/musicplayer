import { configureStore } from '@reduxjs/toolkit';
import audioReducer from '../slices/audioSlice';
import likesReducer from '../slices/likesSlice';

export const store = configureStore({
  reducer: {
    audio: audioReducer,
    likes: likesReducer,
  },
});

export default store;