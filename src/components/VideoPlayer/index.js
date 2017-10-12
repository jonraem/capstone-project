import React, { Component } from 'react';

import './index.css';

const videoUrl = `${process.env.REACT_APP_VIDEO_BASE_PATH + "1" + process.env.REACT_APP_VIDEO_SUFFIX}`;

class VideoPlayer extends Component {
  render() {
    return (
      <div className="VideoPlayer">
        <div className="VideoPlayer-view">
          <video src={'http://vss2017.oss-cn-shanghai.aliyuncs.com/vid.mp4'} type="video/mp4" width="640" height="480" controls />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
