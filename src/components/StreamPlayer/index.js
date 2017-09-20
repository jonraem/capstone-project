import React, { Component } from 'react';

import { createBucket, copyObject } from '../../utils/aws';
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
        <button onClick={() => createBucket()}>Create Bucket in S3</button>
        <button onClick={() => copyObject()}>Copy picture from S3</button>
      </div>
    );
  }
}

export default StreamPlayer;
