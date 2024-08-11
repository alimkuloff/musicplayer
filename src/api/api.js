import { getToken } from "./getToken";

export const fetchFeaturedPlaylists = async () => {
  const token = localStorage.getItem("spotify_access_token") || await getToken();

  const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data.playlists.items;
};

export const fetchPlaylistDetails = async (playlistId) => {
  const token = localStorage.getItem("spotify_access_token") || await getToken();

  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};
