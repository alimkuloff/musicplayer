import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../../redux/slices/likesSlice'; 
import { HeartFilled, HeartOutlined, PlayCircleFilled } from '@ant-design/icons';


const fetchSongDetailsByIds = async (ids) => {
  try {
    const response = await fetch(`/api/songs?ids=${ids.join(',')}`); 
    const data = await response.json();
    return data.songs; 
  } catch (error) {
    console.error('Failed to fetch songs:', error);
    return [];
  }
};

const LikedSongs = () => {
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.likes.likedSongs); 
  const [songs, setSongs] = useState([]);

  
  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-800 text-white p-6">
      <div className="flex items-center space-x-6 mb-8">
        <div className="w-64 h-64 bg-gradient-to-b from-purple-500 to-blue-500 flex items-center justify-center rounded-lg">
          <HeartFilled className="text-white text-6xl" />
        </div>
        <div>
          <h1 className="text-6xl font-bold">Liked Songs</h1>
          <p className="text-gray-300 mt-2">davedirect3 • {songs.length} songs</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-8">
        <button className="bg-green-500 p-3 rounded-full text-white">
          <PlayCircleFilled className="text-[30px]" />
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">TITLE</th>
            <th className="py-2">ALBUM</th>
            <th className="py-2">DURATION</th>
            <th className="py-2">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id} className="hover:bg-gray-800 transition duration-200">
              <td className="py-2">{index + 1}</td>
              <td className="py-2 flex items-center">
                <img src={song.imgUrl} alt={song.name} className="w-12 h-12 mr-4 rounded-md" />
                <div>
                  <p className="text-white font-semibold">{song.name}</p>
                  <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
              </td>
              <td className="py-2 text-gray-400">{song.album}</td>
              <td className="py-2 text-right text-gray-400">{song.duration}</td>
              <td className="py-2">
                <button onClick={() => handleLike(song.id)}>
                  {likedSongs.includes(song.id) ? (
                    <HeartFilled className="text-green-500" />
                  ) : (
                    <HeartOutlined className="text-white" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LikedSongs;