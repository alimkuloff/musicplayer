import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedPlaylists } from "../redux/playlistSlice";
import PlaylistCard from "../components/PlaylistCard";
import { getToken } from "../api/getToken";

const Home = () => {
  const dispatch = useDispatch();
  const { featuredPlaylists, status } = useSelector((state) => state.playlist);

  useEffect(() => {
    const initialize = async () => {
      await getToken();  // Token olish va localStorage'ga saqlash
      dispatch(fetchFeaturedPlaylists());
    };

    initialize();
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="home">
      <h2>Featured Playlists</h2>
      <div className="playlist-grid">
        {featuredPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Home;
