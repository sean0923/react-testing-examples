import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid black;
  height: 200px;
`;

const H2 = styled.h2`font-size: 60px;`;

const Number = ({ number }) => {
  return (
    <Wrapper>
      <H2>{number}</H2>
    </Wrapper>
  );
};

export default Number;
