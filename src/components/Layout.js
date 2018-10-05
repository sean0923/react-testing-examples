import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import SwitchAndRoutes from './layout/SwitchAndRoutes';

const BodyWrapper = styled.div`
  width: var(--width-app);
  padding: 20px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <div>
      <Header />
      <BodyWrapper>
        <SwitchAndRoutes />
      </BodyWrapper>
    </div>
  );
};

export default Layout;
