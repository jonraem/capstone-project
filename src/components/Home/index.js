import React, { Component } from 'react';

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img alt='Security Camera' src={require('../../assets/security-camera.png')}/>
        <div className="Home-intro">
          <h1>This is the VSS Video Surveillance System.</h1>
          <p>The latest technology in home surveillance systems. Try it and believe it.</p>
        </div>
      </div>
    );
  }
}

export default Home;
