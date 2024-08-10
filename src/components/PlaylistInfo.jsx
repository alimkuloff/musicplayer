import React, { useEffect, useState } from 'react';
import { fetchPlaylistInfo } from '../api/spotifyAPI';
import MusicPlayer from './MusicPlayer';

const PlaylistInfo = ({ playlistId }) => {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        const getPlaylist = async () => {
            const data = await fetchPlaylistInfo(playlistId);
            setPlaylist(data);
        };
        getPlaylist();
    }, [playlistId]);

    return (
        <div>
            {playlist && (
                <>
                    <h1>{playlist.name}</h1>
                    <div>
                        {playlist.tracks.items.map((item, index) => (
                            <div key={index}>
                                <p>{item.track.name}</p>
                                <MusicPlayer trackUrl={item.track.preview_url} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PlaylistInfo;
