import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { Loading } from '../../utils';
import { playTrack, pauseTrack, resumeTrack } from '../../redux/slices/audioSlice';

const TopMixes = () => {
  const { data, error, loading } = useFetch('browse/categories/toplists/playlists');
  const [visibleItems, setVisibleItems] = useState(4);
  const dispatch = useDispatch();
  const { currentTrack, isPlaying } = useSelector(state => state.audio);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => dispatch(pauseTrack());
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current) {
          dispatch(setProgress(audioRef.current.currentTime));
        }
      };
    }
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const items = data?.playlists?.items || [];

  const handleSeeAll = () => {
    setVisibleItems(items.length);
  };

  const truncateText = (text, maxChars) => {
    return text.length > maxChars ? text.slice(0, maxChars) + '...' : text;
  };

  const handleCardClick = (id, previewUrl) => {
    if (currentTrack === id) {
      if (isPlaying) {
        dispatch(pauseTrack());
        audioRef.current.pause();
      } else {
        dispatch(resumeTrack());
        audioRef.current.play();
      }
    } else {
      dispatch(playTrack(id));
      if (audioRef.current) {
        audioRef.current.src = previewUrl;
        audioRef.current.play();
      }
    }
    navigate(`/playlist/${id}`);
  };

  return (
    <div className="p-5 bg-[#121212] text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Top Mixes</h2>
        {visibleItems < items.length && (
          <button className="text-white" onClick={handleSeeAll}>
            See All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="bg-[#181818] rounded-lg p-4 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            onClick={() => handleCardClick(item.id, item.preview_url)}
          >
            <img src={item.images[0]?.url} alt={item.name} className="rounded-md mb-4" />
            <div>
              <h3 className="text-lg font-medium mb-2">{truncateText(item.name, 15)}</h3>
              <p className="text-sm text-gray-400">{truncateText(item.description, 30)}</p>
            </div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default TopMixes;
