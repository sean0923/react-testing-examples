import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

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
      <StyledLink to="/" exact activeClassName="active">
        Home
      </StyledLink>

      <StyledLink to="async" exact activeClassName="active">
        Async
      </StyledLink>

      <StyledLink to="/sub-routes" exact activeClassName="active">
        Sub Routes
      </StyledLink>

      <StyledLink to="redux" exact activeClassName="active">
        Redux
      </StyledLink>

      <StyledLink to="react-context" exact activeClassName="active">
        React Context
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;
