import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetails } from "../redux/playlistSlice";
import { getToken } from "../api/getToken";

const PlaylistInfo = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const { playlistDetails, status } = useSelector((state) => state.playlist);

  useEffect(() => {
    const initialize = async () => {
      await getToken();  // Token olish va localStorage'ga saqlash
      if (playlistId) {
        dispatch(fetchPlaylistDetails(playlistId));
      }
    };

    initialize();
  }, [dispatch, playlistId]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="playlist-info">
      {playlistDetails && (
        <>
          <h2>{playlistDetails.name}</h2>
          <p>{playlistDetails.description}</p>
          <ul>
            {playlistDetails.tracks.items.map((track) => (
              <li key={track.track.id}>
                {track.track.name} - {track.track.artists[0].name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PlaylistInfo;
