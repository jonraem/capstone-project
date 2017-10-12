import React, { Component } from 'react';

import { getFilesLength, getVideoPath } from '../../utils/helpers.js';
import './index.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.getPreviousVideo = this.getPreviousVideo.bind(this);
    this.getNextVideo = this.getNextVideo.bind(this);
    this.evaluateIndex = this.evaluateIndex.bind(this);
    this.state = {
      index: 0,
      video: getVideoPath(0)
    }
  }

  getPreviousVideo() {
    const { index } = this.state;
    if (this.evaluateIndex('previous')) {
      const newIndex = index - 1;
      this.setState({ index: newIndex, video: getVideoPath(newIndex) });
    }
  }

  getNextVideo() {
    const { index } = this.state;
    if (this.evaluateIndex('next')) {
      const newIndex = index + 1;
      this.setState({ index: newIndex, video: getVideoPath(newIndex) });
    }
  }

  evaluateIndex(direction) {
    const { index } = this.state;

    if (direction === 'previous' && index - 1 >= 0) {
      return true;
    }
    if (direction === 'next' && index + 1 < getFilesLength()) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="VideoPlayer">
        <div className="VideoPlayer-view">
          <video
            src={`http://vss2017.oss-cn-shanghai.aliyuncs.com/${this.state.video}`}
            type="video/mp4"
            width="640"
            height="480"
            autoPlay
            controls />
          <div className="VideoPlayer-button_row">
            <span onClick={this.getPreviousVideo}>
              <i className={`material-icons prev ${this.evaluateIndex('previous') ? '' : 'disabled'}`}>skip_previous</i>
            </span>
            <span onClick={this.getNextVideo}>
              <i className={`material-icons next ${this.evaluateIndex('next') ? '' : 'disabled'}`}>skip_next</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
