import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../components/Home';
import Header from '../../components/Header';
import VideoPlayer from '../../components/VideoPlayer';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="App-content">
          <Route exact path="/" component={Home} />
          <Route exact path="/video-player" component={VideoPlayer} />
          <Route exact path="/stream-player" component={VideoPlayer} />
        </main>
      </div>
    );
  }
}

export default App;
