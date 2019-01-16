import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Title from '../common/Title';
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
      <React.Fragment>
        <Title text="Local State Counter" />
        <Wrapper>
          <Number number={this.state.number} />
          <UpAndDownButtons increment={this.increment} decrement={this.decrement} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Home;
