import React, { Component } from 'react';

import { createBucket, copyObject } from '../../utils/aws';
import './index.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="VideoPlayer">
        <div className="VideoPlayer-view">
          <img alt='Video Thumbnail' src={require('../../assets/dog-tennis-olympics.jpg')} className="thumbnail" />
          <img alt='Tennis ball' src={require('../../assets/tennis-ball.png')} className="tennis-ball" />
        </div>
        <button disabled onClick={() => createBucket()}>Create Bucket in S3</button>
        <button disabled onClick={() => copyObject()}>Copy picture from S3</button>
      </div>
    );
  }
}

export default VideoPlayer;
