import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.button`
  padding: 4px 20px;
  cursor: pointer;
`;

const Button = ({ text, children, onClick }) => {
  return <Wrapper onClick={onClick}>{text || children}</Wrapper>;
};

export default Button;
