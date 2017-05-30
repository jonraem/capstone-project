import React, { Component } from 'react';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { createBucket, copyObject } from '../../utils/aws';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-logo">{'VSS'}</div>
          <div className="header-buttons">
            <button><i className="material-icons">videocam</i></button>
            <button><i className="material-icons">video_library</i></button>
          </div>
        </div>
        <div className="App-content">
          <VideoPlayer />
          <button onClick={() => createBucket()}>Create Bucket in S3</button>
          <button onClick={() => copyObject()}>Copy picture from S3</button>
        </div>
      </div>
    );
  }
}

export default App;
