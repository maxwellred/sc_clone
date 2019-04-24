import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Global/Header/Header';
// import Footer from './Global/Footer/Footer';
import Playlist from './Playlist/Playlist';
import Player from './Global/Player/Player';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Fragment>
          <Header />
          <div className="global-width-container">
            <div className="app">
              <Route exact path="/" component={Playlist} />
            </div>
          </div>
          <Player />
          {/* <Footer /> */}
        </Fragment>
      </HashRouter>
    );
  }
}
