import React, { useEffect, useState } from 'react';
import { fetchFeaturedPlaylists } from '../api';

const FeaturedPlaylists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getPlaylists = async () => {
            const data = await fetchFeaturedPlaylists();
            setPlaylists(data);
        };
        getPlaylists();
    }, []);

    return (
        <div className="playlist-container">
            {playlists.map(playlist => (
                <div key={playlist.id} className="playlist-card">
                    <img src={playlist.images[0].url} alt={playlist.name} />
                    <p>{playlist.name}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturedPlaylists;
