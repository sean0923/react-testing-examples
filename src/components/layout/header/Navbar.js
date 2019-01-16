import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import { objKeys, getLink, getText } from '../../data/dataRoutes';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 16px;
  }

  .active {
    color: var(--color-cool-light);
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: rgba(255, 255, 255, .25);
  &:hover {
    /* color: var(--color-medium-gray); */
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      {[objKeys.Home, objKeys.Form, objKeys.Async, objKeys.Redux, objKeys.Context].map(objKey => {
        return (
          <StyledLink key={objKey} to={getLink({ objKey })} exact activeClassName="active">
            {getText({ objKey })}
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

export default Navbar;
