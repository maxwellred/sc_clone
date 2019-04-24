import React, { Component } from 'react';
import PlaylistTracks from './PlaylistTracks';
import PlaylistImg from './PlaylistImg';
import PlaylistActions from './PlaylistActions';
import albumart from '../../assets/album_art.png';
import './playlist.scss';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumart,
      playlist: [
        {
          id: 0,
          artist: 'Daniel Allan',
          track: 'Glad To (feat. NAT)',
          playcount: 4040
        },
        {
          id: 1,
          artist: 'William Black',
          track: 'Daydreamer ft. AMIDY',
          playcount: 4040
        },
        {
          id: 2,
          artist: 'Minnesota',
          track: 'Another Night (Feat. Karra)',
          playcount: 4040
        },
        {
          id: 3,
          artist: 'LIONE',
          track: 'Purity Ring - Bodyache (LIONE Remix)',
          playcount: 4040
        },
        {
          id: 4,
          artist: 'tofu',
          track: 'Emmit Fenn - Oceans (tofu remix)',
          playcount: 4040
        },
        {
          id: 5,
          artist: 'Kill Paris',
          track: 'Illenium - Only One ft. Nina Sung (Kill Paris Remix)',
          playcount: 4040
        }
      ]
    };
  }

  // TODO: shouldnt be UL herr. should only be LI
  render() {
    return (
      <ul className="placeholder-container flex">
        <li className="playlist">
          <div className="pl-title-container">
            <h2>SoundCloud Weekly</h2>
            <p>All of SoundCloud. Just for you.</p>
          </div>
          <div className="pl-content-container flex gradient">
            <PlaylistImg albumart={this.state.albumart} />
            <PlaylistTracks playlist={this.state.playlist} />
          </div>
          <PlaylistActions />
        </li>
      </ul>
    );
  }
}
