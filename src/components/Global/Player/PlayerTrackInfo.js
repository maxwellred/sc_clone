import React, { Component } from 'react';
import AlbumArt from '../../../assets/album_art.png';
export default class PlayerTrackInfo extends Component {
  render() {
    return (
      <div className="player-trackinfo-container flex">
        <div className="pt-img-container">
          <img src={AlbumArt} alt="Current Track Album Art" />
        </div>
        <div className="pt-trackinfo flex-center">
          <p>Kill Paris</p>
          <p>Illenium - Only One ft. Nina Sung (Kill Paris Remix)</p>
        </div>
        <div className="pt-actions flex">
          <i className="fas fa-heart flex-center" />
          <i className="fas fa-list-ul flex-center" />
        </div>
      </div>
    );
  }
}
