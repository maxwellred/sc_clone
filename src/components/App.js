import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './UHF/Menu';
// import Footer from './UHF/Footer';
import WeeklyParent from './WeeklyPlaylist/WeeklyParent';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menu />
          <div className="breakpoint-width-container">
            <div className="app">
              <Route exact path="/" component={WeeklyParent} />
            </div>
          </div>
          {/* <Footer /> */}
        </Fragment>
      </HashRouter>
    );
  }
}
