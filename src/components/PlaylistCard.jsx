import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="playlist-card">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <h3>{playlist.name}</h3>
      <p>{playlist.description}</p>
      <Link to={`/playlist/${playlist.id}`}>View Playlist</Link>
    </div>
  );
};

export default PlaylistCard;
