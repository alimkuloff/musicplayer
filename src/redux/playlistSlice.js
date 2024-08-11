import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Featured Playlists olish uchun
export const fetchFeaturedPlaylists = createAsyncThunk(
  "playlist/fetchFeaturedPlaylists",
  async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("spotify_access_token")}`,
        },
      }
    );
    const data = await response.json();
    return data.playlists.items;
  }
);

// Playlist detallarini olish uchun
export const fetchPlaylistDetails = createAsyncThunk(
  "playlist/fetchPlaylistDetails",
  async (playlistId) => {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("spotify_access_token")}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    featuredPlaylists: [],
    playlistDetails: null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedPlaylists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedPlaylists.fulfilled, (state, action) => {
        state.featuredPlaylists = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchFeaturedPlaylists.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchPlaylistDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlaylistDetails.fulfilled, (state, action) => {
        state.playlistDetails = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPlaylistDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default playlistSlice.reducer;
