import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {PlayCircleFilled, HeartOutlined, HeartFilled, DownloadOutlined, ClockCircleOutlined } from '@ant-design/icons';

import { Loading } from '../../utils';
import useFetch from '../../hooks/useFetch';
import { toggleLike } from '../../redux/slices/likesSlice';

const Playlist = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/playlists/${id}`);
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likes.likedSongs);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const playlist = data;

  if (!playlist || !playlist.images || !playlist.tracks) {
    return <div>Playlist data is unavailable.</div>;
  }

  const isLiked = (trackId) => likedSongs.includes(trackId);

  return (
    <div className="p-6 bg-[#121212] text-white min-h-screen">

      <div className="flex items-start mb-10">
        {playlist.images[0] && (<img src={playlist.images[0].url} alt={playlist.name} className="w-64 h-64 rounded-lg mr-8"/>)}
        <div>
          <h1 className="text-6xl font-bold mb-4">{playlist.name || 'No Name'}</h1>
          <p className="text-lg text-gray-400 mb-4">{playlist.description || 'No Description Available'}</p>
          <p className="text-sm text-gray-400">Made for{' '}
            <span className="font-semibold">{playlist.owner.display_name || 'Unknown'}</span>{' '} • {playlist.tracks.total} songs,{' '}
            {new Date(playlist.tracks.items.reduce((total, track) => total + track.track.duration_ms, 0)).toISOString().substr(11, 8)}{' '}min
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition">
          <PlayCircleFilled className="text-[30px]" />
        </button>
        <button className="text-white hover:text-gray-300 transition">
          <DownloadOutlined className="text-[30px]" />
        </button>
      </div>

      <div className="bg-[#181818] rounded-lg overflow-hidden shadow-lg">
        <table className="w-full text-left">
          <thead className="text-gray-400 border-b border-gray-700 bg-[#181818]">
            <tr>
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">TITLE</th>
              <th className="py-4 px-6">ALBUM</th>
              <th className="py-4 px-6 text-center">
                <ClockCircleOutlined className="align-middle" />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.items.map((item, index) => (
              <tr key={item.track.id} className="hover:bg-gray-700 transition duration-200">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    {item.track.album.images[0] && (
                      <img
                        src={item.track.album.images[0]?.url}
                        alt={item.track.name}
                        className="w-12 h-12 mr-4 rounded-md"
                      />
                    )}
                    <div>
                      <p className="text-white font-semibold">
                        {item.track.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.track.artists.map((artist) => artist.name).join(', ')}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-400">{item.track.album.name}</td>
                <td className="py-4 px-6 text-right text-gray-400 flex items-center justify-end space-x-4">
                  <span>{new Date(item.track.duration_ms).toISOString().substr(14, 5)}</span>
                  <button onClick={() => dispatch(toggleLike(item.track.id))}>
                    {isLiked(item.track.id) ? (
                      <HeartFilled className="text-green-500" />
                    ) : (
                      <HeartOutlined className="text-white hover:text-green-500" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Playlist;