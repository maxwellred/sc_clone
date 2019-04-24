import React, { Component } from 'react';
import PlayerControls from './PlayerControls';
import PlayerTrackInfo from './PlayerTrackInfo';
import './player.scss';

export default class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-container global-width-container flex">
          <PlayerControls />
          <PlayerTrackInfo />
        </div>
      </div>
    );
  }
}
