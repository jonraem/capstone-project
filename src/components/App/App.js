import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

import { createBucket, copyObject } from '../../utils/aws';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => createBucket()}>Create Bucket in S3</button>
        <button onClick={() => copyObject()}>Copy picture from S3</button>
      </div>
    );
  }
}

export default App;
