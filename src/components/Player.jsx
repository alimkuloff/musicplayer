import React, { useRef } from "react";

const Player = ({ track }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div className="player">
      <img src={track.album.images[0].url} alt={track.name} />
      <h3>{track.name}</h3>
      <p>{track.artists[0].name}</p>
      <audio ref={audioRef} src={track.preview_url} />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
};

export default Player;
