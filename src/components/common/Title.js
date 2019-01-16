import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.h1`
  font-size: 60px;
  margin-bottom: 16px;
`;

const Title = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Title;
