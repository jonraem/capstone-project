import React, { Component } from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="VideoPlayer">
        <div className="VideoPlayer-view">
          {/* <img alt='Video Thumbnail' src={require('../../assets/dog.png')} className="thumbnail" /> */}
          <img alt='Video Thumbnail' src={require('../../assets/dog-tennis-olympics.jpg')} className="thumbnail" />
          <img alt='Tennis ball' src={require('../../assets/tennis-ball.png')} className="tennis-ball" />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
