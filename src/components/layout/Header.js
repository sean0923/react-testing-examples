import React from 'react';
import styled from 'styled-components';

import Navbar from './header/Navbar';

const Wrapper = styled.div`
  background-color: var(--color-arsenic);
  padding: 20px 0;
  line-height: 1;
`;

const Container = styled.div`
  width: var(--width-app);
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const Text = styled.h2`
  color: #fff;
  font-weight: normal;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Text>React Testing Library Examples</Text>
        <Navbar />
      </Container>
    </Wrapper>
  );
};

export default Header;
