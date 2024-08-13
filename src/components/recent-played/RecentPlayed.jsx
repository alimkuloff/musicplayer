import { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import { Loading } from '../../utils';

const RecentPlayed = () => {
  const { data, error, loading } = useFetch('browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists');
  const [visibleItems, setVisibleItems] = useState(4);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const items = data?.playlists?.items || [];

  const handleSeeAll = () => {
    setVisibleItems(items.length);
  };

  const truncateText = (text, maxChars) => {
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + '...';
    }
    return text;
  };

  return (
    <div className="p-5 bg-[#121212] text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recently Played</h2>
        {visibleItems < items.length && (
          <button className="text-white"
            onClick={handleSeeAll}
          >
            See All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="bg-[#181818] rounded-lg p-4 hover:scale-105 transform transition-transform duration-300">
            <img src={item.images[0].url} alt={item.name} className="rounded-md mb-4" />
            <div>
              <h3 className="text-lg font-medium mb-2">{truncateText(item.name, 15)}</h3>
              <p className="text-sm text-gray-400">{truncateText(item.description, 30)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlayed;