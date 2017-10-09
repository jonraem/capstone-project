import React, { Component } from 'react';

import './index.css';

class StreamPlayer extends Component {
  render() {
    return (
      <div className="StreamPlayer">
        <div className="StreamPlayer-view">
          {/* <img alt='Stream Thumbnail' src={require('../../assets/dog.png')} className="thumbnail" /> */}
          <img alt='Stream Thumbnail' src={require('../../assets/dog-tennis-olympics.jpg')} className="thumbnail" />
          <img alt='Tennis ball' src={require('../../assets/tennis-ball.png')} className="tennis-ball" />
        </div>
      </div>
    );
  }
}

export default StreamPlayer;
