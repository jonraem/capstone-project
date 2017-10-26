import React, { Component } from 'react';

import './index.css';

const iframeUrl = process.env.REACT_APP_IFRAME_URL;

class StreamPlayer extends Component {
  render() {
    return (
      <div className="StreamPlayer">
        <div className="StreamPlayer-view">
          {/* <img alt='Stream Thumbnail' src={require('../../assets/dog.png')} className="thumbnail" /> */}
          {/* <img alt='Stream Thumbnail' src={require('../../assets/dog-tennis-olympics.jpg')} className="thumbnail" /> */}
          {/* <img alt='Tennis ball' src={require('../../assets/tennis-ball.png')} className="tennis-ball" /> */}
          <iframe src={iframeUrl} width="450" height="350">
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </div>
    );
  }
}

export default StreamPlayer;
