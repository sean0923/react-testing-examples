import React from 'react';
import styled from 'styled-components';

import Navbar from './header/Navbar';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  background-color: var(--color-arsenic);
  /* padding: 20px 0; */
  line-height: 1;
  height: 60px;
`;

const Container = styled.div`
  width: var(--width-app);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const Text = styled.h2`
  color: #fff;
  font-weight: normal;
  display: grid;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Text>Testing Examples</Text>
        <Navbar />
      </Container>
    </Wrapper>
  );
};

export default Header;
