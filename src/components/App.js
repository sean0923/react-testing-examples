import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout';




class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
