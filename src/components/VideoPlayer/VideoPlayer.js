import React, { Component } from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="VideoPlayer">
        <img alt='Video Thumbnail' src={require('../../assets/dog.png')} />
        <p>Hello.</p>
      </div>
    );
  }
}

export default VideoPlayer;
