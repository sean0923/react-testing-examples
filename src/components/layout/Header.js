import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--color-arsenic);
  padding: 20px 0;
`;

const Container = styled.div`
  width: var(--width-app);
  margin: 0 auto;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <div>Header</div>
        <div>Header</div>
        <div>Header</div>
      </Container>
    </Wrapper>
  );
};

export default Header;
