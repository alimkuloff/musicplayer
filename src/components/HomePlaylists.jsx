import React, { useEffect, useState } from 'react';
import { fetchCategoryPlaylists } from '../api/spotifyAPI';

const HomePlaylists = ({ categoryId, title }) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getPlaylists = async () => {
            const data = await fetchCategoryPlaylists(categoryId);
            setPlaylists(data);
        };
        getPlaylists();
    }, [categoryId]);

    return (
        <div>
            <h2>{title}</h2>
            <div className="playlist-container">
                {playlists.map(playlist => (
                    <div key={playlist.id} className="playlist-card">
                        <img src={playlist.images[0].url} alt={playlist.name} />
                        <p>{playlist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePlaylists;
