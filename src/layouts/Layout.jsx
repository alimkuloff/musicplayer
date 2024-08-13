import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import FriendActivity from '../components/friend-activity/FriendActivity';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-[220px] mr-[240px]">
          <Outlet className="flex-grow" />
        </div>
        <FriendActivity />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;