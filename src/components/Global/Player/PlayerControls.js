import React, { Component } from 'react';

export default class PlayerControls extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      mute: false
    };
  }

  toggle = e => {
    let target = e.target.classList[0];
    this.setState(prev => ({
      [target]: !prev[target]
    }));
  };

  render() {
    return (
      <div className="player-controls-container flex">
        <ul className="pc-list flex-center">
          <li className="pc-list-item">
            <i className="fas fa-step-backward flex-center" />
          </li>
          <li className="pc-list-item" onClick={this.toggle}>
            {this.state.play ? (
              <i className="play fas fa-pause flex-center" />
            ) : (
              <i className="play fas fa-play flex-center" />
            )}
          </li>
          <li className="pc-list-item">
            <i className="fas fa-step-forward flex-center" />
          </li>
          <li className="pc-list-item">
            <i className="fas fa-random flex-center" />
          </li>
          <li className="pc-list-item pc-list-item-trackprogress" />
          <li className="pc-list-item" onClick={this.toggle}>
            {this.state.mute ? (
              <i className="mute fas fa-volume-mute flex-center" />
            ) : (
              <i className="mute fas fa-volume-up flex-center" />
            )}
          </li>
        </ul>
      </div>
    );
  }
}
