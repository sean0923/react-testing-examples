import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Number from '../common/Number';
import UpAndDownButtons from '../common/UpAndDownButtons';
import Title from '../common/Title';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`width: 200px;`;

class Redux extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <React.Fragment>
        <Title text="Redux Counter" />
        <Wrapper>
          <Number number={counter.number} />
          <UpAndDownButtons increment={increment} decrement={decrement} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer,
  };
};

const { increment, decrement } = actions;

export default connect(mapStateToProps, { increment, decrement })(Redux);
