import React, { Component } from 'react';
import WeeklyPlaylist from './WeeklyPlaylist';
import WeeklyImg from './WeeklyImg';
import WeeklyLinks from './WeeklyLinks';
import albumart from '../../assets/album_art.png';
import './weekly.scss';

export default class WeeklyParent extends Component {
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

  render() {
    return (
      <ul className="weekly-container flex">
        <li className="parent-li">
          <div className="section-text-container">
            <h2>SoundCloud Weekly</h2>
            <p>All of SoundCloud. Just for you.</p>
          </div>
          <div className="contents-container flex gradient">
            <WeeklyImg albumart={this.state.albumart} />
            <WeeklyPlaylist playlist={this.state.playlist} />
          </div>
          <WeeklyLinks />
        </li>
      </ul>
    );
  }
}
