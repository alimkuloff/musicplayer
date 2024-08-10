import React from 'react';

const MusicPlayer = ({ trackUrl }) => {
    const audio = new Audio(trackUrl);

    const playMusic = () => {
        audio.play();
    };

    const pauseMusic = () => {
        audio.pause();
    };

    return (
        <div>
            <button onClick={playMusic}>Play</button>
            <button onClick={pauseMusic}>Pause</button>
        </div>
    );
};

export default MusicPlayer;
