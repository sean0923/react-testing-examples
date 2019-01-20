import React, { Component } from 'react';

class SimpleForm extends Component {
  initialState = {
    firstName: '',
    lastName: '',
    yesOrNo: '',
  };

  state = this.initialState;

  // handleOnChange = e => {
  //   this.setState(prevState => ({ [e.target.name]: e.target.value }));
  // };

  handleOnChange = (e, name) => {
    e.persist();
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { firstName, lastName, yesOrNo } = this.state;

    return (
      <form>
        <label htmlFor="first name">First Name</label>
        <input
          id="first name"
          value={firstName}
          onChange={e => this.handleOnChange(e, 'firstName')}
          name="firstName"
          type="text"
          placeholder="First Name"
        />

        <label htmlFor="last name">Last Name</label>
        <input
          id="last name"
          value={lastName}
          onChange={e => this.handleOnChange(e, 'lastName')}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </form>
    );
  }
}

export default SimpleForm;
