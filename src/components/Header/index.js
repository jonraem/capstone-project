import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class VideoPlayer extends Component {
  render() {
    return (
      <header className="App-header">
        <Link to="/"><div className="header-logo">{'VSS'}</div></Link>
        <div className="header-buttons">
          <Link to="/video-player" className="header-button"><i className="material-icons">videocam</i> <span>VIDEO</span></Link>
          <Link to="/stream-player" className="header-button"><i className="material-icons">video_library</i> <span>STREAM</span></Link>
        </div>
      </header>
    );
  }
}

export default VideoPlayer;
