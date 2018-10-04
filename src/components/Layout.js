import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import SwitchAndRoutes from './layout/SwitchAndRoutes';

const Wrapper = styled.div`
  & > div:not(:first-child) {
    width: var(--width-app);
    margin: 0 auto;
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <SwitchAndRoutes />
    </Wrapper>
  );
};

export default Layout;
