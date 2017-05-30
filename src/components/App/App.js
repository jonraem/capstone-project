import React, { Component } from 'react';

import { createBucket, copyObject } from '../../utils/aws';
import logo from '../../assets/logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='header-logo'>{'VSS'}</div>
        </div>
        <button onClick={() => createBucket()}>Create Bucket in S3</button>
        <button onClick={() => copyObject()}>Copy picture from S3</button>
      </div>
    );
  }
}

export default App;
