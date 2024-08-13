import { useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loading } from '../utils';
import Layout from '../layouts/Layout';

const Home = lazy(() => import('../routes/home/Home'));
const LikedSongs = lazy(() => import('./liked/LikedSongs'));
const Playlist = lazy(() => import('../routes/playlist/Playlist'));

const RouteController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Suspense fallback={<Loading />}><Home /></Suspense> },
        { path: 'likedSongs', element: <Suspense fallback={<Loading />}><LikedSongs /></Suspense> },
        { path: 'playlist/:id', element: <Suspense fallback={<Loading />}><Playlist /></Suspense> },
      ],
    },
  ]);
};

export default RouteController;