import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Number from '../common/Number';
import UpAndDownButtons from '../common/UpAndDownButtons';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`width: 200px;`;

class Home extends Component {
  state = { number: 0 };

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <Wrapper>
        <Number number={this.state.number} />
        <UpAndDownButtons increment={this.increment} decrement={this.decrement} />
      </Wrapper>
    );
  }
}

export default Home;
