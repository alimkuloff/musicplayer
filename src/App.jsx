import React from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists';
import HomePlaylists from './components/HomePlaylists';
import PlaylistInfo from './components/PlaylistInfo';

const App = () => {
    return (
        <div className="App">
            <FeaturedPlaylists />
            <HomePlaylists categoryId="toplists" title="Your Top Mixes" />
            <HomePlaylists categoryId="0JQ5DAqbMKFHOzuVTgTizF" title="Made For You" />
            <HomePlaylists categoryId="0JQ5DAqbMKFQ00XGBls6ym" title="Recent Played" />
            <HomePlaylists categoryId="0JQ5DAqbMKFLVaM30PMBm4" title="Jump Back In" />
            <HomePlaylists categoryId="0JQ5DAqbMKFCbimwdOYlsl" title="Uniquely Yours" />
            {/* PlaylistInfo uchun playlistId kerak */}
            {/* <PlaylistInfo playlistId="playlist_id_here" /> */}
        </div>
    );
};

export default App;
