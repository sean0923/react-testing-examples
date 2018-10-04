import React from 'react';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
};

export default Layout;
