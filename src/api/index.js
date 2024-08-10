const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
const ACCESS_TOKEN = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN; // Access tokenni .env faylga qo'ying

export const fetchFeaturedPlaylists = async () => {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/browse/featured-playlists`, {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    });
    const data = await response.json();
    return data.playlists.items;
};

export const fetchCategoryPlaylists = async (categoryId) => {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/browse/categories/${categoryId}/playlists`, {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    });
    const data = await response.json();
    return data.playlists.items;
};

export const fetchPlaylistInfo = async (playlistId) => {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}`, {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    });
    const data = await response.json();
    return data;
};
