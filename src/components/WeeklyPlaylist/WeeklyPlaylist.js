import React from 'react';

export default function WeeklyPlaylist(props) {
  return (
    <ul className="playlist-container">
      {props.playlist.map(ele => {
        return (
          <li className="track flex" key={ele.id}>
            <div className="trackinfo">
              <span className="artist">{ele.artist} - </span>
              <span className="trackName">{ele.track}</span>
            </div>
            <div className="hover-btns-container">
              <ul className="hover-btns">
                <li>
                  <i className="fas fa-heart" />
                </li>
                <li>
                  <i className="fas fa-retweet" />
                </li>
                <li>
                  <i className="fas fa-share-square" />
                </li>
                <li>
                  <i className="fas fa-ellipsis-h" />
                </li>
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
