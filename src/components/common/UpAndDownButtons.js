import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const UpAndDownButtons = ({ increment, decrement }) => {
  return (
    <Wrapper>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
    </Wrapper>
  );
};

export default UpAndDownButtons;
